"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/landing";
import BrandMark from "./Brand";
import SiteSearch from "@/components/learn/SiteSearch";

// Sticky header with a thin red reading-progress rule along its foot and a
// native <details> menu on small screens.
export default function Header({ chaptersPanel, chaptersList }: { chaptersPanel: React.ReactNode; chaptersList: React.ReactNode }) {
  const bar = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDetailsElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
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
          {NAV.map(n => n.href === "#chapters"
            ? <div key={n.href} className="has-menu"><a href={n.href}>{n.label}</a>{chaptersPanel}</div>
            : <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="top-end">
          <SiteSearch />
          <Link className="btn btn-primary" href="/learn">Start reading</Link>
          <details className="mnav" ref={menu}>
            <summary aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
            </summary>
            <nav aria-label="Sections (mobile)">
              {NAV.map(n => n.href === "#chapters"
                ? <details key={n.href} className="mnav-sub"><summary>{n.label}</summary>{chaptersList}</details>
                : <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
            </nav>
          </details>
        </div>
      </div>
      <div className="progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
