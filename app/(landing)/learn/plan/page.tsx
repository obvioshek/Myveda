import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Planner, { type PlanUnit } from "@/components/learn/Planner";
import { PLAN_PATH, UNITS, conceptIds } from "@/content/learn";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Study plan: from today to your exam date · Veda Verse";
const description = "Choose your exam date and units. The chapters not yet done are shared out week by week, with the last days kept for revision, and the plan adjusts as you read.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: PLAN_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: PLAN_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// The page is static; the plan is worked out in the browser from the reader's
// exam date and the progress kept on their device.
export default function PlanPage() {
  const units: PlanUnit[] = UNITS.map(u => ({
    id: u.id, n: u.n, short: u.short,
    chapters: u.chapters.map(c => ({ slug: c.slug, title: c.short ?? c.title, minutes: c.minutes, ids: conceptIds(c) })),
  }));
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero pr-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Study plan</span>
        <h1><span>Your exam date.</span><span className="red">Your weeks until then.</span></h1>
        <p className="lede">Choose the date and the units you need. The chapters not yet done are shared out week by week, with the last days kept for revision. Finish a chapter and the plan moves on.</p>
      </header>
      <Planner units={units} />
    </PageShell>
  );
}
