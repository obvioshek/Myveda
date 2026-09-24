// Plain, serialisable shapes that server pages hand to client components.
import type { Basis } from "@/lib/app/labels";
import type { PersonRef } from "@/components/app/bits";

export type { PersonRef };
export type TargetType = "note" | "article" | "question" | "answer" | "response";

export interface FeedEntry {
  key: string;
  type: "note" | "article" | "question";
  id: string;
  href: string;
  house: boolean;
  author: PersonRef | null;
  circle: { name: string; slug: string } | null;
  time: string;
  bases: Basis[];
  reason: string;
  title: string | null;
  body: string;
  thumb: string | null;
  asking: { answered: boolean } | null;
  checked: boolean;
  helpful: boolean;
  saved: boolean;
  followingAuthor: boolean;
  canFollow: boolean;
  mine: boolean;
}

export interface OpenQuestion { id: string; title: string; meta: string }

export interface ReplyItem {
  id: string;
  author: PersonRef;
  relation: string;
  basis: Basis;
  anchor: string | null;
  on: string | null;
  reason: string | null;
  body: string;
  mine: boolean;
}

export interface AnswerItem {
  id: string;
  author: PersonRef;
  credential: string | null;
  relation: string;
  basis: Basis;
  on: string | null;
  reason: string | null;
  body: string;
  accepted: boolean;
  helpful: boolean;
  mine: boolean;
  several: boolean;
  source: { url: string; type: string | null; locator: string | null } | null;
}

export interface NoteItem {
  id: string;
  author: PersonRef;
  basis: Basis;
  body: string;
  onId: string | null;
  onName: string | null;
  time: string;
  mine: boolean;
}

export interface RowItem {
  key: string;
  href: string;
  title: string;
  meta: string;
  bases: Basis[];
  accepted?: boolean;
}

export interface ComposeTopic { name: string }
export interface ComposeAudience { value: string; label: string }

export interface DraftInput {
  id?: string | null;
  text: string;
  intent: "asking" | "sharing" | null;
  basis: Basis | null;
  topic: string;
  audience: string;
  url: string;
  stype: string;
  loc: string;
  ai: boolean;
}
