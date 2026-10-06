import Link from "next/link";
import type { CSSProperties } from "react";
import { GLOSSARY_PATH, LEARN_PATH, REVISION_PATH, UNITS, chapterPath, deva, type Unit } from "@/content/learn";

function Chapters({ unit, grouped }: { unit: Unit; grouped: boolean }) {
  const list = (chapters: Unit["chapters"]) => (
    <ol>
      {chapters.map(c => (
        <li key={c.slug}>
          <Link href={chapterPath(c.slug)} prefetch={false}><span className="cm-n" lang="sa" aria-hidden="true">{deva(c.n)}</span><span>{c.title}</span></Link>
        </li>
      ))}
    </ol>
  );
  if (!grouped) {
    return <div className="cm-col"><span className="label red">Unit {unit.n} · {unit.short}</span>{list(unit.chapters)}</div>;
  }
  return (
    <>
      {unit.groups.map(g => (
        <div key={g.key} className="cm-col">
          <span className="label red">{g.label}</span>
          {list(unit.chapters.filter(c => c.group === g.key))}
        </div>
      ))}
    </>
  );
}

function More() {
  return (
    <>
      <Link href={LEARN_PATH} prefetch={false}>All chapters</Link>
      <Link href={GLOSSARY_PATH} prefetch={false}>Glossary, A to Z</Link>
      <Link href={REVISION_PATH} prefetch={false}>Revision sheets</Link>
    </>
  );
}

// Every chapter by name, for the header. As a panel it drops down when the
// pointer rests on "Chapters" (or focus reaches it); as a list it sits inside the
// phone menu. One unit is shown by its groups; several units get a column each
// (two inner columns of chapters when there are two units, one when there are more).
// Links here don't prefetch, so a hidden menu doesn't download every chapter.
export default function ChaptersMenu({ variant }: { variant: "panel" | "list" }) {
  const grouped = UNITS.length === 1;
  const units = UNITS.map(u => <Chapters key={u.id} unit={u} grouped={grouped} />);
  if (variant === "list") {
    return <div className="cm-list">{units}<div className="cm-col cm-more"><More /></div></div>;
  }
  return (
    <div className="menu-panel">
      <div className={grouped ? "wrap cm-in" : UNITS.length > 2 ? "wrap cm-in cm-units cm-many" : "wrap cm-in cm-units"} style={grouped ? undefined : ({ "--units": UNITS.length } as CSSProperties)}>
        {units}
        <div className="cm-col cm-more"><span className="label red">Reference</span><More /></div>
      </div>
    </div>
  );
}
