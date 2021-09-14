self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("install", function (event) {
  console.log("Hello world from the Service Worker 🤙");
});
