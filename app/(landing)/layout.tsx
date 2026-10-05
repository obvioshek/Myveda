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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23EC3013'/%3E%3C/svg%3E",
  },
};

// Archivo and Tiro Devanagari Sanskrit are served from /fonts (see landing.css).
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
