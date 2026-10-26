import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import { Tag } from "@/components/learn/Evidence";
import PassageQuote from "@/components/learn/PassageQuote";
import CiteThis from "@/components/learn/CiteThis";
import { LEARN_PATH } from "@/content/learn";
import { TEXTS, TEXTS_PATH, TEXTS_UPDATED, passagesFrom, textById, textPath } from "@/content/learn/texts";
import { READING_GUIDE_PATH } from "@/content/learn/reading-guide";
import { siteUrl } from "@/lib/site";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() {
  return TEXTS.map(t => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const t = textById((await params).id);
  if (!t) return {};
  const n = passagesFrom(t.id).length;
  const title = `${t.name}: what it is, and the passages we quote · Veda Verse`.length <= 65
    ? `${t.name}: what it is, and the passages we quote · Veda Verse`
    : `${t.name} · Veda Verse`;
  const full = `${t.kind}. ${t.form}. ${n} ${n === 1 ? "passage" : "passages"} from it in the chapters, each linked to its lesson.`;
  const description = full.length <= 160 ? full : `${t.kind}. ${n} ${n === 1 ? "passage" : "passages"} from it in the chapters, each linked to its lesson.`;
  const url = textPath(t.id);
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { images: DEFAULT_OG_IMAGES, title, description, url, siteName: "Veda Verse", locale: "en_IN", type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

// One classical text: what it is, how far its date and author are known, what to
// keep in mind, where to read it, and every passage the chapters quote from it.
export default async function TextPage({ params }: { params: Promise<{ id: string }> }) {
  const t = textById((await params).id);
  if (!t) notFound();
  const passages = passagesFrom(t.id);
  const order = [...TEXTS].sort((a, b) => a.year - b.year);
  const at = order.findIndex(x => x.id === t.id);
  const prev = order[at - 1] ?? null, next = order[at + 1] ?? null;
  const base = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Veda Verse", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "The texts", item: `${base}${TEXTS_PATH}` },
      { "@type": "ListItem", position: 3, name: t.name, item: `${base}${textPath(t.id)}` },
    ],
  };

  return (
    <PageShell wide note="Spotted a mistake?">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <header className="wrap ci-hero tx-hero">
        <nav className="ch-crumbs" aria-label="Breadcrumb"><Link href={LEARN_PATH} prefetch={false}>Chapters</Link><span aria-hidden="true">/</span><Link href={TEXTS_PATH} prefetch={false}>The texts</Link></nav>
        <span className="eyebrow"><i className="sq" aria-hidden="true" />{t.language} · {t.when}</span>
        <h1><span>{t.name}</span>{t.original && <span className="red tx-h-og" lang={t.original.lang}>{t.original.text}</span>}</h1>
        <p className="lede">{t.kind}. {passages.length} {passages.length === 1 ? "passage" : "passages"} in the chapters come from it.</p>
      </header>

      <div className="wrap tx-body">
        <div className="tx-main">
          <dl className="tx-facts">
            <div><dt>What it is</dt><dd>{t.form}</dd></div>
            <div><dt>Composed</dt><dd>{t.date}</dd></div>
            <div><dt>By</dt><dd>{t.by}</dd></div>
            <div><dt>References on this site</dt><dd>{t.refs}</dd></div>
          </dl>
          <div className="prose tx-about">{t.about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <aside className="tx-care" aria-label="Read with care"><b>Read with care.</b> {t.care}</aside>
          {(t.read.length > 0 || t.further.length > 0) && (
            <section className="tx-read" aria-labelledby="tx-read-h">
              <h2 id="tx-read-h" className="h-xs">Read it in full</h2>
              {t.read.length > 0 && (
                <ul>{t.read.map(r => <li key={r.url}><a className="link" href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a> <span className="ci-fine">(free, opens another site)</span></li>)}</ul>
              )}
              {t.further.length > 0 && (
                <>
                  <p className="label">Translations in print</p>
                  <ul>{t.further.map(f => <li key={f}>{f}</li>)}</ul>
                </>
              )}
            </section>
          )}
          <p className="ci-fine">Names with marks such as ā, ṣ or ṛ are explained in <Link className="link" href={READING_GUIDE_PATH} prefetch={false}>how to read the names and terms</Link>.</p>
        </div>
      </div>

      <section className="wrap tx-sec" aria-labelledby="tx-p-h">
        <h2 id="tx-p-h" className="h-sm">The {passages.length === 1 ? "passage" : `${passages.length} passages`} the chapters quote</h2>
        <ol className="lp-list">
          {passages.map(p => (
            <li key={`${p.slug}-${p.pairing}`} className={`lp ${p.kind} has-q`}>
              <div className="lp-main">
                <div className="lp-top"><Tag kind={p.kind} /><span className="label">Unit {p.unitN} · {p.chapter}</span></div>
                <h3 className="lp-h">
                  <span>{p.modern}</span>
                  {p.classic && (<><span className="lp-x" aria-hidden="true">↔</span><span className="sr-only"> and </span><span className="lp-c">{p.classic}</span></>)}
                </h3>
                <Link className="more" href={p.href} prefetch={false}>Read it in its lesson<Arrow /></Link>
              </div>
              <PassageQuote quote={p.quote} except={t.id} at={{ slug: p.slug, n: p.pairing }} />
            </li>
          ))}
        </ol>
      </section>

      <div className="wrap tx-sec">
        <CiteThis title={`${t.name}: what it is, and the passages we quote`} url={`${base}${textPath(t.id)}`} updated={TEXTS_UPDATED} />
        <nav className="grid g2 tx-nav" aria-label="Other texts">
          {prev ? <Link className="cell" href={textPath(prev.id)} prefetch={false}><span className="label">Older · {prev.when}</span><b>{prev.name}</b></Link> : <Link className="cell" href={TEXTS_PATH} prefetch={false}><span className="label">All the texts</span><b>Back to the timeline</b></Link>}
          {next ? <Link className="cell" href={textPath(next.id)} prefetch={false}><span className="label">Later · {next.when}</span><b>{next.name}</b></Link> : <Link className="cell" href={TEXTS_PATH} prefetch={false}><span className="label">All the texts</span><b>Back to the timeline</b></Link>}
        </nav>
      </div>
    </PageShell>
  );
}
