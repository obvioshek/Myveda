import PageShell from "@/components/landing/PageShell";
import { CONTACT_EMAIL } from "@/content/landing";

export const metadata = { title: "Privacy notice · My Veda Verse", alternates: { canonical: "/privacy" } };

// A plain notice for the early list and for members, written with India's
// Digital Personal Data Protection Act, 2023 in mind. Not legal advice; have
// it reviewed before a wide launch.
export default function PrivacyPage() {
  return (
    <PageShell>
      <h1>Privacy notice</h1>
      <p>Last updated 24 September 2026. This explains what My Veda Verse collects, why, and what you can ask us to do with it.</p>

      <h2>The early list</h2>
      <ul>
        <li><b>What we collect:</b> the email address you enter.</li>
        <li><b>Why:</b> to confirm it’s yours, and to send one email when your invitation is ready. Nothing else, no newsletter and no tracking pixels.</li>
        <li><b>How long:</b> until you remove it, or until you join as a member. If you never confirm it, it’s deleted after 30 days.</li>
      </ul>

      <h2>Members</h2>
      <ul>
        <li><b>What we collect:</b> your email address, which is how you sign in; the name, handle and profile details you choose to add; and what you post, save and follow.</li>
        <li><b>Why:</b> to run the service you signed up for: showing your posts to the people you choose, and delivering notifications at the times you set.</li>
        <li><b>What we don’t collect:</b> phone numbers, birth dates, contacts or location history. We don’t sell data or show ads.</li>
      </ul>

      <h2>Where it’s kept</h2>
      <p>Data is stored with Supabase in its Mumbai region, and the site is served by Vercel. Sign-in and early-list emails are sent through our email provider. None of them may use your data for their own purposes.</p>

      <h2>Your rights</h2>
      <p>You can ask to see the personal data we hold about you, correct it, or have it deleted, and you can withdraw consent at any time. Write to <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We reply within 30 days. Every early-list email also includes a link to remove your address straight away.</p>

      <h2>Grievances</h2>
      <p>For any complaint about how your data is handled, contact <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you aren’t satisfied with our answer, you can complain to the Data Protection Board of India.</p>
    </PageShell>
  );
}
