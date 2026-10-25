import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { preload } from "react-dom";
import { siteUrl } from "@/lib/site";
import "./landing.css";
import { OfflineSupport } from "@/components/learn/Offline";
import { TEXT_SIZE_SCRIPT } from "@/components/learn/TextSize";

// Titles stay under about 60 characters and the description under about 160,
// which is what search results show before cutting them off.
const title = "Veda Verse: Learn Management with India's Classical Thought";
const description = "Management concepts explained one idea at a time, each read alongside India's classical texts and thinkers, in their own languages. Open to everyone, no sign-in.";

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
        {/* The reader's text size, applied before the page paints. Next.js puts
            this in <head> itself; a hand-written <head> script there made
            hydration fail on many page loads. */}
        <Script id="vv-text-size" strategy="beforeInteractive">{TEXT_SIZE_SCRIPT}</Script>
        {children}
        <OfflineSupport />
      </body>
    </html>
  );
}
