"use client";

import { useRef, useState } from "react";
import Stamp from "@/components/landing/Stamp";
import Reactions from "@/components/landing/Reactions";
import { RINGS, type LabelKey } from "@/content/landing";

const words = (s: string) => (s.trim().match(/\S+/g) ?? []).length;
const plural = (n: number, w: string) => `${n} more ${w}${n > 1 ? "s" : ""}`;

const TABS = [
  { id: "post", title: "Post", sub: "Say what it rests on" },
  { id: "read", title: "Read", sub: "Replies that say what they are" },
  { id: "disagree", title: "Disagree", sub: "Understand first" },
  { id: "share", title: "Share", sub: "With your take attached" },
  { id: "privacy", title: "Privacy", sub: "Choose who sees each thing" },
] as const;
type TabId = (typeof TABS)[number]["id"];

// "Try it": five working demonstrations. Nothing typed here leaves the page.
export default function Tour() {
  const [tab, setTab] = useState<TabId>("post");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = TABS.length;
    let k: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") k = (i + 1) % n;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") k = (i - 1 + n) % n;
    if (e.key === "Home") k = 0;
    if (e.key === "End") k = n - 1;
    if (k === null) return;
    e.preventDefault();
    setTab(TABS[k].id);
    refs.current[k]?.focus();
  };

  return (
    <div className="tour">
      <div className="tablist" role="tablist" aria-label="Product demonstrations">
        {TABS.map((t, i) => (
          <button key={t.id} ref={el => { refs.current[i] = el; }} className="tab" role="tab" type="button"
            id={`t-${t.id}`} aria-controls={`p-${t.id}`} aria-selected={tab === t.id} tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)} onKeyDown={e => onKey(e, i)}>
            <b>{t.title}</b><span>{t.sub}</span>
          </button>
        ))}
      </div>
      <div>
        <Panel id="post" tab={tab}><PostDemo /></Panel>
        <Panel id="read" tab={tab}><ReadDemo /></Panel>
        <Panel id="disagree" tab={tab}><DisagreeDemo /></Panel>
        <Panel id="share" tab={tab}><ShareDemo /></Panel>
        <Panel id="privacy" tab={tab}><PrivacyDemo /></Panel>
      </div>
    </div>
  );
}

// Panels stay mounted, so a half-finished demo survives switching tabs.
function Panel({ id, tab, children }: { id: TabId; tab: TabId; children: React.ReactNode }) {
  return <div className="panel" role="tabpanel" id={`p-${id}`} aria-labelledby={`t-${id}`} tabIndex={0} hidden={tab !== id}>{children}</div>;
}

function Head({ title, body, tag }: { title: string; body: string; tag: string }) {
  return (
    <div className="panel-head">
      <div><h3>{title}</h3><p>{body}</p></div>
      <span className="demo-tag">{tag}</span>
    </div>
  );
}

function sourceProblem(v: string) {
  try {
    const u = new URL(v);
    if (!/^https?:$/.test(u.protocol)) return "Use a web link starting with https://";
    if (u.pathname === "/" || u.pathname === "") return "Link to the exact page, not a site’s home page.";
    return "";
  } catch {
    return v.trim() ? "That doesn’t look like a link yet." : "Documented posts need a specific source.";
  }
}

