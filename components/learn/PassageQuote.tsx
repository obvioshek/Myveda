import Link from "next/link";
import { textPath, textsCited } from "@/content/learn/text-refs";

const html = (__html: string) => ({ __html });

// A passage's verse, translation and reference, with a link to the page about
// each text the reference cites (/learn/texts/<id>). On a text's own page,
// `except` leaves that text out, and the line names only the others.
export default function PassageQuote({ quote, except }: { quote: string; except?: string }) {
  const texts = textsCited(quote).filter(t => t.id !== except);
  return (
    <div className="lp-qw">
      <blockquote className="lp-q" dangerouslySetInnerHTML={html(quote)} />
      {texts.length > 0 && (
        <p className="lp-about">
          {except ? "Also cites" : `About ${texts.length > 1 ? "these texts" : "this text"}`}:{" "}
          {texts.map((t, i) => <span key={t.id}>{i > 0 && ", "}<Link href={textPath(t.id)} prefetch={false}>{t.name}</Link></span>)}
        </p>
      )}
    </div>
  );
}
