// How to read the classical names and terms on this site, for /learn/reading-guide:
// what the marks in transliterated words mean and how they sound, the familiar
// English spellings of the names, and a short list of words that don't
// translate well, with where the chapters use them.

import { CHAPTERS, chapterPath } from "./index";

export const READING_GUIDE_PATH = "/learn/reading-guide";

export type Mark = { mark: string; sounds: string; example: string; lang?: string };

/** The marks used for Sanskrit, Pali and related languages (IAST). */
export const MARKS: Mark[] = [
  { mark: "a", sounds: "short, like the u in “but”", example: "artha, karma" },
  { mark: "ā ī ū", sounds: "long: ā as in “father”, ī as in “machine”, ū as in “rule”", example: "Gītā, Sūtra" },
  { mark: "e o", sounds: "always long: e as in “they”, o as in “go”", example: "Veda, yoga" },
  { mark: "ai au", sounds: "as in “aisle” and “loud”", example: "Kauṭilya" },
  { mark: "ṛ", sounds: "a vowel, close to “ri” in “rich” in the north, “ru” in the south", example: "Ṛgveda (Rigveda), Kṛṣṇa" },
  { mark: "ś ṣ", sounds: "both close to “sh”", example: "Arthaśāstra, Upaniṣad" },
  { mark: "c", sounds: "always “ch” as in “church”", example: "Cāṇakya (Chanakya)" },
  { mark: "h after a letter", sounds: "a breath after it, not a new sound: th is t with a puff, as in “hothouse”, never as in “thin”", example: "artha, Dhammapada, bhakti" },
  { mark: "ṭ ḍ ṇ ḷ", sounds: "the tongue curled back to the roof of the mouth, as t, d, n and l sound in much Indian English", example: "Kauṭilya, Basavaṇṇa" },
  { mark: "ṃ", sounds: "a nasal on the vowel before it, often like m or ng", example: "Raghuvaṃśa, saṃskṛta" },
  { mark: "ḥ", sounds: "a light breath, echoing the vowel before it", example: "duḥkha, namaḥ" },
  { mark: "ñ ṅ", sounds: "ñ as in “canyon”, ṅ as in “sing”", example: "jñāna (often said “gyaan”), saṅgha" },
  { mark: "v", sounds: "between English v and w", example: "Veda, Vēmana" },
];

/** Extra marks for Tamil and the other Dravidian languages. */
export const DRAVIDIAN: Mark[] = [
  { mark: "ē ō", sounds: "long e and o; these languages also have short e and o", example: "Vēmana, Kūḍalasaṅgamadēva" },
  { mark: "ṟ", sounds: "a firm, rolled r", example: "Tirukkuṟaḷ (Thirukkural), Aṟam" },
  { mark: "ḻ", sounds: "a sound between r and l with the tongue curled back, often written “zh”", example: "Tamiḻ (Tamizh), Parimēlaḻakar" },
  { mark: "ṉ", sounds: "an n with the tongue just behind the teeth", example: "Iṉpam" },
];

/** How the names are often spelled without marks, which helps when searching elsewhere. */
export const SPELLINGS: [string, string][] = [
  ["Tirukkuṟaḷ", "Thirukkural, Tirukkural"], ["Tiruvaḷḷuvar", "Thiruvalluvar"], ["Arthaśāstra", "Arthashastra"],
  ["Kauṭilya, Cāṇakya", "Kautilya, Chanakya"], ["Bhagavad Gītā", "Bhagavad Gita"], ["Kṛṣṇa", "Krishna"],
  ["Ṛgveda", "Rigveda, Rig Veda"], ["Upaniṣad", "Upanishad"], ["Manusmṛti", "Manusmriti"], ["Patañjali", "Patanjali"],
  ["Śāntideva", "Shantideva"], ["Hitopadeśa", "Hitopadesha"], ["Raghuvaṃśa", "Raghuvamsha"], ["Basavaṇṇa", "Basavanna, Basava"],
];

export type Word = {
  id: string; term: string; original: string; lang: string;
  /** What it means, in a sentence or two. */
  means: string;
  /** The translation that misleads, and why. */
  notQuite: string;
  /** Finds the word in the chapters' text. */
  find: RegExp;
};

