"use client";

import { useEffect, useMemo, useState } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";
import { questionId } from "@/content/learn/question-id";
import { MAX_QUIZ, PACES, quizHref, type Quiz } from "@/content/learn/quiz-link";
import type { PracticeBank, PracticeQuestion } from "@/content/learn/practice";

// Making a quiz for a class: pick questions from any chapter, set a title and
// whether it runs as practice or as a mock test, then share the link or print
// it with an answer key. The draft is kept on this device (vv-quiz) so a
// reload doesn't lose it; nothing is sent anywhere.
const KEY = "vv-quiz";
type Q = PracticeQuestion & { id: string };
const LETTERS = "ABCDEFGH";

function parse(raw: string): Quiz {
  try {
    const v = JSON.parse(raw) as Partial<Quiz>;
    return {
      ids: Array.isArray(v.ids) ? v.ids.filter((x): x is string => typeof x === "string").slice(0, MAX_QUIZ) : [],
      title: typeof v.title === "string" ? v.title.slice(0, 80) : "",
      mock: v.mock === true,
      pace: (PACES as readonly number[]).includes(Number(v.pace)) ? Number(v.pace) : 0,
    };
  } catch {
    return { ids: [], title: "", mock: false, pace: 0 };
  }
}

export default function QuizBuilder() {
  const [bank, setBank] = useState<{ units: PracticeBank["units"]; questions: Q[] } | null>(null);
  const [failed, setFailed] = useState(false);
  const [unit, setUnit] = useState("");
  const [chapter, setChapter] = useState("");
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");
  const quiz = parse(useDevice(KEY));
  const save = (next: Partial<Quiz>) => { setCopied(false); writeDevice(KEY, JSON.stringify({ ...quiz, ...next })); };

  useEffect(() => {
    let live = true;
    fetch("/practice-bank.json")
      .then(r => (r.ok ? r.json() as Promise<PracticeBank> : Promise.reject(new Error(String(r.status)))))
      .then(b => {
        if (!live) return;
        setBank({ units: b.units, questions: b.questions.map(q => ({ ...q, id: questionId(q.c, q.b, q.q) })) });
        setUnit(b.units[0]?.id ?? "");
        setOrigin(window.location.origin);
      })
      .catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, []);

  const byId = useMemo(() => new Map((bank?.questions ?? []).map(q => [q.id, q])), [bank]);
  const chapters = useMemo(() => {
    const m = new Map<string, { slug: string; title: string; n: number }>();
    for (const q of bank?.questions ?? []) if (q.u === unit) { const c = m.get(q.c) ?? { slug: q.c, title: q.ct, n: 0 }; c.n++; m.set(q.c, c); }
    return [...m.values()];
  }, [bank, unit]);
  const shown = (bank?.questions ?? []).filter(q => q.c === (chapter || chapters[0]?.slug));
  const chosen = quiz.ids.map(id => byId.get(id)).filter((q): q is Q => !!q);
  const full = chosen.length >= MAX_QUIZ;
  const has = new Set(quiz.ids);

  const toggle = (id: string) => save({ ids: has.has(id) ? quiz.ids.filter(x => x !== id) : full ? quiz.ids : [...quiz.ids, id] });
  const addAll = () => save({ ids: [...quiz.ids, ...shown.map(q => q.id).filter(id => !has.has(id))].slice(0, MAX_QUIZ) });
  const move = (i: number, d: number) => {
    const ids = chosen.map(q => q.id);
    const j = i + d;
    if (j < 0 || j >= ids.length) return;
    [ids[i], ids[j]] = [ids[j], ids[i]];
    save({ ids });
  };
  const href = chosen.length ? quizHref({ ...quiz, ids: chosen.map(q => q.id) }) : "";
  const link = origin && href ? origin + href : href;

  if (failed) return <div className="wrap pr-box"><p className="sub">The questions didn’t load. Check your connection and reload the page.</p></div>;
  if (!bank) return <div className="wrap pr-box" aria-busy="true"><p className="sub">Loading the questions…</p></div>;

  return (
    <>
      <div className="wrap qz qz-ui">
        <section className="qz-pick" aria-labelledby="qz-pick-h">
          <h2 id="qz-pick-h" className="h-xs"><span className="qz-n">1</span>Choose questions</h2>
          <div className="qz-filters">
            <div className="tl-f">
              <label htmlFor="qz-unit">Unit</label>
              <div className="tl-in"><select id="qz-unit" value={unit} onChange={e => { setUnit(e.target.value); setChapter(""); }}>
                {bank.units.map(u => <option key={u.id} value={u.id}>Unit {u.n} · {u.short}</option>)}
              </select></div>
            </div>
            <div className="tl-f">
              <label htmlFor="qz-ch">Chapter</label>
              <div className="tl-in"><select id="qz-ch" value={chapter || chapters[0]?.slug || ""} onChange={e => setChapter(e.target.value)}>
                {chapters.map(c => <option key={c.slug} value={c.slug}>{c.title} ({c.n})</option>)}
              </select></div>
            </div>
          </div>
          <div className="btn-row">
            <button type="button" className="btn btn-secondary" disabled={full || shown.every(q => has.has(q.id))} onClick={addAll}>Add all {shown.length} from this chapter</button>
          </div>
          <ol className="qz-list">
            {shown.map(q => (
              <li key={q.id}>
                <label className="qz-q">
                  <input type="checkbox" checked={has.has(q.id)} disabled={!has.has(q.id) && full} onChange={() => toggle(q.id)} />
                  <span>
                    <b>{q.q}</b>
                    <span className="qz-opts">{q.o.map((o, i) => <span key={o} className={i === q.a ? "ok" : ""}>{LETTERS[i]}. {o}</span>)}</span>
                    <span className="qz-c">{q.bn}</span>
                  </span>
                </label>
              </li>
            ))}
          </ol>
        </section>

        <aside className="qz-side" aria-labelledby="qz-set-h">
          <h2 id="qz-set-h" className="h-xs"><span className="qz-n">2</span>Your quiz <span className="qz-count">{chosen.length} of {MAX_QUIZ}</span></h2>
          {chosen.length === 0 ? <p className="ci-fine">Tick questions on the left. You can mix chapters and units.</p> : (
            <ol className="qz-chosen">
              {chosen.map((q, i) => (
                <li key={q.id}>
                  <span className="qz-cq">{q.q}<span className="qz-c">{q.ct}</span></span>
                  <span className="qz-acts">
                    <button type="button" aria-label="Move up" disabled={i === 0} onClick={() => move(i, -1)}>↑</button>
                    <button type="button" aria-label="Move down" disabled={i === chosen.length - 1} onClick={() => move(i, 1)}>↓</button>
                    <button type="button" aria-label="Remove" onClick={() => toggle(q.id)}>×</button>
                  </span>
                </li>
              ))}
            </ol>
          )}
          {chosen.length > 0 && <button type="button" className="pr-link" onClick={() => save({ ids: [] })}>Clear the quiz</button>}

          <div className="tl-f">
            <label htmlFor="qz-title">Title, shown to students</label>
            <div className="tl-in"><input id="qz-title" type="text" maxLength={80} placeholder="e.g. Unit 1 test, section B" value={quiz.title} onChange={e => save({ title: e.target.value })} /></div>
          </div>
          <fieldset className="qz-mode">
            <legend className="label">How it runs</legend>
            <label><input type="radio" name="qz-mode" checked={!quiz.mock} onChange={() => save({ mock: false })} /> Practice: each answer is shown, with why, as they go</label>
            <label><input type="radio" name="qz-mode" checked={quiz.mock} onChange={() => save({ mock: true })} /> Test: no answers until they submit</label>
          </fieldset>
          {quiz.mock && (
            <div className="tl-f">
              <label htmlFor="qz-pace">Time limit</label>
              <div className="tl-in"><select id="qz-pace" value={quiz.pace} onChange={e => save({ pace: Number(e.target.value) })}>
                <option value={0}>None</option>
                <option value={60}>1 minute a question{chosen.length ? ` (${chosen.length} min)` : ""}</option>
                <option value={90}>1½ minutes a question{chosen.length ? ` (${Math.round(chosen.length * 1.5)} min)` : ""}</option>
              </select></div>
            </div>
          )}

          <h2 className="h-xs"><span className="qz-n">3</span>Share or print</h2>
          {chosen.length === 0 ? <p className="ci-fine">The link appears once the quiz has a question.</p> : (
            <>
              <div className="tl-in qz-link"><input type="text" readOnly value={link} aria-label="Link to the quiz" onFocus={e => e.currentTarget.select()} /></div>
              <div className="btn-row">
                <button type="button" className="btn btn-primary" onClick={async () => { try { await navigator.clipboard.writeText(link); setCopied(true); } catch { setCopied(false); } }}>{copied ? "Link copied" : "Copy the link"}</button>
                <a className="btn btn-secondary" href={href} target="_blank" rel="noopener">Try it</a>
                <button type="button" className="btn btn-secondary" onClick={() => window.print()}>Print with answer key</button>
              </div>
              <p className="ci-fine">Students open the link on their own phone or computer; no sign-in. Their answers stay on their device, and at the end they can copy a line with their score to send you.</p>
            </>
          )}
        </aside>
      </div>

      {chosen.length > 0 && (
        <div className="qz-print" aria-hidden="true">
          <h1>{quiz.title || "Quiz"}</h1>
          <p>Name: ______________________ &nbsp; Date: ____________</p>
          <ol>
            {chosen.map(q => (
              <li key={q.id}>
                <p>{q.q}</p>
                <ol type="A">{q.o.map(o => <li key={o}>{o}</li>)}</ol>
              </li>
            ))}
          </ol>
          <section className="qz-key">
            <h2>Answer key{quiz.title ? `: ${quiz.title}` : ""}</h2>
            <ol>{chosen.map(q => <li key={q.id}><b>{LETTERS[q.a]}.</b> {q.w} <i>({q.bn}, {q.ct})</i></li>)}</ol>
          </section>
        </div>
      )}
    </>
  );
}
