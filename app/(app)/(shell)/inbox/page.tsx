import InboxView from "@/components/app/InboxView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { INBOX_FILTERS, loadInbox } from "@/lib/app/inbox";

export const metadata = { title: "Inbox" };

export default async function InboxPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const me = await requireMember();
  const { type } = await searchParams;
  // filters travel as slugs (?type=builds-on)
  const filter = INBOX_FILTERS.find(f => f.toLowerCase().replace(/ /g, "-") === (type ?? "").toLowerCase()) ?? "All";
  const inbox = await loadInbox(await viewerContext(me), filter);
  return <InboxView inbox={inbox} filter={filter} filters={INBOX_FILTERS} />;
}
