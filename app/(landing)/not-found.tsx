import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import NotFoundBody from "@/components/landing/NotFoundBody";

export const metadata: Metadata = { title: "Page not found · Veda Verse", robots: { index: false } };

// A page in the learning site that doesn't exist (an unknown chapter or text).
export default function NotFound() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <NotFoundBody />
    </PageShell>
  );
}
