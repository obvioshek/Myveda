import { siteUrl } from "@/lib/site";
import { WEEKLY_PATH, thisWeek, weekDates, weekItem } from "@/content/learn/weekly";

// "One idea a week" as a feed: the weeks so far, newest first. Rebuilt every
// hour, so a new week appears on Monday without a deploy.
export const revalidate = 3600;

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);
const cdata = (s: string) => `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;

export function GET() {
  const base = siteUrl();
  const now = thisWeek();
  const weeks = Array.from({ length: Math.min(now + 1, 30) }, (_, i) => now - i);
  const items = weeks.map(w => {
    const it = weekItem(w);
    const link = `${base}${it.href}`;
    return `<item>
<title>${esc(`${it.modern}${it.classic ? ` ↔ ${it.classic}` : ""}`)}</title>
<link>${esc(link)}</link>
<guid isPermaLink="false">veda-verse-weekly-${w}</guid>
<pubDate>${new Date(weekDates(w).from.getTime() - 5.5 * 3600_000).toUTCString()}</pubDate>
<description>${cdata(`<blockquote>${it.quote}</blockquote><p>${it.how}</p><p><b>What it adds.</b> ${esc(it.adds)}</p><p><b>Where they differ.</b> ${esc(it.differs)}</p><p><a href="${esc(link)}">Read the lesson: ${esc(it.concept)}, in ${esc(it.chapter)}</a></p>`)}</description>
</item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Veda Verse: one idea a week</title>
<link>${esc(`${base}${WEEKLY_PATH}`)}</link>
<atom:link href="${esc(`${base}/feed.xml`)}" rel="self" type="application/rss+xml"/>
<description>Each Monday, a management idea beside a passage from India's classical texts that met the same problem, with what it adds and where the two differ.</description>
<language>en-IN</language>
${items.join("\n")}
</channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
