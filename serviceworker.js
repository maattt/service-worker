self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/my-sw/',
        '/my-sw/index.html',
        '/my-sw/image.jpg',
        '/my-sw/application.js',
        '/my-sw/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fromCache(event.request));
});

function fromCache(request) {
  return caches.open("v2").then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}