
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index-noncritical"],{
 "./node_modules/@netgen/javascript-cookie-control/dist/js/bundle.js":
 (function(module) {
!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(1);function a(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(){var t=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{optionalCookies:[]},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ng-cc";s(this,e),this.el=document.getElementById(i),this.options=Object.assign({},{open:!0,lifetime:365,acceptValue:"1",revokeValue:"0",timeout:200,domain:null,optionCookieHtml:function(e){return'<li>\n          <input type="checkbox" class="ng-cc-optional-checkbox" id="ng-cc-'+e.name+'" data-name="'+e.name+'" '+(e.accepted?"checked":"")+' />\n          <label for="ng-cc-'+e.name+'">\n            <i class="ng-cc-checkbox-icon">\n              <span class="on">'+document.getElementsByClassName("ng-cc-on")[0].textContent+'</span>\n              <span class="off">'+document.getElementsByClassName("ng-cc-off")[0].textContent+"</span>\n            </i>"+(e.label?e.label:"")+"\n          </label>\n          "+(e.description?"<p>"+e.description+"</p>":"")+"\n        </li>"}},o.options),this.opened=!1,this.acceptedCookies="accepted"===(0,c.getCookie)("ng-cc-accepted"),this.optionalCookies={},this.optionalCookiesByName=[],o.optionalCookies.forEach((function(e){var o=e.cookieName||"ng-cc-"+e.name,i=(0,c.getCookie)(o),a=n({},e,{cookieName:o,accepted:i!==t.options.revokeValue&&(i===t.options.acceptValue||e.accepted)});!i&&a.accepted&&(0,c.setCookie)(a.cookieName,t.options.acceptValue,t.options.lifetime,t.options.domain),t.optionalCookies[a.name]=a,t.optionalCookiesByName.push(a.name),a.accepted?a.onAccept&&a.onAccept():a.onRevoke&&a.onRevoke()}))}return i(e,[{key:"init",value:function(){this.el&&(this.renderOptional(),this.setupEvents(),!this.acceptedCookies&&this.options.open&&window.setTimeout(this.open.bind(this),this.options.timeout))}},{key:"setupEvents",value:function(){var e=this;[].concat(a(document.getElementsByClassName("ng-cc-toggle"))).forEach((function(t){t.addEventListener("click",(function(t){return t.preventDefault(),e.opened?e.close():e.open()}))})),[].concat(a(document.getElementsByClassName("ng-cc-close"))).forEach((function(t){t.addEventListener("click",e.close.bind(e))})),[].concat(a(document.getElementsByClassName("js-open-ng-cc"))).forEach((function(t){t.addEventListener("click",e.open.bind(e))})),document.getElementById("ng-cc-accept").addEventListener("click",(function(){[].concat(a(document.getElementsByClassName("ng-cc-optional-checkbox"))).forEach((function(t){t.checked=!0,t.dataset.name in e.optionalCookies&&(e.optionalCookies[t.dataset.name].accepted=!0,e.saveCookie(e.optionalCookies[t.dataset.name]))})),e.accept()})),document.getElementById("ng-cc-optional-save").addEventListener("click",this.accept.bind(this)),[].concat(a(this.el.getElementsByClassName("ng-cc-optional-checkbox"))).forEach((function(t){t.addEventListener("change",e.toggleCookie.bind(e))}))}},{key:"open",value:function(e){e&&e.preventDefault(),this.el.setAttribute("open",""),this.opened=!0}},{key:"close",value:function(e){e&&e.preventDefault(),this.el.removeAttribute("open"),this.opened=!1}},{key:"renderOptional",value:function(){var e=this,t="";this.optionalCookiesByName.forEach((function(o){var n=e.optionalCookies[o];t+=e.options.optionCookieHtml(n)})),this.el.querySelector(".ng-cc-optional-list ul").innerHTML+=t}},{key:"toggleCookie",value:function(e){this.optionalCookies[e.target.dataset.name].accepted=e.target.checked,this.saveCookie(this.optionalCookies[e.target.dataset.name]),this.options.onChange&&this.options.onChange(e,this)}},{key:"saveAll",value:function(){var e=this;this.optionalCookiesByName.forEach((function(t){return e.saveCookie(e.optionalCookies[t])}))}},{key:"saveCookie",value:function(e){(0,c.setCookie)(e.cookieName,e.accepted?this.options.acceptValue:this.options.revokeValue,this.options.lifetime,this.options.domain)}},{key:"accept",value:function(e){e&&e.preventDefault(),(0,c.setCookie)("ng-cc-accepted","accepted",this.options.lifetime,this.options.domain),this.saveAll(),this.close(),this.options.onAccept&&this.options.onAccept(this)}},{key:"set",value:function(e,t){this.options[e]=t}}]),e}();t.default=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setCookie=function(e,t,o,n){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);var c="expires="+i.toUTCString(),a=n?";domain="+n:"";document.cookie=e+"="+t+";"+c+a+";path=/"},t.getCookie=function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var i=o[n];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""}}])}));
 }),
 "./node_modules/@popperjs/core/lib/createPopper.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   createPopper: function() { return  createPopper; },
   detectOverflow: function() { return  _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
   popperGenerator: function() { return  popperGenerator; }
 });
 var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
 var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
 var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
 var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
 var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
 var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
 var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
 var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
var DEFAULT_OPTIONS = {
placement: 'bottom',
modifiers: [],
strategy: 'absolute'
};
function areValidElements() {
for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
args[_key] = arguments[_key];
}
return !args.some(function (element) {
return !(element && typeof element.getBoundingClientRect === 'function');
});
}
function popperGenerator(generatorOptions) {
if (generatorOptions === void 0) {
generatorOptions = {};
}
var _generatorOptions = generatorOptions,
_generatorOptions$def = _generatorOptions.defaultModifiers,
defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
_generatorOptions$def2 = _generatorOptions.defaultOptions,
defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
return function createPopper(reference, popper, options) {
if (options === void 0) {
options = defaultOptions;
}
var state = {
placement: 'bottom',
orderedModifiers: [],
options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
modifiersData: {},
elements: {
reference: reference,
popper: popper
},
attributes: {},
styles: {}
};
var effectCleanupFns = [];
var isDestroyed = false;
var instance = {
state: state,
setOptions: function setOptions(setOptionsAction) {
var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
cleanupModifierEffects();
state.options = Object.assign({}, defaultOptions, state.options, options);
state.scrollParents = {
reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
}; // Orders the modifiers based on their dependencies and `phase`
var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_6__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
state.orderedModifiers = orderedModifiers.filter(function (m) {
return m.enabled;
});
runModifierEffects();
return instance.update();
},
forceUpdate: function forceUpdate() {
if (isDestroyed) {
return;
}
var _state$elements = state.elements,
reference = _state$elements.reference,
popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
if (!areValidElements(reference, popper)) {
return;
} // Store the reference and popper rects to be read by modifiers
state.rects = {
reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
}; // Modifiers have the ability to reset the current update cycle. The
state.reset = false;
state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
state.orderedModifiers.forEach(function (modifier) {
return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
});
for (var index = 0; index < state.orderedModifiers.length; index++) {
if (state.reset === true) {
state.reset = false;
index = -1;
continue;
}
var _state$orderedModifie = state.orderedModifiers[index],
fn = _state$orderedModifie.fn,
_state$orderedModifie2 = _state$orderedModifie.options,
_options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
name = _state$orderedModifie.name;
if (typeof fn === 'function') {
state = fn({
state: state,
options: _options,
name: name,
instance: instance
}) || state;
}
}
},
update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
return new Promise(function (resolve) {
instance.forceUpdate();
resolve(state);
});
}),
destroy: function destroy() {
cleanupModifierEffects();
isDestroyed = true;
}
};
if (!areValidElements(reference, popper)) {
return instance;
}
instance.setOptions(options).then(function (state) {
if (!isDestroyed && options.onFirstUpdate) {
options.onFirstUpdate(state);
}
}); // Modifiers have the ability to execute arbitrary code before the first
function runModifierEffects() {
state.orderedModifiers.forEach(function (_ref) {
var name = _ref.name,
_ref$options = _ref.options,
options = _ref$options === void 0 ? {} : _ref$options,
effect = _ref.effect;
if (typeof effect === 'function') {
var cleanupFn = effect({
state: state,
name: name,
instance: instance,
options: options
});
var noopFn = function noopFn() {};
effectCleanupFns.push(cleanupFn || noopFn);
}
});
}
function cleanupModifierEffects() {
effectCleanupFns.forEach(function (fn) {
return fn();
});
effectCleanupFns = [];
}
return instance;
};
}
var createPopper = popperGenerator(); // eslint-disable-next-line import/no-unused-modules
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  contains; }
 });
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
function contains(parent, child) {
var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
if (parent.contains(child)) {
return true;
} // then fallback to custom implementation with Shadow DOM support
else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
var next = child;
do {
if (next && parent.isSameNode(next)) {
return true;
} // $FlowFixMe[prop-missing]: need a better way to handle this...
next = next.parentNode || next.host;
} while (next);
} // Give up, the result is false
return false;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getBoundingClientRect; }
 });
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
if (includeScale === void 0) {
includeScale = false;
}
if (isFixedStrategy === void 0) {
isFixedStrategy = false;
}
var clientRect = element.getBoundingClientRect();
var scaleX = 1;
var scaleY = 1;
if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;
scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;
}
var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
visualViewport = _ref.visualViewport;
var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
var width = clientRect.width / scaleX;
var height = clientRect.height / scaleY;
return {
width: width,
height: height,
top: y,
right: x + width,
bottom: y + height,
left: x,
x: x,
y: y
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getClippingRect; }
 });
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
 var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
 var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
 var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
 var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
function getInnerBoundingClientRect(element, strategy) {
var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element, false, strategy === 'fixed');
rect.top = rect.top + element.clientTop;
rect.left = rect.left + element.clientLeft;
rect.bottom = rect.top + element.clientHeight;
rect.right = rect.left + element.clientWidth;
rect.width = element.clientWidth;
rect.height = element.clientHeight;
rect.x = rect.left;
rect.y = rect.top;
return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
function getClippingParents(element) {
var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;
if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__.isElement)(clipperElement)) {
return [];
} // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function (clippingParent) {
return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
});
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary, strategy) {
var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
var firstClippingParent = clippingParents[0];
var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
var rect = getClientRectFromMixedType(element, clippingParent, strategy);
accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
return accRect;
}, getClientRectFromMixedType(element, firstClippingParent, strategy));
clippingRect.width = clippingRect.right - clippingRect.left;
clippingRect.height = clippingRect.bottom - clippingRect.top;
clippingRect.x = clippingRect.left;
clippingRect.y = clippingRect.top;
return clippingRect;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getCompositeRect; }
 });
 var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
function isElementScaled(element) {
var rect = element.getBoundingClientRect();
var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.round)(rect.width) / element.offsetWidth || 1;
var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.round)(rect.height) / element.offsetHeight || 1;
return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
if (isFixed === void 0) {
isFixed = false;
}
var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(offsetParent);
var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
var scroll = {
scrollLeft: 0,
scrollTop: 0
};
var offsets = {
x: 0,
y: 0
};
if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
(0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
}
if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(offsetParent)) {
offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent, true);
offsets.x += offsetParent.clientLeft;
offsets.y += offsetParent.clientTop;
} else if (documentElement) {
offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
}
}
return {
x: rect.left + scroll.scrollLeft - offsets.x,
y: rect.top + scroll.scrollTop - offsets.y,
width: rect.width,
height: rect.height
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getComputedStyle; }
 });
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
function getComputedStyle(element) {
return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getDocumentElement; }
 });
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
function getDocumentElement(element) {
return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
element.document) || window.document).documentElement;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getDocumentRect; }
 });
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
 var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
 var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
function getDocumentRect(element) {
var _element$ownerDocumen;
var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_4__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_4__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
var y = -winScroll.scrollTop;
if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_4__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
}
return {
width: width,
height: height,
x: x,
y: y
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getHTMLElementScroll; }
 });
function getHTMLElementScroll(element) {
return {
scrollLeft: element.scrollLeft,
scrollTop: element.scrollTop
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getLayoutRect; }
 });
 var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
function getLayoutRect(element) {
var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
var width = element.offsetWidth;
var height = element.offsetHeight;
if (Math.abs(clientRect.width - width) <= 1) {
width = clientRect.width;
}
if (Math.abs(clientRect.height - height) <= 1) {
height = clientRect.height;
}
return {
x: element.offsetLeft,
y: element.offsetTop,
width: width,
height: height
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getNodeName; }
 });
function getNodeName(element) {
return element ? (element.nodeName || '').toLowerCase() : null;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getNodeScroll; }
 });
 var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");
function getNodeScroll(node) {
if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(node)) {
return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
} else {
return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
}
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getOffsetParent; }
 });
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
 var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
 var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");
function getTrueOffsetParent(element) {
if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
(0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
return null;
}
return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
function getContainingBlock(element) {
var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(element)) {
var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
if (elementCss.position === 'fixed') {
return null;
}
}
var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isShadowRoot)(currentNode)) {
currentNode = currentNode.host;
}
while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
return currentNode;
} else {
currentNode = currentNode.parentNode;
}
}
return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
var offsetParent = getTrueOffsetParent(element);
while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
offsetParent = getTrueOffsetParent(offsetParent);
}
if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static')) {
return window;
}
return offsetParent || getContainingBlock(element) || window;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getParentNode; }
 });
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
function getParentNode(element) {
if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
return element;
}
return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
element.parentNode || ( // DOM Element detected
(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
(0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback
);
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getScrollParent; }
 });
 var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
 var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
function getScrollParent(node) {
if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
return node.ownerDocument.body;
}
if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
return node;
}
return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getViewportRect; }
 });
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
 var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js");
function getViewportRect(element, strategy) {
var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
var visualViewport = win.visualViewport;
var width = html.clientWidth;
var height = html.clientHeight;
var x = 0;
var y = 0;
if (visualViewport) {
width = visualViewport.width;
height = visualViewport.height;
var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
if (layoutViewport || !layoutViewport && strategy === 'fixed') {
x = visualViewport.offsetLeft;
y = visualViewport.offsetTop;
}
}
return {
width: width,
height: height,
x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
y: y
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getWindow; }
 });
function getWindow(node) {
if (node == null) {
return window;
}
if (node.toString() !== '[object Window]') {
var ownerDocument = node.ownerDocument;
return ownerDocument ? ownerDocument.defaultView || window : window;
}
return node;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getWindowScroll; }
 });
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
function getWindowScroll(node) {
var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
var scrollLeft = win.pageXOffset;
var scrollTop = win.pageYOffset;
return {
scrollLeft: scrollLeft,
scrollTop: scrollTop
};
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getWindowScrollBarX; }
 });
 var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
function getWindowScrollBarX(element) {
return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   isElement: function() { return  isElement; },
   isHTMLElement: function() { return  isHTMLElement; },
   isShadowRoot: function() { return  isShadowRoot; }
 });
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
function isElement(node) {
var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
if (typeof ShadowRoot === 'undefined') {
return false;
}
var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
return node instanceof OwnElement || node instanceof ShadowRoot;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  isLayoutViewport; }
 });
 var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ "./node_modules/@popperjs/core/lib/utils/userAgent.js");
function isLayoutViewport() {
return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  isScrollParent; }
 });
 var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
function isScrollParent(element) {
var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
overflow = _getComputedStyle.overflow,
overflowX = _getComputedStyle.overflowX,
overflowY = _getComputedStyle.overflowY;
return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  isTableElement; }
 });
 var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
function isTableElement(element) {
return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}
 }),
 "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  listScrollParents; }
 });
 var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
 var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
 var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
function listScrollParents(element, list) {
var _element$ownerDocumen;
if (list === void 0) {
list = [];
}
var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent);
var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
var updatedList = list.concat(target);
return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}
 }),
 "./node_modules/@popperjs/core/lib/enums.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   afterMain: function() { return  afterMain; },
   afterRead: function() { return  afterRead; },
   afterWrite: function() { return  afterWrite; },
   auto: function() { return  auto; },
   basePlacements: function() { return  basePlacements; },
   beforeMain: function() { return  beforeMain; },
   beforeRead: function() { return  beforeRead; },
   beforeWrite: function() { return  beforeWrite; },
   bottom: function() { return  bottom; },
   clippingParents: function() { return  clippingParents; },
   end: function() { return  end; },
   left: function() { return  left; },
   main: function() { return  main; },
   modifierPhases: function() { return  modifierPhases; },
   placements: function() { return  placements; },
   popper: function() { return  popper; },
   read: function() { return  read; },
   reference: function() { return  reference; },
   right: function() { return  right; },
   start: function() { return  start; },
   top: function() { return  top; },
   variationPlacements: function() { return  variationPlacements; },
   viewport: function() { return  viewport; },
   write: function() { return  write; }
 });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = basePlacements.reduce(function (acc, placement) {
return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function (acc, placement) {
return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
 }),
 "./node_modules/@popperjs/core/lib/index.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   afterMain: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain; },
   afterRead: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead; },
   afterWrite: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite; },
   applyStyles: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles; },
   arrow: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow; },
   auto: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto; },
   basePlacements: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements; },
   beforeMain: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain; },
   beforeRead: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead; },
   beforeWrite: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite; },
   bottom: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom; },
   clippingParents: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents; },
   computeStyles: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles; },
   createPopper: function() { return  _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper; },
   createPopperBase: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper; },
   createPopperLite: function() { return  _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper; },
   detectOverflow: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
   end: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.end; },
   eventListeners: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners; },
   flip: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip; },
   hide: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide; },
   left: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.left; },
   main: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.main; },
   modifierPhases: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases; },
   offset: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset; },
   placements: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements; },
   popper: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper; },
   popperGenerator: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator; },
   popperOffsets: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets; },
   preventOverflow: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow; },
   read: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.read; },
   reference: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference; },
   right: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.right; },
   start: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.start; },
   top: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.top; },
   variationPlacements: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements; },
   viewport: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport; },
   write: function() { return  _enums_js__WEBPACK_IMPORTED_MODULE_0__.write; }
 });
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ "./node_modules/@popperjs/core/lib/popper.js");
 var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
 }),
 "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
 var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
function applyStyles(_ref) {
var state = _ref.state;
Object.keys(state.elements).forEach(function (name) {
var style = state.styles[name] || {};
var attributes = state.attributes[name] || {};
var element = state.elements[name]; // arrow is optional + virtual elements
if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
return;
} // Flow doesn't support to extend this property, but it's the most
Object.assign(element.style, style);
Object.keys(attributes).forEach(function (name) {
var value = attributes[name];
if (value === false) {
element.removeAttribute(name);
} else {
element.setAttribute(name, value === true ? '' : value);
}
});
});
}
function effect(_ref2) {
var state = _ref2.state;
var initialStyles = {
popper: {
position: state.options.strategy,
left: '0',
top: '0',
margin: '0'
},
arrow: {
position: 'absolute'
},
reference: {}
};
Object.assign(state.elements.popper.style, initialStyles.popper);
state.styles = initialStyles;
if (state.elements.arrow) {
Object.assign(state.elements.arrow.style, initialStyles.arrow);
}
return function () {
Object.keys(state.elements).forEach(function (name) {
var element = state.elements[name];
var attributes = state.attributes[name] || {};
var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
var style = styleProperties.reduce(function (style, property) {
style[property] = '';
return style;
}, {}); // arrow is optional + virtual elements
if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
return;
}
Object.assign(element.style, style);
Object.keys(attributes).forEach(function (attribute) {
element.removeAttribute(attribute);
});
});
};
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'applyStyles',
enabled: true,
phase: 'write',
fn: applyStyles,
effect: effect,
requires: ['computeStyles']
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
 var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
 var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
 var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
 var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
 var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
 var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
var toPaddingObject = function toPaddingObject(padding, state) {
padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
placement: state.placement
})) : padding;
return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__.basePlacements));
};
function arrow(_ref) {
var _state$modifiersData$;
var state = _ref.state,
name = _ref.name,
options = _ref.options;
var arrowElement = state.elements.arrow;
var popperOffsets = state.modifiersData.popperOffsets;
var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__.left, _enums_js__WEBPACK_IMPORTED_MODULE_8__.right].indexOf(basePlacement) >= 0;
var len = isVertical ? 'height' : 'width';
if (!arrowElement || !popperOffsets) {
return;
}
var paddingObject = toPaddingObject(options.padding, state);
var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__.top : _enums_js__WEBPACK_IMPORTED_MODULE_8__.left;
var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_8__.right;
var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
var startDiff = popperOffsets[axis] - state.rects.reference[axis];
var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
var min = paddingObject[minProp];
var max = clientSize - arrowRect[len] - paddingObject[maxProp];
var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_5__.within)(min, center, max); // Prevents breaking syntax highlighting...
var axisProp = axis;
state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
var state = _ref2.state,
options = _ref2.options;
var _options$element = options.element,
arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
if (arrowElement == null) {
return;
} // CSS selector
if (typeof arrowElement === 'string') {
arrowElement = state.elements.popper.querySelector(arrowElement);
if (!arrowElement) {
return;
}
}
if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
return;
}
state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'arrow',
enabled: true,
phase: 'main',
fn: arrow,
effect: effect,
requires: ['popperOffsets'],
requiresIfExists: ['preventOverflow']
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   mapToStyles: function() { return  mapToStyles; }
 });
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
 var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
 var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
var unsetSides = {
top: 'auto',
right: 'auto',
bottom: 'auto',
left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
function roundOffsetsByDPR(_ref, win) {
var x = _ref.x,
y = _ref.y;
var dpr = win.devicePixelRatio || 1;
return {
x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.round)(x * dpr) / dpr || 0,
y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_7__.round)(y * dpr) / dpr || 0
};
}
function mapToStyles(_ref2) {
var _Object$assign2;
var popper = _ref2.popper,
popperRect = _ref2.popperRect,
placement = _ref2.placement,
variation = _ref2.variation,
offsets = _ref2.offsets,
position = _ref2.position,
gpuAcceleration = _ref2.gpuAcceleration,
adaptive = _ref2.adaptive,
roundOffsets = _ref2.roundOffsets,
isFixed = _ref2.isFixed;
var _offsets$x = offsets.x,
x = _offsets$x === void 0 ? 0 : _offsets$x,
_offsets$y = offsets.y,
y = _offsets$y === void 0 ? 0 : _offsets$y;
var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
x: x,
y: y
}) : {
x: x,
y: y
};
x = _ref3.x;
y = _ref3.y;
var hasX = offsets.hasOwnProperty('x');
var hasY = offsets.hasOwnProperty('y');
var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.left;
var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.top;
var win = window;
if (adaptive) {
var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);
var heightProp = 'clientHeight';
var widthProp = 'clientWidth';
if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
heightProp = 'scrollHeight';
widthProp = 'scrollWidth';
}
} // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent = offsetParent;
if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__.end) {
sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom;
var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
offsetParent[heightProp];
y -= offsetY - popperRect.height;
y *= gpuAcceleration ? 1 : -1;
}
if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__.end) {
sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__.right;
var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
offsetParent[widthProp];
x -= offsetX - popperRect.width;
x *= gpuAcceleration ? 1 : -1;
}
}
var commonStyles = Object.assign({
position: position
}, adaptive && unsetSides);
var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
x: x,
y: y
}, (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) : {
x: x,
y: y
};
x = _ref4.x;
y = _ref4.y;
if (gpuAcceleration) {
var _Object$assign;
return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
}
return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
var state = _ref5.state,
options = _ref5.options;
var _options$gpuAccelerat = options.gpuAcceleration,
gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
_options$adaptive = options.adaptive,
adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
_options$roundOffsets = options.roundOffsets,
roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
var commonStyles = {
placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
popper: state.elements.popper,
popperRect: state.rects.popper,
gpuAcceleration: gpuAcceleration,
isFixed: state.options.strategy === 'fixed'
};
if (state.modifiersData.popperOffsets != null) {
state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
offsets: state.modifiersData.popperOffsets,
position: state.options.strategy,
adaptive: adaptive,
roundOffsets: roundOffsets
})));
}
if (state.modifiersData.arrow != null) {
state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
offsets: state.modifiersData.arrow,
position: 'absolute',
adaptive: false,
roundOffsets: roundOffsets
})));
}
state.attributes.popper = Object.assign({}, state.attributes.popper, {
'data-popper-placement': state.placement
});
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'computeStyles',
enabled: true,
phase: 'beforeWrite',
fn: computeStyles,
data: {}
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
var passive = {
passive: true
};
function effect(_ref) {
var state = _ref.state,
instance = _ref.instance,
options = _ref.options;
var _options$scroll = options.scroll,
scroll = _options$scroll === void 0 ? true : _options$scroll,
_options$resize = options.resize,
resize = _options$resize === void 0 ? true : _options$resize;
var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
if (scroll) {
scrollParents.forEach(function (scrollParent) {
scrollParent.addEventListener('scroll', instance.update, passive);
});
}
if (resize) {
window.addEventListener('resize', instance.update, passive);
}
return function () {
if (scroll) {
scrollParents.forEach(function (scrollParent) {
scrollParent.removeEventListener('scroll', instance.update, passive);
});
}
if (resize) {
window.removeEventListener('resize', instance.update, passive);
}
};
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'eventListeners',
enabled: true,
phase: 'write',
fn: function fn() {},
effect: effect,
data: {}
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/flip.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
 var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
 var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
function getExpandedFallbackPlacements(placement) {
if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__.auto) {
return [];
}
var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}
function flip(_ref) {
var state = _ref.state,
options = _ref.options,
name = _ref.name;
if (state.modifiersData[name]._skip) {
return;
}
var _options$mainAxis = options.mainAxis,
checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
_options$altAxis = options.altAxis,
checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
specifiedFallbackPlacements = options.fallbackPlacements,
padding = options.padding,
boundary = options.boundary,
rootBoundary = options.rootBoundary,
altBoundary = options.altBoundary,
_options$flipVariatio = options.flipVariations,
flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
allowedAutoPlacements = options.allowedAutoPlacements;
var preferredPlacement = state.options.placement;
var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
var isBasePlacement = basePlacement === preferredPlacement;
var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
placement: placement,
boundary: boundary,
rootBoundary: rootBoundary,
padding: padding,
flipVariations: flipVariations,
allowedAutoPlacements: allowedAutoPlacements
}) : placement);
}, []);
var referenceRect = state.rects.reference;
var popperRect = state.rects.popper;
var checksMap = new Map();
var makeFallbackChecks = true;
var firstFittingPlacement = placements[0];
for (var i = 0; i < placements.length; i++) {
var placement = placements[i];
var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);
var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start;
var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom].indexOf(_basePlacement) >= 0;
var len = isVertical ? 'width' : 'height';
var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
placement: placement,
boundary: boundary,
rootBoundary: rootBoundary,
altBoundary: altBoundary,
padding: padding
});
var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.right : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.top;
if (referenceRect[len] > popperRect[len]) {
mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
}
var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
var checks = [];
if (checkMainAxis) {
checks.push(overflow[_basePlacement] <= 0);
}
if (checkAltAxis) {
checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
}
if (checks.every(function (check) {
return check;
})) {
firstFittingPlacement = placement;
makeFallbackChecks = false;
break;
}
checksMap.set(placement, checks);
}
if (makeFallbackChecks) {
var numberOfChecks = flipVariations ? 3 : 1;
var _loop = function _loop(_i) {
var fittingPlacement = placements.find(function (placement) {
var checks = checksMap.get(placement);
if (checks) {
return checks.slice(0, _i).every(function (check) {
return check;
});
}
});
if (fittingPlacement) {
firstFittingPlacement = fittingPlacement;
return "break";
}
};
for (var _i = numberOfChecks; _i > 0; _i--) {
var _ret = _loop(_i);
if (_ret === "break") break;
}
}
if (state.placement !== firstFittingPlacement) {
state.modifiersData[name]._skip = true;
state.placement = firstFittingPlacement;
state.reset = true;
}
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'flip',
enabled: true,
phase: 'main',
fn: flip,
requiresIfExists: ['offset'],
data: {
_skip: false
}
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/hide.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
function getSideOffsets(overflow, rect, preventedOffsets) {
if (preventedOffsets === void 0) {
preventedOffsets = {
x: 0,
y: 0
};
}
return {
top: overflow.top - rect.height - preventedOffsets.y,
right: overflow.right - rect.width + preventedOffsets.x,
bottom: overflow.bottom - rect.height + preventedOffsets.y,
left: overflow.left - rect.width - preventedOffsets.x
};
}
function isAnySideFullyClipped(overflow) {
return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
return overflow[side] >= 0;
});
}
function hide(_ref) {
var state = _ref.state,
name = _ref.name;
var referenceRect = state.rects.reference;
var popperRect = state.rects.popper;
var preventedOffsets = state.modifiersData.preventOverflow;
var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
elementContext: 'reference'
});
var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
altBoundary: true
});
var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
state.modifiersData[name] = {
referenceClippingOffsets: referenceClippingOffsets,
popperEscapeOffsets: popperEscapeOffsets,
isReferenceHidden: isReferenceHidden,
hasPopperEscaped: hasPopperEscaped
};
state.attributes.popper = Object.assign({}, state.attributes.popper, {
'data-popper-reference-hidden': isReferenceHidden,
'data-popper-escaped': hasPopperEscaped
});
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'hide',
enabled: true,
phase: 'main',
requiresIfExists: ['preventOverflow'],
fn: hide
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/index.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   applyStyles: function() { return  _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
   arrow: function() { return  _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
   computeStyles: function() { return  _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
   eventListeners: function() { return  _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
   flip: function() { return  _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
   hide: function() { return  _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
   offset: function() { return  _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
   popperOffsets: function() { return  _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
   preventOverflow: function() { return  _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"]; }
 });
 var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
 var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
 var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
 var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
 var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
 var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
 var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
 var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
 var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
 }),
 "./node_modules/@popperjs/core/lib/modifiers/offset.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   distanceAndSkiddingToXY: function() { return  distanceAndSkiddingToXY; }
 });
 var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
function distanceAndSkiddingToXY(placement, rects, offset) {
var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;
var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
placement: placement
})) : offset,
skidding = _ref[0],
distance = _ref[1];
skidding = skidding || 0;
distance = (distance || 0) * invertDistance;
return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {
x: distance,
y: skidding
} : {
x: skidding,
y: distance
};
}
function offset(_ref2) {
var state = _ref2.state,
options = _ref2.options,
name = _ref2.name;
var _options$offset = options.offset,
offset = _options$offset === void 0 ? [0, 0] : _options$offset;
var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {
acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
return acc;
}, {});
var _data$state$placement = data[state.placement],
x = _data$state$placement.x,
y = _data$state$placement.y;
if (state.modifiersData.popperOffsets != null) {
state.modifiersData.popperOffsets.x += x;
state.modifiersData.popperOffsets.y += y;
}
state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'offset',
enabled: true,
phase: 'main',
requires: ['popperOffsets'],
fn: offset
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
function popperOffsets(_ref) {
var state = _ref.state,
name = _ref.name;
state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
reference: state.rects.reference,
element: state.rects.popper,
strategy: 'absolute',
placement: state.placement
});
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'popperOffsets',
enabled: true,
phase: 'read',
fn: popperOffsets,
data: {}
});
 }),
 "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
 var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
 var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
 var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
 var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
 var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
 var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
 var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
function preventOverflow(_ref) {
var state = _ref.state,
options = _ref.options,
name = _ref.name;
var _options$mainAxis = options.mainAxis,
checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
_options$altAxis = options.altAxis,
checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
boundary = options.boundary,
rootBoundary = options.rootBoundary,
altBoundary = options.altBoundary,
padding = options.padding,
_options$tether = options.tether,
tether = _options$tether === void 0 ? true : _options$tether,
_options$tetherOffset = options.tetherOffset,
tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
boundary: boundary,
rootBoundary: rootBoundary,
padding: padding,
altBoundary: altBoundary
});
var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
var isBasePlacement = !variation;
var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
var popperOffsets = state.modifiersData.popperOffsets;
var referenceRect = state.rects.reference;
var popperRect = state.rects.popper;
var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
placement: state.placement
})) : tetherOffset;
var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
mainAxis: tetherOffsetValue,
altAxis: tetherOffsetValue
} : Object.assign({
mainAxis: 0,
altAxis: 0
}, tetherOffsetValue);
var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
var data = {
x: 0,
y: 0
};
if (!popperOffsets) {
return;
}
if (checkMainAxis) {
var _offsetModifierState$;
var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.top : _enums_js__WEBPACK_IMPORTED_MODULE_0__.left;
var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_0__.right;
var len = mainAxis === 'y' ? 'height' : 'width';
var offset = popperOffsets[mainAxis];
var min = offset + overflow[mainSide];
var max = offset - overflow[altSide];
var additive = tether ? -popperRect[len] / 2 : 0;
var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__.start ? referenceRect[len] : popperRect[len];
var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
var arrowElement = state.elements.arrow;
var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
width: 0,
height: 0
};
var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
var arrowPaddingMin = arrowPaddingObject[mainSide];
var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_4__.within)(0, referenceRect[len], arrowRect[len]);
var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
var tetherMax = offset + maxOffset - offsetModifierValue;
var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_4__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);
popperOffsets[mainAxis] = preventedOffset;
data[mainAxis] = preventedOffset - offset;
}
if (checkAltAxis) {
var _offsetModifierState$2;
var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.top : _enums_js__WEBPACK_IMPORTED_MODULE_0__.left;
var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_0__.right;
var _offset = popperOffsets[altAxis];
var _len = altAxis === 'y' ? 'height' : 'width';
var _min = _offset + overflow[_mainSide];
var _max = _offset - overflow[_altSide];
var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].indexOf(basePlacement) !== -1;
var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_4__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_4__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
popperOffsets[altAxis] = _preventedOffset;
data[altAxis] = _preventedOffset - _offset;
}
state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
 __webpack_exports__["default"] = ({
name: 'preventOverflow',
enabled: true,
phase: 'main',
fn: preventOverflow,
requiresIfExists: ['offset']
});
 }),
 "./node_modules/@popperjs/core/lib/popper-lite.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   createPopper: function() { return  createPopper; },
   defaultModifiers: function() { return  defaultModifiers; },
   detectOverflow: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
   popperGenerator: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_0__.popperGenerator; }
 });
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
 var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
 var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
 var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"]];
var createPopper = (0,_createPopper_js__WEBPACK_IMPORTED_MODULE_0__.popperGenerator)({
defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
 }),
 "./node_modules/@popperjs/core/lib/popper.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   applyStyles: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles; },
   arrow: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow; },
   computeStyles: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles; },
   createPopper: function() { return  createPopper; },
   createPopperLite: function() { return  _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper; },
   defaultModifiers: function() { return  defaultModifiers; },
   detectOverflow: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
   eventListeners: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners; },
   flip: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip; },
   hide: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide; },
   offset: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset; },
   popperGenerator: function() { return  _createPopper_js__WEBPACK_IMPORTED_MODULE_0__.popperGenerator; },
   popperOffsets: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets; },
   preventOverflow: function() { return  _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow; }
 });
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
 var _createPopper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
 var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
 var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
 var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js");
 var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/offset.js */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
 var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/flip.js */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
 var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
 var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modifiers/arrow.js */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
 var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modifiers/hide.js */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
 var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ "./node_modules/@popperjs/core/lib/popper-lite.js");
 var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ "./node_modules/@popperjs/core/lib/modifiers/index.js");
var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_9__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
var createPopper = (0,_createPopper_js__WEBPACK_IMPORTED_MODULE_0__.popperGenerator)({
defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
 }),
 "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  computeAutoPlacement; }
 });
 var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
 var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
function computeAutoPlacement(state, options) {
if (options === void 0) {
options = {};
}
var _options = options,
placement = _options.placement,
boundary = _options.boundary,
rootBoundary = _options.rootBoundary,
padding = _options.padding,
flipVariations = _options.flipVariations,
_options$allowedAutoP = _options.allowedAutoPlacements,
allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements : _options$allowedAutoP;
var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_1__.variationPlacements.filter(function (placement) {
return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
}) : _enums_js__WEBPACK_IMPORTED_MODULE_1__.basePlacements;
var allowedPlacements = placements.filter(function (placement) {
return allowedAutoPlacements.indexOf(placement) >= 0;
});
if (allowedPlacements.length === 0) {
allowedPlacements = placements;
} // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows = allowedPlacements.reduce(function (acc, placement) {
acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
placement: placement,
boundary: boundary,
rootBoundary: rootBoundary,
padding: padding
})[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
return acc;
}, {});
return Object.keys(overflows).sort(function (a, b) {
return overflows[a] - overflows[b];
});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  computeOffsets; }
 });
 var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
 var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
 var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
function computeOffsets(_ref) {
var reference = _ref.reference,
element = _ref.element,
placement = _ref.placement;
var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
var commonX = reference.x + reference.width / 2 - element.width / 2;
var commonY = reference.y + reference.height / 2 - element.height / 2;
var offsets;
switch (basePlacement) {
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.top:
offsets = {
x: commonX,
y: reference.y - element.height
};
break;
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.bottom:
offsets = {
x: commonX,
y: reference.y + reference.height
};
break;
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.right:
offsets = {
x: reference.x + reference.width,
y: commonY
};
break;
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.left:
offsets = {
x: reference.x - element.width,
y: commonY
};
break;
default:
offsets = {
x: reference.x,
y: reference.y
};
}
var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;
if (mainAxis != null) {
var len = mainAxis === 'y' ? 'height' : 'width';
switch (variation) {
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.start:
offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
break;
case _enums_js__WEBPACK_IMPORTED_MODULE_3__.end:
offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
break;
default:
}
}
return offsets;
}
 }),
 "./node_modules/@popperjs/core/lib/utils/debounce.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  debounce; }
 });
function debounce(fn) {
var pending;
return function () {
if (!pending) {
pending = new Promise(function (resolve) {
Promise.resolve().then(function () {
pending = undefined;
resolve(fn());
});
});
}
return pending;
};
}
 }),
 "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  detectOverflow; }
 });
 var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
 var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
 var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
 var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
 var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
 var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
 var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
 var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
function detectOverflow(state, options) {
if (options === void 0) {
options = {};
}
var _options = options,
_options$placement = _options.placement,
placement = _options$placement === void 0 ? state.placement : _options$placement,
_options$strategy = _options.strategy,
strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
_options$boundary = _options.boundary,
boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.clippingParents : _options$boundary,
_options$rootBoundary = _options.rootBoundary,
rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.viewport : _options$rootBoundary,
_options$elementConte = _options.elementContext,
elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.popper : _options$elementConte,
_options$altBoundary = _options.altBoundary,
altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
_options$padding = _options.padding,
padding = _options$padding === void 0 ? 0 : _options$padding;
var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__.basePlacements));
var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_5__.popper;
var popperRect = state.rects.popper;
var element = state.elements[altBoundary ? altContext : elementContext];
var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.reference);
var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
reference: referenceClientRect,
element: popperRect,
strategy: 'absolute',
placement: placement
});
var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign({}, popperRect, popperOffsets));
var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
var overflowOffsets = {
top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
right: elementClientRect.right - clippingClientRect.right + paddingObject.right
};
var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__.popper && offsetData) {
var offset = offsetData[placement];
Object.keys(overflowOffsets).forEach(function (key) {
var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.right, _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom].indexOf(key) >= 0 ? 1 : -1;
var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
overflowOffsets[key] += offset[axis] * multiply;
});
}
return overflowOffsets;
}
 }),
 "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  expandToHashMap; }
 });
function expandToHashMap(value, keys) {
return keys.reduce(function (hashMap, key) {
hashMap[key] = value;
return hashMap;
}, {});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getAltAxis; }
 });
function getAltAxis(axis) {
return axis === 'x' ? 'y' : 'x';
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getBasePlacement; }
 });
function getBasePlacement(placement) {
return placement.split('-')[0];
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getFreshSideObject; }
 });
function getFreshSideObject() {
return {
top: 0,
right: 0,
bottom: 0,
left: 0
};
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getMainAxisFromPlacement; }
 });
function getMainAxisFromPlacement(placement) {
return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getOppositePlacement; }
 });
var hash = {
left: 'right',
right: 'left',
bottom: 'top',
top: 'bottom'
};
function getOppositePlacement(placement) {
return placement.replace(/left|right|bottom|top/g, function (matched) {
return hash[matched];
});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getOppositeVariationPlacement; }
 });
var hash = {
start: 'end',
end: 'start'
};
function getOppositeVariationPlacement(placement) {
return placement.replace(/start|end/g, function (matched) {
return hash[matched];
});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/getVariation.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getVariation; }
 });
function getVariation(placement) {
return placement.split('-')[1];
}
 }),
 "./node_modules/@popperjs/core/lib/utils/math.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   max: function() { return  max; },
   min: function() { return  min; },
   round: function() { return  round; }
 });
var max = Math.max;
var min = Math.min;
var round = Math.round;
 }),
 "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  mergeByName; }
 });
function mergeByName(modifiers) {
var merged = modifiers.reduce(function (merged, current) {
var existing = merged[current.name];
merged[current.name] = existing ? Object.assign({}, existing, current, {
options: Object.assign({}, existing.options, current.options),
data: Object.assign({}, existing.data, current.data)
}) : current;
return merged;
}, {}); // IE11 does not support Object.values
return Object.keys(merged).map(function (key) {
return merged[key];
});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  mergePaddingObject; }
 });
 var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");
function mergePaddingObject(paddingObject) {
return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}
 }),
 "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  orderModifiers; }
 });
 var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
function order(modifiers) {
var map = new Map();
var visited = new Set();
var result = [];
modifiers.forEach(function (modifier) {
map.set(modifier.name, modifier);
}); // On visiting object, check for its dependencies and visit them recursively
function sort(modifier) {
visited.add(modifier.name);
var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
requires.forEach(function (dep) {
if (!visited.has(dep)) {
var depModifier = map.get(dep);
if (depModifier) {
sort(depModifier);
}
}
});
result.push(modifier);
}
modifiers.forEach(function (modifier) {
if (!visited.has(modifier.name)) {
sort(modifier);
}
});
return result;
}
function orderModifiers(modifiers) {
var orderedModifiers = order(modifiers); // order based on phase
return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
return acc.concat(orderedModifiers.filter(function (modifier) {
return modifier.phase === phase;
}));
}, []);
}
 }),
 "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  rectToClientRect; }
 });
function rectToClientRect(rect) {
return Object.assign({}, rect, {
left: rect.x,
top: rect.y,
right: rect.x + rect.width,
bottom: rect.y + rect.height
});
}
 }),
 "./node_modules/@popperjs/core/lib/utils/userAgent.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  getUAString; }
 });
function getUAString() {
var uaData = navigator.userAgentData;
if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
return uaData.brands.map(function (item) {
return item.brand + "/" + item.version;
}).join(' ');
}
return navigator.userAgent;
}
 }),
 "./node_modules/@popperjs/core/lib/utils/within.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   within: function() { return  within; },
   withinMaxClamp: function() { return  withinMaxClamp; }
 });
 var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/@popperjs/core/lib/utils/math.js");
function within(min, value, max) {
return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));
}
function withinMaxClamp(min, value, max) {
var v = within(min, value, max);
return v > max ? max : v;
}
 }),
 "./assets/js/components-noncritical.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _utilities_components_add_document_event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/components/add-document-event-listeners */ "./assets/js/utilities/components/add-document-event-listeners.js");
 var _components_AjaxCollection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AjaxCollection.component */ "./assets/js/components/AjaxCollection.component.js");
 var _components_CookieControl_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CookieControl.component */ "./assets/js/components/CookieControl.component.js");
 var _components_FormEmbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FormEmbed.component */ "./assets/js/components/FormEmbed.component.js");
 var _components_VideoModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/VideoModal.component */ "./assets/js/components/VideoModal.component.js");
 var _components_FormModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FormModal.component */ "./assets/js/components/FormModal.component.js");
 var _components_GalleryBlock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GalleryBlock.component */ "./assets/js/components/GalleryBlock.component.js");
 var _components_GoogleMap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/GoogleMap.component */ "./assets/js/components/GoogleMap.component.js");
 var _components_PageHeader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PageHeader.component */ "./assets/js/components/PageHeader.component.js");
 var _components_LoginFormFragment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LoginFormFragment.component */ "./assets/js/components/LoginFormFragment.component.js");
 var _components_ResponsiveVideo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ResponsiveVideo.component */ "./assets/js/components/ResponsiveVideo.component.js");
 var _components_SwiperBase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/SwiperBase.component */ "./assets/js/components/SwiperBase.component.js");
 var _components_SwiperThumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SwiperThumb.component */ "./assets/js/components/SwiperThumb.component.js");
 var _components_VideoPoster_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/VideoPoster.component */ "./assets/js/components/VideoPoster.component.js");
 var _components_AccessibilitySkips_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/AccessibilitySkips.component */ "./assets/js/components/AccessibilitySkips.component.js");
 var _components_FocusTrap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/FocusTrap.component */ "./assets/js/components/FocusTrap.component.js");
var componentConfiguration = [{
Component: _components_AjaxCollection_component__WEBPACK_IMPORTED_MODULE_1__["default"],
selector: '.ajax-collection',
options: {
posters: 'img.video-poster',
vimeoClass: 'vimeo-poster',
dailymotionClass: 'dailymotion-poster',
posterLinkElement: '.js-video-poster'
}
}, {
Component: _components_CookieControl_component__WEBPACK_IMPORTED_MODULE_2__["default"],
selector: '#ng-cc',
options: {
optionalSaveBtn: '#ng-cc-accept, #ng-cc-optional-save',
optionalList: '.ng-cc-optional-list',
optionalListToggle: '.optional-list-toggle',
rotateArrowClass: 'rotate-arrow',
shownClass: 'shown',
modal: '.ng-cc-modal'
}
}, {
Component: _components_VideoModal_component__WEBPACK_IMPORTED_MODULE_4__["default"],
selector: '.js-modal-video-trigger'
}, {
Component: _components_FormModal_component__WEBPACK_IMPORTED_MODULE_5__["default"],
selector: '.js-form-modal-trigger'
}, {
Component: _components_FormEmbed_component__WEBPACK_IMPORTED_MODULE_3__["default"],
selector: '.js-form-embed'
}, {
Component: _components_GalleryBlock_component__WEBPACK_IMPORTED_MODULE_6__["default"],
selector: '.ngl-vt-grid_gallery'
}, {
Component: _components_GoogleMap_component__WEBPACK_IMPORTED_MODULE_7__["default"],
selector: '.explayouts-map-embed'
}, {
Component: _components_PageHeader_component__WEBPACK_IMPORTED_MODULE_8__["default"],
selector: '.site-header',
options: {
pageWrapper: 'html',
navToggle: '.mainnav-toggle',
searchToggle: '.searchbox-toggle',
headerSearch: '.header-search',
searchInput: 'input.search-query',
mainNav: '.main-navigation ul.navbar-nav',
menuLevel1: '.menu_level_1',
navActiveClass: 'mainnav-active',
searchboxActiveClass: 'searchbox-active',
submenuTriggerElement: 'i',
submenuTriggerClass: 'submenu-trigger',
submenuDataParam: 'submenu',
submenuActiveClass: 'submenu-active',
navigationList: 'ul.nav.navbar-nav',
filledClass: 'filled',
languageSelector: '.site-header .language-selector',
stickyHeader: '.site-header-sticky'
}
}, {
Component: _components_LoginFormFragment_component__WEBPACK_IMPORTED_MODULE_9__["default"],
selector: 'form[name="loginform"]'
}, {
Component: _components_ResponsiveVideo_component__WEBPACK_IMPORTED_MODULE_10__["default"],
selector: '.js-responsive-video'
}, {
Component: _components_SwiperBase_component__WEBPACK_IMPORTED_MODULE_11__["default"],
selector: '.related-multimedia.swiper',
options: {
swiperPreviousButton: '.swiper-button-prev',
swiperNextButton: '.swiper-button-next',
swiperPagination: '.swiper-pagination'
}
}, {
Component: _components_SwiperBase_component__WEBPACK_IMPORTED_MODULE_11__["default"],
selector: '.sushi-swiper',
options: {
swiperPreviousButton: '.swiper-button-prev',
swiperNextButton: '.swiper-button-next',
swiperPagination: '.swiper-pagination',
swiperPaginationType: 'bullets',
swiperConfig: {
watchSlidesProgress: true,
spaceBetween: 30,
preventClicks: false,
preventClicksPropagation: false,
slidesPerView: 1.2,
breakpoints: {
767: {
slidesPerView: 2.2
},
1199: {
slidesPerView: 3
}
}
}
}
}, {
Component: _components_SwiperBase_component__WEBPACK_IMPORTED_MODULE_11__["default"],
selector: '.default-swiper',
options: {
swiperPreviousButton: '.swiper-button-prev',
swiperNextButton: '.swiper-button-next',
swiperPagination: '.swiper-pagination',
swiperConfig: {
preloadImages: false,
watchSlidesVisibility: true,
lazy: {
loadPrevNext: true,
loadPrevNextAmount: 1,
loadOnTransitionStart: true
},
keyboard: {
enabled: true
},
autoHeight: true,
slidesPerView: 1.2,
breakpoints: {
1199: {
slidesPerView: 1,
spaceBetween: 30
}
}
}
}
}, {
Component: _components_SwiperBase_component__WEBPACK_IMPORTED_MODULE_11__["default"],
selector: '.quote-swiper',
options: {
swiperPreviousButton: '.swiper-button-prev',
swiperNextButton: '.swiper-button-next',
swiperPagination: '.swiper-pagination',
swiperConfig: {
preloadImages: false,
watchSlidesVisibility: true,
lazy: {
loadPrevNext: true,
loadPrevNextAmount: 1,
loadOnTransitionStart: true
},
keyboard: {
enabled: true
}
}
}
}, {
Component: _components_SwiperThumb_component__WEBPACK_IMPORTED_MODULE_12__["default"],
selector: '.thumb-swiper',
options: {
swiperPreviousButton: '.swiper-button-prev',
swiperNextButton: '.swiper-button-next',
topSwiper: '.gallery-top',
topSwiperConfig: {
spaceBetween: 10,
preloadImages: false,
watchSlidesVisibility: true,
lazy: {
loadPrevNext: true,
loadPrevNextAmount: 1,
loadOnTransitionStart: true
},
autoHeight: true
},
thumbnailsSwiper: '.gallery-thumbs',
thumbnailsSwiperConfig: {
spaceBetween: 10,
centeredSlides: true,
slidesPerView: '4',
touchRatio: 0.2,
slideToClickedSlide: true
}
}
}, {
Component: _components_VideoPoster_component__WEBPACK_IMPORTED_MODULE_13__["default"],
selector: '.video-poster',
options: {
vimeoClass: 'vimeo-poster',
dailymotionClass: 'dailymotion-poster',
posterLinkElement: '.js-video-poster'
}
}, {
Component: _components_AccessibilitySkips_component__WEBPACK_IMPORTED_MODULE_14__["default"],
selector: '#skip-to-main-content'
}, {
Component: _components_FocusTrap_component__WEBPACK_IMPORTED_MODULE_15__["default"],
selector: '.js-focus-trap',
options: {
deactivateSelectors: '.ng-cc-btn-close',
activeClass: '[open]'
}
}];
(0,_utilities_components_add_document_event_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])(componentConfiguration);
 }),
 "./assets/js/components/AccessibilitySkips.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  AccessibilitySkips; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AccessibilitySkips = function () {
function AccessibilitySkips(trigger, options) {
_classCallCheck(this, AccessibilitySkips);
this.trigger = trigger;
this.targetElement = document.querySelector(".".concat(this.trigger.dataset.targetClass));
this.options = options;
this.init();
}
return _createClass(AccessibilitySkips, [{
key: "init",
value: function init() {
this.trigger.addEventListener('click', this.handleTriggerClick.bind(this));
}
}, {
key: "handleTriggerClick",
value: function handleTriggerClick() {
this.targetElement.setAttribute('tabindex', '0');
this.targetElement.scrollIntoView({
behavior: 'smooth',
block: 'start',
inline: 'nearest'
});
this.trigger.blur();
this.targetElement.focus();
}
}]);
}();
 }),
 "./assets/js/components/AjaxCollection.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  AjaxCollection; }
 });
 var _VideoPoster_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPoster.component */ "./assets/js/components/VideoPoster.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AjaxCollection = function () {
function AjaxCollection(element, options) {
_classCallCheck(this, AjaxCollection);
this.element = element;
this.options = options;
this.init();
}
return _createClass(AjaxCollection, [{
key: "init",
value: function init() {
this.element.addEventListener('ajax-paging-added', this.handleAjaxPagingAddedEvent.bind(this), false);
}
}, {
key: "handleAjaxPagingAddedEvent",
value: function handleAjaxPagingAddedEvent() {
var _this = this;
var posters = this.element.querySelectorAll(this.options.posters);
posters.forEach(function (poster) {
new _VideoPoster_component__WEBPACK_IMPORTED_MODULE_0__["default"](poster, {
vimeoClass: _this.options.vimeoClass,
dailymotionClass: _this.options.dailymotionClass,
posterLinkElement: _this.options.posterLinkElement
});
});
}
}]);
}();
 }),
 "./assets/js/components/CookieControl.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  CookieControl; }
 });
 var _netgen_javascript_cookie_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @netgen/javascript-cookie-control */ "./node_modules/@netgen/javascript-cookie-control/dist/js/bundle.js");
 var _netgen_javascript_cookie_control__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_netgen_javascript_cookie_control__WEBPACK_IMPORTED_MODULE_0__);
 var _utilities_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/gtm */ "./assets/js/utilities/gtm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CookieControl = function () {
function CookieControl(element, options) {
_classCallCheck(this, CookieControl);
this.options = options;
this.modal = element.querySelector(options.modal);
this.optionalSaveBtn = element.querySelectorAll(options.optionalSaveBtn);
this.optionalList = element.querySelector(options.optionalList);
this.optionalListToggle = element.querySelector(options.optionalListToggle);
this.init();
}
return _createClass(CookieControl, [{
key: "init",
value: function init() {
CookieControl.initNetgenCookieControl(this.modal);
this.optionalListToggle.addEventListener('click', this.handleOptionalListToggle.bind(this));
this.optionalSaveBtn.forEach(function (element) {
return element.addEventListener('click', CookieControl.handleConsentChange);
});
}
}, {
key: "handleOptionalListToggle",
value: function handleOptionalListToggle(event) {
event.preventDefault();
this.optionalList.classList.toggle(this.options.shownClass);
var isVisible = this.optionalList.classList.contains(this.options.shownClass);
this.optionalList.style.maxHeight = isVisible ? "100vh" : '0px';
this.optionalListToggle.classList.toggle(this.options.rotateArrowClass);
this.optionalListToggle.classList.toggle(this.options.shownClass);
}
}], [{
key: "initNetgenCookieControl",
value: function initNetgenCookieControl(modal) {
var cookieControl = new (_netgen_javascript_cookie_control__WEBPACK_IMPORTED_MODULE_0___default())(window.__ngCcConfig);
cookieControl.open = function (e) {
e && e.preventDefault();
this.el.setAttribute('open', '');
this.opened = true;
modal.focus();
};
cookieControl.init();
}
}, {
key: "handleConsentChange",
value: function handleConsentChange(event) {
event.preventDefault();
_utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].push('ngcc', _utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].EVENTS.CHANGED);
if (typeof window.getCookieStatus === 'function') {
var analyticsStatus = window.getCookieStatus('ng-cc-analytics');
if (window.lastAnalyticsStatus !== analyticsStatus) {
window.gtag('consent', 'update', {
ad_storage: analyticsStatus,
analytics_storage: analyticsStatus
});
window.lastAnalyticsStatus = analyticsStatus;
var bcolor = analyticsStatus === 'granted' ? 'green' : 'orange';
console.info("%cAnalytics cookie changed to: ".concat(analyticsStatus), "color: white; background-color: ".concat(bcolor));
}
var marketingStatus = window.getCookieStatus('ng-cc-marketing');
if (window.lastMarketingStatus !== marketingStatus) {
window.gtag('consent', 'update', {
ad_user_data: marketingStatus,
ad_personalization: marketingStatus
});
window.lastMarketingStatus = marketingStatus;
var _bcolor = marketingStatus === 'granted' ? 'green' : 'orange';
console.info("%cMarketing cookie changed to: ".concat(marketingStatus), "color: white; background-color: ".concat(_bcolor));
}
}
}
}]);
}();
 }),
 "./assets/js/components/FocusTrap.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  FocusTrap; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FocusTrap = function () {
function FocusTrap(element, options) {
_classCallCheck(this, FocusTrap);
this.options = options;
this.element = element;
this.focusableSelectors = "\n      button, [href], input, select, textarea, iframe,\n      [tabindex]:not([tabindex=\"-1\"])\n    ";
this.focusableElements = [];
this.firstElement = null;
this.lastElement = null;
this.previousFocusElement = null;
this.isKeyboardClick = false;
this.init();
}
return _createClass(FocusTrap, [{
key: "init",
value: function init() {
var _this = this;
if (!this.element) {
console.warn('FocusTrap: container element does not exist.');
return;
}
this.checkFocusTrapState();
this.deactivateElements = this.element.querySelectorAll(this.options.deactivateSelectors);
this.deactivateElements.forEach(function (el) {
el.addEventListener('keydown', function (event) {
_this.isKeyboardClick = event.key === 'Enter';
_this.deactivateFocusTrap(el);
});
el.addEventListener('click', function () {
_this.deactivateFocusTrap(el);
});
});
new MutationObserver(this.checkFocusTrapState.bind(this)).observe(this.element, {
attributes: true,
attributeFilter: ['open']
});
}
}, {
key: "checkFocusTrapState",
value: function checkFocusTrapState() {
if (this.element.hasAttribute('open')) {
this.activateFocusTrap();
}
}
}, {
key: "activateFocusTrap",
value: function activateFocusTrap() {
this.previousFocusElement = document.activeElement;
this.focusableElements = Array.from(this.element.querySelectorAll(this.focusableSelectors));
if (!this.focusableElements.length) return;
var _ref = [this.focusableElements[0], this.focusableElements[this.focusableElements.length - 1]];
this.firstElement = _ref[0];
this.lastElement = _ref[1];
this.firstElement.focus();
document.addEventListener('keydown', this.handleTabKey.bind(this));
}
}, {
key: "deactivateFocusTrap",
value: function deactivateFocusTrap(el) {
document.removeEventListener('keydown', this.handleTabKey.bind(this));
if (this.isKeyboardClick) {
el.click();
FocusTrap.resetFocusToTop();
this.isKeyboardClick = false;
}
}
}, {
key: "handleTabKey",
value: function handleTabKey(event) {
if (event.key !== 'Tab') return;
if (event.shiftKey) {
if (document.activeElement === this.firstElement) {
event.preventDefault();
this.lastElement.focus();
}
} else if (document.activeElement === this.lastElement) {
event.preventDefault();
this.firstElement.focus();
}
}
}], [{
key: "resetFocusToTop",
value: function resetFocusToTop() {
window.scrollTo(0, 0);
var topElement = document.querySelector('#skip-to-main-content');
if (topElement) {
topElement.focus();
} else {
document.body.focus();
}
}
}]);
}();
 }),
 "./assets/js/components/FormEmbed.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  FormEmbed; }
 });
 var _utilities_form_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/form/submit */ "./assets/js/utilities/form/submit.js");
 var _utilities_form_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/form/validate */ "./assets/js/utilities/form/validate.js");
 var _utilities_form_setup_update_selected_files_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/form/setup-update-selected-files-list */ "./assets/js/utilities/form/setup-update-selected-files-list.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormEmbed = function () {
function FormEmbed(form) {
_classCallCheck(this, FormEmbed);
this.form = form;
this.init();
}
return _createClass(FormEmbed, [{
key: "init",
value: function init() {
(0,_utilities_form_setup_update_selected_files_list__WEBPACK_IMPORTED_MODULE_2__["default"])(this.form);
document.addEventListener('submit', this.handleSubmit.bind(this));
}
}, {
key: "handleSubmit",
value: function handleSubmit(e) {
var form = e.target.closest('.js-form-embed');
if (!form) return;
e.preventDefault();
this.form = form;
if ((0,_utilities_form_validate__WEBPACK_IMPORTED_MODULE_1__["default"])(this.form)) {
_utilities_form_submit__WEBPACK_IMPORTED_MODULE_0__["default"].bind(this, 'embed', e)();
}
}
}]);
}();
 }),
 "./assets/js/components/FormModal.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  FormModal; }
 });
 var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
 var _utilities_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/gtm */ "./assets/js/utilities/gtm.js");
 var _utilities_form_submit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/form/submit */ "./assets/js/utilities/form/submit.js");
 var _utilities_form_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/form/validate */ "./assets/js/utilities/form/validate.js");
 var _utilities_form_setup_update_selected_files_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/form/setup-update-selected-files-list */ "./assets/js/utilities/form/setup-update-selected-files-list.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormModal = function () {
function FormModal(trigger) {
_classCallCheck(this, FormModal);
this.trigger = trigger;
this.submitted = false;
this.form = null;
this.modal = null;
this.modalElement = null;
this.init();
}
return _createClass(FormModal, [{
key: "init",
value: function init() {
this.trigger.addEventListener('click', this.handleOpenModal.bind(this));
}
}, {
key: "handleOpenModal",
value: function handleOpenModal(event) {
event.preventDefault();
var url = this.trigger.dataset.url;
fetch(url).then(function (response) {
if (!response.ok) {
throw new Error();
}
return response.text();
}).then(this.openModal.bind(this)).catch(function (error) {
console.error("Failed to open modal form: ".concat(error));
});
}
}, {
key: "openModal",
value: function openModal(text) {
var template = document.createElement('template');
template.innerHTML = text.trim();
this.modalElement = template.content.firstElementChild;
this.modal = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal(this.modalElement);
this.form = this.modalElement.querySelector('form');
this.modalElement.addEventListener('hidden.bs.modal', this.closeModal.bind(this));
(0,_utilities_form_setup_update_selected_files_list__WEBPACK_IMPORTED_MODULE_4__["default"])(this.form);
this.form.addEventListener('submit', this.handleSubmit.bind(this));
document.body.appendChild(template.content);
this.submitted = false;
this.modal.show();
var gtmEventPrefix = this.form.dataset.gtmEventPrefix;
_utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].push(gtmEventPrefix, _utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].EVENTS.OPENED);
}
}, {
key: "handleSubmit",
value: function handleSubmit(e) {
e.preventDefault();
if ((0,_utilities_form_validate__WEBPACK_IMPORTED_MODULE_3__["default"])(this.form)) {
_utilities_form_submit__WEBPACK_IMPORTED_MODULE_2__["default"].bind(this, 'modal', e)();
}
}
}, {
key: "closeModal",
value: function closeModal() {
this.modal.dispose();
this.modalElement.remove();
if (this.submitted === false) {
var gtmEventPrefix = this.form.dataset.gtmEventPrefix;
_utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].push(gtmEventPrefix, _utilities_gtm__WEBPACK_IMPORTED_MODULE_1__["default"].EVENTS.CANCELLED);
}
}
}, {
key: "onSuccess",
value: function onSuccess() {
this.submitted = true;
}
}]);
}();
 }),
 "./assets/js/components/GalleryBlock.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  GalleryBlock; }
 });
 var photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe/lightbox */ "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GalleryBlock = function () {
function GalleryBlock(gallery) {
_classCallCheck(this, GalleryBlock);
this.gallery = gallery;
this.init();
}
return _createClass(GalleryBlock, [{
key: "init",
value: function init() {
this.setupLightbox();
}
}, {
key: "setupLightbox",
value: function setupLightbox() {
var lightboxGallery = this.gallery.querySelector('.js-lightbox-enabled');
if (lightboxGallery === null) {
return;
}
var lightbox = new photoswipe_lightbox__WEBPACK_IMPORTED_MODULE_0__["default"]({
gallery: lightboxGallery,
children: '.js-lightbox-item',
pswpModule: function pswpModule() {
return __webpack_require__.e(/*! import() */ "vendors-node_modules_photoswipe_dist_photoswipe_esm_js").then(__webpack_require__.bind(__webpack_require__,  "./node_modules/photoswipe/dist/photoswipe.esm.js"));
}
});
lightbox.init();
}
}]);
}();
 }),
 "./assets/js/components/GoogleMap.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  GoogleMap; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GoogleMap = function () {
function GoogleMap(element) {
_classCallCheck(this, GoogleMap);
if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
console.group('Google Maps error');
console.info('Global "google" or "google.maps" is not defined.');
console.log({
google: google
});
console.groupEnd();
return;
}
this.element = element;
this.latitude = parseFloat(this.element.dataset.latitude);
this.longitude = parseFloat(this.element.dataset.longitude);
this.zoom = parseInt(this.element.dataset.zoom, 10);
this.mapType = this.element.dataset.mapType;
this.showMarker = this.element.dataset.showMarker;
this.init();
}
return _createClass(GoogleMap, [{
key: "init",
value: function init() {
this.map = new google.maps.Map(this.element, {
center: {
lat: this.latitude,
lng: this.longitude
},
zoom: this.zoom,
mapTypeId: google.maps.MapTypeId[this.mapType],
scrollwheel: true
});
if (this.showMarker) {
this.marker = new google.maps.Marker({
position: {
lat: this.latitude,
lng: this.longitude
},
map: this.map,
title: ''
});
}
}
}]);
}();
 }),
 "./assets/js/components/LoginFormFragment.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  LoginFormFragment; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LoginFormFragment = function () {
function LoginFormFragment(form) {
_classCallCheck(this, LoginFormFragment);
this.form = form;
this.init();
}
return _createClass(LoginFormFragment, [{
key: "init",
value: function init() {
this.form.action += window.location.hash;
}
}]);
}();
 }),
 "./assets/js/components/PageHeader.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  PageHeader; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PageHeader = function () {
function PageHeader(_, options) {
var _this$headerSearch$qu, _this$headerSearch;
_classCallCheck(this, PageHeader);
this.options = options;
this.pageWrapper = document.querySelector(options.pageWrapper);
this.navToggle = document.querySelector(options.navToggle);
this.searchToggle = document.querySelector(options.searchToggle);
this.headerSearch = document.querySelector(options.headerSearch);
this.searchInput = (_this$headerSearch$qu = (_this$headerSearch = this.headerSearch) === null || _this$headerSearch === void 0 ? void 0 : _this$headerSearch.querySelector(options.searchInput)) !== null && _this$headerSearch$qu !== void 0 ? _this$headerSearch$qu : null;
this.mainNav = document.querySelector(options.mainNav);
this.level1Menus = [];
this.submenuTriggerElements = [];
this.languageSelector = document.querySelector(options.languageSelector);
this.stickyHeader = document.querySelector(options.stickyHeader);
this.init();
}
return _createClass(PageHeader, [{
key: "init",
value: function init() {
this.setActiveStateOnMenuItems();
this.navToggleSetup();
this.searchToggleSetup();
this.headerSearchSetup();
this.addSubmenuTriggers();
this.languageSelectorSetup();
this.stickyHeaderSetup();
}
}, {
key: "navToggleSetup",
value: function navToggleSetup() {
var _this = this;
if (this.navToggle === null) {
return;
}
var scrollTop = 0;
this.navToggle.addEventListener('click', function (event) {
event.preventDefault();
var ariaExpanded = _this.navToggle.getAttribute('aria-expanded') === 'true';
_this.navToggle.setAttribute('aria-expanded', ariaExpanded);
if (!_this.pageWrapper.classList.contains(_this.options.navActiveClass)) {
scrollTop = window.scrollY; // set scroll position intro variable
_this.changePageClasses({
add: _this.options.navActiveClass,
remove: _this.options.searchboxActiveClass
});
} else {
_this.changePageClasses({
remove: _this.options.navActiveClass
});
window.scrollTo({
top: scrollTop,
left: 0,
behavior: 'instant'
}); // scroll to saved position
}
});
}
}, {
key: "searchToggleSetup",
value: function searchToggleSetup() {
var _this2 = this;
if (this.searchToggle === null) {
return;
}
this.searchToggle.addEventListener('click', function (event) {
var _this2$searchInput;
event.preventDefault();
_this2.changePageClasses({
toggle: _this2.options.searchboxActiveClass,
remove: _this2.options.navActiveClass
});
var ariaExpanded = _this2.searchToggle.getAttribute('aria-expanded') === 'true';
_this2.searchToggle.setAttribute('aria-expanded', !ariaExpanded);
(_this2$searchInput = _this2.searchInput) === null || _this2$searchInput === void 0 || _this2$searchInput.focus();
});
}
}, {
key: "headerSearchSetup",
value: function headerSearchSetup() {
var _this3 = this;
if (this.headerSearch === null) {
return;
}
this.headerSearch.addEventListener('blur', function () {
_this3.changePageClasses({
remove: _this3.options.searchboxActiveClass
});
});
this.headerSearch.addEventListener('click', function (event) {
if (_this3.headerSearch.contains(event.target)) {
return;
}
_this3.changePageClasses({
remove: _this3.options.searchboxActiveClass
});
});
this.headerSearch.addEventListener('input', function () {
if (_this3.searchInput.value !== '') {
_this3.headerSearch.classList.add(_this3.options.filledClass);
return;
}
_this3.headerSearch.classList.remove(_this3.options.filledClass);
});
}
}, {
key: "addSubmenuTriggers",
value: function addSubmenuTriggers() {
var _this4 = this;
if (this.mainNav === null) {
return;
}
this.level1Menus = this.mainNav.querySelectorAll(this.options.menuLevel1);
if (this.level1Menus.length === 0) {
return;
}
this.level1Menus.forEach(function (menu) {
var submenuTriggerContent = document.createElement(_this4.options.submenuTriggerElement);
submenuTriggerContent.classList.add(_this4.options.submenuTriggerClass);
menu.parentElement.insertBefore(submenuTriggerContent, menu);
menu.parentElement.dataset[_this4.options.submenuDataParam] = true;
_this4.submenuTriggerElements.push(submenuTriggerContent);
});
this.submenuTriggerElements.forEach(function (submenuTrigger) {
submenuTrigger.addEventListener('click', function () {
_this4.toggleMobileSubmenu(submenuTrigger);
});
});
}
}, {
key: "toggleMobileSubmenu",
value: function toggleMobileSubmenu(submenuTrigger) {
submenuTrigger.parentElement.classList.toggle(this.options.submenuActiveClass);
}
}, {
key: "setActiveStateOnMenuItems",
value: function setActiveStateOnMenuItems() {
var _this5 = this;
if (page.dataset.path === undefined) {
return;
}
var activeItemsList = JSON.parse(page.dataset.path);
var navigationList = document.querySelectorAll(this.options.navigationList);
navigationList.forEach(function (navigation) {
activeItemsList.forEach(function (activeItemId) {
var item = navigation.querySelector("[data-location-id=\"".concat(activeItemId, "\"]"));
if (item !== null) {
item.classList.add('active', _this5.options.submenuActiveClass);
}
});
});
}
}, {
key: "languageSelectorSetup",
value: function languageSelectorSetup() {
var _this6 = this;
if (this.languageSelector === null) {
return;
}
this.languageSelector.addEventListener('show.bs.dropdown', function () {
_this6.removePageClass(_this6.options.navActiveClass);
_this6.removePageClass(_this6.options.searchboxActiveClass);
});
}
}, {
key: "changePageClasses",
value: function changePageClasses(_ref) {
var _ref$remove = _ref.remove,
remove = _ref$remove === void 0 ? null : _ref$remove,
_ref$add = _ref.add,
add = _ref$add === void 0 ? null : _ref$add,
_ref$toggle = _ref.toggle,
toggle = _ref$toggle === void 0 ? null : _ref$toggle;
if (remove !== null) {
this.removePageClass(remove);
}
if (add !== null) {
this.addPageClass(add);
}
if (toggle !== null) {
this.togglePageClass(toggle);
}
}
}, {
key: "removePageClass",
value: function removePageClass(classToRemove) {
this.pageWrapper.classList.remove(classToRemove);
}
}, {
key: "addPageClass",
value: function addPageClass(classToAdd) {
this.pageWrapper.classList.add(classToAdd);
}
}, {
key: "togglePageClass",
value: function togglePageClass(classToToggle) {
this.pageWrapper.classList.toggle(classToToggle);
}
}, {
key: "stickyHeaderSetup",
value: function stickyHeaderSetup() {
var _this7 = this;
if (this.stickyHeader === null) {
return;
}
['load', 'scroll', 'resize', 'orientationchange'].forEach(function (eventType) {
window.addEventListener(eventType, function () {
window.scrollY >= 1 ? _this7.stickyHeader.classList.add('site-header-sticky--active') : _this7.stickyHeader.classList.remove('site-header-sticky--active');
});
});
}
}]);
}();
 }),
 "./assets/js/components/ResponsiveVideo.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  VideoHandler; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VideoHandler = function () {
function VideoHandler(element) {
_classCallCheck(this, VideoHandler);
this.element = element;
this.init();
}
return _createClass(VideoHandler, [{
key: "init",
value: function init() {
this.setSourceBasedOnWindowSize();
}
}, {
key: "setSourceBasedOnWindowSize",
value: function setSourceBasedOnWindowSize() {
var srcDatasetKey = 'desktopVid';
if (window.innerWidth < 768) {
srcDatasetKey = 'mobileVid';
}
if (this.element.dataset[srcDatasetKey] === undefined) {
return;
}
var source = document.createElement('source');
source.src = this.element.dataset[srcDatasetKey];
source.type = 'video/mp4';
this.element.appendChild(source);
}
}]);
}();
 }),
 "./assets/js/components/SwiperBase.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  SwiperBase; }
 });
 var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SwiperBase = function () {
function SwiperBase(element, options) {
_classCallCheck(this, SwiperBase);
this.element = element;
this.dataset = element.dataset;
this.swiper = false;
this.swiperConfig = options.swiperConfig;
this.swiperPreviousButton = element.querySelector(options.swiperPreviousButton);
this.swiperNextButton = element.querySelector(options.swiperNextButton);
this.swiperPagination = element.querySelector(options.swiperPagination);
this.swiperPaginationType = options.swiperPaginationType;
this.init();
}
return _createClass(SwiperBase, [{
key: "init",
value: function init() {
var _this$dataset = this.dataset,
loop = _this$dataset.loop,
autoplay = _this$dataset.autoplay,
effect = _this$dataset.effect,
slidesPerView = _this$dataset.slidesPerView,
slidesPerGroup = _this$dataset.slidesPerGroup;
this.swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.element, _objectSpread({
navigation: {
nextEl: this.swiperNextButton,
prevEl: this.swiperPreviousButton
},
pagination: {
el: this.swiperPagination,
clickable: true,
type: this.swiperPaginationType ? this.swiperPaginationType : 'fraction'
},
loop: loop,
effect: effect,
autoplay: autoplay ? {
delay: autoplay * 1000
} : false,
slidesPerView: slidesPerView ? parseInt(slidesPerView, 10) : 1,
slidesPerGroup: slidesPerGroup ? parseInt(slidesPerGroup, 10) : parseInt(slidesPerView, 10) || 1,
on: {
lazyImageReady: function lazyImageReady() {
this.updateAutoHeight();
}
}
}, this.swiperConfig));
}
}]);
}();
 }),
 "./assets/js/components/SwiperThumb.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  SwiperThumb; }
 });
 var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SwiperThumb = function () {
function SwiperThumb(element, options) {
_classCallCheck(this, SwiperThumb);
this.options = options;
this.swiper = false;
this.swiperPreviousButton = element.querySelector(options.swiperPreviousButton);
this.swiperNextButton = element.querySelector(options.swiperNextButton);
this.topSwiper = element.querySelector(options.topSwiper);
this.topSwiperConfig = options.topSwiperConfig;
this.topDataset = this.topSwiper.dataset;
this.thumbnailsSwiper = element.querySelector(options.thumbnailsSwiper);
this.thumbnailsSwiperConfig = options.thumbnailsSwiperConfig;
this.init();
}
return _createClass(SwiperThumb, [{
key: "init",
value: function init() {
var _this$topDataset = this.topDataset,
loop = _this$topDataset.loop,
autoplay = _this$topDataset.autoplay,
effect = _this$topDataset.effect,
length = _this$topDataset.length;
var galleryTop = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.topSwiper, _objectSpread({
navigation: {
nextEl: this.swiperNextButton,
prevEl: this.swiperPreviousButton
},
loop: loop,
effect: effect,
autoplay: autoplay ? {
delay: autoplay * 1000
} : false,
loopedSlides: loop ? length : null,
on: {
lazyImageReady: function lazyImageReady() {
this.updateAutoHeight();
}
}
}, this.topSwiperConfig));
var galleryThumbs = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](this.thumbnailsSwiper, _objectSpread({
loop: loop
}, this.thumbnailsSwiperConfig));
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
}
}]);
}();
 }),
 "./assets/js/components/VideoModal.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  VideoModalComponent; }
 });
 var _utilities_bootstrap_modal_dynamic_bootstrap_modal_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/bootstrap-modal-dynamic/bootstrap-modal-dynamic */ "./assets/js/utilities/bootstrap-modal-dynamic/bootstrap-modal-dynamic.js");
 var _utilities_video_modal_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/video-modal/templates */ "./assets/js/utilities/video-modal/templates.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VideoModalComponent = function () {
function VideoModalComponent(trigger, options) {
_classCallCheck(this, VideoModalComponent);
this.options = options;
this.trigger = trigger;
this.collectedVideoOptions = null;
this.bootstrapModalDynamic = null;
this.modalContent = null;
this.promises = [];
this.externalAssets = [{
url: 'https://vjs.zencdn.net/7.20.3/video-js.min.css',
type: 'text/css'
}, {
url: 'https://vjs.zencdn.net/7.20.3/video.min.js',
type: 'text/javascript'
}];
this.internalAssets = [{
url: 'local-modal-style',
type: 'text/css'
}];
this.init();
}
return _createClass(VideoModalComponent, [{
key: "init",
value: function init() {
this.trigger.addEventListener('click', this.handleButtonClick.bind(this));
}
}, {
key: "handleButtonClick",
value: function handleButtonClick(event) {
event.preventDefault();
this.collectedVideoOptions = JSON.parse(this.trigger.getAttribute('data-video-options'));
this.getResources();
this.setupVideoData();
}
}, {
key: "getResources",
value: function getResources() {
this.internalAssets.forEach(function (asset) {
if (document.querySelector("[data-id=\"video-".concat(asset.url, "\"]")) === null) {
VideoModalComponent.loadResources(asset, _utilities_video_modal_templates__WEBPACK_IMPORTED_MODULE_1__.videoModalStyleTemplate());
}
});
if (this.collectedVideoOptions.type === 'upload') {
this.externalAssets.forEach(function (asset) {
if (document.querySelector("[data-id=\"video-".concat(asset.url, "\"]")) === null) {
fetch(asset.url).then(function (response) {
if (!response.ok) {
throw new Error();
}
return response.text();
}).then(function (data) {
return VideoModalComponent.loadResources(asset, data);
}).catch(function (error) {
console.error("Failed to load resources: ".concat(error));
});
}
});
}
}
}, {
key: "setupVideoData",
value: function setupVideoData() {
this.collectedVideoOptions.id = "video-js-".concat(this.collectedVideoOptions.type);
this.collectedVideoOptions.width = '100%';
this.collectedVideoOptions.controls = 'controls';
this.collectedVideoOptions.preload = 'auto';
this.collectedVideoOptions.class = 'vjs-fill';
var autoplayAttribute = '';
if (this.collectedVideoOptions.autoplay === true) {
autoplayAttribute = 'autoplay';
if (this.collectedVideoOptions.type !== 'upload') {
autoplayAttribute += ' allow="autoplay"';
}
}
this.createModalContent(autoplayAttribute);
}
}, {
key: "createModalContent",
value: function createModalContent(autoplayAttribute) {
var template = _utilities_video_modal_templates__WEBPACK_IMPORTED_MODULE_1__["".concat(this.collectedVideoOptions.type, "VideoTemplate")];
var templateOptions = {
autoplayAttribute: autoplayAttribute
};
if (this.collectedVideoOptions.type === 'upload') {
templateOptions.collectedVideoOptions = this.collectedVideoOptions;
templateOptions.videoSource = _utilities_video_modal_templates__WEBPACK_IMPORTED_MODULE_1__.videoSourceTemplate(this.collectedVideoOptions);
} else {
templateOptions.videoIdentifier = this.collectedVideoOptions.identifier;
templateOptions.type = this.collectedVideoOptions.type;
templateOptions.videoTitle = this.collectedVideoOptions.videoTitle;
templateOptions.thumbnail = this.collectedVideoOptions.thumbnail;
}
this.modalContent = template(templateOptions);
this.createBootstrapModalDynamic();
}
}, {
key: "createBootstrapModalDynamic",
value: function createBootstrapModalDynamic() {
this.bootstrapModalDynamic = new _utilities_bootstrap_modal_dynamic_bootstrap_modal_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"]({
receivedContent: this.modalContent,
modalCssClasses: 'video-modal',
dialogCssClasses: 'modal-dialog-centered modal-fullscreen',
modalId: 'video-js-modal',
transition: 'fade'
});
}
}], [{
key: "loadResources",
value: function loadResources(asset, data) {
var fileRef = null;
if (asset.type === 'text/javascript') {
fileRef = document.createElement('script');
} else if (asset.type === 'text/css') {
fileRef = document.createElement('style');
}
fileRef.innerHTML = data;
fileRef.setAttribute('data-id', "video-".concat(asset.url));
fileRef.setAttribute('type', asset.type);
document.body.appendChild(fileRef);
}
}]);
}();
 }),
 "./assets/js/components/VideoPoster.component.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  VideoPoster; }
 });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() {  var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var VideoPoster = function () {
function VideoPoster(element, options) {
_classCallCheck(this, VideoPoster);
this.element = element;
this.options = options;
this.videoId = element.dataset.id;
this.thumbname = element.dataset.thumbname;
this.service = false;
this.url = false;
this.getUrl = false;
this.init();
}
return _createClass(VideoPoster, [{
key: "init",
value: function () {
var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
return _regenerator().w(function (_context) {
while (1) switch (_context.n) {
case 0:
this.setService();
this.setUrls();
_context.n = 1;
return this.fetchPoster();
case 1:
this.setPosterLinks();
case 2:
return _context.a(2);
}
}, _callee, this);
}));
function init() {
return _init.apply(this, arguments);
}
return init;
}()
}, {
key: "setService",
value: function setService() {
if (this.element.classList.contains(this.options.vimeoClass)) {
this.service = 'vimeo';
} else if (this.element.classList.contains(this.options.dailymotionClass)) {
this.service = 'dailymotion';
}
}
}, {
key: "setUrls",
value: function setUrls() {
var _this = this;
if (this.service === 'dailymotion') {
this.url = "https://api.dailymotion.com/video/".concat(this.videoId, "?fields=").concat(this.thumbname);
this.getUrl = function (obj) {
return obj[_this.thumbname];
};
} else if (this.service === 'vimeo') {
this.url = "https://vimeo.com/api/v2/video/".concat(this.videoId, ".json");
this.getUrl = function (obj) {
return obj[0][_this.thumbname];
};
}
}
}, {
key: "fetchPoster",
value: function () {
var _fetchPoster = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
var _this2 = this;
return _regenerator().w(function (_context2) {
while (1) switch (_context2.n) {
case 0:
_context2.n = 1;
return fetch(this.url).then(function (res) {
return res.json();
}).then(function (data) {
_this2.element.src = _this2.getUrl(data);
}).catch(console.error);
case 1:
return _context2.a(2);
}
}, _callee2, this);
}));
function fetchPoster() {
return _fetchPoster.apply(this, arguments);
}
return fetchPoster;
}()
}, {
key: "setPosterLinks",
value: function setPosterLinks() {
var link = this.element.closest(this.options.posterLinkElement);
if (link === null) {
return;
}
link.href = this.element.src;
}
}]);
}();
 }),
 "./assets/js/index-noncritical.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 var _sass_style_noncritical_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style-noncritical.scss */ "./assets/sass/style-noncritical.scss");
 var _components_noncritical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components-noncritical */ "./assets/js/components-noncritical.js");
 }),
 "./assets/js/utilities/bootstrap-modal-dynamic/bootstrap-modal-dynamic.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  BootstrapModalDynamic; }
 });
 var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var bootstrapModalTemplate = function bootstrapModalTemplate(modalCssClasses, dialogCssClasses) {
var modalId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bootstrap-modal-placeholder';
var transition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'fade';
return "<div id=\"".concat(modalId, "\" class=\"modal ").concat(transition, " ").concat(modalCssClasses, "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" data-backdrop=\"static\">\n    <div class=\"modal-dialog ").concat(dialogCssClasses, "\" role=\"document\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n          </div>\n          <div class=\"modal-body\"></div>\n      </div>\n    </div>\n</div>");
};
var BootstrapModalDynamic = function () {
function BootstrapModalDynamic(_ref) {
var receivedContent = _ref.receivedContent,
modalCssClasses = _ref.modalCssClasses,
dialogCssClasses = _ref.dialogCssClasses,
modalId = _ref.modalId,
transition = _ref.transition,
onOpenCallback = _ref.onOpenCallback,
onCloseCallback = _ref.onCloseCallback;
_classCallCheck(this, BootstrapModalDynamic);
this.modalCssClasses = modalCssClasses;
this.dialogCssClasses = dialogCssClasses;
this.modalId = modalId;
this.transition = transition;
this.receivedContent = receivedContent;
this.onOpenCallback = onOpenCallback;
this.onCloseCallback = onCloseCallback;
this.modalShown = false;
this.modalElement = null;
this.bootstrapModal = null;
this.tempModal = document.createElement('tempModal');
this.contentElement = null;
this.tempContent = document.createElement('tempContent');
this.init();
}
return _createClass(BootstrapModalDynamic, [{
key: "init",
value: function init() {
if (this.modalShown) {
this.closeModal();
}
this.createModal();
}
}, {
key: "createModal",
value: function createModal() {
this.tempModal.innerHTML = bootstrapModalTemplate(this.modalCssClasses, this.dialogCssClasses, this.modalId, this.transition);
this.modalElement = this.tempModal.firstChild;
this.bootstrapModal = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal(this.modalElement);
this.setupContent();
}
}, {
key: "setupContent",
value: function setupContent() {
this.tempContent.innerHTML = this.receivedContent.trim();
this.contentElement = this.tempContent.firstChild;
this.modalElement.querySelector('.modal-body').appendChild(this.contentElement);
this.setupEvents();
}
}, {
key: "setupEvents",
value: function setupEvents() {
var _this = this;
this.modalElement.addEventListener('hidden.bs.modal', function () {
return _this.closeModal();
});
this.insertModalToDom();
}
}, {
key: "insertModalToDom",
value: function insertModalToDom() {
document.body.appendChild(this.modalElement);
this.openModal();
}
}, {
key: "openModal",
value: function openModal() {
this.bootstrapModal.show();
this.modalShown = true;
if (this.onOpenCallback && this.onOpenCallback instanceof Function) {
this.onOpenCallback();
}
}
}, {
key: "closeModal",
value: function closeModal() {
this.bootstrapModal.dispose();
this.modalElement.remove();
this.modalShown = false;
if (this.onCloseCallback && this.onCloseCallback instanceof Function) {
this.onCloseCallback();
}
}
}]);
}();
 }),
 "./assets/js/utilities/components/add-document-event-listeners.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  __WEBPACK_DEFAULT_EXPORT__; }
 });
Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, "name", { value: "default", configurable: true });
 var _initialize_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize-components */ "./assets/js/utilities/components/initialize-components.js");
 function __WEBPACK_DEFAULT_EXPORT__(componentConfiguration) {
var boundInitializeComponents = _initialize_components__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, componentConfiguration);
if (document.readyState !== 'loading') {
(0,_initialize_components__WEBPACK_IMPORTED_MODULE_0__["default"])(componentConfiguration);
} else {
document.addEventListener('DOMContentLoaded', boundInitializeComponents);
}
document.addEventListener('ngl:preview:block:refresh', boundInitializeComponents);
}
 }),
 "./assets/js/utilities/components/initialize-components.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  __WEBPACK_DEFAULT_EXPORT__; }
 });
Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, "name", { value: "default", configurable: true });
 function __WEBPACK_DEFAULT_EXPORT__(componentConfiguration) {
componentConfiguration.forEach(function (configuration) {
document.querySelectorAll(configuration.selector).forEach(function (element) {
return new configuration.Component(element, configuration.options);
});
});
}
 }),
 "./assets/js/utilities/form/setup-update-selected-files-list.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  __WEBPACK_DEFAULT_EXPORT__; }
 });
Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, "name", { value: "default", configurable: true });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function updateSelectedFilesList(event) {
var input = event.target;
if (!(input instanceof HTMLInputElement) || input.getAttribute('type') !== 'file') {
console.error('Given target is not a file input:', input);
return;
}
var container = input.closest('.file-group').querySelector('.js-selected-file-names');
if (container === null) {
console.error('Could not find selected file names container from the given target:', input);
return;
}
container.innerHTML = _toConsumableArray(input.files).map(function (file) {
return file.name;
}).join('<br/>');
container.classList.add('mt-2');
}
 function __WEBPACK_DEFAULT_EXPORT__(form) {
form.querySelectorAll('input[type="file"]').forEach(function (inputElement) {
inputElement.addEventListener('change', updateSelectedFilesList);
});
}
 }),
 "./assets/js/utilities/form/submit.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  __WEBPACK_DEFAULT_EXPORT__; }
 });
Object.defineProperty(__WEBPACK_DEFAULT_EXPORT__, "name", { value: "default", configurable: true });
 var _gtm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gtm */ "./assets/js/utilities/gtm.js");
 function __WEBPACK_DEFAULT_EXPORT__(formType, event) {
var _this = this;
event.preventDefault();
if (this.form === undefined) {
console.error("Form for type \"".concat(formType, "\" is not defined"));
return;
}
var _this$form = this.form,
action = _this$form.action,
gtmEventPrefix = _this$form.dataset.gtmEventPrefix,
formContainer = _this$form.parentElement;
if (formContainer.classList.contains('loading')) {
return;
}
formContainer.classList.add('loading');
var options = {
method: 'POST',
body: new FormData(this.form)
};
fetch(action, options).then(function (response) {
if (!response.ok) {
throw new Error('Something went wrong');
}
return response.text();
}).then(function (text) {
formContainer.innerHTML = text.trim();
formContainer.classList.remove('loading');
formContainer.scrollIntoView({
behavior: 'smooth'
});
if (_this.onSuccess !== undefined) {
_this.onSuccess();
}
_gtm__WEBPACK_IMPORTED_MODULE_0__["default"].push(gtmEventPrefix, _gtm__WEBPACK_IMPORTED_MODULE_0__["default"].EVENTS.SUBMITTED);
}).catch(function (error) {
formContainer.innerHTML = '<p>Something went wrong</p>';
console.error("Form type \"".concat(formType, "\" submit failed: ").concat(error));
formContainer.classList.remove('loading');
formContainer.scrollIntoView({
behavior: 'smooth'
});
if (_this.onFailure !== undefined) {
_this.onFailure();
}
_gtm__WEBPACK_IMPORTED_MODULE_0__["default"].push(gtmEventPrefix, _gtm__WEBPACK_IMPORTED_MODULE_0__["default"].EVENTS.FAILED);
});
}
 }),
 "./assets/js/utilities/form/validate.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  validateForm; }
 });
function validateForm(form) {
var fields = form.querySelectorAll('input, select, textarea');
Array.from(fields).forEach(function (field) {
field.removeAttribute('aria-invalid');
});
var invalidField = Array.from(fields).find(function (field) {
return !field.checkValidity();
});
if (invalidField) {
invalidField.setAttribute('aria-invalid', 'true');
invalidField.focus();
return false;
}
return true;
}
 }),
 "./assets/js/utilities/gtm.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_exports__["default"] = ({
EVENTS: {
CHANGED: 'changed',
FAILED: 'failed',
SUBMITTED: 'submitted',
OPENED: 'opened',
CANCELLED: 'cancelled'
},
push: function push(name) {
var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
if (name === undefined) {
console.warn("GTM push failed: event name is not defined");
return;
}
var eventName = name;
if (suffix) {
eventName += "-".concat(suffix);
}
if (!('dataLayer' in window)) {
console.warn("GTM push failed: data layer is not available (".concat(eventName, ")"));
return;
}
window.dataLayer.push({
event: eventName
});
console.info("GTM event pushed: ".concat(eventName));
}
});
 }),
 "./assets/js/utilities/video-modal/templates.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   dailymotionVideoTemplate: function() { return  dailymotionVideoTemplate; },
   uploadVideoTemplate: function() { return  uploadVideoTemplate; },
   videoModalStyleTemplate: function() { return  videoModalStyleTemplate; },
   videoSourceTemplate: function() { return  videoSourceTemplate; },
   vimeoVideoTemplate: function() { return  vimeoVideoTemplate; },
   youtubeVideoTemplate: function() { return  youtubeVideoTemplate; }
 });
var videoSourceTemplate = function videoSourceTemplate(collectedVideoOptions) {
return "<source src=\"".concat(collectedVideoOptions.fileLink, "\" type=\"").concat(collectedVideoOptions.mimeType, "\" />");
};
var uploadVideoTemplate = function uploadVideoTemplate(_ref) {
var collectedVideoOptions = _ref.collectedVideoOptions,
videoSource = _ref.videoSource,
autoplayAttribute = _ref.autoplayAttribute;
return "<video\n    id=\"".concat(collectedVideoOptions.id, "\"\n    data-setup='{}'\n    class=\"video-js ").concat(collectedVideoOptions.class, "\"\n    ").concat(collectedVideoOptions.controls, "\n    preload=\"").concat(collectedVideoOptions.preload, "\"\n    width=\"").concat(collectedVideoOptions.width, "\"\n    poster=\"").concat(collectedVideoOptions.poster, "\"\n    ").concat(autoplayAttribute, ">\n    ").concat(videoSource, "\n  </video>");
};
var iframeEmbedTemplate = function iframeEmbedTemplate(_ref2) {
var videoTitle = _ref2.videoTitle,
src = _ref2.src,
srcParameters = _ref2.srcParameters,
autoplayAttribute = _ref2.autoplayAttribute,
type = _ref2.type;
return "<div class=\"video-".concat(type, " iframe-video ratio ratio-16x9\">\n      <iframe frameborder=\"0\" src=\"").concat(src, "?").concat(srcParameters, "\" title=\"").concat(videoTitle, "\" ").concat(autoplayAttribute, " allowfullscreen></iframe>\n  </div>");
};
var youtubeVideoTemplate = function youtubeVideoTemplate(_ref3) {
var videoTitle = _ref3.videoTitle,
videoIdentifier = _ref3.videoIdentifier,
autoplayAttribute = _ref3.autoplayAttribute,
type = _ref3.type;
if (window.ExpYouTubeConsent) {
return window.ExpYouTubeConsent.modalMarkup(videoIdentifier, videoTitle, _ref3.thumbnail);
}
return iframeEmbedTemplate({
src: "https://www.youtube-nocookie.com/embed/".concat(videoIdentifier),
srcParameters: 'autoplay=1',
autoplayAttribute: autoplayAttribute,
type: type,
videoTitle: videoTitle
});
};
var vimeoVideoTemplate = function vimeoVideoTemplate(_ref4) {
var videoTitle = _ref4.videoTitle,
videoIdentifier = _ref4.videoIdentifier,
autoplayAttribute = _ref4.autoplayAttribute,
type = _ref4.type;
return iframeEmbedTemplate({
src: "https://player.vimeo.com/video/".concat(videoIdentifier),
srcParameters: 'autoplay=1',
autoplayAttribute: autoplayAttribute,
type: type,
videoTitle: videoTitle
});
};
var dailymotionVideoTemplate = function dailymotionVideoTemplate(_ref5) {
var videoTitle = _ref5.videoTitle,
videoIdentifier = _ref5.videoIdentifier,
autoplayAttribute = _ref5.autoplayAttribute,
type = _ref5.type;
return iframeEmbedTemplate({
src: "https://www.dailymotion.com/embed/video/".concat(videoIdentifier),
srcParameters: 'autoplay=1',
autoplayAttribute: autoplayAttribute,
type: type,
videoTitle: videoTitle
});
};
var videoModalStyleTemplate = function videoModalStyleTemplate() {
return ".modal.video-modal .modal-content {\n    background-color: #000;\n  }\n  .modal.video-modal .modal-content .modal-header {\n    border: 0;\n    justify-content: center;\n  }\n  .modal.video-modal .modal-content .modal-header .btn-close {\n    margin: 0;\n    filter: brightness(0) saturate(100%) invert(100%) sepia(19%) saturate(0%) hue-rotate(206deg) brightness(103%) contrast(101%);\n  }\n  .modal.video-modal .modal-content .modal-body {\n    order: -1;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .modal.video-modal .modal-content .modal-body .iframe-video {\n    max-height: 100%;\n  }\n  .modal.video-modal .modal-content .modal-body .video-js {\n    max-height: 100%;\n  }\n  .modal.video-modal .modal-content .modal-body .video-js .vjs-big-play-button {\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border: 0;\n    font-size: 5rem;\n    height: 2em;\n    width: 2em;\n    line-height: 2em;\n    border-radius: 50%;\n    filter: brightness(75%);\n  }";
};
 }),
 "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   Alert: function() { return  Alert; },
   Button: function() { return  Button; },
   Carousel: function() { return  Carousel; },
   Collapse: function() { return  Collapse; },
   Dropdown: function() { return  Dropdown; },
   Modal: function() { return  Modal; },
   Offcanvas: function() { return  Offcanvas; },
   Popover: function() { return  Popover; },
   ScrollSpy: function() { return  ScrollSpy; },
   Tab: function() { return  Tab; },
   Toast: function() { return  Toast; },
   Tooltip: function() { return  Tooltip; }
 });
 var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
 var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
if (object === null || object === undefined) {
return `${object}`;
}
return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
const getUID = prefix => {
do {
prefix += Math.floor(Math.random() * MAX_UID);
} while (document.getElementById(prefix));
return prefix;
};
const getSelector = element => {
let selector = element.getAttribute('data-bs-target');
if (!selector || selector === '#') {
let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
return null;
} // Just in case some CMS puts out a full URL with the anchor appended
if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
}
selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
}
return selector;
};
const getSelectorFromElement = element => {
const selector = getSelector(element);
if (selector) {
return document.querySelector(selector) ? selector : null;
}
return null;
};
const getElementFromSelector = element => {
const selector = getSelector(element);
return selector ? document.querySelector(selector) : null;
};
const getTransitionDurationFromElement = element => {
if (!element) {
return 0;
} // Get transition-duration of the element
let {
transitionDuration,
transitionDelay
} = window.getComputedStyle(element);
const floatTransitionDuration = Number.parseFloat(transitionDuration);
const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
if (!floatTransitionDuration && !floatTransitionDelay) {
return 0;
} // If multiple durations are defined, take the first
transitionDuration = transitionDuration.split(',')[0];
transitionDelay = transitionDelay.split(',')[0];
return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = element => {
element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = object => {
if (!object || typeof object !== 'object') {
return false;
}
if (typeof object.jquery !== 'undefined') {
object = object[0];
}
return typeof object.nodeType !== 'undefined';
};
const getElement = object => {
if (isElement(object)) {
return object.jquery ? object[0] : object;
}
if (typeof object === 'string' && object.length > 0) {
return document.querySelector(object);
}
return null;
};
const isVisible = element => {
if (!isElement(element) || element.getClientRects().length === 0) {
return false;
}
const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed
const closedDetails = element.closest('details:not([open])');
if (!closedDetails) {
return elementIsVisible;
}
if (closedDetails !== element) {
const summary = element.closest('summary');
if (summary && summary.parentNode !== closedDetails) {
return false;
}
if (summary === null) {
return false;
}
}
return elementIsVisible;
};
const isDisabled = element => {
if (!element || element.nodeType !== Node.ELEMENT_NODE) {
return true;
}
if (element.classList.contains('disabled')) {
return true;
}
if (typeof element.disabled !== 'undefined') {
return element.disabled;
}
return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const findShadowRoot = element => {
if (!document.documentElement.attachShadow) {
return null;
} // Can find the shadow root otherwise it'll return the document
if (typeof element.getRootNode === 'function') {
const root = element.getRootNode();
return root instanceof ShadowRoot ? root : null;
}
if (element instanceof ShadowRoot) {
return element;
} // when we don't find a shadow root
if (!element.parentNode) {
return null;
}
return findShadowRoot(element.parentNode);
};
const noop = () => {};
const reflow = element => {
element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = () => {
if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
return window.jQuery;
}
return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = callback => {
if (document.readyState === 'loading') {
if (!DOMContentLoadedCallbacks.length) {
document.addEventListener('DOMContentLoaded', () => {
for (const callback of DOMContentLoadedCallbacks) {
callback();
}
});
}
DOMContentLoadedCallbacks.push(callback);
} else {
callback();
}
};
const isRTL = () => document.documentElement.dir === 'rtl';
const defineJQueryPlugin = plugin => {
onDOMContentLoaded(() => {
const $ = getjQuery();
if ($) {
const name = plugin.NAME;
const JQUERY_NO_CONFLICT = $.fn[name];
$.fn[name] = plugin.jQueryInterface;
$.fn[name].Constructor = plugin;
$.fn[name].noConflict = () => {
$.fn[name] = JQUERY_NO_CONFLICT;
return plugin.jQueryInterface;
};
}
});
};
const execute = callback => {
if (typeof callback === 'function') {
callback();
}
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
if (!waitForTransition) {
execute(callback);
return;
}
const durationPadding = 5;
const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
let called = false;
const handler = ({
target
}) => {
if (target !== transitionElement) {
return;
}
called = true;
transitionElement.removeEventListener(TRANSITION_END, handler);
execute(callback);
};
transitionElement.addEventListener(TRANSITION_END, handler);
setTimeout(() => {
if (!called) {
triggerTransitionEnd(transitionElement);
}
}, emulatedDuration);
};
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
const listLength = list.length;
let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
if (index === -1) {
return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
}
index += shouldGetNext ? 1 : -1;
if (isCycleAllowed) {
index = (index + listLength) % listLength;
}
return list[Math.max(0, Math.min(index, listLength - 1))];
};
const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
mouseenter: 'mouseover',
mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
function makeEventUid(element, uid) {
return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
const uid = makeEventUid(element);
element.uidEvent = uid;
eventRegistry[uid] = eventRegistry[uid] || {};
return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
return function handler(event) {
hydrateObj(event, {
delegateTarget: element
});
if (handler.oneOff) {
EventHandler.off(element, event.type, fn);
}
return fn.apply(element, [event]);
};
}
function bootstrapDelegationHandler(element, selector, fn) {
return function handler(event) {
const domElements = element.querySelectorAll(selector);
for (let {
target
} = event; target && target !== this; target = target.parentNode) {
for (const domElement of domElements) {
if (domElement !== target) {
continue;
}
hydrateObj(event, {
delegateTarget: target
});
if (handler.oneOff) {
EventHandler.off(element, event.type, selector, fn);
}
return fn.apply(target, [event]);
}
}
};
}
function findHandler(events, callable, delegationSelector = null) {
return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check
const callable = isDelegated ? delegationFunction : handler || delegationFunction;
let typeEvent = getTypeEvent(originalTypeEvent);
if (!nativeEvents.has(typeEvent)) {
typeEvent = originalTypeEvent;
}
return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
if (typeof originalTypeEvent !== 'string' || !element) {
return;
}
let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
if (originalTypeEvent in customEvents) {
const wrapFunction = fn => {
return function (event) {
if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
return fn.call(this, event);
}
};
};
callable = wrapFunction(callable);
}
const events = getElementEvents(element);
const handlers = events[typeEvent] || (events[typeEvent] = {});
const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
if (previousFunction) {
previousFunction.oneOff = previousFunction.oneOff && oneOff;
return;
}
const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
fn.delegationSelector = isDelegated ? handler : null;
fn.callable = callable;
fn.oneOff = oneOff;
fn.uidEvent = uid;
handlers[uid] = fn;
element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
const fn = findHandler(events[typeEvent], handler, delegationSelector);
if (!fn) {
return;
}
element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
const storeElementEvent = events[typeEvent] || {};
for (const handlerKey of Object.keys(storeElementEvent)) {
if (handlerKey.includes(namespace)) {
const event = storeElementEvent[handlerKey];
removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
}
}
function getTypeEvent(event) {
event = event.replace(stripNameRegex, '');
return customEvents[event] || event;
}
const EventHandler = {
on(element, event, handler, delegationFunction) {
addHandler(element, event, handler, delegationFunction, false);
},
one(element, event, handler, delegationFunction) {
addHandler(element, event, handler, delegationFunction, true);
},
off(element, originalTypeEvent, handler, delegationFunction) {
if (typeof originalTypeEvent !== 'string' || !element) {
return;
}
const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
const inNamespace = typeEvent !== originalTypeEvent;
const events = getElementEvents(element);
const storeElementEvent = events[typeEvent] || {};
const isNamespace = originalTypeEvent.startsWith('.');
if (typeof callable !== 'undefined') {
if (!Object.keys(storeElementEvent).length) {
return;
}
removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
return;
}
if (isNamespace) {
for (const elementEvent of Object.keys(events)) {
removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
}
}
for (const keyHandlers of Object.keys(storeElementEvent)) {
const handlerKey = keyHandlers.replace(stripUidRegex, '');
if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
const event = storeElementEvent[keyHandlers];
removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
}
},
trigger(element, event, args) {
if (typeof event !== 'string' || !element) {
return null;
}
const $ = getjQuery();
const typeEvent = getTypeEvent(event);
const inNamespace = event !== typeEvent;
let jQueryEvent = null;
let bubbles = true;
let nativeDispatch = true;
let defaultPrevented = false;
if (inNamespace && $) {
jQueryEvent = $.Event(event, args);
$(element).trigger(jQueryEvent);
bubbles = !jQueryEvent.isPropagationStopped();
nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
defaultPrevented = jQueryEvent.isDefaultPrevented();
}
let evt = new Event(event, {
bubbles,
cancelable: true
});
evt = hydrateObj(evt, args);
if (defaultPrevented) {
evt.preventDefault();
}
if (nativeDispatch) {
element.dispatchEvent(evt);
}
if (evt.defaultPrevented && jQueryEvent) {
jQueryEvent.preventDefault();
}
return evt;
}
};
function hydrateObj(obj, meta) {
for (const [key, value] of Object.entries(meta || {})) {
try {
obj[key] = value;
} catch (_unused) {
Object.defineProperty(obj, key, {
configurable: true,
get() {
return value;
}
});
}
}
return obj;
}
const elementMap = new Map();
const Data = {
set(element, key, instance) {
if (!elementMap.has(element)) {
elementMap.set(element, new Map());
}
const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
if (!instanceMap.has(key) && instanceMap.size !== 0) {
console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
return;
}
instanceMap.set(key, instance);
},
get(element, key) {
if (elementMap.has(element)) {
return elementMap.get(element).get(key) || null;
}
return null;
},
remove(element, key) {
if (!elementMap.has(element)) {
return;
}
const instanceMap = elementMap.get(element);
instanceMap.delete(key); // free up element references if there are no instances left for an element
if (instanceMap.size === 0) {
elementMap.delete(element);
}
}
};
function normalizeData(value) {
if (value === 'true') {
return true;
}
if (value === 'false') {
return false;
}
if (value === Number(value).toString()) {
return Number(value);
}
if (value === '' || value === 'null') {
return null;
}
if (typeof value !== 'string') {
return value;
}
try {
return JSON.parse(decodeURIComponent(value));
} catch (_unused) {
return value;
}
}
function normalizeDataKey(key) {
return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}
const Manipulator = {
setDataAttribute(element, key, value) {
element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
},
removeDataAttribute(element, key) {
element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
},
getDataAttributes(element) {
if (!element) {
return {};
}
const attributes = {};
const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
for (const key of bsKeys) {
let pureKey = key.replace(/^bs/, '');
pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
attributes[pureKey] = normalizeData(element.dataset[key]);
}
return attributes;
},
getDataAttribute(element, key) {
return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
}
};
class Config {
static get Default() {
return {};
}
static get DefaultType() {
return {};
}
static get NAME() {
throw new Error('You have to implement the static method "NAME", for each component!');
}
_getConfig(config) {
config = this._mergeConfigObj(config);
config = this._configAfterMerge(config);
this._typeCheckConfig(config);
return config;
}
_configAfterMerge(config) {
return config;
}
_mergeConfigObj(config, element) {
const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse
return { ...this.constructor.Default,
...(typeof jsonConfig === 'object' ? jsonConfig : {}),
...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
...(typeof config === 'object' ? config : {})
};
}
_typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
for (const property of Object.keys(configTypes)) {
const expectedTypes = configTypes[property];
const value = config[property];
const valueType = isElement(value) ? 'element' : toType(value);
if (!new RegExp(expectedTypes).test(valueType)) {
throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
}
}
}
}
const VERSION = '5.2.3';
class BaseComponent extends Config {
constructor(element, config) {
super();
element = getElement(element);
if (!element) {
return;
}
this._element = element;
this._config = this._getConfig(config);
Data.set(this._element, this.constructor.DATA_KEY, this);
} // Public
dispose() {
Data.remove(this._element, this.constructor.DATA_KEY);
EventHandler.off(this._element, this.constructor.EVENT_KEY);
for (const propertyName of Object.getOwnPropertyNames(this)) {
this[propertyName] = null;
}
}
_queueCallback(callback, element, isAnimated = true) {
executeAfterTransition(callback, element, isAnimated);
}
_getConfig(config) {
config = this._mergeConfigObj(config, this._element);
config = this._configAfterMerge(config);
this._typeCheckConfig(config);
return config;
} // Static
static getInstance(element) {
return Data.get(getElement(element), this.DATA_KEY);
}
static getOrCreateInstance(element, config = {}) {
return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
}
static get VERSION() {
return VERSION;
}
static get DATA_KEY() {
return `bs.${this.NAME}`;
}
static get EVENT_KEY() {
return `.${this.DATA_KEY}`;
}
static eventName(name) {
return `${name}${this.EVENT_KEY}`;
}
}
const enableDismissTrigger = (component, method = 'hide') => {
const clickEvent = `click.dismiss${component.EVENT_KEY}`;
const name = component.NAME;
EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
if (['A', 'AREA'].includes(this.tagName)) {
event.preventDefault();
}
if (isDisabled(this)) {
return;
}
const target = getElementFromSelector(this) || this.closest(`.${name}`);
const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
instance[method]();
});
};
const NAME$f = 'alert';
const DATA_KEY$a = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
class Alert extends BaseComponent {
static get NAME() {
return NAME$f;
} // Public
close() {
const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
if (closeEvent.defaultPrevented) {
return;
}
this._element.classList.remove(CLASS_NAME_SHOW$8);
const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
} // Private
_destroyElement() {
this._element.remove();
EventHandler.trigger(this._element, EVENT_CLOSED);
this.dispose();
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Alert.getOrCreateInstance(this);
if (typeof config !== 'string') {
return;
}
if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
throw new TypeError(`No method named "${config}"`);
}
data[config](this);
});
}
}
enableDismissTrigger(Alert, 'close');
defineJQueryPlugin(Alert);
const NAME$e = 'button';
const DATA_KEY$9 = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
class Button extends BaseComponent {
static get NAME() {
return NAME$e;
} // Public
toggle() {
this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Button.getOrCreateInstance(this);
if (config === 'toggle') {
data[config]();
}
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
event.preventDefault();
const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
const data = Button.getOrCreateInstance(button);
data.toggle();
});
defineJQueryPlugin(Button);
const SelectorEngine = {
find(selector, element = document.documentElement) {
return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
},
findOne(selector, element = document.documentElement) {
return Element.prototype.querySelector.call(element, selector);
},
children(element, selector) {
return [].concat(...element.children).filter(child => child.matches(selector));
},
parents(element, selector) {
const parents = [];
let ancestor = element.parentNode.closest(selector);
while (ancestor) {
parents.push(ancestor);
ancestor = ancestor.parentNode.closest(selector);
}
return parents;
},
prev(element, selector) {
let previous = element.previousElementSibling;
while (previous) {
if (previous.matches(selector)) {
return [previous];
}
previous = previous.previousElementSibling;
}
return [];
},
next(element, selector) {
let next = element.nextElementSibling;
while (next) {
if (next.matches(selector)) {
return [next];
}
next = next.nextElementSibling;
}
return [];
},
focusableChildren(element) {
const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
}
};
const NAME$d = 'swipe';
const EVENT_KEY$9 = '.bs.swipe';
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SWIPE_THRESHOLD = 40;
const Default$c = {
endCallback: null,
leftCallback: null,
rightCallback: null
};
const DefaultType$c = {
endCallback: '(function|null)',
leftCallback: '(function|null)',
rightCallback: '(function|null)'
};
class Swipe extends Config {
constructor(element, config) {
super();
this._element = element;
if (!element || !Swipe.isSupported()) {
return;
}
this._config = this._getConfig(config);
this._deltaX = 0;
this._supportPointerEvents = Boolean(window.PointerEvent);
this._initEvents();
} // Getters
static get Default() {
return Default$c;
}
static get DefaultType() {
return DefaultType$c;
}
static get NAME() {
return NAME$d;
} // Public
dispose() {
EventHandler.off(this._element, EVENT_KEY$9);
} // Private
_start(event) {
if (!this._supportPointerEvents) {
this._deltaX = event.touches[0].clientX;
return;
}
if (this._eventIsPointerPenTouch(event)) {
this._deltaX = event.clientX;
}
}
_end(event) {
if (this._eventIsPointerPenTouch(event)) {
this._deltaX = event.clientX - this._deltaX;
}
this._handleSwipe();
execute(this._config.endCallback);
}
_move(event) {
this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
}
_handleSwipe() {
const absDeltaX = Math.abs(this._deltaX);
if (absDeltaX <= SWIPE_THRESHOLD) {
return;
}
const direction = absDeltaX / this._deltaX;
this._deltaX = 0;
if (!direction) {
return;
}
execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
}
_initEvents() {
if (this._supportPointerEvents) {
EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
this._element.classList.add(CLASS_NAME_POINTER_EVENT);
} else {
EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
}
}
_eventIsPointerPenTouch(event) {
return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
} // Static
static isSupported() {
return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
}
}
const NAME$c = 'carousel';
const DATA_KEY$8 = 'bs.carousel';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const ARROW_LEFT_KEY$1 = 'ArrowLeft';
const ARROW_RIGHT_KEY$1 = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
[ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
[ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
interval: 5000,
keyboard: true,
pause: 'hover',
ride: false,
touch: true,
wrap: true
};
const DefaultType$b = {
interval: '(number|boolean)',
keyboard: 'boolean',
pause: '(string|boolean)',
ride: '(boolean|string)',
touch: 'boolean',
wrap: 'boolean'
};
class Carousel extends BaseComponent {
constructor(element, config) {
super(element, config);
this._interval = null;
this._activeElement = null;
this._isSliding = false;
this.touchTimeout = null;
this._swipeHelper = null;
this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
this._addEventListeners();
if (this._config.ride === CLASS_NAME_CAROUSEL) {
this.cycle();
}
} // Getters
static get Default() {
return Default$b;
}
static get DefaultType() {
return DefaultType$b;
}
static get NAME() {
return NAME$c;
} // Public
next() {
this._slide(ORDER_NEXT);
}
nextWhenVisible() {
if (!document.hidden && isVisible(this._element)) {
this.next();
}
}
prev() {
this._slide(ORDER_PREV);
}
pause() {
if (this._isSliding) {
triggerTransitionEnd(this._element);
}
this._clearInterval();
}
cycle() {
this._clearInterval();
this._updateInterval();
this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
}
_maybeEnableCycle() {
if (!this._config.ride) {
return;
}
if (this._isSliding) {
EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
return;
}
this.cycle();
}
to(index) {
const items = this._getItems();
if (index > items.length - 1 || index < 0) {
return;
}
if (this._isSliding) {
EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
return;
}
const activeIndex = this._getItemIndex(this._getActive());
if (activeIndex === index) {
return;
}
const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
this._slide(order, items[index]);
}
dispose() {
if (this._swipeHelper) {
this._swipeHelper.dispose();
}
super.dispose();
} // Private
_configAfterMerge(config) {
config.defaultInterval = config.interval;
return config;
}
_addEventListeners() {
if (this._config.keyboard) {
EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
}
if (this._config.pause === 'hover') {
EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
}
if (this._config.touch && Swipe.isSupported()) {
this._addTouchEventListeners();
}
}
_addTouchEventListeners() {
for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
}
const endCallBack = () => {
if (this._config.pause !== 'hover') {
return;
} // If it's a touch-enabled device, mouseenter/leave are fired as
this.pause();
if (this.touchTimeout) {
clearTimeout(this.touchTimeout);
}
this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
};
const swipeConfig = {
leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
endCallback: endCallBack
};
this._swipeHelper = new Swipe(this._element, swipeConfig);
}
_keydown(event) {
if (/input|textarea/i.test(event.target.tagName)) {
return;
}
const direction = KEY_TO_DIRECTION[event.key];
if (direction) {
event.preventDefault();
this._slide(this._directionToOrder(direction));
}
}
_getItemIndex(element) {
return this._getItems().indexOf(element);
}
_setActiveIndicatorElement(index) {
if (!this._indicatorsElement) {
return;
}
const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
activeIndicator.removeAttribute('aria-current');
const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
if (newActiveIndicator) {
newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
newActiveIndicator.setAttribute('aria-current', 'true');
}
}
_updateInterval() {
const element = this._activeElement || this._getActive();
if (!element) {
return;
}
const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
this._config.interval = elementInterval || this._config.defaultInterval;
}
_slide(order, element = null) {
if (this._isSliding) {
return;
}
const activeElement = this._getActive();
const isNext = order === ORDER_NEXT;
const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
if (nextElement === activeElement) {
return;
}
const nextElementIndex = this._getItemIndex(nextElement);
const triggerEvent = eventName => {
return EventHandler.trigger(this._element, eventName, {
relatedTarget: nextElement,
direction: this._orderToDirection(order),
from: this._getItemIndex(activeElement),
to: nextElementIndex
});
};
const slideEvent = triggerEvent(EVENT_SLIDE);
if (slideEvent.defaultPrevented) {
return;
}
if (!activeElement || !nextElement) {
return;
}
const isCycling = Boolean(this._interval);
this.pause();
this._isSliding = true;
this._setActiveIndicatorElement(nextElementIndex);
this._activeElement = nextElement;
const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
nextElement.classList.add(orderClassName);
reflow(nextElement);
activeElement.classList.add(directionalClassName);
nextElement.classList.add(directionalClassName);
const completeCallBack = () => {
nextElement.classList.remove(directionalClassName, orderClassName);
nextElement.classList.add(CLASS_NAME_ACTIVE$2);
activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
this._isSliding = false;
triggerEvent(EVENT_SLID);
};
this._queueCallback(completeCallBack, activeElement, this._isAnimated());
if (isCycling) {
this.cycle();
}
}
_isAnimated() {
return this._element.classList.contains(CLASS_NAME_SLIDE);
}
_getActive() {
return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
}
_getItems() {
return SelectorEngine.find(SELECTOR_ITEM, this._element);
}
_clearInterval() {
if (this._interval) {
clearInterval(this._interval);
this._interval = null;
}
}
_directionToOrder(direction) {
if (isRTL()) {
return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
}
return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
}
_orderToDirection(order) {
if (isRTL()) {
return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
}
return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Carousel.getOrCreateInstance(this, config);
if (typeof config === 'number') {
data.to(config);
return;
}
if (typeof config === 'string') {
if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
}
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
const target = getElementFromSelector(this);
if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
return;
}
event.preventDefault();
const carousel = Carousel.getOrCreateInstance(target);
const slideIndex = this.getAttribute('data-bs-slide-to');
if (slideIndex) {
carousel.to(slideIndex);
carousel._maybeEnableCycle();
return;
}
if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
carousel.next();
carousel._maybeEnableCycle();
return;
}
carousel.prev();
carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
for (const carousel of carousels) {
Carousel.getOrCreateInstance(carousel);
}
});
defineJQueryPlugin(Carousel);
const NAME$b = 'collapse';
const DATA_KEY$7 = 'bs.collapse';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
parent: null,
toggle: true
};
const DefaultType$a = {
parent: '(null|element)',
toggle: 'boolean'
};
class Collapse extends BaseComponent {
constructor(element, config) {
super(element, config);
this._isTransitioning = false;
this._triggerArray = [];
const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
for (const elem of toggleList) {
const selector = getSelectorFromElement(elem);
const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
if (selector !== null && filterElement.length) {
this._triggerArray.push(elem);
}
}
this._initializeChildren();
if (!this._config.parent) {
this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
}
if (this._config.toggle) {
this.toggle();
}
} // Getters
static get Default() {
return Default$a;
}
static get DefaultType() {
return DefaultType$a;
}
static get NAME() {
return NAME$b;
} // Public
toggle() {
if (this._isShown()) {
this.hide();
} else {
this.show();
}
}
show() {
if (this._isTransitioning || this._isShown()) {
return;
}
let activeChildren = []; // find active children
if (this._config.parent) {
activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
toggle: false
}));
}
if (activeChildren.length && activeChildren[0]._isTransitioning) {
return;
}
const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
if (startEvent.defaultPrevented) {
return;
}
for (const activeInstance of activeChildren) {
activeInstance.hide();
}
const dimension = this._getDimension();
this._element.classList.remove(CLASS_NAME_COLLAPSE);
this._element.classList.add(CLASS_NAME_COLLAPSING);
this._element.style[dimension] = 0;
this._addAriaAndCollapsedClass(this._triggerArray, true);
this._isTransitioning = true;
const complete = () => {
this._isTransitioning = false;
this._element.classList.remove(CLASS_NAME_COLLAPSING);
this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
this._element.style[dimension] = '';
EventHandler.trigger(this._element, EVENT_SHOWN$6);
};
const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
const scrollSize = `scroll${capitalizedDimension}`;
this._queueCallback(complete, this._element, true);
this._element.style[dimension] = `${this._element[scrollSize]}px`;
}
hide() {
if (this._isTransitioning || !this._isShown()) {
return;
}
const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
if (startEvent.defaultPrevented) {
return;
}
const dimension = this._getDimension();
this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
reflow(this._element);
this._element.classList.add(CLASS_NAME_COLLAPSING);
this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
for (const trigger of this._triggerArray) {
const element = getElementFromSelector(trigger);
if (element && !this._isShown(element)) {
this._addAriaAndCollapsedClass([trigger], false);
}
}
this._isTransitioning = true;
const complete = () => {
this._isTransitioning = false;
this._element.classList.remove(CLASS_NAME_COLLAPSING);
this._element.classList.add(CLASS_NAME_COLLAPSE);
EventHandler.trigger(this._element, EVENT_HIDDEN$6);
};
this._element.style[dimension] = '';
this._queueCallback(complete, this._element, true);
}
_isShown(element = this._element) {
return element.classList.contains(CLASS_NAME_SHOW$7);
} // Private
_configAfterMerge(config) {
config.toggle = Boolean(config.toggle); // Coerce string values
config.parent = getElement(config.parent);
return config;
}
_getDimension() {
return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
}
_initializeChildren() {
if (!this._config.parent) {
return;
}
const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
for (const element of children) {
const selected = getElementFromSelector(element);
if (selected) {
this._addAriaAndCollapsedClass([element], this._isShown(selected));
}
}
}
_getFirstLevelChildren(selector) {
const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth
return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
}
_addAriaAndCollapsedClass(triggerArray, isOpen) {
if (!triggerArray.length) {
return;
}
for (const element of triggerArray) {
element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
element.setAttribute('aria-expanded', isOpen);
}
} // Static
static jQueryInterface(config) {
const _config = {};
if (typeof config === 'string' && /show|hide/.test(config)) {
_config.toggle = false;
}
return this.each(function () {
const data = Collapse.getOrCreateInstance(this, _config);
if (typeof config === 'string') {
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
}
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
event.preventDefault();
}
const selector = getSelectorFromElement(this);
const selectorElements = SelectorEngine.find(selector);
for (const element of selectorElements) {
Collapse.getOrCreateInstance(element, {
toggle: false
}).toggle();
}
});
defineJQueryPlugin(Collapse);
const NAME$a = 'dropdown';
const DATA_KEY$6 = 'bs.dropdown';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY$1 = 'ArrowUp';
const ARROW_DOWN_KEY$1 = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR = '.navbar';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const PLACEMENT_TOPCENTER = 'top';
const PLACEMENT_BOTTOMCENTER = 'bottom';
const Default$9 = {
autoClose: true,
boundary: 'clippingParents',
display: 'dynamic',
offset: [0, 2],
popperConfig: null,
reference: 'toggle'
};
const DefaultType$9 = {
autoClose: '(boolean|string)',
boundary: '(string|element)',
display: 'string',
offset: '(array|string|function)',
popperConfig: '(null|object|function)',
reference: '(string|element|object)'
};
class Dropdown extends BaseComponent {
constructor(element, config) {
super(element, config);
this._popper = null;
this._parent = this._element.parentNode; // dropdown wrapper
this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
this._inNavbar = this._detectNavbar();
} // Getters
static get Default() {
return Default$9;
}
static get DefaultType() {
return DefaultType$9;
}
static get NAME() {
return NAME$a;
} // Public
toggle() {
return this._isShown() ? this.hide() : this.show();
}
show() {
if (isDisabled(this._element) || this._isShown()) {
return;
}
const relatedTarget = {
relatedTarget: this._element
};
const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
if (showEvent.defaultPrevented) {
return;
}
this._createPopper(); // If this is a touch-enabled device we add extra
if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
for (const element of [].concat(...document.body.children)) {
EventHandler.on(element, 'mouseover', noop);
}
}
this._element.focus();
this._element.setAttribute('aria-expanded', true);
this._menu.classList.add(CLASS_NAME_SHOW$6);
this._element.classList.add(CLASS_NAME_SHOW$6);
EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
}
hide() {
if (isDisabled(this._element) || !this._isShown()) {
return;
}
const relatedTarget = {
relatedTarget: this._element
};
this._completeHide(relatedTarget);
}
dispose() {
if (this._popper) {
this._popper.destroy();
}
super.dispose();
}
update() {
this._inNavbar = this._detectNavbar();
if (this._popper) {
this._popper.update();
}
} // Private
_completeHide(relatedTarget) {
const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
if (hideEvent.defaultPrevented) {
return;
} // If this is a touch-enabled device we remove the extra
if ('ontouchstart' in document.documentElement) {
for (const element of [].concat(...document.body.children)) {
EventHandler.off(element, 'mouseover', noop);
}
}
if (this._popper) {
this._popper.destroy();
}
this._menu.classList.remove(CLASS_NAME_SHOW$6);
this._element.classList.remove(CLASS_NAME_SHOW$6);
this._element.setAttribute('aria-expanded', 'false');
Manipulator.removeDataAttribute(this._menu, 'popper');
EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
}
_getConfig(config) {
config = super._getConfig(config);
if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
}
return config;
}
_createPopper() {
if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
}
let referenceElement = this._element;
if (this._config.reference === 'parent') {
referenceElement = this._parent;
} else if (isElement(this._config.reference)) {
referenceElement = getElement(this._config.reference);
} else if (typeof this._config.reference === 'object') {
referenceElement = this._config.reference;
}
const popperConfig = this._getPopperConfig();
this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper(referenceElement, this._menu, popperConfig);
}
_isShown() {
return this._menu.classList.contains(CLASS_NAME_SHOW$6);
}
_getPlacement() {
const parentDropdown = this._parent;
if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
return PLACEMENT_RIGHT;
}
if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
return PLACEMENT_LEFT;
}
if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
return PLACEMENT_TOPCENTER;
}
if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
return PLACEMENT_BOTTOMCENTER;
} // We need to trim the value because custom properties can also include spaces
const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
}
return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
}
_detectNavbar() {
return this._element.closest(SELECTOR_NAVBAR) !== null;
}
_getOffset() {
const {
offset
} = this._config;
if (typeof offset === 'string') {
return offset.split(',').map(value => Number.parseInt(value, 10));
}
if (typeof offset === 'function') {
return popperData => offset(popperData, this._element);
}
return offset;
}
_getPopperConfig() {
const defaultBsPopperConfig = {
placement: this._getPlacement(),
modifiers: [{
name: 'preventOverflow',
options: {
boundary: this._config.boundary
}
}, {
name: 'offset',
options: {
offset: this._getOffset()
}
}]
}; // Disable Popper if we have a static display or Dropdown is in Navbar
if (this._inNavbar || this._config.display === 'static') {
Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove
defaultBsPopperConfig.modifiers = [{
name: 'applyStyles',
enabled: false
}];
}
return { ...defaultBsPopperConfig,
...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
};
}
_selectMenuItem({
key,
target
}) {
const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
if (!items.length) {
return;
} // if target isn't included in items (e.g. when expanding the dropdown)
getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Dropdown.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
});
}
static clearMenus(event) {
if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
return;
}
const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
for (const toggle of openToggles) {
const context = Dropdown.getInstance(toggle);
if (!context || context._config.autoClose === false) {
continue;
}
const composedPath = event.composedPath();
const isMenuTarget = composedPath.includes(context._menu);
if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
continue;
} // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
continue;
}
const relatedTarget = {
relatedTarget: context._element
};
if (event.type === 'click') {
relatedTarget.clickEvent = event;
}
context._completeHide(relatedTarget);
}
}
static dataApiKeydownHandler(event) {
const isInput = /input|textarea/i.test(event.target.tagName);
const isEscapeEvent = event.key === ESCAPE_KEY$2;
const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
if (!isUpOrDownEvent && !isEscapeEvent) {
return;
}
if (isInput && !isEscapeEvent) {
return;
}
event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
const instance = Dropdown.getOrCreateInstance(getToggleButton);
if (isUpOrDownEvent) {
event.stopPropagation();
instance.show();
instance._selectMenuItem(event);
return;
}
if (instance._isShown()) {
event.stopPropagation();
instance.hide();
getToggleButton.focus();
}
}
}
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
event.preventDefault();
Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_MARGIN = 'margin-right';
class ScrollBarHelper {
constructor() {
this._element = document.body;
} // Public
getWidth() {
const documentWidth = document.documentElement.clientWidth;
return Math.abs(window.innerWidth - documentWidth);
}
hide() {
const width = this.getWidth();
this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
}
reset() {
this._resetElementAttributes(this._element, 'overflow');
this._resetElementAttributes(this._element, PROPERTY_PADDING);
this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
}
isOverflowing() {
return this.getWidth() > 0;
} // Private
_disableOverFlow() {
this._saveInitialAttribute(this._element, 'overflow');
this._element.style.overflow = 'hidden';
}
_setElementAttributes(selector, styleProperty, callback) {
const scrollbarWidth = this.getWidth();
const manipulationCallBack = element => {
if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
return;
}
this._saveInitialAttribute(element, styleProperty);
const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
};
this._applyManipulationCallback(selector, manipulationCallBack);
}
_saveInitialAttribute(element, styleProperty) {
const actualValue = element.style.getPropertyValue(styleProperty);
if (actualValue) {
Manipulator.setDataAttribute(element, styleProperty, actualValue);
}
}
_resetElementAttributes(selector, styleProperty) {
const manipulationCallBack = element => {
const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero
if (value === null) {
element.style.removeProperty(styleProperty);
return;
}
Manipulator.removeDataAttribute(element, styleProperty);
element.style.setProperty(styleProperty, value);
};
this._applyManipulationCallback(selector, manipulationCallBack);
}
_applyManipulationCallback(selector, callBack) {
if (isElement(selector)) {
callBack(selector);
return;
}
for (const sel of SelectorEngine.find(selector, this._element)) {
callBack(sel);
}
}
}
const NAME$9 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
className: 'modal-backdrop',
clickCallback: null,
isAnimated: false,
isVisible: true,
rootElement: 'body' // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
className: 'string',
clickCallback: '(function|null)',
isAnimated: 'boolean',
isVisible: 'boolean',
rootElement: '(element|string)'
};
class Backdrop extends Config {
constructor(config) {
super();
this._config = this._getConfig(config);
this._isAppended = false;
this._element = null;
} // Getters
static get Default() {
return Default$8;
}
static get DefaultType() {
return DefaultType$8;
}
static get NAME() {
return NAME$9;
} // Public
show(callback) {
if (!this._config.isVisible) {
execute(callback);
return;
}
this._append();
const element = this._getElement();
if (this._config.isAnimated) {
reflow(element);
}
element.classList.add(CLASS_NAME_SHOW$5);
this._emulateAnimation(() => {
execute(callback);
});
}
hide(callback) {
if (!this._config.isVisible) {
execute(callback);
return;
}
this._getElement().classList.remove(CLASS_NAME_SHOW$5);
this._emulateAnimation(() => {
this.dispose();
execute(callback);
});
}
dispose() {
if (!this._isAppended) {
return;
}
EventHandler.off(this._element, EVENT_MOUSEDOWN);
this._element.remove();
this._isAppended = false;
} // Private
_getElement() {
if (!this._element) {
const backdrop = document.createElement('div');
backdrop.className = this._config.className;
if (this._config.isAnimated) {
backdrop.classList.add(CLASS_NAME_FADE$4);
}
this._element = backdrop;
}
return this._element;
}
_configAfterMerge(config) {
config.rootElement = getElement(config.rootElement);
return config;
}
_append() {
if (this._isAppended) {
return;
}
const element = this._getElement();
this._config.rootElement.append(element);
EventHandler.on(element, EVENT_MOUSEDOWN, () => {
execute(this._config.clickCallback);
});
this._isAppended = true;
}
_emulateAnimation(callback) {
executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
}
}
const NAME$8 = 'focustrap';
const DATA_KEY$5 = 'bs.focustrap';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
const Default$7 = {
autofocus: true,
trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
autofocus: 'boolean',
trapElement: 'element'
};
class FocusTrap extends Config {
constructor(config) {
super();
this._config = this._getConfig(config);
this._isActive = false;
this._lastTabNavDirection = null;
} // Getters
static get Default() {
return Default$7;
}
static get DefaultType() {
return DefaultType$7;
}
static get NAME() {
return NAME$8;
} // Public
activate() {
if (this._isActive) {
return;
}
if (this._config.autofocus) {
this._config.trapElement.focus();
}
EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
this._isActive = true;
}
deactivate() {
if (!this._isActive) {
return;
}
this._isActive = false;
EventHandler.off(document, EVENT_KEY$5);
} // Private
_handleFocusin(event) {
const {
trapElement
} = this._config;
if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
return;
}
const elements = SelectorEngine.focusableChildren(trapElement);
if (elements.length === 0) {
trapElement.focus();
} else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
elements[elements.length - 1].focus();
} else {
elements[0].focus();
}
}
_handleKeydown(event) {
if (event.key !== TAB_KEY) {
return;
}
this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
}
}
const NAME$7 = 'modal';
const DATA_KEY$4 = 'bs.modal';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
backdrop: true,
focus: true,
keyboard: true
};
const DefaultType$6 = {
backdrop: '(boolean|string)',
focus: 'boolean',
keyboard: 'boolean'
};
class Modal extends BaseComponent {
constructor(element, config) {
super(element, config);
this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
this._backdrop = this._initializeBackDrop();
this._focustrap = this._initializeFocusTrap();
this._isShown = false;
this._isTransitioning = false;
this._scrollBar = new ScrollBarHelper();
this._addEventListeners();
} // Getters
static get Default() {
return Default$6;
}
static get DefaultType() {
return DefaultType$6;
}
static get NAME() {
return NAME$7;
} // Public
toggle(relatedTarget) {
return this._isShown ? this.hide() : this.show(relatedTarget);
}
show(relatedTarget) {
if (this._isShown || this._isTransitioning) {
return;
}
const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
relatedTarget
});
if (showEvent.defaultPrevented) {
return;
}
this._isShown = true;
this._isTransitioning = true;
this._scrollBar.hide();
document.body.classList.add(CLASS_NAME_OPEN);
this._adjustDialog();
this._backdrop.show(() => this._showElement(relatedTarget));
}
hide() {
if (!this._isShown || this._isTransitioning) {
return;
}
const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
if (hideEvent.defaultPrevented) {
return;
}
this._isShown = false;
this._isTransitioning = true;
this._focustrap.deactivate();
this._element.classList.remove(CLASS_NAME_SHOW$4);
this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
}
dispose() {
for (const htmlElement of [window, this._dialog]) {
EventHandler.off(htmlElement, EVENT_KEY$4);
}
this._backdrop.dispose();
this._focustrap.deactivate();
super.dispose();
}
handleUpdate() {
this._adjustDialog();
} // Private
_initializeBackDrop() {
return new Backdrop({
isVisible: Boolean(this._config.backdrop),
isAnimated: this._isAnimated()
});
}
_initializeFocusTrap() {
return new FocusTrap({
trapElement: this._element
});
}
_showElement(relatedTarget) {
if (!document.body.contains(this._element)) {
document.body.append(this._element);
}
this._element.style.display = 'block';
this._element.removeAttribute('aria-hidden');
this._element.setAttribute('aria-modal', true);
this._element.setAttribute('role', 'dialog');
this._element.scrollTop = 0;
const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
if (modalBody) {
modalBody.scrollTop = 0;
}
reflow(this._element);
this._element.classList.add(CLASS_NAME_SHOW$4);
const transitionComplete = () => {
if (this._config.focus) {
this._focustrap.activate();
}
this._isTransitioning = false;
EventHandler.trigger(this._element, EVENT_SHOWN$4, {
relatedTarget
});
};
this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
}
_addEventListeners() {
EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
if (event.key !== ESCAPE_KEY$1) {
return;
}
if (this._config.keyboard) {
event.preventDefault();
this.hide();
return;
}
this._triggerBackdropTransition();
});
EventHandler.on(window, EVENT_RESIZE$1, () => {
if (this._isShown && !this._isTransitioning) {
this._adjustDialog();
}
});
EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
if (this._element !== event.target || this._element !== event2.target) {
return;
}
if (this._config.backdrop === 'static') {
this._triggerBackdropTransition();
return;
}
if (this._config.backdrop) {
this.hide();
}
});
});
}
_hideModal() {
this._element.style.display = 'none';
this._element.setAttribute('aria-hidden', true);
this._element.removeAttribute('aria-modal');
this._element.removeAttribute('role');
this._isTransitioning = false;
this._backdrop.hide(() => {
document.body.classList.remove(CLASS_NAME_OPEN);
this._resetAdjustments();
this._scrollBar.reset();
EventHandler.trigger(this._element, EVENT_HIDDEN$4);
});
}
_isAnimated() {
return this._element.classList.contains(CLASS_NAME_FADE$3);
}
_triggerBackdropTransition() {
const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
if (hideEvent.defaultPrevented) {
return;
}
const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed
if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
return;
}
if (!isModalOverflowing) {
this._element.style.overflowY = 'hidden';
}
this._element.classList.add(CLASS_NAME_STATIC);
this._queueCallback(() => {
this._element.classList.remove(CLASS_NAME_STATIC);
this._queueCallback(() => {
this._element.style.overflowY = initialOverflowY;
}, this._dialog);
}, this._dialog);
this._element.focus();
}
_adjustDialog() {
const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
const scrollbarWidth = this._scrollBar.getWidth();
const isBodyOverflowing = scrollbarWidth > 0;
if (isBodyOverflowing && !isModalOverflowing) {
const property = isRTL() ? 'paddingLeft' : 'paddingRight';
this._element.style[property] = `${scrollbarWidth}px`;
}
if (!isBodyOverflowing && isModalOverflowing) {
const property = isRTL() ? 'paddingRight' : 'paddingLeft';
this._element.style[property] = `${scrollbarWidth}px`;
}
}
_resetAdjustments() {
this._element.style.paddingLeft = '';
this._element.style.paddingRight = '';
} // Static
static jQueryInterface(config, relatedTarget) {
return this.each(function () {
const data = Modal.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config](relatedTarget);
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
const target = getElementFromSelector(this);
if (['A', 'AREA'].includes(this.tagName)) {
event.preventDefault();
}
EventHandler.one(target, EVENT_SHOW$4, showEvent => {
if (showEvent.defaultPrevented) {
return;
}
EventHandler.one(target, EVENT_HIDDEN$4, () => {
if (isVisible(this)) {
this.focus();
}
});
}); // avoid conflict when clicking modal toggler while another one is open
const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
if (alreadyOpen) {
Modal.getInstance(alreadyOpen).hide();
}
const data = Modal.getOrCreateInstance(target);
data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
const NAME$6 = 'offcanvas';
const DATA_KEY$3 = 'bs.offcanvas';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = '.data-api';
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = 'Escape';
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_SHOWING$1 = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
backdrop: true,
keyboard: true,
scroll: false
};
const DefaultType$5 = {
backdrop: '(boolean|string)',
keyboard: 'boolean',
scroll: 'boolean'
};
class Offcanvas extends BaseComponent {
constructor(element, config) {
super(element, config);
this._isShown = false;
this._backdrop = this._initializeBackDrop();
this._focustrap = this._initializeFocusTrap();
this._addEventListeners();
} // Getters
static get Default() {
return Default$5;
}
static get DefaultType() {
return DefaultType$5;
}
static get NAME() {
return NAME$6;
} // Public
toggle(relatedTarget) {
return this._isShown ? this.hide() : this.show(relatedTarget);
}
show(relatedTarget) {
if (this._isShown) {
return;
}
const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
relatedTarget
});
if (showEvent.defaultPrevented) {
return;
}
this._isShown = true;
this._backdrop.show();
if (!this._config.scroll) {
new ScrollBarHelper().hide();
}
this._element.setAttribute('aria-modal', true);
this._element.setAttribute('role', 'dialog');
this._element.classList.add(CLASS_NAME_SHOWING$1);
const completeCallBack = () => {
if (!this._config.scroll || this._config.backdrop) {
this._focustrap.activate();
}
this._element.classList.add(CLASS_NAME_SHOW$3);
this._element.classList.remove(CLASS_NAME_SHOWING$1);
EventHandler.trigger(this._element, EVENT_SHOWN$3, {
relatedTarget
});
};
this._queueCallback(completeCallBack, this._element, true);
}
hide() {
if (!this._isShown) {
return;
}
const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
if (hideEvent.defaultPrevented) {
return;
}
this._focustrap.deactivate();
this._element.blur();
this._isShown = false;
this._element.classList.add(CLASS_NAME_HIDING);
this._backdrop.hide();
const completeCallback = () => {
this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
this._element.removeAttribute('aria-modal');
this._element.removeAttribute('role');
if (!this._config.scroll) {
new ScrollBarHelper().reset();
}
EventHandler.trigger(this._element, EVENT_HIDDEN$3);
};
this._queueCallback(completeCallback, this._element, true);
}
dispose() {
this._backdrop.dispose();
this._focustrap.deactivate();
super.dispose();
} // Private
_initializeBackDrop() {
const clickCallback = () => {
if (this._config.backdrop === 'static') {
EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
return;
}
this.hide();
}; // 'static' option will be translated to true, and booleans will keep their value
const isVisible = Boolean(this._config.backdrop);
return new Backdrop({
className: CLASS_NAME_BACKDROP,
isVisible,
isAnimated: true,
rootElement: this._element.parentNode,
clickCallback: isVisible ? clickCallback : null
});
}
_initializeFocusTrap() {
return new FocusTrap({
trapElement: this._element
});
}
_addEventListeners() {
EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
if (event.key !== ESCAPE_KEY) {
return;
}
if (!this._config.keyboard) {
EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
return;
}
this.hide();
});
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Offcanvas.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
throw new TypeError(`No method named "${config}"`);
}
data[config](this);
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
const target = getElementFromSelector(this);
if (['A', 'AREA'].includes(this.tagName)) {
event.preventDefault();
}
if (isDisabled(this)) {
return;
}
EventHandler.one(target, EVENT_HIDDEN$3, () => {
if (isVisible(this)) {
this.focus();
}
}); // avoid conflict when clicking a toggler of an offcanvas, while another is open
const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
if (alreadyOpen && alreadyOpen !== target) {
Offcanvas.getInstance(alreadyOpen).hide();
}
const data = Offcanvas.getOrCreateInstance(target);
data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
Offcanvas.getOrCreateInstance(selector).show();
}
});
EventHandler.on(window, EVENT_RESIZE, () => {
for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
if (getComputedStyle(element).position !== 'fixed') {
Offcanvas.getOrCreateInstance(element).hide();
}
}
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const allowedAttribute = (attribute, allowedAttributeList) => {
const attributeName = attribute.nodeName.toLowerCase();
if (allowedAttributeList.includes(attributeName)) {
if (uriAttributes.has(attributeName)) {
return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
}
return true;
} // Check if a regular expression validates the attribute.
return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};
const DefaultAllowlist = {
'*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
a: ['target', 'href', 'title', 'rel'],
area: [],
b: [],
br: [],
col: [],
code: [],
div: [],
em: [],
hr: [],
h1: [],
h2: [],
h3: [],
h4: [],
h5: [],
h6: [],
i: [],
img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
li: [],
ol: [],
p: [],
pre: [],
s: [],
small: [],
span: [],
sub: [],
sup: [],
strong: [],
u: [],
ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
if (!unsafeHtml.length) {
return unsafeHtml;
}
if (sanitizeFunction && typeof sanitizeFunction === 'function') {
return sanitizeFunction(unsafeHtml);
}
const domParser = new window.DOMParser();
const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
for (const element of elements) {
const elementName = element.nodeName.toLowerCase();
if (!Object.keys(allowList).includes(elementName)) {
element.remove();
continue;
}
const attributeList = [].concat(...element.attributes);
const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
for (const attribute of attributeList) {
if (!allowedAttribute(attribute, allowedAttributes)) {
element.removeAttribute(attribute.nodeName);
}
}
}
return createdDocument.body.innerHTML;
}
const NAME$5 = 'TemplateFactory';
const Default$4 = {
allowList: DefaultAllowlist,
content: {},
extraClass: '',
html: false,
sanitize: true,
sanitizeFn: null,
template: '<div></div>'
};
const DefaultType$4 = {
allowList: 'object',
content: 'object',
extraClass: '(string|function)',
html: 'boolean',
sanitize: 'boolean',
sanitizeFn: '(null|function)',
template: 'string'
};
const DefaultContentType = {
entry: '(string|element|function|null)',
selector: '(string|element)'
};
class TemplateFactory extends Config {
constructor(config) {
super();
this._config = this._getConfig(config);
} // Getters
static get Default() {
return Default$4;
}
static get DefaultType() {
return DefaultType$4;
}
static get NAME() {
return NAME$5;
} // Public
getContent() {
return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
}
hasContent() {
return this.getContent().length > 0;
}
changeContent(content) {
this._checkContent(content);
this._config.content = { ...this._config.content,
...content
};
return this;
}
toHtml() {
const templateWrapper = document.createElement('div');
templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
for (const [selector, text] of Object.entries(this._config.content)) {
this._setContent(templateWrapper, text, selector);
}
const template = templateWrapper.children[0];
const extraClass = this._resolvePossibleFunction(this._config.extraClass);
if (extraClass) {
template.classList.add(...extraClass.split(' '));
}
return template;
} // Private
_typeCheckConfig(config) {
super._typeCheckConfig(config);
this._checkContent(config.content);
}
_checkContent(arg) {
for (const [selector, content] of Object.entries(arg)) {
super._typeCheckConfig({
selector,
entry: content
}, DefaultContentType);
}
}
_setContent(template, content, selector) {
const templateElement = SelectorEngine.findOne(selector, template);
if (!templateElement) {
return;
}
content = this._resolvePossibleFunction(content);
if (!content) {
templateElement.remove();
return;
}
if (isElement(content)) {
this._putElementInTemplate(getElement(content), templateElement);
return;
}
if (this._config.html) {
templateElement.innerHTML = this._maybeSanitize(content);
return;
}
templateElement.textContent = content;
}
_maybeSanitize(arg) {
return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
}
_resolvePossibleFunction(arg) {
return typeof arg === 'function' ? arg(this) : arg;
}
_putElementInTemplate(element, templateElement) {
if (this._config.html) {
templateElement.innerHTML = '';
templateElement.append(element);
return;
}
templateElement.textContent = element.textContent;
}
}
const NAME$4 = 'tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
const EVENT_HIDE$2 = 'hide';
const EVENT_HIDDEN$2 = 'hidden';
const EVENT_SHOW$2 = 'show';
const EVENT_SHOWN$2 = 'shown';
const EVENT_INSERTED = 'inserted';
const EVENT_CLICK$1 = 'click';
const EVENT_FOCUSIN$1 = 'focusin';
const EVENT_FOCUSOUT$1 = 'focusout';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';
const AttachmentMap = {
AUTO: 'auto',
TOP: 'top',
RIGHT: isRTL() ? 'left' : 'right',
BOTTOM: 'bottom',
LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
allowList: DefaultAllowlist,
animation: true,
boundary: 'clippingParents',
container: false,
customClass: '',
delay: 0,
fallbackPlacements: ['top', 'right', 'bottom', 'left'],
html: false,
offset: [0, 0],
placement: 'top',
popperConfig: null,
sanitize: true,
sanitizeFn: null,
selector: false,
template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
title: '',
trigger: 'hover focus'
};
const DefaultType$3 = {
allowList: 'object',
animation: 'boolean',
boundary: '(string|element)',
container: '(string|element|boolean)',
customClass: '(string|function)',
delay: '(number|object)',
fallbackPlacements: 'array',
html: 'boolean',
offset: '(array|string|function)',
placement: '(string|function)',
popperConfig: '(null|object|function)',
sanitize: 'boolean',
sanitizeFn: '(null|function)',
selector: '(string|boolean)',
template: 'string',
title: '(string|element|function)',
trigger: 'string'
};
class Tooltip extends BaseComponent {
constructor(element, config) {
if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
}
super(element, config); // Private
this._isEnabled = true;
this._timeout = 0;
this._isHovered = null;
this._activeTrigger = {};
this._popper = null;
this._templateFactory = null;
this._newContent = null; // Protected
this.tip = null;
this._setListeners();
if (!this._config.selector) {
this._fixTitle();
}
} // Getters
static get Default() {
return Default$3;
}
static get DefaultType() {
return DefaultType$3;
}
static get NAME() {
return NAME$4;
} // Public
enable() {
this._isEnabled = true;
}
disable() {
this._isEnabled = false;
}
toggleEnabled() {
this._isEnabled = !this._isEnabled;
}
toggle() {
if (!this._isEnabled) {
return;
}
this._activeTrigger.click = !this._activeTrigger.click;
if (this._isShown()) {
this._leave();
return;
}
this._enter();
}
dispose() {
clearTimeout(this._timeout);
EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
if (this._element.getAttribute('data-bs-original-title')) {
this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
}
this._disposePopper();
super.dispose();
}
show() {
if (this._element.style.display === 'none') {
throw new Error('Please use show on visible elements');
}
if (!(this._isWithContent() && this._isEnabled)) {
return;
}
const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
const shadowRoot = findShadowRoot(this._element);
const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
if (showEvent.defaultPrevented || !isInTheDom) {
return;
} // todo v6 remove this OR make it optional
this._disposePopper();
const tip = this._getTipElement();
this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
const {
container
} = this._config;
if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
container.append(tip);
EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
}
this._popper = this._createPopper(tip);
tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
if ('ontouchstart' in document.documentElement) {
for (const element of [].concat(...document.body.children)) {
EventHandler.on(element, 'mouseover', noop);
}
}
const complete = () => {
EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
if (this._isHovered === false) {
this._leave();
}
this._isHovered = false;
};
this._queueCallback(complete, this.tip, this._isAnimated());
}
hide() {
if (!this._isShown()) {
return;
}
const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
if (hideEvent.defaultPrevented) {
return;
}
const tip = this._getTipElement();
tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
if ('ontouchstart' in document.documentElement) {
for (const element of [].concat(...document.body.children)) {
EventHandler.off(element, 'mouseover', noop);
}
}
this._activeTrigger[TRIGGER_CLICK] = false;
this._activeTrigger[TRIGGER_FOCUS] = false;
this._activeTrigger[TRIGGER_HOVER] = false;
this._isHovered = null; // it is a trick to support manual triggering
const complete = () => {
if (this._isWithActiveTrigger()) {
return;
}
if (!this._isHovered) {
this._disposePopper();
}
this._element.removeAttribute('aria-describedby');
EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
};
this._queueCallback(complete, this.tip, this._isAnimated());
}
update() {
if (this._popper) {
this._popper.update();
}
} // Protected
_isWithContent() {
return Boolean(this._getTitle());
}
_getTipElement() {
if (!this.tip) {
this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
}
return this.tip;
}
_createTipElement(content) {
const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6
if (!tip) {
return null;
}
tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only
tip.classList.add(`bs-${this.constructor.NAME}-auto`);
const tipId = getUID(this.constructor.NAME).toString();
tip.setAttribute('id', tipId);
if (this._isAnimated()) {
tip.classList.add(CLASS_NAME_FADE$2);
}
return tip;
}
setContent(content) {
this._newContent = content;
if (this._isShown()) {
this._disposePopper();
this.show();
}
}
_getTemplateFactory(content) {
if (this._templateFactory) {
this._templateFactory.changeContent(content);
} else {
this._templateFactory = new TemplateFactory({ ...this._config,
content,
extraClass: this._resolvePossibleFunction(this._config.customClass)
});
}
return this._templateFactory;
}
_getContentForTemplate() {
return {
[SELECTOR_TOOLTIP_INNER]: this._getTitle()
};
}
_getTitle() {
return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
} // Private
_initializeOnDelegatedTarget(event) {
return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
}
_isAnimated() {
return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
}
_isShown() {
return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
}
_createPopper(tip) {
const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
const attachment = AttachmentMap[placement.toUpperCase()];
return _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper(this._element, tip, this._getPopperConfig(attachment));
}
_getOffset() {
const {
offset
} = this._config;
if (typeof offset === 'string') {
return offset.split(',').map(value => Number.parseInt(value, 10));
}
if (typeof offset === 'function') {
return popperData => offset(popperData, this._element);
}
return offset;
}
_resolvePossibleFunction(arg) {
return typeof arg === 'function' ? arg.call(this._element) : arg;
}
_getPopperConfig(attachment) {
const defaultBsPopperConfig = {
placement: attachment,
modifiers: [{
name: 'flip',
options: {
fallbackPlacements: this._config.fallbackPlacements
}
}, {
name: 'offset',
options: {
offset: this._getOffset()
}
}, {
name: 'preventOverflow',
options: {
boundary: this._config.boundary
}
}, {
name: 'arrow',
options: {
element: `.${this.constructor.NAME}-arrow`
}
}, {
name: 'preSetPlacement',
enabled: true,
phase: 'beforeMain',
fn: data => {
this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
}
}]
};
return { ...defaultBsPopperConfig,
...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
};
}
_setListeners() {
const triggers = this._config.trigger.split(' ');
for (const trigger of triggers) {
if (trigger === 'click') {
EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
const context = this._initializeOnDelegatedTarget(event);
context.toggle();
});
} else if (trigger !== TRIGGER_MANUAL) {
const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
EventHandler.on(this._element, eventIn, this._config.selector, event => {
const context = this._initializeOnDelegatedTarget(event);
context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
context._enter();
});
EventHandler.on(this._element, eventOut, this._config.selector, event => {
const context = this._initializeOnDelegatedTarget(event);
context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
context._leave();
});
}
}
this._hideModalHandler = () => {
if (this._element) {
this.hide();
}
};
EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
}
_fixTitle() {
const title = this._element.getAttribute('title');
if (!title) {
return;
}
if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
this._element.setAttribute('aria-label', title);
}
this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
this._element.removeAttribute('title');
}
_enter() {
if (this._isShown() || this._isHovered) {
this._isHovered = true;
return;
}
this._isHovered = true;
this._setTimeout(() => {
if (this._isHovered) {
this.show();
}
}, this._config.delay.show);
}
_leave() {
if (this._isWithActiveTrigger()) {
return;
}
this._isHovered = false;
this._setTimeout(() => {
if (!this._isHovered) {
this.hide();
}
}, this._config.delay.hide);
}
_setTimeout(handler, timeout) {
clearTimeout(this._timeout);
this._timeout = setTimeout(handler, timeout);
}
_isWithActiveTrigger() {
return Object.values(this._activeTrigger).includes(true);
}
_getConfig(config) {
const dataAttributes = Manipulator.getDataAttributes(this._element);
for (const dataAttribute of Object.keys(dataAttributes)) {
if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
delete dataAttributes[dataAttribute];
}
}
config = { ...dataAttributes,
...(typeof config === 'object' && config ? config : {})
};
config = this._mergeConfigObj(config);
config = this._configAfterMerge(config);
this._typeCheckConfig(config);
return config;
}
_configAfterMerge(config) {
config.container = config.container === false ? document.body : getElement(config.container);
if (typeof config.delay === 'number') {
config.delay = {
show: config.delay,
hide: config.delay
};
}
if (typeof config.title === 'number') {
config.title = config.title.toString();
}
if (typeof config.content === 'number') {
config.content = config.content.toString();
}
return config;
}
_getDelegateConfig() {
const config = {};
for (const key in this._config) {
if (this.constructor.Default[key] !== this._config[key]) {
config[key] = this._config[key];
}
}
config.selector = false;
config.trigger = 'manual'; // In the future can be replaced with:
return config;
}
_disposePopper() {
if (this._popper) {
this._popper.destroy();
this._popper = null;
}
if (this.tip) {
this.tip.remove();
this.tip = null;
}
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Tooltip.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
});
}
}
defineJQueryPlugin(Tooltip);
const NAME$3 = 'popover';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
const Default$2 = { ...Tooltip.Default,
content: '',
offset: [0, 8],
placement: 'right',
template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
trigger: 'click'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
content: '(null|string|element|function)'
};
class Popover extends Tooltip {
static get Default() {
return Default$2;
}
static get DefaultType() {
return DefaultType$2;
}
static get NAME() {
return NAME$3;
} // Overrides
_isWithContent() {
return this._getTitle() || this._getContent();
} // Private
_getContentForTemplate() {
return {
[SELECTOR_TITLE]: this._getTitle(),
[SELECTOR_CONTENT]: this._getContent()
};
}
_getContent() {
return this._resolvePossibleFunction(this._config.content);
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Popover.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
});
}
}
defineJQueryPlugin(Popover);
const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = '.data-api';
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = '[href]';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const Default$1 = {
offset: null,
rootMargin: '0px 0px -25%',
smoothScroll: false,
target: null,
threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
offset: '(number|null)',
rootMargin: 'string',
smoothScroll: 'boolean',
target: 'element',
threshold: 'array'
};
class ScrollSpy extends BaseComponent {
constructor(element, config) {
super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper
this._targetLinks = new Map();
this._observableSections = new Map();
this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
this._activeTarget = null;
this._observer = null;
this._previousScrollData = {
visibleEntryTop: 0,
parentScrollTop: 0
};
this.refresh(); // initialize
} // Getters
static get Default() {
return Default$1;
}
static get DefaultType() {
return DefaultType$1;
}
static get NAME() {
return NAME$2;
} // Public
refresh() {
this._initializeTargetsAndObservables();
this._maybeEnableSmoothScroll();
if (this._observer) {
this._observer.disconnect();
} else {
this._observer = this._getNewObserver();
}
for (const section of this._observableSections.values()) {
this._observer.observe(section);
}
}
dispose() {
this._observer.disconnect();
super.dispose();
} // Private
_configAfterMerge(config) {
config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
if (typeof config.threshold === 'string') {
config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
}
return config;
}
_maybeEnableSmoothScroll() {
if (!this._config.smoothScroll) {
return;
} // unregister any previous listeners
EventHandler.off(this._config.target, EVENT_CLICK);
EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
const observableSection = this._observableSections.get(event.target.hash);
if (observableSection) {
event.preventDefault();
const root = this._rootElement || window;
const height = observableSection.offsetTop - this._element.offsetTop;
if (root.scrollTo) {
root.scrollTo({
top: height,
behavior: 'smooth'
});
return;
} // Chrome 60 doesn't support `scrollTo`
root.scrollTop = height;
}
});
}
_getNewObserver() {
const options = {
root: this._rootElement,
threshold: this._config.threshold,
rootMargin: this._config.rootMargin
};
return new IntersectionObserver(entries => this._observerCallback(entries), options);
} // The logic of selection
_observerCallback(entries) {
const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
const activate = entry => {
this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
this._process(targetElement(entry));
};
const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
this._previousScrollData.parentScrollTop = parentScrollTop;
for (const entry of entries) {
if (!entry.isIntersecting) {
this._activeTarget = null;
this._clearActiveClass(targetElement(entry));
continue;
}
const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop
if (userScrollsDown && entryIsLowerThanPrevious) {
activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
if (!parentScrollTop) {
return;
}
continue;
} // if we are scrolling up, pick the smallest offsetTop
if (!userScrollsDown && !entryIsLowerThanPrevious) {
activate(entry);
}
}
}
_initializeTargetsAndObservables() {
this._targetLinks = new Map();
this._observableSections = new Map();
const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
for (const anchor of targetLinks) {
if (!anchor.hash || isDisabled(anchor)) {
continue;
}
const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible
if (isVisible(observableSection)) {
this._targetLinks.set(anchor.hash, anchor);
this._observableSections.set(anchor.hash, observableSection);
}
}
}
_process(target) {
if (this._activeTarget === target) {
return;
}
this._clearActiveClass(this._config.target);
this._activeTarget = target;
target.classList.add(CLASS_NAME_ACTIVE$1);
this._activateParents(target);
EventHandler.trigger(this._element, EVENT_ACTIVATE, {
relatedTarget: target
});
}
_activateParents(target) {
if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
return;
}
for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
item.classList.add(CLASS_NAME_ACTIVE$1);
}
}
}
_clearActiveClass(parent) {
parent.classList.remove(CLASS_NAME_ACTIVE$1);
const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
for (const node of activeNodes) {
node.classList.remove(CLASS_NAME_ACTIVE$1);
}
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = ScrollSpy.getOrCreateInstance(this, config);
if (typeof config !== 'string') {
return;
}
if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
});
}
}
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
ScrollSpy.getOrCreateInstance(spy);
}
});
defineJQueryPlugin(ScrollSpy);
const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const CLASS_DROPDOWN = 'dropdown';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = '.nav-item, .list-group-item';
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
class Tab extends BaseComponent {
constructor(element) {
super(element);
this._parent = this._element.closest(SELECTOR_TAB_PANEL);
if (!this._parent) {
return; // todo: should Throw exception on v6
} // Set up initial aria attributes
this._setInitialAttributes(this._parent, this._getChildren());
EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
} // Getters
static get NAME() {
return NAME$1;
} // Public
show() {
const innerElem = this._element;
if (this._elemIsActive(innerElem)) {
return;
} // Search for active tab on same parent to deactivate it
const active = this._getActiveElem();
const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
relatedTarget: innerElem
}) : null;
const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
relatedTarget: active
});
if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
return;
}
this._deactivate(active, innerElem);
this._activate(innerElem, active);
} // Private
_activate(element, relatedElem) {
if (!element) {
return;
}
element.classList.add(CLASS_NAME_ACTIVE);
this._activate(getElementFromSelector(element)); // Search and activate/show the proper section
const complete = () => {
if (element.getAttribute('role') !== 'tab') {
element.classList.add(CLASS_NAME_SHOW$1);
return;
}
element.removeAttribute('tabindex');
element.setAttribute('aria-selected', true);
this._toggleDropDown(element, true);
EventHandler.trigger(element, EVENT_SHOWN$1, {
relatedTarget: relatedElem
});
};
this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
}
_deactivate(element, relatedElem) {
if (!element) {
return;
}
element.classList.remove(CLASS_NAME_ACTIVE);
element.blur();
this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too
const complete = () => {
if (element.getAttribute('role') !== 'tab') {
element.classList.remove(CLASS_NAME_SHOW$1);
return;
}
element.setAttribute('aria-selected', false);
element.setAttribute('tabindex', '-1');
this._toggleDropDown(element, false);
EventHandler.trigger(element, EVENT_HIDDEN$1, {
relatedTarget: relatedElem
});
};
this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
}
_keydown(event) {
if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
return;
}
event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
event.preventDefault();
const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);
if (nextActiveElement) {
nextActiveElement.focus({
preventScroll: true
});
Tab.getOrCreateInstance(nextActiveElement).show();
}
}
_getChildren() {
return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
}
_getActiveElem() {
return this._getChildren().find(child => this._elemIsActive(child)) || null;
}
_setInitialAttributes(parent, children) {
this._setAttributeIfNotExists(parent, 'role', 'tablist');
for (const child of children) {
this._setInitialAttributesOnChild(child);
}
}
_setInitialAttributesOnChild(child) {
child = this._getInnerElement(child);
const isActive = this._elemIsActive(child);
const outerElem = this._getOuterElement(child);
child.setAttribute('aria-selected', isActive);
if (outerElem !== child) {
this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
}
if (!isActive) {
child.setAttribute('tabindex', '-1');
}
this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too
this._setInitialAttributesOnTargetPanel(child);
}
_setInitialAttributesOnTargetPanel(child) {
const target = getElementFromSelector(child);
if (!target) {
return;
}
this._setAttributeIfNotExists(target, 'role', 'tabpanel');
if (child.id) {
this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
}
}
_toggleDropDown(element, open) {
const outerElem = this._getOuterElement(element);
if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
return;
}
const toggle = (selector, className) => {
const element = SelectorEngine.findOne(selector, outerElem);
if (element) {
element.classList.toggle(className, open);
}
};
toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
outerElem.setAttribute('aria-expanded', open);
}
_setAttributeIfNotExists(element, attribute, value) {
if (!element.hasAttribute(attribute)) {
element.setAttribute(attribute, value);
}
}
_elemIsActive(elem) {
return elem.classList.contains(CLASS_NAME_ACTIVE);
} // Try to get the inner element (usually the .nav-link)
_getInnerElement(elem) {
return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
} // Try to get the outer element (usually the .nav-item)
_getOuterElement(elem) {
return elem.closest(SELECTOR_OUTER) || elem;
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Tab.getOrCreateInstance(this);
if (typeof config !== 'string') {
return;
}
if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
throw new TypeError(`No method named "${config}"`);
}
data[config]();
});
}
}
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
if (['A', 'AREA'].includes(this.tagName)) {
event.preventDefault();
}
if (isDisabled(this)) {
return;
}
Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
Tab.getOrCreateInstance(element);
}
});
defineJQueryPlugin(Tab);
const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
animation: 'boolean',
autohide: 'boolean',
delay: 'number'
};
const Default = {
animation: true,
autohide: true,
delay: 5000
};
class Toast extends BaseComponent {
constructor(element, config) {
super(element, config);
this._timeout = null;
this._hasMouseInteraction = false;
this._hasKeyboardInteraction = false;
this._setListeners();
} // Getters
static get Default() {
return Default;
}
static get DefaultType() {
return DefaultType;
}
static get NAME() {
return NAME;
} // Public
show() {
const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
if (showEvent.defaultPrevented) {
return;
}
this._clearTimeout();
if (this._config.animation) {
this._element.classList.add(CLASS_NAME_FADE);
}
const complete = () => {
this._element.classList.remove(CLASS_NAME_SHOWING);
EventHandler.trigger(this._element, EVENT_SHOWN);
this._maybeScheduleHide();
};
this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
reflow(this._element);
this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
this._queueCallback(complete, this._element, this._config.animation);
}
hide() {
if (!this.isShown()) {
return;
}
const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
if (hideEvent.defaultPrevented) {
return;
}
const complete = () => {
this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
EventHandler.trigger(this._element, EVENT_HIDDEN);
};
this._element.classList.add(CLASS_NAME_SHOWING);
this._queueCallback(complete, this._element, this._config.animation);
}
dispose() {
this._clearTimeout();
if (this.isShown()) {
this._element.classList.remove(CLASS_NAME_SHOW);
}
super.dispose();
}
isShown() {
return this._element.classList.contains(CLASS_NAME_SHOW);
} // Private
_maybeScheduleHide() {
if (!this._config.autohide) {
return;
}
if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
return;
}
this._timeout = setTimeout(() => {
this.hide();
}, this._config.delay);
}
_onInteraction(event, isInteracting) {
switch (event.type) {
case 'mouseover':
case 'mouseout':
{
this._hasMouseInteraction = isInteracting;
break;
}
case 'focusin':
case 'focusout':
{
this._hasKeyboardInteraction = isInteracting;
break;
}
}
if (isInteracting) {
this._clearTimeout();
return;
}
const nextElement = event.relatedTarget;
if (this._element === nextElement || this._element.contains(nextElement)) {
return;
}
this._maybeScheduleHide();
}
_setListeners() {
EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
}
_clearTimeout() {
clearTimeout(this._timeout);
this._timeout = null;
} // Static
static jQueryInterface(config) {
return this.each(function () {
const data = Toast.getOrCreateInstance(this, config);
if (typeof config === 'string') {
if (typeof data[config] === 'undefined') {
throw new TypeError(`No method named "${config}"`);
}
data[config](this);
}
});
}
}
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);
 }),
 "./assets/sass/style-noncritical.scss":
 (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 }),
 "./node_modules/photoswipe/dist/photoswipe-lightbox.esm.js":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  PhotoSwipeLightbox; }
 });
function createElement(className, tagName, appendToEl) {
const el = document.createElement(tagName);
if (className) {
el.className = className;
}
if (appendToEl) {
appendToEl.appendChild(el);
}
return el;
}
function toTransformString(x, y, scale) {
let propValue = `translate3d(${x}px,${y || 0}px,0)`;
if (scale !== undefined) {
propValue += ` scale3d(${scale},${scale},1)`;
}
return propValue;
}
function setWidthHeight(el, w, h) {
el.style.width = typeof w === 'number' ? `${w}px` : w;
el.style.height = typeof h === 'number' ? `${h}px` : h;
}
const LOAD_STATE = {
IDLE: 'idle',
LOADING: 'loading',
LOADED: 'loaded',
ERROR: 'error'
};
function specialKeyUsed(e) {
return 'button' in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
}
function getElementsFromOption(option, legacySelector, parent = document) {
let elements = [];
if (option instanceof Element) {
elements = [option];
} else if (option instanceof NodeList || Array.isArray(option)) {
elements = Array.from(option);
} else {
const selector = typeof option === 'string' ? option : legacySelector;
if (selector) {
elements = Array.from(parent.querySelectorAll(selector));
}
}
return elements;
}
function isPswpClass(fn) {
return typeof fn === 'function' && fn.prototype && fn.prototype.goTo;
}
function isSafari() {
return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
class PhotoSwipeEvent {
constructor(type, details) {
this.type = type;
this.defaultPrevented = false;
if (details) {
Object.assign(this, details);
}
}
preventDefault() {
this.defaultPrevented = true;
}
}
class Eventable {
constructor() {
this._listeners = {};
this._filters = {};
this.pswp = undefined;
this.options = undefined;
}
addFilter(name, fn, priority = 100) {
var _this$_filters$name, _this$_filters$name2, _this$pswp;
if (!this._filters[name]) {
this._filters[name] = [];
}
(_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
fn,
priority
});
(_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
(_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
}
removeFilter(name, fn) {
if (this._filters[name]) {
this._filters[name] = this._filters[name].filter(filter => filter.fn !== fn);
}
if (this.pswp) {
this.pswp.removeFilter(name, fn);
}
}
applyFilters(name, ...args) {
var _this$_filters$name3;
(_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach(filter => {
args[0] = filter.fn.apply(this, args);
});
return args[0];
}
on(name, fn) {
var _this$_listeners$name, _this$pswp2;
if (!this._listeners[name]) {
this._listeners[name] = [];
}
(_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn); // When binding events to lightbox,
(_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
}
off(name, fn) {
var _this$pswp3;
if (this._listeners[name]) {
this._listeners[name] = this._listeners[name].filter(listener => fn !== listener);
}
(_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
}
dispatch(name, details) {
var _this$_listeners$name2;
if (this.pswp) {
return this.pswp.dispatch(name, details);
}
const event =
new PhotoSwipeEvent(name, details);
(_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach(listener => {
listener.call(this, event);
});
return event;
}
}
class Placeholder {
constructor(imageSrc, container) {
this.element = createElement('pswp__img pswp__img--placeholder', imageSrc ? 'img' : 'div', container);
if (imageSrc) {
const imgEl =
this.element;
imgEl.decoding = 'async';
imgEl.alt = '';
imgEl.src = imageSrc;
imgEl.setAttribute('role', 'presentation');
}
this.element.setAttribute('aria-hidden', 'true');
}
setDisplayedSize(width, height) {
if (!this.element) {
return;
}
if (this.element.tagName === 'IMG') {
setWidthHeight(this.element, 250, 'auto');
this.element.style.transformOrigin = '0 0';
this.element.style.transform = toTransformString(0, 0, width / 250);
} else {
setWidthHeight(this.element, width, height);
}
}
destroy() {
var _this$element;
if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
this.element.remove();
}
this.element = null;
}
}
class Content {
constructor(itemData, instance, index) {
this.instance = instance;
this.data = itemData;
this.index = index;
this.element = undefined;
this.placeholder = undefined;
this.slide = undefined;
this.displayedImageWidth = 0;
this.displayedImageHeight = 0;
this.width = Number(this.data.w) || Number(this.data.width) || 0;
this.height = Number(this.data.h) || Number(this.data.height) || 0;
this.isAttached = false;
this.hasSlide = false;
this.isDecoding = false;
this.state = LOAD_STATE.IDLE;
if (this.data.type) {
this.type = this.data.type;
} else if (this.data.src) {
this.type = 'image';
} else {
this.type = 'html';
}
this.instance.dispatch('contentInit', {
content: this
});
}
removePlaceholder() {
if (this.placeholder && !this.keepPlaceholder()) {
setTimeout(() => {
if (this.placeholder) {
this.placeholder.destroy();
this.placeholder = undefined;
}
}, 1000);
}
}
load(isLazy, reload) {
if (this.slide && this.usePlaceholder()) {
if (!this.placeholder) {
const placeholderSrc = this.instance.applyFilters('placeholderSrc', // use  image-based placeholder only for the first slide,
this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
} else {
const placeholderEl = this.placeholder.element; // Add placeholder to DOM if it was already created
if (placeholderEl && !placeholderEl.parentElement) {
this.slide.container.prepend(placeholderEl);
}
}
}
if (this.element && !reload) {
return;
}
if (this.instance.dispatch('contentLoad', {
content: this,
isLazy
}).defaultPrevented) {
return;
}
if (this.isImageContent()) {
this.element = createElement('pswp__img', 'img'); // Start loading only after width is defined, as sizes might depend on it.
if (this.displayedImageWidth) {
this.loadImage(isLazy);
}
} else {
this.element = createElement('pswp__content', 'div');
this.element.innerHTML = this.data.html || '';
}
if (reload && this.slide) {
this.slide.updateContentSize(true);
}
}
loadImage(isLazy) {
var _this$data$src, _this$data$alt;
if (!this.isImageContent() || !this.element || this.instance.dispatch('contentLoadImage', {
content: this,
isLazy
}).defaultPrevented) {
return;
}
const imageElement =
this.element;
this.updateSrcsetSizes();
if (this.data.srcset) {
imageElement.srcset = this.data.srcset;
}
imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : '';
imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : '';
this.state = LOAD_STATE.LOADING;
if (imageElement.complete) {
this.onLoaded();
} else {
imageElement.onload = () => {
this.onLoaded();
};
imageElement.onerror = () => {
this.onError();
};
}
}
setSlide(slide) {
this.slide = slide;
this.hasSlide = true;
this.instance = slide.pswp; // todo: do we need to unset slide?
}
onLoaded() {
this.state = LOAD_STATE.LOADED;
if (this.slide && this.element) {
this.instance.dispatch('loadComplete', {
slide: this.slide,
content: this
}); // if content is reloaded
if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
this.append();
this.slide.updateContentSize(true);
}
if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
this.removePlaceholder();
}
}
}
onError() {
this.state = LOAD_STATE.ERROR;
if (this.slide) {
this.displayError();
this.instance.dispatch('loadComplete', {
slide: this.slide,
isError: true,
content: this
});
this.instance.dispatch('loadError', {
slide: this.slide,
content: this
});
}
}
isLoading() {
return this.instance.applyFilters('isContentLoading', this.state === LOAD_STATE.LOADING, this);
}
isError() {
return this.state === LOAD_STATE.ERROR;
}
isImageContent() {
return this.type === 'image';
}
setDisplayedSize(width, height) {
if (!this.element) {
return;
}
if (this.placeholder) {
this.placeholder.setDisplayedSize(width, height);
}
if (this.instance.dispatch('contentResize', {
content: this,
width,
height
}).defaultPrevented) {
return;
}
setWidthHeight(this.element, width, height);
if (this.isImageContent() && !this.isError()) {
const isInitialSizeUpdate = !this.displayedImageWidth && width;
this.displayedImageWidth = width;
this.displayedImageHeight = height;
if (isInitialSizeUpdate) {
this.loadImage(false);
} else {
this.updateSrcsetSizes();
}
if (this.slide) {
this.instance.dispatch('imageSizeChange', {
slide: this.slide,
width,
height,
content: this
});
}
}
}
isZoomable() {
return this.instance.applyFilters('isContentZoomable', this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
}
updateSrcsetSizes() {
if (!this.isImageContent() || !this.element || !this.data.srcset) {
return;
}
const image =
this.element;
const sizesWidth = this.instance.applyFilters('srcsetSizesWidth', this.displayedImageWidth, this);
if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
image.sizes = sizesWidth + 'px';
image.dataset.largestUsedSize = String(sizesWidth);
}
}
usePlaceholder() {
return this.instance.applyFilters('useContentPlaceholder', this.isImageContent(), this);
}
lazyLoad() {
if (this.instance.dispatch('contentLazyLoad', {
content: this
}).defaultPrevented) {
return;
}
this.load(true);
}
keepPlaceholder() {
return this.instance.applyFilters('isKeepingPlaceholder', this.isLoading(), this);
}
destroy() {
this.hasSlide = false;
this.slide = undefined;
if (this.instance.dispatch('contentDestroy', {
content: this
}).defaultPrevented) {
return;
}
this.remove();
if (this.placeholder) {
this.placeholder.destroy();
this.placeholder = undefined;
}
if (this.isImageContent() && this.element) {
this.element.onload = null;
this.element.onerror = null;
this.element = undefined;
}
}
displayError() {
if (this.slide) {
var _this$instance$option, _this$instance$option2;
let errorMsgEl = createElement('pswp__error-msg', 'div');
errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : '';
errorMsgEl =
this.instance.applyFilters('contentErrorElement', errorMsgEl, this);
this.element = createElement('pswp__content pswp__error-msg-container', 'div');
this.element.appendChild(errorMsgEl);
this.slide.container.innerText = '';
this.slide.container.appendChild(this.element);
this.slide.updateContentSize(true);
this.removePlaceholder();
}
}
append() {
if (this.isAttached || !this.element) {
return;
}
this.isAttached = true;
if (this.state === LOAD_STATE.ERROR) {
this.displayError();
return;
}
if (this.instance.dispatch('contentAppend', {
content: this
}).defaultPrevented) {
return;
}
const supportsDecode = ('decode' in this.element);
if (this.isImageContent()) {
if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
this.isDecoding = true; // purposefully using finally instead of then,
this.element.decode().catch(() => {}).finally(() => {
this.isDecoding = false;
this.appendImage();
});
} else {
this.appendImage();
}
} else if (this.slide && !this.element.parentNode) {
this.slide.container.appendChild(this.element);
}
}
activate() {
if (this.instance.dispatch('contentActivate', {
content: this
}).defaultPrevented || !this.slide) {
return;
}
if (this.isImageContent() && this.isDecoding && !isSafari()) {
this.appendImage();
} else if (this.isError()) {
this.load(false, true); // try to reload
}
if (this.slide.holderElement) {
this.slide.holderElement.setAttribute('aria-hidden', 'false');
}
}
deactivate() {
this.instance.dispatch('contentDeactivate', {
content: this
});
if (this.slide && this.slide.holderElement) {
this.slide.holderElement.setAttribute('aria-hidden', 'true');
}
}
remove() {
this.isAttached = false;
if (this.instance.dispatch('contentRemove', {
content: this
}).defaultPrevented) {
return;
}
if (this.element && this.element.parentNode) {
this.element.remove();
}
if (this.placeholder && this.placeholder.element) {
this.placeholder.element.remove();
}
}
appendImage() {
if (!this.isAttached) {
return;
}
if (this.instance.dispatch('contentAppendImage', {
content: this
}).defaultPrevented) {
return;
} // ensure that element exists and is not already appended
if (this.slide && this.element && !this.element.parentNode) {
this.slide.container.appendChild(this.element);
}
if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
this.removePlaceholder();
}
}
}
function getViewportSize(options, pswp) {
if (options.getViewportSizeFn) {
const newViewportSize = options.getViewportSizeFn(options, pswp);
if (newViewportSize) {
return newViewportSize;
}
}
return {
x: document.documentElement.clientWidth,
y: window.innerHeight
};
}
function parsePaddingOption(prop, options, viewportSize, itemData, index) {
let paddingValue = 0;
if (options.paddingFn) {
paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
} else if (options.padding) {
paddingValue = options.padding[prop];
} else {
const legacyPropName = 'padding' + prop[0].toUpperCase() + prop.slice(1); // @ts-expect-error
if (options[legacyPropName]) {
paddingValue = options[legacyPropName];
}
}
return Number(paddingValue) || 0;
}
function getPanAreaSize(options, viewportSize, itemData, index) {
return {
x: viewportSize.x - parsePaddingOption('left', options, viewportSize, itemData, index) - parsePaddingOption('right', options, viewportSize, itemData, index),
y: viewportSize.y - parsePaddingOption('top', options, viewportSize, itemData, index) - parsePaddingOption('bottom', options, viewportSize, itemData, index)
};
}
const MAX_IMAGE_WIDTH = 4000;
class ZoomLevel {
constructor(options, itemData, index, pswp) {
this.pswp = pswp;
this.options = options;
this.itemData = itemData;
this.index = index;
this.panAreaSize = null;
this.elementSize = null;
this.fit = 1;
this.fill = 1;
this.vFill = 1;
this.initial = 1;
this.secondary = 1;
this.max = 1;
this.min = 1;
}
update(maxWidth, maxHeight, panAreaSize) {
const elementSize = {
x: maxWidth,
y: maxHeight
};
this.elementSize = elementSize;
this.panAreaSize = panAreaSize;
const hRatio = panAreaSize.x / elementSize.x;
const vRatio = panAreaSize.y / elementSize.y;
this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio); // zoom.vFill defines zoom level of the image
this.vFill = Math.min(1, vRatio);
this.initial = this._getInitial();
this.secondary = this._getSecondary();
this.max = Math.max(this.initial, this.secondary, this._getMax());
this.min = Math.min(this.fit, this.initial, this.secondary);
if (this.pswp) {
this.pswp.dispatch('zoomLevelsUpdate', {
zoomLevels: this,
slideData: this.itemData
});
}
}
_parseZoomLevelOption(optionPrefix) {
const optionName =
optionPrefix + 'ZoomLevel';
const optionValue = this.options[optionName];
if (!optionValue) {
return;
}
if (typeof optionValue === 'function') {
return optionValue(this);
}
if (optionValue === 'fill') {
return this.fill;
}
if (optionValue === 'fit') {
return this.fit;
}
return Number(optionValue);
}
_getSecondary() {
let currZoomLevel = this._parseZoomLevelOption('secondary');
if (currZoomLevel) {
return currZoomLevel;
} // 3x of "fit" state, but not larger than original
currZoomLevel = Math.min(1, this.fit * 3);
if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
}
return currZoomLevel;
}
_getInitial() {
return this._parseZoomLevelOption('initial') || this.fit;
}
_getMax() {
return this._parseZoomLevelOption('max') || Math.max(1, this.fit * 4);
}
}
function lazyLoadData(itemData, instance, index) {
const content = instance.createContentFromData(itemData, index);
let zoomLevel;
const {
options
} = instance; // We need to know dimensions of the image to preload it,
if (options) {
zoomLevel = new ZoomLevel(options, itemData, -1);
let viewportSize;
if (instance.pswp) {
viewportSize = instance.pswp.viewportSize;
} else {
viewportSize = getViewportSize(options, instance);
}
const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
zoomLevel.update(content.width, content.height, panAreaSize);
}
content.lazyLoad();
if (zoomLevel) {
content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
}
return content;
}
function lazyLoadSlide(index, instance) {
const itemData = instance.getItemData(index);
if (instance.dispatch('lazyLoadSlide', {
index,
itemData
}).defaultPrevented) {
return;
}
return lazyLoadData(itemData, instance, index);
}
class PhotoSwipeBase extends Eventable {
getNumItems() {
var _this$options;
let numItems = 0;
const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
if (dataSource && 'length' in dataSource) {
numItems = dataSource.length;
} else if (dataSource && 'gallery' in dataSource) {
if (!dataSource.items) {
dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
}
if (dataSource.items) {
numItems = dataSource.items.length;
}
} // legacy event, before filters were introduced
const event = this.dispatch('numItems', {
dataSource,
numItems
});
return this.applyFilters('numItems', event.numItems, dataSource);
}
createContentFromData(slideData, index) {
return new Content(slideData, this, index);
}
getItemData(index) {
var _this$options2;
const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
let dataSourceItem = {};
if (Array.isArray(dataSource)) {
dataSourceItem = dataSource[index];
} else if (dataSource && 'gallery' in dataSource) {
if (!dataSource.items) {
dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
}
dataSourceItem = dataSource.items[index];
}
let itemData = dataSourceItem;
if (itemData instanceof Element) {
itemData = this._domElementToItemData(itemData);
} // Dispatching the itemData event,
const event = this.dispatch('itemData', {
itemData: itemData || {},
index
});
return this.applyFilters('itemData', event.itemData, index);
}
_getGalleryDOMElements(galleryElement) {
var _this$options3, _this$options4;
if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
}
return [galleryElement];
}
_domElementToItemData(element) {
const itemData = {
element
};
const linkEl =
element.tagName === 'A' ? element : element.querySelector('a');
if (linkEl) {
itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
if (linkEl.dataset.pswpSrcset) {
itemData.srcset = linkEl.dataset.pswpSrcset;
}
itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0; // support legacy w & h properties
itemData.w = itemData.width;
itemData.h = itemData.height;
if (linkEl.dataset.pswpType) {
itemData.type = linkEl.dataset.pswpType;
}
const thumbnailEl = element.querySelector('img');
if (thumbnailEl) {
var _thumbnailEl$getAttri;
itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute('alt')) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : '';
}
if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
itemData.thumbCropped = true;
}
}
return this.applyFilters('domItemData', itemData, element, linkEl);
}
lazyLoadData(itemData, index) {
return lazyLoadData(itemData, this, index);
}
}
class PhotoSwipeLightbox extends PhotoSwipeBase {
constructor(options) {
super();
this.options = options || {};
this._uid = 0;
this.shouldOpen = false;
this._preloadedContent = undefined;
this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
}
init() {
getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(galleryElement => {
galleryElement.addEventListener('click', this.onThumbnailsClick, false);
});
}
onThumbnailsClick(e) {
if (specialKeyUsed(e) // ... if clicked with a special key (ctrl/cmd...)
|| window.pswp) {
return;
} // If both clientX and clientY are 0 or not defined,
let initialPoint = {
x: e.clientX,
y: e.clientY
};
if (!initialPoint.x && !initialPoint.y) {
initialPoint = null;
}
let clickedIndex = this.getClickedIndex(e);
clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this);
const dataSource = {
gallery:
e.currentTarget
};
if (clickedIndex >= 0) {
e.preventDefault();
this.loadAndOpen(clickedIndex, dataSource, initialPoint);
}
}
getClickedIndex(e) {
if (this.options.getClickedIndexFn) {
return this.options.getClickedIndexFn.call(this, e);
}
const clickedTarget =
e.target;
const childElements = getElementsFromOption(this.options.children, this.options.childSelector,
e.currentTarget);
const clickedChildIndex = childElements.findIndex(child => child === clickedTarget || child.contains(clickedTarget));
if (clickedChildIndex !== -1) {
return clickedChildIndex;
} else if (this.options.children || this.options.childSelector) {
return -1;
} // There is only one item (which is the gallery)
return 0;
}
loadAndOpen(index, dataSource, initialPoint) {
if (window.pswp || !this.options) {
return false;
} // Use the first gallery element if dataSource is not provided
if (!dataSource && this.options.gallery && this.options.children) {
const galleryElements = getElementsFromOption(this.options.gallery);
if (galleryElements[0]) {
dataSource = {
gallery: galleryElements[0]
};
}
} // set initial index
this.options.index = index; // define options for PhotoSwipe constructor
this.options.initialPointerPos = initialPoint;
this.shouldOpen = true;
this.preload(index, dataSource);
return true;
}
preload(index, dataSource) {
const {
options
} = this;
if (dataSource) {
options.dataSource = dataSource;
} // Add the main module
const promiseArray = [];
const pswpModuleType = typeof options.pswpModule;
if (isPswpClass(options.pswpModule)) {
promiseArray.push(Promise.resolve(
options.pswpModule));
} else if (pswpModuleType === 'string') {
throw new Error('pswpModule as string is no longer supported');
} else if (pswpModuleType === 'function') {
promiseArray.push(
options.pswpModule());
} else {
throw new Error('pswpModule is not valid');
} // Add custom-defined promise, if any
if (typeof options.openPromise === 'function') {
promiseArray.push(options.openPromise());
}
if (options.preloadFirstSlide !== false && index >= 0) {
this._preloadedContent = lazyLoadSlide(index, this);
} // Wait till all promises resolve and open PhotoSwipe
const uid = ++this._uid;
Promise.all(promiseArray).then(iterableModules => {
if (this.shouldOpen) {
const mainModule = iterableModules[0];
this._openPhotoswipe(mainModule, uid);
}
});
}
_openPhotoswipe(module, uid) {
if (uid !== this._uid && this.shouldOpen) {
return;
}
this.shouldOpen = false; // PhotoSwipe is already open
if (window.pswp) {
return;
}
const pswp = typeof module === 'object' ? new module.default(this.options) // eslint-disable-line
: new module(this.options); // eslint-disable-line
this.pswp = pswp;
window.pswp = pswp; // map listeners from Lightbox to PhotoSwipe Core
Object.keys(this._listeners).forEach(name => {
var _this$_listeners$name;
(_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach(fn => {
pswp.on(name,
fn);
});
}); // same with filters
Object.keys(this._filters).forEach(name => {
var _this$_filters$name;
(_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach(filter => {
pswp.addFilter(name, filter.fn, filter.priority);
});
});
if (this._preloadedContent) {
pswp.contentLoader.addToCache(this._preloadedContent);
this._preloadedContent = undefined;
}
pswp.on('destroy', () => {
this.pswp = undefined;
delete window.pswp;
});
pswp.init();
}
destroy() {
var _this$pswp;
(_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
this.shouldOpen = false;
this._listeners = {};
getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach(galleryElement => {
galleryElement.removeEventListener('click', this.onThumbnailsClick, false);
});
}
}
 }),
 "./node_modules/swiper/modules/a11y.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  A11y; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function A11y(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
a11y: {
enabled: true,
notificationClass: 'swiper-notification',
prevSlideMessage: 'Previous slide',
nextSlideMessage: 'Next slide',
firstSlideMessage: 'This is the first slide',
lastSlideMessage: 'This is the last slide',
paginationBulletMessage: 'Go to slide {{index}}',
slideLabelMessage: '{{index}} / {{slidesLength}}',
containerMessage: null,
containerRoleDescriptionMessage: null,
containerRole: null,
itemRoleDescriptionMessage: null,
slideRole: 'group',
id: null,
scrollOnFocus: true
}
});
swiper.a11y = {
clicked: false
};
let liveRegion = null;
let preventFocusHandler;
let focusTargetSlideEl;
let visibilityChangedTimestamp = new Date().getTime();
function notify(message) {
const notification = liveRegion;
if (notification.length === 0) return;
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(notification, message);
}
function getRandomNumber(size) {
if (size === void 0) {
size = 16;
}
const randomChar = () => Math.round(16 * Math.random()).toString(16);
return 'x'.repeat(size).replace(/x/g, randomChar);
}
function makeElFocusable(el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('tabIndex', '0');
});
}
function makeElNotFocusable(el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('tabIndex', '-1');
});
}
function addElRole(el, role) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('role', role);
});
}
function addElRoleDescription(el, description) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-roledescription', description);
});
}
function addElControls(el, controls) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-controls', controls);
});
}
function addElLabel(el, label) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-label', label);
});
}
function addElId(el, id) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('id', id);
});
}
function addElLive(el, live) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-live', live);
});
}
function disableEl(el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-disabled', true);
});
}
function enableEl(el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.setAttribute('aria-disabled', false);
});
}
function onEnterOrSpaceKey(e) {
if (e.keyCode !== 13 && e.keyCode !== 32) return;
const params = swiper.params.a11y;
const targetEl = e.target;
if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
}
if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
if (nextEls.includes(targetEl)) {
if (!(swiper.isEnd && !swiper.params.loop)) {
swiper.slideNext();
}
if (swiper.isEnd) {
notify(params.lastSlideMessage);
} else {
notify(params.nextSlideMessage);
}
}
if (prevEls.includes(targetEl)) {
if (!(swiper.isBeginning && !swiper.params.loop)) {
swiper.slidePrev();
}
if (swiper.isBeginning) {
notify(params.firstSlideMessage);
} else {
notify(params.prevSlideMessage);
}
}
}
if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
targetEl.click();
}
}
function updateNavigation() {
if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
const {
nextEl,
prevEl
} = swiper.navigation;
if (prevEl) {
if (swiper.isBeginning) {
disableEl(prevEl);
makeElNotFocusable(prevEl);
} else {
enableEl(prevEl);
makeElFocusable(prevEl);
}
}
if (nextEl) {
if (swiper.isEnd) {
disableEl(nextEl);
makeElNotFocusable(nextEl);
} else {
enableEl(nextEl);
makeElFocusable(nextEl);
}
}
}
function hasPagination() {
return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
}
function hasClickablePagination() {
return hasPagination() && swiper.params.pagination.clickable;
}
function updatePagination() {
const params = swiper.params.a11y;
if (!hasPagination()) return;
swiper.pagination.bullets.forEach(bulletEl => {
if (swiper.params.pagination.clickable) {
makeElFocusable(bulletEl);
if (!swiper.params.pagination.renderBullet) {
addElRole(bulletEl, 'button');
addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) + 1));
}
}
if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
bulletEl.setAttribute('aria-current', 'true');
} else {
bulletEl.removeAttribute('aria-current');
}
});
}
const initNavEl = (el, wrapperId, message) => {
makeElFocusable(el);
if (el.tagName !== 'BUTTON') {
addElRole(el, 'button');
el.addEventListener('keydown', onEnterOrSpaceKey);
}
addElLabel(el, message);
addElControls(el, wrapperId);
};
const handlePointerDown = e => {
if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
preventFocusHandler = true;
}
swiper.a11y.clicked = true;
};
const handlePointerUp = () => {
preventFocusHandler = false;
requestAnimationFrame(() => {
requestAnimationFrame(() => {
if (!swiper.destroyed) {
swiper.a11y.clicked = false;
}
});
});
};
const onVisibilityChange = e => {
visibilityChangedTimestamp = new Date().getTime();
};
const handleFocus = e => {
if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
if (!slideEl || !swiper.slides.includes(slideEl)) return;
focusTargetSlideEl = slideEl;
const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
if (isActive || isVisible) return;
if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
if (swiper.isHorizontal()) {
swiper.el.scrollLeft = 0;
} else {
swiper.el.scrollTop = 0;
}
requestAnimationFrame(() => {
if (preventFocusHandler) return;
if (swiper.params.loop) {
swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
} else {
swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
}
preventFocusHandler = false;
});
};
const initSlides = () => {
const params = swiper.params.a11y;
if (params.itemRoleDescriptionMessage) {
addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
}
if (params.slideRole) {
addElRole(swiper.slides, params.slideRole);
}
const slidesLength = swiper.slides.length;
if (params.slideLabelMessage) {
swiper.slides.forEach((slideEl, index) => {
const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
addElLabel(slideEl, ariaLabelMessage);
});
}
};
const init = () => {
const params = swiper.params.a11y;
swiper.el.append(liveRegion);
const containerEl = swiper.el;
if (params.containerRoleDescriptionMessage) {
addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
}
if (params.containerMessage) {
addElLabel(containerEl, params.containerMessage);
}
if (params.containerRole) {
addElRole(containerEl, params.containerRole);
}
const wrapperEl = swiper.wrapperEl;
const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
addElId(wrapperEl, wrapperId);
addElLive(wrapperEl, live);
initSlides();
let {
nextEl,
prevEl
} = swiper.navigation ? swiper.navigation : {};
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
if (nextEl) {
nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
}
if (prevEl) {
prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
}
if (hasClickablePagination()) {
const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
paginationEl.forEach(el => {
el.addEventListener('keydown', onEnterOrSpaceKey);
});
}
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
document.addEventListener('visibilitychange', onVisibilityChange);
swiper.el.addEventListener('focus', handleFocus, true);
swiper.el.addEventListener('focus', handleFocus, true);
swiper.el.addEventListener('pointerdown', handlePointerDown, true);
swiper.el.addEventListener('pointerup', handlePointerUp, true);
};
function destroy() {
if (liveRegion) liveRegion.remove();
let {
nextEl,
prevEl
} = swiper.navigation ? swiper.navigation : {};
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
if (nextEl) {
nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
}
if (prevEl) {
prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
}
if (hasClickablePagination()) {
const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
paginationEl.forEach(el => {
el.removeEventListener('keydown', onEnterOrSpaceKey);
});
}
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
document.removeEventListener('visibilitychange', onVisibilityChange);
if (swiper.el && typeof swiper.el !== 'string') {
swiper.el.removeEventListener('focus', handleFocus, true);
swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
swiper.el.removeEventListener('pointerup', handlePointerUp, true);
}
}
on('beforeInit', () => {
liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
liveRegion.setAttribute('aria-live', 'assertive');
liveRegion.setAttribute('aria-atomic', 'true');
});
on('afterInit', () => {
if (!swiper.params.a11y.enabled) return;
init();
});
on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
if (!swiper.params.a11y.enabled) return;
initSlides();
});
on('fromEdge toEdge afterInit lock unlock', () => {
if (!swiper.params.a11y.enabled) return;
updateNavigation();
});
on('paginationUpdate', () => {
if (!swiper.params.a11y.enabled) return;
updatePagination();
});
on('destroy', () => {
if (!swiper.params.a11y.enabled) return;
destroy();
});
}
 }),
 "./node_modules/swiper/modules/autoplay.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Autoplay; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
function Autoplay(_ref) {
let {
swiper,
extendParams,
on,
emit,
params
} = _ref;
swiper.autoplay = {
running: false,
paused: false,
timeLeft: 0
};
extendParams({
autoplay: {
enabled: false,
delay: 3000,
waitForTransition: true,
disableOnInteraction: false,
stopOnLastSlide: false,
reverseDirection: false,
pauseOnMouseEnter: false
}
});
let timeout;
let raf;
let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
let autoplayTimeLeft;
let autoplayStartTime = new Date().getTime();
let wasPaused;
let isTouched;
let pausedByTouch;
let touchStartTimeout;
let slideChanged;
let pausedByInteraction;
let pausedByPointerEnter;
function onTransitionEnd(e) {
if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
if (e.target !== swiper.wrapperEl) return;
swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
return;
}
resume();
}
const calcTimeLeft = () => {
if (swiper.destroyed || !swiper.autoplay.running) return;
if (swiper.autoplay.paused) {
wasPaused = true;
} else if (wasPaused) {
autoplayDelayCurrent = autoplayTimeLeft;
wasPaused = false;
}
const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
swiper.autoplay.timeLeft = timeLeft;
emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
raf = requestAnimationFrame(() => {
calcTimeLeft();
});
};
const getSlideDelay = () => {
let activeSlideEl;
if (swiper.virtual && swiper.params.virtual.enabled) {
activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
} else {
activeSlideEl = swiper.slides[swiper.activeIndex];
}
if (!activeSlideEl) return undefined;
const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
return currentSlideDelay;
};
const run = delayForce => {
if (swiper.destroyed || !swiper.autoplay.running) return;
cancelAnimationFrame(raf);
calcTimeLeft();
let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
autoplayDelayTotal = swiper.params.autoplay.delay;
autoplayDelayCurrent = swiper.params.autoplay.delay;
const currentSlideDelay = getSlideDelay();
if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
delay = currentSlideDelay;
autoplayDelayTotal = currentSlideDelay;
autoplayDelayCurrent = currentSlideDelay;
}
autoplayTimeLeft = delay;
const speed = swiper.params.speed;
const proceed = () => {
if (!swiper || swiper.destroyed) return;
if (swiper.params.autoplay.reverseDirection) {
if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
swiper.slidePrev(speed, true, true);
emit('autoplay');
} else if (!swiper.params.autoplay.stopOnLastSlide) {
swiper.slideTo(swiper.slides.length - 1, speed, true, true);
emit('autoplay');
}
} else {
if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
swiper.slideNext(speed, true, true);
emit('autoplay');
} else if (!swiper.params.autoplay.stopOnLastSlide) {
swiper.slideTo(0, speed, true, true);
emit('autoplay');
}
}
if (swiper.params.cssMode) {
autoplayStartTime = new Date().getTime();
requestAnimationFrame(() => {
run();
});
}
};
if (delay > 0) {
clearTimeout(timeout);
timeout = setTimeout(() => {
proceed();
}, delay);
} else {
requestAnimationFrame(() => {
proceed();
});
}
return delay;
};
const start = () => {
autoplayStartTime = new Date().getTime();
swiper.autoplay.running = true;
run();
emit('autoplayStart');
};
const stop = () => {
swiper.autoplay.running = false;
clearTimeout(timeout);
cancelAnimationFrame(raf);
emit('autoplayStop');
};
const pause = (internal, reset) => {
if (swiper.destroyed || !swiper.autoplay.running) return;
clearTimeout(timeout);
if (!internal) {
pausedByInteraction = true;
}
const proceed = () => {
emit('autoplayPause');
if (swiper.params.autoplay.waitForTransition) {
swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
} else {
resume();
}
};
swiper.autoplay.paused = true;
if (reset) {
if (slideChanged) {
autoplayTimeLeft = swiper.params.autoplay.delay;
}
slideChanged = false;
proceed();
return;
}
const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
proceed();
};
const resume = () => {
if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
autoplayStartTime = new Date().getTime();
if (pausedByInteraction) {
pausedByInteraction = false;
run(autoplayTimeLeft);
} else {
run();
}
swiper.autoplay.paused = false;
emit('autoplayResume');
};
const onVisibilityChange = () => {
if (swiper.destroyed || !swiper.autoplay.running) return;
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
if (document.visibilityState === 'hidden') {
pausedByInteraction = true;
pause(true);
}
if (document.visibilityState === 'visible') {
resume();
}
};
const onPointerEnter = e => {
if (e.pointerType !== 'mouse') return;
pausedByInteraction = true;
pausedByPointerEnter = true;
if (swiper.animating || swiper.autoplay.paused) return;
pause(true);
};
const onPointerLeave = e => {
if (e.pointerType !== 'mouse') return;
pausedByPointerEnter = false;
if (swiper.autoplay.paused) {
resume();
}
};
const attachMouseEvents = () => {
if (swiper.params.autoplay.pauseOnMouseEnter) {
swiper.el.addEventListener('pointerenter', onPointerEnter);
swiper.el.addEventListener('pointerleave', onPointerLeave);
}
};
const detachMouseEvents = () => {
if (swiper.el && typeof swiper.el !== 'string') {
swiper.el.removeEventListener('pointerenter', onPointerEnter);
swiper.el.removeEventListener('pointerleave', onPointerLeave);
}
};
const attachDocumentEvents = () => {
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
document.addEventListener('visibilitychange', onVisibilityChange);
};
const detachDocumentEvents = () => {
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
document.removeEventListener('visibilitychange', onVisibilityChange);
};
on('init', () => {
if (swiper.params.autoplay.enabled) {
attachMouseEvents();
attachDocumentEvents();
start();
}
});
on('destroy', () => {
detachMouseEvents();
detachDocumentEvents();
if (swiper.autoplay.running) {
stop();
}
});
on('_freeModeStaticRelease', () => {
if (pausedByTouch || pausedByInteraction) {
resume();
}
});
on('_freeModeNoMomentumRelease', () => {
if (!swiper.params.autoplay.disableOnInteraction) {
pause(true, true);
} else {
stop();
}
});
on('beforeTransitionStart', (_s, speed, internal) => {
if (swiper.destroyed || !swiper.autoplay.running) return;
if (internal || !swiper.params.autoplay.disableOnInteraction) {
pause(true, true);
} else {
stop();
}
});
on('sliderFirstMove', () => {
if (swiper.destroyed || !swiper.autoplay.running) return;
if (swiper.params.autoplay.disableOnInteraction) {
stop();
return;
}
isTouched = true;
pausedByTouch = false;
pausedByInteraction = false;
touchStartTimeout = setTimeout(() => {
pausedByInteraction = true;
pausedByTouch = true;
pause(true);
}, 200);
});
on('touchEnd', () => {
if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
clearTimeout(touchStartTimeout);
clearTimeout(timeout);
if (swiper.params.autoplay.disableOnInteraction) {
pausedByTouch = false;
isTouched = false;
return;
}
if (pausedByTouch && swiper.params.cssMode) resume();
pausedByTouch = false;
isTouched = false;
});
on('slideChange', () => {
if (swiper.destroyed || !swiper.autoplay.running) return;
slideChanged = true;
});
Object.assign(swiper.autoplay, {
start,
stop,
pause,
resume
});
}
 }),
 "./node_modules/swiper/modules/controller.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Controller; }
 });
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Controller(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
controller: {
control: undefined,
inverse: false,
by: 'slide' // or 'container'
}
});
swiper.controller = {
control: undefined
};
function LinearSpline(x, y) {
const binarySearch = function search() {
let maxIndex;
let minIndex;
let guess;
return (array, val) => {
minIndex = -1;
maxIndex = array.length;
while (maxIndex - minIndex > 1) {
guess = maxIndex + minIndex >> 1;
if (array[guess] <= val) {
minIndex = guess;
} else {
maxIndex = guess;
}
}
return maxIndex;
};
}();
this.x = x;
this.y = y;
this.lastIndex = x.length - 1;
let i1;
let i3;
this.interpolate = function interpolate(x2) {
if (!x2) return 0;
i3 = binarySearch(this.x, x2);
i1 = i3 - 1;
return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
};
return this;
}
function getInterpolateFunction(c) {
swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
}
function setTranslate(_t, byController) {
const controlled = swiper.controller.control;
let multiplier;
let controlledTranslate;
const Swiper = swiper.constructor;
function setControlledTranslate(c) {
if (c.destroyed) return;
const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
if (swiper.params.controller.by === 'slide') {
getInterpolateFunction(c);
controlledTranslate = -swiper.controller.spline.interpolate(-translate);
}
if (!controlledTranslate || swiper.params.controller.by === 'container') {
multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
multiplier = 1;
}
controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
}
if (swiper.params.controller.inverse) {
controlledTranslate = c.maxTranslate() - controlledTranslate;
}
c.updateProgress(controlledTranslate);
c.setTranslate(controlledTranslate, swiper);
c.updateActiveIndex();
c.updateSlidesClasses();
}
if (Array.isArray(controlled)) {
for (let i = 0; i < controlled.length; i += 1) {
if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
setControlledTranslate(controlled[i]);
}
}
} else if (controlled instanceof Swiper && byController !== controlled) {
setControlledTranslate(controlled);
}
}
function setTransition(duration, byController) {
const Swiper = swiper.constructor;
const controlled = swiper.controller.control;
let i;
function setControlledTransition(c) {
if (c.destroyed) return;
c.setTransition(duration, swiper);
if (duration !== 0) {
c.transitionStart();
if (c.params.autoHeight) {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
c.updateAutoHeight();
});
}
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(c.wrapperEl, () => {
if (!controlled) return;
c.transitionEnd();
});
}
}
if (Array.isArray(controlled)) {
for (i = 0; i < controlled.length; i += 1) {
if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
setControlledTransition(controlled[i]);
}
}
} else if (controlled instanceof Swiper && byController !== controlled) {
setControlledTransition(controlled);
}
}
function removeSpline() {
if (!swiper.controller.control) return;
if (swiper.controller.spline) {
swiper.controller.spline = undefined;
delete swiper.controller.spline;
}
}
on('beforeInit', () => {
if (typeof window !== 'undefined' && (
typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
controlElements.forEach(controlElement => {
if (!swiper.controller.control) swiper.controller.control = [];
if (controlElement && controlElement.swiper) {
swiper.controller.control.push(controlElement.swiper);
} else if (controlElement) {
const eventName = `${swiper.params.eventsPrefix}init`;
const onControllerSwiper = e => {
swiper.controller.control.push(e.detail[0]);
swiper.update();
controlElement.removeEventListener(eventName, onControllerSwiper);
};
controlElement.addEventListener(eventName, onControllerSwiper);
}
});
return;
}
swiper.controller.control = swiper.params.controller.control;
});
on('update', () => {
removeSpline();
});
on('resize', () => {
removeSpline();
});
on('observerUpdate', () => {
removeSpline();
});
on('setTranslate', (_s, translate, byController) => {
if (!swiper.controller.control || swiper.controller.control.destroyed) return;
swiper.controller.setTranslate(translate, byController);
});
on('setTransition', (_s, duration, byController) => {
if (!swiper.controller.control || swiper.controller.control.destroyed) return;
swiper.controller.setTransition(duration, byController);
});
Object.assign(swiper.controller, {
setTranslate,
setTransition
});
}
 }),
 "./node_modules/swiper/modules/effect-cards.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectCards; }
 });
 var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
 var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectCards(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
cardsEffect: {
slideShadows: true,
rotate: true,
perSlideRotate: 2,
perSlideOffset: 8
}
});
const setTranslate = () => {
const {
slides,
activeIndex,
rtlTranslate: rtl
} = swiper;
const params = swiper.params.cardsEffect;
const {
startTranslate,
isTouched
} = swiper.touchEventsData;
const currentTranslate = rtl ? -swiper.translate : swiper.translate;
for (let i = 0; i < slides.length; i += 1) {
const slideEl = slides[i];
const slideProgress = slideEl.progress;
const progress = Math.min(Math.max(slideProgress, -4), 4);
let offset = slideEl.swiperSlideOffset;
if (swiper.params.centeredSlides && !swiper.params.cssMode) {
swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
}
if (swiper.params.centeredSlides && swiper.params.cssMode) {
offset -= slides[0].swiperSlideOffset;
}
let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
let tY = 0;
const tZ = -100 * Math.abs(progress);
let scale = 1;
let rotate = -params.perSlideRotate * progress;
let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
if (isSwipeToNext || isSwipeToPrev) {
const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
rotate += -28 * progress * subProgress;
scale += -0.5 * subProgress;
tXAdd += 96 * subProgress;
tY = `${-25 * subProgress * Math.abs(progress)}%`;
}
if (progress < 0) {
tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
} else if (progress > 0) {
tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
} else {
tX = `${tX}px`;
}
if (!swiper.isHorizontal()) {
const prevY = tY;
tY = tX;
tX = prevY;
}
const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
const transform = `
translate3d(${tX}, ${tY}, ${tZ}px)
rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
scale(${scaleString})
`;
if (params.slideShadows) {
let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
if (!shadowEl) {
shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
}
if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
}
slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
targetEl.style.transform = transform;
}
};
const setTransition = duration => {
const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
transformElements.forEach(el => {
el.style.transitionDuration = `${duration}ms`;
el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
shadowEl.style.transitionDuration = `${duration}ms`;
});
});
(0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
swiper,
duration,
transformElements
});
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
effect: 'cards',
swiper,
on,
setTranslate,
setTransition,
perspective: () => true,
overwriteParams: () => ({
_loopSwapReset: false,
watchSlidesProgress: true,
loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
centeredSlides: true,
virtualTranslate: !swiper.params.cssMode
})
});
}
 }),
 "./node_modules/swiper/modules/effect-coverflow.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectCoverflow; }
 });
 var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectCoverflow(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
coverflowEffect: {
rotate: 50,
stretch: 0,
depth: 100,
scale: 1,
modifier: 1,
slideShadows: true
}
});
const setTranslate = () => {
const {
width: swiperWidth,
height: swiperHeight,
slides,
slidesSizesGrid
} = swiper;
const params = swiper.params.coverflowEffect;
const isHorizontal = swiper.isHorizontal();
const transform = swiper.translate;
const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
const rotate = isHorizontal ? params.rotate : -params.rotate;
const translate = params.depth;
const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(swiper);
for (let i = 0, length = slides.length; i < length; i += 1) {
const slideEl = slides[i];
const slideSize = slidesSizesGrid[i];
const slideOffset = slideEl.swiperSlideOffset;
const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
let translateZ = -translate * Math.abs(offsetMultiplier);
let stretch = params.stretch;
if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
stretch = parseFloat(params.stretch) / 100 * slideSize;
}
let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
if (Math.abs(translateX) < 0.001) translateX = 0;
if (Math.abs(translateY) < 0.001) translateY = 0;
if (Math.abs(translateZ) < 0.001) translateZ = 0;
if (Math.abs(rotateY) < 0.001) rotateY = 0;
if (Math.abs(rotateX) < 0.001) rotateX = 0;
if (Math.abs(scale) < 0.001) scale = 0;
const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
targetEl.style.transform = slideTransform;
slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
if (params.slideShadows) {
let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
if (!shadowBeforeEl) {
shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
}
if (!shadowAfterEl) {
shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
}
if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
}
}
};
const setTransition = duration => {
const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
transformElements.forEach(el => {
el.style.transitionDuration = `${duration}ms`;
el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
shadowEl.style.transitionDuration = `${duration}ms`;
});
});
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
effect: 'coverflow',
swiper,
on,
setTranslate,
setTransition,
perspective: () => true,
overwriteParams: () => ({
watchSlidesProgress: true
})
});
}
 }),
 "./node_modules/swiper/modules/effect-creative.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectCreative; }
 });
 var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
 var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectCreative(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
creativeEffect: {
limitProgress: 1,
shadowPerProgress: false,
progressMultiplier: 1,
perspective: true,
prev: {
translate: [0, 0, 0],
rotate: [0, 0, 0],
opacity: 1,
scale: 1
},
next: {
translate: [0, 0, 0],
rotate: [0, 0, 0],
opacity: 1,
scale: 1
}
}
});
const getTranslateValue = value => {
if (typeof value === 'string') return value;
return `${value}px`;
};
const setTranslate = () => {
const {
slides,
wrapperEl,
slidesSizesGrid
} = swiper;
const params = swiper.params.creativeEffect;
const {
progressMultiplier: multiplier
} = params;
const isCenteredSlides = swiper.params.centeredSlides;
const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
if (isCenteredSlides) {
const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
}
for (let i = 0; i < slides.length; i += 1) {
const slideEl = slides[i];
const slideProgress = slideEl.progress;
const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
let originalProgress = progress;
if (!isCenteredSlides) {
originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
}
const offset = slideEl.swiperSlideOffset;
const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
const r = [0, 0, 0];
let custom = false;
if (!swiper.isHorizontal()) {
t[1] = t[0];
t[0] = 0;
}
let data = {
translate: [0, 0, 0],
rotate: [0, 0, 0],
scale: 1,
opacity: 1
};
if (progress < 0) {
data = params.next;
custom = true;
} else if (progress > 0) {
data = params.prev;
custom = true;
}
t.forEach((value, index) => {
t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
});
r.forEach((value, index) => {
let val = data.rotate[index] * Math.abs(progress * multiplier);
r[index] = val;
});
slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
const translateString = t.join(', ');
const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
if (custom && data.shadow || !custom) {
let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
if (!shadowEl && data.shadow) {
shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
}
if (shadowEl) {
const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
}
}
const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
targetEl.style.transform = transform;
targetEl.style.opacity = opacityString;
if (data.origin) {
targetEl.style.transformOrigin = data.origin;
}
}
};
const setTransition = duration => {
const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
transformElements.forEach(el => {
el.style.transitionDuration = `${duration}ms`;
el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
shadowEl.style.transitionDuration = `${duration}ms`;
});
});
(0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
swiper,
duration,
transformElements,
allSlides: true
});
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
effect: 'creative',
swiper,
on,
setTranslate,
setTransition,
perspective: () => swiper.params.creativeEffect.perspective,
overwriteParams: () => ({
watchSlidesProgress: true,
virtualTranslate: !swiper.params.cssMode
})
});
}
 }),
 "./node_modules/swiper/modules/effect-cube.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectCube; }
 });
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectCube(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
cubeEffect: {
slideShadows: true,
shadow: true,
shadowOffset: 20,
shadowScale: 0.94
}
});
const createSlideShadows = (slideEl, progress, isHorizontal) => {
let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
if (!shadowBefore) {
shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
slideEl.append(shadowBefore);
}
if (!shadowAfter) {
shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
slideEl.append(shadowAfter);
}
if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
};
const recreateShadows = () => {
const isHorizontal = swiper.isHorizontal();
swiper.slides.forEach(slideEl => {
const progress = Math.max(Math.min(slideEl.progress, 1), -1);
createSlideShadows(slideEl, progress, isHorizontal);
});
};
const setTranslate = () => {
const {
el,
wrapperEl,
slides,
width: swiperWidth,
height: swiperHeight,
rtlTranslate: rtl,
size: swiperSize,
browser
} = swiper;
const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(swiper);
const params = swiper.params.cubeEffect;
const isHorizontal = swiper.isHorizontal();
const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
let wrapperRotate = 0;
let cubeShadowEl;
if (params.shadow) {
if (isHorizontal) {
cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
if (!cubeShadowEl) {
cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
swiper.wrapperEl.append(cubeShadowEl);
}
cubeShadowEl.style.height = `${swiperWidth}px`;
} else {
cubeShadowEl = el.querySelector('.swiper-cube-shadow');
if (!cubeShadowEl) {
cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
el.append(cubeShadowEl);
}
}
}
for (let i = 0; i < slides.length; i += 1) {
const slideEl = slides[i];
let slideIndex = i;
if (isVirtual) {
slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
}
let slideAngle = slideIndex * 90;
let round = Math.floor(slideAngle / 360);
if (rtl) {
slideAngle = -slideAngle;
round = Math.floor(-slideAngle / 360);
}
const progress = Math.max(Math.min(slideEl.progress, 1), -1);
let tx = 0;
let ty = 0;
let tz = 0;
if (slideIndex % 4 === 0) {
tx = -round * 4 * swiperSize;
tz = 0;
} else if ((slideIndex - 1) % 4 === 0) {
tx = 0;
tz = -round * 4 * swiperSize;
} else if ((slideIndex - 2) % 4 === 0) {
tx = swiperSize + round * 4 * swiperSize;
tz = swiperSize;
} else if ((slideIndex - 3) % 4 === 0) {
tx = -swiperSize;
tz = 3 * swiperSize + swiperSize * 4 * round;
}
if (rtl) {
tx = -tx;
}
if (!isHorizontal) {
ty = tx;
tx = 0;
}
const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
if (progress <= 1 && progress > -1) {
wrapperRotate = slideIndex * 90 + progress * 90;
if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
}
slideEl.style.transform = transform;
if (params.slideShadows) {
createSlideShadows(slideEl, progress, isHorizontal);
}
}
wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
if (params.shadow) {
if (isHorizontal) {
cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
} else {
const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
const scale1 = params.shadowScale;
const scale2 = params.shadowScale / multiplier;
const offset = params.shadowOffset;
cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
}
}
const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
};
const setTransition = duration => {
const {
el,
slides
} = swiper;
slides.forEach(slideEl => {
slideEl.style.transitionDuration = `${duration}ms`;
slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
subEl.style.transitionDuration = `${duration}ms`;
});
});
if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
const shadowEl = el.querySelector('.swiper-cube-shadow');
if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
}
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
effect: 'cube',
swiper,
on,
setTranslate,
setTransition,
recreateShadows,
getEffectParams: () => swiper.params.cubeEffect,
perspective: () => true,
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: true,
resistanceRatio: 0,
spaceBetween: 0,
centeredSlides: false,
virtualTranslate: true
})
});
}
 }),
 "./node_modules/swiper/modules/effect-fade.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectFade; }
 });
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
 var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectFade(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
fadeEffect: {
crossFade: false
}
});
const setTranslate = () => {
const {
slides
} = swiper;
const params = swiper.params.fadeEffect;
for (let i = 0; i < slides.length; i += 1) {
const slideEl = swiper.slides[i];
const offset = slideEl.swiperSlideOffset;
let tx = -offset;
if (!swiper.params.virtualTranslate) tx -= swiper.translate;
let ty = 0;
if (!swiper.isHorizontal()) {
ty = tx;
tx = 0;
}
const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
targetEl.style.opacity = slideOpacity;
targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
}
};
const setTransition = duration => {
const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
transformElements.forEach(el => {
el.style.transitionDuration = `${duration}ms`;
});
(0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
swiper,
duration,
transformElements,
allSlides: true
});
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
effect: 'fade',
swiper,
on,
setTranslate,
setTransition,
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: true,
spaceBetween: 0,
virtualTranslate: !swiper.params.cssMode
})
});
}
 }),
 "./node_modules/swiper/modules/effect-flip.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  EffectFlip; }
 });
 var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
 var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
 var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
 var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function EffectFlip(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
flipEffect: {
slideShadows: true,
limitRotation: true
}
});
const createSlideShadows = (slideEl, progress) => {
let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
if (!shadowBefore) {
shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
}
if (!shadowAfter) {
shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
}
if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
};
const recreateShadows = () => {
swiper.params.flipEffect;
swiper.slides.forEach(slideEl => {
let progress = slideEl.progress;
if (swiper.params.flipEffect.limitRotation) {
progress = Math.max(Math.min(slideEl.progress, 1), -1);
}
createSlideShadows(slideEl, progress);
});
};
const setTranslate = () => {
const {
slides,
rtlTranslate: rtl
} = swiper;
const params = swiper.params.flipEffect;
const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
for (let i = 0; i < slides.length; i += 1) {
const slideEl = slides[i];
let progress = slideEl.progress;
if (swiper.params.flipEffect.limitRotation) {
progress = Math.max(Math.min(slideEl.progress, 1), -1);
}
const offset = slideEl.swiperSlideOffset;
const rotate = -180 * progress;
let rotateY = rotate;
let rotateX = 0;
let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
let ty = 0;
if (!swiper.isHorizontal()) {
ty = tx;
tx = 0;
rotateX = -rotateY;
rotateY = 0;
} else if (rtl) {
rotateY = -rotateY;
}
slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
if (params.slideShadows) {
createSlideShadows(slideEl, progress);
}
const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
targetEl.style.transform = transform;
}
};
const setTransition = duration => {
const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
transformElements.forEach(el => {
el.style.transitionDuration = `${duration}ms`;
el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
shadowEl.style.transitionDuration = `${duration}ms`;
});
});
(0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
swiper,
duration,
transformElements
});
};
(0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
effect: 'flip',
swiper,
on,
setTranslate,
setTransition,
recreateShadows,
getEffectParams: () => swiper.params.flipEffect,
perspective: () => true,
overwriteParams: () => ({
slidesPerView: 1,
slidesPerGroup: 1,
watchSlidesProgress: true,
spaceBetween: 0,
virtualTranslate: !swiper.params.cssMode
})
});
}
 }),
 "./node_modules/swiper/modules/free-mode.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  freeMode; }
 });
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function freeMode(_ref) {
let {
swiper,
extendParams,
emit,
once
} = _ref;
extendParams({
freeMode: {
enabled: false,
momentum: true,
momentumRatio: 1,
momentumBounce: true,
momentumBounceRatio: 1,
momentumVelocityRatio: 1,
sticky: false,
minimumVelocity: 0.02
}
});
function onTouchStart() {
if (swiper.params.cssMode) return;
const translate = swiper.getTranslate();
swiper.setTranslate(translate);
swiper.setTransition(0);
swiper.touchEventsData.velocities.length = 0;
swiper.freeMode.onTouchEnd({
currentPos: swiper.rtl ? swiper.translate : -swiper.translate
});
}
function onTouchMove() {
if (swiper.params.cssMode) return;
const {
touchEventsData: data,
touches
} = swiper;
if (data.velocities.length === 0) {
data.velocities.push({
position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
time: data.touchStartTime
});
}
data.velocities.push({
position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)()
});
}
function onTouchEnd(_ref2) {
let {
currentPos
} = _ref2;
if (swiper.params.cssMode) return;
const {
params,
wrapperEl,
rtlTranslate: rtl,
snapGrid,
touchEventsData: data
} = swiper;
const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)();
const timeDiff = touchEndTime - data.touchStartTime;
if (currentPos < -swiper.minTranslate()) {
swiper.slideTo(swiper.activeIndex);
return;
}
if (currentPos > -swiper.maxTranslate()) {
if (swiper.slides.length < snapGrid.length) {
swiper.slideTo(snapGrid.length - 1);
} else {
swiper.slideTo(swiper.slides.length - 1);
}
return;
}
if (params.freeMode.momentum) {
if (data.velocities.length > 1) {
const lastMoveEvent = data.velocities.pop();
const velocityEvent = data.velocities.pop();
const distance = lastMoveEvent.position - velocityEvent.position;
const time = lastMoveEvent.time - velocityEvent.time;
swiper.velocity = distance / time;
swiper.velocity /= 2;
if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
swiper.velocity = 0;
}
if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)() - lastMoveEvent.time > 300) {
swiper.velocity = 0;
}
} else {
swiper.velocity = 0;
}
swiper.velocity *= params.freeMode.momentumVelocityRatio;
data.velocities.length = 0;
let momentumDuration = 1000 * params.freeMode.momentumRatio;
const momentumDistance = swiper.velocity * momentumDuration;
let newPosition = swiper.translate + momentumDistance;
if (rtl) newPosition = -newPosition;
let doBounce = false;
let afterBouncePosition;
const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
let needsLoopFix;
if (newPosition < swiper.maxTranslate()) {
if (params.freeMode.momentumBounce) {
if (newPosition + swiper.maxTranslate() < -bounceAmount) {
newPosition = swiper.maxTranslate() - bounceAmount;
}
afterBouncePosition = swiper.maxTranslate();
doBounce = true;
data.allowMomentumBounce = true;
} else {
newPosition = swiper.maxTranslate();
}
if (params.loop && params.centeredSlides) needsLoopFix = true;
} else if (newPosition > swiper.minTranslate()) {
if (params.freeMode.momentumBounce) {
if (newPosition - swiper.minTranslate() > bounceAmount) {
newPosition = swiper.minTranslate() + bounceAmount;
}
afterBouncePosition = swiper.minTranslate();
doBounce = true;
data.allowMomentumBounce = true;
} else {
newPosition = swiper.minTranslate();
}
if (params.loop && params.centeredSlides) needsLoopFix = true;
} else if (params.freeMode.sticky) {
let nextSlide;
for (let j = 0; j < snapGrid.length; j += 1) {
if (snapGrid[j] > -newPosition) {
nextSlide = j;
break;
}
}
if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
newPosition = snapGrid[nextSlide];
} else {
newPosition = snapGrid[nextSlide - 1];
}
newPosition = -newPosition;
}
if (needsLoopFix) {
once('transitionEnd', () => {
swiper.loopFix();
});
}
if (swiper.velocity !== 0) {
if (rtl) {
momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
} else {
momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
}
if (params.freeMode.sticky) {
const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
if (moveDistance < currentSlideSize) {
momentumDuration = params.speed;
} else if (moveDistance < 2 * currentSlideSize) {
momentumDuration = params.speed * 1.5;
} else {
momentumDuration = params.speed * 2.5;
}
}
} else if (params.freeMode.sticky) {
swiper.slideToClosest();
return;
}
if (params.freeMode.momentumBounce && doBounce) {
swiper.updateProgress(afterBouncePosition);
swiper.setTransition(momentumDuration);
swiper.setTranslate(newPosition);
swiper.transitionStart(true, swiper.swipeDirection);
swiper.animating = true;
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
emit('momentumBounce');
swiper.setTransition(params.speed);
setTimeout(() => {
swiper.setTranslate(afterBouncePosition);
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
if (!swiper || swiper.destroyed) return;
swiper.transitionEnd();
});
}, 0);
});
} else if (swiper.velocity) {
emit('_freeModeNoMomentumRelease');
swiper.updateProgress(newPosition);
swiper.setTransition(momentumDuration);
swiper.setTranslate(newPosition);
swiper.transitionStart(true, swiper.swipeDirection);
if (!swiper.animating) {
swiper.animating = true;
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
if (!swiper || swiper.destroyed) return;
swiper.transitionEnd();
});
}
} else {
swiper.updateProgress(newPosition);
}
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
} else if (params.freeMode.sticky) {
swiper.slideToClosest();
return;
} else if (params.freeMode) {
emit('_freeModeNoMomentumRelease');
}
if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
emit('_freeModeStaticRelease');
swiper.updateProgress();
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
}
}
Object.assign(swiper, {
freeMode: {
onTouchStart,
onTouchMove,
onTouchEnd
}
});
}
 }),
 "./node_modules/swiper/modules/grid.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Grid; }
 });
function Grid(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
grid: {
rows: 1,
fill: 'column'
}
});
let slidesNumberEvenToRows;
let slidesPerRow;
let numFullColumns;
let wasMultiRow;
const getSpaceBetween = () => {
let spaceBetween = swiper.params.spaceBetween;
if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
} else if (typeof spaceBetween === 'string') {
spaceBetween = parseFloat(spaceBetween);
}
return spaceBetween;
};
const initSlides = slides => {
const {
slidesPerView
} = swiper.params;
const {
rows,
fill
} = swiper.params.grid;
const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
numFullColumns = Math.floor(slidesLength / rows);
if (Math.floor(slidesLength / rows) === slidesLength / rows) {
slidesNumberEvenToRows = slidesLength;
} else {
slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
}
if (slidesPerView !== 'auto' && fill === 'row') {
slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
}
slidesPerRow = slidesNumberEvenToRows / rows;
};
const unsetSlides = () => {
if (swiper.slides) {
swiper.slides.forEach(slide => {
if (slide.swiperSlideGridSet) {
slide.style.height = '';
slide.style[swiper.getDirectionLabel('margin-top')] = '';
}
});
}
};
const updateSlide = (i, slide, slides) => {
const {
slidesPerGroup
} = swiper.params;
const spaceBetween = getSpaceBetween();
const {
rows,
fill
} = swiper.params.grid;
const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
let newSlideOrderIndex;
let column;
let row;
if (fill === 'row' && slidesPerGroup > 1) {
const groupIndex = Math.floor(i / (slidesPerGroup * rows));
const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
row = Math.floor(slideIndexInGroup / columnsInGroup);
column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
slide.style.order = newSlideOrderIndex;
} else if (fill === 'column') {
column = Math.floor(i / rows);
row = i - column * rows;
if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
row += 1;
if (row >= rows) {
row = 0;
column += 1;
}
}
} else {
row = Math.floor(i / slidesPerRow);
column = i - row * slidesPerRow;
}
slide.row = row;
slide.column = column;
slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
slide.swiperSlideGridSet = true;
};
const updateWrapperSize = (slideSize, snapGrid) => {
const {
centeredSlides,
roundLengths
} = swiper.params;
const spaceBetween = getSpaceBetween();
const {
rows
} = swiper.params.grid;
swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
if (!swiper.params.cssMode) {
swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
}
if (centeredSlides) {
const newSlidesGrid = [];
for (let i = 0; i < snapGrid.length; i += 1) {
let slidesGridItem = snapGrid[i];
if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
}
snapGrid.splice(0, snapGrid.length);
snapGrid.push(...newSlidesGrid);
}
};
const onInit = () => {
wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
};
const onUpdate = () => {
const {
params,
el
} = swiper;
const isMultiRow = params.grid && params.grid.rows > 1;
if (wasMultiRow && !isMultiRow) {
el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
numFullColumns = 1;
swiper.emitContainerClasses();
} else if (!wasMultiRow && isMultiRow) {
el.classList.add(`${params.containerModifierClass}grid`);
if (params.grid.fill === 'column') {
el.classList.add(`${params.containerModifierClass}grid-column`);
}
swiper.emitContainerClasses();
}
wasMultiRow = isMultiRow;
};
on('init', onInit);
on('update', onUpdate);
swiper.grid = {
initSlides,
unsetSlides,
updateSlide,
updateWrapperSize
};
}
 }),
 "./node_modules/swiper/modules/hash-navigation.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  HashNavigation; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function HashNavigation(_ref) {
let {
swiper,
extendParams,
emit,
on
} = _ref;
let initialized = false;
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
extendParams({
hashNavigation: {
enabled: false,
replaceState: false,
watchState: false,
getSlideIndex(_s, hash) {
if (swiper.virtual && swiper.params.virtual.enabled) {
const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
if (!slideWithHash) return 0;
const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
return index;
}
return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
}
}
});
const onHashChange = () => {
emit('hashChange');
const newHash = document.location.hash.replace('#', '');
const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
if (newHash !== activeSlideHash) {
const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
swiper.slideTo(newIndex);
}
};
const setHash = () => {
if (!initialized || !swiper.params.hashNavigation.enabled) return;
const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
window.history.replaceState(null, null, `#${activeSlideHash}` || '');
emit('hashSet');
} else {
document.location.hash = activeSlideHash || '';
emit('hashSet');
}
};
const init = () => {
if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
initialized = true;
const hash = document.location.hash.replace('#', '');
if (hash) {
const speed = 0;
const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
}
if (swiper.params.hashNavigation.watchState) {
window.addEventListener('hashchange', onHashChange);
}
};
const destroy = () => {
if (swiper.params.hashNavigation.watchState) {
window.removeEventListener('hashchange', onHashChange);
}
};
on('init', () => {
if (swiper.params.hashNavigation.enabled) {
init();
}
});
on('destroy', () => {
if (swiper.params.hashNavigation.enabled) {
destroy();
}
});
on('transitionEnd _freeModeNoMomentumRelease', () => {
if (initialized) {
setHash();
}
});
on('slideChange', () => {
if (initialized && swiper.params.cssMode) {
setHash();
}
});
}
 }),
 "./node_modules/swiper/modules/history.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  History; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
function History(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
history: {
enabled: false,
root: '',
replaceState: false,
key: 'slides',
keepQuery: false
}
});
let initialized = false;
let paths = {};
const slugify = text => {
return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
};
const getPathValues = urlOverride => {
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
let location;
if (urlOverride) {
location = new URL(urlOverride);
} else {
location = window.location;
}
const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
const total = pathArray.length;
const key = pathArray[total - 2];
const value = pathArray[total - 1];
return {
key,
value
};
};
const setHistory = (key, index) => {
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
if (!initialized || !swiper.params.history.enabled) return;
let location;
if (swiper.params.url) {
location = new URL(swiper.params.url);
} else {
location = window.location;
}
const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
let value = slugify(slide.getAttribute('data-history'));
if (swiper.params.history.root.length > 0) {
let root = swiper.params.history.root;
if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
value = `${root}/${key ? `${key}/` : ''}${value}`;
} else if (!location.pathname.includes(key)) {
value = `${key ? `${key}/` : ''}${value}`;
}
if (swiper.params.history.keepQuery) {
value += location.search;
}
const currentState = window.history.state;
if (currentState && currentState.value === value) {
return;
}
if (swiper.params.history.replaceState) {
window.history.replaceState({
value
}, null, value);
} else {
window.history.pushState({
value
}, null, value);
}
};
const scrollToSlide = (speed, value, runCallbacks) => {
if (value) {
for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
const slide = swiper.slides[i];
const slideHistory = slugify(slide.getAttribute('data-history'));
if (slideHistory === value) {
const index = swiper.getSlideIndex(slide);
swiper.slideTo(index, speed, runCallbacks);
}
}
} else {
swiper.slideTo(0, speed, runCallbacks);
}
};
const setHistoryPopState = () => {
paths = getPathValues(swiper.params.url);
scrollToSlide(swiper.params.speed, paths.value, false);
};
const init = () => {
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
if (!swiper.params.history) return;
if (!window.history || !window.history.pushState) {
swiper.params.history.enabled = false;
swiper.params.hashNavigation.enabled = true;
return;
}
initialized = true;
paths = getPathValues(swiper.params.url);
if (!paths.key && !paths.value) {
if (!swiper.params.history.replaceState) {
window.addEventListener('popstate', setHistoryPopState);
}
return;
}
scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
if (!swiper.params.history.replaceState) {
window.addEventListener('popstate', setHistoryPopState);
}
};
const destroy = () => {
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
if (!swiper.params.history.replaceState) {
window.removeEventListener('popstate', setHistoryPopState);
}
};
on('init', () => {
if (swiper.params.history.enabled) {
init();
}
});
on('destroy', () => {
if (swiper.params.history.enabled) {
destroy();
}
});
on('transitionEnd _freeModeNoMomentumRelease', () => {
if (initialized) {
setHistory(swiper.params.history.key, swiper.activeIndex);
}
});
on('slideChange', () => {
if (initialized && swiper.params.cssMode) {
setHistory(swiper.params.history.key, swiper.activeIndex);
}
});
}
 }),
 "./node_modules/swiper/modules/keyboard.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Keyboard; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Keyboard(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
swiper.keyboard = {
enabled: false
};
extendParams({
keyboard: {
enabled: false,
onlyInViewport: true,
pageUpDown: true
}
});
function handle(event) {
if (!swiper.enabled) return;
const {
rtlTranslate: rtl
} = swiper;
let e = event;
if (e.originalEvent) e = e.originalEvent; // jquery fix
const kc = e.keyCode || e.charCode;
const pageUpDown = swiper.params.keyboard.pageUpDown;
const isPageUp = pageUpDown && kc === 33;
const isPageDown = pageUpDown && kc === 34;
const isArrowLeft = kc === 37;
const isArrowRight = kc === 39;
const isArrowUp = kc === 38;
const isArrowDown = kc === 40;
if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
return false;
}
if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
return false;
}
if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
return undefined;
}
if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
return undefined;
}
if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
let inView = false;
if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
return undefined;
}
const el = swiper.el;
const swiperWidth = el.clientWidth;
const swiperHeight = el.clientHeight;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el);
if (rtl) swiperOffset.left -= el.scrollLeft;
const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
for (let i = 0; i < swiperCoord.length; i += 1) {
const point = swiperCoord[i];
if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
inView = true;
}
}
if (!inView) return undefined;
}
if (swiper.isHorizontal()) {
if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
if (e.preventDefault) e.preventDefault();else e.returnValue = false;
}
if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
} else {
if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
if (e.preventDefault) e.preventDefault();else e.returnValue = false;
}
if (isPageDown || isArrowDown) swiper.slideNext();
if (isPageUp || isArrowUp) swiper.slidePrev();
}
emit('keyPress', kc);
return undefined;
}
function enable() {
if (swiper.keyboard.enabled) return;
document.addEventListener('keydown', handle);
swiper.keyboard.enabled = true;
}
function disable() {
if (!swiper.keyboard.enabled) return;
document.removeEventListener('keydown', handle);
swiper.keyboard.enabled = false;
}
on('init', () => {
if (swiper.params.keyboard.enabled) {
enable();
}
});
on('destroy', () => {
if (swiper.keyboard.enabled) {
disable();
}
});
Object.assign(swiper.keyboard, {
enable,
disable
});
}
 }),
 "./node_modules/swiper/modules/manipulation.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Manipulation; }
 });
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function appendSlide(slides) {
const swiper = this;
const {
params,
slidesEl
} = swiper;
if (params.loop) {
swiper.loopDestroy();
}
const appendElement = slideEl => {
if (typeof slideEl === 'string') {
const tempDOM = document.createElement('div');
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
slidesEl.append(tempDOM.children[0]);
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
} else {
slidesEl.append(slideEl);
}
};
if (typeof slides === 'object' && 'length' in slides) {
for (let i = 0; i < slides.length; i += 1) {
if (slides[i]) appendElement(slides[i]);
}
} else {
appendElement(slides);
}
swiper.recalcSlides();
if (params.loop) {
swiper.loopCreate();
}
if (!params.observer || swiper.isElement) {
swiper.update();
}
}
function prependSlide(slides) {
const swiper = this;
const {
params,
activeIndex,
slidesEl
} = swiper;
if (params.loop) {
swiper.loopDestroy();
}
let newActiveIndex = activeIndex + 1;
const prependElement = slideEl => {
if (typeof slideEl === 'string') {
const tempDOM = document.createElement('div');
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
slidesEl.prepend(tempDOM.children[0]);
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
} else {
slidesEl.prepend(slideEl);
}
};
if (typeof slides === 'object' && 'length' in slides) {
for (let i = 0; i < slides.length; i += 1) {
if (slides[i]) prependElement(slides[i]);
}
newActiveIndex = activeIndex + slides.length;
} else {
prependElement(slides);
}
swiper.recalcSlides();
if (params.loop) {
swiper.loopCreate();
}
if (!params.observer || swiper.isElement) {
swiper.update();
}
swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
const swiper = this;
const {
params,
activeIndex,
slidesEl
} = swiper;
let activeIndexBuffer = activeIndex;
if (params.loop) {
activeIndexBuffer -= swiper.loopedSlides;
swiper.loopDestroy();
swiper.recalcSlides();
}
const baseLength = swiper.slides.length;
if (index <= 0) {
swiper.prependSlide(slides);
return;
}
if (index >= baseLength) {
swiper.appendSlide(slides);
return;
}
let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
const slidesBuffer = [];
for (let i = baseLength - 1; i >= index; i -= 1) {
const currentSlide = swiper.slides[i];
currentSlide.remove();
slidesBuffer.unshift(currentSlide);
}
if (typeof slides === 'object' && 'length' in slides) {
for (let i = 0; i < slides.length; i += 1) {
if (slides[i]) slidesEl.append(slides[i]);
}
newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
} else {
slidesEl.append(slides);
}
for (let i = 0; i < slidesBuffer.length; i += 1) {
slidesEl.append(slidesBuffer[i]);
}
swiper.recalcSlides();
if (params.loop) {
swiper.loopCreate();
}
if (!params.observer || swiper.isElement) {
swiper.update();
}
if (params.loop) {
swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
} else {
swiper.slideTo(newActiveIndex, 0, false);
}
}
function removeSlide(slidesIndexes) {
const swiper = this;
const {
params,
activeIndex
} = swiper;
let activeIndexBuffer = activeIndex;
if (params.loop) {
activeIndexBuffer -= swiper.loopedSlides;
swiper.loopDestroy();
}
let newActiveIndex = activeIndexBuffer;
let indexToRemove;
if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
for (let i = 0; i < slidesIndexes.length; i += 1) {
indexToRemove = slidesIndexes[i];
if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
}
newActiveIndex = Math.max(newActiveIndex, 0);
} else {
indexToRemove = slidesIndexes;
if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
newActiveIndex = Math.max(newActiveIndex, 0);
}
swiper.recalcSlides();
if (params.loop) {
swiper.loopCreate();
}
if (!params.observer || swiper.isElement) {
swiper.update();
}
if (params.loop) {
swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
} else {
swiper.slideTo(newActiveIndex, 0, false);
}
}
function removeAllSlides() {
const swiper = this;
const slidesIndexes = [];
for (let i = 0; i < swiper.slides.length; i += 1) {
slidesIndexes.push(i);
}
swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
let {
swiper
} = _ref;
Object.assign(swiper, {
appendSlide: appendSlide.bind(swiper),
prependSlide: prependSlide.bind(swiper),
addSlide: addSlide.bind(swiper),
removeSlide: removeSlide.bind(swiper),
removeAllSlides: removeAllSlides.bind(swiper)
});
}
 }),
 "./node_modules/swiper/modules/mousewheel.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Mousewheel; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Mousewheel(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
extendParams({
mousewheel: {
enabled: false,
releaseOnEdges: false,
invert: false,
forceToAxis: false,
sensitivity: 1,
eventsTarget: 'container',
thresholdDelta: null,
thresholdTime: null,
noMousewheelClass: 'swiper-no-mousewheel'
}
});
swiper.mousewheel = {
enabled: false
};
let timeout;
let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
let lastEventBeforeSnap;
const recentWheelEvents = [];
function normalize(e) {
const PIXEL_STEP = 10;
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
let sX = 0;
let sY = 0; // spinX, spinY
let pX = 0;
let pY = 0; // pixelX, pixelY
if ('detail' in e) {
sY = e.detail;
}
if ('wheelDelta' in e) {
sY = -e.wheelDelta / 120;
}
if ('wheelDeltaY' in e) {
sY = -e.wheelDeltaY / 120;
}
if ('wheelDeltaX' in e) {
sX = -e.wheelDeltaX / 120;
}
if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
sX = sY;
sY = 0;
}
pX = sX * PIXEL_STEP;
pY = sY * PIXEL_STEP;
if ('deltaY' in e) {
pY = e.deltaY;
}
if ('deltaX' in e) {
pX = e.deltaX;
}
if (e.shiftKey && !pX) {
pX = pY;
pY = 0;
}
if ((pX || pY) && e.deltaMode) {
if (e.deltaMode === 1) {
pX *= LINE_HEIGHT;
pY *= LINE_HEIGHT;
} else {
pX *= PAGE_HEIGHT;
pY *= PAGE_HEIGHT;
}
}
if (pX && !sX) {
sX = pX < 1 ? -1 : 1;
}
if (pY && !sY) {
sY = pY < 1 ? -1 : 1;
}
return {
spinX: sX,
spinY: sY,
pixelX: pX,
pixelY: pY
};
}
function handleMouseEnter() {
if (!swiper.enabled) return;
swiper.mouseEntered = true;
}
function handleMouseLeave() {
if (!swiper.enabled) return;
swiper.mouseEntered = false;
}
function animateSlider(newEvent) {
if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
return false;
}
if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
return false;
}
if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < 60) {
return true;
}
if (newEvent.direction < 0) {
if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
swiper.slideNext();
emit('scroll', newEvent.raw);
}
} else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
swiper.slidePrev();
emit('scroll', newEvent.raw);
}
lastScrollTime = new window.Date().getTime();
return false;
}
function releaseScroll(newEvent) {
const params = swiper.params.mousewheel;
if (newEvent.direction < 0) {
if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
return true;
}
} else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
return true;
}
return false;
}
function handle(event) {
let e = event;
let disableParentSwiper = true;
if (!swiper.enabled) return;
if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
const params = swiper.params.mousewheel;
if (swiper.params.cssMode) {
e.preventDefault();
}
let targetEl = swiper.el;
if (swiper.params.mousewheel.eventsTarget !== 'container') {
targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
}
const targetElContainsTarget = targetEl && targetEl.contains(e.target);
if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
if (e.originalEvent) e = e.originalEvent; // jquery fix
let delta = 0;
const rtlFactor = swiper.rtlTranslate ? -1 : 1;
const data = normalize(e);
if (params.forceToAxis) {
if (swiper.isHorizontal()) {
if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
} else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
} else {
delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
}
if (delta === 0) return true;
if (params.invert) delta = -delta;
let positions = swiper.getTranslate() + delta * params.sensitivity;
if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
const newEvent = {
time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
delta: Math.abs(delta),
direction: Math.sign(delta),
raw: event
};
if (recentWheelEvents.length >= 2) {
recentWheelEvents.shift(); // only store the last N events
}
const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
recentWheelEvents.push(newEvent);
if (prevEvent) {
if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
animateSlider(newEvent);
}
} else {
animateSlider(newEvent);
}
if (releaseScroll(newEvent)) {
return true;
}
} else {
const newEvent = {
time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
delta: Math.abs(delta),
direction: Math.sign(delta)
};
const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
if (!ignoreWheelEvents) {
lastEventBeforeSnap = undefined;
let position = swiper.getTranslate() + delta * params.sensitivity;
const wasBeginning = swiper.isBeginning;
const wasEnd = swiper.isEnd;
if (position >= swiper.minTranslate()) position = swiper.minTranslate();
if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
swiper.setTransition(0);
swiper.setTranslate(position);
swiper.updateProgress();
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
swiper.updateSlidesClasses();
}
if (swiper.params.loop) {
swiper.loopFix({
direction: newEvent.direction < 0 ? 'next' : 'prev',
byMousewheel: true
});
}
if (swiper.params.freeMode.sticky) {
clearTimeout(timeout);
timeout = undefined;
if (recentWheelEvents.length >= 15) {
recentWheelEvents.shift(); // only store the last N events
}
const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
const firstEvent = recentWheelEvents[0];
recentWheelEvents.push(newEvent);
if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
recentWheelEvents.splice(0);
} else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
const snapToThreshold = delta > 0 ? 0.8 : 0.2;
lastEventBeforeSnap = newEvent;
recentWheelEvents.splice(0);
timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
if (swiper.destroyed || !swiper.params) return;
swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
}, 0); // no delay; move on next tick
}
if (!timeout) {
timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
if (swiper.destroyed || !swiper.params) return;
const snapToThreshold = 0.5;
lastEventBeforeSnap = newEvent;
recentWheelEvents.splice(0);
swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
}, 500);
}
}
if (!ignoreWheelEvents) emit('scroll', e);
if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
return true;
}
}
}
if (e.preventDefault) e.preventDefault();else e.returnValue = false;
return false;
}
function events(method) {
let targetEl = swiper.el;
if (swiper.params.mousewheel.eventsTarget !== 'container') {
targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
}
targetEl[method]('mouseenter', handleMouseEnter);
targetEl[method]('mouseleave', handleMouseLeave);
targetEl[method]('wheel', handle);
}
function enable() {
if (swiper.params.cssMode) {
swiper.wrapperEl.removeEventListener('wheel', handle);
return true;
}
if (swiper.mousewheel.enabled) return false;
events('addEventListener');
swiper.mousewheel.enabled = true;
return true;
}
function disable() {
if (swiper.params.cssMode) {
swiper.wrapperEl.addEventListener(event, handle);
return true;
}
if (!swiper.mousewheel.enabled) return false;
events('removeEventListener');
swiper.mousewheel.enabled = false;
return true;
}
on('init', () => {
if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
disable();
}
if (swiper.params.mousewheel.enabled) enable();
});
on('destroy', () => {
if (swiper.params.cssMode) {
enable();
}
if (swiper.mousewheel.enabled) disable();
});
Object.assign(swiper.mousewheel, {
enable,
disable
});
}
 }),
 "./node_modules/swiper/modules/navigation.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Navigation; }
 });
 var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Navigation(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
extendParams({
navigation: {
nextEl: null,
prevEl: null,
hideOnClick: false,
disabledClass: 'swiper-button-disabled',
hiddenClass: 'swiper-button-hidden',
lockClass: 'swiper-button-lock',
navigationDisabledClass: 'swiper-navigation-disabled'
}
});
swiper.navigation = {
nextEl: null,
prevEl: null
};
function getEl(el) {
let res;
if (el && typeof el === 'string' && swiper.isElement) {
res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
if (res) return res;
}
if (el) {
if (typeof el === 'string') res = [...document.querySelectorAll(el)];
if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
res = swiper.el.querySelector(el);
} else if (res && res.length === 1) {
res = res[0];
}
}
if (el && !res) return el;
return res;
}
function toggleEl(el, disabled) {
const params = swiper.params.navigation;
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
el.forEach(subEl => {
if (subEl) {
subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
if (swiper.params.watchOverflow && swiper.enabled) {
subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
}
}
});
}
function update() {
const {
nextEl,
prevEl
} = swiper.navigation;
if (swiper.params.loop) {
toggleEl(prevEl, false);
toggleEl(nextEl, false);
return;
}
toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
}
function onPrevClick(e) {
e.preventDefault();
if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
swiper.slidePrev();
emit('navigationPrev');
}
function onNextClick(e) {
e.preventDefault();
if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
swiper.slideNext();
emit('navigationNext');
}
function init() {
const params = swiper.params.navigation;
swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
nextEl: 'swiper-button-next',
prevEl: 'swiper-button-prev'
});
if (!(params.nextEl || params.prevEl)) return;
let nextEl = getEl(params.nextEl);
let prevEl = getEl(params.prevEl);
Object.assign(swiper.navigation, {
nextEl,
prevEl
});
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
const initButton = (el, dir) => {
if (el) {
el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
}
if (!swiper.enabled && el) {
el.classList.add(...params.lockClass.split(' '));
}
};
nextEl.forEach(el => initButton(el, 'next'));
prevEl.forEach(el => initButton(el, 'prev'));
}
function destroy() {
let {
nextEl,
prevEl
} = swiper.navigation;
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
const destroyButton = (el, dir) => {
el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
};
nextEl.forEach(el => destroyButton(el, 'next'));
prevEl.forEach(el => destroyButton(el, 'prev'));
}
on('init', () => {
if (swiper.params.navigation.enabled === false) {
disable();
} else {
init();
update();
}
});
on('toEdge fromEdge lock unlock', () => {
update();
});
on('destroy', () => {
destroy();
});
on('enable disable', () => {
let {
nextEl,
prevEl
} = swiper.navigation;
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
if (swiper.enabled) {
update();
return;
}
[...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
});
on('click', (_s, e) => {
let {
nextEl,
prevEl
} = swiper.navigation;
nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
const targetEl = e.target;
let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
if (swiper.isElement && !targetIsButton) {
const path = e.path || e.composedPath && e.composedPath();
if (path) {
targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
}
}
if (swiper.params.navigation.hideOnClick && !targetIsButton) {
if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
let isHidden;
if (nextEl.length) {
isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
} else if (prevEl.length) {
isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
}
if (isHidden === true) {
emit('navigationShow');
} else {
emit('navigationHide');
}
[...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
}
});
const enable = () => {
swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
init();
update();
};
const disable = () => {
swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
destroy();
};
Object.assign(swiper.navigation, {
enable,
disable,
update,
init,
destroy
});
}
 }),
 "./node_modules/swiper/modules/pagination.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Pagination; }
 });
 var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
 var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Pagination(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const pfx = 'swiper-pagination';
extendParams({
pagination: {
el: null,
bulletElement: 'span',
clickable: false,
hideOnClick: false,
renderBullet: null,
renderProgressbar: null,
renderFraction: null,
renderCustom: null,
progressbarOpposite: false,
type: 'bullets',
dynamicBullets: false,
dynamicMainBullets: 1,
formatFractionCurrent: number => number,
formatFractionTotal: number => number,
bulletClass: `${pfx}-bullet`,
bulletActiveClass: `${pfx}-bullet-active`,
modifierClass: `${pfx}-`,
currentClass: `${pfx}-current`,
totalClass: `${pfx}-total`,
hiddenClass: `${pfx}-hidden`,
progressbarFillClass: `${pfx}-progressbar-fill`,
progressbarOppositeClass: `${pfx}-progressbar-opposite`,
clickableClass: `${pfx}-clickable`,
lockClass: `${pfx}-lock`,
horizontalClass: `${pfx}-horizontal`,
verticalClass: `${pfx}-vertical`,
paginationDisabledClass: `${pfx}-disabled`
}
});
swiper.pagination = {
el: null,
bullets: []
};
let bulletSize;
let dynamicBulletIndex = 0;
function isPaginationDisabled() {
return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
}
function setSideBullets(bulletEl, position) {
const {
bulletActiveClass
} = swiper.params.pagination;
if (!bulletEl) return;
bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
if (bulletEl) {
bulletEl.classList.add(`${bulletActiveClass}-${position}`);
bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
if (bulletEl) {
bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
}
}
}
function getMoveDirection(prevIndex, nextIndex, length) {
prevIndex = prevIndex % length;
nextIndex = nextIndex % length;
if (nextIndex === prevIndex + 1) {
return 'next';
} else if (nextIndex === prevIndex - 1) {
return 'previous';
}
return;
}
function onBulletClick(e) {
const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
if (!bulletEl) {
return;
}
e.preventDefault();
const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) * swiper.params.slidesPerGroup;
if (swiper.params.loop) {
if (swiper.realIndex === index) return;
const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
if (moveDirection === 'next') {
swiper.slideNext();
} else if (moveDirection === 'previous') {
swiper.slidePrev();
} else {
swiper.slideToLoop(index);
}
} else {
swiper.slideTo(index);
}
}
function update() {
const rtl = swiper.rtl;
const params = swiper.params.pagination;
if (isPaginationDisabled()) return;
let el = swiper.pagination.el;
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
let current;
let previousIndex;
const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
if (swiper.params.loop) {
previousIndex = swiper.previousRealIndex || 0;
current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
} else if (typeof swiper.snapIndex !== 'undefined') {
current = swiper.snapIndex;
previousIndex = swiper.previousSnapIndex;
} else {
previousIndex = swiper.previousIndex || 0;
current = swiper.activeIndex || 0;
}
if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
const bullets = swiper.pagination.bullets;
let firstIndex;
let lastIndex;
let midIndex;
if (params.dynamicBullets) {
bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
el.forEach(subEl => {
subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
});
if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
dynamicBulletIndex += current - (previousIndex || 0);
if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
dynamicBulletIndex = params.dynamicMainBullets - 1;
} else if (dynamicBulletIndex < 0) {
dynamicBulletIndex = 0;
}
}
firstIndex = Math.max(current - dynamicBulletIndex, 0);
lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
midIndex = (lastIndex + firstIndex) / 2;
}
bullets.forEach(bulletEl => {
const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
bulletEl.classList.remove(...classesToRemove);
});
if (el.length > 1) {
bullets.forEach(bullet => {
const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bullet);
if (bulletIndex === current) {
bullet.classList.add(...params.bulletActiveClass.split(' '));
} else if (swiper.isElement) {
bullet.setAttribute('part', 'bullet');
}
if (params.dynamicBullets) {
if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
}
if (bulletIndex === firstIndex) {
setSideBullets(bullet, 'prev');
}
if (bulletIndex === lastIndex) {
setSideBullets(bullet, 'next');
}
}
});
} else {
const bullet = bullets[current];
if (bullet) {
bullet.classList.add(...params.bulletActiveClass.split(' '));
}
if (swiper.isElement) {
bullets.forEach((bulletEl, bulletIndex) => {
bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
});
}
if (params.dynamicBullets) {
const firstDisplayedBullet = bullets[firstIndex];
const lastDisplayedBullet = bullets[lastIndex];
for (let i = firstIndex; i <= lastIndex; i += 1) {
if (bullets[i]) {
bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
}
}
setSideBullets(firstDisplayedBullet, 'prev');
setSideBullets(lastDisplayedBullet, 'next');
}
}
if (params.dynamicBullets) {
const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
const offsetProp = rtl ? 'right' : 'left';
bullets.forEach(bullet => {
bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
});
}
}
el.forEach((subEl, subElIndex) => {
if (params.type === 'fraction') {
subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
fractionEl.textContent = params.formatFractionCurrent(current + 1);
});
subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
totalEl.textContent = params.formatFractionTotal(total);
});
}
if (params.type === 'progressbar') {
let progressbarDirection;
if (params.progressbarOpposite) {
progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
} else {
progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
}
const scale = (current + 1) / total;
let scaleX = 1;
let scaleY = 1;
if (progressbarDirection === 'horizontal') {
scaleX = scale;
} else {
scaleY = scale;
}
subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
});
}
if (params.type === 'custom' && params.renderCustom) {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, params.renderCustom(swiper, current + 1, total));
if (subElIndex === 0) emit('paginationRender', subEl);
} else {
if (subElIndex === 0) emit('paginationRender', subEl);
emit('paginationUpdate', subEl);
}
if (swiper.params.watchOverflow && swiper.enabled) {
subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
}
});
}
function render() {
const params = swiper.params.pagination;
if (isPaginationDisabled()) return;
const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
let el = swiper.pagination.el;
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
let paginationHTML = '';
if (params.type === 'bullets') {
let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
numberOfBullets = slidesLength;
}
for (let i = 0; i < numberOfBullets; i += 1) {
if (params.renderBullet) {
paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
} else {
paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
}
}
}
if (params.type === 'fraction') {
if (params.renderFraction) {
paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
} else {
paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
}
}
if (params.type === 'progressbar') {
if (params.renderProgressbar) {
paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
} else {
paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
}
}
swiper.pagination.bullets = [];
el.forEach(subEl => {
if (params.type !== 'custom') {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, paginationHTML || '');
}
if (params.type === 'bullets') {
swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
}
});
if (params.type !== 'custom') {
emit('paginationRender', el[0]);
}
}
function init() {
swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
el: 'swiper-pagination'
});
const params = swiper.params.pagination;
if (!params.el) return;
let el;
if (typeof params.el === 'string' && swiper.isElement) {
el = swiper.el.querySelector(params.el);
}
if (!el && typeof params.el === 'string') {
el = [...document.querySelectorAll(params.el)];
}
if (!el) {
el = params.el;
}
if (!el || el.length === 0) return;
if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
el = [...swiper.el.querySelectorAll(params.el)];
if (el.length > 1) {
el = el.find(subEl => {
if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(subEl, '.swiper')[0] !== swiper.el) return false;
return true;
});
}
}
if (Array.isArray(el) && el.length === 1) el = el[0];
Object.assign(swiper.pagination, {
el
});
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
if (params.type === 'bullets' && params.clickable) {
subEl.classList.add(...(params.clickableClass || '').split(' '));
}
subEl.classList.add(params.modifierClass + params.type);
subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
if (params.type === 'bullets' && params.dynamicBullets) {
subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
dynamicBulletIndex = 0;
if (params.dynamicMainBullets < 1) {
params.dynamicMainBullets = 1;
}
}
if (params.type === 'progressbar' && params.progressbarOpposite) {
subEl.classList.add(params.progressbarOppositeClass);
}
if (params.clickable) {
subEl.addEventListener('click', onBulletClick);
}
if (!swiper.enabled) {
subEl.classList.add(params.lockClass);
}
});
}
function destroy() {
const params = swiper.params.pagination;
if (isPaginationDisabled()) return;
let el = swiper.pagination.el;
if (el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.classList.remove(params.hiddenClass);
subEl.classList.remove(params.modifierClass + params.type);
subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
if (params.clickable) {
subEl.classList.remove(...(params.clickableClass || '').split(' '));
subEl.removeEventListener('click', onBulletClick);
}
});
}
if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
}
on('changeDirection', () => {
if (!swiper.pagination || !swiper.pagination.el) return;
const params = swiper.params.pagination;
let {
el
} = swiper.pagination;
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => {
subEl.classList.remove(params.horizontalClass, params.verticalClass);
subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
});
});
on('init', () => {
if (swiper.params.pagination.enabled === false) {
disable();
} else {
init();
render();
update();
}
});
on('activeIndexChange', () => {
if (typeof swiper.snapIndex === 'undefined') {
update();
}
});
on('snapIndexChange', () => {
update();
});
on('snapGridLengthChange', () => {
render();
update();
});
on('destroy', () => {
destroy();
});
on('enable disable', () => {
let {
el
} = swiper.pagination;
if (el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
}
});
on('lock unlock', () => {
update();
});
on('click', (_s, e) => {
const targetEl = e.target;
const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
if (isHidden === true) {
emit('paginationShow');
} else {
emit('paginationHide');
}
el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
}
});
const enable = () => {
swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
let {
el
} = swiper.pagination;
if (el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
}
init();
render();
update();
};
const disable = () => {
swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
let {
el
} = swiper.pagination;
if (el) {
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
}
destroy();
};
Object.assign(swiper.pagination, {
enable,
disable,
render,
update,
init,
destroy
});
}
 }),
 "./node_modules/swiper/modules/parallax.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Parallax; }
 });
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Parallax(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
parallax: {
enabled: false
}
});
const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
const setTransform = (el, progress) => {
const {
rtl
} = swiper;
const rtlFactor = rtl ? -1 : 1;
const p = el.getAttribute('data-swiper-parallax') || '0';
let x = el.getAttribute('data-swiper-parallax-x');
let y = el.getAttribute('data-swiper-parallax-y');
const scale = el.getAttribute('data-swiper-parallax-scale');
const opacity = el.getAttribute('data-swiper-parallax-opacity');
const rotate = el.getAttribute('data-swiper-parallax-rotate');
if (x || y) {
x = x || '0';
y = y || '0';
} else if (swiper.isHorizontal()) {
x = p;
y = '0';
} else {
y = p;
x = '0';
}
if (x.indexOf('%') >= 0) {
x = `${parseInt(x, 10) * progress * rtlFactor}%`;
} else {
x = `${x * progress * rtlFactor}px`;
}
if (y.indexOf('%') >= 0) {
y = `${parseInt(y, 10) * progress}%`;
} else {
y = `${y * progress}px`;
}
if (typeof opacity !== 'undefined' && opacity !== null) {
const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
el.style.opacity = currentOpacity;
}
let transform = `translate3d(${x}, ${y}, 0px)`;
if (typeof scale !== 'undefined' && scale !== null) {
const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
transform += ` scale(${currentScale})`;
}
if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
const currentRotate = rotate * progress * -1;
transform += ` rotate(${currentRotate}deg)`;
}
el.style.transform = transform;
};
const setTranslate = () => {
const {
el,
slides,
progress,
snapGrid,
isElement
} = swiper;
const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
if (swiper.isElement) {
elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
}
elements.forEach(subEl => {
setTransform(subEl, progress);
});
slides.forEach((slideEl, slideIndex) => {
let slideProgress = slideEl.progress;
if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
}
slideProgress = Math.min(Math.max(slideProgress, -1), 1);
slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
setTransform(subEl, slideProgress);
});
});
};
const setTransition = function (duration) {
if (duration === void 0) {
duration = swiper.params.speed;
}
const {
el,
hostEl
} = swiper;
const elements = [...el.querySelectorAll(elementsSelector)];
if (swiper.isElement) {
elements.push(...hostEl.querySelectorAll(elementsSelector));
}
elements.forEach(parallaxEl => {
let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
if (duration === 0) parallaxDuration = 0;
parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
});
};
on('beforeInit', () => {
if (!swiper.params.parallax.enabled) return;
swiper.params.watchSlidesProgress = true;
swiper.originalParams.watchSlidesProgress = true;
});
on('init', () => {
if (!swiper.params.parallax.enabled) return;
setTranslate();
});
on('setTranslate', () => {
if (!swiper.params.parallax.enabled) return;
setTranslate();
});
on('setTransition', (_swiper, duration) => {
if (!swiper.params.parallax.enabled) return;
setTransition(duration);
});
}
 }),
 "./node_modules/swiper/modules/scrollbar.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Scrollbar; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
 var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
 var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
function Scrollbar(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
let isTouched = false;
let timeout = null;
let dragTimeout = null;
let dragStartPos;
let dragSize;
let trackSize;
let divider;
extendParams({
scrollbar: {
el: null,
dragSize: 'auto',
hide: false,
draggable: false,
snapOnRelease: true,
lockClass: 'swiper-scrollbar-lock',
dragClass: 'swiper-scrollbar-drag',
scrollbarDisabledClass: 'swiper-scrollbar-disabled',
horizontalClass: `swiper-scrollbar-horizontal`,
verticalClass: `swiper-scrollbar-vertical`
}
});
swiper.scrollbar = {
el: null,
dragEl: null
};
function setTranslate() {
if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
const {
scrollbar,
rtlTranslate: rtl
} = swiper;
const {
dragEl,
el
} = scrollbar;
const params = swiper.params.scrollbar;
const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
let newSize = dragSize;
let newPos = (trackSize - dragSize) * progress;
if (rtl) {
newPos = -newPos;
if (newPos > 0) {
newSize = dragSize - newPos;
newPos = 0;
} else if (-newPos + dragSize > trackSize) {
newSize = trackSize + newPos;
}
} else if (newPos < 0) {
newSize = dragSize + newPos;
newPos = 0;
} else if (newPos + dragSize > trackSize) {
newSize = trackSize - newPos;
}
if (swiper.isHorizontal()) {
dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
dragEl.style.width = `${newSize}px`;
} else {
dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
dragEl.style.height = `${newSize}px`;
}
if (params.hide) {
clearTimeout(timeout);
el.style.opacity = 1;
timeout = setTimeout(() => {
el.style.opacity = 0;
el.style.transitionDuration = '400ms';
}, 1000);
}
}
function setTransition(duration) {
if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
}
function updateSize() {
if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
const {
scrollbar
} = swiper;
const {
dragEl,
el
} = scrollbar;
dragEl.style.width = '';
dragEl.style.height = '';
trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
if (swiper.params.scrollbar.dragSize === 'auto') {
dragSize = trackSize * divider;
} else {
dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
}
if (swiper.isHorizontal()) {
dragEl.style.width = `${dragSize}px`;
} else {
dragEl.style.height = `${dragSize}px`;
}
if (divider >= 1) {
el.style.display = 'none';
} else {
el.style.display = '';
}
if (swiper.params.scrollbar.hide) {
el.style.opacity = 0;
}
if (swiper.params.watchOverflow && swiper.enabled) {
scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
}
}
function getPointerPosition(e) {
return swiper.isHorizontal() ? e.clientX : e.clientY;
}
function setDragPosition(e) {
const {
scrollbar,
rtlTranslate: rtl
} = swiper;
const {
el
} = scrollbar;
let positionRatio;
positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
positionRatio = Math.max(Math.min(positionRatio, 1), 0);
if (rtl) {
positionRatio = 1 - positionRatio;
}
const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
swiper.updateProgress(position);
swiper.setTranslate(position);
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
}
function onDragStart(e) {
const params = swiper.params.scrollbar;
const {
scrollbar,
wrapperEl
} = swiper;
const {
el,
dragEl
} = scrollbar;
isTouched = true;
dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
e.preventDefault();
e.stopPropagation();
wrapperEl.style.transitionDuration = '100ms';
dragEl.style.transitionDuration = '100ms';
setDragPosition(e);
clearTimeout(dragTimeout);
el.style.transitionDuration = '0ms';
if (params.hide) {
el.style.opacity = 1;
}
if (swiper.params.cssMode) {
swiper.wrapperEl.style['scroll-snap-type'] = 'none';
}
emit('scrollbarDragStart', e);
}
function onDragMove(e) {
const {
scrollbar,
wrapperEl
} = swiper;
const {
el,
dragEl
} = scrollbar;
if (!isTouched) return;
if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
setDragPosition(e);
wrapperEl.style.transitionDuration = '0ms';
el.style.transitionDuration = '0ms';
dragEl.style.transitionDuration = '0ms';
emit('scrollbarDragMove', e);
}
function onDragEnd(e) {
const params = swiper.params.scrollbar;
const {
scrollbar,
wrapperEl
} = swiper;
const {
el
} = scrollbar;
if (!isTouched) return;
isTouched = false;
if (swiper.params.cssMode) {
swiper.wrapperEl.style['scroll-snap-type'] = '';
wrapperEl.style.transitionDuration = '';
}
if (params.hide) {
clearTimeout(dragTimeout);
dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
el.style.opacity = 0;
el.style.transitionDuration = '400ms';
}, 1000);
}
emit('scrollbarDragEnd', e);
if (params.snapOnRelease) {
swiper.slideToClosest();
}
}
function events(method) {
const {
scrollbar,
params
} = swiper;
const el = scrollbar.el;
if (!el) return;
const target = el;
const activeListener = params.passiveListeners ? {
passive: false,
capture: false
} : false;
const passiveListener = params.passiveListeners ? {
passive: true,
capture: false
} : false;
if (!target) return;
const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
target[eventMethod]('pointerdown', onDragStart, activeListener);
document[eventMethod]('pointermove', onDragMove, activeListener);
document[eventMethod]('pointerup', onDragEnd, passiveListener);
}
function enableDraggable() {
if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
events('on');
}
function disableDraggable() {
if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
events('off');
}
function init() {
const {
scrollbar,
el: swiperEl
} = swiper;
swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
el: 'swiper-scrollbar'
});
const params = swiper.params.scrollbar;
if (!params.el) return;
let el;
if (typeof params.el === 'string' && swiper.isElement) {
el = swiper.el.querySelector(params.el);
}
if (!el && typeof params.el === 'string') {
el = document.querySelectorAll(params.el);
if (!el.length) return;
} else if (!el) {
el = params.el;
}
if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
el = swiperEl.querySelector(params.el);
}
if (el.length > 0) el = el[0];
el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
let dragEl;
if (el) {
dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
if (!dragEl) {
dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
el.append(dragEl);
}
}
Object.assign(scrollbar, {
el,
dragEl
});
if (params.draggable) {
enableDraggable();
}
if (el) {
el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
}
}
function destroy() {
const params = swiper.params.scrollbar;
const el = swiper.scrollbar.el;
if (el) {
el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
}
disableDraggable();
}
on('changeDirection', () => {
if (!swiper.scrollbar || !swiper.scrollbar.el) return;
const params = swiper.params.scrollbar;
let {
el
} = swiper.scrollbar;
el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
el.forEach(subEl => {
subEl.classList.remove(params.horizontalClass, params.verticalClass);
subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
});
});
on('init', () => {
if (swiper.params.scrollbar.enabled === false) {
disable();
} else {
init();
updateSize();
setTranslate();
}
});
on('update resize observerUpdate lock unlock changeDirection', () => {
updateSize();
});
on('setTranslate', () => {
setTranslate();
});
on('setTransition', (_s, duration) => {
setTransition(duration);
});
on('enable disable', () => {
const {
el
} = swiper.scrollbar;
if (el) {
el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
}
});
on('destroy', () => {
destroy();
});
const enable = () => {
swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
if (swiper.scrollbar.el) {
swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
}
init();
updateSize();
setTranslate();
};
const disable = () => {
swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
if (swiper.scrollbar.el) {
swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
}
destroy();
};
Object.assign(swiper.scrollbar, {
enable,
disable,
updateSize,
setTranslate,
init,
destroy
});
}
 }),
 "./node_modules/swiper/modules/thumbs.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Thumb; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Thumb(_ref) {
let {
swiper,
extendParams,
on
} = _ref;
extendParams({
thumbs: {
swiper: null,
multipleActiveThumbs: true,
autoScrollOffset: 0,
slideThumbActiveClass: 'swiper-slide-thumb-active',
thumbsContainerClass: 'swiper-thumbs'
}
});
let initialized = false;
let swiperCreated = false;
swiper.thumbs = {
swiper: null
};
function onThumbClick() {
const thumbsSwiper = swiper.thumbs.swiper;
if (!thumbsSwiper || thumbsSwiper.destroyed) return;
const clickedIndex = thumbsSwiper.clickedIndex;
const clickedSlide = thumbsSwiper.clickedSlide;
if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
let slideToIndex;
if (thumbsSwiper.params.loop) {
slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
} else {
slideToIndex = clickedIndex;
}
if (swiper.params.loop) {
swiper.slideToLoop(slideToIndex);
} else {
swiper.slideTo(slideToIndex);
}
}
function init() {
const {
thumbs: thumbsParams
} = swiper.params;
if (initialized) return false;
initialized = true;
const SwiperClass = swiper.constructor;
if (thumbsParams.swiper instanceof SwiperClass) {
if (thumbsParams.swiper.destroyed) {
initialized = false;
return false;
}
swiper.thumbs.swiper = thumbsParams.swiper;
Object.assign(swiper.thumbs.swiper.originalParams, {
watchSlidesProgress: true,
slideToClickedSlide: false
});
Object.assign(swiper.thumbs.swiper.params, {
watchSlidesProgress: true,
slideToClickedSlide: false
});
swiper.thumbs.swiper.update();
} else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(thumbsParams.swiper)) {
const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
Object.assign(thumbsSwiperParams, {
watchSlidesProgress: true,
slideToClickedSlide: false
});
swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
swiperCreated = true;
}
swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
swiper.thumbs.swiper.on('tap', onThumbClick);
return true;
}
function update(initial) {
const thumbsSwiper = swiper.thumbs.swiper;
if (!thumbsSwiper || thumbsSwiper.destroyed) return;
const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
let thumbsToActivate = 1;
const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
thumbsToActivate = swiper.params.slidesPerView;
}
if (!swiper.params.thumbs.multipleActiveThumbs) {
thumbsToActivate = 1;
}
thumbsToActivate = Math.floor(thumbsToActivate);
thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
for (let i = 0; i < thumbsToActivate; i += 1) {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
slideEl.classList.add(thumbActiveClass);
});
}
} else {
for (let i = 0; i < thumbsToActivate; i += 1) {
if (thumbsSwiper.slides[swiper.realIndex + i]) {
thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
}
}
}
const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
const currentThumbsIndex = thumbsSwiper.activeIndex;
let newThumbsIndex;
let direction;
if (thumbsSwiper.params.loop) {
const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
} else {
newThumbsIndex = swiper.realIndex;
direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
}
if (useOffset) {
newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
}
if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
if (thumbsSwiper.params.centeredSlides) {
if (newThumbsIndex > currentThumbsIndex) {
newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
} else {
newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
}
} else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
}
}
}
on('beforeInit', () => {
const {
thumbs
} = swiper.params;
if (!thumbs || !thumbs.swiper) return;
if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const getThumbsElementAndInit = () => {
const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
if (thumbsElement && thumbsElement.swiper) {
thumbs.swiper = thumbsElement.swiper;
init();
update(true);
} else if (thumbsElement) {
const eventName = `${swiper.params.eventsPrefix}init`;
const onThumbsSwiper = e => {
thumbs.swiper = e.detail[0];
thumbsElement.removeEventListener(eventName, onThumbsSwiper);
init();
update(true);
thumbs.swiper.update();
swiper.update();
};
thumbsElement.addEventListener(eventName, onThumbsSwiper);
}
return thumbsElement;
};
const watchForThumbsToAppear = () => {
if (swiper.destroyed) return;
const thumbsElement = getThumbsElementAndInit();
if (!thumbsElement) {
requestAnimationFrame(watchForThumbsToAppear);
}
};
requestAnimationFrame(watchForThumbsToAppear);
} else {
init();
update(true);
}
});
on('slideChange update resize observerUpdate', () => {
update();
});
on('setTransition', (_s, duration) => {
const thumbsSwiper = swiper.thumbs.swiper;
if (!thumbsSwiper || thumbsSwiper.destroyed) return;
thumbsSwiper.setTransition(duration);
});
on('beforeDestroy', () => {
const thumbsSwiper = swiper.thumbs.swiper;
if (!thumbsSwiper || thumbsSwiper.destroyed) return;
if (swiperCreated) {
thumbsSwiper.destroy();
}
});
Object.assign(swiper.thumbs, {
init,
update
});
}
 }),
 "./node_modules/swiper/modules/virtual.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Virtual; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Virtual(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
extendParams({
virtual: {
enabled: false,
slides: [],
cache: true,
renderSlide: null,
renderExternal: null,
renderExternalUpdate: true,
addSlidesBefore: 0,
addSlidesAfter: 0
}
});
let cssModeTimeout;
const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
swiper.virtual = {
cache: {},
from: undefined,
to: undefined,
slides: [],
offset: 0,
slidesGrid: []
};
const tempDOM = document.createElement('div');
function renderSlide(slide, index) {
const params = swiper.params.virtual;
if (params.cache && swiper.virtual.cache[index]) {
return swiper.virtual.cache[index];
}
let slideEl;
if (params.renderSlide) {
slideEl = params.renderSlide.call(swiper, slide, index);
if (typeof slideEl === 'string') {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(tempDOM, slideEl);
slideEl = tempDOM.children[0];
}
} else if (swiper.isElement) {
slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
} else {
slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
}
slideEl.setAttribute('data-swiper-slide-index', index);
if (!params.renderSlide) {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(slideEl, slide);
}
if (params.cache) {
swiper.virtual.cache[index] = slideEl;
}
return slideEl;
}
function update(force, beforeInit, forceActiveIndex) {
const {
slidesPerView,
slidesPerGroup,
centeredSlides,
loop: isLoop,
initialSlide
} = swiper.params;
if (beforeInit && !isLoop && initialSlide > 0) {
return;
}
const {
addSlidesBefore,
addSlidesAfter
} = swiper.params.virtual;
const {
from: previousFrom,
to: previousTo,
slides,
slidesGrid: previousSlidesGrid,
offset: previousOffset
} = swiper.virtual;
if (!swiper.params.cssMode) {
swiper.updateActiveIndex();
}
const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
let offsetProp;
if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
let slidesAfter;
let slidesBefore;
if (centeredSlides) {
slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
} else {
slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
}
let from = activeIndex - slidesBefore;
let to = activeIndex + slidesAfter;
if (!isLoop) {
from = Math.max(from, 0);
to = Math.min(to, slides.length - 1);
}
let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
if (isLoop && activeIndex >= slidesBefore) {
from -= slidesBefore;
if (!centeredSlides) offset += swiper.slidesGrid[0];
} else if (isLoop && activeIndex < slidesBefore) {
from = -slidesBefore;
if (centeredSlides) offset += swiper.slidesGrid[0];
}
Object.assign(swiper.virtual, {
from,
to,
offset,
slidesGrid: swiper.slidesGrid,
slidesBefore,
slidesAfter
});
function onRendered() {
swiper.updateSlides();
swiper.updateProgress();
swiper.updateSlidesClasses();
emit('virtualUpdate');
}
if (previousFrom === from && previousTo === to && !force) {
if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
swiper.slides.forEach(slideEl => {
slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
});
}
swiper.updateProgress();
emit('virtualUpdate');
return;
}
if (swiper.params.virtual.renderExternal) {
swiper.params.virtual.renderExternal.call(swiper, {
offset,
from,
to,
slides: function getSlides() {
const slidesToRender = [];
for (let i = from; i <= to; i += 1) {
slidesToRender.push(slides[i]);
}
return slidesToRender;
}()
});
if (swiper.params.virtual.renderExternalUpdate) {
onRendered();
} else {
emit('virtualUpdate');
}
return;
}
const prependIndexes = [];
const appendIndexes = [];
const getSlideIndex = index => {
let slideIndex = index;
if (index < 0) {
slideIndex = slides.length + index;
} else if (slideIndex >= slides.length) {
slideIndex = slideIndex - slides.length;
}
return slideIndex;
};
if (force) {
swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
slideEl.remove();
});
} else {
for (let i = previousFrom; i <= previousTo; i += 1) {
if (i < from || i > to) {
const slideIndex = getSlideIndex(i);
swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
slideEl.remove();
});
}
}
}
const loopFrom = isLoop ? -slides.length : 0;
const loopTo = isLoop ? slides.length * 2 : slides.length;
for (let i = loopFrom; i < loopTo; i += 1) {
if (i >= from && i <= to) {
const slideIndex = getSlideIndex(i);
if (typeof previousTo === 'undefined' || force) {
appendIndexes.push(slideIndex);
} else {
if (i > previousTo) appendIndexes.push(slideIndex);
if (i < previousFrom) prependIndexes.push(slideIndex);
}
}
}
appendIndexes.forEach(index => {
swiper.slidesEl.append(renderSlide(slides[index], index));
});
if (isLoop) {
for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
const index = prependIndexes[i];
swiper.slidesEl.prepend(renderSlide(slides[index], index));
}
} else {
prependIndexes.sort((a, b) => b - a);
prependIndexes.forEach(index => {
swiper.slidesEl.prepend(renderSlide(slides[index], index));
});
}
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
});
onRendered();
}
function appendSlide(slides) {
if (typeof slides === 'object' && 'length' in slides) {
for (let i = 0; i < slides.length; i += 1) {
if (slides[i]) swiper.virtual.slides.push(slides[i]);
}
} else {
swiper.virtual.slides.push(slides);
}
update(true);
}
function prependSlide(slides) {
const activeIndex = swiper.activeIndex;
let newActiveIndex = activeIndex + 1;
let numberOfNewSlides = 1;
if (Array.isArray(slides)) {
for (let i = 0; i < slides.length; i += 1) {
if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
}
newActiveIndex = activeIndex + slides.length;
numberOfNewSlides = slides.length;
} else {
swiper.virtual.slides.unshift(slides);
}
if (swiper.params.virtual.cache) {
const cache = swiper.virtual.cache;
const newCache = {};
Object.keys(cache).forEach(cachedIndex => {
const cachedEl = cache[cachedIndex];
const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
if (cachedElIndex) {
cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
}
newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
});
swiper.virtual.cache = newCache;
}
update(true);
swiper.slideTo(newActiveIndex, 0);
}
function removeSlide(slidesIndexes) {
if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
let activeIndex = swiper.activeIndex;
if (Array.isArray(slidesIndexes)) {
for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
if (swiper.params.virtual.cache) {
delete swiper.virtual.cache[slidesIndexes[i]];
Object.keys(swiper.virtual.cache).forEach(key => {
if (key > slidesIndexes) {
swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
delete swiper.virtual.cache[key];
}
});
}
swiper.virtual.slides.splice(slidesIndexes[i], 1);
if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
activeIndex = Math.max(activeIndex, 0);
}
} else {
if (swiper.params.virtual.cache) {
delete swiper.virtual.cache[slidesIndexes];
Object.keys(swiper.virtual.cache).forEach(key => {
if (key > slidesIndexes) {
swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
delete swiper.virtual.cache[key];
}
});
}
swiper.virtual.slides.splice(slidesIndexes, 1);
if (slidesIndexes < activeIndex) activeIndex -= 1;
activeIndex = Math.max(activeIndex, 0);
}
update(true);
swiper.slideTo(activeIndex, 0);
}
function removeAllSlides() {
swiper.virtual.slides = [];
if (swiper.params.virtual.cache) {
swiper.virtual.cache = {};
}
update(true);
swiper.slideTo(0, 0);
}
on('beforeInit', () => {
if (!swiper.params.virtual.enabled) return;
let domSlidesAssigned;
if (typeof swiper.passedParams.virtual.slides === 'undefined') {
const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
if (slides && slides.length) {
swiper.virtual.slides = [...slides];
domSlidesAssigned = true;
slides.forEach((slideEl, slideIndex) => {
slideEl.setAttribute('data-swiper-slide-index', slideIndex);
swiper.virtual.cache[slideIndex] = slideEl;
slideEl.remove();
});
}
}
if (!domSlidesAssigned) {
swiper.virtual.slides = swiper.params.virtual.slides;
}
swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
swiper.params.watchSlidesProgress = true;
swiper.originalParams.watchSlidesProgress = true;
update(false, true);
});
on('setTranslate', () => {
if (!swiper.params.virtual.enabled) return;
if (swiper.params.cssMode && !swiper._immediateVirtual) {
clearTimeout(cssModeTimeout);
cssModeTimeout = setTimeout(() => {
update();
}, 100);
} else {
update();
}
});
on('init update resize', () => {
if (!swiper.params.virtual.enabled) return;
if (swiper.params.cssMode) {
(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
}
});
Object.assign(swiper.virtual, {
appendSlide,
prependSlide,
removeSlide,
removeAllSlides,
update
});
}
 }),
 "./node_modules/swiper/modules/zoom.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": function() { return  Zoom; }
 });
 var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function Zoom(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
extendParams({
zoom: {
enabled: false,
limitToOriginalSize: false,
maxRatio: 3,
minRatio: 1,
panOnMouseMove: false,
toggle: true,
containerClass: 'swiper-zoom-container',
zoomedSlideClass: 'swiper-slide-zoomed'
}
});
swiper.zoom = {
enabled: false
};
let currentScale = 1;
let isScaling = false;
let isPanningWithMouse = false;
let mousePanStart = {
x: 0,
y: 0
};
const mousePanSensitivity = -3; // Negative to invert pan direction
let fakeGestureTouched;
let fakeGestureMoved;
const evCache = [];
const gesture = {
originX: 0,
originY: 0,
slideEl: undefined,
slideWidth: undefined,
slideHeight: undefined,
imageEl: undefined,
imageWrapEl: undefined,
maxRatio: 3
};
const image = {
isTouched: undefined,
isMoved: undefined,
currentX: undefined,
currentY: undefined,
minX: undefined,
minY: undefined,
maxX: undefined,
maxY: undefined,
width: undefined,
height: undefined,
startX: undefined,
startY: undefined,
touchesStart: {},
touchesCurrent: {}
};
const velocity = {
x: undefined,
y: undefined,
prevPositionX: undefined,
prevPositionY: undefined,
prevTime: undefined
};
let scale = 1;
Object.defineProperty(swiper.zoom, 'scale', {
get() {
return scale;
},
set(value) {
if (scale !== value) {
const imageEl = gesture.imageEl;
const slideEl = gesture.slideEl;
emit('zoomChange', value, imageEl, slideEl);
}
scale = value;
}
});
function getDistanceBetweenTouches() {
if (evCache.length < 2) return 1;
const x1 = evCache[0].pageX;
const y1 = evCache[0].pageY;
const x2 = evCache[1].pageX;
const y2 = evCache[1].pageY;
const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
return distance;
}
function getMaxRatio() {
const params = swiper.params.zoom;
const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
return Math.min(imageMaxRatio, maxRatio);
}
return maxRatio;
}
function getScaleOrigin() {
if (evCache.length < 2) return {
x: null,
y: null
};
const box = gesture.imageEl.getBoundingClientRect();
return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
}
function getSlideSelector() {
return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
}
function eventWithinSlide(e) {
const slideSelector = getSlideSelector();
if (e.target.matches(slideSelector)) return true;
if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
return false;
}
function eventWithinZoomContainer(e) {
const selector = `.${swiper.params.zoom.containerClass}`;
if (e.target.matches(selector)) return true;
if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
return false;
}
function onGestureStart(e) {
if (e.pointerType === 'mouse') {
evCache.splice(0, evCache.length);
}
if (!eventWithinSlide(e)) return;
const params = swiper.params.zoom;
fakeGestureTouched = false;
fakeGestureMoved = false;
evCache.push(e);
if (evCache.length < 2) {
return;
}
fakeGestureTouched = true;
gesture.scaleStart = getDistanceBetweenTouches();
if (!gesture.slideEl) {
gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
if (imageEl) {
imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
}
gesture.imageEl = imageEl;
if (imageEl) {
gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
} else {
gesture.imageWrapEl = undefined;
}
if (!gesture.imageWrapEl) {
gesture.imageEl = undefined;
return;
}
gesture.maxRatio = getMaxRatio();
}
if (gesture.imageEl) {
const [originX, originY] = getScaleOrigin();
gesture.originX = originX;
gesture.originY = originY;
gesture.imageEl.style.transitionDuration = '0ms';
}
isScaling = true;
}
function onGestureChange(e) {
if (!eventWithinSlide(e)) return;
const params = swiper.params.zoom;
const zoom = swiper.zoom;
const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
if (pointerIndex >= 0) evCache[pointerIndex] = e;
if (evCache.length < 2) {
return;
}
fakeGestureMoved = true;
gesture.scaleMove = getDistanceBetweenTouches();
if (!gesture.imageEl) {
return;
}
zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
if (zoom.scale > gesture.maxRatio) {
zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
}
if (zoom.scale < params.minRatio) {
zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
}
gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
}
function onGestureEnd(e) {
if (!eventWithinSlide(e)) return;
if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
const params = swiper.params.zoom;
const zoom = swiper.zoom;
const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
if (!fakeGestureTouched || !fakeGestureMoved) {
return;
}
fakeGestureTouched = false;
fakeGestureMoved = false;
if (!gesture.imageEl) return;
zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
currentScale = zoom.scale;
isScaling = false;
if (zoom.scale > 1 && gesture.slideEl) {
gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
} else if (zoom.scale <= 1 && gesture.slideEl) {
gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
}
if (zoom.scale === 1) {
gesture.originX = 0;
gesture.originY = 0;
gesture.slideEl = undefined;
}
}
let allowTouchMoveTimeout;
function allowTouchMove() {
swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
}
function preventTouchMove() {
clearTimeout(allowTouchMoveTimeout);
swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
allowTouchMoveTimeout = setTimeout(() => {
if (swiper.destroyed) return;
allowTouchMove();
});
}
function onTouchStart(e) {
const device = swiper.device;
if (!gesture.imageEl) return;
if (image.isTouched) return;
if (device.android && e.cancelable) e.preventDefault();
image.isTouched = true;
const event = evCache.length > 0 ? evCache[0] : e;
image.touchesStart.x = event.pageX;
image.touchesStart.y = event.pageY;
}
function onTouchMove(e) {
const isMouseEvent = e.pointerType === 'mouse';
const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
return;
}
const zoom = swiper.zoom;
if (!gesture.imageEl) {
return;
}
if (!image.isTouched || !gesture.slideEl) {
if (isMousePan) onMouseMove(e);
return;
}
if (isMousePan) {
onMouseMove(e);
return;
}
if (!image.isMoved) {
image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'x') || 0;
image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'y') || 0;
gesture.slideWidth = gesture.slideEl.offsetWidth;
gesture.slideHeight = gesture.slideEl.offsetHeight;
gesture.imageWrapEl.style.transitionDuration = '0ms';
}
const scaledWidth = image.width * zoom.scale;
const scaledHeight = image.height * zoom.scale;
image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
image.maxX = -image.minX;
image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
image.maxY = -image.minY;
image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
if (touchesDiff > 5) {
swiper.allowClick = false;
}
if (!image.isMoved && !isScaling) {
if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
image.isTouched = false;
allowTouchMove();
return;
}
if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
image.isTouched = false;
allowTouchMove();
return;
}
}
if (e.cancelable) {
e.preventDefault();
}
e.stopPropagation();
preventTouchMove();
image.isMoved = true;
const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
const {
originX,
originY
} = gesture;
image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
if (image.currentX < image.minX) {
image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
}
if (image.currentX > image.maxX) {
image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
}
if (image.currentY < image.minY) {
image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
}
if (image.currentY > image.maxY) {
image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
}
if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
if (!velocity.prevTime) velocity.prevTime = Date.now();
velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
velocity.prevPositionX = image.touchesCurrent.x;
velocity.prevPositionY = image.touchesCurrent.y;
velocity.prevTime = Date.now();
gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
}
function onTouchEnd() {
const zoom = swiper.zoom;
evCache.length = 0;
if (!gesture.imageEl) return;
if (!image.isTouched || !image.isMoved) {
image.isTouched = false;
image.isMoved = false;
return;
}
image.isTouched = false;
image.isMoved = false;
let momentumDurationX = 300;
let momentumDurationY = 300;
const momentumDistanceX = velocity.x * momentumDurationX;
const newPositionX = image.currentX + momentumDistanceX;
const momentumDistanceY = velocity.y * momentumDurationY;
const newPositionY = image.currentY + momentumDistanceY;
if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
image.currentX = newPositionX;
image.currentY = newPositionY;
const scaledWidth = image.width * zoom.scale;
const scaledHeight = image.height * zoom.scale;
image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
image.maxX = -image.minX;
image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
image.maxY = -image.minY;
image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
}
function onTransitionEnd() {
const zoom = swiper.zoom;
if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
if (gesture.imageEl) {
gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
}
if (gesture.imageWrapEl) {
gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
}
gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
zoom.scale = 1;
currentScale = 1;
gesture.slideEl = undefined;
gesture.imageEl = undefined;
gesture.imageWrapEl = undefined;
gesture.originX = 0;
gesture.originY = 0;
}
}
function onMouseMove(e) {
if (currentScale <= 1 || !gesture.imageWrapEl) return;
if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
const matrix = new window.DOMMatrix(currentTransform);
if (!isPanningWithMouse) {
isPanningWithMouse = true;
mousePanStart.x = e.clientX;
mousePanStart.y = e.clientY;
image.startX = matrix.e;
image.startY = matrix.f;
image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
gesture.slideWidth = gesture.slideEl.offsetWidth;
gesture.slideHeight = gesture.slideEl.offsetHeight;
return;
}
const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
const scaledWidth = image.width * currentScale;
const scaledHeight = image.height * currentScale;
const slideWidth = gesture.slideWidth;
const slideHeight = gesture.slideHeight;
const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
const maxX = -minX;
const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
const maxY = -minY;
const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
gesture.imageWrapEl.style.transitionDuration = '0ms';
gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
mousePanStart.x = e.clientX;
mousePanStart.y = e.clientY;
image.startX = newX;
image.startY = newY;
image.currentX = newX;
image.currentY = newY;
}
function zoomIn(e) {
const zoom = swiper.zoom;
const params = swiper.params.zoom;
if (!gesture.slideEl) {
if (e && e.target) {
gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
}
if (!gesture.slideEl) {
if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
} else {
gesture.slideEl = swiper.slides[swiper.activeIndex];
}
}
let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
if (imageEl) {
imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
}
gesture.imageEl = imageEl;
if (imageEl) {
gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
} else {
gesture.imageWrapEl = undefined;
}
}
if (!gesture.imageEl || !gesture.imageWrapEl) return;
if (swiper.params.cssMode) {
swiper.wrapperEl.style.overflow = 'hidden';
swiper.wrapperEl.style.touchAction = 'none';
}
gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
let touchX;
let touchY;
let offsetX;
let offsetY;
let diffX;
let diffY;
let translateX;
let translateY;
let imageWidth;
let imageHeight;
let scaledWidth;
let scaledHeight;
let translateMinX;
let translateMinY;
let translateMaxX;
let translateMaxY;
let slideWidth;
let slideHeight;
if (typeof image.touchesStart.x === 'undefined' && e) {
touchX = e.pageX;
touchY = e.pageY;
} else {
touchX = image.touchesStart.x;
touchY = image.touchesStart.y;
}
const prevScale = currentScale;
const forceZoomRatio = typeof e === 'number' ? e : null;
if (currentScale === 1 && forceZoomRatio) {
touchX = undefined;
touchY = undefined;
image.touchesStart.x = undefined;
image.touchesStart.y = undefined;
}
const maxRatio = getMaxRatio();
zoom.scale = forceZoomRatio || maxRatio;
currentScale = forceZoomRatio || maxRatio;
if (e && !(currentScale === 1 && forceZoomRatio)) {
slideWidth = gesture.slideEl.offsetWidth;
slideHeight = gesture.slideEl.offsetHeight;
offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).left + window.scrollX;
offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).top + window.scrollY;
diffX = offsetX + slideWidth / 2 - touchX;
diffY = offsetY + slideHeight / 2 - touchY;
imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
scaledWidth = imageWidth * zoom.scale;
scaledHeight = imageHeight * zoom.scale;
translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
translateMaxX = -translateMinX;
translateMaxY = -translateMinY;
if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
translateX = image.currentX * zoom.scale / prevScale;
translateY = image.currentY * zoom.scale / prevScale;
} else {
translateX = diffX * zoom.scale;
translateY = diffY * zoom.scale;
}
if (translateX < translateMinX) {
translateX = translateMinX;
}
if (translateX > translateMaxX) {
translateX = translateMaxX;
}
if (translateY < translateMinY) {
translateY = translateMinY;
}
if (translateY > translateMaxY) {
translateY = translateMaxY;
}
} else {
translateX = 0;
translateY = 0;
}
if (forceZoomRatio && zoom.scale === 1) {
gesture.originX = 0;
gesture.originY = 0;
}
image.currentX = translateX;
image.currentY = translateY;
gesture.imageWrapEl.style.transitionDuration = '300ms';
gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
gesture.imageEl.style.transitionDuration = '300ms';
gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
}
function zoomOut() {
const zoom = swiper.zoom;
const params = swiper.params.zoom;
if (!gesture.slideEl) {
if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
} else {
gesture.slideEl = swiper.slides[swiper.activeIndex];
}
let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
if (imageEl) {
imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
}
gesture.imageEl = imageEl;
if (imageEl) {
gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
} else {
gesture.imageWrapEl = undefined;
}
}
if (!gesture.imageEl || !gesture.imageWrapEl) return;
if (swiper.params.cssMode) {
swiper.wrapperEl.style.overflow = '';
swiper.wrapperEl.style.touchAction = '';
}
zoom.scale = 1;
currentScale = 1;
image.currentX = undefined;
image.currentY = undefined;
image.touchesStart.x = undefined;
image.touchesStart.y = undefined;
gesture.imageWrapEl.style.transitionDuration = '300ms';
gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
gesture.imageEl.style.transitionDuration = '300ms';
gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
gesture.slideEl = undefined;
gesture.originX = 0;
gesture.originY = 0;
if (swiper.params.zoom.panOnMouseMove) {
mousePanStart = {
x: 0,
y: 0
};
if (isPanningWithMouse) {
isPanningWithMouse = false;
image.startX = 0;
image.startY = 0;
}
}
}
function zoomToggle(e) {
const zoom = swiper.zoom;
if (zoom.scale && zoom.scale !== 1) {
zoomOut();
} else {
zoomIn(e);
}
}
function getListeners() {
const passiveListener = swiper.params.passiveListeners ? {
passive: true,
capture: false
} : false;
const activeListenerWithCapture = swiper.params.passiveListeners ? {
passive: false,
capture: true
} : true;
return {
passiveListener,
activeListenerWithCapture
};
}
function enable() {
const zoom = swiper.zoom;
if (zoom.enabled) return;
zoom.enabled = true;
const {
passiveListener,
activeListenerWithCapture
} = getListeners();
swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
});
swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
}
function disable() {
const zoom = swiper.zoom;
if (!zoom.enabled) return;
zoom.enabled = false;
const {
passiveListener,
activeListenerWithCapture
} = getListeners();
swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
});
swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
}
on('init', () => {
if (swiper.params.zoom.enabled) {
enable();
}
});
on('destroy', () => {
disable();
});
on('touchStart', (_s, e) => {
if (!swiper.zoom.enabled) return;
onTouchStart(e);
});
on('touchEnd', (_s, e) => {
if (!swiper.zoom.enabled) return;
onTouchEnd();
});
on('doubleTap', (_s, e) => {
if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
zoomToggle(e);
}
});
on('transitionEnd', () => {
if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
onTransitionEnd();
}
});
on('slideChange', () => {
if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
onTransitionEnd();
}
});
Object.assign(swiper.zoom, {
enable,
disable,
in: zoomIn,
out: zoomOut,
toggle: zoomToggle
});
}
 }),
 "./node_modules/swiper/shared/classes-to-selector.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   c: function() { return  classesToSelector; }
 });
function classesToSelector(classes) {
if (classes === void 0) {
classes = '';
}
return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line
.replace(/ /g, '.')}`;
}
 }),
 "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   c: function() { return  createElementIfNotDefined; }
 });
 var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
if (swiper.params.createElements) {
Object.keys(checkProps).forEach(key => {
if (!params[key] && params.auto === true) {
let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
if (!element) {
element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
element.className = checkProps[key];
swiper.el.append(element);
}
params[key] = element;
originalParams[key] = element;
}
});
}
return params;
}
 }),
 "./node_modules/swiper/shared/create-shadow.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   c: function() { return  createShadow; }
 });
 var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function createShadow(suffix, slideEl, side) {
const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
if (!shadowEl) {
shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
shadowContainer.append(shadowEl);
}
return shadowEl;
}
 }),
 "./node_modules/swiper/shared/effect-init.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   e: function() { return  effectInit; }
 });
function effectInit(params) {
const {
effect,
swiper,
on,
setTranslate,
setTransition,
overwriteParams,
perspective,
recreateShadows,
getEffectParams
} = params;
on('beforeInit', () => {
if (swiper.params.effect !== effect) return;
swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
if (perspective && perspective()) {
swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
}
const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
Object.assign(swiper.params, overwriteParamsResult);
Object.assign(swiper.originalParams, overwriteParamsResult);
});
on('setTranslate _virtualUpdated', () => {
if (swiper.params.effect !== effect) return;
setTranslate();
});
on('setTransition', (_s, duration) => {
if (swiper.params.effect !== effect) return;
setTransition(duration);
});
on('transitionEnd', () => {
if (swiper.params.effect !== effect) return;
if (recreateShadows) {
if (!getEffectParams || !getEffectParams().slideShadows) return;
swiper.slides.forEach(slideEl => {
slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
});
recreateShadows();
}
});
let requireUpdateOnVirtual;
on('virtualUpdate', () => {
if (swiper.params.effect !== effect) return;
if (!swiper.slides.length) {
requireUpdateOnVirtual = true;
}
requestAnimationFrame(() => {
if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
setTranslate();
requireUpdateOnVirtual = false;
}
});
});
}
 }),
 "./node_modules/swiper/shared/effect-target.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   e: function() { return  effectTarget; }
 });
 var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function effectTarget(effectParams, slideEl) {
const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
if (transformEl !== slideEl) {
transformEl.style.backfaceVisibility = 'hidden';
transformEl.style['-webkit-backface-visibility'] = 'hidden';
}
return transformEl;
}
 }),
 "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   e: function() { return  effectVirtualTransitionEnd; }
 });
 var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
function effectVirtualTransitionEnd(_ref) {
let {
swiper,
duration,
transformElements,
allSlides
} = _ref;
const {
activeIndex
} = swiper;
const getSlide = el => {
if (!el.parentElement) {
const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
return slide;
}
return el.parentElement;
};
if (swiper.params.virtualTranslate && duration !== 0) {
let eventTriggered = false;
let transitionEndTarget;
if (allSlides) {
transitionEndTarget = transformElements;
} else {
transitionEndTarget = transformElements.filter(transformEl => {
const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
return swiper.getSlideIndex(el) === activeIndex;
});
}
transitionEndTarget.forEach(el => {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, () => {
if (eventTriggered) return;
if (!swiper || swiper.destroyed) return;
eventTriggered = true;
swiper.animating = false;
const evt = new window.CustomEvent('transitionend', {
bubbles: true,
cancelable: true
});
swiper.wrapperEl.dispatchEvent(evt);
});
});
}
}
 }),
 "./node_modules/swiper/shared/ssr-window.esm.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   a: function() { return  getWindow; },
   g: function() { return  getDocument; }
 });
function isObject(obj) {
return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
if (target === void 0) {
target = {};
}
if (src === void 0) {
src = {};
}
const noExtend = ['__proto__', 'constructor', 'prototype'];
Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
extend(target[key], src[key]);
}
});
}
const ssrDocument = {
body: {},
addEventListener() {},
removeEventListener() {},
activeElement: {
blur() {},
nodeName: ''
},
querySelector() {
return null;
},
querySelectorAll() {
return [];
},
getElementById() {
return null;
},
createEvent() {
return {
initEvent() {}
};
},
createElement() {
return {
children: [],
childNodes: [],
style: {},
setAttribute() {},
getElementsByTagName() {
return [];
}
};
},
createElementNS() {
return {};
},
importNode() {
return null;
},
location: {
hash: '',
host: '',
hostname: '',
href: '',
origin: '',
pathname: '',
protocol: '',
search: ''
}
};
function getDocument() {
const doc = typeof document !== 'undefined' ? document : {};
extend(doc, ssrDocument);
return doc;
}
const ssrWindow = {
document: ssrDocument,
navigator: {
userAgent: ''
},
location: {
hash: '',
host: '',
hostname: '',
href: '',
origin: '',
pathname: '',
protocol: '',
search: ''
},
history: {
replaceState() {},
pushState() {},
go() {},
back() {}
},
CustomEvent: function CustomEvent() {
return this;
},
addEventListener() {},
removeEventListener() {},
getComputedStyle() {
return {
getPropertyValue() {
return '';
}
};
},
Image() {},
Date() {},
screen: {},
setTimeout() {},
clearTimeout() {},
matchMedia() {
return {};
},
requestAnimationFrame(callback) {
if (typeof setTimeout === 'undefined') {
callback();
return null;
}
return setTimeout(callback, 0);
},
cancelAnimationFrame(id) {
if (typeof setTimeout === 'undefined') {
return;
}
clearTimeout(id);
}
};
function getWindow() {
const win = typeof window !== 'undefined' ? window : {};
extend(win, ssrWindow);
return win;
}
 }),
 "./node_modules/swiper/shared/swiper-core.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   S: function() { return  Swiper; },
   d: function() { return  defaults; }
 });
 var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
 var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
let support;
function calcSupport() {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
return {
smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
};
}
function getSupport() {
if (!support) {
support = calcSupport();
}
return support;
}
let deviceCached;
function calcDevice(_temp) {
let {
userAgent
} = _temp === void 0 ? {} : _temp;
const support = getSupport();
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const platform = window.navigator.platform;
const ua = userAgent || window.navigator.userAgent;
const device = {
ios: false,
android: false
};
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
const windows = platform === 'Win32';
let macos = platform === 'MacIntel';
const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
ipad = ua.match(/(Version)\/([\d.]+)/);
if (!ipad) ipad = [0, 1, '13_0_0'];
macos = false;
}
if (android && !windows) {
device.os = 'android';
device.android = true;
}
if (ipad || iphone || ipod) {
device.os = 'ios';
device.ios = true;
}
return device;
}
function getDevice(overrides) {
if (overrides === void 0) {
overrides = {};
}
if (!deviceCached) {
deviceCached = calcDevice(overrides);
}
return deviceCached;
}
let browser;
function calcBrowser() {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const device = getDevice();
let needPerspectiveFix = false;
function isSafari() {
const ua = window.navigator.userAgent.toLowerCase();
return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
}
if (isSafari()) {
const ua = String(window.navigator.userAgent);
if (ua.includes('Version/')) {
const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
needPerspectiveFix = major < 16 || major === 16 && minor < 2;
}
}
const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
const isSafariBrowser = isSafari();
const need3dFix = isSafariBrowser || isWebView && device.ios;
return {
isSafari: needPerspectiveFix || isSafariBrowser,
needPerspectiveFix,
need3dFix,
isWebView
};
}
function getBrowser() {
if (!browser) {
browser = calcBrowser();
}
return browser;
}
function Resize(_ref) {
let {
swiper,
on,
emit
} = _ref;
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
let observer = null;
let animationFrame = null;
const resizeHandler = () => {
if (!swiper || swiper.destroyed || !swiper.initialized) return;
emit('beforeResize');
emit('resize');
};
const createObserver = () => {
if (!swiper || swiper.destroyed || !swiper.initialized) return;
observer = new ResizeObserver(entries => {
animationFrame = window.requestAnimationFrame(() => {
const {
width,
height
} = swiper;
let newWidth = width;
let newHeight = height;
entries.forEach(_ref2 => {
let {
contentBoxSize,
contentRect,
target
} = _ref2;
if (target && target !== swiper.el) return;
newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
});
if (newWidth !== width || newHeight !== height) {
resizeHandler();
}
});
});
observer.observe(swiper.el);
};
const removeObserver = () => {
if (animationFrame) {
window.cancelAnimationFrame(animationFrame);
}
if (observer && observer.unobserve && swiper.el) {
observer.unobserve(swiper.el);
observer = null;
}
};
const orientationChangeHandler = () => {
if (!swiper || swiper.destroyed || !swiper.initialized) return;
emit('orientationchange');
};
on('init', () => {
if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
createObserver();
return;
}
window.addEventListener('resize', resizeHandler);
window.addEventListener('orientationchange', orientationChangeHandler);
});
on('destroy', () => {
removeObserver();
window.removeEventListener('resize', resizeHandler);
window.removeEventListener('orientationchange', orientationChangeHandler);
});
}
function Observer(_ref) {
let {
swiper,
extendParams,
on,
emit
} = _ref;
const observers = [];
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const attach = function (target, options) {
if (options === void 0) {
options = {};
}
const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
const observer = new ObserverFunc(mutations => {
if (swiper.__preventObserver__) return;
if (mutations.length === 1) {
emit('observerUpdate', mutations[0]);
return;
}
const observerUpdate = function observerUpdate() {
emit('observerUpdate', mutations[0]);
};
if (window.requestAnimationFrame) {
window.requestAnimationFrame(observerUpdate);
} else {
window.setTimeout(observerUpdate, 0);
}
});
observer.observe(target, {
attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
characterData: typeof options.characterData === 'undefined' ? true : options.characterData
});
observers.push(observer);
};
const init = () => {
if (!swiper.params.observer) return;
if (swiper.params.observeParents) {
const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.hostEl);
for (let i = 0; i < containerParents.length; i += 1) {
attach(containerParents[i]);
}
}
attach(swiper.hostEl, {
childList: swiper.params.observeSlideChildren
});
attach(swiper.wrapperEl, {
attributes: false
});
};
const destroy = () => {
observers.forEach(observer => {
observer.disconnect();
});
observers.splice(0, observers.length);
};
extendParams({
observer: false,
observeParents: false,
observeSlideChildren: false
});
on('init', init);
on('destroy', destroy);
}
var eventsEmitter = {
on(events, handler, priority) {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (typeof handler !== 'function') return self;
const method = priority ? 'unshift' : 'push';
events.split(' ').forEach(event => {
if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
self.eventsListeners[event][method](handler);
});
return self;
},
once(events, handler, priority) {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (typeof handler !== 'function') return self;
function onceHandler() {
self.off(events, onceHandler);
if (onceHandler.__emitterProxy) {
delete onceHandler.__emitterProxy;
}
for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
args[_key] = arguments[_key];
}
handler.apply(self, args);
}
onceHandler.__emitterProxy = handler;
return self.on(events, onceHandler, priority);
},
onAny(handler, priority) {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (typeof handler !== 'function') return self;
const method = priority ? 'unshift' : 'push';
if (self.eventsAnyListeners.indexOf(handler) < 0) {
self.eventsAnyListeners[method](handler);
}
return self;
},
offAny(handler) {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (!self.eventsAnyListeners) return self;
const index = self.eventsAnyListeners.indexOf(handler);
if (index >= 0) {
self.eventsAnyListeners.splice(index, 1);
}
return self;
},
off(events, handler) {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (!self.eventsListeners) return self;
events.split(' ').forEach(event => {
if (typeof handler === 'undefined') {
self.eventsListeners[event] = [];
} else if (self.eventsListeners[event]) {
self.eventsListeners[event].forEach((eventHandler, index) => {
if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
self.eventsListeners[event].splice(index, 1);
}
});
}
});
return self;
},
emit() {
const self = this;
if (!self.eventsListeners || self.destroyed) return self;
if (!self.eventsListeners) return self;
let events;
let data;
let context;
for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
args[_key2] = arguments[_key2];
}
if (typeof args[0] === 'string' || Array.isArray(args[0])) {
events = args[0];
data = args.slice(1, args.length);
context = self;
} else {
events = args[0].events;
data = args[0].data;
context = args[0].context || self;
}
data.unshift(context);
const eventsArray = Array.isArray(events) ? events : events.split(' ');
eventsArray.forEach(event => {
if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
self.eventsAnyListeners.forEach(eventHandler => {
eventHandler.apply(context, [event, ...data]);
});
}
if (self.eventsListeners && self.eventsListeners[event]) {
self.eventsListeners[event].forEach(eventHandler => {
eventHandler.apply(context, data);
});
}
});
return self;
}
};
function updateSize() {
const swiper = this;
let width;
let height;
const el = swiper.el;
if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
width = swiper.params.width;
} else {
width = el.clientWidth;
}
if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
height = swiper.params.height;
} else {
height = el.clientHeight;
}
if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
return;
}
width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-right') || 0, 10);
height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-bottom') || 0, 10);
if (Number.isNaN(width)) width = 0;
if (Number.isNaN(height)) height = 0;
Object.assign(swiper, {
width,
height,
size: swiper.isHorizontal() ? width : height
});
}
function updateSlides() {
const swiper = this;
function getDirectionPropertyValue(node, label) {
return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
}
const params = swiper.params;
const {
wrapperEl,
slidesEl,
size: swiperSize,
rtlTranslate: rtl,
wrongRTL
} = swiper;
const isVirtual = swiper.virtual && params.virtual.enabled;
const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
let snapGrid = [];
const slidesGrid = [];
const slidesSizesGrid = [];
let offsetBefore = params.slidesOffsetBefore;
if (typeof offsetBefore === 'function') {
offsetBefore = params.slidesOffsetBefore.call(swiper);
}
let offsetAfter = params.slidesOffsetAfter;
if (typeof offsetAfter === 'function') {
offsetAfter = params.slidesOffsetAfter.call(swiper);
}
const previousSnapGridLength = swiper.snapGrid.length;
const previousSlidesGridLength = swiper.slidesGrid.length;
let spaceBetween = params.spaceBetween;
let slidePosition = -offsetBefore;
let prevSlideSize = 0;
let index = 0;
if (typeof swiperSize === 'undefined') {
return;
}
if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
} else if (typeof spaceBetween === 'string') {
spaceBetween = parseFloat(spaceBetween);
}
swiper.virtualSize = -spaceBetween;
slides.forEach(slideEl => {
if (rtl) {
slideEl.style.marginLeft = '';
} else {
slideEl.style.marginRight = '';
}
slideEl.style.marginBottom = '';
slideEl.style.marginTop = '';
});
if (params.centeredSlides && params.cssMode) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', '');
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', '');
}
const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
if (gridEnabled) {
swiper.grid.initSlides(slides);
} else if (swiper.grid) {
swiper.grid.unsetSlides();
}
let slideSize;
const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
return typeof params.breakpoints[key].slidesPerView !== 'undefined';
}).length > 0;
for (let i = 0; i < slidesLength; i += 1) {
slideSize = 0;
let slide;
if (slides[i]) slide = slides[i];
if (gridEnabled) {
swiper.grid.updateSlide(i, slide, slides);
}
if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(slide, 'display') === 'none') continue; // eslint-disable-line
if (params.slidesPerView === 'auto') {
if (shouldResetSlideSize) {
slides[i].style[swiper.getDirectionLabel('width')] = ``;
}
const slideStyles = getComputedStyle(slide);
const currentTransform = slide.style.transform;
const currentWebKitTransform = slide.style.webkitTransform;
if (currentTransform) {
slide.style.transform = 'none';
}
if (currentWebKitTransform) {
slide.style.webkitTransform = 'none';
}
if (params.roundLengths) {
slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'height', true);
} else {
const width = getDirectionPropertyValue(slideStyles, 'width');
const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
const boxSizing = slideStyles.getPropertyValue('box-sizing');
if (boxSizing && boxSizing === 'border-box') {
slideSize = width + marginLeft + marginRight;
} else {
const {
clientWidth,
offsetWidth
} = slide;
slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
}
}
if (currentTransform) {
slide.style.transform = currentTransform;
}
if (currentWebKitTransform) {
slide.style.webkitTransform = currentWebKitTransform;
}
if (params.roundLengths) slideSize = Math.floor(slideSize);
} else {
slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
if (params.roundLengths) slideSize = Math.floor(slideSize);
if (slides[i]) {
slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
}
}
if (slides[i]) {
slides[i].swiperSlideSize = slideSize;
}
slidesSizesGrid.push(slideSize);
if (params.centeredSlides) {
slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
if (params.roundLengths) slidePosition = Math.floor(slidePosition);
if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
slidesGrid.push(slidePosition);
} else {
if (params.roundLengths) slidePosition = Math.floor(slidePosition);
if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
slidesGrid.push(slidePosition);
slidePosition = slidePosition + slideSize + spaceBetween;
}
swiper.virtualSize += slideSize + spaceBetween;
prevSlideSize = slideSize;
index += 1;
}
swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
}
if (params.setWrapperSize) {
wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
}
if (gridEnabled) {
swiper.grid.updateWrapperSize(slideSize, snapGrid);
}
if (!params.centeredSlides) {
const newSlidesGrid = [];
for (let i = 0; i < snapGrid.length; i += 1) {
let slidesGridItem = snapGrid[i];
if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
newSlidesGrid.push(slidesGridItem);
}
}
snapGrid = newSlidesGrid;
if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
snapGrid.push(swiper.virtualSize - swiperSize);
}
}
if (isVirtual && params.loop) {
const size = slidesSizesGrid[0] + spaceBetween;
if (params.slidesPerGroup > 1) {
const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
const groupSize = size * params.slidesPerGroup;
for (let i = 0; i < groups; i += 1) {
snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
}
}
for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
if (params.slidesPerGroup === 1) {
snapGrid.push(snapGrid[snapGrid.length - 1] + size);
}
slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
swiper.virtualSize += size;
}
}
if (snapGrid.length === 0) snapGrid = [0];
if (spaceBetween !== 0) {
const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
slides.filter((_, slideIndex) => {
if (!params.cssMode || params.loop) return true;
if (slideIndex === slides.length - 1) {
return false;
}
return true;
}).forEach(slideEl => {
slideEl.style[key] = `${spaceBetween}px`;
});
}
if (params.centeredSlides && params.centeredSlidesBounds) {
let allSlidesSize = 0;
slidesSizesGrid.forEach(slideSizeValue => {
allSlidesSize += slideSizeValue + (spaceBetween || 0);
});
allSlidesSize -= spaceBetween;
const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
snapGrid = snapGrid.map(snap => {
if (snap <= 0) return -offsetBefore;
if (snap > maxSnap) return maxSnap + offsetAfter;
return snap;
});
}
if (params.centerInsufficientSlides) {
let allSlidesSize = 0;
slidesSizesGrid.forEach(slideSizeValue => {
allSlidesSize += slideSizeValue + (spaceBetween || 0);
});
allSlidesSize -= spaceBetween;
const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
if (allSlidesSize + offsetSize < swiperSize) {
const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
snapGrid.forEach((snap, snapIndex) => {
snapGrid[snapIndex] = snap - allSlidesOffset;
});
slidesGrid.forEach((snap, snapIndex) => {
slidesGrid[snapIndex] = snap + allSlidesOffset;
});
}
}
Object.assign(swiper, {
slides,
snapGrid,
slidesGrid,
slidesSizesGrid
});
if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
const addToSnapGrid = -swiper.snapGrid[0];
const addToSlidesGrid = -swiper.slidesGrid[0];
swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
}
if (slidesLength !== previousSlidesLength) {
swiper.emit('slidesLengthChange');
}
if (snapGrid.length !== previousSnapGridLength) {
if (swiper.params.watchOverflow) swiper.checkOverflow();
swiper.emit('snapGridLengthChange');
}
if (slidesGrid.length !== previousSlidesGridLength) {
swiper.emit('slidesGridLengthChange');
}
if (params.watchSlidesProgress) {
swiper.updateSlidesOffset();
}
swiper.emit('slidesUpdated');
if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
if (slidesLength <= params.maxBackfaceHiddenSlides) {
if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
} else if (hasClassBackfaceClassAdded) {
swiper.el.classList.remove(backFaceHiddenClass);
}
}
}
function updateAutoHeight(speed) {
const swiper = this;
const activeSlides = [];
const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
let newHeight = 0;
let i;
if (typeof speed === 'number') {
swiper.setTransition(speed);
} else if (speed === true) {
swiper.setTransition(swiper.params.speed);
}
const getSlideByIndex = index => {
if (isVirtual) {
return swiper.slides[swiper.getSlideIndexByData(index)];
}
return swiper.slides[index];
};
if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
if (swiper.params.centeredSlides) {
(swiper.visibleSlides || []).forEach(slide => {
activeSlides.push(slide);
});
} else {
for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
const index = swiper.activeIndex + i;
if (index > swiper.slides.length && !isVirtual) break;
activeSlides.push(getSlideByIndex(index));
}
}
} else {
activeSlides.push(getSlideByIndex(swiper.activeIndex));
}
for (i = 0; i < activeSlides.length; i += 1) {
if (typeof activeSlides[i] !== 'undefined') {
const height = activeSlides[i].offsetHeight;
newHeight = height > newHeight ? height : newHeight;
}
}
if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
const swiper = this;
const slides = swiper.slides;
const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
for (let i = 0; i < slides.length; i += 1) {
slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
}
const toggleSlideClasses$1 = (slideEl, condition, className) => {
if (condition && !slideEl.classList.contains(className)) {
slideEl.classList.add(className);
} else if (!condition && slideEl.classList.contains(className)) {
slideEl.classList.remove(className);
}
};
function updateSlidesProgress(translate) {
if (translate === void 0) {
translate = this && this.translate || 0;
}
const swiper = this;
const params = swiper.params;
const {
slides,
rtlTranslate: rtl,
snapGrid
} = swiper;
if (slides.length === 0) return;
if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
let offsetCenter = -translate;
if (rtl) offsetCenter = translate;
swiper.visibleSlidesIndexes = [];
swiper.visibleSlides = [];
let spaceBetween = params.spaceBetween;
if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
} else if (typeof spaceBetween === 'string') {
spaceBetween = parseFloat(spaceBetween);
}
for (let i = 0; i < slides.length; i += 1) {
const slide = slides[i];
let slideOffset = slide.swiperSlideOffset;
if (params.cssMode && params.centeredSlides) {
slideOffset -= slides[0].swiperSlideOffset;
}
const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
const slideBefore = -(offsetCenter - slideOffset);
const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
if (isVisible) {
swiper.visibleSlides.push(slide);
swiper.visibleSlidesIndexes.push(i);
}
toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
slide.progress = rtl ? -slideProgress : slideProgress;
slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
}
}
function updateProgress(translate) {
const swiper = this;
if (typeof translate === 'undefined') {
const multiplier = swiper.rtlTranslate ? -1 : 1;
translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
}
const params = swiper.params;
const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
let {
progress,
isBeginning,
isEnd,
progressLoop
} = swiper;
const wasBeginning = isBeginning;
const wasEnd = isEnd;
if (translatesDiff === 0) {
progress = 0;
isBeginning = true;
isEnd = true;
} else {
progress = (translate - swiper.minTranslate()) / translatesDiff;
const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
isBeginning = isBeginningRounded || progress <= 0;
isEnd = isEndRounded || progress >= 1;
if (isBeginningRounded) progress = 0;
if (isEndRounded) progress = 1;
}
if (params.loop) {
const firstSlideIndex = swiper.getSlideIndexByData(0);
const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
const translateAbs = Math.abs(translate);
if (translateAbs >= firstSlideTranslate) {
progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
} else {
progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
}
if (progressLoop > 1) progressLoop -= 1;
}
Object.assign(swiper, {
progress,
progressLoop,
isBeginning,
isEnd
});
if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
if (isBeginning && !wasBeginning) {
swiper.emit('reachBeginning toEdge');
}
if (isEnd && !wasEnd) {
swiper.emit('reachEnd toEdge');
}
if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
swiper.emit('fromEdge');
}
swiper.emit('progress', progress);
}
const toggleSlideClasses = (slideEl, condition, className) => {
if (condition && !slideEl.classList.contains(className)) {
slideEl.classList.add(className);
} else if (!condition && slideEl.classList.contains(className)) {
slideEl.classList.remove(className);
}
};
function updateSlidesClasses() {
const swiper = this;
const {
slides,
params,
slidesEl,
activeIndex
} = swiper;
const isVirtual = swiper.virtual && params.virtual.enabled;
const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
const getFilteredSlide = selector => {
return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
};
let activeSlide;
let prevSlide;
let nextSlide;
if (isVirtual) {
if (params.loop) {
let slideIndex = activeIndex - swiper.virtual.slidesBefore;
if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
} else {
activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
}
} else {
if (gridEnabled) {
activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
} else {
activeSlide = slides[activeIndex];
}
}
if (activeSlide) {
if (!gridEnabled) {
nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
if (params.loop && !nextSlide) {
nextSlide = slides[0];
}
prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
if (params.loop && !prevSlide === 0) {
prevSlide = slides[slides.length - 1];
}
}
}
slides.forEach(slideEl => {
toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
});
swiper.emitSlidesClasses();
}
const processLazyPreloader = (swiper, imageEl) => {
if (!swiper || swiper.destroyed || !swiper.params) return;
const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
const slideEl = imageEl.closest(slideSelector());
if (slideEl) {
let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
if (!lazyEl && swiper.isElement) {
if (slideEl.shadowRoot) {
lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
} else {
requestAnimationFrame(() => {
if (slideEl.shadowRoot) {
lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
if (lazyEl) lazyEl.remove();
}
});
}
}
if (lazyEl) lazyEl.remove();
}
};
const unlazy = (swiper, index) => {
if (!swiper.slides[index]) return;
const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
if (!swiper || swiper.destroyed || !swiper.params) return;
let amount = swiper.params.lazyPreloadPrevNext;
const len = swiper.slides.length;
if (!len || !amount || amount < 0) return;
amount = Math.min(amount, len);
const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
const activeIndex = swiper.activeIndex;
if (swiper.params.grid && swiper.params.grid.rows > 1) {
const activeColumn = activeIndex;
const preloadColumns = [activeColumn - amount];
preloadColumns.push(...Array.from({
length: amount
}).map((_, i) => {
return activeColumn + slidesPerView + i;
}));
swiper.slides.forEach((slideEl, i) => {
if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
});
return;
}
const slideIndexLastInView = activeIndex + slidesPerView - 1;
if (swiper.params.rewind || swiper.params.loop) {
for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
const realIndex = (i % len + len) % len;
if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
}
} else {
for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
unlazy(swiper, i);
}
}
}
};
function getActiveIndexByTranslate(swiper) {
const {
slidesGrid,
params
} = swiper;
const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
let activeIndex;
for (let i = 0; i < slidesGrid.length; i += 1) {
if (typeof slidesGrid[i + 1] !== 'undefined') {
if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
activeIndex = i;
} else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
activeIndex = i + 1;
}
} else if (translate >= slidesGrid[i]) {
activeIndex = i;
}
}
if (params.normalizeSlideIndex) {
if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
}
return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
const swiper = this;
const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
const {
snapGrid,
params,
activeIndex: previousIndex,
realIndex: previousRealIndex,
snapIndex: previousSnapIndex
} = swiper;
let activeIndex = newActiveIndex;
let snapIndex;
const getVirtualRealIndex = aIndex => {
let realIndex = aIndex - swiper.virtual.slidesBefore;
if (realIndex < 0) {
realIndex = swiper.virtual.slides.length + realIndex;
}
if (realIndex >= swiper.virtual.slides.length) {
realIndex -= swiper.virtual.slides.length;
}
return realIndex;
};
if (typeof activeIndex === 'undefined') {
activeIndex = getActiveIndexByTranslate(swiper);
}
if (snapGrid.indexOf(translate) >= 0) {
snapIndex = snapGrid.indexOf(translate);
} else {
const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
}
if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
if (activeIndex === previousIndex && !swiper.params.loop) {
if (snapIndex !== previousSnapIndex) {
swiper.snapIndex = snapIndex;
swiper.emit('snapIndexChange');
}
return;
}
if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
swiper.realIndex = getVirtualRealIndex(activeIndex);
return;
}
const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
let realIndex;
if (swiper.virtual && params.virtual.enabled && params.loop) {
realIndex = getVirtualRealIndex(activeIndex);
} else if (gridEnabled) {
const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
if (Number.isNaN(activeSlideIndex)) {
activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
}
realIndex = Math.floor(activeSlideIndex / params.grid.rows);
} else if (swiper.slides[activeIndex]) {
const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
if (slideIndex) {
realIndex = parseInt(slideIndex, 10);
} else {
realIndex = activeIndex;
}
} else {
realIndex = activeIndex;
}
Object.assign(swiper, {
previousSnapIndex,
snapIndex,
previousRealIndex,
realIndex,
previousIndex,
activeIndex
});
if (swiper.initialized) {
preload(swiper);
}
swiper.emit('activeIndexChange');
swiper.emit('snapIndexChange');
if (swiper.initialized || swiper.params.runCallbacksOnInit) {
if (previousRealIndex !== realIndex) {
swiper.emit('realIndexChange');
}
swiper.emit('slideChange');
}
}
function updateClickedSlide(el, path) {
const swiper = this;
const params = swiper.params;
let slide = el.closest(`.${params.slideClass}, swiper-slide`);
if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
[...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
slide = pathEl;
}
});
}
let slideFound = false;
let slideIndex;
if (slide) {
for (let i = 0; i < swiper.slides.length; i += 1) {
if (swiper.slides[i] === slide) {
slideFound = true;
slideIndex = i;
break;
}
}
}
if (slide && slideFound) {
swiper.clickedSlide = slide;
if (swiper.virtual && swiper.params.virtual.enabled) {
swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
} else {
swiper.clickedIndex = slideIndex;
}
} else {
swiper.clickedSlide = undefined;
swiper.clickedIndex = undefined;
return;
}
if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
swiper.slideToClickedSlide();
}
}
var update = {
updateSize,
updateSlides,
updateAutoHeight,
updateSlidesOffset,
updateSlidesProgress,
updateProgress,
updateSlidesClasses,
updateActiveIndex,
updateClickedSlide
};
function getSwiperTranslate(axis) {
if (axis === void 0) {
axis = this.isHorizontal() ? 'x' : 'y';
}
const swiper = this;
const {
params,
rtlTranslate: rtl,
translate,
wrapperEl
} = swiper;
if (params.virtualTranslate) {
return rtl ? -translate : translate;
}
if (params.cssMode) {
return translate;
}
let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(wrapperEl, axis);
currentTranslate += swiper.cssOverflowAdjustment();
if (rtl) currentTranslate = -currentTranslate;
return currentTranslate || 0;
}
function setTranslate(translate, byController) {
const swiper = this;
const {
rtlTranslate: rtl,
params,
wrapperEl,
progress
} = swiper;
let x = 0;
let y = 0;
const z = 0;
if (swiper.isHorizontal()) {
x = rtl ? -translate : translate;
} else {
y = translate;
}
if (params.roundLengths) {
x = Math.floor(x);
y = Math.floor(y);
}
swiper.previousTranslate = swiper.translate;
swiper.translate = swiper.isHorizontal() ? x : y;
if (params.cssMode) {
wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
} else if (!params.virtualTranslate) {
if (swiper.isHorizontal()) {
x -= swiper.cssOverflowAdjustment();
} else {
y -= swiper.cssOverflowAdjustment();
}
wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
}
let newProgress;
const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
if (translatesDiff === 0) {
newProgress = 0;
} else {
newProgress = (translate - swiper.minTranslate()) / translatesDiff;
}
if (newProgress !== progress) {
swiper.updateProgress(translate);
}
swiper.emit('setTranslate', swiper.translate, byController);
}
function minTranslate() {
return -this.snapGrid[0];
}
function maxTranslate() {
return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
if (translate === void 0) {
translate = 0;
}
if (speed === void 0) {
speed = this.params.speed;
}
if (runCallbacks === void 0) {
runCallbacks = true;
}
if (translateBounds === void 0) {
translateBounds = true;
}
const swiper = this;
const {
params,
wrapperEl
} = swiper;
if (swiper.animating && params.preventInteractionOnTransition) {
return false;
}
const minTranslate = swiper.minTranslate();
const maxTranslate = swiper.maxTranslate();
let newTranslate;
if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;
swiper.updateProgress(newTranslate);
if (params.cssMode) {
const isH = swiper.isHorizontal();
if (speed === 0) {
wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
} else {
if (!swiper.support.smoothScroll) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
swiper,
targetPosition: -newTranslate,
side: isH ? 'left' : 'top'
});
return true;
}
wrapperEl.scrollTo({
[isH ? 'left' : 'top']: -newTranslate,
behavior: 'smooth'
});
}
return true;
}
if (speed === 0) {
swiper.setTransition(0);
swiper.setTranslate(newTranslate);
if (runCallbacks) {
swiper.emit('beforeTransitionStart', speed, internal);
swiper.emit('transitionEnd');
}
} else {
swiper.setTransition(speed);
swiper.setTranslate(newTranslate);
if (runCallbacks) {
swiper.emit('beforeTransitionStart', speed, internal);
swiper.emit('transitionStart');
}
if (!swiper.animating) {
swiper.animating = true;
if (!swiper.onTranslateToWrapperTransitionEnd) {
swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
if (!swiper || swiper.destroyed) return;
if (e.target !== this) return;
swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
swiper.onTranslateToWrapperTransitionEnd = null;
delete swiper.onTranslateToWrapperTransitionEnd;
swiper.animating = false;
if (runCallbacks) {
swiper.emit('transitionEnd');
}
};
}
swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
}
}
return true;
}
var translate = {
getTranslate: getSwiperTranslate,
setTranslate,
minTranslate,
maxTranslate,
translateTo
};
function setTransition(duration, byController) {
const swiper = this;
if (!swiper.params.cssMode) {
swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
}
swiper.emit('setTransition', duration, byController);
}
function transitionEmit(_ref) {
let {
swiper,
runCallbacks,
direction,
step
} = _ref;
const {
activeIndex,
previousIndex
} = swiper;
let dir = direction;
if (!dir) {
if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
}
swiper.emit(`transition${step}`);
if (runCallbacks && dir === 'reset') {
swiper.emit(`slideResetTransition${step}`);
} else if (runCallbacks && activeIndex !== previousIndex) {
swiper.emit(`slideChangeTransition${step}`);
if (dir === 'next') {
swiper.emit(`slideNextTransition${step}`);
} else {
swiper.emit(`slidePrevTransition${step}`);
}
}
}
function transitionStart(runCallbacks, direction) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
const swiper = this;
const {
params
} = swiper;
if (params.cssMode) return;
if (params.autoHeight) {
swiper.updateAutoHeight();
}
transitionEmit({
swiper,
runCallbacks,
direction,
step: 'Start'
});
}
function transitionEnd(runCallbacks, direction) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
const swiper = this;
const {
params
} = swiper;
swiper.animating = false;
if (params.cssMode) return;
swiper.setTransition(0);
transitionEmit({
swiper,
runCallbacks,
direction,
step: 'End'
});
}
var transition = {
setTransition,
transitionStart,
transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
if (index === void 0) {
index = 0;
}
if (runCallbacks === void 0) {
runCallbacks = true;
}
if (typeof index === 'string') {
index = parseInt(index, 10);
}
const swiper = this;
let slideIndex = index;
if (slideIndex < 0) slideIndex = 0;
const {
params,
snapGrid,
slidesGrid,
previousIndex,
activeIndex,
rtlTranslate: rtl,
wrapperEl,
enabled
} = swiper;
if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
return false;
}
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
const translate = -snapGrid[snapIndex];
if (params.normalizeSlideIndex) {
for (let i = 0; i < slidesGrid.length; i += 1) {
const normalizedTranslate = -Math.floor(translate * 100);
const normalizedGrid = Math.floor(slidesGrid[i] * 100);
const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
if (typeof slidesGrid[i + 1] !== 'undefined') {
if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
slideIndex = i;
} else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
slideIndex = i + 1;
}
} else if (normalizedTranslate >= normalizedGrid) {
slideIndex = i;
}
}
}
if (swiper.initialized && slideIndex !== activeIndex) {
if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
return false;
}
if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
if ((activeIndex || 0) !== slideIndex) {
return false;
}
}
}
if (slideIndex !== (previousIndex || 0) && runCallbacks) {
swiper.emit('beforeSlideChangeStart');
}
swiper.updateProgress(translate);
let direction;
if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';
const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
const isInitialVirtual = isVirtual && initial;
if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
swiper.updateActiveIndex(slideIndex);
if (params.autoHeight) {
swiper.updateAutoHeight();
}
swiper.updateSlidesClasses();
if (params.effect !== 'slide') {
swiper.setTranslate(translate);
}
if (direction !== 'reset') {
swiper.transitionStart(runCallbacks, direction);
swiper.transitionEnd(runCallbacks, direction);
}
return false;
}
if (params.cssMode) {
const isH = swiper.isHorizontal();
const t = rtl ? translate : -translate;
if (speed === 0) {
if (isVirtual) {
swiper.wrapperEl.style.scrollSnapType = 'none';
swiper._immediateVirtual = true;
}
if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
swiper._cssModeVirtualInitialSet = true;
requestAnimationFrame(() => {
wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
});
} else {
wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
}
if (isVirtual) {
requestAnimationFrame(() => {
swiper.wrapperEl.style.scrollSnapType = '';
swiper._immediateVirtual = false;
});
}
} else {
if (!swiper.support.smoothScroll) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
swiper,
targetPosition: t,
side: isH ? 'left' : 'top'
});
return true;
}
wrapperEl.scrollTo({
[isH ? 'left' : 'top']: t,
behavior: 'smooth'
});
}
return true;
}
const browser = getBrowser();
const isSafari = browser.isSafari;
if (isVirtual && !initial && isSafari && swiper.isElement) {
swiper.virtual.update(false, false, slideIndex);
}
swiper.setTransition(speed);
swiper.setTranslate(translate);
swiper.updateActiveIndex(slideIndex);
swiper.updateSlidesClasses();
swiper.emit('beforeTransitionStart', speed, internal);
swiper.transitionStart(runCallbacks, direction);
if (speed === 0) {
swiper.transitionEnd(runCallbacks, direction);
} else if (!swiper.animating) {
swiper.animating = true;
if (!swiper.onSlideToWrapperTransitionEnd) {
swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
if (!swiper || swiper.destroyed) return;
if (e.target !== this) return;
swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
swiper.onSlideToWrapperTransitionEnd = null;
delete swiper.onSlideToWrapperTransitionEnd;
swiper.transitionEnd(runCallbacks, direction);
};
}
swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
}
return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
if (index === void 0) {
index = 0;
}
if (runCallbacks === void 0) {
runCallbacks = true;
}
if (typeof index === 'string') {
const indexAsNumber = parseInt(index, 10);
index = indexAsNumber;
}
const swiper = this;
if (swiper.destroyed) return;
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
let newIndex = index;
if (swiper.params.loop) {
if (swiper.virtual && swiper.params.virtual.enabled) {
newIndex = newIndex + swiper.virtual.slidesBefore;
} else {
let targetSlideIndex;
if (gridEnabled) {
const slideIndex = newIndex * swiper.params.grid.rows;
targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
} else {
targetSlideIndex = swiper.getSlideIndexByData(newIndex);
}
const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
const {
centeredSlides
} = swiper.params;
let slidesPerView = swiper.params.slidesPerView;
if (slidesPerView === 'auto') {
slidesPerView = swiper.slidesPerViewDynamic();
} else {
slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
if (centeredSlides && slidesPerView % 2 === 0) {
slidesPerView = slidesPerView + 1;
}
}
let needLoopFix = cols - targetSlideIndex < slidesPerView;
if (centeredSlides) {
needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
}
if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
needLoopFix = false;
}
if (needLoopFix) {
const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
swiper.loopFix({
direction,
slideTo: true,
activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
});
}
if (gridEnabled) {
const slideIndex = newIndex * swiper.params.grid.rows;
newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
} else {
newIndex = swiper.getSlideIndexByData(newIndex);
}
}
}
requestAnimationFrame(() => {
swiper.slideTo(newIndex, speed, runCallbacks, internal);
});
return swiper;
}
function slideNext(speed, runCallbacks, internal) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
const swiper = this;
const {
enabled,
params,
animating
} = swiper;
if (!enabled || swiper.destroyed) return swiper;
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
let perGroup = params.slidesPerGroup;
if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
}
const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
const isVirtual = swiper.virtual && params.virtual.enabled;
if (params.loop) {
if (animating && !isVirtual && params.loopPreventsSliding) return false;
swiper.loopFix({
direction: 'next'
});
swiper._clientLeft = swiper.wrapperEl.clientLeft;
if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
requestAnimationFrame(() => {
swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
});
return true;
}
}
if (params.rewind && swiper.isEnd) {
return swiper.slideTo(0, speed, runCallbacks, internal);
}
return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
const swiper = this;
const {
params,
snapGrid,
slidesGrid,
rtlTranslate,
enabled,
animating
} = swiper;
if (!enabled || swiper.destroyed) return swiper;
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
const isVirtual = swiper.virtual && params.virtual.enabled;
if (params.loop) {
if (animating && !isVirtual && params.loopPreventsSliding) return false;
swiper.loopFix({
direction: 'prev'
});
swiper._clientLeft = swiper.wrapperEl.clientLeft;
}
const translate = rtlTranslate ? swiper.translate : -swiper.translate;
function normalize(val) {
if (val < 0) return -Math.floor(Math.abs(val));
return Math.floor(val);
}
const normalizedTranslate = normalize(translate);
const normalizedSnapGrid = snapGrid.map(val => normalize(val));
const isFreeMode = params.freeMode && params.freeMode.enabled;
let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
let prevSnapIndex;
snapGrid.forEach((snap, snapIndex) => {
if (normalizedTranslate >= snap) {
prevSnapIndex = snapIndex;
}
});
if (typeof prevSnapIndex !== 'undefined') {
prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
}
}
let prevIndex = 0;
if (typeof prevSnap !== 'undefined') {
prevIndex = slidesGrid.indexOf(prevSnap);
if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
prevIndex = Math.max(prevIndex, 0);
}
}
if (params.rewind && swiper.isBeginning) {
const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
} else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
requestAnimationFrame(() => {
swiper.slideTo(prevIndex, speed, runCallbacks, internal);
});
return true;
}
return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
const swiper = this;
if (swiper.destroyed) return;
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
if (runCallbacks === void 0) {
runCallbacks = true;
}
if (threshold === void 0) {
threshold = 0.5;
}
const swiper = this;
if (swiper.destroyed) return;
if (typeof speed === 'undefined') {
speed = swiper.params.speed;
}
let index = swiper.activeIndex;
const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
if (translate >= swiper.snapGrid[snapIndex]) {
const currentSnap = swiper.snapGrid[snapIndex];
const nextSnap = swiper.snapGrid[snapIndex + 1];
if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
index += swiper.params.slidesPerGroup;
}
} else {
const prevSnap = swiper.snapGrid[snapIndex - 1];
const currentSnap = swiper.snapGrid[snapIndex];
if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
index -= swiper.params.slidesPerGroup;
}
}
index = Math.max(index, 0);
index = Math.min(index, swiper.slidesGrid.length - 1);
return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
const swiper = this;
if (swiper.destroyed) return;
const {
params,
slidesEl
} = swiper;
const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
let realIndex;
const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
if (params.loop) {
if (swiper.animating) return;
realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
if (params.centeredSlides) {
swiper.slideToLoop(realIndex);
} else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
swiper.loopFix();
slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
swiper.slideTo(slideToIndex);
});
} else {
swiper.slideTo(slideToIndex);
}
} else {
swiper.slideTo(slideToIndex);
}
}
var slide = {
slideTo,
slideToLoop,
slideNext,
slidePrev,
slideReset,
slideToClosest,
slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
const swiper = this;
const {
params,
slidesEl
} = swiper;
if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
const initSlides = () => {
const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
slides.forEach((el, index) => {
el.setAttribute('data-swiper-slide-index', index);
});
};
const clearBlankSlides = () => {
const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideBlankClass}`);
slides.forEach(el => {
el.remove();
});
if (slides.length > 0) {
swiper.recalcSlides();
swiper.updateSlides();
}
};
const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
clearBlankSlides();
}
const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
const addBlankSlides = amountOfSlides => {
for (let i = 0; i < amountOfSlides; i += 1) {
const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
swiper.slidesEl.append(slideEl);
}
};
if (shouldFillGroup) {
if (params.loopAddBlankSlides) {
const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
addBlankSlides(slidesToAdd);
swiper.recalcSlides();
swiper.updateSlides();
} else {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
}
initSlides();
} else if (shouldFillGrid) {
if (params.loopAddBlankSlides) {
const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
addBlankSlides(slidesToAdd);
swiper.recalcSlides();
swiper.updateSlides();
} else {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
}
initSlides();
} else {
initSlides();
}
swiper.loopFix({
slideRealIndex,
direction: params.centeredSlides ? undefined : 'next',
initial
});
}
function loopFix(_temp) {
let {
slideRealIndex,
slideTo = true,
direction,
setTranslate,
activeSlideIndex,
initial,
byController,
byMousewheel
} = _temp === void 0 ? {} : _temp;
const swiper = this;
if (!swiper.params.loop) return;
swiper.emit('beforeLoopFix');
const {
slides,
allowSlidePrev,
allowSlideNext,
slidesEl,
params
} = swiper;
const {
centeredSlides,
initialSlide
} = params;
swiper.allowSlidePrev = true;
swiper.allowSlideNext = true;
if (swiper.virtual && params.virtual.enabled) {
if (slideTo) {
if (!params.centeredSlides && swiper.snapIndex === 0) {
swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
} else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
} else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
}
}
swiper.allowSlidePrev = allowSlidePrev;
swiper.allowSlideNext = allowSlideNext;
swiper.emit('loopFix');
return;
}
let slidesPerView = params.slidesPerView;
if (slidesPerView === 'auto') {
slidesPerView = swiper.slidesPerViewDynamic();
} else {
slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
if (centeredSlides && slidesPerView % 2 === 0) {
slidesPerView = slidesPerView + 1;
}
}
const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
if (loopedSlides % slidesPerGroup !== 0) {
loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
}
loopedSlides += params.loopAdditionalSlides;
swiper.loopedSlides = loopedSlides;
const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
} else if (gridEnabled && params.grid.fill === 'row') {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
}
const prependSlidesIndexes = [];
const appendSlidesIndexes = [];
const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
if (typeof activeSlideIndex === 'undefined') {
activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
} else {
activeIndex = activeSlideIndex;
}
const isNext = direction === 'next' || !direction;
const isPrev = direction === 'prev' || !direction;
let slidesPrepended = 0;
let slidesAppended = 0;
const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
if (activeColIndexWithShift < loopedSlides) {
slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
const index = i - Math.floor(i / cols) * cols;
if (gridEnabled) {
const colIndexToPrepend = cols - index - 1;
for (let i = slides.length - 1; i >= 0; i -= 1) {
if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
}
} else {
prependSlidesIndexes.push(cols - index - 1);
}
}
} else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
if (isInitialOverflow) {
slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
}
for (let i = 0; i < slidesAppended; i += 1) {
const index = i - Math.floor(i / cols) * cols;
if (gridEnabled) {
slides.forEach((slide, slideIndex) => {
if (slide.column === index) appendSlidesIndexes.push(slideIndex);
});
} else {
appendSlidesIndexes.push(index);
}
}
}
swiper.__preventObserver__ = true;
requestAnimationFrame(() => {
swiper.__preventObserver__ = false;
});
if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
if (appendSlidesIndexes.includes(activeSlideIndex)) {
appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
}
if (prependSlidesIndexes.includes(activeSlideIndex)) {
prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
}
}
if (isPrev) {
prependSlidesIndexes.forEach(index => {
slides[index].swiperLoopMoveDOM = true;
slidesEl.prepend(slides[index]);
slides[index].swiperLoopMoveDOM = false;
});
}
if (isNext) {
appendSlidesIndexes.forEach(index => {
slides[index].swiperLoopMoveDOM = true;
slidesEl.append(slides[index]);
slides[index].swiperLoopMoveDOM = false;
});
}
swiper.recalcSlides();
if (params.slidesPerView === 'auto') {
swiper.updateSlides();
} else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
swiper.slides.forEach((slide, slideIndex) => {
swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
});
}
if (params.watchSlidesProgress) {
swiper.updateSlidesOffset();
}
if (slideTo) {
if (prependSlidesIndexes.length > 0 && isPrev) {
if (typeof slideRealIndex === 'undefined') {
const currentSlideTranslate = swiper.slidesGrid[activeIndex];
const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
const diff = newSlideTranslate - currentSlideTranslate;
if (byMousewheel) {
swiper.setTranslate(swiper.translate - diff);
} else {
swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
if (setTranslate) {
swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
}
}
} else {
if (setTranslate) {
const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
swiper.touchEventsData.currentTranslate = swiper.translate;
}
}
} else if (appendSlidesIndexes.length > 0 && isNext) {
if (typeof slideRealIndex === 'undefined') {
const currentSlideTranslate = swiper.slidesGrid[activeIndex];
const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
const diff = newSlideTranslate - currentSlideTranslate;
if (byMousewheel) {
swiper.setTranslate(swiper.translate - diff);
} else {
swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
if (setTranslate) {
swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
}
}
} else {
const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
}
}
}
swiper.allowSlidePrev = allowSlidePrev;
swiper.allowSlideNext = allowSlideNext;
if (swiper.controller && swiper.controller.control && !byController) {
const loopParams = {
slideRealIndex,
direction,
setTranslate,
activeSlideIndex,
byController: true
};
if (Array.isArray(swiper.controller.control)) {
swiper.controller.control.forEach(c => {
if (!c.destroyed && c.params.loop) c.loopFix({
...loopParams,
slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
});
});
} else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
swiper.controller.control.loopFix({
...loopParams,
slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
});
}
}
swiper.emit('loopFix');
}
function loopDestroy() {
const swiper = this;
const {
params,
slidesEl
} = swiper;
if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
swiper.recalcSlides();
const newSlidesOrder = [];
swiper.slides.forEach(slideEl => {
const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
newSlidesOrder[index] = slideEl;
});
swiper.slides.forEach(slideEl => {
slideEl.removeAttribute('data-swiper-slide-index');
});
newSlidesOrder.forEach(slideEl => {
slidesEl.append(slideEl);
});
swiper.recalcSlides();
swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
loopCreate,
loopFix,
loopDestroy
};
function setGrabCursor(moving) {
const swiper = this;
if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
if (swiper.isElement) {
swiper.__preventObserver__ = true;
}
el.style.cursor = 'move';
el.style.cursor = moving ? 'grabbing' : 'grab';
if (swiper.isElement) {
requestAnimationFrame(() => {
swiper.__preventObserver__ = false;
});
}
}
function unsetGrabCursor() {
const swiper = this;
if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
return;
}
if (swiper.isElement) {
swiper.__preventObserver__ = true;
}
swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
if (swiper.isElement) {
requestAnimationFrame(() => {
swiper.__preventObserver__ = false;
});
}
}
var grabCursor = {
setGrabCursor,
unsetGrabCursor
};
function closestElement(selector, base) {
if (base === void 0) {
base = this;
}
function __closestFrom(el) {
if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
if (el.assignedSlot) el = el.assignedSlot;
const found = el.closest(selector);
if (!found && !el.getRootNode) {
return null;
}
return found || __closestFrom(el.getRootNode().host);
}
return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const {
params
} = swiper;
const edgeSwipeDetection = params.edgeSwipeDetection;
const edgeSwipeThreshold = params.edgeSwipeThreshold;
if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
if (edgeSwipeDetection === 'prevent') {
event.preventDefault();
return true;
}
return false;
}
return true;
}
function onTouchStart(event) {
const swiper = this;
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
let e = event;
if (e.originalEvent) e = e.originalEvent;
const data = swiper.touchEventsData;
if (e.type === 'pointerdown') {
if (data.pointerId !== null && data.pointerId !== e.pointerId) {
return;
}
data.pointerId = e.pointerId;
} else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
data.touchId = e.targetTouches[0].identifier;
}
if (e.type === 'touchstart') {
preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
return;
}
const {
params,
touches,
enabled
} = swiper;
if (!enabled) return;
if (!params.simulateTouch && e.pointerType === 'mouse') return;
if (swiper.animating && params.preventInteractionOnTransition) {
return;
}
if (!swiper.animating && params.cssMode && params.loop) {
swiper.loopFix();
}
let targetEl = e.target;
if (params.touchEventsTarget === 'wrapper') {
if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(targetEl, swiper.wrapperEl)) return;
}
if ('which' in e && e.which === 3) return;
if ('button' in e && e.button > 0) return;
if (data.isTouched && data.isMoved) return;
const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
const eventPath = e.composedPath ? e.composedPath() : e.path;
if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
targetEl = eventPath[0];
}
const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
const isTargetShadow = !!(e.target && e.target.shadowRoot);
if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
swiper.allowClick = true;
return;
}
if (params.swipeHandler) {
if (!targetEl.closest(params.swipeHandler)) return;
}
touches.currentX = e.pageX;
touches.currentY = e.pageY;
const startX = touches.currentX;
const startY = touches.currentY;
if (!preventEdgeSwipe(swiper, e, startX)) {
return;
}
Object.assign(data, {
isTouched: true,
isMoved: false,
allowTouchCallbacks: true,
isScrolling: undefined,
startMoving: undefined
});
touches.startX = startX;
touches.startY = startY;
data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
swiper.allowClick = true;
swiper.updateSize();
swiper.swipeDirection = undefined;
if (params.threshold > 0) data.allowThresholdMove = false;
let preventDefault = true;
if (targetEl.matches(data.focusableElements)) {
preventDefault = false;
if (targetEl.nodeName === 'SELECT') {
data.isTouched = false;
}
}
if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
document.activeElement.blur();
}
const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
e.preventDefault();
}
if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
swiper.freeMode.onTouchStart();
}
swiper.emit('touchStart', e);
}
function onTouchMove(event) {
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const swiper = this;
const data = swiper.touchEventsData;
const {
params,
touches,
rtlTranslate: rtl,
enabled
} = swiper;
if (!enabled) return;
if (!params.simulateTouch && event.pointerType === 'mouse') return;
let e = event;
if (e.originalEvent) e = e.originalEvent;
if (e.type === 'pointermove') {
if (data.touchId !== null) return; // return from pointer if we use touch
const id = e.pointerId;
if (id !== data.pointerId) return;
}
let targetTouch;
if (e.type === 'touchmove') {
targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
if (!targetTouch || targetTouch.identifier !== data.touchId) return;
} else {
targetTouch = e;
}
if (!data.isTouched) {
if (data.startMoving && data.isScrolling) {
swiper.emit('touchMoveOpposite', e);
}
return;
}
const pageX = targetTouch.pageX;
const pageY = targetTouch.pageY;
if (e.preventedByNestedSwiper) {
touches.startX = pageX;
touches.startY = pageY;
return;
}
if (!swiper.allowTouchMove) {
if (!e.target.matches(data.focusableElements)) {
swiper.allowClick = false;
}
if (data.isTouched) {
Object.assign(touches, {
startX: pageX,
startY: pageY,
currentX: pageX,
currentY: pageY
});
data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
}
return;
}
if (params.touchReleaseOnEdges && !params.loop) {
if (swiper.isVertical()) {
if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
data.isTouched = false;
data.isMoved = false;
return;
}
} else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
return;
} else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
return;
}
}
if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
document.activeElement.blur();
}
if (document.activeElement) {
if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
data.isMoved = true;
swiper.allowClick = false;
return;
}
}
if (data.allowTouchCallbacks) {
swiper.emit('touchMove', e);
}
touches.previousX = touches.currentX;
touches.previousY = touches.currentY;
touches.currentX = pageX;
touches.currentY = pageY;
const diffX = touches.currentX - touches.startX;
const diffY = touches.currentY - touches.startY;
if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
if (typeof data.isScrolling === 'undefined') {
let touchAngle;
if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
data.isScrolling = false;
} else {
if (diffX * diffX + diffY * diffY >= 25) {
touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
}
}
}
if (data.isScrolling) {
swiper.emit('touchMoveOpposite', e);
}
if (typeof data.startMoving === 'undefined') {
if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
data.startMoving = true;
}
}
if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
data.isTouched = false;
return;
}
if (!data.startMoving) {
return;
}
swiper.allowClick = false;
if (!params.cssMode && e.cancelable) {
e.preventDefault();
}
if (params.touchMoveStopPropagation && !params.nested) {
e.stopPropagation();
}
let diff = swiper.isHorizontal() ? diffX : diffY;
let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
if (params.oneWayMovement) {
diff = Math.abs(diff) * (rtl ? 1 : -1);
touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
}
touches.diff = diff;
diff *= params.touchRatio;
if (rtl) {
diff = -diff;
touchesDiff = -touchesDiff;
}
const prevTouchesDirection = swiper.touchesDirection;
swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
const isLoop = swiper.params.loop && !params.cssMode;
const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
if (!data.isMoved) {
if (isLoop && allowLoopFix) {
swiper.loopFix({
direction: swiper.swipeDirection
});
}
data.startTranslate = swiper.getTranslate();
swiper.setTransition(0);
if (swiper.animating) {
const evt = new window.CustomEvent('transitionend', {
bubbles: true,
cancelable: true,
detail: {
bySwiperTouchMove: true
}
});
swiper.wrapperEl.dispatchEvent(evt);
}
data.allowMomentumBounce = false;
if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
swiper.setGrabCursor(true);
}
swiper.emit('sliderFirstMove', e);
}
let loopFixed;
new Date().getTime();
if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
Object.assign(touches, {
startX: pageX,
startY: pageY,
currentX: pageX,
currentY: pageY,
startTranslate: data.currentTranslate
});
data.loopSwapReset = true;
data.startTranslate = data.currentTranslate;
return;
}
swiper.emit('sliderMove', e);
data.isMoved = true;
data.currentTranslate = diff + data.startTranslate;
let disableParentSwiper = true;
let resistanceRatio = params.resistanceRatio;
if (params.touchReleaseOnEdges) {
resistanceRatio = 0;
}
if (diff > 0) {
if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
swiper.loopFix({
direction: 'prev',
setTranslate: true,
activeSlideIndex: 0
});
}
if (data.currentTranslate > swiper.minTranslate()) {
disableParentSwiper = false;
if (params.resistance) {
data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
}
}
} else if (diff < 0) {
if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
swiper.loopFix({
direction: 'next',
setTranslate: true,
activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
});
}
if (data.currentTranslate < swiper.maxTranslate()) {
disableParentSwiper = false;
if (params.resistance) {
data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
}
}
}
if (disableParentSwiper) {
e.preventedByNestedSwiper = true;
}
if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
data.currentTranslate = data.startTranslate;
}
if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
data.currentTranslate = data.startTranslate;
}
if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
data.currentTranslate = data.startTranslate;
}
if (params.threshold > 0) {
if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
if (!data.allowThresholdMove) {
data.allowThresholdMove = true;
touches.startX = touches.currentX;
touches.startY = touches.currentY;
data.currentTranslate = data.startTranslate;
touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
return;
}
} else {
data.currentTranslate = data.startTranslate;
return;
}
}
if (!params.followFinger || params.cssMode) return;
if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
}
if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
swiper.freeMode.onTouchMove();
}
swiper.updateProgress(data.currentTranslate);
swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
const swiper = this;
const data = swiper.touchEventsData;
let e = event;
if (e.originalEvent) e = e.originalEvent;
let targetTouch;
const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
if (!isTouchEvent) {
if (data.touchId !== null) return; // return from pointer if we use touch
if (e.pointerId !== data.pointerId) return;
targetTouch = e;
} else {
targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
if (!targetTouch || targetTouch.identifier !== data.touchId) return;
}
if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
if (!proceed) {
return;
}
}
data.pointerId = null;
data.touchId = null;
const {
params,
touches,
rtlTranslate: rtl,
slidesGrid,
enabled
} = swiper;
if (!enabled) return;
if (!params.simulateTouch && e.pointerType === 'mouse') return;
if (data.allowTouchCallbacks) {
swiper.emit('touchEnd', e);
}
data.allowTouchCallbacks = false;
if (!data.isTouched) {
if (data.isMoved && params.grabCursor) {
swiper.setGrabCursor(false);
}
data.isMoved = false;
data.startMoving = false;
return;
}
if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
swiper.setGrabCursor(false);
}
const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
const timeDiff = touchEndTime - data.touchStartTime;
if (swiper.allowClick) {
const pathTree = e.path || e.composedPath && e.composedPath();
swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
swiper.emit('tap click', e);
if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
swiper.emit('doubleTap doubleClick', e);
}
}
data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
if (!swiper.destroyed) swiper.allowClick = true;
});
if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
data.isTouched = false;
data.isMoved = false;
data.startMoving = false;
return;
}
data.isTouched = false;
data.isMoved = false;
data.startMoving = false;
let currentPos;
if (params.followFinger) {
currentPos = rtl ? swiper.translate : -swiper.translate;
} else {
currentPos = -data.currentTranslate;
}
if (params.cssMode) {
return;
}
if (params.freeMode && params.freeMode.enabled) {
swiper.freeMode.onTouchEnd({
currentPos
});
return;
}
const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
let stopIndex = 0;
let groupSize = swiper.slidesSizesGrid[0];
for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
if (typeof slidesGrid[i + increment] !== 'undefined') {
if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
stopIndex = i;
groupSize = slidesGrid[i + increment] - slidesGrid[i];
}
} else if (swipeToLast || currentPos >= slidesGrid[i]) {
stopIndex = i;
groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
}
}
let rewindFirstIndex = null;
let rewindLastIndex = null;
if (params.rewind) {
if (swiper.isBeginning) {
rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
} else if (swiper.isEnd) {
rewindFirstIndex = 0;
}
}
const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
if (timeDiff > params.longSwipesMs) {
if (!params.longSwipes) {
swiper.slideTo(swiper.activeIndex);
return;
}
if (swiper.swipeDirection === 'next') {
if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
}
if (swiper.swipeDirection === 'prev') {
if (ratio > 1 - params.longSwipesRatio) {
swiper.slideTo(stopIndex + increment);
} else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
swiper.slideTo(rewindLastIndex);
} else {
swiper.slideTo(stopIndex);
}
}
} else {
if (!params.shortSwipes) {
swiper.slideTo(swiper.activeIndex);
return;
}
const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
if (!isNavButtonTarget) {
if (swiper.swipeDirection === 'next') {
swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
}
if (swiper.swipeDirection === 'prev') {
swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
}
} else if (e.target === swiper.navigation.nextEl) {
swiper.slideTo(stopIndex + increment);
} else {
swiper.slideTo(stopIndex);
}
}
}
function onResize() {
const swiper = this;
const {
params,
el
} = swiper;
if (el && el.offsetWidth === 0) return;
if (params.breakpoints) {
swiper.setBreakpoint();
}
const {
allowSlideNext,
allowSlidePrev,
snapGrid
} = swiper;
const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
swiper.allowSlideNext = true;
swiper.allowSlidePrev = true;
swiper.updateSize();
swiper.updateSlides();
swiper.updateSlidesClasses();
const isVirtualLoop = isVirtual && params.loop;
if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
swiper.slideTo(swiper.slides.length - 1, 0, false, true);
} else {
if (swiper.params.loop && !isVirtual) {
swiper.slideToLoop(swiper.realIndex, 0, false, true);
} else {
swiper.slideTo(swiper.activeIndex, 0, false, true);
}
}
if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
clearTimeout(swiper.autoplay.resizeTimeout);
swiper.autoplay.resizeTimeout = setTimeout(() => {
if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
swiper.autoplay.resume();
}
}, 500);
}
swiper.allowSlidePrev = allowSlidePrev;
swiper.allowSlideNext = allowSlideNext;
if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
swiper.checkOverflow();
}
}
function onClick(e) {
const swiper = this;
if (!swiper.enabled) return;
if (!swiper.allowClick) {
if (swiper.params.preventClicks) e.preventDefault();
if (swiper.params.preventClicksPropagation && swiper.animating) {
e.stopPropagation();
e.stopImmediatePropagation();
}
}
}
function onScroll() {
const swiper = this;
const {
wrapperEl,
rtlTranslate,
enabled
} = swiper;
if (!enabled) return;
swiper.previousTranslate = swiper.translate;
if (swiper.isHorizontal()) {
swiper.translate = -wrapperEl.scrollLeft;
} else {
swiper.translate = -wrapperEl.scrollTop;
}
if (swiper.translate === 0) swiper.translate = 0;
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
let newProgress;
const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
if (translatesDiff === 0) {
newProgress = 0;
} else {
newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
}
if (newProgress !== swiper.progress) {
swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
}
swiper.emit('setTranslate', swiper.translate, false);
}
function onLoad(e) {
const swiper = this;
processLazyPreloader(swiper, e.target);
if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
return;
}
swiper.update();
}
function onDocumentTouchStart() {
const swiper = this;
if (swiper.documentTouchHandlerProceeded) return;
swiper.documentTouchHandlerProceeded = true;
if (swiper.params.touchReleaseOnEdges) {
swiper.el.style.touchAction = 'auto';
}
}
const events = (swiper, method) => {
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const {
params,
el,
wrapperEl,
device
} = swiper;
const capture = !!params.nested;
const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
const swiperMethod = method;
if (!el || typeof el === 'string') return;
document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
passive: false,
capture
});
el[domMethod]('touchstart', swiper.onTouchStart, {
passive: false
});
el[domMethod]('pointerdown', swiper.onTouchStart, {
passive: false
});
document[domMethod]('touchmove', swiper.onTouchMove, {
passive: false,
capture
});
document[domMethod]('pointermove', swiper.onTouchMove, {
passive: false,
capture
});
document[domMethod]('touchend', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('pointerup', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('pointercancel', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('touchcancel', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('pointerout', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('pointerleave', swiper.onTouchEnd, {
passive: true
});
document[domMethod]('contextmenu', swiper.onTouchEnd, {
passive: true
});
if (params.preventClicks || params.preventClicksPropagation) {
el[domMethod]('click', swiper.onClick, true);
}
if (params.cssMode) {
wrapperEl[domMethod]('scroll', swiper.onScroll);
}
if (params.updateOnWindowResize) {
swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
} else {
swiper[swiperMethod]('observerUpdate', onResize, true);
}
el[domMethod]('load', swiper.onLoad, {
capture: true
});
};
function attachEvents() {
const swiper = this;
const {
params
} = swiper;
swiper.onTouchStart = onTouchStart.bind(swiper);
swiper.onTouchMove = onTouchMove.bind(swiper);
swiper.onTouchEnd = onTouchEnd.bind(swiper);
swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
if (params.cssMode) {
swiper.onScroll = onScroll.bind(swiper);
}
swiper.onClick = onClick.bind(swiper);
swiper.onLoad = onLoad.bind(swiper);
events(swiper, 'on');
}
function detachEvents() {
const swiper = this;
events(swiper, 'off');
}
var events$1 = {
attachEvents,
detachEvents
};
const isGridEnabled = (swiper, params) => {
return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
const swiper = this;
const {
realIndex,
initialized,
params,
el
} = swiper;
const breakpoints = params.breakpoints;
if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
const breakpointParams = breakpointOnlyParams || swiper.originalParams;
const wasMultiRow = isGridEnabled(swiper, params);
const isMultiRow = isGridEnabled(swiper, breakpointParams);
const wasGrabCursor = swiper.params.grabCursor;
const isGrabCursor = breakpointParams.grabCursor;
const wasEnabled = params.enabled;
if (wasMultiRow && !isMultiRow) {
el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
swiper.emitContainerClasses();
} else if (!wasMultiRow && isMultiRow) {
el.classList.add(`${params.containerModifierClass}grid`);
if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
el.classList.add(`${params.containerModifierClass}grid-column`);
}
swiper.emitContainerClasses();
}
if (wasGrabCursor && !isGrabCursor) {
swiper.unsetGrabCursor();
} else if (!wasGrabCursor && isGrabCursor) {
swiper.setGrabCursor();
}
['navigation', 'pagination', 'scrollbar'].forEach(prop => {
if (typeof breakpointParams[prop] === 'undefined') return;
const wasModuleEnabled = params[prop] && params[prop].enabled;
const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
if (wasModuleEnabled && !isModuleEnabled) {
swiper[prop].disable();
}
if (!wasModuleEnabled && isModuleEnabled) {
swiper[prop].enable();
}
});
const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
const wasLoop = params.loop;
if (directionChanged && initialized) {
swiper.changeDirection();
}
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper.params, breakpointParams);
const isEnabled = swiper.params.enabled;
const hasLoop = swiper.params.loop;
Object.assign(swiper, {
allowTouchMove: swiper.params.allowTouchMove,
allowSlideNext: swiper.params.allowSlideNext,
allowSlidePrev: swiper.params.allowSlidePrev
});
if (wasEnabled && !isEnabled) {
swiper.disable();
} else if (!wasEnabled && isEnabled) {
swiper.enable();
}
swiper.currentBreakpoint = breakpoint;
swiper.emit('_beforeBreakpoint', breakpointParams);
if (initialized) {
if (needsReLoop) {
swiper.loopDestroy();
swiper.loopCreate(realIndex);
swiper.updateSlides();
} else if (!wasLoop && hasLoop) {
swiper.loopCreate(realIndex);
swiper.updateSlides();
} else if (wasLoop && !hasLoop) {
swiper.loopDestroy();
}
}
swiper.emit('breakpoint', breakpointParams);
}
function getBreakpoint(breakpoints, base, containerEl) {
if (base === void 0) {
base = 'window';
}
if (!breakpoints || base === 'container' && !containerEl) return undefined;
let breakpoint = false;
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
const points = Object.keys(breakpoints).map(point => {
if (typeof point === 'string' && point.indexOf('@') === 0) {
const minRatio = parseFloat(point.substr(1));
const value = currentHeight * minRatio;
return {
value,
point
};
}
return {
value: point,
point
};
});
points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
for (let i = 0; i < points.length; i += 1) {
const {
point,
value
} = points[i];
if (base === 'window') {
if (window.matchMedia(`(min-width: ${value}px)`).matches) {
breakpoint = point;
}
} else if (value <= containerEl.clientWidth) {
breakpoint = point;
}
}
return breakpoint || 'max';
}
var breakpoints = {
setBreakpoint,
getBreakpoint
};
function prepareClasses(entries, prefix) {
const resultClasses = [];
entries.forEach(item => {
if (typeof item === 'object') {
Object.keys(item).forEach(classNames => {
if (item[classNames]) {
resultClasses.push(prefix + classNames);
}
});
} else if (typeof item === 'string') {
resultClasses.push(prefix + item);
}
});
return resultClasses;
}
function addClasses() {
const swiper = this;
const {
classNames,
params,
rtl,
el,
device
} = swiper;
const suffixes = prepareClasses(['initialized', params.direction, {
'free-mode': swiper.params.freeMode && params.freeMode.enabled
}, {
'autoheight': params.autoHeight
}, {
'rtl': rtl
}, {
'grid': params.grid && params.grid.rows > 1
}, {
'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
}, {
'android': device.android
}, {
'ios': device.ios
}, {
'css-mode': params.cssMode
}, {
'centered': params.cssMode && params.centeredSlides
}, {
'watch-progress': params.watchSlidesProgress
}], params.containerModifierClass);
classNames.push(...suffixes);
el.classList.add(...classNames);
swiper.emitContainerClasses();
}
function removeClasses() {
const swiper = this;
const {
el,
classNames
} = swiper;
if (!el || typeof el === 'string') return;
el.classList.remove(...classNames);
swiper.emitContainerClasses();
}
var classes = {
addClasses,
removeClasses
};
function checkOverflow() {
const swiper = this;
const {
isLocked: wasLocked,
params
} = swiper;
const {
slidesOffsetBefore
} = params;
if (slidesOffsetBefore) {
const lastSlideIndex = swiper.slides.length - 1;
const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
swiper.isLocked = swiper.size > lastSlideRightEdge;
} else {
swiper.isLocked = swiper.snapGrid.length === 1;
}
if (params.allowSlideNext === true) {
swiper.allowSlideNext = !swiper.isLocked;
}
if (params.allowSlidePrev === true) {
swiper.allowSlidePrev = !swiper.isLocked;
}
if (wasLocked && wasLocked !== swiper.isLocked) {
swiper.isEnd = false;
}
if (wasLocked !== swiper.isLocked) {
swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
}
var checkOverflow$1 = {
checkOverflow
};
var defaults = {
init: true,
direction: 'horizontal',
oneWayMovement: false,
swiperElementNodeName: 'SWIPER-CONTAINER',
touchEventsTarget: 'wrapper',
initialSlide: 0,
speed: 300,
cssMode: false,
updateOnWindowResize: true,
resizeObserver: true,
nested: false,
createElements: false,
eventsPrefix: 'swiper',
enabled: true,
focusableElements: 'input, select, option, textarea, button, video, label',
width: null,
height: null,
preventInteractionOnTransition: false,
userAgent: null,
url: null,
edgeSwipeDetection: false,
edgeSwipeThreshold: 20,
autoHeight: false,
setWrapperSize: false,
virtualTranslate: false,
effect: 'slide',
breakpoints: undefined,
breakpointsBase: 'window',
spaceBetween: 0,
slidesPerView: 1,
slidesPerGroup: 1,
slidesPerGroupSkip: 0,
slidesPerGroupAuto: false,
centeredSlides: false,
centeredSlidesBounds: false,
slidesOffsetBefore: 0,
slidesOffsetAfter: 0,
normalizeSlideIndex: true,
centerInsufficientSlides: false,
watchOverflow: true,
roundLengths: false,
touchRatio: 1,
touchAngle: 45,
simulateTouch: true,
shortSwipes: true,
longSwipes: true,
longSwipesRatio: 0.5,
longSwipesMs: 300,
followFinger: true,
allowTouchMove: true,
threshold: 5,
touchMoveStopPropagation: false,
touchStartPreventDefault: true,
touchStartForcePreventDefault: false,
touchReleaseOnEdges: false,
uniqueNavElements: true,
resistance: true,
resistanceRatio: 0.85,
watchSlidesProgress: false,
grabCursor: false,
preventClicks: true,
preventClicksPropagation: true,
slideToClickedSlide: false,
loop: false,
loopAddBlankSlides: true,
loopAdditionalSlides: 0,
loopPreventsSliding: true,
rewind: false,
allowSlidePrev: true,
allowSlideNext: true,
swipeHandler: null,
noSwiping: true,
noSwipingClass: 'swiper-no-swiping',
noSwipingSelector: null,
passiveListeners: true,
maxBackfaceHiddenSlides: 10,
containerModifierClass: 'swiper-',
slideClass: 'swiper-slide',
slideBlankClass: 'swiper-slide-blank',
slideActiveClass: 'swiper-slide-active',
slideVisibleClass: 'swiper-slide-visible',
slideFullyVisibleClass: 'swiper-slide-fully-visible',
slideNextClass: 'swiper-slide-next',
slidePrevClass: 'swiper-slide-prev',
wrapperClass: 'swiper-wrapper',
lazyPreloaderClass: 'swiper-lazy-preloader',
lazyPreloadPrevNext: 0,
runCallbacksOnInit: true,
_emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
return function extendParams(obj) {
if (obj === void 0) {
obj = {};
}
const moduleParamName = Object.keys(obj)[0];
const moduleParams = obj[moduleParamName];
if (typeof moduleParams !== 'object' || moduleParams === null) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
return;
}
if (params[moduleParamName] === true) {
params[moduleParamName] = {
enabled: true
};
}
if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
params[moduleParamName].auto = true;
}
if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
params[moduleParamName].auto = true;
}
if (!(moduleParamName in params && 'enabled' in moduleParams)) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
return;
}
if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
params[moduleParamName].enabled = true;
}
if (!params[moduleParamName]) params[moduleParamName] = {
enabled: false
};
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
};
}
const prototypes = {
eventsEmitter,
update,
translate,
transition,
slide,
loop,
grabCursor,
events: events$1,
breakpoints,
checkOverflow: checkOverflow$1,
classes
};
const extendedDefaults = {};
class Swiper {
constructor() {
let el;
let params;
for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
args[_key] = arguments[_key];
}
if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
params = args[0];
} else {
[el, params] = args;
}
if (!params) params = {};
params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);
if (el && !params.el) params.el = el;
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
const swipers = [];
document.querySelectorAll(params.el).forEach(containerEl => {
const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params, {
el: containerEl
});
swipers.push(new Swiper(newParams));
});
return swipers;
}
const swiper = this;
swiper.__swiper__ = true;
swiper.support = getSupport();
swiper.device = getDevice({
userAgent: params.userAgent
});
swiper.browser = getBrowser();
swiper.eventsListeners = {};
swiper.eventsAnyListeners = [];
swiper.modules = [...swiper.__modules__];
if (params.modules && Array.isArray(params.modules)) {
swiper.modules.push(...params.modules);
}
const allModulesParams = {};
swiper.modules.forEach(mod => {
mod({
params,
swiper,
extendParams: moduleExtendParams(params, allModulesParams),
on: swiper.on.bind(swiper),
once: swiper.once.bind(swiper),
off: swiper.off.bind(swiper),
emit: swiper.emit.bind(swiper)
});
});
const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, defaults, allModulesParams);
swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiperParams, extendedDefaults, params);
swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiper.params);
swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);
if (swiper.params && swiper.params.on) {
Object.keys(swiper.params.on).forEach(eventName => {
swiper.on(eventName, swiper.params.on[eventName]);
});
}
if (swiper.params && swiper.params.onAny) {
swiper.onAny(swiper.params.onAny);
}
Object.assign(swiper, {
enabled: swiper.params.enabled,
el,
classNames: [],
slides: [],
slidesGrid: [],
snapGrid: [],
slidesSizesGrid: [],
isHorizontal() {
return swiper.params.direction === 'horizontal';
},
isVertical() {
return swiper.params.direction === 'vertical';
},
activeIndex: 0,
realIndex: 0,
isBeginning: true,
isEnd: false,
translate: 0,
previousTranslate: 0,
progress: 0,
velocity: 0,
animating: false,
cssOverflowAdjustment() {
return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
},
allowSlideNext: swiper.params.allowSlideNext,
allowSlidePrev: swiper.params.allowSlidePrev,
touchEventsData: {
isTouched: undefined,
isMoved: undefined,
allowTouchCallbacks: undefined,
touchStartTime: undefined,
isScrolling: undefined,
currentTranslate: undefined,
startTranslate: undefined,
allowThresholdMove: undefined,
focusableElements: swiper.params.focusableElements,
lastClickTime: 0,
clickTimeout: undefined,
velocities: [],
allowMomentumBounce: undefined,
startMoving: undefined,
pointerId: null,
touchId: null
},
allowClick: true,
allowTouchMove: swiper.params.allowTouchMove,
touches: {
startX: 0,
startY: 0,
currentX: 0,
currentY: 0,
diff: 0
},
imagesToLoad: [],
imagesLoaded: 0
});
swiper.emit('_swiper');
if (swiper.params.init) {
swiper.init();
}
return swiper;
}
getDirectionLabel(property) {
if (this.isHorizontal()) {
return property;
}
return {
'width': 'height',
'margin-top': 'margin-left',
'margin-bottom ': 'margin-right',
'margin-left': 'margin-top',
'margin-right': 'margin-bottom',
'padding-left': 'padding-top',
'padding-right': 'padding-bottom',
'marginRight': 'marginBottom'
}[property];
}
getSlideIndex(slideEl) {
const {
slidesEl,
params
} = this;
const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slides[0]);
return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slideEl) - firstSlideIndex;
}
getSlideIndexByData(index) {
return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
}
getSlideIndexWhenGrid(index) {
if (this.grid && this.params.grid && this.params.grid.rows > 1) {
if (this.params.grid.fill === 'column') {
index = Math.floor(index / this.params.grid.rows);
} else if (this.params.grid.fill === 'row') {
index = index % Math.ceil(this.slides.length / this.params.grid.rows);
}
}
return index;
}
recalcSlides() {
const swiper = this;
const {
slidesEl,
params
} = swiper;
swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
}
enable() {
const swiper = this;
if (swiper.enabled) return;
swiper.enabled = true;
if (swiper.params.grabCursor) {
swiper.setGrabCursor();
}
swiper.emit('enable');
}
disable() {
const swiper = this;
if (!swiper.enabled) return;
swiper.enabled = false;
if (swiper.params.grabCursor) {
swiper.unsetGrabCursor();
}
swiper.emit('disable');
}
setProgress(progress, speed) {
const swiper = this;
progress = Math.min(Math.max(progress, 0), 1);
const min = swiper.minTranslate();
const max = swiper.maxTranslate();
const current = (max - min) * progress + min;
swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
}
emitContainerClasses() {
const swiper = this;
if (!swiper.params._emitClasses || !swiper.el) return;
const cls = swiper.el.className.split(' ').filter(className => {
return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
});
swiper.emit('_containerClasses', cls.join(' '));
}
getSlideClasses(slideEl) {
const swiper = this;
if (swiper.destroyed) return '';
return slideEl.className.split(' ').filter(className => {
return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
}).join(' ');
}
emitSlidesClasses() {
const swiper = this;
if (!swiper.params._emitClasses || !swiper.el) return;
const updates = [];
swiper.slides.forEach(slideEl => {
const classNames = swiper.getSlideClasses(slideEl);
updates.push({
slideEl,
classNames
});
swiper.emit('_slideClass', slideEl, classNames);
});
swiper.emit('_slideClasses', updates);
}
slidesPerViewDynamic(view, exact) {
if (view === void 0) {
view = 'current';
}
if (exact === void 0) {
exact = false;
}
const swiper = this;
const {
params,
slides,
slidesGrid,
slidesSizesGrid,
size: swiperSize,
activeIndex
} = swiper;
let spv = 1;
if (typeof params.slidesPerView === 'number') return params.slidesPerView;
if (params.centeredSlides) {
let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
let breakLoop;
for (let i = activeIndex + 1; i < slides.length; i += 1) {
if (slides[i] && !breakLoop) {
slideSize += Math.ceil(slides[i].swiperSlideSize);
spv += 1;
if (slideSize > swiperSize) breakLoop = true;
}
}
for (let i = activeIndex - 1; i >= 0; i -= 1) {
if (slides[i] && !breakLoop) {
slideSize += slides[i].swiperSlideSize;
spv += 1;
if (slideSize > swiperSize) breakLoop = true;
}
}
} else {
if (view === 'current') {
for (let i = activeIndex + 1; i < slides.length; i += 1) {
const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
if (slideInView) {
spv += 1;
}
}
} else {
for (let i = activeIndex - 1; i >= 0; i -= 1) {
const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
if (slideInView) {
spv += 1;
}
}
}
}
return spv;
}
update() {
const swiper = this;
if (!swiper || swiper.destroyed) return;
const {
snapGrid,
params
} = swiper;
if (params.breakpoints) {
swiper.setBreakpoint();
}
[...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
if (imageEl.complete) {
processLazyPreloader(swiper, imageEl);
}
});
swiper.updateSize();
swiper.updateSlides();
swiper.updateProgress();
swiper.updateSlidesClasses();
function setTranslate() {
const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
swiper.setTranslate(newTranslate);
swiper.updateActiveIndex();
swiper.updateSlidesClasses();
}
let translated;
if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
setTranslate();
if (params.autoHeight) {
swiper.updateAutoHeight();
}
} else {
if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
translated = swiper.slideTo(slides.length - 1, 0, false, true);
} else {
translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
}
if (!translated) {
setTranslate();
}
}
if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
swiper.checkOverflow();
}
swiper.emit('update');
}
changeDirection(newDirection, needUpdate) {
if (needUpdate === void 0) {
needUpdate = true;
}
const swiper = this;
const currentDirection = swiper.params.direction;
if (!newDirection) {
newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
}
if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
return swiper;
}
swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
swiper.emitContainerClasses();
swiper.params.direction = newDirection;
swiper.slides.forEach(slideEl => {
if (newDirection === 'vertical') {
slideEl.style.width = '';
} else {
slideEl.style.height = '';
}
});
swiper.emit('changeDirection');
if (needUpdate) swiper.update();
return swiper;
}
changeLanguageDirection(direction) {
const swiper = this;
if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
swiper.rtl = direction === 'rtl';
swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
if (swiper.rtl) {
swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
swiper.el.dir = 'rtl';
} else {
swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
swiper.el.dir = 'ltr';
}
swiper.update();
}
mount(element) {
const swiper = this;
if (swiper.mounted) return true;
let el = element || swiper.params.el;
if (typeof el === 'string') {
el = document.querySelector(el);
}
if (!el) {
return false;
}
el.swiper = swiper;
if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
swiper.isElement = true;
}
const getWrapperSelector = () => {
return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
};
const getWrapper = () => {
if (el && el.shadowRoot && el.shadowRoot.querySelector) {
const res = el.shadowRoot.querySelector(getWrapperSelector());
return res;
}
return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
};
let wrapperEl = getWrapper();
if (!wrapperEl && swiper.params.createElements) {
wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
el.append(wrapperEl);
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
wrapperEl.append(slideEl);
});
}
Object.assign(swiper, {
el,
wrapperEl,
slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
hostEl: swiper.isElement ? el.parentNode.host : el,
mounted: true,
rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl',
rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl'),
wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(wrapperEl, 'display') === '-webkit-box'
});
return true;
}
init(el) {
const swiper = this;
if (swiper.initialized) return swiper;
const mounted = swiper.mount(el);
if (mounted === false) return swiper;
swiper.emit('beforeInit');
if (swiper.params.breakpoints) {
swiper.setBreakpoint();
}
swiper.addClasses();
swiper.updateSize();
swiper.updateSlides();
if (swiper.params.watchOverflow) {
swiper.checkOverflow();
}
if (swiper.params.grabCursor && swiper.enabled) {
swiper.setGrabCursor();
}
if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
} else {
swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
}
if (swiper.params.loop) {
swiper.loopCreate(undefined, true);
}
swiper.attachEvents();
const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
if (swiper.isElement) {
lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
}
lazyElements.forEach(imageEl => {
if (imageEl.complete) {
processLazyPreloader(swiper, imageEl);
} else {
imageEl.addEventListener('load', e => {
processLazyPreloader(swiper, e.target);
});
}
});
preload(swiper);
swiper.initialized = true;
preload(swiper);
swiper.emit('init');
swiper.emit('afterInit');
return swiper;
}
destroy(deleteInstance, cleanStyles) {
if (deleteInstance === void 0) {
deleteInstance = true;
}
if (cleanStyles === void 0) {
cleanStyles = true;
}
const swiper = this;
const {
params,
el,
wrapperEl,
slides
} = swiper;
if (typeof swiper.params === 'undefined' || swiper.destroyed) {
return null;
}
swiper.emit('beforeDestroy');
swiper.initialized = false;
swiper.detachEvents();
if (params.loop) {
swiper.loopDestroy();
}
if (cleanStyles) {
swiper.removeClasses();
if (el && typeof el !== 'string') {
el.removeAttribute('style');
}
if (wrapperEl) {
wrapperEl.removeAttribute('style');
}
if (slides && slides.length) {
slides.forEach(slideEl => {
slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
slideEl.removeAttribute('style');
slideEl.removeAttribute('data-swiper-slide-index');
});
}
}
swiper.emit('destroy');
Object.keys(swiper.eventsListeners).forEach(eventName => {
swiper.off(eventName);
});
if (deleteInstance !== false) {
if (swiper.el && typeof swiper.el !== 'string') {
swiper.el.swiper = null;
}
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.y)(swiper);
}
swiper.destroyed = true;
return null;
}
static extendDefaults(newDefaults) {
(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(extendedDefaults, newDefaults);
}
static get extendedDefaults() {
return extendedDefaults;
}
static get defaults() {
return defaults;
}
static installModule(mod) {
if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
const modules = Swiper.prototype.__modules__;
if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
modules.push(mod);
}
}
static use(module) {
if (Array.isArray(module)) {
module.forEach(m => Swiper.installModule(m));
return Swiper;
}
Swiper.installModule(module);
return Swiper;
}
}
Object.keys(prototypes).forEach(prototypeGroup => {
Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
});
});
Swiper.use([Resize, Observer]);
 }),
 "./node_modules/swiper/shared/utils.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   a: function() { return  setCSSProperty; },
   b: function() { return  elementParents; },
   c: function() { return  createElement; },
   d: function() { return  elementOffset; },
   e: function() { return  elementChildren; },
   f: function() { return  now; },
   g: function() { return  getSlideTransformEl; },
   h: function() { return  elementOuterSize; },
   i: function() { return  elementIndex; },
   j: function() { return  classesToTokens; },
   k: function() { return  getTranslate; },
   l: function() { return  elementTransitionEnd; },
   m: function() { return  makeElementsArray; },
   n: function() { return  nextTick; },
   o: function() { return  isObject; },
   p: function() { return  getRotateFix; },
   q: function() { return  elementStyle; },
   r: function() { return  elementNextAll; },
   s: function() { return  setInnerHTML; },
   t: function() { return  elementPrevAll; },
   u: function() { return  animateCSSModeScroll; },
   v: function() { return  showWarning; },
   w: function() { return  elementIsChildOf; },
   x: function() { return  extend; },
   y: function() { return  deleteProps; }
 });
 var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
function classesToTokens(classes) {
if (classes === void 0) {
classes = '';
}
return classes.trim().split(' ').filter(c => !!c.trim());
}
function deleteProps(obj) {
const object = obj;
Object.keys(object).forEach(key => {
try {
object[key] = null;
} catch (e) {
}
try {
delete object[key];
} catch (e) {
}
});
}
function nextTick(callback, delay) {
if (delay === void 0) {
delay = 0;
}
return setTimeout(callback, delay);
}
function now() {
return Date.now();
}
function getComputedStyle(el) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
let style;
if (window.getComputedStyle) {
style = window.getComputedStyle(el, null);
}
if (!style && el.currentStyle) {
style = el.currentStyle;
}
if (!style) {
style = el.style;
}
return style;
}
function getTranslate(el, axis) {
if (axis === void 0) {
axis = 'x';
}
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
let matrix;
let curTransform;
let transformMatrix;
const curStyle = getComputedStyle(el);
if (window.WebKitCSSMatrix) {
curTransform = curStyle.transform || curStyle.webkitTransform;
if (curTransform.split(',').length > 6) {
curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
}
transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
} else {
transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
matrix = transformMatrix.toString().split(',');
}
if (axis === 'x') {
if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
else curTransform = parseFloat(matrix[4]);
}
if (axis === 'y') {
if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
else curTransform = parseFloat(matrix[5]);
}
return curTransform || 0;
}
function isObject(o) {
return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
return node instanceof HTMLElement;
}
return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
const noExtend = ['__proto__', 'constructor', 'prototype'];
for (let i = 1; i < arguments.length; i += 1) {
const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
const nextKey = keysArray[nextIndex];
const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
if (desc !== undefined && desc.enumerable) {
if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
if (nextSource[nextKey].__swiper__) {
to[nextKey] = nextSource[nextKey];
} else {
extend(to[nextKey], nextSource[nextKey]);
}
} else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
to[nextKey] = {};
if (nextSource[nextKey].__swiper__) {
to[nextKey] = nextSource[nextKey];
} else {
extend(to[nextKey], nextSource[nextKey]);
}
} else {
to[nextKey] = nextSource[nextKey];
}
}
}
}
}
return to;
}
function setCSSProperty(el, varName, varValue) {
el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
let {
swiper,
targetPosition,
side
} = _ref;
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const startPosition = -swiper.translate;
let startTime = null;
let time;
const duration = swiper.params.speed;
swiper.wrapperEl.style.scrollSnapType = 'none';
window.cancelAnimationFrame(swiper.cssModeFrameID);
const dir = targetPosition > startPosition ? 'next' : 'prev';
const isOutOfBound = (current, target) => {
return dir === 'next' && current >= target || dir === 'prev' && current <= target;
};
const animate = () => {
time = new Date().getTime();
if (startTime === null) {
startTime = time;
}
const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
if (isOutOfBound(currentPosition, targetPosition)) {
currentPosition = targetPosition;
}
swiper.wrapperEl.scrollTo({
[side]: currentPosition
});
if (isOutOfBound(currentPosition, targetPosition)) {
swiper.wrapperEl.style.overflow = 'hidden';
swiper.wrapperEl.style.scrollSnapType = '';
setTimeout(() => {
swiper.wrapperEl.style.overflow = '';
swiper.wrapperEl.scrollTo({
[side]: currentPosition
});
});
window.cancelAnimationFrame(swiper.cssModeFrameID);
return;
}
swiper.cssModeFrameID = window.requestAnimationFrame(animate);
};
animate();
}
function getSlideTransformEl(slideEl) {
return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
if (selector === void 0) {
selector = '';
}
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const children = [...element.children];
if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
children.push(...element.assignedElements());
}
if (!selector) {
return children;
}
return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
const elementsQueue = [slot];
while (elementsQueue.length > 0) {
const elementToCheck = elementsQueue.shift();
if (el === elementToCheck) {
return true;
}
elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
}
}
function elementIsChildOf(el, parent) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
let isChild = parent.contains(el);
if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
const children = [...parent.assignedElements()];
isChild = children.includes(el);
if (!isChild) {
isChild = elementIsChildOfSlot(el, parent);
}
}
return isChild;
}
function showWarning(text) {
try {
console.warn(text);
return;
} catch (err) {
}
}
function createElement(tag, classes) {
if (classes === void 0) {
classes = [];
}
const el = document.createElement(tag);
el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
return el;
}
function elementOffset(el) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
const box = el.getBoundingClientRect();
const body = document.body;
const clientTop = el.clientTop || body.clientTop || 0;
const clientLeft = el.clientLeft || body.clientLeft || 0;
const scrollTop = el === window ? window.scrollY : el.scrollTop;
const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
return {
top: box.top + scrollTop - clientTop,
left: box.left + scrollLeft - clientLeft
};
}
function elementPrevAll(el, selector) {
const prevEls = [];
while (el.previousElementSibling) {
const prev = el.previousElementSibling; // eslint-disable-line
if (selector) {
if (prev.matches(selector)) prevEls.push(prev);
} else prevEls.push(prev);
el = prev;
}
return prevEls;
}
function elementNextAll(el, selector) {
const nextEls = [];
while (el.nextElementSibling) {
const next = el.nextElementSibling; // eslint-disable-line
if (selector) {
if (next.matches(selector)) nextEls.push(next);
} else nextEls.push(next);
el = next;
}
return nextEls;
}
function elementStyle(el, prop) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
let child = el;
let i;
if (child) {
i = 0;
while ((child = child.previousSibling) !== null) {
if (child.nodeType === 1) i += 1;
}
return i;
}
return undefined;
}
function elementParents(el, selector) {
const parents = []; // eslint-disable-line
let parent = el.parentElement; // eslint-disable-line
while (parent) {
if (selector) {
if (parent.matches(selector)) parents.push(parent);
} else {
parents.push(parent);
}
parent = parent.parentElement;
}
return parents;
}
function elementTransitionEnd(el, callback) {
function fireCallBack(e) {
if (e.target !== el) return;
callback.call(el, e);
el.removeEventListener('transitionend', fireCallBack);
}
if (callback) {
el.addEventListener('transitionend', fireCallBack);
}
}
function elementOuterSize(el, size, includeMargins) {
const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
if (includeMargins) {
return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
}
return el.offsetWidth;
}
function makeElementsArray(el) {
return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
return v => {
if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
return v + 0.001;
}
return v;
};
}
function setInnerHTML(el, html) {
if (html === void 0) {
html = '';
}
if (typeof trustedTypes !== 'undefined') {
el.innerHTML = trustedTypes.createPolicy('html', {
createHTML: s => s
}).createHTML(html);
} else {
el.innerHTML = html;
}
}
 }),
 "./node_modules/swiper/swiper-bundle.mjs":
 (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   Swiper: function() { return  _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; },
   "default": function() { return  _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S; }
 });
 var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
 var _modules_virtual_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
 var _modules_keyboard_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
 var _modules_mousewheel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
 var _modules_navigation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
 var _modules_pagination_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
 var _modules_scrollbar_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
 var _modules_parallax_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
 var _modules_zoom_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
 var _modules_controller_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
 var _modules_a11y_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
 var _modules_history_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/history.mjs */ "./node_modules/swiper/modules/history.mjs");
 var _modules_hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
 var _modules_autoplay_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
 var _modules_thumbs_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
 var _modules_free_mode_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
 var _modules_grid_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
 var _modules_manipulation_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
 var _modules_effect_fade_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
 var _modules_effect_cube_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
 var _modules_effect_flip_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
 var _modules_effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
 var _modules_effect_creative_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
 var _modules_effect_cards_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
const modules = [_modules_virtual_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_keyboard_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_mousewheel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_navigation_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_pagination_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_scrollbar_mjs__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_parallax_mjs__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_zoom_mjs__WEBPACK_IMPORTED_MODULE_8__["default"], _modules_controller_mjs__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_a11y_mjs__WEBPACK_IMPORTED_MODULE_10__["default"], _modules_history_mjs__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_autoplay_mjs__WEBPACK_IMPORTED_MODULE_13__["default"], _modules_thumbs_mjs__WEBPACK_IMPORTED_MODULE_14__["default"], _modules_free_mode_mjs__WEBPACK_IMPORTED_MODULE_15__["default"], _modules_grid_mjs__WEBPACK_IMPORTED_MODULE_16__["default"], _modules_manipulation_mjs__WEBPACK_IMPORTED_MODULE_17__["default"], _modules_effect_fade_mjs__WEBPACK_IMPORTED_MODULE_18__["default"], _modules_effect_cube_mjs__WEBPACK_IMPORTED_MODULE_19__["default"], _modules_effect_flip_mjs__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_effect_creative_mjs__WEBPACK_IMPORTED_MODULE_22__["default"], _modules_effect_cards_mjs__WEBPACK_IMPORTED_MODULE_23__["default"]];
_shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S.use(modules);
 })
},
 function(__webpack_require__) { // webpackRuntimeModules
 var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
 var __webpack_exports__ = (__webpack_exec__("./assets/js/index-noncritical.js"));
 }
]);
(function () {
function initLoadMore() {
document.querySelectorAll('.ajax-collection').forEach(function (collection) {
var nav = collection.querySelector('.ajax-navigation');
if (!nav) return;
var loadMore = nav.querySelector('.ajax-load-more');
if (!loadMore) {
nav.style.display = 'none';
return;
}
loadMore.addEventListener('click', function (e) {
e.preventDefault();
var blockId = loadMore.getAttribute('data-block-id');
var nodeId = loadMore.getAttribute('data-node-id');
var page = parseInt(loadMore.getAttribute('data-page'), 10);
var totalPages = parseInt(nav.getAttribute('data-total-pages'), 10);
if (!blockId || !nodeId || !page || page > totalPages) {
loadMore.style.display = 'none';
nav.style.display = 'none';
return;
}
if (loadMore.getAttribute('aria-busy') === 'true') {
return;
}
loadMore.setAttribute('aria-busy', 'true');
loadMore.classList.add('ajax-loading');
var endpoint = loadMore.getAttribute('data-url') || '/ezjscore/call/expajaxloadmore::loadMore';
var url = endpoint + '::' + encodeURIComponent(blockId) + '::' + encodeURIComponent(page) + '?ContentType=json&node_id=' + encodeURIComponent(nodeId);
fetch(url, {
headers: { 'Accept': 'application/json' }
})
.then(function (response) {
if (!response.ok) throw new Error('Network response was not ok');
return response.json();
})
.then(function (data) {
if (data && data.error_text) throw new Error(data.error_text);
var html = data && data.content ? data.content : '';
if (!html || !html.trim()) {
loadMore.style.display = 'none';
nav.style.display = 'none';
return;
}
var fragment = document.createRange().createContextualFragment(html);
var container = collection.querySelector('.ajax-container');
var isGridRow = container && (container.classList.contains('row') || /(^| )row( |$)/.test(container.className));
if (container && !isGridRow) {
container.appendChild(fragment);
} else {
nav.parentNode.insertBefore(fragment, nav);
}
collection.dispatchEvent(new CustomEvent('ajax-paging-added', { bubbles: true }));
if (page < totalPages) {
loadMore.setAttribute('data-page', page + 1);
nav.setAttribute('data-page', page + 1);
} else {
loadMore.style.display = 'none';
nav.style.display = 'none';
}
})
.catch(function (error) {
window.console && console.error('Load more failed', error);
})
.finally(function () {
loadMore.removeAttribute('aria-busy');
loadMore.classList.remove('ajax-loading');
});
});
});
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initLoadMore);
} else {
initLoadMore();
}
})();
(function () {
'use strict';
var STORAGE_KEY = 'exp-youtube-always';
var ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;
var ALLOW = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
var config = null;
function getConfig() {
if (config === null) {
config = {};
var node = document.getElementById('exp-yt-config');
if (node) {
try {
config = JSON.parse(node.textContent) || {};
} catch (e) {
config = {};
}
}
}
return config;
}
function text(key, fallback) {
var value = getConfig()[key];
return typeof value === 'string' && value !== '' ? value : fallback;
}
function isAllowed() {
try {
return window.localStorage.getItem(STORAGE_KEY) === '1';
} catch (e) {
return false;
}
}
function setAllowed(on) {
try {
if (on) {
window.localStorage.setItem(STORAGE_KEY, '1');
} else {
window.localStorage.removeItem(STORAGE_KEY);
}
} catch (e) {
}
}
function players(root) {
return Array.prototype.slice.call((root || document).querySelectorAll('.js-exp-yt'));
}
function createFrame(id, title, autoplay) {
var frame = document.createElement('iframe');
frame.src = 'https://www.youtube-nocookie.com/embed/' + id + (autoplay ? '?autoplay=1' : '');
frame.title = title || text('frameTitle', 'YouTube video');
frame.width = '770';
frame.height = '433';
frame.setAttribute('frameborder', '0');
frame.setAttribute('allow', ALLOW);
frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
frame.setAttribute('allowfullscreen', '');
if (!autoplay) {
frame.setAttribute('loading', 'lazy');
}
return frame;
}
function enhance(player) {
if (player.getAttribute('data-exp-yt-ready') === '1') {
return;
}
var id = player.getAttribute('data-exp-yt-id') || '';
if (!ID_PATTERN.test(id)) {
return;
}
player.setAttribute('data-exp-yt-ready', '1');
var link = player.querySelector('a.js-exp-yt-play');
if (link) {
var button = document.createElement('button');
button.type = 'button';
button.className = link.className;
button.setAttribute('aria-label', link.getAttribute('data-exp-yt-label') || link.getAttribute('aria-label') || text('play', 'Play video'));
while (link.firstChild) {
button.appendChild(link.firstChild);
}
link.parentNode.replaceChild(button, link);
}
var always = player.querySelector('.exp-yt-always');
if (always) {
always.hidden = false;
}
}
function load(player, autoplay, automatic) {
if (player.classList.contains('is-loaded')) {
return;
}
var id = player.getAttribute('data-exp-yt-id') || '';
var poster = player.querySelector('.js-exp-yt-play');
if (!ID_PATTERN.test(id) || !poster) {
return;
}
var frame = createFrame(id, player.getAttribute('data-exp-yt-title'), autoplay);
player.expYtPoster = poster;
poster.parentNode.replaceChild(frame, poster);
player.classList.add('is-loaded');
player.classList.toggle('is-automatic', !!automatic);
if (autoplay) {
frame.focus();
}
}
function unload(player) {
var frame = player.querySelector('.exp-yt-frame iframe');
if (!frame || !player.expYtPoster) {
return;
}
frame.parentNode.replaceChild(player.expYtPoster, frame);
player.classList.remove('is-loaded', 'is-automatic');
}
function sync() {
var allowed = isAllowed();
players().forEach(function (player) {
var box = player.querySelector('.js-exp-yt-always');
var label = player.querySelector('.exp-yt-always');
var stop = player.querySelector('.js-exp-yt-stop');
if (box) {
box.checked = allowed;
}
if (label) {
label.hidden = allowed;
}
if (stop) {
stop.hidden = !allowed;
}
});
}
function init(root) {
var allowed = isAllowed();
players(root).forEach(function (player) {
enhance(player);
if (allowed) {
load(player, false, true);
}
});
sync();
}
function applyAllowed(on) {
setAllowed(on);
players().forEach(function (player) {
if (on) {
enhance(player);
load(player, false, true);
} else if (player.classList.contains('is-automatic')) {
unload(player);
}
});
sync();
}
function tellBanner(on) {
if (window.ExpCookieConsent && typeof window.ExpCookieConsent.setCategory === 'function') {
window.ExpCookieConsent.setCategory('youtube', on);
}
}
window.expCookieConsentHandlers = window.expCookieConsentHandlers || {};
window.expCookieConsentHandlers.youtube = {
isGranted: isAllowed,
apply: applyAllowed
};
document.addEventListener('click', function (event) {
var play = event.target.closest ? event.target.closest('button.js-exp-yt-play') : null;
if (play) {
var player = play.closest('.js-exp-yt');
if (player) {
event.preventDefault();
load(player, true, false);
}
return;
}
var stop = event.target.closest ? event.target.closest('.js-exp-yt-stop') : null;
if (stop) {
event.preventDefault();
var own = stop.closest('.js-exp-yt');
applyAllowed(false);
tellBanner(false);
var box = own ? own.querySelector('.js-exp-yt-always') : null;
if (box) {
box.focus();
}
}
});
document.addEventListener('change', function (event) {
var box = event.target;
if (!box.classList || !box.classList.contains('js-exp-yt-always')) {
return;
}
applyAllowed(box.checked);
tellBanner(box.checked);
if (box.checked) {
var stop = box.closest('.js-exp-yt') ? box.closest('.js-exp-yt').querySelector('.js-exp-yt-stop') : null;
if (stop) {
stop.focus();
}
}
});
function escapeHtml(value) {
return String(value).replace(/[&<>"']/g, function (c) {
return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
});
}
function modalMarkup(id, title, thumbnail) {
if (!ID_PATTERN.test(String(id || ''))) {
return '';
}
if (isAllowed()) {
var wrap = document.createElement('div');
wrap.className = 'video-youtube iframe-video ratio ratio-16x9';
wrap.appendChild(createFrame(id, title, true));
return wrap.outerHTML;
}
var label = title ? text('playTitle', 'Play video: %title').replace('%title', title) : text('play', 'Play video');
var privacy = getConfig().privacyUrl
? '<a href="' + escapeHtml(getConfig().privacyUrl) + '">' + escapeHtml(text('privacyLabel', 'Privacy policy')) + '</a>'
: escapeHtml(text('privacyLabel', 'Privacy policy'));
var notice = escapeHtml(text('notice', 'Playing this video loads it from YouTube (Google). See our %privacy_link.'))
.replace('%privacy_link', privacy);
var thumb = thumbnail || getConfig().placeholder || '';
return '<div class="exp-yt js-exp-yt exp-yt-modal" data-exp-yt-id="' + escapeHtml(id) + '" data-exp-yt-title="' + escapeHtml(title || '') + '" data-exp-yt-ready="1">' +
'<div class="exp-yt-frame video-youtube ratio ratio-16x9">' +
'<button type="button" class="exp-yt-poster js-exp-yt-play" aria-label="' + escapeHtml(label) + '">' +
(thumb ? '<img src="' + escapeHtml(thumb) + '" alt="" width="480" height="360">' : '') +
'<span class="exp-yt-play" aria-hidden="true"></span>' +
(title ? '<span class="exp-yt-title" aria-hidden="true">' + escapeHtml(title) + '</span>' : '') +
'</button></div>' +
'<div class="exp-yt-consent"><p class="exp-yt-notice">' + notice + '</p>' +
'<label class="exp-yt-always"><input type="checkbox" class="js-exp-yt-always"> ' + escapeHtml(text('always', 'Always allow YouTube videos on this site')) + '</label>' +
'<button type="button" class="exp-yt-stop js-exp-yt-stop" hidden>' + escapeHtml(text('stop', 'Stop loading YouTube automatically')) + '</button>' +
'</div></div>';
}
window.ExpYouTubeConsent = {
init: init,
isAllowed: isAllowed,
setAllowed: applyAllowed,
modalMarkup: modalMarkup
};
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', function () { init(document); });
} else {
init(document);
}
}());
(function () {
'use strict';
var COOKIE = 'ng-cc-consent';
var OLD_COOKIES = ['ng-cc-accepted', 'ng-cc-analytics', 'ng-cc-marketing'];
var MAX_AGE = 180 * 24 * 60 * 60;
var NAME_PATTERN = /^[a-z][a-z0-9_-]{0,31}$/;
var OPEN_HASH = '#cookie-settings';
var banner = null;
var panel = null;
var settingsButton = null;
var config = { version: '1' };
var handlers = {};
var returnFocus = null;
function readCookie(name) {
var parts = (document.cookie || '').split(';');
for (var i = 0; i < parts.length; i++) {
var part = parts[i].replace(/^\s+/, '');
if (part.indexOf(name + '=') === 0) {
return part.substring(name.length + 1);
}
}
return null;
}
function attributes(maxAge) {
var value = '; Path=/; SameSite=Lax; Max-Age=' + maxAge;
if (maxAge > 0) {
value += '; Expires=' + new Date(Date.now() + maxAge * 1000).toUTCString();
} else {
value += '; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
if (window.location.protocol === 'https:') {
value += '; Secure';
}
return value;
}
function dropOldCookies() {
OLD_COOKIES.forEach(function (name) {
if (readCookie(name) !== null) {
document.cookie = name + '=' + attributes(0);
}
});
}
function stored() {
var raw = readCookie(COOKIE);
if (!raw) {
return null;
}
var match = /^v([0-9A-Za-z_-]+)\.([a-z0-9_+-]+)$/.exec(raw);
if (!match || match[1] !== String(config.version)) {
return null;
}
var categories = match[2] === 'rejected' ? [] : match[2].split('+').filter(function (name) {
return NAME_PATTERN.test(name) && name !== 'rejected';
});
return { version: match[1], categories: categories, rejected: categories.length === 0 };
}
function write(categories) {
var list = categories.filter(function (name, index) {
return NAME_PATTERN.test(name) && categories.indexOf(name) === index;
}).sort();
var value = 'v' + config.version + '.' + (list.length ? list.join('+') : 'rejected');
document.cookie = COOKIE + '=' + value + attributes(MAX_AGE);
var detail = { version: String(config.version), categories: list, rejected: list.length === 0 };
var event;
try {
event = new CustomEvent('exp:cookie-consent', { detail: detail });
} catch (e) {
event = document.createEvent('CustomEvent');
event.initCustomEvent('exp:cookie-consent', false, false, detail);
}
document.dispatchEvent(event);
return detail;
}
function collectHandlers() {
var queued = window.expCookieConsentHandlers || {};
Object.keys(queued).forEach(function (name) {
register(name, queued[name], true);
});
}
function register(name, handler, quiet) {
if (!NAME_PATTERN.test(name) || !handler || typeof handler.apply !== 'function' || typeof handler.isGranted !== 'function') {
return false;
}
handlers[name] = handler;
if (!quiet) {
showCategories();
}
return true;
}
function categoryRows() {
return banner ? Array.prototype.slice.call(banner.querySelectorAll('[data-exp-cc-category]')) : [];
}
function available() {
return categoryRows().map(function (row) {
return row.getAttribute('data-exp-cc-category');
}).filter(function (name) {
return Object.prototype.hasOwnProperty.call(handlers, name);
});
}
function showCategories() {
categoryRows().forEach(function (row) {
row.hidden = !Object.prototype.hasOwnProperty.call(handlers, row.getAttribute('data-exp-cc-category'));
});
}
function box(name) {
return banner ? banner.querySelector('[data-exp-cc-category="' + name + '"] input[type="checkbox"]') : null;
}
function fillBoxes() {
var choice = stored();
available().forEach(function (name) {
var input = box(name);
if (input) {
input.checked = choice ? choice.categories.indexOf(name) !== -1 : !!handlers[name].isGranted();
}
});
}
function save(accepted) {
var names = available();
names.forEach(function (name) {
var on = accepted.indexOf(name) !== -1;
if (!!handlers[name].isGranted() !== on) {
handlers[name].apply(on);
}
});
write(accepted.filter(function (name) {
return names.indexOf(name) !== -1;
}));
}
function setCategory(name, on) {
var choice = stored();
if (!choice) {
return;
}
var list = choice.categories.filter(function (item) {
return item !== name;
});
if (on) {
list.push(name);
}
write(list);
var input = box(name);
if (input) {
input.checked = !!on;
}
}
function reconcile(choice) {
var drift = false;
available().forEach(function (name) {
var recorded = choice.categories.indexOf(name) !== -1;
var actual = !!handlers[name].isGranted();
if (actual && !recorded) {
handlers[name].apply(false);
} else if (recorded && !actual) {
drift = true;
}
});
if (drift) {
write(choice.categories.filter(function (name) {
return !Object.prototype.hasOwnProperty.call(handlers, name) || handlers[name].isGranted();
}));
}
}
function setPanel(open) {
if (!panel || !settingsButton) {
return;
}
panel.hidden = !open;
settingsButton.setAttribute('aria-expanded', open ? 'true' : 'false');
banner.classList.toggle('is-expanded', open);
var saveButton = banner.querySelector('[data-exp-cc-action="save"]');
if (saveButton) {
saveButton.hidden = !open;
}
}
function open(withSettings, trigger) {
if (!banner) {
return;
}
returnFocus = trigger || (document.activeElement !== document.body ? document.activeElement : null);
fillBoxes();
setPanel(!!withSettings);
banner.classList.toggle('has-choice', stored() !== null);
banner.hidden = false;
document.documentElement.classList.add('exp-cc-open');
window.requestAnimationFrame(function () {
banner.classList.add('is-open');
});
try {
banner.focus({ preventScroll: true });
} catch (e) {
banner.focus();
}
}
function close() {
if (!banner || banner.hidden) {
return;
}
banner.classList.remove('is-open');
banner.hidden = true;
document.documentElement.classList.remove('exp-cc-open');
var target = returnFocus;
returnFocus = null;
if (target && document.contains(target) && typeof target.focus === 'function') {
target.focus();
} else if (banner.contains(document.activeElement)) {
document.activeElement.blur();
}
if (window.location.hash === OPEN_HASH && window.history && window.history.replaceState) {
window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
}
function onAction(action) {
if (action === 'accept') {
save(available());
close();
} else if (action === 'reject') {
save([]);
close();
} else if (action === 'save') {
save(available().filter(function (name) {
var input = box(name);
return input && input.checked;
}));
close();
} else if (action === 'settings') {
var opening = panel.hidden;
setPanel(opening);
if (opening) {
var first = panel.querySelector('[data-exp-cc-category]:not([hidden]) input:not([disabled])');
if (first) {
first.focus();
}
}
} else if (action === 'close') {
close();
}
}
function isOpener(element) {
if (!element || !element.closest) {
return null;
}
var opener = element.closest('.js-open-ng-cc, .js-exp-cc-open');
if (opener) {
return opener;
}
var link = element.closest('a[href]');
if (link && link.hash === OPEN_HASH && link.pathname === window.location.pathname) {
return link;
}
return null;
}
function bind() {
banner.addEventListener('click', function (event) {
var button = event.target.closest ? event.target.closest('[data-exp-cc-action]') : null;
if (button && banner.contains(button)) {
event.preventDefault();
onAction(button.getAttribute('data-exp-cc-action'));
}
});
banner.addEventListener('keydown', function (event) {
if (event.key !== 'Escape' && event.key !== 'Esc') {
return;
}
if (panel && !panel.hidden && stored() === null) {
setPanel(false);
settingsButton.focus();
event.preventDefault();
} else if (stored() !== null) {
close();
event.preventDefault();
}
});
document.addEventListener('click', function (event) {
var opener = isOpener(event.target);
if (opener) {
event.preventDefault();
open(true, opener);
}
});
window.addEventListener('hashchange', function () {
if (window.location.hash === OPEN_HASH) {
open(true, null);
}
});
Array.prototype.slice.call(document.querySelectorAll('.js-open-ng-cc, .js-exp-cc-open')).forEach(function (link) {
link.setAttribute('aria-haspopup', 'dialog');
link.setAttribute('aria-controls', banner.id);
});
}
function readConfig() {
var node = document.getElementById('exp-cc-config');
if (node) {
try {
var parsed = JSON.parse(node.textContent) || {};
if (parsed.version !== undefined && /^[0-9A-Za-z_-]{1,16}$/.test(String(parsed.version))) {
config.version = String(parsed.version);
}
} catch (e) {
}
}
}
function init() {
banner = document.getElementById('exp-cc');
dropOldCookies();
readConfig();
collectHandlers();
if (!banner) {
return;
}
panel = document.getElementById('exp-cc-panel');
settingsButton = banner.querySelector('[data-exp-cc-action="settings"]');
showCategories();
bind();
var choice = stored();
if (choice) {
reconcile(choice);
}
if (!choice) {
open(false, null);
} else if (window.location.hash === OPEN_HASH) {
open(true, null);
}
}
window.ExpCookieConsent = {
open: function () { open(true, null); },
close: close,
get: stored,
has: function (name) {
var choice = stored();
return !!choice && choice.categories.indexOf(name) !== -1;
},
register: register,
setCategory: setCategory
};
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}
}());
(function () {
'use strict';
function field() {
return document.querySelector('input[data-exp-autofocus]');
}
function idle() {
var active = document.activeElement;
return !active || active === document.body || active === document.documentElement;
}
function focusField() {
var input = field();
if (!input || !idle()) {
return;
}
try {
input.focus({ preventScroll: true });
} catch (e) {
input.focus();
}
}
function init() {
if (!field()) {
return;
}
focusField();
document.addEventListener('exp:cookie-consent', function () {
window.setTimeout(focusField, 0);
});
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}
}());
(function () {
'use strict';
if (window.expPageActionsSetUp) return;
window.expPageActionsSetUp = true;
function closest(el, selector) {
while (el && el.nodeType === 1) {
if (el.matches(selector)) return el;
el = el.parentNode;
}
return null;
}
document.addEventListener('click', function (e) {
var back = closest(e.target, 'a[data-exp-history-back]');
if (back) {
e.preventDefault();
history.back();
return;
}
var reload = closest(e.target, 'a[data-exp-reload]');
if (reload) {
e.preventDefault();
location.reload();
}
});
document.addEventListener('change', function (e) {
var box = e.target;
if (!box || !box.matches || !box.matches('input[data-exp-check-all]')) return;
var boxes = document.querySelectorAll(box.getAttribute('data-exp-check-all'));
for (var i = 0; i < boxes.length; i++) {
if (boxes[i] !== box) boxes[i].checked = box.checked;
}
});
document.addEventListener('submit', function (e) {
var form = e.target;
if (!form || !form.hasAttribute || !form.hasAttribute('data-exp-disable-on-submit')) return;
var ids = form.getAttribute('data-exp-disable-on-submit').split(/\s+/);
window.setTimeout(function () {
for (var i = 0; i < ids.length; i++) {
var button = ids[i] && document.getElementById(ids[i]);
if (button) button.disabled = true;
}
}, 0);
});
}());
(function () {
'use strict';
var root = document.documentElement;
var SEARCH_OPEN = 'searchbox-active';
var NAV_OPEN = 'mainnav-active';
function init() {
var header = document.querySelector('.site-header');
if (!header) return;
var searchButton = header.querySelector('.searchbox-toggle');
var navButton = header.querySelector('.mainnav-toggle');
var userButton = document.getElementById('header-user-toggle');
var panel = document.getElementById('header-user-menu');
var wrap = userButton ? userButton.parentNode : null;
function links() {
return panel ? Array.prototype.filter.call(panel.querySelectorAll('a[href]'), function (a) {
return a.offsetParent !== null;
}) : [];
}
function userOpen() {
return !!userButton && userButton.getAttribute('aria-expanded') === 'true';
}
function setUser(state, focusButton) {
if (!userButton || !panel) return;
userButton.setAttribute('aria-expanded', state ? 'true' : 'false');
panel.hidden = !state;
if (state) {
closeSearch(false);
root.classList.remove(NAV_OPEN);
if (navButton) navButton.setAttribute('aria-expanded', 'false');
} else if (focusButton) {
userButton.focus();
}
}
function closeSearch(focusButton) {
root.classList.remove(SEARCH_OPEN);
if (searchButton) {
searchButton.setAttribute('aria-expanded', 'false');
if (focusButton) searchButton.focus();
}
}
if (searchButton && window.MutationObserver) {
new MutationObserver(function () {
var open = root.classList.contains(SEARCH_OPEN);
if ((searchButton.getAttribute('aria-expanded') === 'true') !== open) {
searchButton.setAttribute('aria-expanded', open ? 'true' : 'false');
}
}).observe(root, { attributes: true, attributeFilter: ['class'] });
}
if (searchButton) {
searchButton.addEventListener('click', function () {
if (userOpen()) setUser(false, false);
});
}
if (userButton && panel) {
userButton.addEventListener('click', function () {
setUser(!userOpen(), false);
});
userButton.addEventListener('keydown', function (e) {
if (e.key !== 'ArrowDown') return;
e.preventDefault();
setUser(true, false);
var first = links()[0];
if (first) first.focus();
});
panel.addEventListener('keydown', function (e) {
var list = links(), i = list.indexOf(document.activeElement), next = null;
if (e.key === 'ArrowDown') next = list[Math.min(list.length - 1, i + 1)];
else if (e.key === 'ArrowUp') next = i <= 0 ? null : list[i - 1];
else if (e.key === 'Home') next = list[0];
else if (e.key === 'End') next = list[list.length - 1];
else return;
e.preventDefault();
if (next) next.focus(); else if (e.key === 'ArrowUp') userButton.focus();
});
wrap.addEventListener('focusout', function (e) {
if (userOpen() && e.relatedTarget && !wrap.contains(e.relatedTarget)) setUser(false, false);
});
document.addEventListener('click', function (e) {
if (userOpen() && !wrap.contains(e.target)) setUser(false, false);
});
}
document.addEventListener('keydown', function (e) {
if (e.key !== 'Escape' || e.defaultPrevented) return;
var active = document.activeElement;
if (userOpen()) {
e.preventDefault();
setUser(false, active === userButton || panel.contains(active));
return;
}
if (root.classList.contains(SEARCH_OPEN)) {
var search = searchButton ? searchButton.closest('.header-search') : null;
e.preventDefault();
closeSearch(!!search && search.contains(active));
}
});
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
