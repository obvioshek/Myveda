"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LAST_HREF_KEY, LAST_KEY, useDevice } from "@/components/landing/device";
import { useDone } from "./progress";

export type MenuChapter = { slug: string; href: string; n: number; title: string; group: string; ids: string[] };
export type MenuUnit = { id: string; n: number; short: string; groups: { key: string; label: string }[]; chapters: MenuChapter[] };

// The header's chapter menu on wide screens: the units on the left, the chosen
// unit's chapters on the right in their groups, so the panel only ever shows one
// unit and always fits on screen. It opens on click (not on hover), closes on
// Escape, an outside click or a chosen link, and opens on the current chapter's
// unit, or else the one the reader was last in. On narrow screens "Chapters" is
// a plain link to the chapter index.
export default function ChapterPanel({ units, href, more }: { units: MenuUnit[]; href: string; more: { href: string; label: string }[] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const done = useDone();
  const last = useDevice(LAST_KEY);
  const lastHref = useDevice(LAST_HREF_KEY);

  const lastSlug = lastHref.split("#")[0];
  const lastUnit = units.find(u => u.chapters.some(c => c.href === lastSlug))?.id;
  const hereUnit = units.find(u => u.chapters.some(c => c.href === path))?.id;
  const active = units.find(u => u.id === (chosen ?? hereUnit ?? lastUnit)) ?? units[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panel.current?.contains(t) && !btn.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onDown); };
  }, [open]);

  const state = (c: MenuChapter) => {
    const n = c.ids.filter(id => done.has(id)).length;
    return n === 0 ? "" : n === c.ids.length ? "done" : "started";
  };
  const finished = (u: MenuUnit) => u.chapters.filter(c => state(c) === "done").length;

  // Units the syllabus has but the site does not yet (for example 3 to 5).
  const have = new Set(units.map(u => u.n));
  const max = Math.max(...have);
  const missing = Array.from({ length: max }, (_, i) => i + 1).filter(n => !have.has(n));

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const j = (i + step + units.length) % units.length;
    setChosen(units[j].id);
    tabs.current[j]?.focus();
  };

  return (
    <div className="cmx-wrap">
      <a className="cmx-link" href={href}>Chapters</a>
      <button ref={btn} type="button" className={open ? "cmx-btn on" : "cmx-btn"} aria-expanded={open} aria-controls="cmx-panel" onClick={() => setOpen(o => !o)}>
        Chapters
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={open ? "chev up" : "chev"}><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div ref={panel} id="cmx-panel" className="menu-panel cmx" hidden={!open} onClick={e => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        <div className="wrap cmx-in">
          <div className="cmx-side">
            <div className="cmx-units" role="tablist" aria-orientation="vertical" aria-label="Units">
              {units.map((u, i) => {
                const f = finished(u);
                return (
                  <button
                    key={u.id}
                    ref={el => { tabs.current[i] = el; }}
                    type="button"
                    role="tab"
                    id={`cmx-tab-${u.id}`}
                    aria-selected={active.id === u.id}
                    aria-controls={`cmx-p-${u.id}`}
                    tabIndex={active.id === u.id ? 0 : -1}
                    className="cmx-unit"
                    onClick={() => setChosen(u.id)}
                    onKeyDown={e => onKey(e, i)}
                  >
                    <span className="cmx-un">Unit {u.n}</span>
                    <span className="cmx-ut">{u.short}</span>
                    <span className="cmx-uc">{f ? `${f} of ${u.chapters.length} done` : `${u.chapters.length} chapters`}</span>
                  </button>
                );
              })}
            </div>
            {missing.length > 0 && <p className="cmx-soon">Unit{missing.length > 1 ? "s" : ""} {missing.length > 1 ? `${missing[0]} to ${missing[missing.length - 1]}` : missing[0]} {missing.length > 1 ? "are" : "is"} being written.</p>}
            <div className="cmx-more">
              {more.map(m => <Link key={m.href} href={m.href} prefetch={false}>{m.label}</Link>)}
            </div>
          </div>

          <div className="cmx-main">
            {last && lastHref && (
              <Link className="cmx-cont" href={lastHref} prefetch={false}>
                <span className="label red">Continue</span><b>{last}</b>
              </Link>
            )}
            <div role="tabpanel" id={`cmx-p-${active.id}`} aria-labelledby={`cmx-tab-${active.id}`} className="cmx-groups" style={{ "--cols": Math.min(active.groups.length, 3) } as React.CSSProperties}>
              {active.groups.map(g => (
                <div key={g.key} className="cmx-group">
                  <span className="label red">{g.label}</span>
                  <ol>
                    {active.chapters.filter(c => c.group === g.key).map(c => {
                      const s = state(c);
                      return (
                        <li key={c.slug}>
                          <Link href={c.href} prefetch={false} aria-current={c.href === path ? "page" : undefined}>
                            <span className="cmx-n">{c.n}</span>
                            <span className="cmx-t">{c.title}</span>
                            {s && <span className={`cmx-s ${s}`} role="img" aria-label={s === "done" ? "finished" : "started"} />}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
