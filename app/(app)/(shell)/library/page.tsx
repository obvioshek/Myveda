import LibraryView from "@/components/app/LibraryView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadLibrary } from "@/lib/app/library";

export const metadata = { title: "Library" };
import { one, pick, type Param } from "@/lib/app/params";

const TABS = { collections: "Collections", drafts: "Drafts", history: "History" } as const;

export default async function LibraryPage({ searchParams }: { searchParams: Promise<{ tab?: Param }> }) {
  const me = await requireMember();
  const { tab } = await searchParams;
  const lib = await loadLibrary(await viewerContext(me));
  const t = pick(TABS, one(tab)) ?? "Saved";
  return <LibraryView lib={lib} tab={t} />;
}
