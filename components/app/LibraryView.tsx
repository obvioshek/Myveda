"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/app/AppProvider";
import { useServerState } from "@/components/app/useServerState";
import { Chip, Chips } from "@/components/app/bits";
import { setSaveNote, toggleSave } from "@/actions/app/marks";
import { addToCollection, createCollection, deleteCollection, removeFromCollection, setKeepHistory } from "@/actions/app/library";
import { deleteDraft } from "@/actions/app/compose";
import { LABELS, type Basis } from "@/lib/app/labels";
import type { LibraryData, Resolved } from "@/lib/app/library";

const TABS = ["Saved", "Collections", "Drafts", "History"] as const;
const FILTERS: ("all" | Basis)[] = ["all", "asking", "documented", "lived", "told", "view"];

export default function LibraryView({ lib, tab }: { lib: LibraryData; tab: (typeof TABS)[number] }) {
  const { run, toast, prompt, openCompose } = useApp();
  const [filter, setFilter] = useState<"all" | Basis>("all");
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const [keep, setKeep] = useServerState(lib.keepHistory);

  const saved = lib.saved.filter(s => !removed.has(`${s.item.type}:${s.item.id}`) && (filter === "all" || s.item.bases.includes(filter)));

  return (
    <div className="col w720" style={{ gap: 20 }}>
      <h1 className="page-title desk-only">Library</h1>
      <div className="seg" role="tablist" aria-label="Library">
        {TABS.map(t => <Link key={t} role="tab" aria-selected={tab === t} href={t === "Saved" ? "/library" : `/library?tab=${t.toLowerCase()}`}>{t}</Link>)}
      </div>

      {tab === "Saved" && (
        <>
          <div className="wrap-chips" role="group" aria-label="Filter by label">
            {FILTERS.map(k => (
              <button key={k} type="button" className="pill" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                {filter === k ? "✓ " : ""}{k === "all" ? "All" : LABELS[k].name}
              </button>
            ))}
          </div>
          {saved.map(s => (
            <SavedRow key={`${s.item.type}:${s.item.id}`} item={s.item} note={s.note} collections={lib.collections}
              onRemove={async () => {
                const key = `${s.item.type}:${s.item.id}`;
                setRemoved(new Set([...removed, key]));
                const r = await run(toggleSave(s.item.type, s.item.id));
                if (!r.ok) { setRemoved(prev => { const n = new Set(prev); n.delete(key); return n; }); return; }
                toast("Removed from Saved.", async () => {
                  await run(toggleSave(s.item.type, s.item.id));
                  if (s.note) await run(setSaveNote(s.item.type, s.item.id, s.note));
                  setRemoved(prev => { const n = new Set(prev); n.delete(key); return n; });
                });
              }} />
          ))}
          {saved.length === 0 && <p className="muted" style={{ fontSize: 15 }}>Nothing saved with this label. Tap Save on any post to keep it here.</p>}
        </>
      )}

      {tab === "Collections" && (
        <>
          {lib.collections.map(c => (
            <div key={c.id} className="row static">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <b style={{ flex: 1 }}>{c.name}</b>
                <button className="btn btn-ghost act" type="button" style={{ padding: "4px 8px", fontSize: 13 }} onClick={async () => {
                  if ((await run(deleteCollection(c.id))).ok) toast(`Deleted “${c.name}”. The saved items stay in Saved.`);
                }}>Delete</button>
              </div>
              <span className="sub" style={{ fontSize: 12, marginTop: 2 }}>{c.visibility}</span>
              {c.items.length === 0 && <span className="sub" style={{ fontSize: 14 }}>Empty. Add saved items to it from the Saved tab.</span>}
              {c.items.map(it => (
                <div key={`${it.type}:${it.id}`} style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
                  <Link href={it.href} className="clamp2" style={{ flex: 1, fontSize: 14 }}>{it.title}</Link>
                  <button className="btn btn-ghost act" type="button" aria-label={`Remove from ${c.name}`} style={{ padding: "2px 8px" }} onClick={() => run(removeFromCollection(c.id, it.type, it.id))}>×</button>
                </div>
              ))}
            </div>
          ))}
          <div className="btns">
            <button className="btn btn-secondary" type="button" onClick={async () => {
              const name = await prompt({ title: "New collection", placeholder: "Name it", submit: "Create" });
              if (!name) return;
              if ((await run(createCollection(name, "private"))).ok) toast("New collection created.");
            }}>New collection</button>
            {lib.circles.length > 0 && (
              <button className="btn btn-secondary" type="button" onClick={async () => {
                const name = await prompt({ title: `New collection for ${lib.circles[0].name}`, body: "Members of the circle will be able to see it.", placeholder: "Name it", submit: "Create" });
                if (!name) return;
                if ((await run(createCollection(name, lib.circles[0].id))).ok) toast(`Collection shared with ${lib.circles[0].name}.`);
              }}>New collection for {lib.circles[0].name}</button>
            )}
          </div>
        </>
      )}

      {tab === "Drafts" && (
        <>
          {lib.drafts.map(d => (
            <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--color-divider)" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {d.draft.intent === "asking" && <Chip basis="asking" />}
                <div style={{ fontSize: 16, marginTop: 6 }} className="clamp2">{d.draft.text}</div>
                <div className="sub">Saved {d.when}</div>
              </div>
              <button className="btn btn-secondary" type="button" onClick={() => openCompose(d.draft)}>Continue</button>
              <button className="btn btn-ghost act" type="button" onClick={() => run(deleteDraft(d.id))}>Delete</button>
            </div>
          ))}
          {lib.drafts.length === 0 && <p className="muted" style={{ fontSize: 15 }}>No drafts. Anything you start writing is kept here until you post it.</p>}
        </>
      )}

      {tab === "History" && (
        <>
          <label className="check">
            <input type="checkbox" checked={keep} onChange={async () => {
              const next = !keep; setKeep(next);
              const r = await run(setKeepHistory(next));
              if (!r.ok) setKeep(!next);
              else if (!next) toast("History is off, and what was recorded is gone.");
            }} />Keep my reading history
          </label>
          {keep ? lib.history.map(h => (
            h.href
              ? <Link key={h.key} className="row" href={h.href}>{h.title}<span className="sub">{h.when}</span></Link>
              : <div key={h.key} className="row static">{h.title}<span className="sub">{h.when}</span></div>
          )) : <p className="muted" style={{ fontSize: 15 }}>History is off. Nothing you read is recorded.</p>}
          {keep && lib.history.length === 0 && <p className="muted">Nothing read yet.</p>}
        </>
      )}
    </div>
  );
}

