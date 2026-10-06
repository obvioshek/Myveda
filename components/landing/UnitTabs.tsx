"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Arrow from "./Arrow";
import Progress from "@/components/learn/Progress";
import { LAST_HREF_KEY, useDevice } from "./device";

export type TabUnit = {
  id: string; n: number; title: string; blurb: string;
  chapters: { slug: string; href: string; n: string; title: string; minutes: number; ids: string[] }[];
};

// One unit at a time instead of a wall of every chapter. The tab opens on the
// unit the reader was last in, if this device remembers one; each chapter shows
// how far the reader has got. Every panel is in the page, so the links are there
// without JavaScript too.
export default function UnitTabs({ units }: { units: TabUnit[] }) {
  const last = useDevice(LAST_HREF_KEY);
  const [chosen, setChosen] = useState<string | null>(null);
  const lastUnit = units.find(u => u.chapters.some(c => last.split("#")[0] === c.href))?.id;
  const active = chosen ?? lastUnit ?? units[0].id;
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const j = (i + step + units.length) % units.length;
    setChosen(units[j].id);
    tabs.current[j]?.focus();
  };

  return (
    <div className="ut">
      <div className="ut-tabs" role="tablist" aria-label="Units" style={{ "--tabs": units.length } as React.CSSProperties}>
        {units.map((u, i) => (
          <button
            key={u.id}
            ref={el => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`ut-tab-${u.id}`}
            aria-selected={active === u.id}
            aria-controls={`ut-panel-${u.id}`}
            tabIndex={active === u.id ? 0 : -1}
            className="ut-tab"
            onClick={() => setChosen(u.id)}
            onKeyDown={e => onKey(e, i)}
          >
            <span className="ut-n">Unit {u.n}</span>
            <span className="ut-t">{u.title}</span>
            <span className="ut-c">{u.chapters.length} chapters</span>
          </button>
        ))}
      </div>
      {units.map(u => (
        <div key={u.id} role="tabpanel" id={`ut-panel-${u.id}`} aria-labelledby={`ut-tab-${u.id}`} hidden={active !== u.id} className="ut-panel">
          <p className="ut-blurb">{u.blurb}</p>
          <ol className="grid g3 chap">
            {u.chapters.map(c => (
              <li key={c.slug} className="cell chap-c">
                <Link href={c.href} prefetch={false}>
                  <span className="chap-n" lang="sa" aria-hidden="true">{c.n}</span>
                  <span className="chap-body"><span className="chap-t">{c.title}</span><span className="chap-meta">{c.minutes} min<Progress ids={c.ids} compact /></span></span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
