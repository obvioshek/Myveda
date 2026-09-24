import LibraryView from "@/components/app/LibraryView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadLibrary } from "@/lib/app/library";

export const metadata = { title: "Library" };
const TABS = { collections: "Collections", drafts: "Drafts", history: "History" } as const;

export default async function LibraryPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const me = await requireMember();
  const { tab } = await searchParams;
  const lib = await loadLibrary(await viewerContext(me));
  const t = (tab && tab in TABS ? TABS[tab as keyof typeof TABS] : "Saved") as "Saved" | "Collections" | "Drafts" | "History";
  return <LibraryView lib={lib} tab={t} />;
}
