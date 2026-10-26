import { homeCard } from "@/lib/og-home";

// The site's share card at a fixed address, for pages without their own
// (lib/meta.ts). Drawn when the site is built.
export const dynamic = "force-static";

export async function GET() {
  const res = await homeCard();
  res.headers.set("Cache-Control", "public, max-age=86400");
  return res;
}
