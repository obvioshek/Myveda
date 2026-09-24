"use client";

import React, { useEffect, useRef, useState } from "react";
import Avatar from "@/components/Avatar";
import { ping } from "@/lib/ping";

/* The interactive pieces of "How it works". Each one is a port of the
   matching module in the reference page's script (numbers kept), rebuilt
   as React state instead of DOM writes. */

/* ═══ 30. FOLLOW TOPICS — interests, not identities. Counted for you alone. */
const TOPICS: [string, boolean][] = [
  ["Everyday life", true], ["Food", false], ["Books & writing", true], ["Cities", true],
  ["Education", false], ["Work", false], ["Photography", false], ["Science", false],
  ["Technology", false], ["Relationships", false], ["Culture", false], ["Ideas", false]
];

export function FollowTopics() {
  const [on, setOn] = useState<Set<string>>(() => new Set(TOPICS.filter(t => t[1]).map(t => t[0])));
  const n = on.size;
  return (
    <>
      <div className="chips topics" id="topics" role="group" aria-label="Topics to follow">
        {TOPICS.map(([t]) => (
          <button
            key={t}
            type="button"
            aria-pressed={on.has(t)}
            onClick={() => {
              const next = new Set(on);
              if (next.has(t)) next.delete(t); else next.add(t);
              setOn(next);
              ping(1);
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="small" id="topicSay" aria-live="polite" style={{ marginTop: "1em" }}>
        {n
          ? `Following ${n}${n === 1 ? " topic" : " topics"}. Your feed draws from these and the people you follow — plus one clearly labelled perspective you have not met.`
          : "Follow a topic or two and your feed starts there."}
      </p>
    </>
  );
}

/* ═══ 20. chapter marks, not a watch-time bar: the divisions are where the
   argument turns, proportional to the real chapter lengths */
const CHAPTERS = [4.17, 7.42, 6.45, 5.96];
const CH_TOTAL = CHAPTERS.reduce((a, b) => a + b, 0);

export function VideoChapters() {
  const [seen, setSeen] = useState(0);
  return (
    <div className="scrub" id="scrub" aria-hidden="true">
      {CHAPTERS.map((c, k) => (
        <i
          key={k}
          className={k <= seen ? "seen" : undefined}
          style={{ flex: (c / CH_TOTAL).toFixed(3) }}
          onClick={() => { setSeen(k); ping(k); }}
        ></i>
      ))}
    </div>
  );
}

/* ═══ 21. THE PURVAPAKSA GATE
   The classical order is purvapaksa, then uttarapaksa, then siddhanta: the
   opponent's view stated fairly, then the reply, then what is settled. The
   reply box is genuinely inert until the other person has agreed that your
   version of their argument is one they would sign. */
const GATE_MIN = 12;
/* length alone is trivially gamed; the restatement has to meet her reason */
const GATE_REASON = /pause|catch|recipe|seat|table|week|belong/i;

export function DiscussGate() {
  const [text, setText] = useState("");
  const [stage, setStage] = useState<"write" | "reading" | "accepted">("write");
  const [reply, setReply] = useState("");
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const [published, setPublished] = useState(false);
  const replyRef = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const left = Math.max(0, GATE_MIN - words);
  const meets = GATE_REASON.test(text);
  const ready = left === 0 && meets;
  const count = `${words}${words === 1 ? " word" : " words"}${left
    ? ` · ${left} to go`
    : meets ? " · and it meets her reason" : " · now name her reason, not only her conclusion"}`;

  const ask = () => {
    if (!ready || stage !== "write") return;
    setStage("reading");
    ping(2);
    timer.current = setTimeout(() => {
      setStage("accepted");
      ping(5);
      setTimeout(() => { try { replyRef.current?.focus({ preventScroll: true }); } catch { /* older browsers */ } }, 120);
    }, 1900);
  };

  const publish = () => {
    if (stage !== "accepted" || published) return;
    const v = reply.trim();
    if (!v) { setNote({ text: "Write something first.", ok: false }); return; }
    setNote({ text: "Published — her position first, then yours.", ok: true });
    setPublished(true);
    ping(4);
  };

  const s2 = stage === "write" ? "now" : "done";
  const s3 = stage === "write" ? "wait" : stage === "reading" ? "now" : "done";
  const open = stage === "accepted";

  return (
    <div className="gate">
      <div>
        <div className="gstep done" id="gs1">
          <div className="gn"><i>1</i>Her position</div>
          <h4>Devika Menon</h4>
          <p className="quote">In my family, our Sunday meal was never just about food. It was a weekly pause, a way to catch up, share recipes, and make sure everyone had a seat at the table. Calling it simply a “tradition” misses why it mattered.</p>
        </div>

        <div className={`gstep ${s2}`} id="gs2">
          <div className="gn"><i>2</i>Say it back</div>
          <h4>Put her case as fairly as she would</h4>
          <p>Not a summary and not a caricature. If she would not recognise her own point in it, it does not count.</p>
          <textarea
            id="pvText"
            rows={3}
            placeholder="Their position, in your own words…"
            aria-label="State the other view"
            aria-describedby="pvCnt"
            value={text}
            readOnly={stage !== "write"}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <div className="gbar">
            <button className="btn btn-p" id="pvAsk" type="button" disabled={!ready || stage !== "write"} onClick={ask}>
              <span>Ask Devika if this is fair</span><span className="arw" aria-hidden="true">→</span>
            </button>
            <span className={`cnt${ready ? " ok" : ""}`} id="pvCnt">{count}</span>
          </div>
        </div>

        <div className={`gstep ${s3}`} id="gs3" aria-live="polite">
          <div className="gn"><i>3</i>Her call</div>
          <h4 id="gs3h">
            {stage === "write" ? "Waiting for Devika" : stage === "reading" ? "Devika is reading it…" : "“Yes — that's my position.”"}
          </h4>
          <p id="gs3p">
            {stage === "write"
              ? "She sees your restatement before your reply. She can accept it, or send it back with a note."
              : stage === "reading"
                ? "She sees only your restatement. Your reply is still sealed."
                : "Accepted, so the reply box is open. Had she sent it back, you would be rewriting it, not arguing."}
          </p>
        </div>
      </div>

      <div>
        <div className={`gstep locked${open ? " open" : ""}`} id="rebutBox">
          <div className="veil">
            <div>
              <svg width="26" height="26" aria-hidden="true"><use href="#i-lock"/></svg>
              <span>Your reply opens once the restatement is accepted</span>
            </div>
          </div>
          <div className="gn"><i>4</i>Your reply</div>
          <h4>Now add your perspective</h4>
          <p>Her position is already there in the words she accepted. Build from it.</p>
          <textarea
            ref={replyRef}
            id="rbText"
            rows={4}
            placeholder="Your reply…"
            aria-label="Your reply"
            value={reply}
            readOnly={published}
            disabled={!open}
            onChange={e => setReply(e.target.value)}
          ></textarea>
          <div className="gbar">
            <button className="btn btn-p" id="rbPost" type="button" disabled={!open || published} onClick={publish}><span>Publish</span></button>
            <span className={`cnt${note?.ok ? " ok" : ""}`} id="rbNote" aria-live="polite">{note ? note.text : "Both parts publish together, in order."}</span>
          </div>
        </div>
        <p className="small" style={{ marginTop: "1.1em" }}>The point is simple: understanding the other side should happen before the rebuttal, not after the damage is done.</p>
      </div>
    </div>
  );
}

/* ═══ 32. SHARE WITH YOUR TAKE — a reshare needs a few words of your own; a
   save is private and never becomes a count. */
type ShareMode = "take" | "quote" | "send" | "save";
const SHARE: Record<ShareMode, { opt: string; lab: string; ph: string; min: number; btn: string; head: string; who: string; done: string }> = {
  take: { opt: "Share with your take", lab: "Your take", ph: "What do you think—and why is it useful to share?", min: 5, btn: "Share", head: "What others see", who: "Ananya Krishnan shared", done: "Shared with the original attached." },
  quote: { opt: "Quote a line", lab: "The line you are quoting, and why it matters", ph: "“The next useful action” is the part I keep coming back to.", min: 5, btn: "Quote", head: "What others see", who: "Ananya Krishnan quoted", done: "Quoted. The original context stays attached." },
  send: { opt: "Send to a friend", lab: "A note for your friend — optional", ph: "Thought of you when I read this", min: 0, btn: "Send", head: "What your friend sees", who: "From Ananya", done: "Sent. It will arrive in their next message window." },
  save: { opt: "Save for later", lab: "", ph: "", min: 0, btn: "Save", head: "Only you see this", who: "Saved to Read later", done: "Saved. Only you can see it." }
};

export function ShareDemo() {
  const [mode, setMode] = useState<ShareMode>("take");
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const m = SHARE[mode];
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const left = Math.max(0, m.min - words);
  const hint = done ? m.done
    : mode === "save" ? "Private, always."
    : left ? `Add ${left} more word${left === 1 ? "" : "s"} of your own`
    : m.min ? "Ready—your words go first, and the original travels with them" : "Ready";
  const take = mode === "save"
    ? "Saved posts live in a private list. There is no public save count."
    : (text.trim() || "Your words appear here, above the original.");

  return (
    <>
      <div className="pick" id="shareOpt">
        {(Object.keys(SHARE) as ShareMode[]).map(k => (
          <button key={k} type="button" aria-pressed={mode === k} data-s={k} onClick={() => { setMode(k); setDone(false); ping(1); }}>
            {SHARE[k].opt}
          </button>
        ))}
      </div>
      <div className="sgrid">
        <div>
          <label className="clab" htmlFor="stake" id="stakeLab" hidden={mode === "save"}>{m.lab}</label>
          <textarea
            id="stake"
            className="cin"
            rows={3}
            placeholder={m.ph}
            hidden={mode === "save"}
            value={text}
            onChange={e => { setText(e.target.value); setDone(false); }}
          ></textarea>
          <div className="gbar">
            <button className="btn btn-p" id="sgo" type="button" disabled={left > 0} onClick={() => { if (left > 0) return; setDone(true); ping(4); }}>
              <span id="sgoTx">{m.btn}</span>
            </button>
            <span className={`cnt${!left || done ? " ok" : ""}`} id="shint" aria-live="polite">{hint}</span>
          </div>
        </div>
        <div className="sprev">
          <span className="hint" id="sprevH">{m.head}</span>
          <article className="post shared">
            <div className="post-h"><Avatar name="Ananya Krishnan" /><div><div className="who" id="sprevWho">{m.who}</div><div className="mt">Work · just now</div></div></div>
            <div className="body" id="sprevTake">{take}</div>
            <div className="qpost">
              <div className="post-h"><Avatar name="Karan Mehta" /><div><div className="who">Karan Mehta</div><div className="mt">Work · Question</div></div></div>
              <b className="ptitle"><span className="kind k-q">Question</span>What helps a team stay steady when work gets stressful?</b>
              <p>I have found that focusing on the next useful action helps a team more than obsessing over the final outcome. What has worked for you in a high-pressure workplace?</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

/* ═══ 23. SAMVAD — the calm inbox
   Three predictable delivery windows a day. Batching beat real-time delivery,
   and it also beat switching notifications off, which raised anxiety and fear
   of missing out. Calm is a rhythm, not an absence. */
const WINDOWS = [9, 13, 18]; /* 9am, 1pm, 6pm */

function nextWindow(d: Date) {
  const h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
  for (const w of WINDOWS) {
    if (w > h || (w === h && m === 0 && s === 0)) return { h: w, day: 0 };
  }
  return { h: WINDOWS[0], day: 1 };
}

function windowLabel(h: number) {
  return `${h % 12 || 12}:00 ${h >= 12 ? "pm" : "am"}`;
}

function windowNow() {
  const d = new Date(), w = nextWindow(d);
  const t = new Date(d.getFullYear(), d.getMonth(), d.getDate() + w.day, w.h, 0, 0);
  const mins = Math.floor(Math.max(0, t.getTime() - d.getTime()) / 60000), hrs = Math.floor(mins / 60);
  return { at: windowLabel(w.h), in: hrs > 0 ? `${hrs}h ${mins % 60}m` : `${mins + 1}m` };
}

export function CalmInbox() {
  // the server does not know the visitor's clock, so the countdown starts
  // after hydration; until then the reference's placeholder shows
  const [win, setWin] = useState({ at: "6:00 pm", in: "2h 14m" });
  const [quiet, setQuiet] = useState(false);
  const [why, setWhy] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setWin(windowNow());
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  const defaultWhy = quiet
    ? "Nobody is told you are in quiet mode. There is no “away” badge to perform."
    : "Read receipts are off by design. There is no pressure to be instantly available.";

  return (
    <div className="inbox">
      <div className="inbox-h">
        <b>Messages</b>
        <span className="win"><svg width="14" height="14" aria-hidden="true"><use href="#i-clock"/></svg>Next delivery window <i id="winAt">{win.at}</i> · in <i id="winIn">{win.in}</i></span>
      </div>
      <div className="inbox-b" id="inboxBody">
        <div className="held"><Avatar name="Aarav Doshi" /><div className="bd"><div className="who">Aarav Doshi · waiting</div><div className="tx">Sent you the updated reading list—no rush to reply.</div></div></div>
        <div className="held"><Avatar name="Pema Lhamo" /><div className="bd"><div className="who">Pema Lhamo · waiting</div><div className="tx">Are you joining the Thursday session? Tomorrow is fine.</div></div></div>
        <div className={`mauna${quiet ? " on" : ""}`} id="mauna">
          <svg width="17" height="17" aria-hidden="true"><use href="#i-mauna"/></svg>
          <span id="maunaTx">{quiet ? "Quiet mode is on — messages are held until you come back" : "Quiet mode is off—messages arrive at the next window"}</span>
          <button
            className="sw"
            id="maunaSw"
            type="button"
            role="switch"
            aria-checked={quiet}
            aria-label="Quiet mode"
            onClick={() => { setQuiet(!quiet); setWhy(null); ping(quiet ? 3 : 1); }}
          ></button>
        </div>
      </div>
      <div className="inbox-f">
        <button type="button" id="sendNow" onClick={() => { setWhy("Sent. The window is a default, never a wall."); ping(4); }}>Send mine now</button>
        <button type="button" id="keepBatched" onClick={() => { setWhy("Held. It will go out with the rest at the next window."); ping(2); }}>Keep it for the next window</button>
        <span className="why" id="inboxWhy" aria-live="polite">{why ?? defaultWhy}</span>
      </div>
    </div>
  );
}
