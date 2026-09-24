import type { Metadata, Viewport } from "next";
import "./product.css";

export const metadata: Metadata = {
  title: { default: "Veda Verse", template: "%s · Veda Verse" },
  description: "Questions, lived experience and documented knowledge, each labelled for what it rests on. No public counts, and a daily Edition that ends.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='12' fill='%23A04F1C'/%3E%3Cpath d='M6.4 11.9C6.4 17.3 17.6 17.3 17.6 11.9' fill='none' stroke='%23F5EAD8' stroke-width='2.2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='7.6' r='2.2' fill='%23F5EAD8'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EAD8" },
    { media: "(prefers-color-scheme: dark)", color: "#1B1714" },
  ],
};

export default function ProductRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
