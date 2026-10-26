import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import ContinueBand from "@/components/landing/ContinueBand";
import { Meter, Tag } from "@/components/learn/Evidence";
import Progress from "@/components/learn/Progress";
import ReviewBand from "@/components/learn/ReviewBand";
import { SaveOffline } from "@/components/learn/Offline";
import { TEXTS, TEXTS_PATH, textPath, textsInChapter } from "@/content/learn/texts";
import { READING_GUIDE_PATH } from "@/content/learn/reading-guide";
import { CHAPTERS, FORMULAS_PATH, GLOSSARY, GLOSSARY_PATH, HOW, PLAN_PATH, PRACTICE_PATH, PROGRESS_PATH, START_WALK_PATH, TRANSFER_PATH, REVISION_PATH, UNITS, chapterBySlug, chapterPath, conceptIds, deva, evidence, pendingUnits } from "@/content/learn";
import { CONTACT_EMAIL } from "@/content/landing";
import { PROBLEMS, START_PATH } from "@/content/learn/paths";
import { siteUrl } from "@/lib/site";
import { buildFormulaSheet } from "@/content/learn/formulas";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

// Units with at least one formula get a link to their part of the formula sheet.
const WITH_FORMULAS = new Set(buildFormulaSheet().filter(u => u.formulas > 0).map(u => u.id));

