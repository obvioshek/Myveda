import type { Pairing } from "@/content/learn";
import type { LensNote } from "@/content/learn";
import { Tag } from "./Evidence";

const html = (__html: string) => ({ __html });

// A lesson's Ancient lens, laid out like the home page's sample: each passage
// with its verse, then a side-by-side of the modern idea and the classical one,
// then what the passage adds and where the two differ.
export default function LessonLens({ pairings, notes }: { pairings: Pairing[]; notes: LensNote[] }) {
  const items = notes.map(n => ({ p: pairings[n.pairing], n })).filter(x => x.p);
  return (
    <div className="ls-lens-in">
      <ol className="lp-list">
        {items.map(({ p, n }, i) => (
          <li key={n.pairing} className={`lp ${p.kind}${p.quote ? " has-q" : ""}`}>
            <div className="lp-main">
              <div className="lp-top"><Tag kind={p.kind} /><span className="lp-i" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span></div>
              <h4 className="lp-h">
                <span>{p.modern}</span>
                {p.classic && (
                  <>
                    <span className="lp-x" aria-hidden="true">↔</span>
                    <span className="sr-only"> and </span>
                    <span className="lp-c">{p.classic}</span>
                  </>
                )}
              </h4>
              {p.text.map((t, j) => <p key={j} dangerouslySetInnerHTML={html(t)} />)}
              {p.kind === "view" && <p className="lp-note">A reading offered for reflection, not a claim about what the authors meant.</p>}
            </div>
            {p.quote && <blockquote className="lp-q" dangerouslySetInnerHTML={html(p.quote)} />}
            <div className="pair-2 lp-cmp">
              <div className="cell"><span className="story-h">What it adds</span><p>{n.adds}</p></div>
              <div className="cell red"><span className="story-h">Where they differ</span><p>{n.differs}</p></div>
            </div>
          </li>
        ))}
      </ol>

      {items.length > 1 && (
      <div className="compare" role="table" aria-label="Modern idea beside its classical counterpart">
        <div className="cmp-head ls-cmp" role="row">
          <span role="columnheader">Side by side</span>
          <span role="columnheader">Modern idea</span>
          <span role="columnheader">Classical idea</span>
        </div>
        {items.map(({ p, n }) => (
          <div className="cmp-row ls-cmp" role="row" key={n.pairing}>
            <span className="cmp-label" role="rowheader">{p.kind === "documented" ? "Documented" : "My view"}</span>
            <p role="cell"><b className="who">Modern: </b>{p.modern}</p>
            <p role="cell"><b className="who">Classical: </b>{p.classic ?? "—"}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
