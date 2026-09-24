"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";
import { Chips } from "@/components/app/bits";
import Icon from "@/components/app/Icon";
import { useServerState } from "@/components/app/useServerState";
import { setBlock, setFollow, setMute } from "@/actions/app/marks";
import { updateProfile } from "@/actions/app/profile";
import { firstName } from "@/lib/app/labels";
import type { ProfileData } from "@/lib/app/profile";

const TABS = ["Posts", "Answers", "Questions"] as const;

export default function ProfileView({ pr, tab, topics }: { pr: ProfileData; tab: (typeof TABS)[number]; topics: string[] }) {
  const { run, toast, openReport, openCompose } = useApp();
  const router = useRouter();
  const [following, setFollowing] = useServerState(pr.following);
  const [dash, setDash] = useState(false);
  const [menu, setMenu] = useState(false);
  const [editing, setEditing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const first = firstName(pr.person.name);
  const base = `/u/${encodeURIComponent(pr.person.handle ?? pr.person.id)}`;
  const list = tab === "Answers" ? pr.answers : tab === "Questions" ? pr.questions : pr.posts;

  useEffect(() => {
    if (!menu) return;
    const onDown = (e: MouseEvent) => { if (!menuRef.current?.contains(e.target as Node)) setMenu(false); };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [menu]);

  return (
    <div className="col w720" style={{ gap: 24 }}>
      <header className="prof-head">
        <span className="av" style={{ "--h": pr.person.hue, "--s": "88px" } as React.CSSProperties} aria-hidden="true">{pr.person.initials}</span>
        <div style={{ flex: 1, minWidth: 220 }} className="stack">
          <h1>{pr.person.name}</h1>
          {pr.line && <p style={{ fontSize: 16, marginTop: 4 }}>{pr.line}</p>}
          {pr.role && <div className="muted" style={{ fontSize: 14 }}>{pr.role}</div>}
        </div>
        <div style={{ display: "flex", gap: 8, position: "relative" }} ref={menuRef}>
          {pr.isMe ? (
            <>
              <button className="btn btn-secondary" type="button" onClick={() => setEditing(true)}>Edit profile</button>
              <button className="btn btn-secondary" type="button" aria-pressed={dash} onClick={() => setDash(!dash)}>Your dashboard</button>
            </>
          ) : (
            <>
              <button className="btn btn-primary" type="button" aria-pressed={following} disabled={pr.blocked} onClick={async () => {
                setFollowing(!following);
                const r = await run(setFollow(pr.person.id, !following));
                if (!r.ok) setFollowing(following);
              }}>{following ? "Following" : "Follow"}</button>
              <button className="btn btn-secondary" type="button" disabled={pr.blocked} onClick={() => openCompose({ intent: "asking", text: pr.person.handle ? `@${pr.person.handle} ` : "" })}>Ask {first}</button>
              <button className="btn btn-secondary btn-icon" type="button" aria-label="More" aria-expanded={menu} aria-haspopup="menu" onClick={() => setMenu(!menu)} style={{ width: 40, height: 40 }}><Icon name="more" /></button>
              {menu && (
                <div className="menu" role="menu" style={{ minWidth: 200 }}>
                  <button role="menuitem" type="button" onClick={async () => {
                    setMenu(false);
                    const r = await run(setMute(pr.person.id, !pr.muted));
                    if (r.ok) toast(pr.muted ? `Unmuted ${first}.` : `Muted ${first}. They won't know.`, pr.muted ? undefined : async () => { await run(setMute(pr.person.id, false)); });
                  }}>{pr.muted ? `Unmute ${first}` : `Mute ${first}`}</button>
                  <button role="menuitem" type="button" onClick={async () => {
                    setMenu(false);
                    const r = await run(setBlock(pr.person.id, !pr.blocked));
                    if (r.ok) toast(pr.blocked ? `Unblocked ${first}.` : `Blocked ${first}. They can't see your posts or reply to you.`, pr.blocked ? undefined : async () => { await run(setBlock(pr.person.id, false)); });
                  }}>{pr.blocked ? `Unblock ${first}` : `Block ${first}`}</button>
                  <button role="menuitem" type="button" className="danger" onClick={() => { setMenu(false); openReport("profile", pr.person.id); }}>Report</button>
                </div>
              )}
            </>
          )}
        </div>
      </header>

      {pr.isMe && dash && pr.dash && (
        <div className="dash">
          <div className="muted" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}><Icon name="lock" size={14} />Only you see these numbers</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
            {pr.dash.map(d => <div key={d.label}><div className="v">{d.value}</div><div className="muted" style={{ fontSize: 14 }}>{d.label}</div></div>)}
          </div>
        </div>
      )}

      <div className="grid2">
        <div className="stack" style={{ gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Ask me about</div>
          <div className="wrap-chips">
            {pr.ask.length ? pr.ask.map(t => <Link key={t} className="pill soft" href={`/t/${encodeURIComponent(t)}`}>{t}</Link>) : <span className="muted">Nothing yet.</span>}
          </div>
        </div>
        <div className="stack" style={{ gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Curious about</div>
          <div className="wrap-chips">
            {pr.curious.length ? pr.curious.map(t => <Link key={t} className="pill soft" href={`/t/${encodeURIComponent(t)}`}>{t}</Link>) : <span className="muted">Nothing yet.</span>}
          </div>
        </div>
      </div>

      {pr.pinned && (
        <section className="stack" style={{ gap: 8 }}>
          <div style={{ fontWeight: 700 }}>Pinned</div>
          <Link className="row" href={pr.pinned.href}><span className="sub" style={{ fontSize: 12 }}>{pr.pinned.kind}</span>{pr.pinned.title}</Link>
        </section>
      )}

      <div className="seg" role="tablist" aria-label="What they have written">
        {TABS.map(t => <Link key={t} role="tab" aria-selected={tab === t} href={t === "Posts" ? base : `${base}?tab=${t.toLowerCase()}`}>{t}</Link>)}
      </div>
      <div className="stack">
        {list.map(it => (
          <Link key={it.key} className="row" href={it.href}>
            <span className="post-meta" style={{ gap: 8 }}>
              <Chips bases={it.bases} />{it.meta}
              {it.accepted && <span style={{ color: "var(--lb-documented-fg)", fontWeight: 700 }}>✓ Answered the question</span>}
            </span>
            <span style={{ display: "block", marginTop: 4, fontSize: 16, lineHeight: 1.45 }}>{it.title}</span>
          </Link>
        ))}
        {list.length === 0 && <p className="muted" style={{ fontSize: 15 }}>Nothing here yet.</p>}
      </div>
      {pr.circles.length > 0 && <div className="muted" style={{ fontSize: 14 }}>Communities: {pr.circles.join(", ")}</div>}

      {editing && (
        <EditProfile
          pr={pr}
          topics={topics}
          onClose={() => setEditing(false)}
          onSaved={() => { setEditing(false); toast("Profile saved."); router.refresh(); }}
        />
      )}
    </div>
  );
}

function EditProfile({ pr, topics, onClose, onSaved }: { pr: ProfileData; topics: string[]; onClose: () => void; onSaved: () => void }) {
  const { run } = useApp();
  const [name, setName] = useState(pr.person.name);
  const [line, setLine] = useState(pr.line ?? "");
  const [ask, setAsk] = useState<string[]>(pr.ask);
  const [curious, setCurious] = useState<string[]>(pr.curious);
  const [busy, setBusy] = useState(false);
  const tog = (arr: string[], t: string, max?: number) => arr.includes(t) ? arr.filter(x => x !== t) : max && arr.length >= max ? arr : [...arr, t];
  return (
    <div className="backdrop" onClick={onClose}>
      <form className="dialog compose" role="dialog" aria-modal="true" aria-labelledby="editT" onClick={e => e.stopPropagation()} onSubmit={async e => {
        e.preventDefault(); setBusy(true);
        const r = await run(updateProfile({ name, line, askAbout: ask, curious }));
        setBusy(false);
        if (r.ok) onSaved();
      }}>
        <div className="dialog-head"><div className="dialog-title" id="editT">Edit profile</div>
          <button className="btn btn-ghost btn-icon" type="button" aria-label="Close" onClick={onClose} style={{ color: "var(--ink-2)", width: 40, height: 40 }}>×</button></div>
        <label className="lab">Name<input className="input" value={name} onChange={e => setName(e.target.value)} maxLength={60} /></label>
        <label className="lab">One line about you<input className="input" value={line} onChange={e => setLine(e.target.value)} maxLength={160} /></label>
        <div className="lab">Ask me about (up to 3)
          <div className="wrap-chips">{topics.map(t => <button key={t} type="button" className="pill" aria-pressed={ask.includes(t)} onClick={() => setAsk(tog(ask, t, 3))}>{t}</button>)}</div>
        </div>
        <div className="lab">Curious about
          <div className="wrap-chips">{topics.map(t => <button key={t} type="button" className="pill" aria-pressed={curious.includes(t)} onClick={() => setCurious(tog(curious, t))}>{t}</button>)}</div>
        </div>
        <div className="dialog-actions">
          <button className="btn btn-secondary" type="button" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" type="submit" disabled={busy || name.trim().length < 2}>{busy ? "Saving…" : "Save"}</button>
        </div>
      </form>
    </div>
  );
}
