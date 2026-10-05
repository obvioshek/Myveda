import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import { Meter, Tag } from "@/components/learn/Evidence";
import { CHAPTERS, GROUPS, HOW, TEXTS_USED, chapterPath, deva, evidence } from "@/content/learn";
import { CONTACT_EMAIL } from "@/content/landing";
import { siteUrl } from "@/lib/site";

const title = "Unit 1 chapters: management and economics · Veda Verse";
const description = "Thirteen chapters of management and managerial economics in plain language, each read alongside the Arthashastra, the Bhagavad Gita and the Upanishads.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn" },
  openGraph: { title, description, url: "/learn", siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function LearnIndex() {
  const base = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", "@id": `${base}/learn#page`, url: `${base}/learn`, name: "Unit 1 chapters: management and managerial economics",
        description, inLanguage: "en-IN", isPartOf: { "@id": `${base}/#site` }, publisher: { "@id": `${base}/#org` },
        mainEntity: { "@type": "ItemList", itemListElement: CHAPTERS.map(c => ({ "@type": "ListItem", position: c.n, name: c.title, url: `${base}${chapterPath(c.slug)}` })) },
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

      <section className="wrap ci-hero" aria-labelledby="learn-h">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Unit 1 · Business management and managerial economics</span>
        <h1 id="learn-h"><span>Thirteen chapters.</span><span className="red">Every idea, then its ancient lens.</span></h1>
        <div className="split intro">
          <p className="lede">Each chapter explains the modern concepts in plain language, with the terms, formulas and examples a course expects. It then sets passages from India&apos;s classical texts beside them, every one with its reference.</p>
          <p className="lede">Start anywhere. Read the concepts to learn the idea, then the Ancient lens to see how the classics met it.</p>
        </div>
      </section>

      <section className="wrap ci-how" aria-label="How to read a chapter">
        <div className="grid g2">
          <div className="cell"><span className="label red">Part one</span><h2 className="h-xs">The concepts</h2><p>The modern theory restated in plain language: definitions, tables, formulas and worked examples.</p></div>
          <div className="cell"><span className="label red">Part two</span><h2 className="h-xs">Ancient lens</h2><p>Passages from the Arthaśāstra, the Bhagavad Gītā, the Upaniṣads and more, set beside those ideas.</p></div>
          <div className="cell"><Tag kind="documented" /><p>{HOW.documented}</p></div>
          <div className="cell"><Tag kind="view" /><p>{HOW.view}</p></div>
        </div>
        <p className="ci-fine">{HOW.translations}</p>
      </section>

      {GROUPS.map(g => {
        const list = CHAPTERS.filter(c => c.group === g.key);
        return (
          <section key={g.key} className="wrap sec ci-group" aria-labelledby={`g-${g.key}`}>
            <div className="split end">
              <h2 id={`g-${g.key}`} className="h-sm">{g.label}</h2>
              <p className="sub">{g.blurb}</p>
            </div>
            <div className="grid g3">
              {list.map(c => {
                const ev = evidence(c);
                return (
                  <Link key={c.slug} href={chapterPath(c.slug)} className="cell ci">
                    <span className="numeral" lang="sa" aria-hidden="true">{deva(c.n)}</span>
                    <h3 className="ci-t">{c.title}</h3>
                    <p className="ci-s">{c.scope}</p>
                    <span className="ci-f">
                      <Meter documented={ev.documented} view={ev.view} />
                      <span>{ev.total} passages</span>
                      <Arrow />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="wrap ci-texts" aria-labelledby="texts-used">
        <h2 id="texts-used" className="h-xs">Texts used</h2>
        <p>{TEXTS_USED}</p>
        <p className="ci-fine">Found something wrong or missing? Write to <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </section>
    </PageShell>
  );
}
