import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./landing.css";

const title = "Veda Verse — learn the idea, then see how the classics saw it";
const description = "Management explained one clear idea at a time, each read alongside the Arthashastra, the Gita or the Thirukkural, with every verse checked against its source. Open to everyone, no sign-in needed.";

export const viewport: Viewport = {
  themeColor: "#F5EAD8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: "Clear explanations of motivation, leadership, strategy, finance and more, each read alongside India's classical texts, with every verse checked against its source.",
    url: "/",
    siteName: "Veda Verse",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Learn the idea. Then see how the classics saw it. Open to everyone, no sign-in needed.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='16' fill='%23F5EAD8'/%3E%3Ccircle cx='12.5' cy='16' r='7.5' fill='%23C67139'/%3E%3Ccircle cx='19.5' cy='16' r='7.5' fill='%237A8A5E' fill-opacity='.85'/%3E%3C/svg%3E",
  },
};

// Caprasimo and Figtree are served from /fonts (see landing.css). Tiro
// Devanagari Sanskrit carries the Sanskrit and transliteration; Noto Sans Tamil
// covers the one Tamil title, since Tiro has no Tamil letters.
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this layout is the landing page's root */}
        <link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit:ital@0;1&family=Noto+Sans+Tamil:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
