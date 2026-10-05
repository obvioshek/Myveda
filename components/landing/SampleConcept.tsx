"use client";

import { useId, useState } from "react";
import { COMPARE } from "@/content/landing";
import Arrow from "./Arrow";
import { NOTE_KEY, goTo, openConcept, useDevice, writeDevice } from "./device";

type Choice = "skill" | "integrity" | null;

const REVEAL: Record<Exclude<Choice, null>, string> = {
  skill: "Most modern hiring starts where you did. The Arthashastra started from the other end: test character first, then decide the role.",
  integrity: "So did Kautilya. Modern selection usually begins with skill; the Arthashastra began with integrity.",
};

function PartLabel({ children }: { children: React.ReactNode }) {
  return <span className="part"><i />{children}</span>;
}

// A shortened concept page, read the way every page on the site is read: a small
// question first, then the idea, then the Ancient Lens, then a prompt to reflect.
// The lens opens on request and the reader's note stays on this device.
export default function SampleConcept() {
  const [choice, setChoice] = useState<Choice>(null);
  const [lens, setLens] = useState(false);
  const note = useDevice(NOTE_KEY);
  const noteId = useId();

  const openLens = (e: React.MouseEvent) => {
    e.preventDefault();
    setLens(true);
    setTimeout(() => goTo("lens", 100), 60);
  };

  return (
    <div className="sample">
      <div className="sample-tags">
        <span className="tag tag-accent">Selection</span>
        <span className="tag tag-neutral">III · Managing People at Work</span>
      </div>

      <div className="before">
        <span className="eyebrow sage">Before you read</span>
        <p className="before-q" id="before-q">If you could test only one thing in a candidate, what would it be?</p>
        <div className="choices" role="group" aria-labelledby="before-q">
          <button type="button" className={choice === "skill" ? "btn btn-primary" : "btn btn-secondary"} aria-pressed={choice === "skill"} onClick={() => setChoice("skill")}>Skill</button>
          <button type="button" className={choice === "integrity" ? "btn btn-primary" : "btn btn-secondary"} aria-pressed={choice === "integrity"} onClick={() => setChoice("integrity")}>Integrity</button>
        </div>
        <div className={choice ? "reveal open" : "reveal"} aria-live="polite" inert={!choice}>
          <div className="reveal-in">
            <p className="reveal-pad before-a">{choice && REVEAL[choice]} <a href="#lens" onClick={openLens}>Here is how he did it.</a></p>
          </div>
        </div>
      </div>

      <div className="part-row">
        <PartLabel>Core Idea</PartLabel>
        <p className="core">Selection is choosing, from the people who applied, the one best suited to a role. A typical process moves through screening, tests, interviews and reference checks, and most of these steps measure what a candidate can do.</p>
      </div>

      <div className="part-row" id="lens">
        <PartLabel>Ancient Lens</PartLabel>
        <div className="lens">
          <div className="lens-bar">
            <span className="rings" aria-hidden="true"><i /><i /></span>
            <p>Kautilya answered this question too, in a very different way. Read the modern idea first, then open his.</p>
            <button type="button" className="btn btn-secondary" aria-expanded={lens} aria-controls="lens-body" onClick={() => setLens(o => !o)}>
              {lens ? "Close the Ancient Lens" : "Open the Ancient Lens"}
              <svg className={lens ? "chev up" : "chev"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>
          <div className={lens ? "reveal slow open" : "reveal slow"} id="lens-body" inert={!lens}>
            <div className="reveal-in">
              <div className="reveal-pad lens-body">
                <div className="paper story">
                  <span className="paper-h">The story</span>
                  <p>Before giving a minister office, Kautilya advised the king to test him in secret. Agents would tempt him through four trials, the <i lang="sa-Latn">upadhā</i>s: of righteousness, of wealth, of desire and of fear.</p>
                  <span className="source">Source: Arthaśāstra 1.10, on testing the integrity of ministers</span>
                </div>
                <div className="paper compare" role="table" aria-label="Modern selection beside Kautilya’s tests">
                  <div className="cmp-head" role="row">
                    <span role="columnheader">Side by side</span>
                    <span role="columnheader"><i className="d a" />Modern selection</span>
                    <span role="columnheader"><i className="d b" />Kautilya’s tests</span>
                  </div>
                  {COMPARE.map(r => (
                    <div className="cmp-row" role="row" key={r.label}>
                      <span className="cmp-label" role="rowheader">{r.label}</span>
                      <p role="cell"><b className="who a">Modern: </b>{r.modern}</p>
                      <p role="cell"><b className="who b">Kautilya: </b>{r.ancient}</p>
                    </div>
                  ))}
                </div>
                <div className="pair">
                  <div className="card-soft terracotta">
                    <span className="paper-h">What it adds</span>
                    <p>Integrity is checked first, and the role follows from it. A minister who passed the test of wealth could be trusted with the treasury.</p>
                  </div>
                  <div className="card-soft sage">
                    <span className="paper-h">Where they differ</span>
                    <p>Kautilya&apos;s tests relied on deception and entrapment. Modern ethics and employment law rule out deceiving a candidate this way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="part-row">
        <PartLabel>Reflect &amp; Discuss</PartLabel>
        <div className="reflect">
          <p className="reflect-q">“Can integrity be tested ethically before hiring?”</p>
          <div className="note">
            <label htmlFor={noteId}>Your answer, in a line or two</label>
            <textarea id={noteId} className="input" rows={3} value={note} onChange={e => writeDevice(NOTE_KEY, e.target.value)} placeholder="Write yours before you read what others think." />
            <span className="note-line">{note ? "Saved on this device. Only you can see it." : "Kept on this device. Nobody sees it unless you share it."}</span>
          </div>
          <a href="#s2" className="btn btn-primary" onClick={() => openConcept("Selection")}>Read the full concept: Selection<Arrow /></a>
        </div>
      </div>
    </div>
  );
}