function SavedRow({ item, note, collections, onRemove }: {
  item: Resolved; note: string; collections: LibraryData["collections"]; onRemove: () => void;
}) {
  const { run, toast } = useApp();
  const [value, setValue] = useState(note);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const t = setTimeout(() => run(setSaveNote(item.type, item.id, value)), 700);
    return () => clearTimeout(t);
  }, [value, item.type, item.id, run]);
  return (
    <div className="stack" style={{ gap: 8, padding: "16px 0", borderBottom: "1px solid var(--color-divider)" }}>
      <div className="post-meta" style={{ gap: 8 }}>
        <Chips bases={item.bases} />{item.meta}
        {collections.length > 0 && (
          <select className="input" aria-label="Add to a collection" value="" style={{ width: "auto", marginLeft: "auto", minHeight: 30, fontSize: 13 }} onChange={async e => {
            const id = e.target.value; if (!id) return;
            const r = await run(addToCollection(id, item.type, item.id));
            if (r.ok) toast(`Added to ${r.name}.`);
          }}>
            <option value="">Add to collection…</option>
            {collections.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        )}
        <button className="btn btn-ghost" type="button" onClick={onRemove} style={{ marginLeft: collections.length ? 0 : "auto", color: "var(--ink-2)", padding: "4px 8px", fontSize: 13 }}>Remove</button>
      </div>
      <Link href={item.href} className="clamp2" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35, color: "var(--color-text)", textDecoration: "none" }}>{item.title}</Link>
      <input className="input" aria-label="Your private note" placeholder="Add a private note…" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}
