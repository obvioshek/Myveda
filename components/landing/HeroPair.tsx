"use client";

import { useState } from "react";
import Arrow from "./Arrow";

// The hero's example, as two ruled cells: the modern idea, and the classical
// verse that answers it. The second cell turns red and shows the verse on
// request. Motivation and Gītā 2.47 are the only verified pair so far.
export default function HeroPair() {
  const [open, setOpen] = useState(false);
  return (
    <div className="pair">
      <div className="pair-cell">
        <div className="pair-top"><b className="n">01</b><span className="label">The idea</span><span className="tag tag-accent">Motivation</span></div>
        <p className="pair-q">Why do people put in effort?</p>
        <p className="pair-p">Expectancy theory (Victor Vroom, 1964) says people work hard when they believe effort will lead to a result, and that the result is worth having.</p>
      </div>

      <div className={open ? "pair-cell stack open" : "pair-cell stack"}>
        <div className="layer closed" inert={open}>
          <div className="pair-top"><b className="n">02</b><span className="label">The classics</span></div>
          <p className="pair-q">How did the Gītā see it?</p>
          <p className="pair-p">One verse, shown in the original with a transliteration, a translation and its exact reference.</p>
          <button type="button" className="btn btn-primary btn-lg wide" aria-expanded={open} aria-controls="pair-more" onClick={() => setOpen(true)}>See how the classics saw it<Arrow /></button>
        </div>
        <div className="layer opened" inert={!open}>
          <div className="pair-top"><b className="ref">02 · Bhagavad Gītā 2.47</b>
            <button type="button" className="x" aria-label="Back to the idea" onClick={() => setOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          <p className="pair-sa" lang="sa">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥</p>
          <p className="pair-en">“Your right is to the action alone, never to its fruits.”</p>
        </div>
      </div>

      <div className={open ? "reveal open" : "reveal"} id="pair-more" inert={!open}>
        <div className="reveal-in">
          <div className="pair-differ">
            <span className="label red">Where they differ</span>
            <p>Vroom makes the expected result the reason to act. The Gītā asks you to act well without making the result the reason.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
