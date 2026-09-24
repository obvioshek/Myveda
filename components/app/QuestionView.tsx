"use client";

import { useState } from "react";
import { useServerState } from "@/components/app/useServerState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";
import { Avatar, Chip, RelChip } from "@/components/app/bits";
import { toggleHelpful, toggleSave } from "@/actions/app/marks";
import { acceptAnswer, postAnswer, setQuestionFollow } from "@/actions/app/question";
import { deleteMine, editMine } from "@/actions/app/compose";
import { ANSWER_RELATIONS, LABELS, SHARE_BASES, SOURCE_TYPES, firstName, suggestBasis, type ShareBasis } from "@/lib/app/labels";
import type { AnswerItem } from "@/lib/app/types";
import type { QuestionData } from "@/lib/app/question";

export default function QuestionView({ q }: { q: QuestionData }) {
  const { run, toast, prompt } = useApp();
  const router = useRouter();
  const [following, setFollowing] = useServerState(q.following);
  const [same, setSame] = useServerState(q.same);
  const [saved, setSaved] = useServerState(q.saved);
  const [draft, setDraft] = useState("");
  const [basis, setBasis] = useState<ShareBasis | null>(null);
  const [relation, setRelation] = useState<(typeof ANSWER_RELATIONS)[number]>("Answers");
  const [onAnswer, setOnAnswer] = useState<AnswerItem | null>(null);
  const [reason, setReason] = useState("");
  const [url, setUrl] = useState("");
  const [stype, setStype] = useState("Reference work");
  const [busy, setBusy] = useState(false);


  const effBasis = basis ?? suggestBasis(draft);
  const answerOff = busy || draft.trim().length < 3 || (relation === "Disagrees" && !reason.trim());
  const askerFirst = q.mine ? "you" : firstName(q.asker.name);

  const accepted = q.answers.filter(a => a.accepted);
  const rest = q.answers.filter(a => !a.accepted);
  const groups = [
    { name: "The answer that helped", note: "", items: accepted },
    { name: "Answers", note: "", items: rest.filter(a => a.relation === "Answers" && !a.several) },
    { name: "Builds on", note: "", items: rest.filter(a => a.relation === "Builds on" && !a.several) },
    { name: "Several views", note: "These answers disagree. None is ranked above the others.", items: rest.filter(a => a.several) },
  ].filter(g => g.items.length);
  const status = q.acceptedId ? "Answered" : q.answers.length ? "Has answers" : "Open";

  const toggleQF = async (field: "following" | "same") => {
    const [val, set] = field === "following" ? [following, setFollowing] : [same, setSame];
    set(!val);
    const r = await run(setQuestionFollow(q.id, field, !val));
    if (!r.ok) set(val);
    else if (field === "same" && !val) toast(`${r.asker || "The asker"} will know one more person has this question. Nobody else sees a count.`);
  };

  const submit = async () => {
    if (answerOff) return;
    setBusy(true);
    const r = await run(postAnswer({
      questionId: q.id, body: draft, basis: effBasis, relation: onAnswer && relation === "Answers" ? "Builds on" : relation,
      onAnswerId: onAnswer?.id ?? null, reason: relation === "Disagrees" ? reason : null, url, stype,
    }));
    setBusy(false);
    if (r.ok) {
      setDraft(""); setBasis(null); setReason(""); setUrl(""); setOnAnswer(null); setRelation("Answers");
      toast("Answer posted. The asker will be told.");
    }
  };

  return (
    <div className="col w720 q" style={{ gap: 22 }}>
      <div className="crumbs desk-only">
        <button type="button" className="link" onClick={() => router.back()}>← Back</button>
        <span>/</span>
        <Link href={`/t/${encodeURIComponent(q.topic)}`}>{q.topic}</Link>
      </div>
      <header className="stack" style={{ gap: 12 }}>
        <div className="post-meta">
          <Chip basis="asking" />
          <span>{q.topic}</span>
          {q.circle && <span>· in <Link href={`/c/${q.circle.slug}`} style={{ color: "inherit" }}>{q.circle.name}</Link></span>}
          <span className={`status${q.acceptedId ? " done" : ""}`}>{status}</span>
        </div>
        <h1>{q.title}</h1>
        {q.context && <p className="context" style={{ whiteSpace: "pre-wrap" }}>{q.context}</p>}
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }} className="muted">
          <Avatar person={q.asker} size={28} />Asked by {q.mine ? "you" : q.asker.name} · {q.time}
        </div>
        <div className="btns">
          <button className="btn btn-secondary" type="button" aria-pressed={following} onClick={() => toggleQF("following")}>{following ? "Following this question" : "Follow question"}</button>
          {!q.mine && <button className="btn btn-secondary" type="button" aria-pressed={same} onClick={() => toggleQF("same")}>{same ? "You have this question too" : "I have this question too"}</button>}
          <button className="btn btn-secondary" type="button" aria-pressed={saved} onClick={async () => {
            setSaved(!saved); const r = await run(toggleSave("question", q.id)); if (!r.ok) setSaved(saved);
          }}>{saved ? "Saved" : "Save"}</button>
          <button className="btn btn-secondary" type="button" onClick={async () => {
            try { await navigator.clipboard.writeText(window.location.href); } catch { /* blocked */ }
            toast("Link copied. Paste it into a circle to share it there.");
          }}>Share with a circle</button>
          {q.mine && (
            <button className="btn btn-secondary" type="button" onClick={async () => {
              const t = await prompt({ title: q.context ? "Edit the context" : "Add context", body: "What would help someone answer well?", submit: "Save", multiline: true, initial: q.context ?? "" });
              if (t !== null && (await run(editMine("question", q.id, t))).ok) toast("Saved.");
            }}>{q.context ? "Edit context" : "Add context"}</button>
          )}
          {q.mine && q.answers.length === 0 && (
            <button className="btn btn-secondary" type="button" onClick={async () => {
              if ((await run(deleteMine("question", q.id))).ok) { toast("Question removed."); router.push("/home"); }
            }}>Delete</button>
          )}
        </div>
      </header>

      {q.answers.length === 0 && (
        <div className="panel" style={{ fontSize: 15, lineHeight: 1.5 }}>
          <b>Sent to people who know {q.topic}.</b> You&apos;ll hear in your Inbox when someone answers. If nobody has within a day, an editor from the house will.
        </div>
      )}

      {groups.map(g => (
        <section key={g.name} className="stack" style={{ gap: 12 }}>
          <div className="kicker">{g.name}</div>
          {g.note && <div className="muted" style={{ fontSize: 14, marginTop: -6 }}>{g.note}</div>}
          {g.items.map(a => (
            <AnswerCard
              key={a.id}
              a={a}
              canAccept={q.mine}
              askerFirst={askerFirst}
              onAccept={async () => { const r = await run(acceptAnswer(q.id, a.id)); if (r.ok && r.accepted) toast(`${firstName(a.author.name)} will know it helped.`); }}
              onBuild={!q.mine && !a.mine && q.canAnswer ? () => { setOnAnswer(a); setRelation("Builds on"); document.getElementById("answerBox")?.scrollIntoView({ block: "center", behavior: "smooth" }); } : undefined}
            />
          ))}
        </section>
      ))}

      {!q.mine && q.canAnswer && (
        <div className="box" id="answerBox">
          <div style={{ fontWeight: 700 }}>Your answer</div>
          <div className="wrap-chips" role="group" aria-label="How your answer relates">
            {ANSWER_RELATIONS.map(n => (
              <button key={n} type="button" className="pill" aria-pressed={relation === n} onClick={() => { setRelation(n); if (n === "Answers") setOnAnswer(null); }}>{n}</button>
            ))}
          </div>
          {onAnswer && (
            <div className="muted" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              Building on {firstName(onAnswer.author.name)}&apos;s answer
              <button className="btn btn-ghost" type="button" aria-label="Remove" onClick={() => { setOnAnswer(null); setRelation("Answers"); }} style={{ padding: "2px 8px", color: "var(--ink-2)" }}>×</button>
            </div>
          )}
          <textarea className="input" rows={4} aria-label="Your answer" placeholder="Say what you know, and how you know it." value={draft} onChange={e => setDraft(e.target.value)} style={{ minHeight: 96 }} />
          {relation === "Disagrees" && <input className="input" aria-label="Why you disagree" placeholder="Why you disagree (needed)" value={reason} onChange={e => setReason(e.target.value)} />}
          <div className="wrap-chips" role="group" aria-label="What your answer rests on">
            {SHARE_BASES.map(k => (
              <button key={k} type="button" className={`chip basis-btn lb-${k}`} aria-pressed={effBasis === k} onClick={() => setBasis(k)}>
                {LABELS[k].glyph} {LABELS[k].name}
              </button>
            ))}
          </div>
          {effBasis === "documented" && (
            <div className="two">
              <input className="input" aria-label="Source link, ISBN or DOI (optional)" placeholder="Source: link, ISBN or DOI" value={url} onChange={e => setUrl(e.target.value)} />
              <select className="input" aria-label="Source type" value={stype} onChange={e => setStype(e.target.value)}>
                {SOURCE_TYPES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button className="btn btn-primary" type="button" disabled={answerOff} onClick={submit}>{busy ? "Posting…" : "Post answer"}</button>
          </div>
        </div>
      )}
      {!q.mine && !q.canAnswer && <p className="muted">Only members of {q.circle?.name} can answer this.</p>}
      {q.mine && <p className="muted" style={{ fontSize: 14 }}>You asked this. Mark the answer that helped with “This answered it”; you can change it later.</p>}
    </div>
  );
}

function AnswerCard({ a, canAccept, askerFirst, onAccept, onBuild }: {
  a: AnswerItem; canAccept: boolean; askerFirst: string; onAccept: () => void; onBuild?: () => void;
}) {
  const { run } = useApp();
  const [helpful, setHelpful] = useServerState(a.helpful);
  return (
    <div className={`answer${a.accepted ? " accepted" : ""}`}>
      <div className="head">
        <Avatar person={a.author} />
        <div className="name"><b style={{ fontSize: 15 }}>{a.author.name}</b>{a.credential && <div className="muted" style={{ fontSize: 12 }}>{a.credential}</div>}</div>
        <RelChip name={a.relation} />
        <Chip basis={a.basis} />
      </div>
      {a.accepted && <div className="accepted-note">✓ This answered it — marked by {askerFirst}</div>}
      {a.on && <div className="muted" style={{ fontSize: 13 }}>↳ Builds on {a.on}</div>}
      {a.reason && <div className="muted" style={{ fontSize: 13 }}>Disagrees because: {a.reason}</div>}
      <p className="text">{a.body}</p>
      {a.source && (
        <div className="muted" style={{ fontSize: 13 }}>
          Source: {/^https?:/.test(a.source.url) ? <a href={a.source.url} target="_blank" rel="noopener noreferrer nofollow">{a.source.url}</a> : a.source.url}
          {a.source.type ? ` · ${a.source.type}` : ""}{a.source.locator ? ` · ${a.source.locator}` : ""}
        </div>
      )}
      <div className="acts" style={{ gap: 4 }}>
        {!a.mine && (
          <button className="btn btn-ghost act" type="button" aria-pressed={helpful} onClick={async () => {
            setHelpful(!helpful); const r = await run(toggleHelpful("answer", a.id)); if (!r.ok) setHelpful(helpful);
          }}>{helpful ? "Marked helpful · only they see it" : "Helpful"}</button>
        )}
        {canAccept && (
          <button className="btn btn-ghost act" type="button" aria-pressed={a.accepted} onClick={onAccept}>
            {a.accepted ? "✓ Marked as the answer" : "This answered it"}
          </button>
        )}
        {onBuild && <button className="btn btn-ghost act" type="button" onClick={onBuild}>Build on this</button>}
      </div>
    </div>
  );
}
