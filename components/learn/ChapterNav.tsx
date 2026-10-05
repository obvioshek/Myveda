import Link from "next/link";
import { GLOSSARY_PATH, LEARN_PATH, REVISION_PATH, UNITS, chapterPath, deva, unitById, type Chapter } from "@/content/learn";

function Sections({ c, hasTerms, showLens }: { c: Chapter; hasTerms: boolean; showLens: boolean }) {
  return (
    <ul className="rail-sub">
      <li><a href="#concepts">The concepts</a>
        <ul>
          {c.blocks.filter(b => b.title).map(b => <li key={b.id}><a href={`#${b.id}`}>{b.title}</a></li>)}
          {hasTerms && <li><a href="#terms">Terms from the glossary</a></li>}
        </ul>
      </li>
      {showLens && <li><a href="#lens">Ancient lens</a></li>}
    </ul>
  );
}

function Chapters({ current }: { current: Chapter }) {
  const unit = unitById(current.unit);
  if (!unit) return null;
  return (
    <>
      <div className="rail-group rail-ref">
        <Link href={GLOSSARY_PATH} prefetch={false}>Glossary, A to Z</Link>
        <Link href={REVISION_PATH} prefetch={false}>Revision sheets</Link>
      </div>
      {unit.groups.map(g => (
        <div key={g.key} className="rail-group">
          <span className="label">{UNITS.length > 1 ? `Unit ${unit.n} · ${g.label}` : g.label}</span>
          <ol>
            {unit.chapters.filter(c => c.group === g.key).map(c => (
              <li key={c.slug}>
                <Link href={chapterPath(c.slug)} prefetch={false} aria-current={c.slug === current.slug ? "page" : undefined}>
                  <span className="rail-n" lang="sa" aria-hidden="true">{deva(c.n)}</span><span>{c.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
      {UNITS.length > 1 && (
        <div className="rail-group">
          <span className="label">Other units</span>
          <ol>
            {UNITS.filter(u => u.id !== unit.id).map(u => <li key={u.id}><Link href={`${LEARN_PATH}#${u.id}`} prefetch={false}>Unit {u.n} · {u.short}</Link></li>)}
          </ol>
        </div>
      )}
    </>
  );
}

// On wide screens a sticky rail lists this chapter's sections and the unit's
// chapters; on narrow ones the same links sit in a fold-out above the text.
export default function ChapterNav({ chapter, hasTerms, showLens }: { chapter: Chapter; hasTerms: boolean; showLens: boolean }) {
  return (
    <>
      <details className="ch-jump">
        <summary>On this page and all chapters
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="rail-body">
          <span className="label red">On this page</span>
          <Sections c={chapter} hasTerms={hasTerms} showLens={showLens} />
          <Chapters current={chapter} />
        </div>
      </details>
      <aside className="ch-rail" aria-label="This chapter and all chapters">
        <span className="label red">On this page</span>
        <Sections c={chapter} hasTerms={hasTerms} showLens={showLens} />
        <Chapters current={chapter} />
      </aside>
    </>
  );
}
