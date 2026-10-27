import Link from "next/link";
import PageShell from "@/components/landing/PageShell";
import { CONTACT_EMAIL } from "@/content/landing";

export const metadata = {
  title: "Privacy notice · Veda Verse",
  description: "What Veda Verse keeps and why: your study progress stays on your device, emails are double opt-in, and reports go only to us. How to see or delete your data.",
  alternates: { canonical: "/privacy" },
};

// A plain notice for the early list and for members, written with India's
// Digital Personal Data Protection Act, 2023 in mind. Not legal advice; have
// it reviewed before a wide launch.
export default function PrivacyPage() {
  return (
    <PageShell>
      <h1>Privacy notice</h1>
      <p>Last updated 26 October 2026. This explains what Veda Verse collects, why, and what you can ask us to do with it.</p>

      <h2>Reading the site</h2>
      <ul>
        <li><b>No sign-in is needed</b> to read the home page, the chapters, the glossary and the revision sheets, or to practise.</li>
        <li><b>On your device only:</b> the concept you opened last (for “Continue”), which concepts you have marked done, the check questions you got wrong and when each is next due for review, and anything you type in the “Reflect &amp; discuss” boxes are kept in your browser’s local storage. They are never sent to us, and clearing your browser’s site data removes them. To use them on another device, <Link className="link" href="/learn/transfer" prefetch={false}>make a transfer code</Link>: it carries them as text you copy yourself, and a transfer link keeps the code after “#”, a part of the address browsers don’t send to any server.</li>
        <li><b>Reading offline:</b> pages you open, and every chapter if you press “Save all chapters”, are kept in your browser’s cache so they open without a connection. This happens on your device only, and clearing your browser’s site data removes them.</li>
        <li>We don’t use advertising or tracking cookies.</li>
      </ul>

      <h2>The early list</h2>
      <ul>
        <li><b>What we collect:</b> the email address you enter.</li>
        <li><b>Why:</b> to confirm it’s yours, and to send one email when your invitation is ready. Nothing else, no newsletter and no tracking pixels.</li>
        <li><b>How long:</b> until you remove it, or until you join as a member. If you never confirm it, it’s deleted after 30 days.</li>
      </ul>

      <h2>One idea a week, by email</h2>
      <ul>
        <li><b>What we collect:</b> the email address you enter, and which week&apos;s email it last received.</li>
        <li><b>Why:</b> to send one email each Monday with that week&apos;s idea and passage. It starts only after you confirm from your inbox.</li>
        <li><b>How long:</b> until you stop it, with the link in every email. If you never confirm, the address is deleted after 30 days.</li>
      </ul>

      <h2>Reporting a problem</h2>
      <ul>
        <li><b>What is sent:</b> what you write, the page it&apos;s about, and an email address only if you choose to give one for a reply.</li>
        <li><b>Where it goes:</b> by email to {CONTACT_EMAIL}, and nowhere else. The site doesn&apos;t store reports. Your network address is held briefly in memory to limit how many reports can be sent at once, and is never saved.</li>
      </ul>

      <h2>Members</h2>
      <ul>
        <li><b>What we collect:</b> your email address, which is how you sign in; the name, handle and profile details you choose to add; and what you post, save and follow.</li>
        <li><b>Why:</b> to run the service you signed up for: showing your posts to the people you choose, and delivering notifications at the times you set.</li>
        <li><b>What we don’t collect:</b> phone numbers, birth dates, contacts or location history. We don’t sell data or show ads.</li>
      </ul>

      <h2>Where it’s kept</h2>
      <p>Data is stored with Supabase in its Mumbai region, and the site is served by Vercel. Sign-in, early-list and weekly emails, and problem reports, are sent through our email provider. None of them may use your data for their own purposes.</p>

      <h2>Your rights</h2>
      <p>You can ask to see the personal data we hold about you, correct it, or have it deleted, and you can withdraw consent at any time. Write to <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We reply within 30 days. Every early-list and weekly email also includes a link to remove your address straight away.</p>

      <h2>Grievances</h2>
      <p>For any complaint about how your data is handled, contact <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you aren’t satisfied with our answer, you can complain to the Data Protection Board of India.</p>
    </PageShell>
  );
}
