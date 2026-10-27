import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { preload } from "react-dom";
import { siteUrl } from "@/lib/site";
import "./landing.css";
import { OfflineSupport } from "@/components/learn/Offline";
import { TEXT_SIZE_SCRIPT } from "@/components/learn/TextSize";
import { THEME_SCRIPT } from "@/components/learn/Theme";
import NavProgress from "@/components/landing/NavProgress";

// Titles stay under about 60 characters and the description under about 160,
// which is what search results show before cutting them off.
const title = "Veda Verse: learn management beside India's classical texts";
const description = "Management concepts in plain words, one idea at a time, each read beside a cited passage from India's classical texts. Free to read, with no account.";

export const viewport: Viewport = {
  themeColor: "#F3F2F2",
};

// Search Console and Bing Webmaster Tools can verify the site with a tag instead
// of a DNS record: set these in the host's environment (see DEPLOY.md).
const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  applicationName: "Veda Verse",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(google || bing ? { verification: { ...(google ? { google } : {}), ...(bing ? { other: { "msvalidate.01": bing } } : {}) } } : {}),
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Veda Verse",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Archivo and Tiro Devanagari Sanskrit are served from /fonts (see landing.css).
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  // Every page sets its text in Archivo, so fetch it alongside the page.
  preload("/fonts/archivo-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        {/* The reader's text size and theme, applied before the page paints. Next.js puts
            this in <head> itself; a hand-written <head> script there made
            hydration fail on many page loads. */}
        <Script id="vv-text-size" strategy="beforeInteractive">{TEXT_SIZE_SCRIPT}</Script>
        <Script id="vv-theme" strategy="beforeInteractive">{THEME_SCRIPT}</Script>
        {/* Opened at a #part: long pages draw every section, so the jump is exact (learn.css). */}
        <Script id="vv-landing" strategy="beforeInteractive">{"if(location.hash.length>1)document.documentElement.dataset.landing='1'"}</Script>
        {/* Feed readers and browsers find the weekly feed from any page. */}
        <link rel="alternate" type="application/rss+xml" title="Veda Verse: one idea a week" href="/feed.xml" />
        <NavProgress />
        {children}
        <OfflineSupport />
      </body>
    </html>
  );
}
