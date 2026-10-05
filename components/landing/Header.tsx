"use client";

import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/landing";
import Arrow from "./Arrow";
import BrandMark from "./Brand";
import { LAST_KEY, useDevice } from "./device";

export interface Account { href: string; label: string }

// Sticky header with a thin reading-progress bar. A returning visitor, known
// only from this device, sees a quiet "Continue" link back to their concept.
export default function Header({ account }: { account: Account | null }) {
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDetailsElement>(null);
  const last = useDevice(LAST_KEY);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const d = document.documentElement;
      const max = d.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) * 100 : 0;
      if (bar.current) bar.current.style.width = `${pct}%`;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const close = () => { if (menu.current) menu.current.open = false; };

  return (
    <header className={scrolled ? "top scrolled" : "top"}>
      <div className="top-in">
        <a className="brand" href="#top" aria-label="Veda Verse, back to top"><BrandMark />Veda Verse</a>
        <nav className="top-links" aria-label="Sections">
          {NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="top-end">
          {last && <a className="continue" href="#s2">Continue: {last}<Arrow size={15} /></a>}
          {account && <a className="btn btn-ghost hide-md" href={account.href}>{account.label === "Sign in" ? "Sign in (optional)" : account.label}</a>}
          <a className="btn btn-primary" href="#s2">Start reading</a>
          <details className="mnav" ref={menu}>
            <summary aria-label="Menu">Menu</summary>
            <nav aria-label="Sections (mobile)">
              {last && <a className="mnav-continue" href="#s2" onClick={close}>Continue: {last}</a>}
              {NAV.map(n => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
              {account && <a href={account.href} onClick={close}>{account.label === "Sign in" ? "Sign in (optional)" : account.label}</a>}
            </nav>
          </details>
        </div>
      </div>
      <div className="progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
