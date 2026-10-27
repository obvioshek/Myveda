import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import FeedAddress from "@/components/learn/FeedAddress";
import { FEED_PATH, WEEKLY_PATH, feedWeeks, weekDates, weekItem } from "@/content/learn/weekly";
import { siteUrl } from "@/lib/site";

// Where a browser lands from the feed's address. Chrome shows an RSS feed as
// raw XML, so next.config.ts sends a page visit to /feed.xml here; feed readers
// ask for the address without a browser's Sec-Fetch-Dest header and get the
// XML. It lists the same weeks as the feed, rebuilt every hour.
export const revalidate = 3600;

const title = "Feed: one idea a week in your reader · Veda Verse";
const description = "Follow One idea a week in any feed reader: the feed's address to copy, and the weeks in it now.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  alternates: { types: { "application/rss+xml": FEED_PATH } },
};

export default function FeedPage() {
  const weeks = feedWeeks().map(weekItem);
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Feed</span>
        <h1><span>One idea a week,</span><span className="red">in your feed reader.</span></h1>
        <p className="lede">One idea a week is also a web feed (RSS). Add its address to a feed reader, such as Feedly, Inoreader or NetNewsWire, and each Monday&apos;s new pair arrives there by itself. No account or email address is needed.</p>
      </header>

      <section className="wrap tx-sec" aria-labelledby="fd-add-h">
        <h2 id="fd-add-h" className="h-xs">Add it to your reader</h2>
        <FeedAddress url={`${siteUrl()}${FEED_PATH}`} />
      </section>

      <section className="wrap tx-sec" aria-labelledby="fd-now-h">
        <h2 id="fd-now-h" className="h-xs">In the feed now</h2>
        <p className="ci-fine">Newest first. Each week links to the concept it comes from.</p>
        <ul className="wk-past">
          {weeks.map(w => <li key={w.week}><span className="tx-when">{weekDates(w.week).label}</span><Link href={w.href} prefetch={false}><b>{w.modern}</b>{w.classic ? ` ↔ ${w.classic}` : ""}</Link></li>)}
        </ul>
      </section>

      <section className="wrap tx-sec" aria-label="About this page">
        <p className="ci-fine">Rather have it by email? <Link className="link" href={WEEKLY_PATH} prefetch={false}>Sign up on One idea a week</Link>.</p>
        <p className="ci-fine">Opened in a browser, the feed&apos;s address leads to this page. Feed readers get the feed itself.</p>
      </section>
    </PageShell>
  );
}
