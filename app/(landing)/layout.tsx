import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "../styles/mvv.css";        // FROZEN — never edit
import "../styles/app-additions.css"; // new rules only, tokens only

export const viewport: Viewport = {
  themeColor: "#161022",
};

export const metadata: Metadata = {
  title: "My Veda Verse — a social platform built for better conversations",
  description: "Share everyday moments, ask questions, and follow the people, topics, and communities you care about — with context on replies, no public like counts, and a feed that ends. Express thoughtfully. Engage meaningfully. Share responsibly.",
  alternates: {
    canonical: "https://myvedaverse.in",
  },
  openGraph: {
    title: "My Veda Verse",
    description: "A social platform built for better conversations. Express thoughtfully. Engage meaningfully. Share responsibly.",
    url: "https://myvedaverse.in",
    siteName: "My Veda Verse",
    images: [
      {
        url: "https://myvedaverse.in/og.png",
        width: 1200,
        height: 630,
        alt: "My Veda Verse — a calm social space for ideas, experiences, questions, and conversations.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Veda Verse",
    description: "A social platform built for better conversations. Express thoughtfully. Engage meaningfully. Share responsibly.",
    images: ["https://myvedaverse.in/og.png"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%23161022'/%3E%3Cpath d='M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9' fill='none' stroke='%23F8C94F' stroke-width='2.1' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='6.3' r='2.5' fill='%23F8C94F'/%3E%3C/svg%3E",
  }
};

import SpriteSheet from "@/components/SpriteSheet";
import CosmosCanvas from "@/components/CosmosCanvas";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Karla:wght@400;500;600;700&family=Anek+Latin:wght@500;600;700&display=swap" rel="stylesheet" />
        <script
          id="mvv-watchdog"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("has-js");setTimeout(function(){if(!window.__mvvOK)document.documentElement.classList.remove("has-js")},3500)`
          }}
        />
      </head>
      <body>
        <SpriteSheet />
        <a className="skip" href="#main">Skip to the content</a>
        <CosmosCanvas />
        {children}
        <Script src="/engine.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
