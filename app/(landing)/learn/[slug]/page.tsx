import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import LessonCard from "@/components/learn/LessonCard";
import LessonLens from "@/components/learn/LessonLens";
import Pairings from "@/components/learn/Pairings";
import Toast from "@/components/landing/Toast";
import { Meter, Tag } from "@/components/learn/Evidence";
import LessonsToggle from "@/components/learn/LessonsToggle";
import ReadingBar from "@/components/learn/ReadingBar";
import GlossaryTips, { type TipTerm } from "@/components/learn/GlossaryTips";
import { TOOLS } from "@/components/learn/tools";
import { CHAPTERS, CONTENT_UPDATED, GLOSSARY, GLOSSARY_PATH, PRACTICE_PATH, HOW, LEARN_PATH, UNITS, chapterBySlug, chapterDescription, chapterPath, chapterTitle, deva, evidence, lessonsFor, neighbours, termsForChapter, unitById } from "@/content/learn";
import { linkTerms } from "@/content/learn/term-links";
import { mixupHints } from "@/content/learn/mixups";
import { ideasUsedIn, usesIdeasFrom, type Link as ChapterLink } from "@/content/learn/connections";
import { TEXTS_PATH, textPath, textsInChapter } from "@/content/learn/texts";
import CiteThis from "@/components/learn/CiteThis";
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
  const texts = textsInChapter(c.slug);
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
  const checks = (lessons ?? []).reduce((a, l) => a + l.check.length, 0);
  const uses = usesIdeasFrom(c.slug);
  const usedIn = ideasUsedIn(c.slug);

  // Each concept's text with its glossary terms linked, and what the cards
  // need to know about each term linked on this page.
  const linked = new Map(c.blocks.map(b => [b.id, linkTerms(b.html, GLOSSARY, c.slug, b.title, id => `${GLOSSARY_PATH}#${id}`)]));
  const tips: Record<string, TipTerm> = {};
  for (const id of new Set([...linked.values()].flatMap(l => l.ids))) {
    const t = GLOSSARY.find(x => x.id === id)!;
    const elsewhere = t.chapterSlug !== c.slug && t.chapterSlug;
    tips[id] = { term: t.term, def: t.def, href: `${GLOSSARY_PATH}#${id}`, chapter: elsewhere ? t.chapterTitle : null, chapterHref: elsewhere ? chapterPath(t.chapterSlug) : null };
  }

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

      {/* A single wide column: the header, a slim reading strip that sticks under
          the site header, and the concepts. Nothing sits beside the text. */}
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
          {uses.length > 0 && (
            <p className="ch-uses">
              Uses ideas from{" "}
              {uses.map((l, i) => (
                <span key={l.slug}>{i > 0 && (i === uses.length - 1 ? " and " : ", ")}<Link className="link" href={chapterPath(l.slug)} prefetch={false}>{l.title}</Link></span>
              ))}
              . <a className="link" href="#connects">Which ideas</a>
            </p>
          )}
          <div className="ch-meta">
            <span>{c.blocks.length} {c.blocks.length === 1 ? "concept" : "concepts"}</span>
            <span>About {c.minutes} min</span>
            {ev.total > 0 && (
              <details className="ch-legend">
                <summary><Meter documented={ev.documented} view={ev.view} />{ev.total} {ev.total === 1 ? "passage" : "passages"}: {ev.documented} documented{ev.view ? `, ${ev.view} interpretive` : ""}<span className="ch-legend-q">What these mean</span></summary>
                <div className="ch-legend-body">
                  <p><Tag kind="documented" /> {HOW.documented}</p>
                  <p><Tag kind="view" /> {HOW.view}</p>
                </div>
              </details>
            )}
          </div>
          <div className="ch-actions">
            <a className="btn btn-primary" href={firstId ? `#${firstId}` : "#lens"}>{firstId ? "Start with the first concept" : "Jump to the Ancient lens"}<Arrow /></a>
            {lessons && <LessonsToggle />}
          </div>
        </header>

        <ReadingBar
          slug={c.slug}
          items={(lessons ?? []).map(l => ({ id: l.blockId, name: l.name }))}
          terms={terms.map(t => ({ id: t.id, term: t.term, def: t.def }))}
          unitLabel={many ? `Unit ${unit.n} · ${unit.short}` : "All chapters"}
          chapters={unit.chapters.map(ch => ({ href: chapterPath(ch.slug), n: deva(ch.n), title: ch.title, current: ch.slug === c.slug }))}
          glossary={GLOSSARY_PATH}
        />

        <div className="ch-main">
          <section id="concepts" className="ch-part" aria-labelledby="concepts-h">
            <div className="ch-part-head"><span className="label red">Part one</span><h2 id="concepts-h">The concepts</h2></div>
            {c.blocks.map(b => {
              const Calc = TOOLS[`${c.slug}#${b.id}`];
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
                    chapter={c.title}
                    detail={<div className="prose" dangerouslySetInnerHTML={html(linked.get(b.id)!.html)} />}
                    lens={lesson.lens.length ? <LessonLens pairings={c.pairings} notes={lesson.lens} /> : null}
                    tool={Calc ? <Calc /> : null}
                    mixups={mixupHints(b.html)}
                  />
                );
              }
              return (
                <div key={b.id} id={b.id} className="ch-block">
                  {b.title && <h3>{b.title}</h3>}
                  <div className="prose" dangerouslySetInnerHTML={html(linked.get(b.id)!.html)} />
                  {Calc && <div className="ls-tool"><span className="label red">Try it</span><Calc /></div>}
                </div>
              );
            })}
            {lessons && ev.total > 0 && <p className="ci-fine">{HOW.translations}</p>}
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

          {checks > 0 && (
            <section className="ch-test" aria-labelledby="ch-test-h">
              <div>
                <span className="label red">Test yourself</span>
                <h2 id="ch-test-h" className="h-xs">All {checks} questions from this chapter, in a new order.</h2>
                <p className="ci-fine">The ones you miss join your review, and come back until they stick.</p>
              </div>
              <Link className="btn btn-primary btn-lg" href={`${PRACTICE_PATH}?chapter=${c.slug}`} prefetch={false}>Start the chapter test<Arrow /></Link>
            </section>
          )}

          {(uses.length > 0 || usedIn.length > 0) && (
            <section id="connects" className="ch-conn" aria-labelledby="connects-h">
              <h2 id="connects-h" className="h-xs">How this chapter connects</h2>
              <p className="ci-fine">Worked out from the glossary terms each chapter uses. A chapter is listed when two or more terms are shared.</p>
              <div className="ch-conn-cols">
                {uses.length > 0 && <Connections label="Uses ideas from" items={uses} many={many} />}
                {usedIn.length > 0 && <Connections label="Its ideas are used in" items={usedIn} many={many} />}
              </div>
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

          {texts.length > 0 && (
            <p className="ch-texts ch-texts-l">
              <b>{texts.length === 1 ? "The text" : "Texts"} quoted in this chapter:</b>{" "}
              {texts.map((t, i) => <span key={t.id}>{i > 0 && ", "}<Link href={textPath(t.id)} prefetch={false}>{t.name}</Link></span>)}.{" "}
              <Link href={TEXTS_PATH} prefetch={false}>About all the texts</Link>.
            </p>
          )}
          <CiteThis title={c.title} url={`${base}${chapterPath(c.slug)}`} updated={CONTENT_UPDATED} />
        </div>
      </div>
      <GlossaryTips terms={tips} />
      <Toast />
    </PageShell>
  );
}

function Connections({ label, items, many }: { label: string; items: ChapterLink[]; many: boolean }) {
  return (
    <div className="ch-conn-col">
      <span className="label red">{label}</span>
      <ul>
        {items.map(l => (
          <li key={l.slug}>
            <Link href={chapterPath(l.slug)} prefetch={false}>{many && <span className="ci-pu">Unit {l.unitN}</span>}<b>{l.title}</b></Link>
            <span>{l.terms.join(" · ")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
