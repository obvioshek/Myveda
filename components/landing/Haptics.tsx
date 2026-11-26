"use client";

import { useEffect } from "react";

// A touch is answered in the hand as well as on the screen, on phones that
// can: one short tick when an answer is chosen or a concept is marked done,
// two when the answer is wrong. It listens once for the whole page, so parts
// only need the class they already have (or data-haptic). Phones without a
// vibration motor, and readers who ask for less motion, get nothing.
export default function Haptics() {
  useEffect(() => {
    if (typeof navigator.vibrate !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(".ck-opt, [data-haptic]");
      if (!el) return;
      // The answer's class is set by the click itself; read it once it has been drawn.
      requestAnimationFrame(() => { try { navigator.vibrate(el.classList.contains("wrong") ? [10, 60, 10] : 10); } catch { /* not allowed here */ } });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
