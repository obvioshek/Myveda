import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// The landing page is public. The product sits behind sign-in, so crawlers
// would only ever reach the sign-in redirect there.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/auth/", "/early-list", "/welcome", "/home", "/read/", "/note/", "/q/", "/c", "/u/",
        "/discover", "/t/", "/library", "/inbox",
      ],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
