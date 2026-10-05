import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import PrintButton from "@/components/learn/PrintButton";
import { REVISION_PATH, UNITS, chapterPath, deva, lessonsFor } from "@/content/learn";

const title = "Revision sheets: every concept on one page · Veda Verse";
const description = "The one-page summary of every concept in each unit, chapter by chapter, with a line to remember. Ready to print or save as a PDF before an exam.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: REVISION_PATH },
  openGraph: { title, description, url: REVISION_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

// Every lesson's one-page summary, gathered by unit and chapter, for revising in
// one sitting or printing. Each summary links back to its full lesson.
export default function RevisionPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero rv-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Revision</span>
        <h1><span>Revision sheets.</span><span className="red">Every concept on one page.</span></h1>
        <p className="lede">The one-page summary of each concept, chapter by chapter, with the line to remember. Read it the night before, or print it.</p>
        <div className="btn-row no-print">
          <PrintButton />
          {UNITS.length > 1 && UNITS.map(u => <a key={u.id} className="btn btn-ghost" href={`#${u.id}`}>Unit {u.n}</a>)}
        </div>
      </header>

      {UNITS.map(u => (
        <section key={u.id} id={u.id} className="wrap rv-unit" aria-labelledby={`${u.id}-rv`}>
          <h2 id={`${u.id}-rv`} className="h-sm rv-unit-h"><span className="label red">Unit {u.n}</span>{u.title}</h2>
          {u.chapters.map(c => {
            const lessons = lessonsFor(c.slug);
            return (
              <section key={c.slug} className="rv-ch" aria-labelledby={`rv-${c.slug}`}>
                <h3 id={`rv-${c.slug}`} className="rv-ch-h">
                  <span className="rv-n" lang="sa" aria-hidden="true">{deva(c.n)}</span>
                  <Link href={chapterPath(c.slug)} prefetch={false}>{c.title}</Link>
                </h3>
                {lessons ? (
                  <div className="rv-grid">
                    {lessons.map(l => (
                      <article key={l.blockId} className="rv-card">
                        <h4><Link href={`${chapterPath(c.slug)}#${l.blockId}`} prefetch={false}>{l.name}</Link></h4>
                        <ul>{l.summary.points.map(p => <li key={p}>{p}</li>)}</ul>
                        <p className="rv-mem"><b>Remember:</b> {l.summary.memory}</p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="ci-fine">Summaries for this chapter are on the way. <Link className="link" href={chapterPath(c.slug)}>Read the chapter</Link>.</p>
                )}
              </section>
            );
          })}
        </section>
      ))}
    </PageShell>
  );
}
