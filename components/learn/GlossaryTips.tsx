"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type TipTerm = { term: string; def: string; href: string; chapter: string | null; chapterHref: string | null };

// Glossary terms in a chapter's text are links to the glossary (see
// content/learn/term-links.ts). On the chapter page, tapping one opens a small
// card beside it with the definition instead, so the reader keeps their place.
// Escape, a tap elsewhere or the close button puts it away, and focus goes back
// to the term.
export default function GlossaryTips({ terms }: { terms: Record<string, TipTerm> }) {
  const [open, setOpen] = useState<{ id: string; el: HTMLElement } | null>(null);
  const [pos, setPos] = useState<{ top: number; left: number; above: boolean } | null>(null);
  const card = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const close = useCallback((focus: boolean) => {
    setOpen(o => { if (o && focus) o.el.focus({ preventScroll: true }); return null; });
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a.gt[data-term]");
      if (a) {
        const id = a.dataset.term ?? "";
        if (!terms[id]) return;
        e.preventDefault();
        setOpen(o => (o?.el === a ? null : { id, el: a }));
        return;
      }
      if (card.current && !card.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [terms]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(true); };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus({ preventScroll: true });
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Place the card under the term, or above it when there's no room below,
  // kept inside the window. It is positioned in the page, so it scrolls with
  // the text.
  useLayoutEffect(() => {
    if (!open || !card.current) { setPos(null); return; }
    const place = () => {
      const r = open.el.getBoundingClientRect();
      const w = card.current!.offsetWidth, h = card.current!.offsetHeight;
      const left = Math.min(Math.max(12, r.left), window.innerWidth - w - 12) + window.scrollX;
      const above = r.bottom + h + 16 > window.innerHeight && r.top - h - 16 > 80;
      const top = (above ? r.top - h - 8 : r.bottom + 8) + window.scrollY;
      setPos({ top, left, above });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [open]);

  if (!open) return null;
  const t = terms[open.id];
  // In <body>, so the page's own layout can't clip or offset it.
  return createPortal(
    <div
      ref={card}
      className={pos?.above ? "gt-card above" : "gt-card"}
      role="dialog"
      aria-labelledby={titleId}
      style={pos ? { top: pos.top, left: pos.left } : { top: -9999, left: 0 }}
    >
      <div className="gt-head">
        <span className="label red">Glossary</span>
        <button type="button" className="gt-x" ref={closeRef} onClick={() => close(true)} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
      </div>
      <p className="gt-term" id={titleId}>{t.term}</p>
      <p className="gt-def">{t.def}</p>
      <div className="gt-links">
        {t.chapterHref && <Link className="link" href={t.chapterHref} prefetch={false}>Read it in {t.chapter}</Link>}
        <Link className="link" href={t.href} prefetch={false}>Open in the glossary</Link>
      </div>
    </div>,
    document.body,
  );
}
