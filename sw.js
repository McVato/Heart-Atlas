/* Segmental Heart Atlas - offline support.
   On install, every file of the app is stored on the device; afterwards the app opens from that copy, with or without a
   connection. To publish an update, change the files and bump VERSION below: devices pick up the new copy on their next
   online visit and use it from the visit after that. */
const VERSION = "atlas-2026-11-09";
const FILES = ["./", "index.html", "manifest.webmanifest", "jspdf.umd.min.js", "svg2pdf.umd.min.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).catch(() => caches.match("index.html")))
  );
});
