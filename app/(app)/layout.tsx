import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { preload } from "react-dom";
import "./product.css";
import { siteUrl } from "@/lib/site";
import { TEXT_SIZE_SCRIPT } from "@/components/learn/TextSize";
import { THEME_SCRIPT } from "@/components/learn/Theme";
import NavProgress from "@/components/landing/NavProgress";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: "Veda Verse", template: "%s · Veda Verse" },
  description: "Questions, lived experience and documented knowledge, each labelled for what it rests on. No public counts, and a daily Edition that ends.",
  icons: {
    // The mark, a red square, as on the learning pages.
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23EC3013'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#F3F2F2",
};

// The community shares the learning pages' look (product.css) and the reader's
// text size and theme, which are kept on the device and applied before paint.
export default function ProductRootLayout({ children }: { children: React.ReactNode }) {
  preload("/fonts/archivo-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <Script id="vv-text-size" strategy="beforeInteractive">{TEXT_SIZE_SCRIPT}</Script>
        <Script id="vv-theme" strategy="beforeInteractive">{THEME_SCRIPT}</Script>
        <NavProgress />
        {children}
      </body>
    </html>
  );
}
