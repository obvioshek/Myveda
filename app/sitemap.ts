import type { MetadataRoute } from "next";
import { CHAPTERS, CONTENT_UPDATED, FORMULAS_PATH, START_WALK_PATH, GLOSSARY_PATH, PLAN_PATH, PRACTICE_PATH, REVISION_PATH, chapterPath } from "@/content/learn";
import { TEXTS, TEXTS_PATH, TEXTS_UPDATED, textPath } from "@/content/learn/texts";
import { READING_GUIDE_PATH } from "@/content/learn/reading-guide";
import { CORRECTIONS_PATH } from "@/content/learn/corrections";
import { siteUrl } from "@/lib/site";

// Only pages worth showing in search results. The sign-in page and the product
// behind it are left out on purpose (robots.txt keeps crawlers away as well).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  const updated = new Date(CONTENT_UPDATED);
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/learn`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    ...CHAPTERS.map(c => ({ url: `${base}${chapterPath(c.slug)}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${base}${GLOSSARY_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}${REVISION_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}${START_WALK_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}${TEXTS_PATH}`, lastModified: new Date(TEXTS_UPDATED), changeFrequency: "monthly", priority: 0.8 },
    ...TEXTS.map(t => ({ url: `${base}${textPath(t.id)}`, lastModified: new Date(TEXTS_UPDATED), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${base}${READING_GUIDE_PATH}`, lastModified: new Date(TEXTS_UPDATED), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}${CORRECTIONS_PATH}`, lastModified: now, changeFrequency: "weekly", priority: 0.3 },
    { url: `${base}${PLAN_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}${FORMULAS_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}${PRACTICE_PATH}`, lastModified: updated, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
