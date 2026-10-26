import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Toast from "@/components/landing/Toast";
import Transfer from "@/components/learn/Transfer";
import { TRANSFER_PATH } from "@/content/learn";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "Move your progress to another device · Veda Verse";
const description = "Your progress, review list, study plan and notes stay in your browser. Carry them to another device with a code, a link or a file, without an account and without sending them to us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: TRANSFER_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: TRANSFER_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  // The page is a tool, and a link to it may carry someone's code.
  robots: { index: false, follow: true },
};

export default function TransferPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero pr-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Your progress</span>
        <h1><span>Your progress lives here.</span><span className="red">Take it with you.</span></h1>
        <p className="lede">What you finish, the questions waiting for review, your study plan and your notes are kept in this browser, not on our servers. To carry them to your phone or another computer, make a code here and add it there.</p>
      </header>
      <Transfer />
      <Toast />
    </PageShell>
  );
}
