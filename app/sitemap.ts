import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Only pages worth showing in search results. The sign-in page and the product
// behind it are left out on purpose (robots.txt keeps crawlers away as well).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
