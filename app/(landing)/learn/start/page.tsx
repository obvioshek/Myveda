import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import { Tag } from "@/components/learn/Evidence";
import { HOW, LEARN_PATH, START_WALK_PATH, deva } from "@/content/learn";
import { WALK, pairView } from "@/content/learn/readings";
import { HI_START_PATH } from "@/content/hi";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Start here: five ideas, read two ways · Veda Verse";
const description = "Five short steps for newcomers: each sets a modern management idea beside a classical Indian passage, and shows how to read the two together.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: START_WALK_PATH, languages: { "en-IN": START_WALK_PATH, "hi-IN": HI_START_PATH } },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: START_WALK_PATH, siteName: "Veda Verse", locale: "en_IN", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const html = (__html: string) => ({ __html });

// A first walk through this way of reading. Each step pairs a modern idea with
// a passage and shows one thing about reading them together; everything but
// the "what to notice" lines is the chapters' own text (content/learn/readings.ts).
export default function StartWalkPage() {
  const steps = WALK.map(w => ({ ...w, pair: pairView(w) }));
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero pr-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Start here</span>
        <h1><span>Five ideas,</span><span className="red">read two ways.</span></h1>
        <p className="lede">If you have never read a classical text beside a management idea, begin with these. Each step sets a modern idea next to a passage that met the same problem long ago, and shows one thing about reading the two together. About fifteen minutes.</p>
        <p className="ci-fine"><Link className="link hi-ui" href={HI_START_PATH} prefetch={false} lang="hi" hrefLang="hi">यह सैर हिंदी में पढ़ें</Link></p>
      </header>

      <ol className="wrap wk">
        {steps.map((s, i) => (
          <li key={s.pair.id} className="wk-step" aria-labelledby={`wk-${i}`}>
            <div className="wk-head">
              <span className="wk-n" lang="sa" aria-hidden="true">{deva(i + 1)}</span>
              <div>
                <span className="label red">Step {i + 1} of {steps.length}</span>
                <h2 id={`wk-${i}`} className="h-sm">{s.step}</h2>
              </div>
            </div>
            <p className="wk-notice"><b>What to notice.</b> {s.notice}</p>
            <div className="wk-pair">
              <p className="ca-pair"><b>{s.pair.modern}</b><span aria-hidden="true"> ↔ </span><span className="sr-only"> and </span>{s.pair.classic}</p>
              <div className="ca-quote" dangerouslySetInnerHTML={html(s.pair.quote)} />
              <p className="wk-how" dangerouslySetInnerHTML={html(s.pair.how)} />
              <dl className="ca-notes">
                <div><dt>What it adds</dt><dd>{s.pair.adds}</dd></div>
                <div><dt>Where they differ</dt><dd>{s.pair.differs}</dd></div>
              </dl>
              <div className="ca-foot">
                <Tag kind={s.pair.kind} />
                <Link className="more" href={s.pair.href} prefetch={false}>Read the lesson: {s.pair.concept}, in {s.pair.chapter}<Arrow /></Link>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="wrap wk-next" aria-labelledby="wk-next-h">
        <h2 id="wk-next-h" className="h-xs">Where to go next</h2>
        <ul>
          <li><Link className="link" href={LEARN_PATH} prefetch={false}>The chapters</Link>: every concept, with a passage beside it wherever one meets the idea.</li>
          <li><Link className="link" href="/#texts" prefetch={false}>What the classics add</Link>: more pairs, by theme.</li>
          <li><Link className="link" href="/#community" prefetch={false}>The community</Link>: ask about a reading, or offer your own, and say what it rests on.</li>
        </ul>
        <p className="ci-fine wk-key"><Tag kind="documented" /> {HOW.documented} <Tag kind="view" /> {HOW.view}</p>
      </section>
    </PageShell>
  );
}
