import Link from "next/link";
import { CHAPTERS, GLOSSARY_PATH, GROUPS, chapterPath, deva } from "@/content/learn";

// The thirteen chapters by name, for the header. As a panel it drops down when
// the pointer rests on "Chapters" (or focus reaches it); as a list it sits
// inside the phone menu.
export default function ChaptersMenu({ variant }: { variant: "panel" | "list" }) {
  const groups = GROUPS.map(g => (
    <div key={g.key} className="cm-col">
      <span className="label red">{g.label}</span>
      <ol>
        {CHAPTERS.filter(c => c.group === g.key).map(c => (
          <li key={c.slug}>
            <Link href={chapterPath(c.slug)}><span className="cm-n" lang="sa" aria-hidden="true">{deva(c.n)}</span><span>{c.title}</span></Link>
          </li>
        ))}
      </ol>
    </div>
  ));

  if (variant === "list") {
    return (
      <div className="cm-list">
        {groups}
        <div className="cm-col cm-more">
          <Link href="/learn">All chapters</Link>
          <Link href={GLOSSARY_PATH}>Glossary, A to Z</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="menu-panel">
      <div className="wrap cm-in">
        {groups}
        <div className="cm-col cm-more">
          <span className="label red">Reference</span>
          <Link href="/learn">All chapters</Link>
          <Link href={GLOSSARY_PATH}>Glossary, A to Z</Link>
        </div>
      </div>
    </div>
  );
}
