import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import { LEARN_PATH, START_WALK_PATH } from "@/content/learn";
import { TEXTS, TEXTS_PATH, passagesFrom, textPath, timeline } from "@/content/learn/texts";
import { READING_GUIDE_PATH } from "@/content/learn/reading-guide";
import { siteUrl } from "@/lib/site";

const counts = new Map(TEXTS.map(t => [t.id, passagesFrom(t.id).length]));
const total = new Set(TEXTS.flatMap(t => passagesFrom(t.id).map(p => `${p.slug}#${p.pairing}`))).size;

const title = "The classical texts behind every passage · Veda Verse";
const description = `What the Tirukkuṟaḷ, Bhagavad Gītā, Arthaśāstra and ${TEXTS.length - 3} other sources are, when they were composed, what is disputed, and the ${total} passages the chapters quote.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: TEXTS_PATH },
  openGraph: { title, description, url: TEXTS_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Every text the chapters quote: the three most quoted first, then all of them
// on one line with the modern management writing they are read beside.
export default function TextsPage() {
  const base = siteUrl();
  const top = [...TEXTS].sort((a, b) => counts.get(b.id)! - counts.get(a.id)!).slice(0, 3);
  const topShare = top.reduce((a, t) => a + counts.get(t.id)!, 0);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Veda Verse", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Chapters", item: `${base}${LEARN_PATH}` },
      { "@type": "ListItem", position: 3, name: "The texts", item: `${base}${TEXTS_PATH}` },
    ],
  };
  return (
    <PageShell wide note="Spotted a mistake?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Reference</span>
        <h1><span>The texts.</span><span className="red">Where every passage comes from.</span></h1>
        <p className="lede">
          The chapters quote {total} passages from {TEXTS.length} classical texts and poets, in Sanskrit, Pali, Tamil, Kannada, Telugu, Malayalam, Marathi, Hindi and Bengali.
          Each page here says what the text is, when and by whom it was composed as far as anyone knows, what is disputed about it, and where to read it, then lists every passage the chapters use from it.
        </p>
        <div className="btn-row">
          <Link className="btn btn-secondary" href={READING_GUIDE_PATH} prefetch={false}>How to read the names and terms<Arrow /></Link>
          <Link className="btn btn-secondary" href={START_WALK_PATH} prefetch={false}>New to this? Take the walk<Arrow /></Link>
        </div>
      </header>

      <section className="wrap tx-sec" aria-labelledby="tx-top-h">
        <h2 id="tx-top-h" className="h-xs">Start with these three</h2>
        <p className="ci-fine">Between them they give {topShare} of the {total} passages.</p>
        <div className="grid g3 tx-top">
          {top.map(t => (
            <Link key={t.id} className="cell tx-card" href={textPath(t.id)} prefetch={false}>
              <span className="label red">{t.language} · {t.when}</span>
              <b className="tx-name">{t.name}</b>
              {t.original && <span className="tx-og" lang={t.original.lang}>{t.original.text}</span>}
              <span className="tx-kind">{t.kind}</span>
              <span className="tx-count">{counts.get(t.id)} passages<Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap tx-sec" aria-labelledby="tx-line-h">
        <h2 id="tx-line-h" className="h-xs">All of them, on one line</h2>
        <p className="ci-fine">
          Oldest first, with the modern management writing the chapters read them beside. Dates for the older texts are scholars&apos; estimates, often with a wide range; each sits at the middle of its range, and its page says how uncertain it is.
        </p>
        <ol className="tx-tl">
          {timeline().map(e => e.type === "text" ? (
            <li key={e.t.id} className="tx-row">
              <span className="tx-when">{e.t.when}</span>
              <span className="tx-mk" aria-hidden="true" />
              <span className="tx-what">
                <Link href={textPath(e.t.id)} prefetch={false}><b>{e.t.name}</b></Link>
                {e.t.original && <span className="tx-og-s" lang={e.t.original.lang}>{e.t.original.text}</span>}
                <span className="tx-k">{e.t.kind} · {e.t.language}</span>
              </span>
              <span className="tx-n">{counts.get(e.t.id)} {counts.get(e.t.id) === 1 ? "passage" : "passages"}</span>
            </li>
          ) : (
            <li key={`${e.m.who}-${e.m.year}`} className="tx-row mod">
              <span className="tx-when">{e.m.date}</span>
              <span className="tx-mk" aria-hidden="true" />
              <span className="tx-what">
                <span><b>{e.m.who}</b>, {e.m.work}</span>
                <span className="tx-k">Modern management · <Link href={e.href} prefetch={false}>read it in its chapter</Link></span>
              </span>
              <span className="tx-n" />
            </li>
          ))}
        </ol>
        <p className="ci-fine tx-key"><span className="tx-mk" aria-hidden="true" /> A classical text or poet quoted in the chapters <span className="tx-mk mod" aria-hidden="true" /> Modern management writing</p>
      </section>
    </PageShell>
  );
}
