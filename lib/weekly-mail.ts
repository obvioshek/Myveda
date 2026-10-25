import { siteUrl } from "@/lib/site";
import { WEEKLY_PATH, weekDates, weekItem } from "@/content/learn/weekly";

// The weekly email: this week's pair, the passage's translation and
// reference, the chapter's paragraph on how they meet, what the passage adds
// and where the two differ, and a link to the lesson. Every email carries its
// own unsubscribe link.

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const plain = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();

export function unsubscribeUrl(token: string) {
  return `${siteUrl()}/weekly-email?do=unsubscribe&token=${token}`;
}

export function weeklyEmail(week: number, token: string) {
  const it = weekItem(week);
  const base = siteUrl();
  const lesson = `${base}${it.href}`;
  const page = `${base}${WEEKLY_PATH}`;
  const off = unsubscribeUrl(token);
  const quote = plain(it.quote);
  const subject = `This week: ${it.modern}${it.classic ? ` and ${it.classic}` : ""}`;
  const text = [
    `One idea a week, ${weekDates(week).label}`,
    "",
    `${it.modern}${it.classic ? ` ↔ ${it.classic}` : ""}`,
    "",
    quote,
    "",
    plain(it.how),
    "",
    `What it adds: ${it.adds}`,
    `Where they differ: ${it.differs}`,
    "",
    `Read the lesson (${it.concept}, in ${it.chapter}): ${lesson}`,
    "",
    `This week on the site: ${page}`,
    `Stop these emails: ${off}`,
  ].join("\n");
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px;color:#201e1d;line-height:1.55">
<p style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#ae1800;font-weight:700">One idea a week · ${esc(weekDates(week).label)}</p>
<h1 style="font-size:24px;line-height:1.2;margin:0 0 16px">${esc(it.modern)}${it.classic ? ` <span style="color:#ec3013">↔</span> <span style="color:#ae1800">${esc(it.classic)}</span>` : ""}</h1>
<blockquote style="margin:0 0 16px;padding:12px 16px;border-left:6px solid #ec3013;background:#fff2ef">${it.quote}</blockquote>
<p>${it.how}</p>
<p><b>What it adds.</b> ${esc(it.adds)}</p>
<p><b>Where they differ.</b> ${esc(it.differs)}</p>
<p><a href="${esc(lesson)}" style="color:#ae1800;font-weight:700">Read the lesson: ${esc(it.concept)}, in ${esc(it.chapter)}</a></p>
<hr style="border:0;border-top:2px solid #ccc;margin:24px 0">
<p style="font-size:13px;color:#5b5857">You asked for one idea a week from Veda Verse. <a href="${esc(page)}" style="color:#5b5857">See it on the site</a> · <a href="${esc(off)}" style="color:#5b5857">Stop these emails</a></p>
</div>`;
  return { subject, text, html, headers: { "List-Unsubscribe": `<${off}>` } };
}
