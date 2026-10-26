// Offline reading for the learning pages. Registered by components/learn/Offline.tsx
// in production only.
//
// - A learning page (/, /learn and below, /privacy) is fetched from the network
//   first and a copy is kept; with no network, the kept copy is shown. Pages
//   the reader hasn't opened (or saved with "Save all chapters") show a short
//   offline note instead.
// - Built files (/_next/static, /fonts) never change at an address, so they
//   are served from the cache once fetched.
// - The question bank and search index are served from the cache and refreshed
//   in the background.
// - Nothing else is touched: the app (/home, /signin and the rest), its data
//   and anything that isn't a GET go straight to the network, as without this.

const VERSION = "v1";
const PAGES = `vv-pages-${VERSION}`;
const FILES = `vv-files-${VERSION}`;
const DATA = `vv-data-${VERSION}`;
const MAX_FILES = 1500;

const isPage = p => p === "/" || p === "/learn" || p.startsWith("/learn/") || p === "/hi" || p.startsWith("/hi/") || p === "/privacy";
const isFile = p => p.startsWith("/_next/static/") || p.startsWith("/fonts/") || p === "/favicon.ico" || /^\/(icon|apple-icon)[^/]*$/.test(p);
const isData = p => p === "/practice-bank.json" || p === "/search-index.json";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keep = new Set([PAGES, FILES, DATA]);
    for (const k of await caches.keys()) if (k.startsWith("vv-") && !keep.has(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});

// Pages are kept under their path alone, so "/learn/x#y" and "/learn/x" share one copy.
const pageKey = url => new Request(url.origin + url.pathname);

async function trim(name, max) {
  const c = await caches.open(name);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}

const offlinePage = () => new Response(
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline · Veda Verse</title>
<style>body{margin:0;background:#f2f2f2;color:#222;font:17px/1.6 system-ui,sans-serif}main{max-width:36rem;margin:15vh auto;padding:0 20px}h1{font-size:28px;line-height:1.2}a{color:#b42318;font-weight:700}</style></head>
<body><main><h1>You’re offline, and this page isn’t saved.</h1><p>Pages you have opened before still work. To keep every chapter for reading offline, use “Save all chapters” on the chapters page next time you’re online.</p><p><a href="/learn">Go to the chapters</a></p></main></body></html>`,
  { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } },
);

async function page(request, url) {
  const cache = await caches.open(PAGES);
  try {
    const res = await fetch(request);
    if (res.ok && res.type === "basic" && (res.headers.get("Content-Type") ?? "").includes("text/html")) await cache.put(pageKey(url), res.clone());
    return res;
  } catch {
    return (await cache.match(pageKey(url))) ?? offlinePage();
  }
}

async function file(request) {
  const cache = await caches.open(FILES);
  const hit = await cache.match(request);
  if (hit) return hit;
  const res = await fetch(request);
  if (res.ok && res.type === "basic") { await cache.put(request, res.clone()); trim(FILES, MAX_FILES); }
  return res;
}

async function data(event, request) {
  const cache = await caches.open(DATA);
  const hit = await cache.match(request);
  const fresh = fetch(request).then(async res => { if (res.ok) await cache.put(request, res.clone()); return res; });
  if (hit) { event.waitUntil(fresh.catch(() => {})); return hit; }
  return fresh;
}

self.addEventListener("fetch", event => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // The app's own data requests (React Server Component payloads) and
  // prefetches are left to the network; offline, Next.js falls back to a full
  // page load, which is answered below.
  if (url.searchParams.has("_rsc") || request.headers.get("RSC")) return;
  if (request.mode === "navigate" && isPage(url.pathname)) event.respondWith(page(request, url));
  else if (isFile(url.pathname)) event.respondWith(file(request));
  else if (isData(url.pathname)) event.respondWith(data(event, request));
});

// "Save all chapters": the page sends the list of addresses to keep.
self.addEventListener("message", event => {
  const msg = event.data;
  if (!msg || msg.type !== "save" || !Array.isArray(msg.paths)) return;
  const port = event.ports[0];
  event.waitUntil((async () => {
    const cache = await caches.open(PAGES);
    let done = 0, failed = 0;
    for (const p of msg.paths.slice(0, 500)) {
      if (typeof p !== "string") continue;
      try {
        const url = new URL(p, self.location.origin);
        // Data files go in their own cache, as the page would fetch them.
        if (isData(url.pathname)) {
          const res = await fetch(url);
          if (!res.ok) throw new Error(String(res.status));
          await (await caches.open(DATA)).put(url.pathname, res);
          done++;
          port?.postMessage({ type: "progress", done, failed, total: msg.paths.length });
          continue;
        }
        if (!isPage(url.pathname)) continue;
        const res = await fetch(url, { credentials: "same-origin" });
        if (!res.ok) throw new Error(String(res.status));
        await cache.put(pageKey(url), res.clone());
        // Fetch the page's own scripts and styles too, so it works offline as a page.
        const html = await res.text();
        const assets = [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+)"/g)].map(m => m[1]);
        const files = await caches.open(FILES);
        for (const a of new Set(assets)) if (!(await files.match(a))) { try { const r = await fetch(a); if (r.ok) await files.put(a, r); } catch { /* next time */ } }
        done++;
      } catch {
        failed++;
      }
      port?.postMessage({ type: "progress", done, failed, total: msg.paths.length });
    }
    port?.postMessage({ type: "done", done, failed, total: msg.paths.length });
  })());
});