function PostDemo() {
  const [text, setText] = useState("Rani-ki-Vav in Patan is on the UNESCO World Heritage List.");
  const [basis, setBasis] = useState<LabelKey>("documented");
  const [src, setSrc] = useState("https://whc.unesco.org/en/list/922");
  const [done, setDone] = useState(false);
  const problem = basis === "documented" ? sourceProblem(src) : "";
  let shown = "";
  try { const u = new URL(src); shown = u.host + u.pathname; } catch { /* not a link yet */ }
  const edit = <T,>(set: (v: T) => void) => (v: T) => { set(v); setDone(false); };

  return (
    <>
      <Head title="Post: say what it rests on." body="Pick a label. Choose Documented and a specific source becomes required." tag="Demo · nothing is posted" />
      <div className="split">
        <form className="form-grid" noValidate onSubmit={e => { e.preventDefault(); setDone(true); }}>
          <label className="lbl" htmlFor="c-text">Your post</label>
          <textarea className="field" id="c-text" maxLength={220} value={text} onChange={e => edit(setText)(e.target.value)} />
          <fieldset className="picker">
            <legend>What does it rest on?</legend>
            {(["documented", "lived", "told", "view", "asking"] as LabelKey[]).map(k => (
              <label key={k}>
                <input type="radio" name="basis" value={k} checked={basis === k} onChange={() => edit(setBasis)(k)} />
                <Stamp k={k} />
              </label>
            ))}
          </fieldset>
          <div className="form-grid" hidden={basis !== "documented"}>
            <label className="lbl" htmlFor="c-src">Source link <span className="muted">(needed for Documented)</span></label>
            <input className="field" id="c-src" type="url" inputMode="url" value={src} onChange={e => edit(setSrc)(e.target.value)} aria-describedby="c-src-hint" />
            <p className="hint" id="c-src-hint" style={{ color: problem ? "var(--told)" : "var(--doc)" }}>
              {problem || "Specific page linked. Readers can open it and check."}
            </p>
          </div>
          <button className="btn btn-primary" type="submit" disabled={!text.trim() || !!problem}>Post</button>
          <p className={done ? "status ok" : "status"} role="status" aria-live="polite">
            {done ? "Looks ready. This is a demonstration, so nothing was posted." : ""}
          </p>
        </form>
        <div>
          <p className="hint" style={{ marginBottom: 8 }}>How it will look</p>
          <div className="card">
            <div className="post-head">
              <span className="av" style={{ "--c": "#E9C9D4" } as React.CSSProperties} aria-hidden="true">You</span>
              <span className="who"><b>You</b>Cities · just now</span>
              <Stamp k={basis} />
            </div>
            <p className="post-body">{text.trim() || "Your words appear here."}</p>
            {basis === "documented" && !problem && <p className="post-src">Source: {shown}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

function Reply({ who, k, children }: { who: string; k: LabelKey; children: React.ReactNode }) {
  return <div className="reply-prev"><div className="rp-head"><b>{who}</b><Stamp k={k} /></div>{children}</div>;
}

function ReadDemo() {
  return (
    <>
      <Head title="Read: replies that say what they are." body="React in words, privately. Save something for later; only you see it." tag="Demo" />
      <div className="card">
        <div className="post-head">
          <span className="av" style={{ "--c": "#EBCFE4" } as React.CSSProperties} aria-hidden="true">DM</span>
          <span className="who"><b>Devika Menon</b>Ideas · 3 hours ago</span>
          <Stamp k="lived" />
        </div>
        <p className="post-title">Sometimes listening is more useful than winning an argument.</p>
        <p className="post-body">My brother told me he was leaving his job, and I spent a week arguing with him. Then I asked what he was hoping for. Ten minutes later we were planning it together.</p>
        <Reactions person="Devika" />
        <Reply who="Arjan" k="lived">Same with my manager. Our meetings got shorter the day I asked what worried her most.</Reply>
        <Reply who="Sarah" k="view">Listening isn&apos;t agreeing. It just makes sure you&apos;re replying to what was actually said.</Reply>
        <Reply who="Siddharth" k="asking">What do you do when the other person isn&apos;t listening back?</Reply>
      </div>
    </>
  );
}

function DisagreeDemo() {
  const [restate, setRestate] = useState("");
  const [step, setStep] = useState(1);
  const [reply, setReply] = useState("");
  const [published, setPublished] = useState(false);
  const replyRef = useRef<HTMLTextAreaElement>(null);
  const left = Math.max(0, 12 - words(restate));
  const cls = (n: number) => `step ${n < step ? "done" : n === step ? "active" : "locked"}`;

  const ask = () => {
    setStep(2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => { setStep(3); setTimeout(() => replyRef.current?.focus(), 0); }, reduced ? 50 : 1200);
  };

  return (
    <>
      <Head title="Disagree: understand first." body="Questions never wait. Rebuttals do: say her view back fairly, and your reply opens once she agrees." tag="Demo · Devika's answer is simulated" />
      <div className="card" style={{ marginBottom: 16 }}>
        <div className="post-head">
          <span className="av" style={{ "--c": "#EBCFE4" } as React.CSSProperties} aria-hidden="true">DM</span>
          <span className="who"><b>Devika Menon</b>Customs · yesterday</span>
          <Stamp k="lived" />
        </div>
        <p className="post-body">Our Sunday meal was never just about food. It was the one fixed hour when everyone caught up and nobody was left without a seat. Calling it “just a tradition” misses why it mattered.</p>
      </div>
      <ol className="steps">
        <li className={cls(1)}><span className="n">1</span><div>
          <h4>Put her case as fairly as she would</h4>
          <label className="sr-only" htmlFor="g-restate">Your restatement of Devika&apos;s view</label>
          <textarea className="field" id="g-restate" style={{ marginTop: 8 }} placeholder="You're saying that…" value={restate} readOnly={step > 1} onChange={e => setRestate(e.target.value)} />
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
            <span className="hint" aria-live="polite">{left ? plural(left, "word") : "Ready to ask"}</span>
            <button className="btn btn-quiet btn-sm" type="button" disabled={left > 0 || step > 1} onClick={ask}>Ask Devika if this is fair</button>
          </div>
        </div></li>
        <li className={cls(2)}><span className="n">2</span><div>
          <h4>Devika decides</h4>
          <p>{step === 1 ? "She sees your restatement first. She can accept it or send it back with a note." : step === 2 ? "Waiting for Devika…" : "Devika: “Yes, that’s fair.” (simulated)"}</p>
        </div></li>
        <li className={cls(3)}><span className="n">3</span><div>
          <h4>Now add your view</h4>
          <label className="sr-only" htmlFor="g-reply">Your reply</label>
          <textarea ref={replyRef} className="field" id="g-reply" style={{ marginTop: 8 }} disabled={step < 3}
            placeholder={step < 3 ? "Opens once your restatement is accepted" : "Now your view. Her position is already there, in words she accepted."}
            value={reply} onChange={e => setReply(e.target.value)} />
          <button className="btn btn-primary btn-sm" type="button" style={{ marginTop: 8 }} disabled={step < 3 || words(reply) < 3 || published} onClick={() => setPublished(true)}>Publish both, in order</button>
          <p className={published ? "status ok" : "status"} role="status" aria-live="polite">
            {published ? "Published in order: your restatement first, then your reply. (Demonstration only.)" : ""}
          </p>
        </div></li>
      </ol>
      <p className="hint" style={{ marginTop: 14 }}>If she doesn&apos;t answer within 48 hours, you can still publish. It&apos;s marked “restatement not yet accepted”, so silence can&apos;t stall a conversation.</p>
    </>
  );
}

function ShareDemo() {
  const [take, setTake] = useState("");
  const [shared, setShared] = useState(false);
  const left = Math.max(0, 5 - words(take));
  return (
    <>
      <Head title="Share: your take travels with it." body="Add a few words of your own. The original stays attached, so nobody reads your reaction without the thing you're reacting to." tag="Demo · nothing is shared" />
      <div className="split">
        <div className="form-grid">
          <label className="lbl" htmlFor="s-take">Your take</label>
          <textarea className="field" id="s-take" maxLength={200} placeholder="Why are you sharing this?" value={take} onChange={e => { setTake(e.target.value); setShared(false); }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="hint" aria-live="polite">{left ? `Add ${plural(left, "word")} of your own` : "Your take is attached"}</span>
            <button className="btn btn-primary btn-sm" type="button" disabled={left > 0} onClick={() => setShared(true)}>Share</button>
          </div>
          <p className={shared ? "status ok" : "status"} role="status" aria-live="polite">{shared ? "Shared with the original attached. (Demonstration only.)" : ""}</p>
        </div>
        <div>
          <p className="hint" style={{ marginBottom: 8 }}>What others see</p>
          <div className="card shared">
            <div className="who"><b>You shared</b>Cities · just now</div>
            <p className="post-body" style={{ marginTop: 0 }}>{take.trim() || "Your words appear here, above the original."}</p>
            <div className="orig">
              <div className="post-head">
                <span className="av" style={{ "--c": "#C6E2CF" } as React.CSSProperties} aria-hidden="true">KM</span>
                <span className="who"><b>Karan Mehta</b>Cities · 3 hours ago</span>
                <Stamp k="asking" />
              </div>
              <p className="post-title" style={{ fontSize: 18 }}>What should your city fix before it builds anything new?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PrivacyDemo() {
  const [v, setV] = useState(3);
  const ring = RINGS[v - 1];
  return (
    <>
      <Head title="Privacy: choose who sees each thing." body="Not one setting buried in a menu. Every post, note and draft has its own circle, and you can see it before you share." tag="Demo" />
      <div className="rings">
        <div className="ringviz" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => <span key={i} className={i >= 5 - v ? "on" : undefined} style={{ "--k": i } as React.CSSProperties} />)}
          <b>Weekend cooking notes</b>
        </div>
        <div className="form-grid">
          <label className="lbl" htmlFor="r-range">Who can see “Weekend cooking notes”?</label>
          <input type="range" id="r-range" min={1} max={5} step={1} value={v} aria-valuetext={ring.who} onChange={e => setV(Number(e.target.value))} />
          <div className="ticks" aria-hidden="true"><span>Only you</span><span>Anyone</span></div>
          <p style={{ font: "500 22px/1.3 var(--serif)" }} aria-live="polite">{ring.who}</p>
          <p className="hint">{ring.desc}</p>
        </div>
      </div>
    </>
  );
}

