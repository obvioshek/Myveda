import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import { DRAVIDIAN, MARKS, READING_GUIDE_PATH, SPELLINGS, WORDS, chaptersUsing, type Mark } from "@/content/learn/reading-guide";
import { TEXTS_PATH } from "@/content/learn/text-refs";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "How to read Sanskrit and Tamil names and terms · Veda Verse";
const description = "What ā, ṛ, ś, ṣ and the other marks mean and how they sound, the familiar spellings of the names, and words like dharma and artha that don't translate well.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: READING_GUIDE_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: READING_GUIDE_PATH, siteName: "Veda Verse", locale: "en_IN", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

function Marks({ rows, label }: { rows: Mark[]; label: string }) {
  return (
    <div className="prose"><div className="tb" tabIndex={0} role="region" aria-label={label}>
      <table aria-label={label}>
        <thead><tr><th scope="col">Mark</th><th scope="col">Sounds</th><th scope="col">For example</th></tr></thead>
        <tbody>{rows.map(m => <tr key={m.mark}><td className="rg-mark">{m.mark}</td><td>{m.sounds}</td><td>{m.example}</td></tr>)}</tbody>
      </table>
    </div></div>
  );
}

// A key to the transliteration used across the chapters, and the words that
// lose most in translation.
export default function ReadingGuidePage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Reference</span>
        <h1><span>How to read</span><span className="red">the names and terms.</span></h1>
        <p className="lede">
          The chapters write Sanskrit, Pali and Tamil words in the Roman alphabet with a few extra marks, so that every sound is spelled one way. The marks look strange at first and take a few minutes to learn. After that, Kauṭilya and Ṛgveda say exactly how they sound.
        </p>
        <nav className="btn-row" aria-label="On this page">
          <a className="btn btn-secondary" href="#marks">The marks</a>
          <a className="btn btn-secondary" href="#spellings">Familiar spellings</a>
          <a className="btn btn-secondary" href="#words">Words that don&apos;t translate</a>
        </nav>
      </header>

      <section className="wrap tx-sec" id="marks" aria-labelledby="rg-marks-h">
        <h2 id="rg-marks-h" className="h-sm">The marks, and how they sound</h2>
        <p className="ci-fine">A line over a vowel makes it long. A dot under a letter usually means the tongue is curled back. A letter followed by h is breathed, never a new sound: the th in artha is like the t-h in “hothouse”.</p>
        <Marks rows={MARKS} label="Marks used for Sanskrit and Pali" />
        <h3 className="h-xs rg-h3">Tamil, Kannada, Telugu and Malayalam add a few</h3>
        <Marks rows={DRAVIDIAN} label="Marks used for Tamil and other Dravidian languages" />
      </section>

      <section className="wrap tx-sec" id="spellings" aria-labelledby="rg-sp-h">
        <h2 id="rg-sp-h" className="h-sm">Familiar spellings</h2>
        <p className="ci-fine">Newspapers, books and search engines often drop the marks. These are the same names.</p>
        <dl className="rg-sp">
          {SPELLINGS.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}
        </dl>
        <p className="ci-fine">How references such as “3.35” or “10.191.2” work depends on the text; each <Link className="link" href={TEXTS_PATH} prefetch={false}>text&apos;s page</Link> explains its own.</p>
      </section>

      <section className="wrap tx-sec" id="words" aria-labelledby="rg-w-h">
        <h2 id="rg-w-h" className="h-sm">Words that don&apos;t translate</h2>
        <p className="ci-fine">Some words carry more than any one English word can. The chapters keep them in the original with a gloss; this is what they mean, and the translation that most often misleads.</p>
        <ol className="rg-words">
          {WORDS.map(w => {
            const where = chaptersUsing(w);
            return (
              <li key={w.id} id={w.id} className="rg-word">
                <h3 className="rg-term"><span>{w.term}</span><span className="rg-og" lang={w.lang}>{w.original}</span></h3>
                <p>{w.means}</p>
                <p className="rg-not"><b>Not quite:</b> {w.notQuite}</p>
                {where.length > 0 && (
                  <p className="rg-where"><span className="label">In the chapters</span> {where.map((c, i) => <span key={c.href}>{i > 0 && " · "}<Link href={c.href} prefetch={false}>{c.title}</Link></span>)}</p>
                )}
              </li>
            );
          })}
        </ol>
        <Link className="more" href={TEXTS_PATH} prefetch={false}>The texts these words come from<Arrow /></Link>
      </section>
    </PageShell>
  );
}
