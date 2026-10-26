"use client";

import Link from "next/link";
import { useState } from "react";
import Arrow from "@/components/landing/Arrow";

// One chapter at the centre: the chapters whose ideas it builds on, and the
// ones that build on it. Choosing any of them moves it to the centre.
export type MapNode = { slug: string; title: string; unitN: number; uses: { slug: string; n: number }[]; usedBy: { slug: string; n: number }[] };

export default function MapExplorer({ nodes, start }: { nodes: MapNode[]; start: string }) {
  const [at, setAt] = useState(start);
  const by = new Map(nodes.map(n => [n.slug, n]));
  const c = by.get(at) ?? nodes[0];
  const units = [...new Set(nodes.map(n => n.unitN))];
  const side = (list: { slug: string; n: number }[], label: string, empty: string) => (
    <div className="mx-side">
      <span className="label">{label}</span>
      {list.length === 0 ? <p className="ci-fine">{empty}</p> : (
        <ul>
          {list.map(l => {
            const o = by.get(l.slug)!;
            return (
              <li key={l.slug}>
                <button type="button" onClick={() => setAt(l.slug)}><b>{o.title}</b><span>Unit {o.unitN} · {l.n} shared terms</span><span className="sr-only">Put it at the centre.</span><Arrow /></button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
  return (
    <div className="mxp">
      <div className="tl-f mxp-pick">
        <label htmlFor="mxp-ch">Put a chapter at the centre</label>
        <span className="tl-hint" id="mxp-hint">Or choose one of its neighbours below.</span>
        <div className="tl-in"><select id="mxp-ch" aria-describedby="mxp-hint" value={c.slug} onChange={e => setAt(e.target.value)}>
          {units.map(u => (
            <optgroup key={u} label={`Unit ${u}`}>
              {nodes.filter(n => n.unitN === u).map(n => <option key={n.slug} value={n.slug}>{n.title}</option>)}
            </optgroup>
          ))}
        </select></div>
      </div>
      <div className="mxp-grid" aria-live="polite">
        {side(c.uses, "Builds on", "It doesn't lean on another chapter's terms: a good place to start.")}
        <div className="mxp-c">
          <span className="label red">Unit {c.unitN}</span>
          <b>{c.title}</b>
          <Link className="more" href={`/learn/${c.slug}`} prefetch={false}>Open the chapter<Arrow /></Link>
        </div>
        {side(c.usedBy, "Leads to", "No later chapter uses its terms much.")}
      </div>
    </div>
  );
}
