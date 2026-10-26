import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import QuizBuilder from "@/components/learn/QuizBuilder";
import { PRACTICE_PATH } from "@/content/learn";
import { MAX_QUIZ, QUIZ_PATH } from "@/content/learn/quiz-link";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Make a quiz for your class · Veda Verse";
const description = `Pick up to ${MAX_QUIZ} questions from any chapter, share one link with your students, or print it with an answer key. No sign-in, nothing stored.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: QUIZ_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: QUIZ_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// For teachers and study groups: a quiz from the chapters' questions, carried
// whole in a link (content/learn/quiz-link.ts).
export default function QuizPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero no-print">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />For teachers</span>
        <h1><span>Make a quiz.</span><span className="red">For a class or a study group.</span></h1>
        <p className="lede">
          Choose questions from any chapter, give the quiz a title, and share one link. Students take it on their own phones, as practice with the answer after each question or as a test that shows nothing until they submit. Or print it, with an answer key on its own page.
        </p>
        <p className="ci-fine">Nothing is sent to a server: the questions travel in the link, and each student&apos;s answers stay on their device. For practice on your own, use <Link className="link" href={PRACTICE_PATH} prefetch={false}>practice</Link>.</p>
      </header>
      <QuizBuilder />
    </PageShell>
  );
}
