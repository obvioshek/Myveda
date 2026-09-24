"use client";

import { useEffect, useRef, useState } from "react";
import { NAV } from "@/content/landing";

export interface Account { href: string; label: string }

// Sticky header: a hairline once the page scrolls, the section in view marked
// as current, and a native <details> menu on small screens.
export default function Header({ account }: { account: Account | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!("IntersectionObserver" in window)) return () => window.removeEventListener("scroll", onScroll);
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setCurrent("#" + e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(n => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const close = () => { if (menu.current) menu.current.open = false; };

  return (
    <header className={scrolled ? "top scrolled" : "top"} id="top">
      <div className="wrap">
        <a className="brand" href="#main" aria-label="My Veda Verse, back to top">
          <span className="mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><circle cx="12" cy="6.3" r="2.5" fill="currentColor" /></svg>
          </span>
          My Veda Verse
        </a>
        <nav className="nav" aria-label="Sections">
          {NAV.map(n => <a key={n.href} href={n.href} aria-current={current === n.href ? "true" : undefined}>{n.label}</a>)}
        </nav>
        <details className="mnav" ref={menu}>
          <summary aria-label="Menu">Menu</summary>
          <nav aria-label="Sections (mobile)">
            {NAV.map(n => <a key={n.href} href={n.href} onClick={close}>{n.label}</a>)}
            {account && <a href={account.href} onClick={close}>{account.label}</a>}
          </nav>
        </details>
        {account && <a className="signin hide-md" href={account.href}>{account.label}</a>}
        <a className="btn btn-primary btn-sm" href="#join"><span>Join<span className="hide-sm"> the early list</span></span></a>
      </div>
    </header>
  );
}
