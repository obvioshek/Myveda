import Link from "next/link";
import PageShell from "@/components/landing/PageShell";
import { confirmWeekly, unsubscribeWeekly } from "@/actions/weekly";
import { WEEKLY_PATH } from "@/content/learn/weekly";

export const metadata = { title: "Weekly email · Veda Verse", robots: { index: false } };

const DONE: Record<string, { title: string; body: string }> = {
  confirmed: { title: "You're signed up.", body: "One idea a week arrives each Monday morning. Every email has a link to stop them." },
  removed: { title: "No more weekly emails.", body: "Your address is deleted from the list. You can still read each week's idea on the site, or follow the feed." },
  invalid: { title: "That link has expired.", body: "It may have been used already, or the address was removed after 30 days unconfirmed. You can sign up again under this week's idea." },
};

// The links in the weekly emails land here. Confirming or stopping takes a
// button press, so a mail scanner that opens the link can't do either.
export default async function WeeklyEmailPage({ searchParams }: { searchParams: Promise<{ do?: string; token?: string; done?: string }> }) {
  const { do: act, token, done } = await searchParams;
  const result = done ? DONE[done] : undefined;

  if (result || !token || (act !== "confirm" && act !== "unsubscribe")) {
    const r = result ?? DONE.invalid;
    return (
      <PageShell>
        <h1>{r.title}</h1>
        <p>{r.body}</p>
        <div className="row"><Link className="btn btn-secondary btn-lg" href={WEEKLY_PATH}>This week&apos;s idea</Link></div>
      </PageShell>
    );
  }

  const confirm = act === "confirm";
  return (
    <PageShell>
      <h1>{confirm ? "Confirm the weekly email." : "Stop the weekly emails?"}</h1>
      <p>{confirm ? "One press and you're signed up: one idea and one passage, each Monday." : "This deletes your address from the list. Nothing else is kept."}</p>
      <form action={confirm ? confirmWeekly : unsubscribeWeekly} className="row">
        <input type="hidden" name="token" value={token} />
        <button className={confirm ? "btn btn-primary btn-lg" : "btn btn-secondary btn-lg"} type="submit">{confirm ? "Confirm" : "Stop the emails"}</button>
      </form>
    </PageShell>
  );
}
