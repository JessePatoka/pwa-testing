importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

function showRefreshUI(registration) {}

if (workbox) {
  console.log('workbox loaded!');
  workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst());
}
