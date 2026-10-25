import type { Pairing } from "@/content/learn";
import { Tag } from "./Evidence";
import PassageQuote from "./PassageQuote";

const html = (__html: string) => ({ __html });

// The Ancient lens: each modern idea beside the passage that meets it. The idea
// and its explanation sit on the left, the verse on the right; a passage that
// is only an interpretation is drawn with a dashed edge and says so.
export default function Pairings({ slug, items }: { slug: string; items: { p: Pairing; n: number }[] }) {
  return (
    <ol className="lp-list">
      {items.map(({ p, n }, i) => (
        <li key={i} className={`lp ${p.kind}${p.quote ? " has-q" : ""}`}>
          <div className="lp-main">
            <div className="lp-top"><Tag kind={p.kind} /><span className="lp-i" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span></div>
            <h3 className="lp-h">
              <span>{p.modern}</span>
              {p.classic && (
                <>
                  <span className="lp-x" aria-hidden="true">↔</span>
                  <span className="sr-only"> and </span>
                  <span className="lp-c">{p.classic}</span>
                </>
              )}
            </h3>
            {p.text.map((t, j) => <p key={j} dangerouslySetInnerHTML={html(t)} />)}
            {p.kind === "view" && <p className="lp-note">A reading offered for reflection, not a claim about what the authors meant.</p>}
          </div>
          {p.quote && <PassageQuote quote={p.quote} at={{ slug, n }} />}
        </li>
      ))}
    </ol>
  );
}
