"use client";

import Arrow from "./Arrow";
import { LAST_KEY, openConcept, useDevice } from "./device";

// Shown only to a returning visitor, known only from this device: a quiet band
// above the hero with a way back to the concept they opened last.
export default function ContinueBand() {
  const last = useDevice(LAST_KEY);
  if (!last) return null;
  return (
    <div className="band-continue">
      <div className="wrap band-in">
        <i className="sq" aria-hidden="true" />
        <span className="label">Continue where you left off</span>
        <b>{last}</b>
        <a className="resume" href="#concept" onClick={() => openConcept(last, false)}>Resume<Arrow /></a>
      </div>
    </div>
  );
}
