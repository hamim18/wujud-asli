const CACHE = "objectif-v2";
const ASSETS = [
  "/display.html",
  "/control.html",
  "/live.html",
  "/activate.html",
  "/manifest-display.json",
  "/manifest-control.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.url.includes("firebase") || e.request.url.includes("googleapis")) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
