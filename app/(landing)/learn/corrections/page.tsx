import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import { CORRECTIONS, CORRECTIONS_PATH, LOG_STARTED } from "@/content/learn/corrections";
import { TEXTS_PATH } from "@/content/learn/text-refs";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Corrections · Veda Verse";
const description = "Every fix made to the chapters, questions and passages after a reader reported a problem, with its date, and how reports are handled.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: CORRECTIONS_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: CORRECTIONS_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
};

const day = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
};

// The public record of fixes, and how a report becomes one.
export default function CorrectionsPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Corrections</span>
        <h1><span>What changed,</span><span className="red">and when.</span></h1>
        <p className="lede">
          A site that sets classical texts beside modern ideas will sometimes get a translation, a reference or an answer wrong. When a reader&apos;s report turns out to be right, the fix is made and listed here with its date, so anyone who quoted the page can check what changed.
        </p>
      </header>
      <section className="wrap tx-sec" aria-labelledby="co-h">
        <h2 id="co-h" className="h-xs">The log</h2>
        {CORRECTIONS.length === 0 ? (
          <p className="ci-fine">No corrections yet. This log began on {day(LOG_STARTED)}.</p>
        ) : (
          <ol className="co-list">
            {CORRECTIONS.map((c, i) => (
              <li key={i}><span className="tx-when">{day(c.date)}</span><span><Link href={c.path} prefetch={false}>{c.path}</Link> {c.what}</span></li>
            ))}
          </ol>
        )}
      </section>
      <section className="wrap tx-sec co-how" aria-labelledby="co-how-h">
        <h2 id="co-how-h" className="h-xs">How a report is handled</h2>
        <ul>
          <li>Use “Report a problem” beside a question or a passage, or at the foot of any page. The report goes to the editors&apos; inbox, with the page&apos;s address. The site keeps no copy.</li>
          <li>Each report is checked: a passage against the edition its text&apos;s page names (see <Link className="link" href={TEXTS_PATH} prefetch={false}>the texts</Link>), an answer against the chapter and its sources.</li>
          <li>If the report is right, the page is fixed and the fix is listed above. If you left an email address, you get a reply either way.</li>
          <li>Where scholars disagree, the page says so rather than picking a side quietly.</li>
        </ul>
      </section>
    </PageShell>
  );
}
