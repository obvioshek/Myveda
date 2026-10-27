import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import PassageQuote from "@/components/learn/PassageQuote";
import WeeklySignup from "@/components/learn/WeeklySignup";
import { Tag } from "@/components/learn/Evidence";
import { WEEKLY_PATH, thisWeek, weekDates, weekItem } from "@/content/learn/weekly";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

// The week's pair changes on Mondays; the page is rebuilt every hour.
export const revalidate = 3600;

const title = "One idea a week, beside a classical passage · Veda Verse";
const description = "Each Monday, a management idea beside a classical Indian passage that met the same problem: what it adds and where they differ. On the site, by email or feed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: WEEKLY_PATH, types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: WEEKLY_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
};

const html = (__html: string) => ({ __html });

export default function WeeklyPage() {
  const week = thisWeek();
  const it = weekItem(week);
  const past = Array.from({ length: Math.min(week, 6) }, (_, i) => weekItem(week - 1 - i));
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />One idea a week · {weekDates(week).label}</span>
        <h1><span>{it.modern}</span>{it.classic && <span className="red">{it.classic}</span>}</h1>
      </header>
      <div className="wrap wk-week">
        <div className="wk-pair">
          <PassageQuote quote={it.quote} at={{ slug: it.slug, n: it.pairing }} />
          <p className="wk-how" dangerouslySetInnerHTML={html(it.how)} />
          <dl className="ca-notes">
            <div><dt>What it adds</dt><dd>{it.adds}</dd></div>
            <div><dt>Where they differ</dt><dd>{it.differs}</dd></div>
          </dl>
          <div className="ca-foot">
            <Tag kind={it.kind} />
            <Link className="more" href={it.href} prefetch={false}>{it.concept}, in {it.chapter}<Arrow /></Link>
          </div>
        </div>
        <aside className="wk-get" aria-labelledby="wk-get-h">
          <h2 id="wk-get-h" className="h-xs">Get it each Monday</h2>
          <WeeklySignup />
          <p className="ci-fine">Or follow the <a className="link" href="/feed.xml">feed</a> in any feed reader.</p>
        </aside>
      </div>
      {past.length > 0 && (
        <section className="wrap tx-sec" aria-labelledby="wk-past-h">
          <h2 id="wk-past-h" className="h-xs">Earlier weeks</h2>
          <ul className="wk-past">
            {past.map(p => <li key={p.week}><span className="tx-when">{weekDates(p.week).label}</span><Link href={p.href} prefetch={false}><b>{p.modern}</b>{p.classic ? ` ↔ ${p.classic}` : ""}</Link></li>)}
          </ul>
        </section>
      )}
    </PageShell>
  );
}
