"use client";

import { useEffect } from "react";

// On phones the header slides away while the reader scrolls down and comes
// back as soon as they scroll up, so the text gets the screen. It stays put
// near the top of the page, while its menu is open, and while anything in it
// has keyboard focus (a tap leaves focus there too, but shouldn't pin it).
// The CSS (landing.css, "The Menu") does the moving.
export default function HeaderHide() {
  useEffect(() => {
    const root = document.documentElement;
    const phone = window.matchMedia("(max-width: 759px)");
    let last = window.scrollY;
    let frame = 0;
    const set = (hidden: boolean) => {
      if (hidden) root.dataset.hdr = "hidden";
      else delete root.dataset.hdr;
    };
    const tick = () => {
      frame = 0;
      const y = window.scrollY;
      const header = document.querySelector<HTMLElement>("header.top");
      const focus = document.activeElement;
      const keyboard = !!focus && header?.contains(focus) && focus.matches(":focus-visible");
      const busy = !!header && (keyboard || !!header.querySelector("details[open]"));
      if (!phone.matches || y < 120 || busy) set(false);
      else if (y > last + 6) set(true);
      else if (y < last - 6) set(false);
      last = y;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(tick); };

    // The Menu closes on Escape (focus goes back to its button) and on a click
    // anywhere outside it, as the other panels do.
    const menu = () => document.querySelector<HTMLDetailsElement>("details.pmenu[open]");
    const onKey = (e: KeyboardEvent) => {
      const m = menu();
      if (e.key !== "Escape" || !m) return;
      m.open = false;
      m.querySelector("summary")?.focus();
    };
    const onDown = (e: MouseEvent) => {
      const m = menu();
      if (m && !m.contains(e.target as Node)) m.open = false;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    phone.addEventListener("change", onScroll);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      phone.removeEventListener("change", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      if (frame) cancelAnimationFrame(frame);
      set(false);
    };
  }, []);
  return null;
}
