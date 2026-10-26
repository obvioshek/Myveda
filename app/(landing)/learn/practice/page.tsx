import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import { QUIZ_PATH } from "@/content/learn/quiz-link";
import Practice from "@/components/learn/Practice";
import { GLOSSARY, PRACTICE_PATH, UNITS, lessonsFor } from "@/content/learn";

const questions = UNITS.flatMap(u => u.chapters).reduce((a, c) => a + (lessonsFor(c.slug) ?? []).reduce((b, l) => b + l.check.length, 0), 0);

const title = "Practice: spaced review and mixed questions · Veda Verse";
const description = `${questions.toLocaleString("en-IN")} management, economics, OB, HRM, accounting, strategy and marketing questions, each with the reason behind the answer, and ${GLOSSARY.length} glossary terms as cards. Mix them across chapters, recall concepts from a blank page, and get the ones you miss back until they stick.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PRACTICE_PATH },
  openGraph: { title, description, url: PRACTICE_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Practice across the chapters' check questions. The page itself is static; the
// questions load in the browser, and everything the reader does stays there.
export default function PracticePage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero pr-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Practice</span>
        <h1><span>Answer, then remember.</span><span className="red">The ones you miss come back.</span></h1>
        <p className="lede">Every check question from the chapters, {questions.toLocaleString("en-IN")} in all, each with the reason behind its answer, and the {GLOSSARY.length} glossary terms as cards. Mix them across chapters, recall a concept from a blank page, or review the ones you missed, on the day they are due.</p>
        <p className="ci-fine">Teaching a class? <Link className="link" href={QUIZ_PATH} prefetch={false}>Make a quiz from these questions</Link> and share one link.</p>
      </header>
      <Practice />
    </PageShell>
  );
}
