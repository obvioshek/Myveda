"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import type { SearchEntry, SearchKind } from "@/content/learn/search";

const LABEL: Record<SearchKind, string> = { concept: "Concept", term: "Glossary", chapter: "Chapter", passage: "Ancient lens" };
const RANK: Record<SearchKind, number> = { chapter: 8, concept: 6, term: 5, passage: 3 };
const START = ["Fayol's 14 principles", "Motivation", "Elasticity of Demand", "Leadership", "SWOT Analysis", "Product Life Cycle"];

// Plain letters only, so "kautilya" finds Kauṭilya and "gita" finds Gītā.
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

type Row = SearchEntry & { ft: string; fs: string; fx: string };

function rank(rows: Row[], query: string): Row[] {
  const tokens = fold(query).split(/[^a-z0-9]+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored: [Row, number][] = [];
  for (const r of rows) {
    let total = 0;
    for (const tok of tokens) {
      let m = 0;
      if (r.ft === tok) m = 120;
      else if (r.ft.startsWith(tok)) m = 100;
      else if (r.ft.includes(` ${tok}`)) m = 80;
      else if (r.ft.includes(tok)) m = 60;
      else if (r.fs.includes(tok)) m = 25;
      else if (r.fx.includes(tok)) m = 15;
      if (!m) { total = 0; break; }
      total += m;
    }
    if (total) scored.push([r, total + RANK[r.k]]);
  }
  return scored.sort((a, b) => b[1] - a[1]).slice(0, 8).map(x => x[0]);
}

// Search over every concept, glossary term, chapter and classical passage on the
// site. It sits in the header on every page: the button opens a box, results
// come as you type, and a result takes you to the right part of the right page.
export default function SiteSearch() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const show = useCallback(() => {
    setOpen(true);
    if (rows) return;
    fetch("/search-index.json")
      .then(r => r.json())
      .then((all: SearchEntry[]) => setRows(all.map(e => ({ ...e, ft: fold(e.t), fs: fold(e.s), fx: fold(e.x) }))))
      .catch(() => setRows([]));
  }, [rows]);

  const hide = useCallback(() => {
    setOpen(false);
    setQ("");
    setActive(0);
    button.current?.focus();
  }, []);

  // "/" opens the search from anywhere that isn't a text field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      e.preventDefault();
      show();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [open]);

  const results = useMemo(() => (rows ? rank(rows, q) : []), [rows, q]);
  const starts = useMemo(() => (rows ? START.map(t => rows.find(r => r.t.toLowerCase() === t.toLowerCase())).filter((r): r is Row => !!r) : []), [rows]);
  const list = q.trim() ? results : starts;

  const go = (e: SearchEntry) => {
    setOpen(false);
    setQ("");
    setActive(0);
    router.push(e.h);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { e.preventDefault(); hide(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min(a + 1, Math.max(list.length - 1, 0))); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && list[active]) { e.preventDefault(); go(list[active]); }
  };

  const status = !open ? "" : rows === null ? "Loading…" : q.trim() ? (list.length ? `${list.length} result${list.length === 1 ? "" : "s"}` : "No results") : "";

  return (
    <>
      <button ref={button} type="button" className="srch-btn" aria-haspopup="dialog" aria-expanded={open} aria-keyshortcuts="/" onClick={show}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        <span className="srch-lbl">Search</span>
      </button>

      {open && (
        <div className="srch" role="dialog" aria-modal="true" aria-label="Search concepts" onKeyDown={onKeyDown}>
          <div className="srch-bd" onClick={hide} />
          <div className="srch-panel">
            <div className="srch-row">
              <input
                ref={input}
                className="input"
                type="search"
                role="combobox"
                aria-expanded={list.length > 0}
                aria-controls={listId}
                aria-activedescendant={list[active] ? `${listId}-${active}` : undefined}
                aria-label="Search any concept"
                placeholder="Search a concept, term or chapter"
                autoComplete="off"
                value={q}
                onChange={e => { setQ(e.target.value); setActive(0); }}
              />
              <button type="button" className="srch-x" aria-label="Close search" onClick={hide}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <span className="sr-only" role="status" aria-live="polite">{status}</span>
            {!q.trim() && list.length > 0 && <span className="label srch-h">Start with</span>}
            <ul className="srch-list" id={listId} role="listbox" aria-label="Results">
              {list.map((r, i) => (
                <li key={`${r.k}-${r.h}-${r.t}`} id={`${listId}-${i}`} role="option" aria-selected={i === active} className={i === active ? "on" : undefined} onMouseMove={() => setActive(i)} onClick={() => go(r)}>
                  <span className="srch-t">{r.t}</span>
                  <span className="srch-k">{LABEL[r.k]}</span>
                  <span className="srch-s">{r.s}</span>
                </li>
              ))}
            </ul>
            {q.trim() && rows && list.length === 0 && (
              <p className="srch-none">Nothing on “{q.trim()}” yet. <Link href="/learn" onClick={() => setOpen(false)}>Browse all chapters</Link>, or try a shorter word.</p>
            )}
            <p className="srch-foot">Press <kbd>/</kbd> to search from any page. <kbd>↑</kbd> <kbd>↓</kbd> to move, <kbd>Enter</kbd> to open, <kbd>Esc</kbd> to close.</p>
          </div>
        </div>
      )}
    </>
  );
}
