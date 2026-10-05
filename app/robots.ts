import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// The landing page is public. The product sits behind sign-in, so crawlers
// would only ever reach the sign-in redirect there. Paths are matched as
// prefixes, so "/c" would also block any page whose address starts with /c;
// the circles list is blocked as "/c$" and its pages as "/c/".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", "/auth/", "/search-index.json", "/early-list", "/welcome", "/home", "/read/", "/note/", "/q/", "/c$", "/c/", "/u/",
        "/discover", "/t/", "/library", "/inbox", "/signin",
      ],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
    host: siteUrl(),
  };
}
