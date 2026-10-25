"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { cardId, type PracticeBank, type PracticeQuestion } from "@/content/learn/practice";
import { questionId } from "@/content/learn/question-id";
import { useDone } from "./progress";
import { useStats, weakChapters } from "./stats";
import { clearReview, dayWord, dueIds, forget, recordAnswer, recordedLine, today, useReview, type Recorded } from "./review";

// The practice page: the reader's spaced review (questions they got wrong and
// terms they didn't know, back when they are due) and mixed practice (a set of
// questions, or of glossary terms as cards, drawn evenly from the chapters of
// the units they choose). Both come from /practice-bank.json, fetched when the
// page opens; answers and the review list stay on this device.
//
// A term card is carried as a question with no options: `q` is the term, `w`
// its meaning, `b` and `bn` the term's id and name, and `a` is 1, the answer
// "I knew it", so scoring treats both alike.

type Q = PracticeQuestion & { id: string; card?: true };
type Kind = "review" | "mixed" | "chapter";
type What = "questions" | "terms";
/** `guess`: the reader said they weren't sure before answering. */
type Answer = { picked: number; line: string | null; guess?: boolean };
/**
 * `chapter`: the chapter a chapter test is on. `exam`: a mock test, answered
 * without feedback until it is submitted, with an optional time limit.
 */
type Session = { kind: Kind; items: Q[]; i: number; answers: (Answer | null)[]; started: number; ended: number | null; chapter?: string; exam?: { limitMs: number | null } };

// Seconds allowed per question in a timed mock test.
const PACES = [{ s: 0, label: "No limit" }, { s: 60, label: "1 min a question" }, { s: 90, label: "1½ min a question" }] as const;

const KIND_LABEL: Record<Kind, string> = { review: "Spaced review", mixed: "Mixed practice", chapter: "Chapter test" };

const REVIEW_SET = 20;
const COUNTS = [10, 20, 40] as const;

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Up to n questions, taken in turn from each chapter so no chapter crowds out
// the rest, then shuffled so units and chapters come mixed.
function mix(pool: Q[], n: number): Q[] {
  const by = new Map<string, Q[]>();
  for (const q of pool) by.set(q.c, [...(by.get(q.c) ?? []), q]);
  const lists = shuffle([...by.values()].map(shuffle));
  const out: Q[] = [];
  for (let round = 0; out.length < n; round++) {
    let any = false;
    for (const l of lists) {
      if (round >= l.length) continue;
      any = true;
      out.push(l[round]);
      if (out.length === n) break;
    }
    if (!any) break;
  }
  return shuffle(out);
}

const lessonHref = (q: Q) => (q.card ? `/learn/glossary#${q.b}` : `/learn/${q.c}#${q.b}`);

function took(ms: number) {
  const s = Math.max(1, Math.round(ms / 1000));
  const m = Math.floor(s / 60);
  return m ? `${m} min ${s % 60} s` : `${s} s`;
}

