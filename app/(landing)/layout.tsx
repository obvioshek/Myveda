import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./landing.css";

const title = "My Veda Verse — social media without the scoreboard";
const description = "A social platform opening in stages. Share moments, ask real questions and talk them through. Posts say what they rest on, reactions stay private, and your feed ends when you're caught up.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEEFEA" },
    { media: "(prefers-color-scheme: dark)", color: "#17161A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: "Share moments, ask real questions and talk them through. Posts say what they rest on, reactions stay private, and the feed ends.",
    url: "/",
    siteName: "My Veda Verse",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Posts say what they rest on, reactions stay private, and the feed ends when you're caught up.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%234A2548'/%3E%3Cpath d='M7.9 16c0 9.9 16.2 9.9 16.2 0' stroke='white' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='9.3' r='3' fill='white'/%3E%3C/svg%3E",
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this layout is the landing page's root */}
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&family=Tiro+Devanagari+Sanskrit&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
