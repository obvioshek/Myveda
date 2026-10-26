"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// A thin red line along the top of the screen while the next page loads, so a
// tap on a link answers at once even on a slow connection. It appears only if
// the page takes more than a moment, finishes when the new page is in place,
// and gives up after ten seconds. Same-page links and downloads don't start it.
export default function NavProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const clear = () => { timers.current.forEach(t => window.clearTimeout(t)); timers.current = []; };
    // Capture phase: Next.js links cancel the browser's navigation, so by the
    // time the click bubbles up it already looks handled.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return;
      clear();
      timers.current.push(
        window.setTimeout(() => bar.current?.classList.add("on"), 120),
        window.setTimeout(() => bar.current?.classList.remove("on", "end"), 10_000),
      );
    };
    document.addEventListener("click", onClick, true);
    return () => { document.removeEventListener("click", onClick, true); clear(); };
  }, []);

  useEffect(() => {
    timers.current.forEach(t => window.clearTimeout(t));
    timers.current = [];
    const el = bar.current;
    if (!el?.classList.contains("on")) return;
    el.classList.add("end");
    const t = window.setTimeout(() => el.classList.remove("on", "end"), 450);
    return () => window.clearTimeout(t);
  }, [path]);

  return <div ref={bar} className="nav-progress" aria-hidden="true" />;
}
