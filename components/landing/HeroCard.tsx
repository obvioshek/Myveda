"use client";

import { useState } from "react";

// The hero's example: a modern idea first, and the classical verse that answers
// it on request. Motivation and Gītā 2.47 are the only verified pair so far.
export default function HeroCard() {
  const [open, setOpen] = useState(false);
  return (
    <article className="hero-card" aria-label="Example: Motivation, and the Gītā">
      <div className="hero-steps" aria-hidden="true">
        <span className="hs on"><i />The idea</span>
        <span className={open ? "hs-bar on" : "hs-bar"} />
        <span className={open ? "hs on sage" : "hs"}><i />The classics</span>
      </div>
      <div className="hero-idea">
        <span className="tag tag-accent">Motivation</span>
        <p className="hero-q">Why do people put in effort?</p>
        <p>Expectancy theory (Victor Vroom, 1964) says people work hard when they believe effort will lead to a result, and that the result is worth having.</p>
      </div>
      <button type="button" className="btn btn-secondary" aria-expanded={open} aria-controls="hero-classics" onClick={() => setOpen(o => !o)}>
        {open ? "Back to the idea" : "See how the classics saw it"}
        <svg className={open ? "chev up" : "chev"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className={open ? "reveal open" : "reveal"} id="hero-classics" inert={!open}>
        <div className="reveal-in">
          <div className="reveal-pad hero-verse">
            <div className="verse">
              <span className="eyebrow sage">Bhagavad Gītā 2.47</span>
              <p className="verse-en">“Your right is to the action alone, never to its fruits.”</p>
              <p className="verse-sa" lang="sa">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥</p>
              <p className="verse-tr" lang="sa-Latn">karmaṇy evādhikāras te mā phaleṣu kadācana<br />mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi</p>
            </div>
            <div className="differ">
              <span className="eyebrow sage">Where they differ</span>
              <p>Vroom makes the expected result the reason to act. The Gītā asks you to act well without making the result the reason.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
