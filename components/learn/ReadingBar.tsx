"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDone } from "./progress";

type Item = { id: string; name: string };
type Term = { id: string; term: string; def: string };
type Ch = { href: string; n: string; title: string; current: boolean };

const Tick = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
);

// The chapter's one piece of navigation: a slim strip that sticks under the site
// header, naming the concept in view, how many are done, and a hairline for how
// far through the chapter the reader is. "Contents" opens the concepts, the
// chapter's terms and the unit's chapters; picking one, Escape or a click
// elsewhere closes it.
export default function ReadingBar({ slug, items, terms, unitLabel, chapters, glossary }: {
  slug: string; items: Item[]; terms: Term[]; unitLabel: string; chapters: Ch[]; glossary: string;
}) {
  const [at, setAt] = useState(0);
  const [open, setOpen] = useState(false);
  const done = useDone();
  const box = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const els = items.map(it => document.getElementById(it.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    let frame = 0;
    const pick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.33;
        let i = 0;
        els.forEach((el, j) => { if (el.getBoundingClientRect().top <= line) i = j; });
        setAt(i);
      });
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", pick); window.removeEventListener("resize", pick); };
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); button.current?.focus(); } };
    const click = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", click);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("mousedown", click); };
  }, [open]);

  const cur = items[at];
  const doneN = items.filter(it => done.has(`${slug}#${it.id}`)).length;
  const pct = items.length ? ((at + 1) / items.length) * 100 : 0;
  const close = () => setOpen(false);

  return (
    <div className="rb" ref={box}>
      <div className="rb-in">
        {cur ? (
          <a className="rb-now" href={`#${cur.id}`}>
            <span className="rb-n">{String(at + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <span className="rb-t">{cur.name}</span>
          </a>
        ) : <span />}
        <span className="rb-done">{doneN === 0 ? "" : doneN === items.length ? "All done" : `${doneN} of ${items.length} done`}</span>
        <button ref={button} type="button" className="rb-btn" aria-expanded={open} aria-controls="rb-panel" onClick={() => setOpen(o => !o)}>
          Contents
          <svg className={open ? "chev up" : "chev"} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>
      <div className="rb-line" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>

      <div className="rb-panel" id="rb-panel" hidden={!open}>
        <nav className="rb-col" aria-label="Concepts in this chapter">
          <span className="label red">In this chapter</span>
          <ol className="rb-list">
            {items.map((it, i) => {
              const isDone = done.has(`${slug}#${it.id}`);
              return (
                <li key={it.id}>
                  <a href={`#${it.id}`} onClick={close} aria-current={i === at ? "location" : undefined}>
                    <span className="rb-ln" aria-hidden="true">{isDone ? <Tick /> : String(i + 1).padStart(2, "0")}</span>
                    <span>{it.name}{isDone && <span className="sr-only"> (done)</span>}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
        {terms.length > 0 && (
          <div className="rb-col">
            <span className="label red">Terms · {terms.length}</span>
            <ul className="rb-terms">
              {terms.map(t => (
                <li key={t.id}>
                  <details>
                    <summary>{t.term}</summary>
                    <p>{t.def} <Link href={`${glossary}#${t.id}`} prefetch={false} onClick={close}>Glossary</Link></p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        )}
        <nav className="rb-col" aria-label={unitLabel}>
          <span className="label red">{unitLabel}</span>
          <ol className="rb-list">
            {chapters.map(c => (
              <li key={c.href}>
                <Link href={c.href} prefetch={false} onClick={close} aria-current={c.current ? "page" : undefined}>
                  <span className="rb-ln rb-deva" lang="sa" aria-hidden="true">{c.n}</span><span>{c.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
