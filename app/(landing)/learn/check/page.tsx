import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import PlacementCheck from "@/components/learn/PlacementCheck";
import { UNITS } from "@/content/learn";
import { CHECK_PATH, placementQuestions } from "@/content/learn/placement";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const questions = placementQuestions();
const title = "Where should I start? A short check · Veda Verse";
const description = `${questions.length} questions across the units, about ${Math.round(questions.length / 2)} minutes, then where to begin in each: what you can skim and what to read first.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: CHECK_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: CHECK_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// A short check across the units (content/learn/placement.ts), answered in the browser.
export default function CheckPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Start here</span>
        <h1><span>Where should I start?</span><span className="red">A short check, then a starting point.</span></h1>
        <p className="lede">A few questions from each unit, from its first chapter to its last. At the end you see, unit by unit, what you can skim and what to read first. It takes a few minutes, and nothing is saved.</p>
      </header>
      <PlacementCheck questions={questions} units={UNITS.map(u => ({ id: u.id, n: u.n, short: u.short, first: { slug: u.chapters[0].slug, title: u.chapters[0].short ?? u.chapters[0].title } }))} />
    </PageShell>
  );
}
