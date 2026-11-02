
(function () {
'use strict';
if (window.expServiceWorkerSetUp || !('serviceWorker' in navigator)) return;
window.expServiceWorkerSetUp = true;
var sessionCookie = '';
try {
var conf = document.getElementById('exp-sw-config');
sessionCookie = (conf && JSON.parse(conf.textContent).sessionCookie) || '';
} catch (e) {  }
var jar = document.cookie || '';
var personal = sessionCookie !== ''
&& new RegExp('(?:^|;\\s*)' + sessionCookie + '=[^;]+').test(jar);
function tell(signedIn) {
if (navigator.serviceWorker.controller) {
navigator.serviceWorker.controller.postMessage(
{ type: 'session', signedIn: signedIn });
}
}
tell(personal);
navigator.serviceWorker.ready.then(function () { tell(personal); })
.catch(function () {});
if (personal) return;
function register() {
navigator.serviceWorker.register('/index.js', { scope: '/' })
.catch(function () { return navigator.serviceWorker.register('/sw.js', { scope: '/' }); })
.then(function () { tell(false); })
.catch(function () {  });
}
if (document.readyState === 'complete') register();
else window.addEventListener('load', register);
}());
