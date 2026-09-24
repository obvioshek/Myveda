"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/components/app/AppProvider";
import { Avatar, Chip, profileHref } from "@/components/app/bits";
import Icon from "@/components/app/Icon";
import { useServerState } from "@/components/app/useServerState";
import { decideApplication, postNote, setMembership, setSpoilerUnlocked } from "@/actions/app/community";
import type { CommunityData } from "@/lib/app/community";
import type { NoteItem } from "@/lib/app/types";

const TABS = ["Now", "Threads", "Archive", "About"] as const;

export default function CommunityView({ c, tab }: { c: CommunityData; tab: (typeof TABS)[number] }) {
  const { run, toast, openReport } = useApp();
  const [status, setStatus] = useServerState(c.status);
  const [draft, setDraft] = useState("");
  const [buildsOn, setBuildsOn] = useState<NoteItem | null>(null);
  const [hl, setHl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const joinLabel = status === "member" ? "Joined" : status === "applied" ? "Applied" : c.format === "Cohort" ? "Apply" : "Join";
  const member = status === "member";
  const hostsLine = c.hosts.length ? c.hosts : [];
  const pinned = c.threads.filter(t => t.pinned && !t.archived);
  const archived = c.threads.filter(t => t.archived);
  const openThreads = c.threads.filter(t => !t.archived);
  const href = (q: string) => `/c/${c.slug}${q}`;
  const thread = c.thread;
  const readOnly = !!thread?.archived;

  const join = async () => {
    const r = await run(setMembership(c.id, status === "none"));
    if (!r.ok) return;
    setStatus(r.status);
    toast(r.status === "applied" ? `Applied. The hosts of ${c.name} will decide.` : r.status === "member" ? `You joined ${c.name}.` : `You left ${c.name}.`);
  };

  const send = async () => {
    if (!thread || !draft.trim() || busy) return;
    setBusy(true);
    const r = await run(postNote({ threadId: thread.id, body: draft, buildsOnId: buildsOn?.id ?? null }));
    setBusy(false);
    if (r.ok) { setDraft(""); setBuildsOn(null); }
  };

  return (
    <div className="col w760" style={{ gap: 22 }}>
      <header className="com-head">
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <h1>{c.name}</h1>
            <div className="muted" style={{ fontSize: 14, marginTop: 6 }}>{[c.format, c.memoryLabel, c.pace].filter(Boolean).join(" · ")}</div>
            {hostsLine.length > 0 && (
              <div style={{ fontSize: 14, marginTop: 4 }}>
                Hosted by {hostsLine.map((h, i) => (
                  <span key={h.id}>{i > 0 && (i === hostsLine.length - 1 ? " and " : ", ")}<Link href={profileHref(h)}>{h.name}</Link></span>
                ))}
              </div>
            )}
          </div>
          {!c.isHost && (
            <button className="btn btn-secondary" type="button" aria-pressed={status !== "none"} onClick={join} title={status !== "none" ? "Leave" : undefined}>
              {member && <Icon name="check" size={14} />}{joinLabel}
            </button>
          )}
          {c.isHost && <span className="chip rel" style={{ alignSelf: "center" }}>You host this</span>}
        </div>
        <div className="seg" role="tablist" aria-label="Community sections">
          {TABS.map(t => (
            <Link key={t} role="tab" aria-selected={tab === t} href={href(t === "Now" ? "" : `?tab=${t.toLowerCase()}`)}>{t}</Link>
          ))}
        </div>
      </header>

      {!c.canRead && tab !== "About" && (
        <div className="panel">
          <b>Conversations stay inside {c.name}.</b> {c.format === "Cohort" ? "Apply to join; the hosts decide." : "Join to read along."}
        </div>
      )}

      {c.canRead && tab === "Now" && (
        <>
          {c.weekPrompt && (
            <div className="panel week">
              <div style={{ flex: 1, minWidth: 220 }}>
                <div className="kicker">This week</div>
                <div className="t">{c.weekPrompt}</div>
                {c.weekDetail && <div className="muted" style={{ fontSize: 14 }}>{c.weekDetail}</div>}
              </div>
              {c.spoiler && (
                <button className="btn btn-primary" type="button" onClick={() => run(setSpoilerUnlocked(c.spoiler!.id, !c.spoiler!.unlocked))}>
                  {c.spoiler.unlocked ? `Hide ${c.spoiler.title.toLowerCase()} notes` : `I've read ${c.spoiler.title.toLowerCase()}`}
                </button>
              )}
            </div>
          )}
          {c.spoiler?.unlocked && (
            <div className="spoilers">
              <div className="kicker">{c.spoiler.title} thread</div>
              {c.spoiler.notes.map(n => <NoteRow key={n.id} n={n} />)}
              {c.spoiler.notes.length === 0 && <p className="muted">Nobody has written here yet.</p>}
              {member && <Link className="link-sm" href={href(`?thread=${c.spoiler.id}`)}>Open the {c.spoiler.title.toLowerCase()} thread</Link>}
            </div>
          )}
          {pinned.filter(p => p.id !== thread?.id).map(p => (
            <Link key={p.id} className="row" href={href(`?thread=${p.id}`)}><b>{p.title}</b><span className="muted"> · {p.subtitle ?? "pinned"}</span></Link>
          ))}
          {thread && (
            <>
              <div className="kicker" style={{ marginTop: 6 }}>{thread.title} thread{readOnly ? " · archived, read-only" : ""}</div>
              {thread.spoiler && thread.notes.length === 0 ? (
                <div className="panel" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ flex: 1 }}>Notes here stay hidden until you say you&apos;ve read this far.</span>
                  <button className="btn btn-primary" type="button" onClick={() => run(setSpoilerUnlocked(thread.id, true))}>I&apos;ve read it</button>
                </div>
              ) : thread.notes.map(n => (
                <NoteRow key={n.id} n={n} hl={hl === n.id} onShowOn={n.onId ? () => { setHl(n.onId); document.getElementById(`note-${n.onId}`)?.scrollIntoView({ block: "center", behavior: "smooth" }); } : undefined}
                  onBuild={member && !readOnly ? () => setBuildsOn(n) : undefined}
                  onReport={() => openReport("note", n.id)} />
              ))}
              {!thread.spoiler && thread.notes.length === 0 && <p className="muted">{c.memory === "fades" ? "Nothing on the board this week. Notes fade after a week." : "No notes yet. Start the thread."}</p>}
              {member && !readOnly && (
                <div className="box" style={{ padding: 12, gap: 8 }}>
                  {buildsOn && (
                    <div className="muted" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                      Building on {buildsOn.author.name.split(" ")[0]}&apos;s note
                      <button className="btn btn-ghost" type="button" aria-label="Remove" onClick={() => setBuildsOn(null)} style={{ padding: "2px 8px", color: "var(--ink-2)" }}>×</button>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8 }}>
                    <input className="input" style={{ flex: 1 }} aria-label={`Add a note to ${thread.title}`} placeholder={`Add a note to ${thread.title.toLowerCase()}…`} value={draft}
                      onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === "Enter") send(); }} />
                    <button className="btn btn-primary" type="button" disabled={!draft.trim() || busy} onClick={send}>Add note</button>
                  </div>
                </div>
              )}
              {!member && !readOnly && c.contributors && <p className="muted" style={{ fontSize: 14 }}>{c.contributors}</p>}
            </>
          )}
        </>
      )}

      {c.canRead && tab === "Threads" && (
        <div className="stack">
          {openThreads.map(t => (
            <Link key={t.id} className="row" href={href(`?thread=${t.id}`)}><b>{t.title}</b><span className="muted"> · {t.subtitle ?? (t.current ? "Current" : "")}</span></Link>
          ))}
          {openThreads.length === 0 && <p className="muted">No threads yet.</p>}
        </div>
      )}

      {c.canRead && tab === "Archive" && (
        <>
          <p className="muted" style={{ fontSize: 15 }}>
            {archived.length ? "Archived threads are read-only, and kept for anyone who joins later." : c.memory === "fades" ? "Nothing is archived here: this board fades after a week." : "Nothing archived yet."}
          </p>
          {archived.map(t => <Link key={t.id} className="row" href={href(`?thread=${t.id}`)}>{t.title}<span className="sub">{t.subtitle}</span></Link>)}
        </>
      )}

      {tab === "About" && (
        <>
          <div className="charter">
            {[
              ["Format", c.format],
              ["Memory", c.memoryLabel],
              ["Pace", c.pace],
              ["Who can contribute", c.contributors],
              ["Hosts", c.hosts.map(h => h.name).join(", ")],
              ["Topics", c.topics.join(", ")],
            ].filter(([, val]) => val).map(([k, val]) => (
              <div key={k}><div className="kicker">{k}</div><div style={{ fontSize: 15, marginTop: 2 }}>{val}</div></div>
            ))}
          </div>
          {c.rules.length > 0 && (
            <>
              <h2 className="h2s" style={{ marginTop: 8 }}>Rules</h2>
              <ol className="rules">{c.rules.map(r => <li key={r}>{r}</li>)}</ol>
            </>
          )}
          {c.isHost && c.applications.length > 0 && (
            <section className="stack" style={{ gap: 8 }}>
              <h2 className="h2s">Applications</h2>
              {c.applications.map(a => (
                <div key={a.id} className="qrow">
                  <Avatar person={a} />
                  <div style={{ flex: 1 }}><b>{a.name}</b><div className="sub">{a.line}</div></div>
                  <button className="btn btn-primary" type="button" onClick={() => run(decideApplication(c.id, a.id, true))}>Accept</button>
                  <button className="btn btn-secondary" type="button" onClick={() => run(decideApplication(c.id, a.id, false))}>Decline</button>
                </div>
              ))}
            </section>
          )}
          <div><button className="btn btn-secondary" type="button" onClick={() => openReport("community", c.id)}>Report something to the hosts</button></div>
        </>
      )}
    </div>
  );
}

