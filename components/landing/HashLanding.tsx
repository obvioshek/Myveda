"use client";

import { useEffect } from "react";

// Long pages (the revision sheets, formulas, glossary, chapters) skip drawing
// sections far off screen (content-visibility), estimating their height. The
// browser's jump to an address's #part is worked out from those estimates, so
// it can land thousands of pixels away once the real sections are drawn. This
// settles on the part: it scrolls to it until it stops moving, for at most a
// second, and gives way as soon as the reader scrolls, taps or types. A page
// opened at a #part draws every section from the start (data-landing, set in
// the layout), so there the browser's own jump is already right.
export default function HashLanding() {
  useEffect(() => {
    let frame = 0;
    const stop = () => { cancelAnimationFrame(frame); frame = 0; };
    const settle = () => {
      stop();
      let id = window.location.hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* keep it as written */ }
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      let tries = 0, stable = 0, last = Number.NaN;
      const step = () => {
        el.scrollIntoView({ block: "start", behavior: "instant" });
        const top = el.getBoundingClientRect().top;
        stable = Math.abs(top - last) < 1 ? stable + 1 : 0;
        last = top;
        frame = stable < 4 && ++tries < 60 ? requestAnimationFrame(step) : 0;
      };
      frame = requestAnimationFrame(step);
    };
    settle();
    window.addEventListener("hashchange", settle);
    for (const ev of ["wheel", "touchstart", "keydown", "mousedown"]) window.addEventListener(ev, stop, { passive: true });
    return () => {
      stop();
      delete document.documentElement.dataset.landing;
      window.removeEventListener("hashchange", settle);
      for (const ev of ["wheel", "touchstart", "keydown", "mousedown"]) window.removeEventListener(ev, stop);
    };
  }, []);
  return null;
}
