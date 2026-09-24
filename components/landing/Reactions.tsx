"use client";

import { useState } from "react";
import { REACTIONS } from "@/content/landing";

// Private reactions and a private save, as a demonstration: the note says who
// the reaction reaches and that nobody sees a total.
export default function Reactions({ person }: { person: string }) {
  const [on, setOn] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const note = on.length
    ? `“${on.join("”, “")}” sent to ${person} privately. Nobody sees a total.`
    : saved ? "Saved. Only you can see what you save." : "";
  return (
    <>
      <div className="acts" role="group" aria-label={`Reactions to ${person}'s post`}>
        {REACTIONS.map(r => (
          <button key={r} className="chip" type="button" aria-pressed={on.includes(r)}
            onClick={() => setOn(cur => cur.includes(r) ? cur.filter(x => x !== r) : [...cur, r])}>{r}</button>
        ))}
        <button className="chip save" type="button" aria-pressed={saved} onClick={() => setSaved(s => !s)}>{saved ? "Saved" : "Save"}</button>
      </div>
      <p className="note" aria-live="polite">{note}</p>
    </>
  );
}
