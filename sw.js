importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'images'
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css|)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources'
  })
);
