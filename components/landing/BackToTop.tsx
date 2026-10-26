"use client";

import { useEffect, useRef } from "react";

// "Back to top", in the corner where a thumb reaches, once the reader is more
// than two screens down a long page. It moves focus to the page's start too,
// so keyboard and screen-reader users land where they asked to go.
export default function BackToTop() {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      frame = 0;
      const far = window.scrollY > window.innerHeight * 2;
      // The practice page docks its own button in that corner.
      const busy = !!document.querySelector(".pr-dock");
      btn.current?.classList.toggle("on", far && !busy);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  const up = () => {
    window.scrollTo({ top: 0 });
    document.getElementById("main")?.focus({ preventScroll: true });
  };
  return (
    <button ref={btn} type="button" className="to-top" title="Back to top" onClick={up}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg>
      <span className="sr-only">Back to top</span>
    </button>
  );
}
