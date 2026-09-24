"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/app/Icon";
import { Avatar } from "@/components/app/bits";
import { completeOnboarding, skipOnboarding } from "@/actions/app/profile";
import { BRINGS } from "@/lib/app/labels";
import type { PersonRef } from "@/lib/app/types";

interface Props {
  replay: boolean;
  topics: string[];
  initial: { topics: string[]; askAbout: string[]; brings: string; follows: string[]; circle: string | null };
  people: (PersonRef & { line: string })[];
  circles: { id: string; name: string; week: string; topics: string[] }[];
}

const toggle = (arr: string[], v: string, max?: number) =>
  arr.includes(v) ? arr.filter(x => x !== v) : max && arr.length >= max ? arr : [...arr, v];

export default function Onboarding({ replay, topics, initial, people, circles }: Props) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [chosen, setChosen] = useState<string[]>(initial.topics);
  const [brings, setBrings] = useState(initial.brings);
  const [askAbout, setAskAbout] = useState<string[]>(initial.askAbout);
  const [follows, setFollows] = useState<string[]>(initial.follows);
  const [circle, setCircle] = useState<string | null>(initial.circle);
  const [guess, setGuess] = useState<"documented" | "told" | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // circles that match what you chose first
  const suggestedCircles = [...circles]
    .sort((a, b) => Number(b.topics.some(t => chosen.includes(t))) - Number(a.topics.some(t => chosen.includes(t))))
    .slice(0, 2);
  const askOptions = Array.from(new Set([...chosen, ...topics])).slice(0, 8);
  const nextOff = (step === 1 && chosen.length < 3) || (step === 4 && !guess) || busy;

  async function next() {
    if (step < 4) { setStep(step + 1); return; }
    setBusy(true);
    const r = await completeOnboarding({ topics: chosen, brings, askAbout, follows, circle });
    setBusy(false);
    if (!r.ok) { setError(r.error); return; }
    router.push("/home?welcome=1");
  }

  return (
    <div className="onb">
      <div className="onb-top">
        <span className="house-mark" style={{ width: 32, height: 32 }}><Icon name="logo" /></span>
        <span style={{ fontFamily: "var(--font-heading)", fontSize: 19, flex: 1 }}>Veda Verse</span>
        <div className="dots" aria-hidden="true">
          {[1, 2, 3, 4].map(i => <span key={i} className={i === step ? "now" : i < step ? "done" : ""} />)}
        </div>
      </div>
      <div className="onb-body">
        <div className="kicker" style={{ fontSize: 13 }} aria-live="polite">Step {step} of 4</div>

        {step === 1 && (
          <>
            <h1>What are you curious about?</h1>
            <p className="lede">Pick three or more. They shape your daily Edition.</p>
            <div className="wrap-chips" style={{ gap: 8 }} role="group" aria-label="Topics">
              {topics.map(t => (
                <button key={t} type="button" className="pill" aria-pressed={chosen.includes(t)} onClick={() => setChosen(toggle(chosen, t))}>
                  {chosen.includes(t) ? "✓ " : ""}{t}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1>What brings you here?</h1>
            <div className="stack" style={{ gap: 8 }} role="group" aria-label="What brings you here">
              {BRINGS.map(([name, desc]) => (
                <button key={name} type="button" className="choice" aria-pressed={brings === name} onClick={() => setBrings(name)}>
                  <span style={{ fontWeight: 700, fontSize: 16 }}>{name}</span>
                  <span className="muted" style={{ fontSize: 14 }}>{desc}</span>
                </button>
              ))}
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, marginTop: 8 }}>Ask me about <span className="muted" style={{ fontWeight: 400 }}>(optional, up to 3)</span></div>
            <p className="muted" style={{ marginTop: -12, fontSize: 14 }}>Questions on these topics will be sent to you.</p>
            <div className="wrap-chips" style={{ gap: 8 }} role="group" aria-label="Ask me about">
              {askOptions.map(t => (
                <button key={t} type="button" className="pill" aria-pressed={askAbout.includes(t)} onClick={() => setAskAbout(toggle(askAbout, t, 3))}>
                  {askAbout.includes(t) ? "✓ " : ""}{t}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1>Follow a few people and one circle</h1>
            <div className="stack">
              {people.map(p => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--color-divider)" }}>
                  <Avatar person={p} size={44} link={false} />
                  <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 700 }}>{p.name}</div><div className="muted" style={{ fontSize: 14 }}>{p.line}</div></div>
                  <button className="btn btn-secondary" type="button" aria-pressed={follows.includes(p.id)} onClick={() => setFollows(toggle(follows, p.id))}>
                    {follows.includes(p.id) ? "Following" : "Follow"}
                  </button>
                </div>
              ))}
            </div>
            <div className="stack">
              {suggestedCircles.map(c => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid var(--color-divider)" }}>
                  <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 700 }}>{c.name}</div><div className="muted" style={{ fontSize: 14 }}>{c.week}</div></div>
                  <button className="btn btn-secondary" type="button" aria-pressed={circle === c.id} onClick={() => setCircle(circle === c.id ? null : c.id)}>
                    {circle === c.id ? "Joined" : "Join"}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h1>One thing before you start</h1>
            <p className="lede">Every post here says what it rests on. Try one from a piece by the house.</p>
            <blockquote className="quote">“Many families say the rice-flour kolam began as a daily meal left for ants and birds.”</blockquote>
            <div className="wrap-chips" style={{ gap: 8 }}>
              <button type="button" className="chip basis-btn lb-documented" aria-pressed={guess === "documented"} onClick={() => setGuess("documented")}>✓ Documented</button>
              <button type="button" className="chip basis-btn lb-told" aria-pressed={guess === "told"} onClick={() => setGuess("told")}>❞ Told</button>
            </div>
            {guess && (
              <p style={{ fontSize: 16, lineHeight: 1.55 }} aria-live="polite">
                {guess === "told"
                  ? "Right. It's widely said, and older than the records that could confirm it. That's what Told means here: worth keeping, and kept apart from what's recorded."
                  : "Close. That the drawings get eaten is documented. That they began as a meal for ants is told — a good story, but not a checkable record."}
              </p>
            )}
          </>
        )}

        {error && <p className="error" role="alert">{error}</p>}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
          {step > 1 && <button className="btn btn-secondary" type="button" onClick={() => setStep(step - 1)}>Back</button>}
          <button className="btn btn-primary" type="button" disabled={nextOff} onClick={next}>
            {step === 4 ? (busy ? "Saving…" : replay ? "Back to my Edition" : "See my first Edition") : "Continue"}
          </button>
          <form action={skipOnboarding} style={{ marginLeft: "auto" }}>
            <button className="btn btn-ghost" type="submit" style={{ color: "var(--ink-2)" }}>Skip for now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
