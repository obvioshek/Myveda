import Link from "next/link";
import { refOf, textPath, textsCited } from "@/content/learn/text-refs";
import ReportProblem from "./ReportProblem";

const html = (__html: string) => ({ __html });

// A passage's verse, translation and reference, with a link to the page about
// each text the reference cites (/learn/texts/<id>). On a text's own page,
// `except` leaves that text out, and the line names only the others.
export default function PassageQuote({ quote, except }: { quote: string; except?: string }) {
  const texts = textsCited(quote).filter(t => t.id !== except);
  return (
    <div className="lp-qw">
      <blockquote className="lp-q" dangerouslySetInnerHTML={html(quote)} />
      <p className="lp-about">
        {texts.length > 0 && (
          <span>
            {except ? "Also cites" : `About ${texts.length > 1 ? "these texts" : "this text"}`}:{" "}
            {texts.map((t, i) => <span key={t.id}>{i > 0 && ", "}<Link href={textPath(t.id)} prefetch={false}>{t.name}</Link></span>)}
          </span>
        )}
        <ReportProblem what={`The passage ${refOf(quote) || "on this page"}`} label="Report a problem" kind="A translation or reference is wrong" />
      </p>
    </div>
  );
}
