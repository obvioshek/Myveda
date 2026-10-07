import Link from "next/link";
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

// Every chapter, for the header. "panel" is the wide-screen menu (it brings its
// own "Chapters" control, a link on narrow screens); "list" sits inside the phone
// menu, a unit at a time.
export default function ChaptersMenu({ variant, href = LEARN_PATH }: { variant: "panel" | "list"; href?: string }) {
  if (variant === "panel") return <ChapterPanel units={MENU} href={href} more={MORE} />;
  return (
    <div className="cm-list">
      {MENU.map(u => (
        <details key={u.id} className="cm-unit">
          <summary>Unit {u.n} · {u.short}</summary>
          {u.groups.map(g => (
            <div key={g.key} className="cm-col">
              <span className="label red">{g.label}</span>
              <ol>
                {u.chapters.filter(c => c.group === g.key).map(c => (
                  <li key={c.slug}><Link href={c.href} prefetch={false}><span className="cm-n">{c.n}</span><span>{c.title}</span></Link></li>
                ))}
              </ol>
            </div>
          ))}
        </details>
      ))}
      <div className="cm-col cm-more">{MORE.map(m => <Link key={m.href} href={m.href} prefetch={false}>{m.label}</Link>)}</div>
    </div>
  );
}
