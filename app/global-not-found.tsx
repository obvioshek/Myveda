import type { Metadata } from "next";
import Script from "next/script";
import "./(landing)/landing.css";
import "./(landing)/learn/learn.css";
import PageShell from "@/components/landing/PageShell";
import NotFoundBody from "@/components/landing/NotFoundBody";
import { siteUrl } from "@/lib/site";
import { TEXT_SIZE_SCRIPT } from "@/components/learn/TextSize";
import { THEME_SCRIPT } from "@/components/learn/Theme";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "Page not found · Veda Verse",
  description: "This address has no page on Veda Verse. Search for a concept, or start from the chapters.",
};

// Any address that matches no page. The site has two root layouts (the
// learning site and the community), so this one stands on its own: it brings
// the learning site's styles, the reader's theme and text size, and its frame.
export default function GlobalNotFound() {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <Script id="vv-text-size" strategy="beforeInteractive">{TEXT_SIZE_SCRIPT}</Script>
        <Script id="vv-theme" strategy="beforeInteractive">{THEME_SCRIPT}</Script>
        <PageShell wide note="Spotted a mistake?">
          <NotFoundBody />
        </PageShell>
      </body>
    </html>
  );
}
