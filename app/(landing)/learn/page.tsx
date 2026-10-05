import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import ContinueBand from "@/components/landing/ContinueBand";
import { Meter, Tag } from "@/components/learn/Evidence";
import Progress from "@/components/learn/Progress";
import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, HOW, REVISION_PATH, UNITS, chapterPath, conceptIds, deva, evidence } from "@/content/learn";
import { CONTACT_EMAIL } from "@/content/landing";
import { siteUrl } from "@/lib/site";

const title = "Management and economics chapters · Veda Verse";
const description = `${CHAPTERS.length} chapters of management and managerial economics in plain language, each read alongside the Arthashastra, the Bhagavad Gita and the Upanishads.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn" },
  openGraph: { title, description, url: "/learn", siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const hours = (min: number) => (min < 90 ? `about ${min} minutes` : `about ${Math.round(min / 60)} hours`);

export default function LearnIndex() {
  const base = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${base}/learn#page`, url: `${base}/learn`, name: "Management and economics chapters",
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
      <ContinueBand home={false} />

      <section className="wrap ci-hero" aria-labelledby="learn-h">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />{UNITS.length === 1 ? `Unit 1 · ${UNITS[0].title}` : `${UNITS.length} units`}</span>
        <h1 id="learn-h"><span>{CHAPTERS.length} chapters.</span><span className="red">Every idea, then its ancient lens.</span></h1>
        <p className="lede">Each chapter explains the modern concepts in plain language, with the terms, formulas and examples a course expects, then sets passages from India&apos;s classical texts beside them, every one with its reference. Start anywhere.</p>
      </section>

      <section className="wrap ci-how" aria-label="How to read a chapter">
        <div className="grid g3">
          <div className="cell"><span className="label red">Every concept</span><p>Opens in place: a question before you read, the core idea, a quick check, the Ancient lens, a prompt to reflect on and a one-page summary.</p></div>
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

            <details className="ch-texts ci-texts">
              <summary>Texts used in Unit {u.n}</summary>
              <p>{u.textsUsed}</p>
            </details>
          </section>
        );
      })}

      <section className="wrap ci-foot" aria-label="Notes">
        <p className="ci-fine">{HOW.translations}</p>
        <p className="ci-fine">More units are on the way. {GLOSSARY.length} terms so far are in the <Link className="link" href={GLOSSARY_PATH}>glossary</Link>. Found something wrong or missing? Write to <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </PageShell>
  );
}
