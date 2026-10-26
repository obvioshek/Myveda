import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import ScenarioCard from "@/components/learn/ScenarioCard";
import PassageQuote from "@/components/learn/PassageQuote";
import { Tag } from "@/components/learn/Evidence";
import { APPLY_PATH, SCENARIOS, scenarioView } from "@/content/learn/scenarios";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Apply it: management ideas in real situations · Veda Verse";
const description = `${SCENARIOS.length} short workplace situations from across India. Choose the idea that helps most, then see why, with the lesson and a classical passage that met the same problem.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: APPLY_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: APPLY_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Knowing an idea is one thing; seeing where it applies is another. Each
// situation comes from content/learn/scenarios.ts.
export default function ApplyPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Practice</span>
        <h1><span>Apply it.</span><span className="red">Which idea helps here?</span></h1>
        <p className="lede">Exams and work both ask the same thing: not what an idea is, but where it applies. Each situation below has one idea that helps most. Choose it, then see why, with the lesson for every option and, where one fits, a passage that met the same problem long ago.</p>
      </header>
      <div className="wrap ap-list">
        {SCENARIOS.map((s, i) => {
          const v = scenarioView(s);
          return (
            <ScenarioCard
              key={s.id} n={i + 1} sid={s.id} title={s.title} situation={s.situation} ask={s.ask} options={v.options} answer={s.answer} why={s.why}
              passage={v.passage && (
                <div className="ap-p">
                  <p className="ap-pn"><Tag kind={v.passage.kind} /> {v.passage.note}</p>
                  <PassageQuote quote={v.passage.quote} at={{ slug: v.passage.slug, n: v.passage.pairing }} />
                </div>
              )}
            />
          );
        })}
      </div>
    </PageShell>
  );
}
