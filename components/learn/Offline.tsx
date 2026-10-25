"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// Offline reading. OfflineSupport registers the service worker (public/sw.js)
// in production and shows a quiet note while the reader is offline. SaveOffline,
// on the chapters page, asks the worker to keep every chapter at once.

const PAGES = "vv-pages-v1";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => { window.removeEventListener("online", onChange); window.removeEventListener("offline", onChange); };
}
const useOnline = () => useSyncExternalStore(subscribe, () => navigator.onLine, () => true);

export function OfflineSupport() {
  const online = useOnline();
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    const register = () => { navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => { /* reading online still works */ }); };
    if (document.readyState === "complete") register();
    else { window.addEventListener("load", register, { once: true }); return () => window.removeEventListener("load", register); }
  }, []);
  if (online) return null;
  return <p className="off-note" role="status">You’re offline. Pages you’ve opened or saved still work.</p>;
}

type State = { saved: number } | { saving: number; failed: number } | { error: string } | null;

/** `chapters` are the chapter pages; `extra` the other pages and data to keep with them. */
export function SaveOffline({ chapters, extra }: { chapters: string[]; extra: string[] }) {
  const paths = [...chapters, ...extra];
  const [state, setState] = useState<State>(null);
  const [supported, setSupported] = useState(false);
  const online = useOnline();

  // How many chapters are already kept, read from the cache.
  const count = async () => {
    const c = await caches.open(PAGES);
    const have = new Set((await c.keys()).map(r => new URL(r.url).pathname));
    return chapters.filter(p => have.has(p)).length;
  };

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("caches" in window) || process.env.NODE_ENV !== "production") return;
    let live = true;
    const t = setTimeout(async () => {
      setSupported(true);
      try { const n = await count(); if (live) setState({ saved: n }); } catch { /* leave it unknown */ }
    }, 0);
    return () => { live = false; clearTimeout(t); };
    // count depends only on paths, which come from the server and don't change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!supported) return null;

  const save = async () => {
    try {
      const reg = await navigator.serviceWorker.ready;
      if (!reg.active) throw new Error("no worker");
      setState({ saving: 0, failed: 0 });
      const channel = new MessageChannel();
      channel.port1.onmessage = async e => {
        const m = e.data as { type: string; done: number; failed: number };
        if (m.type === "progress") setState({ saving: m.done, failed: m.failed });
        if (m.type === "done") setState(m.failed ? { error: `${m.failed} couldn’t be saved. Try again when the connection is steadier.` } : { saved: await count() });
      };
      reg.active.postMessage({ type: "save", paths }, [channel.port2]);
    } catch {
      setState({ error: "Saving didn’t start. Reload the page and try again." });
    }
  };

  const total = chapters.length;
  return (
    <div className="off-save">
      <p className="ci-fine">
        {state && "saving" in state ? <>Saving… {Math.min(state.saving, total)} of {total} chapters.</>
          : state && "error" in state ? state.error
          : state && state.saved === total ? <>All {total} chapters, the glossary, revision sheets, formulas and practice are saved for reading offline on this device.</>
          : <>Reading on patchy data? Save every chapter on this device, a few megabytes, to read offline. {state && state.saved > 0 && `${state.saved} of ${total} are saved already.`}</>}
      </p>
      {!(state && "saving" in state) && !(state && "saved" in state && state.saved === total) && (
        <button type="button" className="btn btn-secondary" disabled={!online} onClick={save}>{online ? "Save all chapters" : "Go online to save"}</button>
      )}
    </div>
  );
}
