import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import ChapterNav from "@/components/learn/ChapterNav";
import Pairings from "@/components/learn/Pairings";
import { Meter, Tag } from "@/components/learn/Evidence";
import { CHAPTERS, HOW, TEXTS_USED, chapterBySlug, chapterDescription, chapterPath, chapterTitle, deva, evidence, neighbours, termsForChapter, GLOSSARY_PATH } from "@/content/learn";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CHAPTERS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = chapterBySlug((await params).slug);
  if (!c) return {};
  const title = chapterTitle(c);
  const description = chapterDescription(c);
  const path = chapterPath(c.slug);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Veda Verse", locale: "en_IN", type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const html = (__html: string) => ({ __html });

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = chapterBySlug((await params).slug);
  if (!c) notFound();
  const base = siteUrl();
  const url = `${base}${chapterPath(c.slug)}`;
  const ev = evidence(c);
  const { prev, next } = neighbours(c);
  const terms = termsForChapter(c.n);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: c.title, description: chapterDescription(c), url, inLanguage: "en-IN",
        about: c.blocks.filter(b => b.title).map(b => ({ "@type": "Thing", name: b.title })),
        isPartOf: { "@id": `${base}/learn#page` }, publisher: { "@id": `${base}/#org` }, author: { "@id": `${base}/#org` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Veda Verse", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Chapters", item: `${base}/learn` },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell wide note="Spotted a mistake?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="wrap ch-head">
        <nav className="ch-crumbs" aria-label="Breadcrumb">
          <Link href="/learn">Chapters</Link><span aria-hidden="true">/</span><span>Chapter {c.n} of {CHAPTERS.length}</span>
        </nav>
        <div className="ch-title">
          <span className="numeral ch-numeral" lang="sa" aria-hidden="true">{deva(c.n)}</span>
          <h1>{c.title}</h1>
        </div>
        <div className="split intro">
          <p className="lede">{c.scope}</p>
          <div className="ch-facts">
            <div><Meter documented={ev.documented} view={ev.view} /><span>{ev.total} classical passages: {ev.documented} documented{ev.view ? `, ${ev.view} interpretive` : ""}</span></div>
            <a className="btn btn-secondary" href="#lens">Jump to the Ancient lens<Arrow /></a>
          </div>
        </div>
      </header>

      <div className="wrap ch-grid">
        <ChapterNav chapter={c} hasTerms={terms.length > 0} />

        <div className="ch-main">
          <section id="concepts" className="ch-part" aria-labelledby="concepts-h">
            <div className="ch-part-head"><span className="label red">Part one</span><h2 id="concepts-h">The concepts</h2></div>
            {c.blocks.map(b => (
              <div key={b.id} id={b.id} className="ch-block">
                {b.title && <h3>{b.title}</h3>}
                <div className="prose" dangerouslySetInnerHTML={html(b.html)} />
              </div>
            ))}
            {terms.length > 0 && (
              <div id="terms" className="ch-terms">
                <h3>Terms from the glossary</h3>
                <ul className="ch-chips">
                  {terms.map(t => <li key={t.id}><Link href={`${GLOSSARY_PATH}#${t.id}`}>{t.term}</Link></li>)}
                </ul>
              </div>
            )}
          </section>

          <section id="lens" className="ch-part ch-lens" aria-labelledby="lens-h">
            <div className="ch-part-head"><span className="label red">Part two</span><h2 id="lens-h">Ancient lens</h2></div>
            <div className="ch-legend">
              <div><Tag kind="documented" /><p>{HOW.documented}</p></div>
              <div><Tag kind="view" /><p>{HOW.view}</p></div>
            </div>
            {c.lensNote && <p className="cue">{c.lensNote}</p>}
            <Pairings items={c.pairings} />
            <p className="ci-fine">{HOW.translations}</p>
          </section>

          <nav className="ch-next" aria-label="Chapters">
            {prev ? (
              <Link href={chapterPath(prev.slug)} className="cell" rel="prev">
                <span className="label">Previous · Chapter {prev.n}</span><b>{prev.title}</b>
              </Link>
            ) : <span className="cell ch-none" aria-hidden="true" />}
            {next ? (
              <Link href={chapterPath(next.slug)} className="cell ch-fwd" rel="next">
                <span className="label">Next · Chapter {next.n}</span><b>{next.title}</b><span className="ch-go"><Arrow /></span>
              </Link>
            ) : (
              <Link href="/learn" className="cell ch-fwd">
                <span className="label">That was the last chapter</span><b>Back to all chapters</b><span className="ch-go"><Arrow /></span>
              </Link>
            )}
          </nav>

          <details className="ch-texts">
            <summary>Texts used in this unit</summary>
            <p>{TEXTS_USED}</p>
          </details>
        </div>
      </div>
    </PageShell>
  );
}
