"use client";

import { useRef, useState } from "react";
import { useServerState } from "@/components/app/useServerState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";
import { Avatar, Chip, Chips, profileHref } from "@/components/app/bits";
import { setFollow, toggleHelpful, toggleSave } from "@/actions/app/marks";
import { checkSource, postResponse, suggestCorrection } from "@/actions/app/reader";
import { deleteMine, editMine } from "@/actions/app/compose";
import { LABELS, REPLY_RELATIONS, SOURCE_VERDICTS, firstName, suggestBasis, type ReplyRelation } from "@/lib/app/labels";
import type { ReaderData } from "@/lib/app/reader";

const PLACEHOLDER: Record<ReplyRelation, string> = {
  "Adds context": "What background would help people read this?",
  "Builds on": "What does this add to?",
  Disagrees: "Where do you see it differently?",
  Asks: "What would you like to know?",
};

export default function ReaderView({ r }: { r: ReaderData }) {
  const { run, toast, prompt } = useApp();
  const router = useRouter();
  const [picked, setPicked] = useState<number | null>(null);
  const [srcOpen, setSrcOpen] = useState<number | null>(null);
  const [checking, setChecking] = useState<string | null>(null);
  const [saved, setSaved] = useServerState(r.saved);
  const [helpful, setHelpful] = useServerState(r.helpful);
  const [following, setFollowing] = useServerState(r.following);
  const [anchor, setAnchor] = useState<string | null>(null);
  const [rel, setRel] = useState<ReplyRelation>("Adds context");
  const [draft, setDraft] = useState("");
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);
  const replyRef = useRef<HTMLTextAreaElement>(null);
  const house = r.kind === "article";
  const target = r.kind;


  const replyBasis = rel === "Asks" ? "asking" : suggestBasis(draft);
  const replyOff = busy || !draft.trim() || (rel === "Disagrees" && !reason.trim());

  const startReply = (text: string, relation: ReplyRelation) => {
    setAnchor(text.split(" ").slice(0, 9).join(" ") + "…");
    setRel(relation);
    setPicked(null);
    setTimeout(() => { replyRef.current?.focus(); replyRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }); }, 50);
  };

  const share = async () => {
    try { await navigator.clipboard.writeText(window.location.href); } catch { /* clipboard blocked */ }
    toast("Link copied. The label travels with it.");
  };

  const flipSave = async () => {
    setSaved(!saved);
    const res = await run(toggleSave(target, r.id));
    if (!res.ok) setSaved(saved);
  };

  const sendReply = async () => {
    if (replyOff) return;
    setBusy(true);
    const res = await run(postResponse({ target, targetId: r.id, relation: rel, body: draft, anchor, reason: rel === "Disagrees" ? reason : null }));
    setBusy(false);
    if (res.ok) { setDraft(""); setReason(""); setAnchor(null); toast("Reply posted."); }
  };

  const groups = REPLY_RELATIONS.map(g => ({ name: g, items: r.replies.filter(x => x.relation === g) })).filter(g => g.items.length);

  return (
    <div className="col reader gap-22" style={{ gap: 22 }}>
      <div className="crumbs desk-only">
        <button type="button" className="link" onClick={() => router.back()}>← Back</button>
        <span>/</span>
        {r.topic && <Link href={`/t/${encodeURIComponent(r.topic)}`}>{r.topic}</Link>}
      </div>

      <header className="stack" style={{ gap: 12 }}>
        <div className="post-meta">
          {house && <span style={{ fontWeight: 700, color: "var(--color-text)" }}>From the house</span>}
          <Chips bases={r.bases} />
          {r.read && <span>{r.read}</span>}
        </div>
        {r.title && <h1>{r.title}</h1>}
        {r.dek && <p className="dek">{r.dek}</p>}
        {house && <div className="muted" style={{ fontSize: 14 }}>Edited by <b style={{ color: "var(--color-text)" }}>{r.editor}</b> · {r.updated}</div>}
        {r.author && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar person={r.author} size={44} />
            <div style={{ flex: 1, fontSize: 14 }}>
              <Link href={profileHref(r.author)} style={{ color: "var(--color-text)", textDecoration: "none" }}><b>{r.author.name}</b></Link>
              <div className="muted">{r.authorMeta}{r.edited ? " · edited" : ""}</div>
            </div>
            {r.mine ? (
              <>
                <button className="btn btn-secondary" type="button" onClick={async () => {
                  const t = await prompt({ title: "Edit your post", submit: "Save", multiline: true, initial: r.paras.map(p => p.text).join("\n\n") });
                  if (t && (await run(editMine("note", r.id, t))).ok) toast("Saved. It now says it was edited.");
                }}>Edit</button>
                <button className="btn btn-secondary" type="button" onClick={async () => {
                  const res = await run(deleteMine("note", r.id));
                  if (res.ok) { toast("Removed."); router.push("/home"); }
                }}>Delete</button>
              </>
            ) : (
              <button className="btn btn-secondary" type="button" aria-pressed={following} onClick={async () => {
                setFollowing(!following);
                const res = await run(setFollow(r.author!.id, !following));
                if (!res.ok) setFollowing(following);
              }}>{following ? "Following" : "Follow"}</button>
            )}
          </div>
        )}
      </header>

      {r.image && <div className="hero-img">{r.image}</div>}
      {house && <div className="muted" style={{ fontSize: 13 }}>Tap a paragraph to ask about it or add context.</div>}

      {r.paras.map((pa, i) => (
        <div key={i} className="stack" style={{ gap: 8 }}>
          <p
            className={`para${house ? " pickable" : " big"}`}
            data-picked={picked === i}
            onClick={() => house && setPicked(picked === i ? null : i)}
            onKeyDown={e => { if (house && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setPicked(picked === i ? null : i); } }}
            tabIndex={house ? 0 : undefined}
            role={house ? "button" : undefined}
            aria-pressed={house ? picked === i : undefined}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {pa.text}
            {pa.src && (
              <>{" "}<button className="srcbtn" type="button" aria-label={`Source ${pa.src.n}`} aria-expanded={srcOpen === i} onClick={e => { e.stopPropagation(); setSrcOpen(srcOpen === i ? null : i); }}>{pa.src.n}</button></>
            )}
          </p>
          {pa.src && srcOpen === i && <div className="srcpop"><b>{pa.src.title}</b><div className="muted">{pa.src.meta}</div></div>}
          {picked === i && (
            <div className="btns">
              <button className="btn btn-secondary" type="button" onClick={() => startReply(pa.text, "Asks")}>? Ask about this</button>
              <button className="btn btn-secondary" type="button" onClick={() => startReply(pa.text, "Adds context")}>+ Add context</button>
            </div>
          )}
        </div>
      ))}

      {r.noteSource && (
        <div className="srccard" style={{ background: "var(--color-surface)" }}>
          <Chip basis="documented" />
          <div style={{ minWidth: 0 }}>
            <a href={/^https?:/.test(r.noteSource.url) ? r.noteSource.url : undefined} target="_blank" rel="noopener noreferrer nofollow" style={{ fontWeight: 600, fontSize: 14, wordBreak: "break-all" }}>{r.noteSource.url}</a>
            <div className="muted" style={{ fontSize: 12 }}>{[r.noteSource.type, r.noteSource.locator].filter(Boolean).join(" · ")}</div>
          </div>
        </div>
      )}

      {r.documented && (
        <div className="split">
          <div className="doc"><div className="k">✓ Documented</div><p>{r.documented}</p></div>
          {r.told && <div className="told"><div className="k">❞ Told</div><p>{r.told}</p></div>}
        </div>
      )}
      {r.carry && <div className="carry"><div className="k">Worth carrying</div><div className="t">{r.carry}</div></div>}

      {r.sources.length > 0 && (
        <section className="sec-top">
          <h2 className="h2s" style={{ marginBottom: 4 }}>Sources</h2>
          {r.sources.map(s => (
            <div key={s.id} className="src-row">
              <span className="n">{s.n}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600 }}>{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a> : s.title}</div>
                <div className="muted" style={{ fontSize: 13 }}>{[s.type, s.locator].filter(Boolean).join(" · ")}</div>
                {checking === s.id && (
                  <div className="btns" style={{ gap: 6, marginTop: 8 }}>
                    {SOURCE_VERDICTS.map(o => (
                      <button key={o} className="btn btn-secondary" type="button" style={{ padding: "5px 10px", fontSize: 13 }} onClick={async () => {
                        setChecking(null);
                        const res = await run(checkSource(s.id, o));
                        if (res.ok) toast("Thanks. Checks from readers who usually disagree count most.");
                      }}>{o}</button>
                    ))}
                  </div>
                )}
              </div>
              <button className="btn btn-ghost" type="button" style={{ fontSize: 13 }} aria-expanded={checking === s.id} onClick={() => setChecking(checking === s.id ? null : s.id)}>
                {s.mine ? `You said: ${s.mine}` : "Check this source"}
              </button>
            </div>
          ))}
        </section>
      )}

      {r.corrections.length > 0 && (
        <section className="stack" style={{ gap: 6 }}>
          <h2 className="h2s">Corrections</h2>
          {r.corrections.map((c, i) => <div key={i} style={{ fontSize: 14 }}><b>{c.date}</b> — {c.text}</div>)}
        </section>
      )}

      <div className="btns desk-only">
        {house && (
          <button className="btn btn-secondary" type="button" onClick={async () => {
            const t = await prompt({ title: "Suggest a correction", body: "It goes to the piece's editor. You'll hear back in your Inbox.", placeholder: "What should change, and how do you know?", submit: "Send to the editor", multiline: true });
            if (t && (await run(suggestCorrection(r.id, t))).ok) toast("Sent to the editor. You'll hear back in your Inbox.");
          }}>Suggest a correction</button>
        )}
        {!r.mine && r.kind === "note" && (
          <button className="btn btn-secondary" type="button" aria-pressed={helpful} onClick={async () => {
            setHelpful(!helpful);
            const res = await run(toggleHelpful("note", r.id));
            if (!res.ok) setHelpful(helpful);
          }}>{helpful ? `Marked helpful · only ${r.author ? firstName(r.author.name) : "they"} see${r.author ? "s" : ""} it` : "Helpful"}</button>
        )}
        <button className="btn btn-secondary" type="button" aria-pressed={saved} onClick={flipSave}>{saved ? "Saved" : "Save"}</button>
        <button className="btn btn-secondary" type="button" onClick={share}>Share</button>
      </div>

      <section className="replies" id="replies">
        <h2>Replies</h2>
        {r.canReply ? (
          <div className="box">
            {anchor && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }} className="muted">
                About <q style={{ fontStyle: "italic", color: "var(--color-text)", flex: 1 }}>{anchor}</q>
                <button className="btn btn-ghost" type="button" aria-label="Remove passage" onClick={() => setAnchor(null)} style={{ padding: "2px 8px", color: "var(--ink-2)" }}>×</button>
              </div>
            )}
            <div className="wrap-chips" role="group" aria-label="How your reply relates">
              {REPLY_RELATIONS.map(n => (
                <button key={n} type="button" className="pill" aria-pressed={rel === n} onClick={() => setRel(n)}>{n}</button>
              ))}
            </div>
            <textarea ref={replyRef} className="input" rows={3} aria-label="Your reply" placeholder={PLACEHOLDER[rel]} value={draft} onChange={e => setDraft(e.target.value)} style={{ minHeight: 80 }} />
            {rel === "Disagrees" && <input className="input" aria-label="Your reason" placeholder="Your reason (needed to disagree)" value={reason} onChange={e => setReason(e.target.value)} />}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
              <span className="muted" style={{ fontSize: 13 }}>Basis: {LABELS[replyBasis].name} · suggested from your text</span>
              <button className="btn btn-primary" type="button" disabled={replyOff} onClick={sendReply}>Reply</button>
            </div>
          </div>
        ) : (
          <p className="muted">Only members of this community can reply.</p>
        )}
        {groups.map(g => (
          <div key={g.name} className="rgroup">
            <div className="kicker">{g.name}</div>
            {g.items.map(x => (
              <div key={x.id} className="reply">
                <Avatar person={x.author} size={32} />
                <div className="reply-main">
                  <div className="who"><b style={{ fontSize: 14 }}>{x.author.name}</b><Chip basis={x.basis} /></div>
                  {x.anchor && <q>{x.anchor}</q>}
                  {x.on && <span className="muted" style={{ fontSize: 13 }}>↳ Builds on {x.on}</span>}
                  {x.reason && <span className="muted" style={{ fontSize: 13 }}>Reason: {x.reason}</span>}
                  <p style={{ whiteSpace: "pre-wrap" }}>{x.body}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        {groups.length === 0 && <p className="muted" style={{ fontSize: 15 }}>No replies yet. What would you add?</p>}
      </section>

      {r.related.length > 0 && (
        <section className="sec-top">
          <h2 className="h2s">Related questions</h2>
          {r.related.map(q => <Link key={q} className="row" href={`/discover?q=${encodeURIComponent(q)}`}>{q}</Link>)}
        </section>
      )}

      <div className="mbar">
        <button className="btn btn-ghost" type="button" onClick={() => { replyRef.current?.scrollIntoView({ block: "center" }); replyRef.current?.focus(); }}>Reply</button>
        <button className="btn btn-ghost" type="button" onClick={flipSave}>{saved ? "Saved" : "Save"}</button>
        <button className="btn btn-ghost" type="button" onClick={share}>Share</button>
      </div>
    </div>
  );
}

