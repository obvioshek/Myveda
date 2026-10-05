import type { Kind } from "@/content/learn";

// The two kinds of passage, always shown the same way: a solid tag when the text
// exists and the reading is fair, an outlined one when the link is an
// interpretation offered for reflection.
export function Tag({ kind }: { kind: Kind }) {
  return <span className={kind === "documented" ? "lp-tag documented" : "lp-tag view"}>{kind === "documented" ? "Documented" : "My view"}</span>;
}

// A row of small squares, one per passage: filled for documented, hollow for
// interpretive, so a chapter's footing reads at a glance.
export function Meter({ documented, view }: { documented: number; view: number }) {
  return (
    <span className="ev-meter" role="img" aria-label={`${documented} documented, ${view} interpretive`}>
      {Array.from({ length: documented }, (_, i) => <i key={`d${i}`} className="d" />)}
      {Array.from({ length: view }, (_, i) => <i key={`v${i}`} className="v" />)}
    </span>
  );
}
