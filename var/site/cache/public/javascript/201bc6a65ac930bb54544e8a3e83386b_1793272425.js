
(function () {
var KEY = 'exp-media-theme', COOKIE = 'exp_media_theme', CHOICES = ['light', 'dark', 'darker', 'system'];
var root = document.documentElement;
var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
function valid(value) { return CHOICES.indexOf(value) >= 0 ? value : ''; }
function readCookie() {
var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + COOKIE + '=([a-z]+)'));
return m ? valid(m[1]) : '';
}
function stored() {
var value = '';
try { value = valid(window.localStorage.getItem(KEY) || ''); } catch (e) {  }
return value || readCookie() || 'system';
}
function save(choice) {
try { window.localStorage.setItem(KEY, choice); } catch (e) {  }
var secure = window.location.protocol === 'https:' ? '; Secure' : '';
document.cookie = COOKIE + '=' + choice + '; Max-Age=31536000; Path=/; SameSite=Lax' + secure;
}
function apply(value) {
var choice = valid(value) || 'system';
var mode = choice === 'system' ? (mq && mq.matches ? 'dark' : 'light') : choice;
root.setAttribute('data-exp-theme', mode);
root.setAttribute('data-exp-theme-choice', choice);
var b = document.getElementById('exp-theme-toggle');
if (!b) return;
var text = b.getAttribute('data-label-' + choice) || '';
var label = b.querySelector('.header-theme-label');
if (label) label.textContent = text;
if (text) b.setAttribute('title', text);
b.setAttribute('data-choice', choice);
}
apply(stored());
if (mq) {
var follow = function () { if (root.getAttribute('data-exp-theme-choice') === 'system') apply('system'); };
if (mq.addEventListener) mq.addEventListener('change', follow); else if (mq.addListener) mq.addListener(follow);
}
function wire() {
apply(root.getAttribute('data-exp-theme-choice'));
var b = document.getElementById('exp-theme-toggle');
if (!b || b.getAttribute('data-wired')) return;
b.setAttribute('data-wired', '1');
b.addEventListener('click', function () {
var i = CHOICES.indexOf(root.getAttribute('data-exp-theme-choice'));
var next = CHOICES[(i + 1) % CHOICES.length];
save(next);
apply(next);
var status = document.getElementById('exp-theme-status');
if (status) status.textContent = b.getAttribute('data-label-' + next) || '';
});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire); else wire();
window.addEventListener('storage', function (e) { if (e.key === KEY) apply(e.newValue); });
window.addEventListener('pageshow', function (e) { if (e.persisted) apply(stored()); });
window.addEventListener('beforeprint', function () { root.setAttribute('data-exp-theme', 'light'); });
window.addEventListener('afterprint', function () { apply(root.getAttribute('data-exp-theme-choice')); });
})();
