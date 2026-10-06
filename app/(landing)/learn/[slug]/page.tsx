import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import ChapterNav from "@/components/learn/ChapterNav";
import LessonCard from "@/components/learn/LessonCard";
import LessonLens from "@/components/learn/LessonLens";
import Pairings from "@/components/learn/Pairings";
import Toast from "@/components/landing/Toast";
import { Meter, Tag } from "@/components/learn/Evidence";
import LessonsToggle from "@/components/learn/LessonsToggle";
import Progress from "@/components/learn/Progress";
import NowReading from "@/components/learn/NowReading";
import { CHAPTERS, GLOSSARY_PATH, HOW, LEARN_PATH, UNITS, chapterBySlug, chapterDescription, chapterPath, chapterTitle, conceptIds, deva, evidence, lessonsFor, neighbours, termsForChapter, unitById } from "@/content/learn";
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
  const unit = unitById(c.unit)!;
  const base = siteUrl();
  const url = `${base}${chapterPath(c.slug)}`;
  const ev = evidence(c);
  const { prev, next } = neighbours(c);
  const terms = termsForChapter(c.slug);
  // A chapter with guided lessons teaches each concept in place, passages included;
  // any passage no lesson uses is listed after the concepts.
  const lessons = lessonsFor(c.slug);
  const used = new Set((lessons ?? []).flatMap(l => l.lens.map(n => n.pairing)));
  const loose = c.pairings.filter((_, i) => !used.has(i));
  const showLens = loose.length > 0;
  const firstId = lessons?.[0]?.blockId;
  const many = UNITS.length > 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: c.title, description: chapterDescription(c), url, inLanguage: "en-IN",
        about: c.blocks.filter(b => b.title).map(b => ({ "@type": "Thing", name: b.title })),
        isPartOf: { "@id": `${base}/learn#page` }, publisher: { "@id": `${base}/#org` }, author: { "@id": `${base}/#org` },
        mainEntityOfPage: url, timeRequired: `PT${c.minutes}M`,
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

      {/* One grid for the whole chapter. On wide screens the chapter list runs down
          the left, the title and concepts sit in the middle, and a reading
          companion stays beside the text on the right; narrower screens stack
          them. */}
      <div className="wrap ch-layout">
        <header className="ch-head">
          <nav className="ch-crumbs" aria-label="Breadcrumb">
            <Link href={LEARN_PATH}>Chapters</Link>
            <span aria-hidden="true">/</span>
            <span>{many && <>Unit {unit.n}<span className="ch-crumb-unit"> · {unit.short}</span> · </>}Chapter {c.n} of {c.total}</span>
          </nav>
          <div className="ch-title">
            <span className="ch-numeral" lang="sa" aria-hidden="true">{deva(c.n)}</span>
            <h1>{c.title}</h1>
          </div>
          <p className="ch-scope">{c.scope}</p>
          <div className="ch-actions">
            <a className="btn btn-primary" href={firstId ? `#${firstId}` : "#lens"}>{firstId ? "Start with the first concept" : "Jump to the Ancient lens"}<Arrow /></a>
            {lessons && <LessonsToggle />}
          </div>
        </header>

        <ChapterNav chapter={c} hasTerms={terms.length > 0} showLens={showLens} />

        {/* The reading companion: the chapter at a glance, where the reader is,
            the chapter's terms to look up in place, and where it leads. */}
        <aside className="ch-side" aria-label="Reading companion">
          <div className="ch-glance">
            <span className="label red">At a glance</span>
            <dl className="ch-stats">
              <div><dt>Concepts</dt><dd>{c.blocks.length}</dd></div>
              <div><dt>Minutes</dt><dd>{c.minutes}</dd></div>
              <div><dt>Passages</dt><dd>{ev.total}</dd></div>
            </dl>
            {ev.total > 0 && (
              <details className="ch-legend">
                <summary>
                  <span className="ch-ev"><Meter documented={ev.documented} view={ev.view} />{ev.documented} documented{ev.view ? `, ${ev.view} interpretive` : ""}</span>
                  <span className="ch-legend-q">What do these mean?</span>
                </summary>
                <p><Tag kind="documented" /> {HOW.documented}</p>
                <p><Tag kind="view" /> {HOW.view}</p>
              </details>
            )}
            {lessons && <div className="ch-prog"><span className="ch-glance-k">Progress</span><Progress ids={conceptIds(c)} /></div>}
            {lessons && <NowReading items={lessons.map(l => ({ id: l.blockId, name: l.name }))} />}
            {terms.length > 0 && (
              <div className="ch-sterms">
                <span className="ch-glance-k">Terms in this chapter</span>
                <ul>
                  {terms.slice(0, 10).map(t => (
                    <li key={t.id}>
                      <details>
                        <summary>{t.term}</summary>
                        <p>{t.def} <Link href={`${GLOSSARY_PATH}#${t.id}`} prefetch={false}>Glossary</Link></p>
                      </details>
                    </li>
                  ))}
                </ul>
                {terms.length > 10 && <a className="ch-sterms-all" href="#terms">All {terms.length} terms</a>}
              </div>
            )}
            {next && (
              <Link href={chapterPath(next.slug)} className="ch-upnext" prefetch={false}>
                <span className="ch-glance-k">Up next · Chapter {next.n}</span>
                <b>{next.title}</b>
              </Link>
            )}
          </div>
        </aside>

        <div className="ch-main">
          <section id="concepts" className="ch-part" aria-labelledby="concepts-h">
            <div className="ch-part-head"><span className="label red">Part one</span><h2 id="concepts-h">The concepts</h2></div>
            {c.blocks.map(b => {
              const li = lessons?.findIndex(l => l.blockId === b.id) ?? -1;
              if (lessons && li >= 0) {
                const lesson = lessons[li];
                return (
                  <LessonCard
                    key={b.id}
                    lesson={lesson}
                    index={li}
                    total={lessons.length}
                    path={chapterPath(c.slug)}
                    detail={<div className="prose" dangerouslySetInnerHTML={html(b.html)} />}
                    lens={lesson.lens.length ? <LessonLens pairings={c.pairings} notes={lesson.lens} /> : null}
                  />
                );
              }
              return (
                <div key={b.id} id={b.id} className="ch-block">
                  {b.title && <h3>{b.title}</h3>}
                  <div className="prose" dangerouslySetInnerHTML={html(b.html)} />
                </div>
              );
            })}
            {terms.length > 0 && (
              <div id="terms" className="ch-terms">
                <h3>Terms from the glossary</h3>
                <ul className="ch-chips">
                  {terms.map(t => <li key={t.id}><Link href={`${GLOSSARY_PATH}#${t.id}`} prefetch={false}>{t.term}</Link></li>)}
                </ul>
              </div>
            )}
            {lessons && <p className="ci-fine">{HOW.translations}</p>}
          </section>

          {showLens && (
            <section id="lens" className="ch-part ch-lens" aria-labelledby="lens-h">
              <div className="ch-part-head"><span className="label red">Part two</span><h2 id="lens-h">Ancient lens</h2></div>
              <div className="ch-key">
                <p><Tag kind="documented" /> {HOW.documented}</p>
                <p><Tag kind="view" /> {HOW.view}</p>
              </div>
              {c.lensNote && <p className="cue">{c.lensNote}</p>}
              <Pairings items={loose} />
              <p className="ci-fine">{HOW.translations}</p>
            </section>
          )}

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
              <Link href={LEARN_PATH} className="cell ch-fwd">
                <span className="label">That was the last chapter of Unit {unit.n}</span><b>Back to all chapters</b><span className="ch-go"><Arrow /></span>
              </Link>
            )}
          </nav>

          <details className="ch-texts">
            <summary>Texts used in this unit</summary>
            <p>{unit.textsUsed}</p>
          </details>
        </div>
      </div>
      <Toast />
    </PageShell>
  );
}
