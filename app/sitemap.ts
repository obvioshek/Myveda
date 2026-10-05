import type { MetadataRoute } from "next";
import { CHAPTERS, CONTENT_UPDATED, GLOSSARY_PATH, chapterPath } from "@/content/learn";
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
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
