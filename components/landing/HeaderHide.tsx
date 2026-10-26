"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { pushLayer, type Layer } from "./layer";

// On phones the header slides away while the reader scrolls down and comes
// back as soon as they scroll up, so the text gets the screen. It stays put
// near the top of the page, while its menu is open, and while anything in it
// has keyboard focus (a tap leaves focus there too, but shouldn't pin it).
// The CSS (landing.css, "The Menu") does the moving.
export default function HeaderHide() {
  const router = useRouter();
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
    // On touch screens Back closes the Menu (components/landing/layer.ts), and
    // a page chosen while it is open replaces its history entry, so Back from
    // that page returns to this one, not to this one with the Menu shut.
    let layer: Layer | null = null;
    // Closing takes the Menu's entry off at once, not when the browser's
    // toggle event comes, so a layer opened by the same tap (search) is added
    // after it.
    const shut = (m: HTMLDetailsElement) => {
      m.open = false;
      const l = layer;
      layer = null;
      l?.close();
    };
    const onKey = (e: KeyboardEvent) => {
      const m = menu();
      if (e.key !== "Escape" || !m) return;
      shut(m);
      m.querySelector("summary")?.focus();
    };
    const onDown = (e: MouseEvent) => {
      const m = menu();
      const t = e.target as HTMLElement;
      // The dimmed page under the Menu counts as outside it. A link tapped
      // outside the Menu (in the header) is handled on click, below.
      if (m && (!m.contains(t) || t.classList.contains("pmenu-scrim")) && !t.closest("a[href]")) shut(m);
    };
    const onToggle = (e: Event) => {
      const m = e.target as HTMLElement;
      if (!(m instanceof HTMLDetailsElement) || !m.matches("details.pmenu")) return;
      if (m.open && !layer) layer = pushLayer(() => { layer = null; m.open = false; });
      else if (!m.open && layer) { const l = layer; layer = null; l.close(); }
    };
    const onClick = (e: MouseEvent) => {
      const m = menu();
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!m || !a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === "_blank" || a.origin !== location.origin) return;
      const l = layer;
      layer = null;
      m.open = false;
      if (l?.leave()) { e.preventDefault(); router.replace(a.pathname + a.search + a.hash); }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    phone.addEventListener("change", onScroll);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("toggle", onToggle, true);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      phone.removeEventListener("change", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("toggle", onToggle, true);
      document.removeEventListener("click", onClick, true);
      layer?.close();
      if (frame) cancelAnimationFrame(frame);
      set(false);
    };
  }, [router]);
  return null;
}
