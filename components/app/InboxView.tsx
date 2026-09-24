"use client";

import { useState } from "react";
import { useServerState } from "@/components/app/useServerState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";
import { Avatar } from "@/components/app/bits";
import { markAllRead, markRead, replyFromInbox, setDelivery } from "@/actions/app/inbox";
import type { InboxData, InboxItem } from "@/lib/app/inbox";

export default function InboxView({ inbox, filter, filters }: { inbox: InboxData; filter: string; filters: readonly string[] }) {
  const { run, toast } = useApp();
  const [settings, setSettings] = useState(false);
  const [digest, setDigest] = useServerState(inbox.digest);
  const [quiet, setQuiet] = useServerState(inbox.quietHours);
  const empty = inbox.groups.length === 0;
  const held = inbox.held.quiet + inbox.held.digest;

  return (
    <div className="col w720" style={{ gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <h1 className="page-title desk-only" style={{ flex: 1 }}>Inbox</h1>
        <button className="btn btn-secondary" type="button" onClick={async () => { if ((await run(markAllRead())).ok) toast("All caught up."); }}>Mark all read</button>
        <button className="btn btn-secondary" type="button" aria-pressed={settings} aria-expanded={settings} onClick={() => setSettings(!settings)}>Delivery settings</button>
      </div>

      {settings && (
        <div className="panel stack" style={{ gap: 12, fontSize: 15 }}>
          <div><b>Right away</b><div className="muted" style={{ fontSize: 14 }}>Answers to your questions, people building on your notes, mentions, private thank-yous.</div></div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}><b>In a digest</b><div className="muted" style={{ fontSize: 14 }}>Your circles and the people you follow.</div></div>
            <div className="seg" role="tablist" aria-label="Digest">
              {["Daily", "Weekly"].map(d => (
                <button key={d} type="button" role="tab" aria-selected={digest === d} onClick={async () => {
                  const prev = digest; setDigest(d);
                  if (!(await run(setDelivery({ digest: d }))).ok) setDigest(prev);
                }}>{d}</button>
              ))}
            </div>
          </div>
          <div><b>Never</b><div className="muted" style={{ fontSize: 14 }}>Counts, milestones, “you&apos;re trending”. This one can&apos;t be turned on.</div></div>
          <label className="check">
            <input type="checkbox" checked={quiet} onChange={async () => {
              const next = !quiet; setQuiet(next);
              if (!(await run(setDelivery({ quietHours: next }))).ok) setQuiet(!next);
            }} />Quiet hours, 10 pm to 8 am
          </label>
        </div>
      )}

      <div className="wrap-chips" role="group" aria-label="Filter">
        {filters.map(f => (
          <Link key={f} className="pill" aria-pressed={filter === f} href={f === "All" ? "/inbox" : `/inbox?type=${f.toLowerCase().replace(/ /g, "-")}`}>{f}</Link>
        ))}
      </div>

      {inbox.groups.map(g => (
        <section key={g.name} className="stack">
          <div className="kicker" style={{ paddingBottom: 4 }}>{g.name}</div>
          {g.items.map(it => <Row key={it.id} it={it} />)}
        </section>
      ))}
      {empty && <p className="muted" style={{ fontSize: 15 }}>Nothing needs you here.</p>}
      {held > 0 && (
        <p className="muted" style={{ fontSize: 13 }}>
          {inbox.held.quiet > 0 && `${inbox.held.quiet === 1 ? "One item is" : "Some items are"} held for the end of quiet hours. `}
          {inbox.held.digest > 0 && `Circle activity waits for your ${digest.toLowerCase()} digest.`}
        </p>
      )}
    </div>
  );
}

function Row({ it }: { it: InboxItem }) {
  const { run, toast } = useApp();
  const router = useRouter();
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const who = it.actor?.name ?? "";
  return (
    <div style={{ display: "flex", gap: 12, padding: "14px 0", borderBottom: "1px solid var(--color-divider)" }}>
      <span aria-label={it.unread ? "Unread" : undefined} style={{ width: 8, height: 8, borderRadius: "50%", marginTop: 14, flex: "none", background: it.unread ? "var(--color-accent)" : "transparent" }} />
      {it.actor ? <Avatar person={it.actor} /> : <span className="av" style={{ "--h": 250 } as React.CSSProperties} aria-hidden="true">{it.initials}</span>}
      <div style={{ flex: 1, minWidth: 0 }} className="stack">
        <button type="button" onClick={async () => { if (it.unread) await markRead(it.id); router.push(it.href); }}
          style={{ border: "none", background: "none", padding: 0, textAlign: "left", cursor: "pointer", fontSize: 15, lineHeight: 1.4, color: "var(--color-text)" }}>
          {who && <b>{who} </b>}{it.text}
        </button>
        {it.preview && <div className="muted" style={{ fontSize: 14, paddingLeft: 10, borderLeft: "2px solid var(--color-divider)", marginTop: 6 }}>{it.preview}</div>}
        <div className="muted" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, marginTop: 6 }}>
          {it.when}
          {it.canReply && <button className="btn btn-ghost" type="button" aria-expanded={replying} onClick={() => setReplying(!replying)} style={{ padding: "2px 8px", fontSize: 13 }}>Reply</button>}
        </div>
        {replying && (
          <form style={{ display: "flex", gap: 8, marginTop: 6 }} onSubmit={async e => {
            e.preventDefault();
            if (!text.trim() || busy) return;
            setBusy(true);
            const r = await run(replyFromInbox(it.id, text));
            setBusy(false);
            if (r.ok) { setReplying(false); setText(""); toast("Reply sent."); }
          }}>
            <input className="input" style={{ flex: 1 }} autoFocus aria-label={`Reply to ${who || "this"}`} placeholder={`Reply to ${who ? who.split(" ")[0] : "this"}…`} value={text} onChange={e => setText(e.target.value)} />
            <button className="btn btn-primary" type="submit" disabled={!text.trim() || busy}>Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
