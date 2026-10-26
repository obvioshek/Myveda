import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import GlossaryList, { type GlossaryItem } from "@/components/learn/GlossaryList";
import { GLOSSARY, GLOSSARY_PATH, PRACTICE_PATH, UNITS, chapterBySlug, chapterPath } from "@/content/learn";
import { HI_GLOSSARY_PATH } from "@/content/hi";
import { siteUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Management glossary: economics, HR and finance terms · Veda Verse";
const description = `${GLOSSARY.length} management, economics, HR, accounting and finance terms in plain language, from agency theory to WACC, each linked to the chapter that explains it.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: GLOSSARY_PATH, languages: { "en-IN": GLOSSARY_PATH, "hi-IN": HI_GLOSSARY_PATH } },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: GLOSSARY_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function GlossaryPage() {
  const base = siteUrl();
  const items: GlossaryItem[] = GLOSSARY.map(t => {
    const c = chapterBySlug(t.chapterSlug)!;
    return { id: t.id, letter: t.letter, term: t.term, def: t.def, chapterN: c.n, chapterTitle: c.title, chapterHref: chapterPath(c.slug), unitN: UNITS.length > 1 ? c.unitN : undefined };
  });
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet", "@id": `${base}${GLOSSARY_PATH}#set`, url: `${base}${GLOSSARY_PATH}`, name: "Management, economics, OB, HRM, accounting and finance glossary",
        inLanguage: "en-IN", publisher: { "@id": `${base}/#org` },
        hasDefinedTerm: GLOSSARY.map(t => ({ "@type": "DefinedTerm", name: t.term, description: t.def, url: `${base}${GLOSSARY_PATH}#${t.id}`, inDefinedTermSet: `${base}${GLOSSARY_PATH}#set` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Veda Verse", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Chapters", item: `${base}/learn` },
          { "@type": "ListItem", position: 3, name: "Glossary", item: `${base}${GLOSSARY_PATH}` },
        ],
      },
    ],
  };

  return (
    <PageShell wide note="Spotted a mistake?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Reference</span>
        <h1><span>Glossary.</span><span className="red">{GLOSSARY.length} terms, A to Z.</span></h1>
        <div className="split intro">
          <p className="lede">Short, plain definitions of the terms used across the chapters. Each one links to the chapter that explains the idea in full, with any classical passage that meets it.</p>
        </div>
        <div className="btn-row">
          <Link className="btn btn-secondary" href={`${PRACTICE_PATH}?mode=terms`} prefetch={false}>Practise them as cards</Link>
          <a className="btn btn-ghost" href="/glossary-anki.txt" download>Download for Anki</a>
          <a className="btn btn-ghost" href="/glossary.csv" download>Download as a spreadsheet</a>
        </div>
        <p className="ci-fine">In Anki, choose File, then Import, and pick the file: each term becomes a card, tagged by unit and chapter. Unit 1&apos;s terms are also <Link className="link" href={HI_GLOSSARY_PATH} prefetch={false}>in Hindi</Link> (<span className="hi-ui" lang="hi">हिंदी में</span>).</p>
      </header>
      <div className="wrap gl">
        <GlossaryList items={items} />
      </div>
    </PageShell>
  );
}
