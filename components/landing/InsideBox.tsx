"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import { openConcept } from "./device";

type Choice = "skill" | "integrity" | null;

const REVEAL: Record<Exclude<Choice, null>, string> = {
  skill: "Most modern hiring starts where you did. The Arthashastra started from the other end: test character first, then decide the role.",
  integrity: "So did Kautilya. Modern selection usually begins with skill; the Arthashastra began with integrity.",
};

// "A look inside": the sample concept's title, one small question to answer
// before reading, and the way into the full page.
export default function InsideBox() {
  const [choice, setChoice] = useState<Choice>(null);
  return (
    <div className="inside" id="inside">
      <div className="inside-head"><span className="label dark">A look inside</span><span className="inside-area">III · Managing People at Work</span></div>
      <div className="inside-body">
        <div className="inside-title">
          <span className="inside-name">Selection</span>
          <span className="inside-sub">Choosing the right person. A shortened concept page. Read it the way every page on the site is read.</span>
        </div>
        <div className="before">
          <span className="label red">Before you read</span>
          <p className="before-q" id="before-q">If you could test only one thing in a candidate, what would it be?</p>
          <div className="choices" role="group" aria-labelledby="before-q">
            <button type="button" className={choice === "skill" ? "btn btn-primary btn-lg" : "btn btn-secondary btn-lg"} aria-pressed={choice === "skill"} onClick={() => setChoice("skill")}>Skill</button>
            <button type="button" className={choice === "integrity" ? "btn btn-primary btn-lg" : "btn btn-secondary btn-lg"} aria-pressed={choice === "integrity"} onClick={() => setChoice("integrity")}>Integrity</button>
          </div>
          <div className={choice ? "reveal open" : "reveal"} aria-live="polite" inert={!choice}>
            <div className="reveal-in"><p className="before-a">{choice && REVEAL[choice]}</p></div>
          </div>
        </div>
      </div>
      <a href="#concept" className="btn btn-primary btn-xl wide" onClick={() => openConcept("Selection")}>Read the full concept: Selection<Arrow /></a>
    </div>
  );
}
