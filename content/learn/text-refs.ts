// Which classical texts a passage cites, read from its reference line (the
// <span class="ref"> at the end of a quote). Kept small and free of the texts'
// descriptions, so chapter components can use it; the full entries are in
// texts.ts. A reference can cite more than one text ("Manusmṛti 2.94;
// Bhagavad Gītā 5.22"), and then the passage belongs to each.

export type TextRef = { id: string; name: string };

export const TEXTS_PATH = "/learn/texts";
export const textPath = (id: string) => `${TEXTS_PATH}/${id}`;

const MATCH: [RegExp, TextRef][] = [
  [/Tirukkuṟaḷ/, { id: "tirukkural", name: "Tirukkuṟaḷ" }],
  [/Bhagavad Gītā/, { id: "bhagavad-gita", name: "Bhagavad Gītā" }],
  [/Arthaśāstra/, { id: "arthashastra", name: "Arthaśāstra" }],
  [/Manusmṛti/, { id: "manusmriti", name: "Manusmṛti" }],
  [/Ṛgveda/, { id: "rigveda", name: "Ṛgveda" }],
  [/Atharvaveda/, { id: "atharvaveda", name: "Atharvaveda" }],
  [/Upaniṣad/, { id: "upanishads", name: "Upaniṣads" }],
  [/Yoga Sūtra/, { id: "yoga-sutra", name: "Yoga Sūtra" }],
  [/Dhammapada/, { id: "dhammapada", name: "Dhammapada" }],
  [/Udānavarga/, { id: "udanavarga", name: "Udānavarga" }],
  [/Tattvārtha ?[Ss]ūtra/, { id: "tattvartha-sutra", name: "Tattvārtha Sūtra" }],
  [/Bodhicaryāvatāra|Śāntideva/, { id: "bodhicaryavatara", name: "Bodhicaryāvatāra" }],
  [/Hitopadeśa/, { id: "hitopadesha", name: "Hitopadeśa" }],
  [/Raghuvaṃśa/, { id: "raghuvamsha", name: "Raghuvaṃśa" }],
  [/Kabīr/, { id: "kabir", name: "Kabīr" }],
  [/Tukārām/, { id: "tukaram", name: "Tukārām" }],
  [/Rahīm/, { id: "rahim", name: "Rahīm" }],
  [/Vēmana/, { id: "vemana", name: "Vēmana" }],
  [/Basavaṇṇa/, { id: "basavanna", name: "Basavaṇṇa" }],
  [/Nārāyaṇa Guru/, { id: "narayana-guru", name: "Śrī Nārāyaṇa Guru" }],
  [/Tagore/, { id: "tagore", name: "Tagore" }],
];

export const TEXT_IDS = MATCH.map(([, t]) => t.id);

/** The reference line of a quote, as plain text, or "" when it has none. */
export function refOf(quote: string | null): string {
  const m = (quote ?? "").match(/<span class="ref">([\s\S]*?)<\/span>/);
  return m ? m[1].replace(/<[^>]+>/g, "").trim() : "";
}

/** The texts a passage's reference cites, in the order the reference names them. */
export function textsCited(quote: string | null): TextRef[] {
  const ref = refOf(quote);
  if (!ref) return [];
  return MATCH
    .map(([re, t]) => ({ t, at: ref.search(re) }))
    .filter(x => x.at >= 0)
    .sort((a, b) => a.at - b.at)
    .map(x => x.t);
}