export default function Practice() {
  const [bank, setBank] = useState<{ units: PracticeBank["units"]; questions: Q[]; cards: Q[] } | null>(null);
  const [what, setWhat] = useState<What>("questions");
  const [failed, setFailed] = useState(false);
  const [units, setUnits] = useState<string[] | null>(null);
  const [count, setCount] = useState<number>(20);
  const [onlyStarted, setOnlyStarted] = useState(false);
  const [onlyWeak, setOnlyWeak] = useState(false);
  const stats = useStats();
  const weak = useMemo(() => new Set(weakChapters(stats).map(c => c.slug)), [stats]);
  const [exam, setExam] = useState(false);
  const [pace, setPace] = useState<number>(60);
  const [session, setSession] = useState<Session | null>(null);
  const list = useReview();
  const done = useDone();
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let live = true;
    fetch("/practice-bank.json")
      .then(r => (r.ok ? r.json() as Promise<PracticeBank> : Promise.reject(new Error(String(r.status)))))
      .then(b => {
        if (!live) return;
        setBank({
          units: b.units,
          questions: b.questions.map(q => ({ ...q, id: questionId(q.c, q.b, q.q) })),
          cards: b.terms.map(t => ({ id: cardId(t.id), card: true, u: t.u, c: t.c, ct: t.ct, b: t.id, bn: t.t, q: t.t, o: [], a: 1, w: t.d })),
        });
        // A link from a unit ("Practise this unit") chooses that unit, and one
        // from the glossary starts on terms.
        const params = new URLSearchParams(window.location.search);
        const want = params.get("unit");
        if (want && b.units.some(u => u.id === want)) setUnits([want]);
        if (params.get("mode") === "terms") setWhat("terms");
        // "Test yourself on this chapter" starts straight away, once; the
        // address loses the chapter so a reload comes back to this page.
        const slug = params.get("chapter");
        const items = slug ? b.questions.filter(q => q.c === slug).map(q => ({ ...q, id: questionId(q.c, q.b, q.q) })) : [];
        if (items.length) {
          setSession({ kind: "chapter", chapter: slug!, items: shuffle(items), i: 0, answers: items.map(() => null), started: Date.now(), ended: null });
          history.replaceState(null, "", window.location.pathname);
        }
      })
      .catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, []);

  const byId = useMemo(() => new Map([...(bank?.questions ?? []), ...(bank?.cards ?? [])].map(q => [q.id, q])), [bank]);

  // Questions reworded or removed since they were listed can't be asked again.
  useEffect(() => {
    if (!bank) return;
    forget(Object.keys(list).filter(id => !byId.has(id)));
  }, [bank, byId, list]);

  const day = today();
  const due = dueIds(list).filter(id => byId.has(id));
  const listed = Object.keys(list).filter(id => byId.has(id));
  const nextDue = listed.length && !due.length ? Math.min(...listed.map(id => list[id].due)) - day : null;

  const chosen = units ?? bank?.units.map(u => u.id) ?? [];
  const started = useMemo(() => new Set([...done].map(id => id.split("#")[0])), [done]);
  const source = (what === "terms" ? bank?.cards : bank?.questions) ?? [];
  const pool = source.filter(q => chosen.includes(q.u) && (!onlyStarted || started.has(q.c)) && (!onlyWeak || what !== "questions" || weak.has(q.c)));
  const weakInChosen = new Set(source.filter(q => chosen.includes(q.u) && weak.has(q.c)).map(q => q.c)).size;
  const startedInChosen = new Set(source.filter(q => chosen.includes(q.u) && started.has(q.c)).map(q => q.c)).size;
  const noun = what === "terms" ? "terms" : "questions";

  const begin = (kind: Kind, items: Q[], chapter?: string, examMode?: Session["exam"]) => {
    setSession({ kind, items, i: 0, answers: items.map(() => null), started: Date.now(), ended: null, chapter, exam: examMode });
    window.setTimeout(() => top.current?.scrollIntoView({ block: "start" }), 0);
  };
  const startReview = () => begin("review", shuffle(due.slice(0, REVIEW_SET).map(id => byId.get(id)!)));
  const isExam = exam && what === "questions";
  const startMixed = () => {
    const items = mix(pool, count);
    begin("mixed", items, undefined, isExam ? { limitMs: pace ? pace * 1000 * items.length : null } : undefined);
  };
  const startChapter = (slug: string) => begin("chapter", shuffle((bank?.questions ?? []).filter(q => q.c === slug)), slug);

  const toggleUnit = (id: string) => {
    const next = chosen.includes(id) ? chosen.filter(x => x !== id) : [...chosen, id];
    setUnits(next);
  };

  if (failed) {
    return <div className="wrap pr-box" ref={top}><p className="sub">The questions didn’t load. Check your connection and reload the page.</p></div>;
  }
  if (!bank) {
    return <div className="wrap pr-box" ref={top} aria-busy="true"><p className="sub">Loading the questions…</p></div>;
  }

  if (session) {
    return (
      <div className="wrap pr-box" ref={top}>
        {session.ended === null
          ? <Run session={session} setSession={setSession} />
          : <Results session={session} dueLeft={due.length} onReview={startReview} onAgain={session.kind === "chapter" && session.chapter ? () => startChapter(session.chapter!) : startMixed} onBack={() => setSession(null)} />}
      </div>
    );
  }

  return (
    <div className="wrap pr-box" ref={top}>
      <div className="grid g2 pr-modes">
        <section className="cell pr-mode" id="review" aria-labelledby="pr-review-h">
          <span className="label red">Spaced review</span>
          <h2 id="pr-review-h" className="h-sm">
            {due.length ? `${due.length} to review today.` : listed.length ? "All caught up." : "Nothing to review yet."}
          </h2>
          <p className="pr-text">
            A question you get wrong, in a lesson or here, or a term you didn’t know, comes back the next day. Each time you get it right it waits longer: 3 days, then 7, then 21. Right at 21 days, it leaves the list. Get it wrong again and it starts over.
          </p>
          <ol className="pr-steps" aria-label="When a missed question comes back">
            <li><b>Missed</b>today</li>
            <li><b>1 day</b>later</li>
            <li><b>3 days</b>after that</li>
            <li><b>7 days</b>after that</li>
            <li><b>21 days</b>then it’s learned</li>
          </ol>
          {due.length > 0 && (
            <div className="btn-row">
              <button type="button" className="btn btn-primary btn-lg" onClick={startReview}>
                Review {Math.min(due.length, REVIEW_SET)} now
              </button>
            </div>
          )}
          {listed.length > 0 && (
            <p className="ci-fine">
              {listed.length} {listed.length === 1 ? "is" : "are"} on your list{nextDue !== null ? `; the next comes back ${dayWord(nextDue)}` : ""}.
              {due.length > REVIEW_SET && ` Reviews come ${REVIEW_SET} at a time.`}
              {" "}
              <button type="button" className="pr-link" onClick={() => { if (window.confirm("Clear your review list? This can’t be undone.")) clearReview(); }}>Clear the list</button>
            </p>
          )}
        </section>

        <section className="cell pr-mode" aria-labelledby="pr-mixed-h">
          <span className="label red">Mixed practice</span>
          <h2 id="pr-mixed-h" className="h-sm">{what === "terms" ? "Terms from across the chapters." : "Questions from across the chapters."}</h2>
          <p className="pr-text">
            {what === "terms"
              ? "Each card shows a glossary term. Say what it means to yourself, then turn it over and be honest: a term you didn’t know joins your review."
              : "Drawn evenly from every chapter you choose, in no order, the way an exam asks them. Jumping between topics feels harder, and it is why the ideas stay."}
          </p>

          <fieldset className="pr-set">
            <legend className="label">What to practise</legend>
            <div className="pr-chips">
              <button type="button" className="pr-chip" aria-pressed={what === "questions"} onClick={() => setWhat("questions")}><b>{bank.questions.length.toLocaleString("en-IN")}</b> questions</button>
              <button type="button" className="pr-chip" aria-pressed={what === "terms"} onClick={() => setWhat("terms")}><b>{bank.cards.length.toLocaleString("en-IN")}</b> glossary terms</button>
            </div>
          </fieldset>

          <fieldset className="pr-set">
            <legend className="label">Units</legend>
            <div className="pr-chips">
              {bank.units.map(u => (
                <button key={u.id} type="button" className="pr-chip" aria-pressed={chosen.includes(u.id)} onClick={() => toggleUnit(u.id)}>
                  <b>Unit {u.n}</b> {u.short}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="pr-set">
            <legend className="label">How many</legend>
            <div className="pr-chips">
              {COUNTS.map(n => (
                <button key={n} type="button" className="pr-chip" aria-pressed={count === n} onClick={() => setCount(n)}><b>{n}</b> {noun}</button>
              ))}
            </div>
          </fieldset>

          {what === "questions" && (
            <div className="pr-exam">
              <label className="pr-check">
                <input type="checkbox" checked={exam} onChange={e => setExam(e.target.checked)} />
                <span>Mock test: no answers until you submit</span>
              </label>
              {exam && (
                <div className="pr-chips" role="group" aria-label="Time limit">
                  {PACES.map(p => <button key={p.s} type="button" className="pr-chip" aria-pressed={pace === p.s} onClick={() => setPace(p.s)}>{p.label}</button>)}
                </div>
              )}
            </div>
          )}

          {what === "questions" && (
            <label className="pr-check">
              <input type="checkbox" checked={onlyWeak} disabled={!weakInChosen && !onlyWeak} onChange={e => setOnlyWeak(e.target.checked)} />
              <span>Only my weak chapters {weakInChosen ? `(${weakInChosen})` : "(none yet: they show once you’ve answered a few questions)"}</span>
            </label>
          )}

          <label className="pr-check">
            <input type="checkbox" checked={onlyStarted} disabled={!startedInChosen && !onlyStarted} onChange={e => setOnlyStarted(e.target.checked)} />
            <span>Only chapters I’ve started {startedInChosen ? `(${startedInChosen})` : "(none yet: finish a concept first)"}</span>
          </label>

          <div className="btn-row">
            <button type="button" className="btn btn-primary btn-lg" disabled={!pool.length} onClick={startMixed}>
              {!pool.length ? "Choose a unit" : isExam ? `Start a ${Math.min(count, pool.length)}-question mock test` : `Start ${Math.min(count, pool.length)} ${noun}`}
            </button>
          </div>
        </section>
      </div>
      <p className="ci-fine pr-foot">Your answers and review list are kept on this device only. Nobody else sees them, and clearing your browser’s site data removes them. <Link className="link" href="/learn/transfer" prefetch={false}>Move them to another device</Link>.</p>
    </div>
  );
}

function Run({ session, setSession }: { session: Session; setSession: (s: Session) => void }) {
  if (session.exam) return <MockRun session={session} setSession={setSession} />;
  const q = session.items[session.i];
  return q.card ? <CardRun key={session.i} session={session} setSession={setSession} /> : <QuestionRun key={session.i} session={session} setSession={setSession} />;
}

// One glossary term: recall it, turn it over, say whether you knew it.
function CardRun({ session, setSession }: { session: Session; setSession: (s: Session) => void }) {
  const q = session.items[session.i];
  const answer = session.answers[session.i];
  const last = session.i === session.items.length - 1;
  const [shown, setShown] = useState(false);
  const termRef = useRef<HTMLHeadingElement>(null);
  const showRef = useRef<HTMLButtonElement>(null);
  const knewRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { termRef.current?.focus({ preventScroll: true }); }, []);
  useEffect(() => { if (shown && !answer) knewRef.current?.focus({ preventScroll: true }); }, [shown, answer]);
  useEffect(() => { if (answer) nextRef.current?.focus({ preventScroll: true }); }, [answer]);

  const grade = useCallback((knew: boolean) => {
    if (session.answers[session.i]) return;
    const answers = [...session.answers];
    answers[session.i] = { picked: knew ? 1 : 0, line: recordedLine(recordAnswer(q.id, knew)) };
    setSession({ ...session, answers });
  }, [q.id, session, setSession]);

  const next = useCallback(() => {
    if (last) setSession({ ...session, ended: Date.now() });
    else setSession({ ...session, i: session.i + 1 });
  }, [last, session, setSession]);

  // Space or Enter turns the card; then 1 "not yet", 2 "I knew it"; Enter moves on.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const onButton = t?.tagName === "BUTTON" || t?.tagName === "A";
      if (!shown && (e.key === " " || e.key === "Enter") && !onButton) { e.preventDefault(); setShown(true); }
      else if (shown && !answer && (e.key === "1" || e.key === "2")) { e.preventDefault(); grade(e.key === "2"); }
      else if (answer && e.key === "Enter" && !onButton) { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [shown, answer, grade, next]);

  const n = session.items.length;
  const pct = Math.round(((session.i + (answer ? 1 : 0)) / n) * 100);

  return (
    <div className="pr-run">
      <div className="pr-bar">
        <span className="label red">{session.kind === "review" ? "Spaced review" : "Term cards"}</span>
        <span className="pg">
          <span className="pg-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>
          <span className="pg-t">Card {session.i + 1} of {n}</span>
        </span>
        <button type="button" className="btn btn-ghost pr-end" onClick={() => setSession({ ...session, ended: Date.now() })}>End here</button>
      </div>

      <div className={shown ? "pr-card turned" : "pr-card"}>
        <p className="pr-from">Glossary · {q.ct}</p>
        <h2 className="pr-term" ref={termRef} tabIndex={-1}>{q.q}</h2>
        {!shown && (
          <>
            <p className="pr-text">What does it mean? Say it to yourself, then turn the card.</p>
            <div className="btn-row"><button type="button" className="btn btn-primary" ref={showRef} onClick={() => setShown(true)}>Show the meaning</button></div>
          </>
        )}
        <div className={shown ? "reveal open" : "reveal"} aria-live="polite" inert={!shown}>
          <div className="reveal-in">
            <div className="pr-ans">
              <p className="pr-def">{q.w}</p>
              {!answer ? (
                <div className="btn-row" role="group" aria-label="Did you know it?">
                  <button type="button" className="btn btn-secondary" onClick={() => grade(false)}><span className="pr-key" aria-hidden="true">1</span>Not yet</button>
                  <button type="button" className="btn btn-primary" ref={knewRef} onClick={() => grade(true)}><span className="pr-key" aria-hidden="true">2</span>I knew it</button>
                </div>
              ) : (
                <>
                  {answer.line && <p className="pr-line">{answer.line}</p>}
                  <div className="btn-row">
                    <button type="button" className="btn btn-primary" ref={nextRef} onClick={next}>{last ? "See how you did" : "Next card"}</button>
                    <a className="btn btn-ghost" href={lessonHref(q)} target="_blank" rel="noopener">Open in the glossary</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="ci-fine pr-keys">Keys: Space to turn the card, then 1 for not yet or 2 if you knew it, and Enter for the next.</p>
    </div>
  );
}

function QuestionRun({ session, setSession }: { session: Session; setSession: (s: Session) => void }) {
  const q = session.items[session.i];
  const answer = session.answers[session.i];
  const last = session.i === session.items.length - 1;
  const qRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const qId = useId();
  const [guessing, setGuessing] = useState(false);

  // A new question takes focus, so it is read out and the keys work at once.
  useEffect(() => { qRef.current?.focus({ preventScroll: true }); }, [session.i]);
  useEffect(() => { if (answer) nextRef.current?.focus({ preventScroll: true }); }, [answer]);

  const pick = useCallback((i: number) => {
    if (session.answers[session.i]) return;
    const right = i === q.a;
    // A lucky guess isn't learned yet: it comes back tomorrow, like a miss,
    // though it still counts as right.
    const r: Recorded | null = recordAnswer(q.id, right && !guessing);
    const answers = [...session.answers];
    const line = right && guessing ? "Right, but a guess: it comes back tomorrow so you can be sure of it." : recordedLine(r);
    answers[session.i] = { picked: i, line, guess: guessing };
    setSession({ ...session, answers });
  }, [q, session, setSession, guessing]);

  const next = useCallback(() => {
    if (last) setSession({ ...session, ended: Date.now() });
    else setSession({ ...session, i: session.i + 1 });
  }, [last, session, setSession]);

  // 1 to 4 answer, Enter moves on.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const n = Number(e.key);
      if (!answer && Number.isInteger(n) && n >= 1 && n <= q.o.length) { e.preventDefault(); pick(n - 1); }
      else if (!answer && (e.key === "g" || e.key === "G")) { e.preventDefault(); setGuessing(g => !g); }
      else if (answer && e.key === "Enter" && t?.tagName !== "BUTTON" && t?.tagName !== "A") { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, next, pick, q.o.length]);

  const right = answer?.picked === q.a;
  const n = session.items.length;
  const pct = Math.round(((session.i + (answer ? 1 : 0)) / n) * 100);

  return (
    <div className="pr-run">
      <div className="pr-bar">
        <span className="label red">{session.kind === "chapter" ? `${KIND_LABEL.chapter} · ${q.ct}` : KIND_LABEL[session.kind]}</span>
        <span className="pg">
          <span className="pg-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>
          <span className="pg-t">Question {session.i + 1} of {n}</span>
        </span>
        <button type="button" className="btn btn-ghost pr-end" onClick={() => setSession({ ...session, ended: Date.now() })}>End here</button>
      </div>

      <p className="pr-from">{q.ct} · {q.bn}</p>
      <h2 className="pr-q" id={qId} ref={qRef} tabIndex={-1}>{q.q}</h2>
      {!answer && (
        <button type="button" className="pr-guess" aria-pressed={guessing} onClick={() => setGuessing(g => !g)}>
          <span className="pr-box-tick" aria-hidden="true">{guessing ? "✓" : ""}</span>I’m not sure: mark my answer as a guess
        </button>
      )}
      <div className="ck-opts pr-opts" role="group" aria-labelledby={qId}>
        {q.o.map((o, i) => {
          const state = answer ? (i === q.a ? " right" : answer.picked === i ? " wrong" : "") : "";
          return (
            <button key={o} type="button" className={`btn btn-secondary ck-opt${state}`} aria-pressed={answer?.picked === i} disabled={!!answer && answer.picked !== i && i !== q.a} onClick={() => pick(i)}>
              <span className="pr-key" aria-hidden="true">{i + 1}</span>{o}
            </button>
          );
        })}
      </div>

      <div className={answer ? "reveal open" : "reveal"} aria-live="polite" inert={!answer}>
        <div className="reveal-in">
          <div className="pr-ans">
            <p className="ck-a"><b>{right ? "Correct. " : "Not quite. "}</b>{answer && !right && <>The answer is “{q.o[q.a]}”. </>}{answer && q.w}</p>
            {answer?.line && <p className="pr-line">{answer.line}</p>}
            <div className="btn-row">
              <button type="button" className="btn btn-primary" ref={nextRef} onClick={next}>{last ? "See how you did" : "Next question"}</button>
              <a className="btn btn-ghost" href={lessonHref(q)} target="_blank" rel="noopener">Read this concept</a>
            </div>
          </div>
        </div>
      </div>
      <p className="ci-fine pr-keys">Keys: 1 to {q.o.length} to answer, G to mark a guess first, Enter for the next question.</p>
    </div>
  );
}

const clock = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

// A mock test: answers can be changed until it is submitted, nothing is
// marked until then, and a time limit, if set, submits it when it runs out.
// Submitting records every answer for review; a question left blank counts
// as missed.
function MockRun({ session, setSession }: { session: Session; setSession: (s: Session) => void }) {
  const q = session.items[session.i];
  const answer = session.answers[session.i];
  const n = session.items.length;
  const limit = session.exam?.limitMs ?? null;
  const [now, setNow] = useState(session.started);
  const qRef = useRef<HTMLHeadingElement>(null);
  const qId = useId();
  const left = limit === null ? null : session.started + limit - now;
  const answeredN = session.answers.filter(Boolean).length;

  const submit = useCallback(() => {
    const answers = session.answers.map((a, i) => {
      const item = session.items[i];
      const picked = a?.picked ?? -1;
      recordAnswer(item.id, picked === item.a);
      return { picked, line: null };
    });
    setSession({ ...session, answers, ended: Date.now() });
  }, [session, setSession]);

  useEffect(() => {
    if (limit === null) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [limit]);
  useEffect(() => { if (left !== null && left <= 0) submit(); }, [left, submit]);
  useEffect(() => { qRef.current?.focus({ preventScroll: true }); }, [session.i]);

  const pick = (i: number) => {
    const answers = [...session.answers];
    answers[session.i] = { picked: i, line: null };
    setSession({ ...session, answers });
  };
  const go = (i: number) => setSession({ ...session, i: Math.max(0, Math.min(n - 1, i)) });
  const finish = () => {
    const blank = n - answeredN;
    if (blank && !window.confirm(`${blank} ${blank === 1 ? "question is" : "questions are"} unanswered and will count as missed. Submit anyway?`)) return;
    submit();
  };

  // 1 to 4 answer; arrow keys move between questions.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      const k = Number(e.key);
      if (Number.isInteger(k) && k >= 1 && k <= q.o.length) {
        e.preventDefault();
        const answers = [...session.answers];
        answers[session.i] = { picked: k - 1, line: null };
        setSession({ ...session, answers });
      } else if (e.key === "ArrowRight") { e.preventDefault(); setSession({ ...session, i: Math.min(n - 1, session.i + 1) }); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); setSession({ ...session, i: Math.max(0, session.i - 1) }); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q.o.length, n, session, setSession]);

  return (
    <div className="pr-run">
      <div className="pr-bar">
        <span className="label red">Mock test</span>
        <span className="pg"><span className="pg-t">{answeredN} of {n} answered</span></span>
        {left !== null && <span className={left < 60_000 ? "pr-timer low" : "pr-timer"} role="timer" aria-label="Time left">{clock(left)}</span>}
        <button type="button" className="btn btn-primary pr-end" onClick={finish}>Submit</button>
      </div>

      <nav className="pr-grid-nav" aria-label="Questions">
        {session.items.map((_, i) => (
          <button key={i} type="button" className={session.answers[i] ? "done" : ""} aria-current={i === session.i ? "step" : undefined} onClick={() => go(i)}>
            {i + 1}<span className="sr-only">{session.answers[i] ? ", answered" : ", not answered"}</span>
          </button>
        ))}
      </nav>

      <p className="pr-from">Question {session.i + 1} of {n} · {q.ct}</p>
      <h2 className="pr-q" id={qId} ref={qRef} tabIndex={-1}>{q.q}</h2>
      <div className="ck-opts pr-opts" role="radiogroup" aria-labelledby={qId}>
        {q.o.map((o, i) => (
          <button key={o} type="button" role="radio" aria-checked={answer?.picked === i} className={answer?.picked === i ? "btn btn-secondary ck-opt chosen" : "btn btn-secondary ck-opt"} onClick={() => pick(i)}>
            <span className="pr-key" aria-hidden="true">{i + 1}</span>{o}
          </button>
        ))}
      </div>
      <div className="btn-row">
        <button type="button" className="btn btn-secondary" disabled={session.i === 0} onClick={() => go(session.i - 1)}>Previous</button>
        {session.i < n - 1
          ? <button type="button" className="btn btn-primary" onClick={() => go(session.i + 1)}>Next</button>
          : <button type="button" className="btn btn-primary" onClick={finish}>Submit the test</button>}
      </div>
      <p className="ci-fine pr-keys">Keys: 1 to {q.o.length} to answer, ← and → to move. You can change any answer until you submit.</p>
    </div>
  );
}

function Results({ session, dueLeft, onReview, onAgain, onBack }: { session: Session; dueLeft: number; onReview: () => void; onAgain: () => void; onBack: () => void }) {
  const asked = session.items.map((q, i) => ({ q, a: session.answers[i] })).filter((x): x is { q: Q; a: Answer } => x.a !== null);
  const rightN = asked.filter(x => x.a.picked === x.q.a).length;
  const allCards = asked.length > 0 && asked.every(x => x.q.card);
  const missed = asked.filter(x => x.a.picked !== x.q.a);
  const lucky = asked.filter(x => x.a.guess && x.a.picked === x.q.a).length;
  const h = useRef<HTMLHeadingElement>(null);
  useEffect(() => { h.current?.focus({ preventScroll: true }); }, []);

  // Chapters with something to reread, the most missed first, each with the
  // concepts whose questions were missed.
  const chapters = new Map<string, { slug: string; title: string; asked: number; right: number; concepts: Map<string, Q> }>();
  for (const { q, a } of asked) {
    const c = chapters.get(q.c) ?? { slug: q.c, title: q.ct, asked: 0, right: 0, concepts: new Map() };
    c.asked++;
    if (a.picked === q.a) c.right++;
    else c.concepts.set(q.b, q);
    chapters.set(q.c, c);
  }
  // Results only show once the session has ended.
  const ms = (session.ended ?? session.started) - session.started;
  const reread = [...chapters.values()].filter(c => c.right < c.asked).sort((a, b) => (b.asked - b.right) - (a.asked - a.right));

  return (
    <div className="pr-res">
      <span className="label red">{session.kind === "review" ? "Review done" : session.exam ? "Mock test done" : session.kind === "chapter" ? "Chapter test done" : allCards ? "Cards done" : "Practice done"}</span>
      <h2 className="h-sm pr-score" ref={h} tabIndex={-1}>
        {!asked.length ? "Nothing answered." : allCards ? `Knew ${rightN} of ${asked.length}.` : `${rightN} of ${asked.length} right.`}
      </h2>
      {asked.length > 0 && (
        <p className="pr-text">
          Took {took(ms)}, about {took(ms / asked.length)} each.
          {missed.length > 0 && ` The ${missed.length === 1 ? "one" : missed.length} you missed ${missed.length === 1 ? "is" : "are"} on your review list for tomorrow.`}
          {lucky > 0 && ` ${lucky === 1 ? "One right answer was a guess; it comes" : `${lucky} right answers were guesses; they come`} back tomorrow too.`}
          {missed.length > 0 && allCards && " The terms below link to the glossary."}
        </p>
      )}

      {reread.length > 0 && (
        <div className="pr-reread">
          <h3 className="h-xs">Worth reading again</h3>
          <ul>
            {reread.map(c => (
              <li key={c.slug}>
                <span className="pr-rc"><b>{c.title}</b><span>{c.right} of {c.asked} {allCards ? "known" : "right"}</span></span>
                <span className="pr-rl">
                  {[...c.concepts.values()].map(q => <Link key={q.b} className="link" href={lessonHref(q)}>{q.bn}</Link>)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {session.exam && (
        <div className="pr-review">
          <h3 className="h-xs">Every question, with the answer</h3>
          <ol>
            {asked.map(({ q, a }, i) => {
              const ok = a.picked === q.a;
              return (
                <li key={q.id} className={ok ? "ok" : "miss"}>
                  <p className="pr-rq"><span className="pr-rn">{i + 1}</span>{q.q}</p>
                  <p className="pr-ra">
                    {a.picked < 0 ? <b>Not answered.</b> : ok ? <b>Right: “{q.o[q.a]}”.</b> : <><b>You chose “{q.o[a.picked]}”.</b> The answer is “{q.o[q.a]}”.</>}
                    {" "}{q.w}
                  </p>
                  <Link className="link" href={lessonHref(q)}>{q.bn}, in {q.ct}</Link>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className="btn-row">
        {session.kind === "review"
          ? dueLeft > 0 && <button type="button" className="btn btn-primary btn-lg" onClick={onReview}>Review the next {Math.min(dueLeft, REVIEW_SET)}</button>
          : <button type="button" className="btn btn-primary btn-lg" onClick={onAgain}>{session.kind === "chapter" ? "Take it again" : "Another set"}</button>}
        <button type="button" className="btn btn-secondary btn-lg" onClick={onBack}>Back to practice</button>
      </div>
    </div>
  );
}
