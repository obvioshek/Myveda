// The site's public address. Everything that needs an absolute URL — the
// sign-in email link, canonical and share tags, robots.txt and the sitemap —
// reads it from here, so moving hosts only means changing NEXT_PUBLIC_SITE_URL.

export const PRIMARY_DOMAIN = "myvedaverse.in";

export function siteUrl(): string {
  const set = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (set) return set;
  return process.env.NODE_ENV === "production" ? `https://${PRIMARY_DOMAIN}` : "http://localhost:3000";
}