export const WORDS: Word[] = [
  { id: "dharma", term: "dharma", original: "धर्म", lang: "sa",
    means: "What holds things together and what is right to do: duty, law, right conduct, and the proper nature of a thing. A teacher's dharma is to teach.",
    notQuite: "“Religion”. Dharma is about conduct and order, and is used in matters a modern reader would call ethics, law or professional duty.",
    find: /\bdharma\b/i },
  { id: "svadharma", term: "svadharma", original: "स्वधर्म", lang: "sa",
    means: "One's own duty: the work and conduct that fit one's place and nature (Bhagavad Gītā 3.35).",
    notQuite: "“Follow your passion”. In the Gītā the idea was tied to the duties of one's social class; modern readers often take it as one's own role and abilities, which is a reading.",
    find: /svadharma/i },
  { id: "artha", term: "artha", original: "अर्थ", lang: "sa",
    means: "Wealth, means and purpose: the material side of life, and one of the four aims of life with dharma, kāma and mokṣa. The Arthaśāstra is the study of gaining and keeping it, for a household and a state.",
    notQuite: "“Economics” or “money”. Artha also covers power, security and the prosperity of a realm.",
    find: /\bartha\b(?!śāstra)/i },
  { id: "karma", term: "karma", original: "कर्म", lang: "sa",
    means: "Action, and the consequences that follow from it. Karma-yoga in the Gītā is the discipline of acting well.",
    notQuite: "“Fate”. Karma is about action and what it sets in motion, not a fixed destiny.",
    find: /\bkarma\b/i },
  { id: "nishkama-karma", term: "niṣkāma karma", original: "निष्काम कर्म", lang: "sa",
    means: "Action without craving for its fruits: doing the work fully, and not making one's peace depend on how it turns out.",
    notQuite: "“Don't care about results”. The Gītā asks for full effort; what it lets go of is attachment to the reward.",
    find: /niṣkāma|nishkama|fruits of action/i },
  { id: "yoga", term: "yoga", original: "योग", lang: "sa",
    means: "Joining, discipline, a way of practice. The Gītā calls it “skill in action” (2.50); the Yoga Sūtra defines it as stilling the mind (1.2).",
    notQuite: "“Exercise” or “postures”. The classical texts barely mention postures.",
    find: /\byoga\b/i },
  { id: "lokasangraha", term: "lokasaṅgraha", original: "लोकसंग्रह", lang: "sa",
    means: "Holding the world together: acting for the common good, so that others can follow a good example (Bhagavad Gītā 3.20, 3.25).",
    notQuite: "“Social work” or “PR”. It is the reason the Gītā gives for a capable person to keep acting at all.",
    find: /lokasaṅgraha|lokasangraha/i },
  { id: "yogakshema", term: "yogakṣema", original: "योगक्षेम", lang: "sa",
    means: "Gaining what one lacks and keeping safe what one has: welfare and security together (Arthaśāstra; Bhagavad Gītā 9.22).",
    notQuite: "“Insurance”. It is a ruler's or provider's whole duty of care.",
    find: /yogakṣema|yogakshema/i },
  { id: "rta", term: "ṛta", original: "ऋत", lang: "sa",
    means: "The order of the world in the Ṛgveda: the regular course of seasons, ritual and right conduct. Later ideas of dharma grow from it.",
    notQuite: "“Law of nature” alone. It is moral as well as natural order.",
    find: /(^|[^\p{L}])ṛta($|[^\p{L}])/iu },
  { id: "satya", term: "satya", original: "सत्य", lang: "sa",
    means: "Truth, and being true: what is so, and speech and action that match it. “Truth alone triumphs” (Muṇḍaka Upaniṣad 3.1.6).",
    notQuite: "“Honesty” alone. Satya is also reality itself.",
    find: /\bsatya/i },
  { id: "ahimsa", term: "ahiṃsā", original: "अहिंसा", lang: "sa",
    means: "Not harming any living being, in deed, word or thought; central to Jain, Buddhist and Hindu ethics.",
    notQuite: "“Non-violence” in the narrow sense of not fighting. It reaches to speech, intention and all living things.",
    find: /ahiṃsā|ahimsa/i },
  { id: "niti", term: "nīti", original: "नीति", lang: "sa",
    means: "Practical wisdom and prudent policy: how to get on, choose friends and govern well (as in the Hitopadeśa).",
    notQuite: "“Morality”. Nīti is shrewd as much as good.",
    find: /\bnīti\b|daṇḍanīti/i },
  { id: "danda", term: "daṇḍa", original: "दण्ड", lang: "sa",
    means: "The rod: the state's power to punish and compel, which the Arthaśāstra says must be used neither too harshly nor too lightly.",
    notQuite: "“Punishment” alone. It is the whole coercive authority of government.",
    find: /daṇḍa|danda\b/i },
  { id: "aram", term: "aṟam", original: "அறம்", lang: "ta",
    means: "Virtue and right conduct in Tamil thought; the first book of the Tirukkuṟaḷ.",
    notQuite: "“Dharma” by another name. Aṟam grows from Tamil ethics and is often closer to goodness and fairness than to duty.",
    find: /aṟam/i },
  { id: "kayaka", term: "kāyaka", original: "ಕಾಯಕ", lang: "kn",
    means: "Honest work, held by Basavaṇṇa and the Vīraśaivas to be itself a form of worship.",
    notQuite: "“Hard work”. Kāyaka is any honest livelihood done with integrity, and it rejects ranking work by caste.",
    find: /kāyaka|kayaka/i },
];

const plain = (s: string) => s.replace(/<[^>]+>/g, " ");

/** The chapters whose text uses a word, in syllabus order. */
export function chaptersUsing(w: Word, limit = 6) {
  const out: { title: string; href: string }[] = [];
  for (const c of CHAPTERS) {
    const text = plain([...c.blocks.map(b => b.html), ...c.pairings.flatMap(p => [...p.text, p.quote ?? "", p.classic ?? ""])].join(" "));
    if (w.find.test(text)) out.push({ title: c.short ?? c.title, href: chapterPath(c.slug) });
    if (out.length >= limit) break;
  }
  return out;
}
