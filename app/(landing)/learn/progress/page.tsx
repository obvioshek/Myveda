import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Overview, { type OverviewUnit } from "@/components/learn/Overview";
import { PROGRESS_PATH, UNITS, lessonsFor } from "@/content/learn";

const title = "Your progress · Veda Verse";
const description = "How far you are in each unit, what to read next, your review, your study plan and your notes from every lesson, kept on your device.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PROGRESS_PATH },
  // Different for every reader, so not worth a search result.
  robots: { index: false, follow: true },
};

// The page is static; what it shows is read from the reader's own device.
export default function ProgressPage() {
  const units: OverviewUnit[] = UNITS.map(u => ({
    id: u.id, n: u.n, title: u.title,
    chapters: u.chapters.map(c => {
      const lessons = lessonsFor(c.slug);
      return { slug: c.slug, title: c.short ?? c.title, concepts: c.blocks.map(b => ({ id: b.id, name: lessons?.find(l => l.blockId === b.id)?.name ?? b.title ?? c.title })) };
    }),
  }));
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero pr-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Your progress</span>
        <h1><span>Where you are.</span><span className="red">What comes next.</span></h1>
        <p className="lede">Your chapters, review, study plan and notes, together. It is read from this browser, and nobody else can see it.</p>
      </header>
      <Overview units={units} />
    </PageShell>
  );
}