const title = "Management chapters, from economics to marketing · Veda Verse";
const description = `${CHAPTERS.length} chapters on management, economics, OB, HRM, accounting, finance, strategy and marketing in plain language, each idea beside India's classical texts.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn" },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: "/learn", siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const hours = (min: number) => (min < 90 ? `about ${min} minutes` : `about ${Math.round(min / 60)} hours`);

export default function LearnIndex() {
  const base = siteUrl();
  const pending = pendingUnits();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${base}/learn#page`, url: `${base}/learn`, name: "Management chapters",
        description, inLanguage: "en-IN", isPartOf: { "@id": `${base}/#site` }, publisher: { "@id": `${base}/#org` },
        mainEntity: { "@type": "ItemList", itemListElement: CHAPTERS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.title, url: `${base}${chapterPath(c.slug)}` })) },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Veda Verse", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Chapters", item: `${base}/learn` },
        ],
      },
    ],
  };

  return (
    <PageShell wide note="Spotted a mistake?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ContinueBand />
      <ReviewBand />

      <section className="wrap ci-hero" aria-labelledby="learn-h">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />{UNITS.length === 1 ? `Unit 1 · ${UNITS[0].title}` : `${UNITS.length} units`}</span>
        <h1 id="learn-h"><span>{CHAPTERS.length} chapters.</span><span className="red">Every idea, then its ancient lens.</span></h1>
        <p className="lede">Each chapter explains the modern concepts in plain language, with the terms, formulas and examples a course expects, then, where a classical text meets the idea, sets the passage beside it, every one with its reference. Start anywhere, or use one of the two ways in below.</p>
        <nav className="ci-jump" aria-label="Units">
          {UNITS.map(u => <a key={u.id} href={`#${u.id}`}><b>Unit {u.n}</b>{u.short}</a>)}
          {pending && <span className="ci-soon">{pending}</span>}
        </nav>
        <p className="ci-plan">Preparing for an exam? <Link className="link" href={PLAN_PATH} prefetch={false}>Make a study plan</Link> from your exam date, or <Link className="link" href={PRACTICE_PATH} prefetch={false}>practise</Link> across the units. <Link className="link" href={PROGRESS_PATH} prefetch={false}>See your progress</Link>.</p>
      </section>

      <section className="wrap ci-walk" aria-labelledby="ci-walk-h">
        <span className="label red">New to reading the classics this way</span>
        <h2 id="ci-walk-h" className="h-sm">Five ideas, read two ways.</h2>
        <p className="sub">A short walk before the chapters: five modern ideas, each beside a passage that met the same problem, and what to notice when you read them together.</p>
        <div className="btn-row">
          <Link className="btn btn-secondary" href={START_WALK_PATH} prefetch={false}>Take the walk<Arrow /></Link>
          <Link className="btn btn-secondary" href="/learn/check" prefetch={false}>Where should I start?</Link>
          <Link className="btn btn-secondary" href={TEXTS_PATH} prefetch={false}>Meet the texts<Arrow /></Link>
          <Link className="btn btn-secondary" href={READING_GUIDE_PATH} prefetch={false}>How to read the names</Link>
        </div>
      </section>

      <nav className="wrap ci-more" aria-label="More ways to learn">
        <Link href="/learn/weekly" prefetch={false}><b>One idea a week</b><span>A new pair each Monday, by email or feed</span></Link>
        <Link href="/learn/apply" prefetch={false}><b>Apply it</b><span>Workplace situations: which idea helps here?</span></Link>
        <Link href="/learn/map" prefetch={false}><b>The map</b><span>Which chapters build on which</span></Link>
        <Link href={`${REVISION_PATH}/pack`} prefetch={false}><b>Revision pack</b><span>Your units, your weak spots, printed</span></Link>
        <Link href="/learn/quiz" prefetch={false}><b>Make a quiz</b><span>For a class or a study group</span></Link>
      </nav>

      <section className="wrap ci-ways" aria-label="Two ways in">
        <div className="ci-way">
          <span className="label red">New to management</span>
          <h2 className="h-sm">Start with these six.</h2>
          <p className="sub">Each builds on the one before, from what managers do to how a firm chooses its market.</p>
          <ol className="ci-path">
            {START_PATH.map((p, i) => {
              const c = chapterBySlug(p.slug)!;
              return (
                <li key={p.slug}>
                  <Link href={chapterPath(c.slug)}>
                    <span className="ci-pn">{i + 1}</span>
                    <span className="ci-pt"><b>{c.short ?? c.title}</b><span>{p.why}</span></span>
                    <span className="ci-pm">{c.minutes} min<Progress ids={conceptIds(c)} compact /></span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="ci-way">
          <span className="label red">Here with a problem</span>
          <h2 className="h-sm">Start from what you are facing.</h2>
          <p className="sub">The chapters that bear on it, across units.</p>
          <dl className="ci-probs">
            {PROBLEMS.map(p => (
              <div key={p.problem}>
                <dt>{p.problem}</dt>
                <dd>
                  {p.slugs.map(slug => {
                    const c = chapterBySlug(slug)!;
                    return <Link key={slug} href={chapterPath(slug)}><span className="ci-pl">{c.short ?? c.title}</span><span className="ci-pu">Unit {c.unitN}</span></Link>;
                  })}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap ci-how" aria-label="How to read a chapter">
        <div className="grid g3">
          <div className="cell"><span className="label red">Every concept</span><p>Opens in place: a question before you read, the core idea, a quick check, the Ancient lens where a passage fits, a prompt to reflect on and a one-page summary.</p></div>
          <div className="cell"><Tag kind="documented" /><p>{HOW.documented}</p></div>
          <div className="cell"><Tag kind="view" /><p>{HOW.view}</p></div>
        </div>
      </section>

      {UNITS.map(u => {
        const ids = u.chapters.flatMap(conceptIds);
        const minutes = u.chapters.reduce((a, c) => a + c.minutes, 0);
        return (
          <section key={u.id} id={u.id} className="wrap ci-unit" aria-labelledby={`${u.id}-h`}>
            <div className="ci-unit-head">
              <div className="ci-unit-t">
                <span className="label red">Unit {u.n}</span>
                <h2 id={`${u.id}-h`} className="h-sm">{u.title}</h2>
                <p className="sub">{u.blurb}</p>
              </div>
              <div className="ci-unit-side">
                <p className="ci-stats">{u.chapters.length} chapters · {u.concepts} concepts · {u.terms} glossary terms · {hours(minutes)}</p>
                <Progress ids={ids} />
                <div className="btn-row">
                  <Link className="btn btn-secondary" href={`${REVISION_PATH}#${u.id}`}>Revision sheets</Link>
                  <Link className="btn btn-secondary" href={`${PRACTICE_PATH}?unit=${u.id}`} prefetch={false}>Practise this unit</Link>
                  {WITH_FORMULAS.has(u.id) && <Link className="btn btn-ghost" href={`${FORMULAS_PATH}#${u.id}`} prefetch={false}>Formulas</Link>}
                  <Link className="btn btn-ghost" href={GLOSSARY_PATH}>Glossary</Link>
                </div>
              </div>
            </div>

            {u.groups.map(g => (
              <div key={g.key} className="ci-group">
                <div className="ci-group-h"><h3>{g.label}</h3><p>{g.blurb}</p></div>
                <div className="grid g3">
                  {u.chapters.filter(c => c.group === g.key).map(c => {
                    const ev = evidence(c);
                    return (
                      <Link key={c.slug} href={chapterPath(c.slug)} className="cell ci">
                        <span className="ci-top"><span className="ci-n" lang="sa" aria-hidden="true">{deva(c.n)}</span><Progress ids={conceptIds(c)} compact /></span>
                        <h4 className="ci-t">{c.title}</h4>
                        <p className="ci-s">{c.scope}</p>
                        <span className="ci-f">
                          <Meter documented={ev.documented} view={ev.view} />
                          <span>{c.blocks.length} concepts · {c.minutes} min</span>
                          <Arrow />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            {(() => {
              const texts = [...new Map(u.chapters.flatMap(c => textsInChapter(c.slug)).map(t => [t.id, t])).values()];
              return texts.length > 0 && (
                <p className="ch-texts ch-texts-l ci-texts">
                  <b>Texts quoted in Unit {u.n}:</b>{" "}
                  {texts.map((t, i) => <span key={t.id}>{i > 0 && ", "}<Link href={textPath(t.id)} prefetch={false}>{t.name}</Link></span>)}.
                </p>
              );
            })()}
          </section>
        );
      })}

      <section className="wrap ci-foot" aria-label="Notes">
        <p className="ci-fine">{HOW.translations}</p>
        <SaveOffline chapters={CHAPTERS.map(c => chapterPath(c.slug))} extra={["/learn", GLOSSARY_PATH, REVISION_PATH, FORMULAS_PATH, PRACTICE_PATH, PLAN_PATH, TRANSFER_PATH, TEXTS_PATH, ...TEXTS.map(t => textPath(t.id)), READING_GUIDE_PATH, `${REVISION_PATH}/pack`, "/learn/quiz", "/learn/apply", "/learn/check", "/learn/map", "/practice-bank.json", "/search-index.json"]} />
        <p className="ci-fine">Your progress is kept in this browser only. <Link className="link" href={TRANSFER_PATH} prefetch={false}>Move it to another device</Link>.</p>
        <p className="ci-fine">{pending ? `${pending}. ` : ""}{GLOSSARY.length} terms so far are in the <Link className="link" href={GLOSSARY_PATH}>glossary</Link>. Found something wrong or missing? Write to <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </PageShell>
  );
}