function NoteRow({ n, hl, onShowOn, onBuild, onReport }: { n: NoteItem; hl?: boolean; onShowOn?: () => void; onBuild?: () => void; onReport?: () => void }) {
  return (
    <div className="note" id={`note-${n.id}`} data-hl={!!hl}>
      <Avatar person={n.author} />
      <div className="reply-main">
        <div className="who"><b style={{ fontSize: 14 }}>{n.author.name}</b><Chip basis={n.basis} /><span className="muted" style={{ fontSize: 12 }}>{n.time}</span></div>
        {n.onName && (onShowOn ? <button type="button" className="link-sm" onClick={onShowOn}>↳ Builds on {n.onName}&apos;s note</button> : <span className="muted" style={{ fontSize: 13 }}>↳ Builds on {n.onName}&apos;s note</span>)}
        <p style={{ whiteSpace: "pre-wrap" }}>{n.body}</p>
        {(onBuild || (onReport && !n.mine)) && (
          <div style={{ display: "flex", gap: 4, marginLeft: -8 }}>
            {onBuild && <button className="btn btn-ghost act" type="button" onClick={onBuild} style={{ padding: "4px 8px", fontSize: 13 }}>Build on this</button>}
            {onReport && !n.mine && <button className="btn btn-ghost act" type="button" onClick={onReport} style={{ padding: "4px 8px", fontSize: 13 }}>Report</button>}
          </div>
        )}
      </div>
    </div>
  );
}
