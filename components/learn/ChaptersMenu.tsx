import { GLOSSARY_PATH, LEARN_PATH, REVISION_PATH, UNITS, chapterPath, conceptIds } from "@/content/learn";
import ChapterPanel, { type MenuUnit } from "./ChapterPanel";

const MORE = [
  { href: LEARN_PATH, label: "All chapters" },
  { href: GLOSSARY_PATH, label: "Glossary, A to Z" },
  { href: REVISION_PATH, label: "Revision sheets" },
];

// Only what the menu shows: short titles, groups and the concept ids that
// progress is counted from. Links don't prefetch, so a closed menu downloads
// nothing.
const MENU: MenuUnit[] = UNITS.map(u => ({
  id: u.id, n: u.n, short: u.short,
  groups: u.groups.map(g => ({ key: g.key, label: g.label })),
  chapters: u.chapters.map(c => ({ slug: c.slug, href: chapterPath(c.slug), n: c.n, title: c.short ?? c.title, group: c.group, ids: conceptIds(c) })),
}));

// Every chapter, for the header: the wide-screen menu, which brings its own
// "Chapters" control (a link to the chapter index on narrow screens).
export default function ChaptersMenu({ href = LEARN_PATH }: { href?: string }) {
  return <ChapterPanel units={MENU} href={href} more={MORE} />;
}
