"use client";

import { useEffect, useId, useState } from "react";
import { COMPARE } from "@/content/landing";
import { NOTE_KEY, onRevealConcept, useDevice, writeDevice } from "./device";

function Part({ children }: { children: React.ReactNode }) {
  return <span className="part"><i className="sq" aria-hidden="true" />{children}</span>;
}

// The full sample concept (Selection), opened from the page's "Read the full
// concept" and "Today's idea" buttons: the idea, the Ancient Lens, and a prompt
// to reflect. The reader's note stays on this device.
export default function FullConcept() {
  const [open, setOpen] = useState(false);
  const note = useDevice(NOTE_KEY);
  const noteId = useId();

  useEffect(() => onRevealConcept(() => setOpen(true)), []);

  return (
    <section className="fullc" id="concept" aria-label="Selection, the full sample concept">
      <div className="wrap">
        <div className="fullc-box">
          <div className="fullc-head">
            <div><span className="label dark">Sample concept</span><h3 className="fullc-title">Selection</h3></div>
            <button type="button" className="btn btn-secondary btn-lg" aria-expanded={open} aria-controls="concept-body" onClick={() => setOpen(o => !o)}>
              {open ? "Close the concept" : "Open the concept"}
              <svg className={open ? "chev up" : "chev"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          </div>

          <div className={open ? "reveal slow open" : "reveal slow"} id="concept-body" inert={!open}>
            <div className="reveal-in">
              <div className="fullc-body">
                <div className="part-row">
                  <Part>Core Idea</Part>
                  <p className="core">Selection is choosing, from the people who applied, the one best suited to a role. A typical process moves through screening, tests, interviews and reference checks, and most of these steps measure what a candidate can do.</p>
                </div>

                <div className="part-row">
                  <Part>Ancient Lens</Part>
                  <div className="lens">
                    <div className="story">
                      <span className="story-h">The story</span>
                      <p>Before giving a minister office, Kautilya advised the king to test him in secret. Agents would tempt him through four trials, the <i lang="sa-Latn">upadhā</i>s: of righteousness, of wealth, of desire and of fear.</p>
                      <span className="source">Source: Arthaśāstra 1.10, on testing the integrity of ministers</span>
                    </div>
                    <div className="compare" role="table" aria-label="Modern selection beside Kautilya’s tests">
                      <div className="cmp-head" role="row">
                        <span role="columnheader">Side by side</span>
                        <span role="columnheader">Modern selection</span>
                        <span role="columnheader">Kautilya’s tests</span>
                      </div>
                      {COMPARE.map(r => (
                        <div className="cmp-row" role="row" key={r.label}>
                          <span className="cmp-label" role="rowheader">{r.label}</span>
                          <p role="cell"><b className="who">Modern: </b>{r.modern}</p>
                          <p role="cell"><b className="who">Kautilya: </b>{r.ancient}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pair-2">
                      <div className="cell"><span className="story-h">What it adds</span><p>Integrity is checked first, and the role follows from it. A minister who passed the test of wealth could be trusted with the treasury.</p></div>
                      <div className="cell red"><span className="story-h">Where they differ</span><p>Kautilya&apos;s tests relied on deception and entrapment. Modern ethics and employment law rule out deceiving a candidate this way.</p></div>
                    </div>
                  </div>
                </div>

                <div className="part-row">
                  <Part>Reflect &amp; Discuss</Part>
                  <div className="reflect">
                    <p className="reflect-q">“Can integrity be tested ethically before hiring?”</p>
                    <div className="note">
                      <label htmlFor={noteId}>Your answer, in a line or two</label>
                      <textarea id={noteId} className="input" rows={3} value={note} onChange={e => writeDevice(NOTE_KEY, e.target.value)} placeholder="Write yours before you read what others think." />
                      <span className="note-line">{note ? "Saved on this device. Only you can see it." : "Kept on this device. Nobody sees it unless you share it."}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
