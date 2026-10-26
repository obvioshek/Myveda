import Link from "next/link";
import { refOf, textPath, textsCited } from "@/content/learn/text-refs";
import ReportProblem from "./ReportProblem";
import SharePassage from "./SharePassage";
import DiscussPassage from "./DiscussPassage";
import { chapterBySlug, passageHref } from "@/content/learn";

const html = (__html: string) => ({ __html });

// A passage's verse, translation and reference, with a link to the page about
// each text the reference cites (/learn/texts/<id>). On a text's own page,
// `except` leaves that text out, and the line names only the others. With
// `at` (its chapter and number), the passage can also be shared as an image.
export default function PassageQuote({ quote, except, at }: { quote: string; except?: string; at?: { slug: string; n: number } }) {
  const texts = textsCited(quote).filter(t => t.id !== except);
  const p = at && chapterBySlug(at.slug)?.pairings[at.n];
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
        <span className="lp-acts">
          {at && p && <SharePassage href={passageHref(at.slug, at.n)} image={`/learn/${at.slug}/share/${at.n}`} title={p.classic ? `${p.modern} ↔ ${p.classic}` : p.modern} />}
          {at && p && <DiscussPassage about={`${p.classic ? `${p.modern} ↔ ${p.classic}` : p.modern}${refOf(quote) ? `, ${refOf(quote)}` : ""}`} chapter={chapterBySlug(at.slug)!.short ?? chapterBySlug(at.slug)!.title} />}
          <ReportProblem what={`The passage ${refOf(quote) || "on this page"}`} label="Report a problem" kind="A translation or reference is wrong" />
        </span>
      </p>
    </div>
  );
}
