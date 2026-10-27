import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Pack, { type PackChapter } from "@/components/learn/Pack";
import { CHAPTERS, REVISION_PATH, UNITS, chapterPath, lessonsFor, termsForChapter } from "@/content/learn";
import { buildFormulaSheet } from "@/content/learn/formulas";
import { mixupHints } from "@/content/learn/mixups";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Make a revision pack to print · Veda Verse";
const description = "Choose units, your started chapters or your weak spots, and what to include: summaries, the mix-ups to avoid, formulas and key terms. Print it or save it as a PDF.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${REVISION_PATH}/pack` },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: `${REVISION_PATH}/pack`, siteName: "Veda Verse", locale: "en_IN", type: "website" },
};

const html = (__html: string) => ({ __html });

// Everything worth revising from each chapter, drawn once here; the reader
// chooses which chapters and parts to keep (components/learn/Pack.tsx).
export default function PackPage() {
  const formulas = new Map(buildFormulaSheet().flatMap(u => u.chapters).map(c => [c.slug, c]));
  const chapters: PackChapter[] = CHAPTERS.map(c => {
    const lessons = lessonsFor(c.slug) ?? [];
    const mx = c.blocks.map(b => ({ b, hint: mixupHints(b.html)[0] })).filter(x => x.hint);
    const fx = (formulas.get(c.slug)?.concepts ?? []).flatMap(k => k.items.filter(i => !i.worked).map(i => ({ ...i, concept: k.title })));
    const terms = termsForChapter(c.slug);
    return {
      slug: c.slug, unit: c.unit,
      node: (
        <section className="pk-ch" aria-labelledby={`pk-${c.slug}`}>
          <h2 id={`pk-${c.slug}`} className="pk-h"><span className="label red">Unit {c.unitN} · Chapter {c.n}</span><Link href={chapterPath(c.slug)} prefetch={false}>{c.title}</Link></h2>
          {lessons.length > 0 && (
            <div className="pk-sum rv-grid">
              {lessons.map(l => (
                <article key={l.blockId} className="rv-card">
                  <h3>{l.name}</h3>
                  <ul>{l.summary.points.map(p => <li key={p}>{p}</li>)}</ul>
                  <p className="rv-mem"><b>Remember:</b> {l.summary.memory}</p>
                </article>
              ))}
            </div>
          )}
          {mx.length > 0 && (
            <div className="pk-mx">
              <h3 className="label">Don’t confuse it with</h3>
              <ul>{mx.map(({ b, hint }) => <li key={b.id}><b className="pk-k">{b.title}:</b> <span dangerouslySetInnerHTML={html(hint)} /></li>)}</ul>
            </div>
          )}
          {fx.length > 0 && (
            <div className="pk-fx">
              <h3 className="label">Formulas</h3>
              <ul>{fx.map((f, i) => <li key={i}>{f.name && <b className="pk-k">{f.name}: </b>}<span dangerouslySetInnerHTML={html(f.html)} /></li>)}</ul>
            </div>
          )}
          {terms.length > 0 && (
            <div className="pk-terms">
              <h3 className="label">Key terms</h3>
              <dl>{terms.map(t => <div key={t.id}><dt>{t.term}</dt><dd>{t.def}</dd></div>)}</dl>
            </div>
          )}
        </section>
      ),
    };
  });
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero rv-hero no-print">
        <nav className="ch-crumbs" aria-label="Breadcrumb"><Link href={REVISION_PATH} prefetch={false}>Revision sheets</Link><span aria-hidden="true">/</span><span>Revision pack</span></nav>
        <h1><span>Your revision pack.</span><span className="red">Only what you need, on paper.</span></h1>
        <p className="lede">Choose the units, then all their chapters, only the ones you have started, or your weak spots from practice. Keep the parts you want, and print the pack or save it as a PDF.</p>
        <p className="ci-fine">Everything on one page instead? <Link className="link" href={REVISION_PATH} prefetch={false}>All the revision sheets</Link>.</p>
      </header>
      <Pack units={UNITS.map(u => ({ id: u.id, n: u.n, short: u.short }))} chapters={chapters} />
    </PageShell>
  );
}
