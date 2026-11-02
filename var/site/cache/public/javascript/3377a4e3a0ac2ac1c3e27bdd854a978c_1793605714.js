
(function () {
'use strict';
if (!window.customElements || window.customElements.get('exp-wt')) {
return;
}
var DEVICE = 'expwt.device';
var CACHE = 'expwt.cache';
var UNSENT = 'expwt.unsent';
var THEME = 'expwt.theme';
var SVG = 'http://www.w3.org/2000/svg';
var canAdopt = 'adoptedStyleSheets' in Document.prototype && 'replaceSync' in CSSStyleSheet.prototype;
var EditState = {
KEY: 'expwt.editing',
read: function (storage) {
try { return !!storage && storage.getItem(EditState.KEY) === '1'; } catch (e) { return false; }
},
write: function (storage, on) {
try {
if (on) { storage.setItem(EditState.KEY, '1'); } else { storage.removeItem(EditState.KEY); }
} catch (e) {  }
return !!on;
},
pillShown: function (editing, open) { return !!editing && !open; },
useSheet: function (open, overlay) { return !!overlay || !open; },
bottomRoom: function (viewportHeight, tops, from) {
var room = 0;
var least = viewportHeight * (from === undefined ? 0.2 : from);
(tops || []).forEach(function (top) {
if (top > least && top < viewportHeight) { room = Math.max(room, viewportHeight - top); }
});
return Math.round(room);
},
unsaved: function (storage, node, now) {
if (!storage || !node) { return false; }
try {
for (var i = 0; i < storage.length; i++) {
var k = storage.key(i);
if (k && k.indexOf('expwt.copy.') === 0) {
var c = JSON.parse(storage.getItem(k) || 'null');
if (c && c.node === node && now - c.at < 14 * 86400000) { return true; }
}
}
} catch (e) { return false; }
return false;
}
};
window.ExpwtEditState = EditState;
var Keys = {
ACTIONS: ['open', 'save', 'inline', 'help'],
DEFAULTS: { open: 'E', save: 'D', inline: 'K', help: 'H' },
RESERVED: 'ABILMNST',
map: function (openDefault, mine) {
var out = Object.assign({}, Keys.DEFAULTS, { open: openDefault || 'E' });
Object.keys(mine || {}).forEach(function (a) {
if (out[a] && Keys.check(a, mine[a], out) === '') { out[a] = String(mine[a]).toUpperCase(); }
});
return out;
},
check: function (action, key, map) {
var k = String(key || '').toUpperCase();
if (!/^[A-Z]$/.test(k)) { return 'format'; }
if (Keys.RESERVED.indexOf(k) >= 0) { return 'reserved'; }
var other = Object.keys(map || {}).filter(function (a) { return a !== action && map[a] === k; })[0];
return other || '';
},
pageKeys: function (doc) {
var out = [];
Array.prototype.forEach.call(doc.querySelectorAll ? doc.querySelectorAll('[accesskey]') : [], function (el) {
if (el.closest && el.closest('exp-wt')) { return; }
String(el.getAttribute('accesskey') || '').toUpperCase().split(/\s+/).forEach(function (k) { if (k.length === 1) { out.push(k); } });
});
return out;
},
match: function (e, map, page, mac) {
if (!e.altKey || !e.shiftKey || e.ctrlKey || e.metaKey) { return null; }
var m = /^(Key|Digit)([A-Z0-9])$/.exec(e.code || '');
if (!m || (page || []).indexOf(m[2]) >= 0) { return null; }
if (mac && e.target && e.target.matches && e.target.matches('input, textarea, select, [contenteditable], [contenteditable] *')) { return null; }
if (m[1] === 'Digit') { return m[2] === '0' ? null : 'panel:' + m[2]; }
return Object.keys(map).filter(function (a) { return map[a] === m[2]; })[0] || null;
}
};
window.ExpwtKeys = Keys;
var PanelOrder = {
always: ['page', 'me'],
apply: function (list, rule) {
if (!rule || !Array.isArray(rule.order) || !Array.isArray(rule.hidden)) { return list; }
var shown = list.filter(function (p) { return rule.hidden.indexOf(p.id) < 0 || PanelOrder.always.indexOf(p.id) >= 0; });
if (!shown.length) { shown = list.slice(); }
var byId = {};
shown.forEach(function (p) { byId[p.id] = p; });
var first = [];
rule.order.forEach(function (id) { if (byId[id] && first.indexOf(byId[id]) < 0) { first.push(byId[id]); } });
return first.concat(shown.filter(function (p) { return first.indexOf(p) < 0; }));
}
};
window.ExpwtPanelOrder = PanelOrder;
var PanelMemory = {
UNSENT_FOR: 10 * 60000,
pick: function (ids, wanted) {
return ids.indexOf(wanted) >= 0 ? wanted : (ids.length ? ids[0] : 'page');
},
keep: function (ids, wanted, complete) {
return complete ? PanelMemory.pick(ids, wanted) : wanted;
},
unsent: function (entry, user, now) {
if (!entry || typeof entry !== 'object' || !entry.state || typeof entry.state !== 'object') { return null; }
if (entry.user !== null && entry.user !== undefined && entry.user !== user) { return null; }
var at = parseInt(entry.at, 10) || 0;
return at <= now && now - at < PanelMemory.UNSENT_FOR ? entry.state : null;
},
onBoot: function (server, unsent, open) {
return Object.assign({}, server || {}, unsent || {}, { open: open });
}
};
window.ExpwtPanelMemory = PanelMemory;
var Brand = {
TOKENS: ['--a4-accent', '--a4-accent-hover', '--a4-accent-strong', '--a4-accent-press', '--a4-accent-text',
'--a4-accent-soft', '--a4-on-accent', '--a4-on-accent-hover', '--a4-ring'],
VALUE: /^(#[0-9a-f]{6}|rgba\(\d{1,3}, \d{1,3}, \d{1,3}, 0\.\d{1,2}\))$/,
block: function (tokens) {
if (!tokens || typeof tokens !== 'object') { return ''; }
return Brand.TOKENS.filter(function (k) { return Brand.VALUE.test(String(tokens[k] || '')); })
.map(function (k) { return k + ':' + tokens[k]; }).join(';');
},
css: function (brand) {
if (!brand || typeof brand !== 'object') { return ''; }
var light = Brand.block(brand.light);
var dark = Brand.block(brand.dark);
return (light ? ':host{' + light + '}' : '') + (dark ? ':host([data-theme="dark"]){' + dark + '}' : '');
},
name: function (brand, fallback) {
var n = brand && typeof brand.name === 'string' ? brand.name.trim() : '';
return n || fallback;
},
logo: function (brand) {
var l = brand && typeof brand.logo === 'string' ? brand.logo : '';
return /^(https:\/\/[A-Za-z0-9.-]+(:\d+)?)?\/(?!\/)[^"'<>\s\\]*$/.test(l) ? l : '';
}
};
window.ExpwtBrand = Brand;
function move(parent, node, before) {
if (typeof parent.moveBefore === 'function' && node.isConnected && parent.isConnected && node.getRootNode() === parent.getRootNode()) {
try { parent.moveBefore(node, before || null); return true; } catch (e) {  }
}
parent.insertBefore(node, before || null);
return false;
}
window.ExpwtMove = move;
move.keeps = typeof Element !== 'undefined' && typeof Element.prototype.moveBefore === 'function';
var RETRY_AFTER = [1000, 2000, 4000, 8000];
function fetchRetry(url, init) {
var attempt = 0;
return new Promise(function (resolve, reject) {
(function go() {
fetch(url, init).then(function (res) {
if ([502, 503, 504].indexOf(res.status) >= 0 && attempt < RETRY_AFTER.length) {
setTimeout(go, RETRY_AFTER[attempt++]);
return;
}
resolve(res);
}, function (err) {
if (attempt < RETRY_AFTER.length) {
setTimeout(go, RETRY_AFTER[attempt++]);
return;
}
reject(err);
});
})();
});
}
window.ExpwtFetchRetry = fetchRetry;
function session() {
try { return window.sessionStorage; } catch (e) { return null; }
}
function store(key, value) {
try {
if (value === undefined) {
return JSON.parse(window.localStorage.getItem(key) || 'null');
}
if (value === null) {
window.localStorage.removeItem(key);
} else {
window.localStorage.setItem(key, JSON.stringify(value));
}
} catch (e) {
return null;
}
return null;
}
function h(tag, attrs, children) {
var el = document.createElement(tag);
var name;
attrs = attrs || {};
for (name in attrs) {
if (!Object.prototype.hasOwnProperty.call(attrs, name) || attrs[name] === null || attrs[name] === undefined || attrs[name] === false) {
continue;
}
if (name.indexOf('on') === 0 && typeof attrs[name] === 'function') {
el.addEventListener(name.slice(2), attrs[name]);
} else if (name === 'text') {
el.textContent = attrs[name];
} else if (name === 'value') {
el.value = attrs[name];
} else if (name === 'checked') {
el.checked = !!attrs[name];
} else {
el.setAttribute(name, attrs[name] === true ? '' : String(attrs[name]));
}
}
(children || []).forEach(function (child) {
if (child === null || child === undefined || child === false) {
return;
}
el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
});
return el;
}
function icon(paths) {
var svg = document.createElementNS(SVG, 'svg');
svg.setAttribute('viewBox', '0 0 24 24');
svg.setAttribute('class', 'wt-tab-icon');
svg.setAttribute('aria-hidden', 'true');
svg.setAttribute('focusable', 'false');
paths.forEach(function (d) {
var p = document.createElementNS(SVG, 'path');
p.setAttribute('d', d);
p.setAttribute('fill', 'none');
p.setAttribute('stroke', 'currentColor');
p.setAttribute('stroke-width', '2');
p.setAttribute('stroke-linecap', 'round');
p.setAttribute('stroke-linejoin', 'round');
svg.appendChild(p);
});
return svg;
}
function clamp(n, min, max) {
return Math.max(min, Math.min(max, n));
}
var EDGES = ['left', 'right', 'top', 'bottom'];
var CLOCKWISE = ['right', 'bottom', 'left', 'top'];
function horizontalEdge(edge) {
return edge === 'top' || edge === 'bottom';
}
window.ExpwtExtensions = window.ExpwtExtensions || { panels: {} };
window.expwtRegister = window.expwtRegister || function (kind, id, fn) {
if (kind === 'panel' && typeof fn === 'function' && /^[a-z][a-z0-9_]{0,39}$/.test(String(id))) { window.ExpwtExtensions.panels[id] = fn; }
};
var pageSheet = null;
var VISITOR = 'expwt.visitor';
var Visitor = {
SIZES: [100, 125, 150, 200],
FLAGS: ['contrast', 'motion', 'font', 'underline'],
normalize: function (v) {
v = v && typeof v === 'object' ? v : {};
var out = { size: Visitor.SIZES.indexOf(Number(v.size)) >= 0 ? Number(v.size) : 100 };
Visitor.FLAGS.forEach(function (f) { out[f] = v[f] === true; });
return out;
},
isDefault: function (p) {
return p.size === 100 && !Visitor.FLAGS.some(function (f) { return p[f]; });
},
attrs: function (p) {
var flags = Visitor.FLAGS.filter(function (f) { return p[f]; });
return { text: p.size !== 100 ? String(p.size) : null, a11y: flags.length ? flags.join(' ') : null };
},
css: function (base) {
var px = base > 0 ? base : 16;
var A = 'html[data-expwt-a11y~="';
var dark = '--expwt-a11y-fg:#fff;--expwt-a11y-bg:#000;--expwt-a11y-link:#ffe14d;--expwt-a11y-focus:#7fdbff';
var keep = ':not(exp-wt):not(img):not(video):not(picture):not(canvas):not(iframe):not(svg):not(svg *)';
var icon = ':not(i):not([class*="icon"]):not([aria-hidden="true"])';
var glyph = ':not(exp-wt):not(code):not(pre):not(kbd):not(samp):not(i):not([class*="icon"]):not([class*="fa-"]):not([aria-hidden="true"])';
return ':root{--expwt-a11y-fg:#000;--expwt-a11y-bg:#fff;--expwt-a11y-link:#0a3bb8;--expwt-a11y-focus:#b3005f;'
+ '--expwt-a11y-font:Verdana,Tahoma,"Segoe UI",system-ui,sans-serif}'
+ 'html[data-exp-theme="dark"]{' + dark + '}'
+ '@media (prefers-color-scheme:dark){html:not([data-exp-theme="light"]){' + dark + '}}'
+ Visitor.SIZES.filter(function (s) { return s !== 100; }).map(function (s) {
return 'html[data-expwt-text="' + s + '"]{font-size:' + (Math.round(px * s) / 100) + 'px!important}';
}).join('')
+ A + 'contrast"],' + A + 'contrast"] body{background:var(--expwt-a11y-bg)!important;color:var(--expwt-a11y-fg)!important}'
+ A + 'contrast"] body :where(*' + keep + icon + '){color:var(--expwt-a11y-fg)!important;background-color:var(--expwt-a11y-bg)!important;'
+ 'background-image:none!important;border-color:currentColor!important;text-shadow:none!important;box-shadow:none!important}'
+ A + 'contrast"] body :is(i,[class*="icon"],[aria-hidden="true"]):not(exp-wt):not(svg *){color:var(--expwt-a11y-fg)!important;'
+ 'background-color:transparent!important;text-shadow:none!important;box-shadow:none!important}'
+ A + 'contrast"] body [aria-hidden="true"]:empty:not(i):not([class*="icon"]),'
+ A + 'contrast"] body [aria-hidden="true"]:empty:not(i):not([class*="icon"])::before,'
+ A + 'contrast"] body [aria-hidden="true"]:empty:not(i):not([class*="icon"])::after{background-color:var(--expwt-a11y-fg)!important}'
+ A + 'contrast"] :is(button,input,select,textarea){border:2px solid var(--expwt-a11y-fg)!important}'
+ A + 'contrast"] body a[href]:not(exp-wt):not(svg *),' + A + 'contrast"] body a[href] *' + keep + '{color:var(--expwt-a11y-link)!important}'
+ A + 'contrast"] :focus-visible{outline:3px solid var(--expwt-a11y-focus)!important;outline-offset:2px!important}'
+ 'html[data-expwt-a11y~="motion"]{scroll-behavior:auto!important}'
+ A + 'motion"] *,' + A + 'motion"] *::before,' + A + 'motion"] *::after{animation-duration:1ms!important;'
+ 'animation-iteration-count:1!important;animation-delay:0s!important;transition-duration:1ms!important;'
+ 'transition-delay:0s!important;scroll-behavior:auto!important}'
+ A + 'font"] body,' + A + 'font"] body *' + glyph + '{font-family:var(--expwt-a11y-font)!important;'
+ 'letter-spacing:.02em!important;word-spacing:.06em!important}'
+ A + 'font"] body :is(p,li,dd,dt,blockquote,td,th,figcaption){line-height:1.6!important}'
+ A + 'underline"] a[href]{text-decoration-line:underline!important;text-decoration-thickness:max(1px,.08em)!important;'
+ 'text-underline-offset:.18em!important}';
},
sheet: null,
base: 0,
apply: function (p) {
var root = document.documentElement;
var at = Visitor.attrs(p);
if (!canAdopt) { return; }
if (!Visitor.sheet && Visitor.isDefault(p)) { return; }
if (!Visitor.base) {
var had = root.getAttribute('data-expwt-text');
if (had) { root.removeAttribute('data-expwt-text'); }
Visitor.base = parseFloat(window.getComputedStyle(root).fontSize) || 16;
if (had) { root.setAttribute('data-expwt-text', had); }
}
if (!Visitor.sheet) {
Visitor.sheet = new CSSStyleSheet();
Visitor.sheet.replaceSync(Visitor.css(Visitor.base));
document.adoptedStyleSheets = document.adoptedStyleSheets.concat([Visitor.sheet]);
}
if (at.text) { root.setAttribute('data-expwt-text', at.text); } else { root.removeAttribute('data-expwt-text'); }
if (at.a11y) { root.setAttribute('data-expwt-a11y', at.a11y); } else { root.removeAttribute('data-expwt-a11y'); }
}
};
window.ExpwtVisitor = Visitor;
var PRINT_CONTENT = ['body header:not(main header, article header)', 'nav', '[role="banner"]', '[role="navigation"]',
'body footer:not(main footer, article footer)', '[role="contentinfo"]', 'aside:not(main aside, article aside)'];
var PRINT_RULES = '@media print{exp-wt,[data-expwt-spacer]{display:none}'
+ 'html[data-expwt-push="right"],html[data-expwt-push="left"]{padding:0}'
+ PRINT_CONTENT.map(function (s) { return 'html[data-expwt-print~="content"] ' + s; }).join(',') + '{display:none}'
+ 'html[data-expwt-print~="urls"] a[href]:not([href^="#"]):not([href^="javascript:"])::after{content:" (" attr(href) ")";overflow-wrap:anywhere}'
+ 'html[data-expwt-print] img,html[data-expwt-print] figure,html[data-expwt-print] table,html[data-expwt-print] pre{break-inside:avoid}'
+ 'html[data-expwt-print] h1,html[data-expwt-print] h2,html[data-expwt-print] h3{break-after:avoid}}';
function pageCss(text) {
if (!canAdopt) {
return;
}
if (!pageSheet) {
pageSheet = new CSSStyleSheet();
document.adoptedStyleSheets = document.adoptedStyleSheets.concat([pageSheet]);
}
pageSheet.replaceSync(text);
}
class ExpWt extends HTMLElement {
connectedCallback() {
if (this.shadowRoot) {
return;
}
try {
if (window.frameElement && window.frameElement.hasAttribute('data-expwt-split')) { return; }
} catch (e) {  }
Visitor.apply(Visitor.normalize(store(VISITOR)));
var self = this;
try {
this.cfg = JSON.parse(this.getAttribute('data-config') || '{}');
} catch (e) {
this.cfg = {};
}
this.strings = this.cfg.strings || {};
try {
this.renderData = this.hasAttribute('data-render') ? JSON.parse(this.getAttribute('data-render')) : null;
} catch (e) {
this.renderData = null;
}
this.anonymous = !!this.cfg.anonymous;
this.boot = null;
this.panels = {};
this.current = null;
var device = store(DEVICE);
this.deviceOnly = !!(device && device.only) || this.anonymous;
this.state = this.normalize(Object.assign({}, this.anonymous || !device ? (store(CACHE) || {}) : {}, device && device.state ? device.state : {}));
this.wide = window.matchMedia('(min-width: ' + ((this.cfg.overlayBelow || 768) + 1) + 'px)');
this.dark = window.matchMedia('(prefers-color-scheme: dark)');
this.editOn = !this.anonymous && EditState.read(session());
this.render();
this.applyState();
this.wide.addEventListener('change', function () { self.applyState(); });
this.dark.addEventListener('change', function () { self.applyTheme(); });
if (window.MutationObserver) {
new MutationObserver(function () { self.applyTheme(); })
.observe(document.documentElement, { attributes: true, attributeFilter: ['data-exp-theme'] });
}
window.addEventListener('scroll', function () { self.place(); }, { passive: true });
window.addEventListener('resize', function () { self.place(); self.placePill(); });
if (window.ResizeObserver) {
new ResizeObserver(function () { if (self.horizontal() && window.innerWidth < 640) { self.place(); } }).observe(this.panel);
}
if (window.MutationObserver && document.body) {
new MutationObserver(function () { if (self.state.edge === 'bottom') { self.place(); } self.placePill(); })
.observe(document.body, { childList: true });
}
document.addEventListener('keydown', function (e) { self.shortcut(e); });
window.addEventListener('message', function (e) { self.message(e); });
var leave = function () { if (self.saveTimer) { self.send(true); } };
window.addEventListener('pagehide', leave);
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') { leave(); } });
if (this.anonymous && this.state.open) {
this.show(this.state.panel);
}
if (!this.anonymous && this.cfg.boot) {
var start = function () { setTimeout(function () { self.loadBoot(); }, 0); };
if (document.readyState === 'complete') {
start();
} else {
window.addEventListener('load', start, { once: true });
}
}
}
t(text) {
var all = this.boot && this.boot.strings ? this.boot.strings : this.strings;
return all[text] || this.strings[text] || text;
}
normalize(s) {
var c = this.cfg;
s = s || {};
var edge = EDGES.indexOf(s.edge) >= 0 ? s.edge
: (s.side === 'left' || s.side === 'right' ? s.side : (EDGES.indexOf(c.edge) >= 0 ? c.edge : (c.side === 'left' ? 'left' : 'right')));
return {
edge: edge,
align: s.align === 'start' || s.align === 'end' ? s.align : (c.align === 'start' ? 'start' : 'end'),
offset: clamp(parseInt(s.offset, 10) || 0, 0, 4000),
width: clamp(parseInt(s.width, 10) || c.width || 380, c.minWidth || 300, c.maxWidth || 720),
height: clamp(parseInt(s.height, 10) || c.height || 280, c.minHeight || 160, c.maxHeight || 640),
open: s.open === true,
mode: s.mode === 'overlay' ? 'overlay' : 'push',
theme: ['light', 'dark'].indexOf(s.theme) >= 0 ? s.theme : 'auto',
panel: /^[a-z][a-z0-9_]{0,39}$/.test(String(s.panel || '')) ? s.panel : 'page',
keys: s.keys && typeof s.keys === 'object' && !Array.isArray(s.keys) ? s.keys : {}
};
}
render() {
var self = this;
var root = this.attachShadow({ mode: 'open' });
if (canAdopt) {
this.vars = new CSSStyleSheet();
root.adoptedStyleSheets = [this.vars];
var brandCss = Brand.css(this.cfg.brand);
if (brandCss) {
this.brandSheet = new CSSStyleSheet();
this.brandSheet.replaceSync(brandCss);
root.adoptedStyleSheets = root.adoptedStyleSheets.concat([this.brandSheet]);
}
}
if (this.cfg.css) {
this.veil(true);
var link = h('link', { rel: 'stylesheet', href: this.cfg.css });
var shown = false;
var show = function () {
if (shown) { return; }
shown = true;
clearTimeout(self.veilTimer);
self.placeNow();
self.veil(false);
};
link.addEventListener('load', show);
link.addEventListener('error', show);
this.veilTimer = setTimeout(show, 4000);
root.appendChild(link);
}
this.tab = h('button', {
type: 'button', class: 'wt-tab', 'aria-expanded': 'false', 'aria-controls': 'wt-panel',
'aria-keyshortcuts': 'Alt+Shift+' + (this.cfg.key || 'E'),
title: this.brandName() + ' (Alt+Shift+' + (this.cfg.key || 'E') + ')',
onpointerdown: function (e) { self.dragStart(e); },
onkeydown: function (e) { self.tabKey(e); },
onclick: function (e) { if (self.dragged) { e.preventDefault(); self.dragged = false; return; } self.toggle(); }
}, [
icon(['M4 6h16', 'M4 12h16', 'M4 18h10']),
h('span', { class: 'wt-tab-label', text: this.anonymous ? this.t('Menu') : this.t('Edit') }),
h('span', { class: 'wt-sr', text: this.brandName() + '. ' + this.t('Arrow keys move it, Enter opens it.') + ' '
+ this.t('Ctrl and an arrow key put it on another edge.') })
]);
this.resizer = h('div', {
class: 'wt-resize', role: 'separator', tabindex: '0', 'aria-orientation': 'vertical',
'aria-label': this.t('Width of the sidebar'),
onpointerdown: function (e) { self.resizeStart(e); },
onkeydown: function (e) { self.resizeKey(e); }
});
this.heading = h('h2', { id: 'wt-title', tabindex: '-1', text: this.brandName() });
var logo = Brand.logo(this.cfg.brand);
this.tablist = h('div', { class: 'wt-tabs', role: 'tablist', 'aria-label': this.t('Panels') });
this.actions = h('div', { class: 'wt-actions' });
this.body = h('div', { class: 'wt-body', id: 'wt-body', role: 'tabpanel', tabindex: '-1' });
this.status = h('div', { class: 'wt-status', role: 'status', 'aria-live': 'polite' });
this.panel = h('section', {
id: 'wt-panel', class: 'wt-panel', role: 'complementary', 'aria-labelledby': 'wt-title', hidden: true,
onkeydown: function (e) { if (e.key === 'Escape') { e.stopPropagation(); self.toggle(false, true); } }
}, [
this.resizer,
h('div', { class: 'wt-head' }, [
h('div', { class: 'wt-brand' }, [logo ? h('img', { class: 'wt-logo', src: logo, alt: '' }) : null, this.heading]),
h('button', { type: 'button', class: 'wt-btn is-icon', 'aria-label': this.t('Close the sidebar'), title: this.t('Close the sidebar'),
onclick: function () { self.toggle(false, true); } }, ['×'])
]),
this.tablist,
this.actions,
this.body,
this.status
]);
this.pill = h('div', { class: 'wt-pill', role: 'status', hidden: true }, [
h('span', { class: 'wt-pill-label', text: this.t('Editing') }),
h('span', { class: 'wt-pill-dot', 'aria-hidden': 'true', text: '·' }),
h('button', { type: 'button', class: 'wt-btn is-primary wt-pill-done', text: this.t('Done'),
onclick: function () { self.editing(false); } })
]);
this.sheetTitle = h('h2', { class: 'wt-sheet-title', id: 'wt-sheet-title' });
this.sheetBody = h('div', { class: 'wt-sheet-body' });
this.sheetActions = h('div', { class: 'wt-row wt-sheet-actions' });
var handle = h('div', { class: 'wt-sheet-handle', 'aria-hidden': 'true', onpointerdown: function (e) { self.sheetDrag(e); } });
this.sheet = h('dialog', { class: 'wt-sheet', 'aria-labelledby': 'wt-sheet-title',
oncancel: function (e) { e.preventDefault(); self.closeSheet(); },
onclick: function (e) {
if (e.target !== self.sheet) { return; }
var r = self.sheet.getBoundingClientRect();
if (e.clientY < r.top || e.clientY > r.bottom || e.clientX < r.left || e.clientX > r.right) { self.closeSheet(); }
} }, [
handle,
h('div', { class: 'wt-sheet-head', onpointerdown: function (e) { if (e.target === e.currentTarget || e.target === self.sheetTitle) { self.sheetDrag(e); } } }, [
this.sheetTitle,
h('button', { type: 'button', class: 'wt-btn is-icon', 'aria-label': this.t('Close'), title: this.t('Close'),
onclick: function () { self.closeSheet(); } }, ['×'])
]),
this.sheetBody,
this.sheetActions
]);
root.appendChild(this.tab);
root.appendChild(this.panel);
root.appendChild(this.pill);
root.appendChild(this.sheet);
this.buildTabs();
}
editing(on) {
if (on === undefined) {
return !!this.editOn;
}
this.editOn = EditState.write(session(), !this.anonymous && !!on);
if (!this.editOn) {
this.closeSheet();
}
this.drawPill();
this.body.dispatchEvent(new CustomEvent('expwt-editing', { detail: { on: this.editOn } }));
if (this.editOn && this.body.getAttribute('data-panel') !== 'page' && this.boot) {
this.show('page');
}
return this.editOn;
}
drawPill() {
if (!this.pill) { return; }
this.setAttribute('data-editing', this.editOn ? 'true' : 'false');
this.pill.hidden = !EditState.pillShown(this.editOn, this.state.open, this.overlay()) || this.sheet.open;
this.placePill();
var self = this;
var shown = !this.pill.hidden || (this.state.open && this.overlay());
if (shown && !this.pillTimer) {
this.pillTimer = setInterval(function () {
self.placePill();
if (self.state.open && self.overlay()) { self.place(); }
}, 1000);
} else if (!shown && this.pillTimer) {
clearInterval(this.pillTimer);
this.pillTimer = null;
}
}
placePill() {
if (!this.pill || this.pill.hidden || !canAdopt) { return; }
var self = this;
var vh = window.innerHeight;
var tops = [];
[0.2, 0.5, 0.8].forEach(function (x) {
(document.elementsFromPoint(window.innerWidth * x, vh - 2) || []).forEach(function (el) {
for (var n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
if (n === self) { return; }
var pos = getComputedStyle(n).position;
if (pos === 'fixed' || pos === 'sticky') {
tops.push(n.getBoundingClientRect().top);
if (window.ResizeObserver) {
self.barWatch = self.barWatch || new ResizeObserver(function () { self.placePill(); });
self.barWatch.observe(n);
}
return;
}
}
});
});
var room = EditState.bottomRoom(vh, tops);
if (this.state.edge === 'bottom' && this.tab) { room += this.tab.offsetHeight; }
if (!this.pillSheet) {
this.pillSheet = new CSSStyleSheet();
this.shadowRoot.adoptedStyleSheets = this.shadowRoot.adoptedStyleSheets.concat([this.pillSheet]);
}
this.pillSheet.replaceSync(':host{--wt-pill-room:' + room + 'px}');
}
openSheet(title, node, actions, onClose) {
var self = this;
this.closeSheet();
this.sheetScroll = window.scrollY;
this.sheetTitle.textContent = title;
this.sheetActions.textContent = '';
(actions || []).forEach(function (a) { self.sheetActions.appendChild(a); });
this.sheetOnClose = onClose || null;
move(this.sheetBody, node);
if (typeof this.sheet.showModal === 'function') {
this.sheet.showModal();
} else {
this.sheet.setAttribute('open', '');
}
this.setAttribute('data-sheet', 'open');
this.drawPill();
var close = this.sheet.querySelector('.wt-sheet-head .wt-btn');
if (close) { close.focus(); }
}
closeSheet() {
if (!this.sheet || !this.sheet.open) { return; }
var self = this;
var y = this.sheetScroll;
var finish = function () {
if (typeof self.sheet.close === 'function') {
self.sheet.close();
} else {
self.sheet.removeAttribute('open');
}
self.removeAttribute('data-sheet');
self.sheetBody.textContent = '';
self.drawPill();
if (typeof y === 'number') { window.scrollTo(window.scrollX, y); }
};
var onClose = this.sheetOnClose;
this.sheetOnClose = null;
if (onClose) { onClose(finish); } else { finish(); }
}
sheetDrag(e) {
var self = this;
var startY = e.clientY;
var moved = 0;
var up = function (ev) {
window.removeEventListener('pointermove', mv);
window.removeEventListener('pointerup', up);
window.removeEventListener('pointercancel', up);
self.sheet.removeAttribute('data-dragging');
if (ev.type === 'pointerup' && moved > 80) { self.closeSheet(); }
};
var mv = function (ev) { moved = ev.clientY - startY; if (moved > 8) { self.sheet.setAttribute('data-dragging', ''); } };
window.addEventListener('pointermove', mv);
window.addEventListener('pointerup', up);
window.addEventListener('pointercancel', up);
}
veil(on) {
var root = this.shadowRoot;
if (canAdopt) {
if (on && !this.veilSheet) {
this.veilSheet = new CSSStyleSheet();
this.veilSheet.replaceSync(':host{visibility:hidden!important}');
root.adoptedStyleSheets = root.adoptedStyleSheets.concat([this.veilSheet]);
} else if (!on && this.veilSheet) {
var sheet = this.veilSheet;
this.veilSheet = null;
root.adoptedStyleSheets = root.adoptedStyleSheets.filter(function (s) { return s !== sheet; });
}
} else {
this.toggleAttribute('hidden', !!on);
}
}
available() {
if (this.anonymous) {
return [{ id: 'welcome', label: this.t('Welcome') }];
}
var c = this.boot ? this.boot.capabilities : { use: true };
var list = [{ id: 'page', label: this.t('Page') }];
if (c.create) { list.push({ id: 'create', label: this.t('Create') }); }
if (c.structure) { list.push({ id: 'structure', label: this.t('Structure') }); }
if (c.edit) { list.push({ id: 'seo', label: this.t('SEO') }); }
list.push({ id: 'sites', label: this.t('Sites') });
if (c.edit) { list.push({ id: 'forms', label: this.t('Forms') }); }
if (c.edit && this.boot && this.boot.newsletter) { list.push({ id: 'newsletter', label: this.t('Newsletter') }); }
if (c.edit) { list.push({ id: 'urls', label: this.t('URLs') }); }
if (c.edit) { list.push({ id: 'calendar', label: this.t('Calendar') }); }
list.push({ id: 'export', label: this.t('Export') });
if (c.insights) { list.push({ id: 'insights', label: this.t('Insights') }); }
if (this.boot && this.boot.inbox) { list.push({ id: 'inbox', label: this.t('Inbox') }); }
if (this.boot && this.boot.migrations) { list.push({ id: 'migrations', label: this.t('Migrations') }); }
if (this.boot && this.boot.static) { list.push({ id: 'static', label: this.boot.static.label || 'Static publishing' }); }
if (c.performance) { list.push({ id: 'performance', label: this.t('Performance') }); }
list.push({ id: 'me', label: this.t('Me') });
this.registry().panels.forEach(function (p) {
var at = list.map(function (x) { return x.id; }).indexOf(p.before);
list.splice(at < 0 ? list.length : at, 0, { id: p.id, label: p.label });
});
return PanelOrder.apply(list, this.boot && this.boot.panels);
}
setWaiting(n) {
var self = this;
this.waiting = Math.max(0, parseInt(n, 10) || 0);
var badge = function () {
var text = self.t('%n new in your inbox').replace('%n', self.waiting);
return h('span', { class: 'wt-badge', 'data-badge': 'waiting' }, [
h('span', { 'aria-hidden': 'true', text: String(self.waiting) }), h('span', { class: 'wt-sr', text: ' ' + text })]);
};
[this.tab].concat((this.tabButtons || []).filter(function (b) { return b.getAttribute('data-panel') === 'inbox'; })).forEach(function (el) {
var old = el.querySelector('[data-badge="waiting"]');
if (old) { old.remove(); }
if (self.waiting > 0) { el.appendChild(badge()); }
});
}
buildTabs() {
var self = this;
var list = this.available();
var ids = list.map(function (p) { return p.id; });
this.state.panel = PanelMemory.keep(ids, this.state.panel, !!this.boot || this.anonymous);
var current = PanelMemory.pick(ids, this.state.panel);
this.tablist.textContent = '';
this.tabButtons = list.map(function (p) {
var b = h('button', {
type: 'button', role: 'tab', id: 'wt-tab-' + p.id, 'aria-controls': 'wt-body', 'data-panel': p.id,
'aria-selected': p.id === current ? 'true' : 'false', tabindex: p.id === current ? '0' : '-1',
onclick: function () { self.show(p.id); },
onkeydown: function (e) { self.tabsKey(e); }
}, [p.label]);
self.tablist.appendChild(b);
return b;
});
this.tablist.hidden = list.length < 2;
if (this.waiting) { this.setWaiting(this.waiting); }
if (this.commentsWaiting) { this.setComments(this.commentsWaiting); }
if (this.migrationsAttention) { this.setMigrations(this.migrationsAttention); }
if (this.migrationsRecording) { this.setRecording(this.migrationsRecording); }
}
setMigrations(n) {
var self = this;
this.migrationsAttention = Math.max(0, parseInt(n, 10) || 0);
(this.tabButtons || []).filter(function (b) { return b.getAttribute('data-panel') === 'migrations'; }).forEach(function (el) {
var old = el.querySelector('[data-badge="migrations"]');
if (old) { old.remove(); }
if (self.migrationsAttention > 0) {
el.appendChild(h('span', { class: 'wt-badge', 'data-badge': 'migrations' }, [
h('span', { 'aria-hidden': 'true', text: String(self.migrationsAttention) }),
h('span', { class: 'wt-sr', text: ' ' + self.t('%n migrations need attention').replace('%n', self.migrationsAttention) })]));
}
});
}
setRecording(rec) {
var self = this;
this.migrationsRecording = rec && rec.active ? rec : null;
(this.tabButtons || []).filter(function (b) { return b.getAttribute('data-panel') === 'migrations'; }).forEach(function (el) {
var old = el.querySelector('[data-badge="recording"]');
if (old) { old.remove(); }
if (self.migrationsRecording) {
el.appendChild(h('span', { class: 'wt-badge wt-rec-badge', 'data-badge': 'recording' }, [
h('span', { class: 'wt-rec-dot', 'aria-hidden': 'true' }),
h('span', { class: 'wt-sr', text: ' ' + self.t('Recording…') })]));
}
});
}
setComments(n) {
var self = this;
this.commentsWaiting = Math.max(0, parseInt(n, 10) || 0);
(this.tabButtons || []).filter(function (b) { return b.getAttribute('data-panel') === 'page'; }).forEach(function (el) {
var old = el.querySelector('[data-badge="comments"]');
if (old) { old.remove(); }
if (self.commentsWaiting > 0) {
el.appendChild(h('span', { class: 'wt-badge', 'data-badge': 'comments' }, [
h('span', { 'aria-hidden': 'true', text: String(self.commentsWaiting) }),
h('span', { class: 'wt-sr', text: ' ' + self.t('%n comments wait for moderation').replace('%n', self.commentsWaiting) })]));
}
});
}
tabsKey(e) {
var i = this.tabButtons.indexOf(e.target);
var n = this.tabButtons.length;
var next = null;
var rtl = getComputedStyle(this).direction === 'rtl';
if (e.key === 'ArrowRight') { next = rtl ? i - 1 : i + 1; }
if (e.key === 'ArrowLeft') { next = rtl ? i + 1 : i - 1; }
if (e.key === 'Home') { next = 0; }
if (e.key === 'End') { next = n - 1; }
if (next === null) { return; }
e.preventDefault();
next = (next + n) % n;
this.tabButtons[next].focus();
this.show(this.tabButtons[next].getAttribute('data-panel'));
}
overlay() {
return !this.wide.matches || this.state.mode === 'overlay';
}
horizontal() {
return horizontalEdge(this.state.edge);
}
headerEl() {
var el = null;
try { el = document.querySelector(this.cfg.header || 'header'); } catch (e) { el = null; }
return el && el !== document.body && el !== document.documentElement ? el : null;
}
headerBottom() {
var el = this.headerEl();
return el ? Math.max(0, Math.round(el.getBoundingClientRect().bottom)) : 0;
}
footerHeight() {
var self = this;
var sel = this.cfg.footer || '';
var list = [];
if (sel) {
try { list = Array.prototype.slice.call(document.querySelectorAll(sel)); } catch (e) { list = []; }
}
var vh = window.innerHeight;
var vw = window.innerWidth;
if (document.elementsFromPoint) {
[8, vw / 2, vw - 8].forEach(function (x) {
document.elementsFromPoint(x, vh - 2).forEach(function (el) {
for (var n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
if (n === self) { return; }
var p = getComputedStyle(n).position;
if ((p === 'fixed' || p === 'sticky') && list.indexOf(n) < 0) { list.push(n); }
}
});
});
}
var best = 0;
list.forEach(function (el) {
if (el === self || self.contains(el)) { return; }
var cs = getComputedStyle(el);
if ((cs.position !== 'fixed' && cs.position !== 'sticky') || cs.display === 'none' || cs.visibility === 'hidden') { return; }
var r = el.getBoundingClientRect();
if (r.height <= 0 || r.bottom < vh - 2 || r.top >= vh) { return; }
best = Math.max(best, Math.round(vh - r.top));
});
return Math.min(best, Math.round(vh / 2));
}
place() {
var self = this;
if (this.placing) { return; }
this.placing = true;
window.requestAnimationFrame(function () {
self.placing = false;
self.placeNow();
});
}
placeNow() {
var self = this;
{
var hz = self.horizontal();
var top = self.headerBottom();
var bottom = (hz && self.state.edge === 'bottom') || (self.state.open && self.overlay()) ? self.footerHeight() : 0;
var vh = window.innerHeight;
var tabLength = hz ? (self.tab.offsetWidth || 120) : (self.tab.offsetHeight || 120);
var room = Math.max(0, (hz ? window.innerWidth : vh - top) - tabLength);
var offset = Math.min(self.state.offset, room);
var height = Math.max(120, Math.min(self.state.height, vh - top - bottom - (self.tab.offsetHeight || 48)));
if (hz && self.state.open && window.innerWidth < 640 && self.panel.offsetHeight) {
height = self.panel.offsetHeight;
}
self.top = top;
self.bottom = bottom;
self.barHeight = height;
var vars = { '--expwt-top': top, '--expwt-bottom': bottom, '--expwt-offset': offset, '--expwt-width': self.state.width, '--expwt-height': height };
if (self.vars) {
self.vars.replaceSync(':host{' + Object.keys(vars).map(function (k) { return k + ':' + vars[k] + 'px'; }).join(';') + '}');
} else {
Object.keys(vars).forEach(function (k) { self.style.setProperty(k, vars[k] + 'px'); });
}
if (hz && self.state.open && (self.fitHeight !== height || self.fitWidth !== window.innerWidth)) {
self.fitHeight = height;
self.fitWidth = window.innerWidth;
self.body.dispatchEvent(new CustomEvent('expwt-orient', { detail: { horizontal: true } }));
}
self.push();
}
}
push() {
var on = this.state.open && !this.overlay();
var edge = this.state.edge;
var html = document.documentElement;
if (on) {
html.setAttribute('data-expwt-push', edge);
} else {
html.removeAttribute('data-expwt-push');
}
this.spacer('top', on && edge === 'top');
this.spacer('bottom', on && edge === 'bottom');
var h = this.barHeight || this.state.height;
var w = this.state.width;
this.pageRules = 'html[data-expwt-push="right"]{--expwt-push-right:' + w + 'px;padding-right:' + w + 'px}'
+ 'html[data-expwt-push="left"]{--expwt-push-left:' + w + 'px;padding-left:' + w + 'px}'
+ '[data-expwt-spacer]{display:block;block-size:' + h + 'px;margin:0;padding:0;border:0}'
+ 'html[data-expwt-push="top"]{--expwt-push-top:' + h + 'px;scroll-padding-block-start:' + ((this.top || 0) + h) + 'px}'
+ 'html[data-expwt-push="bottom"]{--expwt-push-bottom:' + h + 'px;scroll-padding-block-end:' + ((this.bottom || 0) + h) + 'px}'
+ (this.inlineRules || '') + (this.registryRules || '') + (this.flashRules || '') + PRINT_RULES;
pageCss(this.pageRules);
}
spacer(where, on) {
var key = where === 'top' ? 'spacerTop' : 'spacerBottom';
var el = this[key];
var body = document.body;
if (!on || !body) {
if (el && el.parentNode) { el.parentNode.removeChild(el); }
return;
}
if (!el) {
el = this[key] = document.createElement('div');
el.setAttribute('data-expwt-spacer', where);
el.setAttribute('aria-hidden', 'true');
}
if (where === 'bottom') {
if (el.parentNode !== body || el.nextElementSibling && el.nextElementSibling !== this) {
body.insertBefore(el, this.parentNode === body ? this : null);
}
return;
}
var header = this.headerEl();
var fixed = false;
for (var n = header; n && n !== body; n = n.parentElement) {
if (getComputedStyle(n).position === 'fixed') { fixed = true; break; }
}
if (header && !fixed && header.parentNode) {
if (header.nextSibling !== el) { header.parentNode.insertBefore(el, header.nextSibling); }
} else if (body.firstChild !== el) {
body.insertBefore(el, body.firstChild);
}
}
applyTheme() {
var theme = this.state.theme;
if (theme === 'auto') {
theme = this.anonymous ? 'system' : (this.boot ? this.boot.theme : this.firstTheme());
}
if (theme !== 'light' && theme !== 'dark') {
theme = this.siteMode() || (this.dark.matches ? 'dark' : 'light');
}
if (this.getAttribute('data-theme') !== theme) {
this.setAttribute('data-theme', theme);
}
}
siteMode() {
var mode = document.documentElement.getAttribute('data-exp-theme') || '';
return mode === 'light' ? 'light' : (mode.indexOf('dark') === 0 ? 'dark' : null);
}
firstTheme() {
var html = document.documentElement;
var mode = html.hasAttribute('data-a4-pref-admin-color-mode') ? html.getAttribute('data-a4-pref-admin-color-mode') : store(THEME);
return mode === 'light' || mode === 'dark' ? mode : 'system';
}
primary(el) {
this.primaryEl = el || null;
this.primaryHome = el ? document.createComment('') : null;
if (el && el.parentNode) {
el.parentNode.insertBefore(this.primaryHome, el);
}
this.placePrimary();
}
placePrimary() {
var el = this.primaryEl;
if (!el) {
this.actions.textContent = '';
return;
}
if (this.horizontal()) {
if (el.parentNode !== this.actions) { this.actions.appendChild(el); }
} else if (this.primaryHome && this.primaryHome.parentNode && el.previousSibling !== this.primaryHome) {
this.primaryHome.parentNode.insertBefore(el, this.primaryHome.nextSibling);
}
}
applyState() {
var hz = this.horizontal();
var turned = this.getAttribute('data-orient') !== (hz ? 'horizontal' : 'vertical');
this.setAttribute('data-edge', this.state.edge);
this.setAttribute('data-align', this.state.align);
this.setAttribute('data-orient', hz ? 'horizontal' : 'vertical');
this.setAttribute('data-open', this.state.open ? 'true' : 'false');
this.setAttribute('data-overlay', this.overlay() ? 'true' : 'false');
this.tab.setAttribute('aria-expanded', this.state.open ? 'true' : 'false');
this.panel.hidden = !this.state.open;
this.resizer.setAttribute('aria-orientation', hz ? 'horizontal' : 'vertical');
this.resizer.setAttribute('aria-label', hz ? this.t('Height of the sidebar') : this.t('Width of the sidebar'));
this.resizer.setAttribute('aria-valuemin', hz ? (this.cfg.minHeight || 160) : (this.cfg.minWidth || 300));
this.resizer.setAttribute('aria-valuemax', hz ? (this.cfg.maxHeight || 640) : (this.cfg.maxWidth || 720));
this.resizer.setAttribute('aria-valuenow', hz ? this.state.height : this.state.width);
if (turned) {
this.placePrimary();
this.body.dispatchEvent(new CustomEvent('expwt-orient', { detail: { horizontal: hz } }));
}
this.applyTheme();
this.place();
this.drawPill();
}
save() {
var self = this;
clearTimeout(this.saveTimer);
this.saveTimer = null;
if (this.deviceOnly) {
store(DEVICE, { only: true, state: this.state });
return;
}
store(CACHE, this.state);
store(UNSENT, { user: this.boot && this.boot.user ? this.boot.user.id : null, at: Date.now(), state: this.state });
if (this.boot) {
this.saveTimer = setTimeout(function () { self.send(false); }, 400);
}
}
send(leaving) {
clearTimeout(this.saveTimer);
this.saveTimer = null;
var unsent = store(UNSENT);
if (!this.boot || this.deviceOnly || !unsent) { return; }
this.call('state.save', { state: unsent.state }, false, leaving ? { keepalive: true } : null).then(function () {
var now = store(UNSENT);
if (now && now.at === unsent.at) { store(UNSENT, null); }
}).catch(function () {});
}
setState(change, keep) {
Object.assign(this.state, change);
this.state = this.normalize(this.state);
this.applyState();
if (!keep) {
this.save();
}
}
toggle(open, focusTab) {
open = open === undefined ? !this.state.open : !!open;
this.setState({ open: open });
if (!open) { this.regions(null); }
if (open) {
this.show(this.state.panel);
this.heading.focus();
return;
}
if (this.editOn && this.boot && this.body.getAttribute('data-panel') !== 'page') {
this.show('page');
}
if (focusTab) {
this.tab.focus();
}
}
dropAt(x, y, w, h) {
var vw = window.innerWidth;
var vh = window.innerHeight;
var top = this.top || 0;
var cx = x + w / 2;
var cy = y + h / 2;
var dist = { left: cx, right: vw - cx, top: cy - top, bottom: vh - (this.bottom || 0) - cy };
var edge = this.state.edge;
EDGES.forEach(function (k) {
if (dist[k] < dist[edge] - 32) { edge = k; }
});
if (!horizontalEdge(edge)) {
return { edge: edge, offset: Math.max(0, Math.round(y - top)) };
}
var align = cx < vw / 2 ? 'start' : 'end';
return { edge: edge, align: align, offset: Math.max(0, Math.round(align === 'start' ? x : vw - x - w)) };
}
dragStart(e) {
if (e.button !== 0) { return; }
var self = this;
var r = this.tab.getBoundingClientRect();
var grabX = e.clientX - r.left;
var grabY = e.clientY - r.top;
var moved = false;
this.dragged = false;
this.tab.setPointerCapture(e.pointerId);
var move = function (ev) {
if (!moved && Math.abs(ev.clientY - e.clientY) < 6 && Math.abs(ev.clientX - e.clientX) < 6) { return; }
moved = true;
self.tab.setAttribute('data-dragging', 'true');
var w = self.tab.offsetWidth;
var hgt = self.tab.offsetHeight;
var change = self.dropAt(ev.clientX - grabX, ev.clientY - grabY, w, hgt);
if (change.edge !== self.state.edge && horizontalEdge(change.edge) !== self.horizontal()) {
self.setState({ edge: change.edge }, true);
w = self.tab.offsetWidth;
hgt = self.tab.offsetHeight;
grabX = w / 2;
grabY = hgt / 2;
change = self.dropAt(ev.clientX - grabX, ev.clientY - grabY, w, hgt);
}
self.setState(change, true);
};
var up = function () {
self.tab.removeEventListener('pointermove', move);
self.tab.removeEventListener('pointerup', up);
self.tab.removeEventListener('pointercancel', up);
self.tab.removeAttribute('data-dragging');
if (moved) {
self.dragged = true;
self.save();
self.say(self.where());
}
};
this.tab.addEventListener('pointermove', move);
this.tab.addEventListener('pointerup', up);
this.tab.addEventListener('pointercancel', up);
}
where() {
return {
left: this.t('The sidebar is on the left.'), right: this.t('The sidebar is on the right.'),
top: this.t('The sidebar is at the top.'), bottom: this.t('The sidebar is at the bottom.')
}[this.state.edge];
}
dock(edge) {
if (edge !== this.state.edge) {
this.setState({ edge: edge, offset: 0 });
}
this.say(this.where());
}
tabKey(e) {
var step = e.shiftKey ? 64 : 16;
var hz = this.horizontal();
var arrows = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'top', ArrowDown: 'bottom' };
var dir = arrows[e.key];
if (dir && (e.ctrlKey || e.metaKey) && !e.altKey) {
e.preventDefault();
this.dock(dir);
} else if (e.key === 'PageDown' || e.key === 'PageUp') {
e.preventDefault();
var i = CLOCKWISE.indexOf(this.state.edge);
this.dock(CLOCKWISE[(i + (e.key === 'PageDown' ? 1 : 3)) % 4]);
} else if (e.key === 'Home' || e.key === 'End') {
e.preventDefault();
if (hz) {
this.setState({ align: e.key === 'Home' ? 'start' : 'end', offset: 0 });
} else {
this.setState({ offset: e.key === 'Home' ? 0 : Math.max(0, window.innerHeight - (this.top || 0) - this.tab.offsetHeight) });
}
this.say(this.t('The sidebar was moved.'));
} else if (dir && horizontalEdge(dir) === !hz) {
e.preventDefault();
var forward = hz ? (dir === 'right') === (this.state.align === 'start') : dir === 'bottom';
this.setState({ offset: this.state.offset + (forward ? step : -step) });
} else if (dir) {
e.preventDefault();
this.dock(dir);
}
}
resizeStart(e) {
var self = this;
var startX = e.clientX;
var startY = e.clientY;
var startW = this.state.width;
var startH = this.barHeight || this.state.height;
this.resizer.setPointerCapture(e.pointerId);
var move = function (ev) {
var edge = self.state.edge;
if (horizontalEdge(edge)) {
var dy = ev.clientY - startY;
self.setState({ height: startH + (edge === 'top' ? dy : -dy) }, true);
} else {
var dx = ev.clientX - startX;
self.setState({ width: startW + (edge === 'right' ? -dx : dx) }, true);
}
};
var up = function () {
self.resizer.removeEventListener('pointermove', move);
self.resizer.removeEventListener('pointerup', up);
self.save();
};
this.resizer.addEventListener('pointermove', move);
this.resizer.addEventListener('pointerup', up);
}
resizeKey(e) {
var edge = this.state.edge;
var hz = horizontalEdge(edge);
var grow = { right: 'ArrowLeft', left: 'ArrowRight', top: 'ArrowDown', bottom: 'ArrowUp' }[edge];
var shrink = { right: 'ArrowRight', left: 'ArrowLeft', top: 'ArrowUp', bottom: 'ArrowDown' }[edge];
var key = hz ? 'height' : 'width';
var v = hz ? (this.barHeight || this.state.height) : this.state.width;
var min = hz ? this.cfg.minHeight : this.cfg.minWidth;
var max = hz ? this.cfg.maxHeight : this.cfg.maxWidth;
if (e.key === grow) { v += 16; } else if (e.key === shrink) { v -= 16; } else if (e.key === 'Home') { v = min; } else if (e.key === 'End') { v = max; } else { return; }
e.preventDefault();
var change = {};
change[key] = v;
this.setState(change);
}
keys() {
return Keys.map(this.cfg.key, this.state.keys);
}
labelKeys() {
var k = 'Alt+Shift+' + this.keys().open;
this.tab.setAttribute('aria-keyshortcuts', k);
this.tab.title = this.brandName() + ' (' + k + ')';
}
shortcut(e) {
var self = this;
var mac = /Mac|iPhone|iPad/.test(navigator.platform || '');
var page = e.altKey && e.shiftKey ? Keys.pageKeys(document) : [];
var action = Keys.match(e.composedPath ? Object.assign({ target: e.composedPath()[0], altKey: e.altKey, shiftKey: e.shiftKey,
ctrlKey: e.ctrlKey, metaKey: e.metaKey, code: e.code }) : e, this.keys(), page, mac);
if (!action || (action !== 'open' && (!this.boot || this.anonymous))) { return; }
e.preventDefault();
if (action === 'open') {
if (this.state.open) { this.heading.focus(); } else { this.toggle(true); }
} else if (action.indexOf('panel:') === 0) {
var p = this.available()[parseInt(action.slice(6), 10) - 1];
if (!p) { return; }
if (!this.state.open) { this.toggle(true); }
this.show(p.id);
} else if (action === 'inline') {
if (this.boot.capabilities.edit) { this.editing(!this.editing()); }
} else if (action === 'save') {
var save = this.body.getAttribute('data-panel') === 'page' ? this.shadowRoot.querySelector('[data-action="save"]') : null;
if (save) { save.click(); } else { this.say(this.t('Open the Page panel to save its draft.')); }
} else if (action === 'help') {
this.loadPanels().then(function (panels) { if (panels.shortcuts) { panels.shortcuts(self.context()); } });
}
}
brandName() {
return Brand.name(this.cfg.brand, this.t('Website sidebar'));
}
say(text, kind) {
this.status.textContent = text || '';
this.status.title = text || '';
if (kind) {
this.status.setAttribute('data-kind', kind);
} else {
this.status.removeAttribute('data-kind');
}
}
unreachable(retry) {
var self = this;
this.say(this.t('The sidebar could not reach the server.'), 'bad');
this.status.appendChild(document.createTextNode(' '));
this.status.appendChild(h('button', { type: 'button', class: 'wt-btn wt-retry', text: this.t('Try again'), onclick: function () {
self.say(self.t('Loading ...'));
retry();
} }));
}
loadBoot() {
var self = this;
return this.request('GET', this.cfg.boot + '?action=boot&input=' + encodeURIComponent(JSON.stringify(this.cfg.node ? { nodeId: this.cfg.node } : {})), null).then(function (body) {
self.boot = body.data;
self.say('');
store(THEME, self.boot.theme || null);
var device = store(DEVICE);
var unsent = null;
if (!(device && device.only)) {
unsent = PanelMemory.unsent(store(UNSENT), self.boot.user ? self.boot.user.id : null, Date.now());
self.state = self.normalize(PanelMemory.onBoot(self.boot.state, unsent, self.state.open));
store(CACHE, self.state);
if (!unsent) { store(UNSENT, null); }
}
self.buildTabs();
if (unsent) { self.save(); }
self.labelKeys();
self.setWaiting(self.boot.inbox ? self.boot.inbox.count : 0);
self.setComments(self.boot.comments ? self.boot.comments.waiting : 0);
self.setMigrations(self.boot.migrations ? self.boot.migrations.attention : 0);
self.setRecording(self.boot.migrations ? self.boot.migrations.recording : null);
var local = null;
try { local = window.localStorage; } catch (e) { local = null; }
if (self.boot.capabilities && self.boot.capabilities.edit && EditState.unsaved(local, self.cfg.node, Date.now())) {
self.state.panel = 'page';
self.tab.appendChild(h('span', { class: 'wt-badge is-warn', 'data-badge': 'unsaved' }, [
h('span', { 'aria-hidden': 'true', text: '!' }), h('span', { class: 'wt-sr', text: ' ' + self.t('Unsaved changes on this page') })]));
}
self.applyState();
if (self.state.open || self.editOn) {
self.show(self.editOn ? 'page' : self.state.panel);
}
return self.boot;
}).catch(function (err) {
if (window.console) { window.console.error('expwt boot', err); }
self.unreachable(function () { self.loadBoot(); });
});
}
request(method, url, body, headers, opts) {
var init = { method: method, credentials: 'same-origin', headers: Object.assign({ 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' }, headers || {}) };
if (body !== null) {
init.body = body;
}
if (opts && opts.keepalive) {
init.keepalive = true;
}
return (method === 'GET' ? fetchRetry(url, init) : fetch(url, init)).then(function (res) {
return res.text().then(function (text) {
var data = null;
try { data = JSON.parse(text); } catch (e) { data = null; }
if (data === null && text.indexOf('\n<!--') > 0) {
try { data = JSON.parse(text.slice(0, text.indexOf('\n<!--'))); } catch (e) { data = null; }
}
if (!res.ok || !data || data.ok === false) {
var err = new Error(data && data.message ? data.message : 'HTTP ' + res.status);
err.status = res.status;
err.body = data || {};
throw err;
}
return data;
});
});
}
call(action, input, retried, opts) {
var self = this;
var t = this.boot.transport;
var registered = this.registry().actions || {};
var write = Object.prototype.hasOwnProperty.call(registered, action) ? !!registered[action].writes
: ['me', 'page.load', 'create.classes', 'tree.children', 'inbox.load', 'insights.load', 'seo.check', 'newsletter.load', 'comments.load', 'urls.load', 'calendar.load', 'migrations.load', 'static.load', 'performance.load', 'share.load', 'images.load', 'preview.devices', 'boot'].indexOf(action) < 0;
var json = JSON.stringify(input || {});
var headers = { 'X-CSRF-Token': this.boot.token || '' };
var p;
if (t.layer === 'graphql') {
p = (write ? fetch : fetchRetry)(t.graphql, {
method: 'POST', credentials: 'same-origin', keepalive: !!(opts && opts.keepalive),
headers: Object.assign({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' }, headers),
body: JSON.stringify({ id: write ? 'expwt-write' : 'expwt-read', variables: { action: action, input: json } })
}).then(function (res) {
return res.json().then(function (out) {
if (out && out.error === 'reauth_required') {
var e403 = new Error('reauth');
e403.status = 403;
e403.body = out;
throw e403;
}
var a = out && out.data ? out.data[write ? 'expwtWrite' : 'expwtRead'] : null;
if (!a) {
var eg = new Error(out && out.errors && out.errors[0] ? out.errors[0].message : 'GraphQL');
eg.status = res.status;
eg.body = {};
throw eg;
}
if (!a.ok) {
var ea = new Error(a.message || a.error);
ea.status = a.status;
ea.body = { error: a.error, message: a.message, details: a.details ? JSON.parse(a.details) : null };
throw ea;
}
return { ok: true, data: a.data ? JSON.parse(a.data) : null };
});
});
} else if (write) {
var form = new URLSearchParams();
form.set('action', action);
form.set('input', json);
form.set('ezxform_token', this.boot.token || '');
p = this.request('POST', t.rest, form.toString(), Object.assign({ 'Content-Type': 'application/x-www-form-urlencoded' }, headers), opts);
} else {
p = this.request('GET', t.rest + '?action=' + encodeURIComponent(action) + '&input=' + encodeURIComponent(json), null);
}
return p.then(function (body) { return body.data; }, function (err) {
if (!retried && err.status === 403 && err.body && err.body.error === 'reauth_required') {
return self.reauth(action).then(function () { return self.call(action, input, true); });
}
throw err;
});
}
reauth(action) {
var self = this;
this.say(this.t('Please confirm it is you in the new window.'));
return new Promise(function (resolve, reject) {
var win = window.open(self.boot.transport.reauth + '/' + encodeURIComponent(action), 'expwt-reauth', 'width=560,height=680');
if (!win) {
reject(new Error(self.t('Allow this site to open a window to confirm it is you.')));
return;
}
self.reauthDone = function () { clearInterval(timer); self.reauthDone = null; resolve(); };
var timer = setInterval(function () {
if (win.closed) {
clearInterval(timer);
if (self.reauthDone) {
self.reauthDone = null;
resolve();
}
}
}, 500);
});
}
message(e) {
if (e.origin !== window.location.origin || !e.data || typeof e.data.expwt !== 'string') {
return;
}
if (e.data.expwt === 'reauth-done' && this.reauthDone) {
this.reauthDone();
} else if (e.data.expwt.indexOf('field-') === 0) {
this.body.dispatchEvent(new CustomEvent('expwt-field', { detail: e.data }));
}
}
show(id) {
var self = this;
if (this.state.panel !== id) {
this.setState({ panel: id });
}
(this.tabButtons || []).forEach(function (b) {
var on = b.getAttribute('data-panel') === id;
b.setAttribute('aria-selected', on ? 'true' : 'false');
b.setAttribute('tabindex', on ? '0' : '-1');
});
this.body.setAttribute('aria-labelledby', 'wt-tab-' + id);
this.body.setAttribute('data-panel', id);
this.primary(null);
if (id === 'welcome') {
this.welcome();
return;
}
if (!this.boot) {
this.body.textContent = '';
this.body.appendChild(h('p', { class: 'wt-muted', text: this.t('Loading ...') }));
return;
}
var ext = this.extensionPanel(id);
Promise.all([this.loadPanels(), ext ? this.loadExtension(ext) : null]).then(function (loaded) {
var registry = loaded[0];
if (self.pageCleanup && id !== 'page') {
var undo = self.pageCleanup;
self.pageCleanup = null;
undo();
}
self.closeSheet();
self.body.textContent = '';
self.regions(id);
var draw = registry[id] || (ext ? window.ExpwtExtensions.panels[id] : null);
if (draw) {
draw(self.context(), self.body);
}
}).catch(function (err) {
if (window.console) { window.console.error('expwt panel ' + id, err); }
self.unreachable(function () { self.show(id); });
});
}
openField(identifier) {
this.pendingField = identifier;
this.show('page');
}
split(url, label) {
var self = this;
if (!this.splitView) {
var close = function () { self.splitView.close(); };
this.splitFrames = [0, 1].map(function () {
return h('iframe', { class: 'wt-split-frame', 'data-expwt-split': '' });
});
this.splitCaptions = [0, 1].map(function () { return h('figcaption', { class: 'wt-split-caption' }); });
this.splitView = h('dialog', { class: 'wt-split', 'aria-labelledby': 'wt-split-title',
onclose: function () { self.splitFrames.forEach(function (f) { f.removeAttribute('src'); }); } }, [
h('div', { class: 'wt-split-head' }, [
h('h2', { id: 'wt-split-title', class: 'wt-split-title', text: this.t('Side by side') }),
h('button', { type: 'button', class: 'wt-btn is-icon', 'aria-label': this.t('Close'), title: this.t('Close'), onclick: close }, ['×'])
]),
h('div', { class: 'wt-split-body' }, [0, 1].map(function (i) {
return h('figure', { class: 'wt-split-pane' }, [self.splitCaptions[i], self.splitFrames[i]]);
}))
]);
this.shadowRoot.appendChild(this.splitView);
}
this.splitCaptions[0].textContent = this.t('This page');
this.splitCaptions[1].textContent = label;
this.splitFrames[0].setAttribute('title', this.t('This page'));
this.splitFrames[1].setAttribute('title', label);
this.splitFrames[0].src = window.location.href;
this.splitFrames[1].src = url;
if (!this.splitView.open) { this.splitView.showModal(); }
this.splitView.querySelector('.wt-split-head .wt-btn').focus();
}
flash(el) {
var self = this;
if (!el || !el.isConnected) { return; }
if (this.overlay() && this.state.open) { this.toggle(false); }
(this.flashed || []).forEach(function (x) { x.removeAttribute('data-expwt-flash'); });
this.flashed = [el];
el.setAttribute('data-expwt-flash', '');
this.flashRules = '[data-expwt-flash]{outline:3px solid Highlight;outline-offset:3px}';
this.push();
el.scrollIntoView({ block: 'center', behavior: 'smooth' });
clearTimeout(this.flashTimer);
this.flashTimer = setTimeout(function () {
el.removeAttribute('data-expwt-flash');
self.flashRules = '';
self.push();
}, 3000);
}
registry() {
return (this.boot && this.boot.registry) || { panels: [], actions: {}, highlights: [], search: [] };
}
extensionPanel(id) {
return this.registry().panels.filter(function (p) { return p.id === id; })[0] || null;
}
loadExtension(p) {
var self = this;
this.extensions = this.extensions || {};
if (p.stylesheet && !this.shadowRoot.querySelector('link[data-expwt-ext="' + p.id + '"]')) {
this.shadowRoot.appendChild(h('link', { rel: 'stylesheet', href: p.stylesheet, 'data-expwt-ext': p.id }));
}
if (window.ExpwtExtensions.panels[p.id]) { return Promise.resolve(); }
if (!this.extensions[p.id]) {
this.extensions[p.id] = new Promise(function (resolve, reject) {
var attempt = 0;
(function load() {
var s = document.createElement('script');
s.src = p.script;
s.async = true;
s.onload = function () { resolve(); };
s.onerror = function (e) {
s.remove();
if (attempt < RETRY_AFTER.length) { setTimeout(load, RETRY_AFTER[attempt++]); } else { reject(e); }
};
document.head.appendChild(s);
})();
});
this.extensions[p.id].catch(function () { self.extensions[p.id] = null; });
}
return this.extensions[p.id];
}
regions(id) {
var self = this;
(this.regionEls || []).forEach(function (el) {
el.removeAttribute('data-expwt-region');
el.removeEventListener('click', el.expwtRegion, true);
el.removeEventListener('keydown', el.expwtRegion, true);
(el.expwtRegionAdded || []).forEach(function (name) { el.removeAttribute(name); });
el.expwtRegion = el.expwtRegionAdded = null;
});
this.regionEls = [];
if (id && this.state.open) {
this.registry().highlights.filter(function (hl) { return hl.panel === id; }).forEach(function (hl) {
var found;
try { found = document.querySelectorAll(hl.selector); } catch (e) { return; }
Array.prototype.forEach.call(found, function (el) {
if (el.closest('exp-wt') || el.hasAttribute('data-expwt-region')) { return; }
el.setAttribute('data-expwt-region', hl.id);
el.expwtRegionAdded = ['tabindex', 'aria-label'].filter(function (name) { return !el.hasAttribute(name); });
if (el.expwtRegionAdded.indexOf('tabindex') >= 0) { el.setAttribute('tabindex', '0'); }
if (hl.label && el.expwtRegionAdded.indexOf('aria-label') >= 0) { el.setAttribute('aria-label', hl.label); } else {
el.expwtRegionAdded = el.expwtRegionAdded.filter(function (name) { return name !== 'aria-label'; });
}
el.expwtRegion = function (e) {
if (e.type === 'keydown' && e.key !== 'Enter') { return; }
e.preventDefault();
e.stopPropagation();
self.body.dispatchEvent(new CustomEvent('expwt-pick', { detail: { highlight: hl.id, element: el } }));
};
el.addEventListener('click', el.expwtRegion, true);
el.addEventListener('keydown', el.expwtRegion, true);
self.regionEls.push(el);
});
});
}
this.registryRules = this.regionEls.length ? '[data-expwt-region]{outline:2px dashed Highlight;outline-offset:2px;cursor:pointer}' : '';
this.push();
}
loadPanels() {
var self = this;
if (window.ExpwtPanels) {
return Promise.resolve(window.ExpwtPanels);
}
if (!this.panelsPromise) {
this.panelsPromise = new Promise(function (resolve, reject) {
var attempt = 0;
(function load() {
var s = document.createElement('script');
s.src = self.cfg.panels;
s.async = true;
s.onload = function () { resolve(window.ExpwtPanels || {}); };
s.onerror = function (e) {
s.remove();
if (attempt < RETRY_AFTER.length) { setTimeout(load, RETRY_AFTER[attempt++]); } else { reject(e); }
};
document.head.appendChild(s);
})();
});
this.panelsPromise.catch(function () { self.panelsPromise = null; });
}
return this.panelsPromise;
}
context() {
var self = this;
return {
h: h,
t: function (s) { return self.t(s); },
call: function (action, input) { return self.call(action, input); },
say: function (text, kind) { self.say(text, kind); },
boot: this.boot,
node: this.cfg.node || 0,
state: this.state,
setState: function (change) { self.setState(change); },
waiting: function (n) { self.setWaiting(n); },
migrations: function (n) { self.setMigrations(n); },
recording: function (rec) { self.setRecording(rec); },
render: this.renderData,
registry: function () { return self.registry(); },
deviceOnly: function (on) {
if (on === undefined) { return self.deviceOnly; }
self.deviceOnly = !!on;
store(DEVICE, on ? { only: true, state: self.state } : null);
self.save();
return self.deviceOnly;
},
show: function (id) { self.show(id); },
primary: function (el) { self.primary(el); },
horizontal: function () { return self.horizontal(); },
host: this,
inlineCss: function (css) { self.inlineRules = css || ''; self.push(); },
editing: function (on) { return self.editing(on); },
overlay: function () { return self.overlay(); },
useSheet: function () { return EditState.useSheet(self.state.open, self.overlay()); },
openSheet: function (title, node, actions, onClose) { self.openSheet(title, node, actions, onClose); },
closeSheet: function () { self.closeSheet(); },
move: move,
onLeave: function (fn) {
var before = self.pageCleanup;
self.pageCleanup = fn;
if (before && before !== fn) { before(); }
}
};
}
welcome() {
var self = this;
var c = this.cfg;
var b = this.body;
b.textContent = '';
b.appendChild(h('div', { class: 'wt-section' }, [
h('p', { text: this.t('Sign in to edit this website.') }),
h('div', { class: 'wt-row' }, [
h('a', { class: 'wt-btn is-primary', href: c.login + '?RedirectURI=' + encodeURIComponent(window.location.pathname), text: this.t('Sign in') }),
h('a', { class: 'wt-btn', href: c.register, text: this.t('Register') })
])
]));
var q = h('input', { type: 'search', name: 'SearchText', id: 'wt-search', autocomplete: 'off' });
b.appendChild(h('form', { class: 'wt-section', role: 'search', method: 'get', action: c.search }, [
h('label', { class: 'wt-field', for: 'wt-search' }, [h('span', { text: this.t('Search') }), q]),
h('button', { type: 'submit', class: 'wt-btn', text: this.t('Search') })
]));
b.appendChild(this.themeChooser());
b.appendChild(this.visitorChooser());
}
visitorChooser() {
var self = this;
var p = Visitor.normalize(store(VISITOR));
var group = h('fieldset', { class: 'wt-section wt-choice wt-visitor' }, [h('legend', { text: this.t('Reading and display') })]);
var size = h('select', { id: 'wt-visitor-size', onchange: function () { change({ size: Number(size.value) }); } });
[[100, this.t('Normal')], [125, this.t('Large')], [150, this.t('Larger')], [200, this.t('Largest')]].forEach(function (o) {
size.appendChild(h('option', { value: String(o[0]), selected: p.size === o[0] ? '' : null, text: o[1] + ' (' + o[0] + '%)' }));
});
group.appendChild(h('label', { class: 'wt-field', for: 'wt-visitor-size' }, [h('span', { text: this.t('Text size') }), size]));
var boxes = {};
[['contrast', this.t('High contrast')], ['motion', this.t('Reduce motion')], ['font', this.t('Readable font')],
['underline', this.t('Underline links')]].forEach(function (o) {
var id = 'wt-visitor-' + o[0];
boxes[o[0]] = h('input', { type: 'checkbox', id: id, checked: p[o[0]], onchange: function () {
var c = {};
c[o[0]] = boxes[o[0]].checked;
change(c);
} });
group.appendChild(h('label', { class: 'wt-check', for: id }, [boxes[o[0]], o[1]]));
});
var reset = h('button', { type: 'button', class: 'wt-btn', text: this.t('Back to the site\'s own look'), onclick: function () {
p = Visitor.normalize({});
size.value = '100';
Visitor.FLAGS.forEach(function (f) { boxes[f].checked = false; });
save();
} });
group.appendChild(h('div', { class: 'wt-row' }, [reset]));
group.appendChild(h('p', { class: 'wt-muted', text: this.t('Kept on this device only, for every page of this site.') }));
function save() {
store(VISITOR, Visitor.isDefault(p) ? null : p);
Visitor.apply(p);
reset.disabled = Visitor.isDefault(p);
}
function change(c) {
p = Visitor.normalize(Object.assign({}, p, c));
save();
}
reset.disabled = Visitor.isDefault(p);
return group;
}
themeChooser() {
var self = this;
var group = h('fieldset', { class: 'wt-section wt-choice' }, [h('legend', { text: this.t('Light or dark') })]);
var auto = document.documentElement.hasAttribute('data-exp-theme') ? this.t('Like the site') : this.t('Like the system');
[['auto', auto],['light', this.t('Light')], ['dark', this.t('Dark')]].forEach(function (o) {
var id = 'wt-theme-' + o[0];
group.appendChild(h('label', { class: 'wt-check', for: id }, [
h('input', { type: 'radio', name: 'wt-theme', id: id, value: o[0], checked: self.state.theme === o[0],
onchange: function () { self.setState({ theme: o[0] }); } }),
o[1]
]));
});
return group;
}
}
window.customElements.define('exp-wt', ExpWt);
}());
