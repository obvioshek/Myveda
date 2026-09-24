import Link from "next/link";
import { LABELS, type Basis } from "@/lib/app/labels";

// Small presentational pieces shared by every screen.

export interface PersonRef { id: string; name: string; initials: string; hue: number; handle: string | null }

export function Chip({ basis }: { basis: Basis }) {
  const l = LABELS[basis];
  return <span className={`chip lb-${basis}`}>{l.glyph} {l.name}</span>;
}

export function Chips({ bases }: { bases: Basis[] }) {
  return <>{bases.map(b => <Chip key={b} basis={b} />)}</>;
}

export function RelChip({ name }: { name: string }) {
  return <span className="chip rel">{name}</span>;
}

export function profileHref(p: { id: string; handle: string | null }) {
  return `/u/${encodeURIComponent(p.handle ?? p.id)}`;
}

export function Avatar({ person, size = 36, link = true }: { person: PersonRef; size?: number; link?: boolean }) {
  const style = { "--h": person.hue, "--s": `${size}px` } as React.CSSProperties;
  if (!link) return <span className="av" style={style} aria-hidden="true">{person.initials}</span>;
  return (
    <Link className="av" style={style} href={profileHref(person)} aria-label={person.name}>
      {person.initials}
    </Link>
  );
}
