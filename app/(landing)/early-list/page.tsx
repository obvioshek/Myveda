import Link from "next/link";
import PageShell from "@/components/landing/PageShell";
import { confirmEarlyList, removeEarlyList } from "@/actions/earlyList";

export const metadata = { title: "Early list · My Veda Verse", robots: { index: false } };

const DONE: Record<string, { title: string; body: string }> = {
  confirmed: { title: "You're on the early list.", body: "Thanks for confirming. You'll get one email when your invitation is ready, and nothing before then." },
  removed: { title: "Your address is removed.", body: "It's deleted from the early list. If you change your mind, you can join again from the home page." },
  invalid: { title: "That link has expired.", body: "It may have been used already, or the address was removed after 30 days unconfirmed. You can join again from the home page." },
};

// The links in the confirmation email land here. Confirming or removing takes
// a button press, so a mail scanner that opens the link can't do either.
export default async function EarlyListPage({ searchParams }: { searchParams: Promise<{ do?: string; token?: string; done?: string }> }) {
  const { do: act, token, done } = await searchParams;
  const result = done ? DONE[done] : undefined;

  if (result || !token || (act !== "confirm" && act !== "remove")) {
    const r = result ?? DONE.invalid;
    return (
      <PageShell>
        <h1>{r.title}</h1>
        <p>{r.body}</p>
        <div className="row"><Link className="btn btn-quiet" href="/">Back to My Veda Verse</Link></div>
      </PageShell>
    );
  }

  const confirm = act === "confirm";
  return (
    <PageShell>
      <h1>{confirm ? "Confirm your place on the early list." : "Remove your address?"}</h1>
      <p>{confirm
        ? "One press and you're on the list. We'll send one email when your invitation is ready."
        : "This deletes your email address from the early list. Nothing else is kept."}</p>
      <form action={confirm ? confirmEarlyList : removeEarlyList} className="row">
        <input type="hidden" name="token" value={token} />
        <button className={confirm ? "btn btn-primary" : "btn btn-quiet"} type="submit">{confirm ? "Confirm my place" : "Remove my address"}</button>
      </form>
    </PageShell>
  );
}
