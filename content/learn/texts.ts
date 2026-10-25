// The classical texts the chapters quote, one entry each, for /learn/texts and
// its pages. Everything here is about the text itself: what it is, when and by
// whom it was composed as far as anyone knows, what is disputed, and where to
// read it. The passages are not written here; each page gathers them from the
// chapters by their reference lines (text-refs.ts).
//
// Dates for the older texts are estimates, often with a wide range. `year` only
// places a text on the timeline (the middle of its usual range, negative for
// BCE); the page always shows `date`, which says how uncertain it is. Links in
// `read` are free, public-domain editions that were checked when added;
// `further` names printed translations, not links.
//
// Add an entry here, and its matcher in text-refs.ts, before a chapter quotes
// a new text: the build fails on a reference that names no known text.

import { CHAPTERS, chapterPath, passageHref, type Kind } from "./index";
import { TEXT_IDS, refOf, textsCited, type TextRef } from "./text-refs";

export { TEXTS_PATH, textPath } from "./text-refs";

export type TextInfo = TextRef & {
  /** The name in its own script, with its language tag. */
  original?: { text: string; lang: string };
  language: string;
  /** What kind of text it is, in a line. */
  kind: string;
  form: string;
  by: string;
  date: string;
  /** The date in a few words, for the timeline. */
  when: string;
  /** Where the timeline places it: the middle of its usual range, negative for BCE. */
  year: number;
  /** How the site's references to it work. */
  refs: string;
  about: string[];
  /** What a reader should keep in mind. */
  care: string;
  read: { label: string; url: string }[];
  further: string[];
};

export const TEXTS: TextInfo[] = [
  {
    id: "tirukkural", name: "Tirukkuṟaḷ", original: { text: "திருக்குறள்", lang: "ta" }, language: "Tamil",
    kind: "Couplets on virtue, public life and love",
    form: "1,330 couplets, ten to a chapter, in 133 chapters and three books",
    by: "Tiruvaḷḷuvar, about whom almost nothing is reliably known; the stories of his life are much later",
    date: "Often placed around 450–500 CE; estimates range from about 300 BCE to the 6th century CE",
    year: 475,
    when: "c. 450–500 CE",
    refs: "Couplet numbers, 1 to 1330, the same in every edition. Couplets 1–380 are the book on virtue (Aṟam), 381–1080 the book on wealth and public life (Poruḷ), and 1081–1330 the book on love (Iṉpam).",
    about: [
      "Each kuṟaḷ is two short lines, seven metrical feet in all, and most can be read in a breath. The three books follow the classical aims of life: virtue, wealth and love. The middle book, on public life, covers the ruler, ministers, envoys, the army, friendship, finance and the conduct of anyone who serves, which is why the chapters here quote the Kuṟaḷ more than any other text.",
      "It names no god of a particular sect, and Jain, Śaiva, Vaiṣṇava and Buddhist readers have each claimed it. That openness has made it a shared classic of Tamil, and one of the most translated works of Indian literature.",
    ],
    care: "A seven-word couplet can be made to say a great deal, and translations differ widely. For centuries the Kuṟaḷ was read through Parimēlaḻakar's 13th-century commentary; modern translators often depart from it. Read the couplet in more than one version before leaning on it.",
    read: [{ label: "The Kural, translated by V. V. S. Aiyar (Standard Ebooks)", url: "https://standardebooks.org/ebooks/thiruvalluvar/the-kural/v-v-s-aiyar" }],
    further: ["G. U. Pope, The “Sacred” Kurral of Tiruvalluva-Nayanar (1886), the first complete English translation", "P. S. Sundaram, The Kural (Penguin, 1990)"],
  },
  {
    id: "bhagavad-gita", name: "Bhagavad Gītā", original: { text: "भगवद्गीता", lang: "sa" }, language: "Sanskrit",
    kind: "A dialogue on duty and action, within the Mahābhārata",
    form: "700 verses in 18 chapters, in the Bhīṣma Parva of the Mahābhārata",
    by: "Ascribed by tradition to Vyāsa, the composer of the Mahābhārata",
    date: "Usually placed between the 2nd century BCE and the 2nd century CE; some estimates are earlier",
    year: -50,
    when: "c. 200 BCE – 200 CE",
    refs: "Chapter.verse: 3.35 is chapter 3, verse 35. A few editions number chapter 13 one verse apart, because they count an extra opening verse.",
    about: [
      "On the eve of battle at Kurukṣetra, the warrior Arjuna will not fight his own kin. His charioteer, Kṛṣṇa, answers him with a teaching on one's own duty (svadharma), on acting without attachment to the fruits of action, and on knowledge, discipline and devotion as ways to the highest good.",
      "Few texts have been read in more ways. Commentators from Śaṅkara, around the 8th century, onward found their own philosophies in it. In modern India Tilak read it as a call to action, Gandhi as a guide to selfless service, and Aurobindo as a path of integral yoga. Management writers took up its idea of action without attachment much more recently.",
    ],
    care: "Reading the Gītā as a management text is a modern habit. Acting without attachment to the fruits of action is not an instruction to ignore results. The teaching is also given on a battlefield, and readers have long disagreed about what that means for it. Each passage on this site says whether the parallel is the text's own concern or a reading offered for reflection.",
    read: [{ label: "Gita Supersite, IIT Kanpur: the Sanskrit with several translations and commentaries", url: "https://www.gitasupersite.iitk.ac.in/" }],
    further: ["Barbara Stoler Miller, The Bhagavad-Gita (Bantam, 1986)", "Franklin Edgerton, The Bhagavad Gītā (Harvard, 1944)"],
  },
  {
    id: "arthashastra", name: "Arthaśāstra", original: { text: "अर्थशास्त्र", lang: "sa" }, language: "Sanskrit",
    kind: "A manual of statecraft, economy and administration",
    form: "15 books, 150 chapters and 180 topics, mostly in short prose rules with some verse",
    by: "Ascribed to Kauṭilya, whom later tradition identifies with Cāṇakya, minister to Candragupta Maurya",
    date: "Tradition places it in the 4th century BCE. Many scholars think the text we have was put together later, perhaps between the 1st and 3rd centuries CE, from older material",
    year: 50,
    when: "1st–3rd c. CE; by tradition 4th c. BCE",
    refs: "Book.chapter.verse in R. P. Kangle's critical edition (1960–65): 1.19.34 is book 1, chapter 19, verse 34. Older translations number differently, so check which numbering your edition follows.",
    about: [
      "The fullest ancient Indian work on running a state. It covers the ruler's training and daily routine, how to choose and test ministers, the treasury and revenue, the superintendents of mines, trade, agriculture, weights and measures, the courts, spies, war and diplomacy, including its theory of the circle of neighbouring states.",
      "The text was lost for centuries. In 1905 a manuscript reached R. Shamasastry at the Oriental Library in Mysore; he published the Sanskrit in 1909 and an English translation in 1915. Its detail on administration, revenue and accounts is why management writers return to it.",
    ],
    care: "The Arthaśāstra is frankly a manual of power. Beside its counsel on welfare and accountability, it recommends spies, deception and secret killings against enemies of the state. Quoting its administrative advice is not an endorsement of all of it. Who wrote it, and when, are open questions, and the identification of Kauṭilya with Cāṇakya rests on later tradition.",
    read: [{ label: "R. Shamasastry's translation (1915), hosted by Frances Pritchett, Columbia University; its numbering differs from Kangle's", url: "https://franpritchett.com/00litlinks/kautilya/index.html" }],
    further: ["R. P. Kangle, The Kauṭilīya Arthaśāstra, 3 parts (University of Bombay, 1960–65)", "Patrick Olivelle, King, Governance, and Law in Ancient India: Kauṭilya's Arthaśāstra (Oxford, 2013)"],
  },
  {
    id: "manusmriti", name: "Manusmṛti", original: { text: "मनुस्मृति", lang: "sa" }, language: "Sanskrit",
    kind: "A treatise on dharma: duties, kingship and law",
    form: "About 2,700 verses in 12 chapters",
    by: "Ascribed to Manu, the first man and lawgiver of Hindu myth; scholars see one author or school behind it",
    date: "Usually placed between the 2nd century BCE and the 3rd century CE",
    year: 100,
    when: "2nd c. BCE – 3rd c. CE",
    refs: "Chapter.verse: 7.115 is chapter 7, verse 115. Chapter 7 is on the king, and chapters 8 and 9 on the courts and law.",
    about: [
      "A dharmaśāstra, a treatise on how people should live: the duties of each stage of life and each social class, rites, food, marriage, kingship, the courts and penance. Its chapters on the king are why it appears here: on administration, taxation, the courts and fair prices.",
      "Its standing grew under British rule, when courts treated it as a source of Hindu law; William Jones translated it into English in 1794. It had not held that authority in practice before.",
    ],
    care: "The Manusmṛti also lays down a hierarchy of caste and restrictions on women that many find indefensible. On 25 December 1927, at Mahad, B. R. Ambedkar publicly burned it in protest against caste, and the day is still marked. This site quotes it only on administration and law, and a passage quoted here is not an endorsement of the social order the text assumes.",
    read: [{ label: "G. Bühler's translation, The Laws of Manu (1886), at sacred-texts.com", url: "https://sacred-texts.com/hin/manu.htm" }],
    further: ["Patrick Olivelle, Manu's Code of Law (Oxford, 2005)"],
  },
  {
    id: "rigveda", name: "Ṛgveda", original: { text: "ऋग्वेद", lang: "sa" }, language: "Vedic Sanskrit",
    kind: "The oldest collection of Vedic hymns",
    form: "1,028 hymns in 10 books, about 10,600 verses",
    by: "Families of poets (ṛṣis), named by the tradition hymn by hymn",
    date: "Composed roughly 1500–1000 BCE, and handed down orally for many centuries before it was written",
    year: -1250,
    when: "c. 1500–1000 BCE",
    refs: "Book.hymn.verse: 10.191.2 is book 10, hymn 191, verse 2.",
    about: [
      "The oldest of the four Vedas, and among the oldest texts in any Indo-European language. Most of its hymns praise and petition gods such as Agni, Indra and Varuṇa. Some late hymns in the tenth book turn to the origin of things and to human community, and most passages on this site come from those: the closing hymn, 10.191, calls an assembly to move together and speak together.",
      "It was handed down by memory with extraordinary precision. Reciters learned each hymn in several orders of words, a check against any change, and the tradition is still alive.",
    ],
    care: "Vedic Sanskrit is older and harder than classical Sanskrit, and the hymns are ritual poetry. Single lines lifted from them, such as “the wise call the one by many names” (1.164.46), carry meanings scholars still debate. Translations from the 19th century, including the free one linked here, are dated.",
    read: [{ label: "R. T. H. Griffith's translation (1890s), at sacred-texts.com", url: "https://sacred-texts.com/hin/rigveda/" }],
    further: ["Stephanie W. Jamison and Joel P. Brereton, The Rigveda (Oxford, 2014)"],
  },
  {
    id: "atharvaveda", name: "Atharvaveda", original: { text: "अथर्ववेद", lang: "sa" }, language: "Vedic Sanskrit",
    kind: "Vedic hymns for everyday life",
    form: "About 730 hymns in 20 books",
    by: "Associated with the priestly lines of Atharvan and Aṅgiras",
    date: "Mostly later than the Ṛgveda's hymns, around 1200–900 BCE",
    year: -1050,
    when: "c. 1200–900 BCE",
    refs: "Book.hymn.verse: 12.1.35 is book 12, hymn 1, verse 35.",
    about: [
      "The fourth Veda gathers hymns and charms for ordinary life: healing, protection, harmony at home and in the assembly, prosperity and kingship. Two of its hymns are quoted here: 7.12, which asks that the sabhā and the samiti, two kinds of assembly, speak with one mind, and the long hymn to the Earth (12.1).",
    ],
    care: "Much of the Atharvaveda is spells and charms, and some traditions ranked it below the other three Vedas. Reading the hymn to the Earth as environmental ethics is a modern reading, and is marked as one here.",
    read: [{ label: "R. T. H. Griffith's translation (1895), at sacred-texts.com", url: "https://sacred-texts.com/hin/av/index.htm" }],
    further: [],
  },
  {
    id: "upanishads", name: "Upaniṣads", original: { text: "उपनिषद्", lang: "sa" }, language: "Sanskrit",
    kind: "The philosophical texts that close the Vedas",
    form: "Prose and verse dialogues; about a dozen early ones are treated as the principal Upaniṣads",
    by: "No single author. Teachers such as Yājñavalkya and Uddālaka Āruṇi speak in them",
    date: "The oldest, the Bṛhadāraṇyaka and Chāndogya, from around the 7th–6th century BCE; the Kaṭha, Īśa and Muṇḍaka in the last centuries BCE; the Mahā Upaniṣad is much later, of the medieval period",
    year: -550,
    when: "from c. 700 BCE",
    refs: "The Upaniṣad's name and its own section numbers, which differ somewhat between editions.",
    about: [
      "The Upaniṣads ask about the self (ātman), the ground of all things (brahman), knowledge, death and how to live. Six are quoted here: the Taittirīya, with a teacher's parting advice to his students (1.11: speak the truth, follow dharma); the Bṛhadāraṇyaka; the Kaṭha, the dialogue between the boy Naciketas and Death; the Īśa, whose first verse says to enjoy by giving up and not to covet; the Muṇḍaka, whose “truth alone triumphs” (3.1.6) is India's national motto; and the Mahā Upaniṣad, source of “the world is one family” (6.71).",
    ],
    care: "The Upaniṣads are about liberation and the nature of the self, not organisations, and most parallels here are marked as readings. Take “the world is one family”: it is often quoted as an ancient call for world unity, but in the Mahā Upaniṣad it describes how a generous mind sees the world, and in the Hitopadeśa the same verse is spoken by a scheming jackal. Context changes what a line means.",
    read: [{ label: "F. Max Müller's translation, The Upanishads, Part II (1884), with the Kaṭha, Muṇḍaka, Taittirīya and Bṛhadāraṇyaka, at sacred-texts.com", url: "https://sacred-texts.com/hin/sbe15/" }],
    further: ["Patrick Olivelle, Upaniṣads (Oxford World's Classics, 1996)"],
  },
  {
    id: "yoga-sutra", name: "Yoga Sūtra", original: { text: "योगसूत्र", lang: "sa" }, language: "Sanskrit",
    kind: "The classical text of Yoga philosophy",
    form: "About 195 short aphorisms in four chapters",
    by: "Patañjali",
    date: "Often placed around the 4th–5th century CE; some scholars put it centuries earlier",
    year: 375,
    when: "c. 4th–5th c. CE",
    refs: "Chapter.aphorism: 1.14 is chapter 1, aphorism 14.",
    about: [
      "It defines yoga as the stilling of the movements of the mind (1.2), and sets out practice and non-attachment as the means, and the eight limbs from ethical restraints to absorption. It has always been read with an early commentary, the Yoga-bhāṣya. Here it is quoted on practice that is sustained (1.14), on clear insight (1.48) and on contentment (2.42).",
    ],
    care: "The Yoga Sūtra aims at liberation by stilling the mind, not at productivity, and the postural yoga practised today owes it little directly. Parallels with focus or well-being at work are readings.",
    read: [{ label: "Charles Johnston's version (1912), at sacred-texts.com", url: "https://sacred-texts.com/hin/ysp/" }],
    further: ["Edwin F. Bryant, The Yoga Sūtras of Patañjali (North Point Press, 2009)"],
  },
  {
    id: "dhammapada", name: "Dhammapada", original: { text: "धम्मपद", lang: "pi" }, language: "Pali",
    kind: "Verses of the Buddha's teaching",
    form: "423 verses in 26 chapters",
    by: "Sayings ascribed to the Buddha, gathered by the early community",
    date: "Compiled in the last centuries BCE; written down with the Pali Canon in Sri Lanka in the 1st century BCE",
    year: -200,
    when: "3rd–1st c. BCE",
    refs: "Verse numbers, 1 to 423.",
    about: [
      "Part of the Pali Canon of Theravāda Buddhism, and one of the best-loved Buddhist texts. Its verses are short and practical: the mind comes before all things (verse 1), hatred is never ended by hatred (verse 5), and the wise guard their minds as a fletcher straightens an arrow. Versions survive in other languages too: Gāndhārī, Sanskrit (the Udānavarga), Chinese and Tibetan.",
    ],
    care: "A later commentary gives many verses a story of how they came to be spoken; the verses themselves are general, and the setting a reader gives them matters. Key words such as citta (mind, heart) and dhamma (teaching, nature, things) are translated very differently.",
    read: [{ label: "SuttaCentral: the Pali with free translations", url: "https://suttacentral.net/dhp" }],
    further: ["Valerie J. Roebuck, The Dhammapada (Penguin, 2010)", "K. R. Norman, The Word of the Doctrine (Pali Text Society, 1997)"],
  },
  {
    id: "udanavarga", name: "Udānavarga", original: { text: "उदानवर्ग", lang: "sa" }, language: "Sanskrit",
    kind: "A Sanskrit Buddhist anthology, close kin to the Dhammapada",
    form: "About 1,000 verses in 33 chapters",
    by: "Gathered in the Sarvāstivāda school; tradition credits Dharmatrāta with the compilation",
    date: "Perhaps the 1st to 4th centuries CE",
    year: 200,
    when: "1st–4th c. CE",
    refs: "Chapter.verse. Modern editors numbered the verses from manuscripts, and editions differ.",
    about: [
      "It shares a large part of its verses with the Pali Dhammapada, in Sanskrit form, and adds many more. It survives in Sanskrit manuscripts found in Central Asia, and in Tibetan translation. It is quoted here twice, in chapters on behaviour at work.",
    ],
    care: "The text was rebuilt from manuscripts, and numbering differs between editions, and between the Sanskrit and the Tibetan. Check a verse against the edition you use.",
    read: [],
    further: [],
  },
  {
    id: "tattvartha-sutra", name: "Tattvārtha Sūtra", original: { text: "तत्त्वार्थसूत्र", lang: "sa" }, language: "Sanskrit",
    kind: "The whole of Jain teaching in brief",
    form: "About 350 aphorisms in 10 chapters",
    by: "Umāsvāti, called Umāsvāmin by Digambaras",
    date: "Between the 2nd and 5th centuries CE",
    year: 350,
    when: "2nd–5th c. CE",
    refs: "Chapter.aphorism. The Śvetāmbara and Digambara versions number some aphorisms differently, so a reference can be a little out between editions.",
    about: [
      "The first Jain text in Sanskrit, and the one text both main Jain traditions, Śvetāmbara and Digambara, accept. It sets out the categories of reality, the soul and matter, how karma binds, and the path of right faith, right knowledge and right conduct. Its line “parasparopagraho jīvānām”, living beings support one another, is the motto on the Jain emblem today.",
    ],
    care: "Jain non-harm (ahiṃsā) and its account of karma run deep, and are not a business principle; the parallels here are readings.",
    read: [],
    further: ["Nathmal Tatia, That Which Is: Tattvārtha Sūtra (HarperCollins, 1994)"],
  },
  {
    id: "bodhicaryavatara", name: "Bodhicaryāvatāra", original: { text: "बोधिचर्यावतार", lang: "sa" }, language: "Sanskrit",
    kind: "A guide to the life of a bodhisattva",
    form: "About 900 verses in 10 chapters",
    by: "Śāntideva, a monk at Nālandā",
    date: "Early 8th century CE",
    year: 710,
    when: "early 8th c. CE",
    refs: "Chapter.verse. The Sanskrit and Tibetan versions differ slightly in length and numbering.",
    about: [
      "“Entering the way of awakening”: a Mahāyāna guide for one who seeks awakening for the sake of all beings. Its sixth chapter, on patience, is one of the most read texts on anger. The verse quoted here (6.10) asks why one should be upset at what can be remedied, or at what cannot. It is still taught widely, above all in Tibetan Buddhism.",
    ],
    care: "The patience it teaches is a discipline aimed at awakening, not acceptance of unfair treatment.",
    read: [],
    further: ["Kate Crosby and Andrew Skilton, The Bodhicaryāvatāra (Oxford World's Classics, 1995)"],
  },
  {
    id: "hitopadesha", name: "Hitopadeśa", original: { text: "हितोपदेश", lang: "sa" }, language: "Sanskrit",
    kind: "Fables that teach worldly wisdom",
    form: "Prose fables with verse maxims, in four books",
    by: "Nārāyaṇa, writing for a king named Dhavalacandra",
    date: "Between the 9th and 14th centuries CE",
    year: 1100,
    when: "9th–14th c. CE",
    refs: "Book.verse; editions number the verses differently.",
    about: [
      "“Good counsel”: animal fables told to teach princes nīti, the practical wisdom of getting on in the world, drawn largely from the older Pañcatantra. Its four books are on winning friends, losing them, war and peace. Its verse maxims, spoken by the characters, have long circulated on their own as proverbs. It was among the first Sanskrit works translated in Europe; Charles Wilkins' English version appeared in 1787.",
    ],
    care: "A maxim in a fable is spoken by a character, often to persuade or to deceive. The story around a verse can change its sense entirely, so read the scene before quoting the line.",
    read: [{ label: "Edwin Arnold's The Book of Good Counsels (1861), in Hindu Literature (1900), at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/13268" }],
    further: ["Judit Törzsök, Friendly Advice (Clay Sanskrit Library, 2007)"],
  },
  {
    id: "raghuvamsha", name: "Raghuvaṃśa", original: { text: "रघुवंश", lang: "sa" }, language: "Sanskrit",
    kind: "A court epic on the kings of Raghu's line",
    form: "A mahākāvya in 19 cantos",
    by: "Kālidāsa",
    date: "4th–5th century CE",
    year: 420,
    when: "4th–5th c. CE",
    refs: "Canto.verse: 1.18 is canto 1, verse 18.",
    about: [
      "Kālidāsa, the most celebrated poet of classical Sanskrit, tells the story of the kings of Raghu's line, Rāma's ancestors and descendants. It is quoted here on taxation: King Dilīpa took tax from his people only for their good, as the sun draws up water to return it a thousandfold as rain (1.18).",
    ],
    care: "It is poetry in praise of ideal kings, not a record of how kings governed.",
    read: [],
    further: [],
  },
  {
    id: "kabir", name: "Kabīr", original: { text: "कबीर", lang: "hi" }, language: "Hindi (old Hindi dialects)",
    kind: "Couplets and songs of a weaver-poet",
    form: "Sākhīs (couplets) and songs, handed down by singers and later written down",
    by: "Kabīr, a weaver of Banaras",
    date: "15th century CE",
    year: 1470,
    when: "15th c.",
    refs: "His couplets are cited by form (sākhī); the collections number them differently.",
    about: [
      "Kabīr's plain, sharp couplets mock empty ritual and division by caste or creed, Hindu and Muslim alike, and point to a God without form, found within. Three traditions gathered his verses: the Bījak of the Kabīr Panth, the Sikh Guru Granth Sahib, and the Rajasthani collections of the Dādū Panth.",
    ],
    care: "Thousands of verses circulate under Kabīr's name, many of them later, and the three collections overlap only in part. The couplets on this site are traditional attributions.",
    read: [],
    further: ["Linda Hess and Shukdeo Singh, The Bījak of Kabir (1983)"],
  },
  {
    id: "tukaram", name: "Tukārām", original: { text: "तुकाराम", lang: "mr" }, language: "Marathi",
    kind: "Devotional verses of a Vārkarī saint",
    form: "Abhaṅgas, about 4,500 of them, collected in the Gāthā",
    by: "Tukārām, a grocer of Dehu, near Pune",
    date: "17th century CE",
    year: 1630,
    when: "17th c.",
    refs: "Abhaṅga numbers in the Gāthā. Printed collections number differently; this site follows Marathi Wikisource.",
    about: [
      "In everyday Marathi, Tukārām's abhaṅgas speak of devotion to Viṭhobā of Pandharpur, of honest work, and of the pride of the learned. Pilgrims still sing them on the annual Vārī to Pandharpur. A well-known story says his notebooks were thrown into the Indrāyaṇī river and came back unharmed.",
    ],
    care: "His verses come down in several collections with different numbering and some differences of text.",
    read: [],
    further: ["Dilip Chitre, Says Tuka (Penguin, 1991)"],
  },
  {
    id: "rahim", name: "Rahīm", original: { text: "रहीम", lang: "hi" }, language: "Hindi (Braj and Avadhi)",
    kind: "Couplets of a Mughal general and poet",
    form: "Dohās (couplets)",
    by: "Abdul Rahīm Khān-i-Khānān (1556–1627), general and minister at Akbar's court",
    date: "Late 16th and early 17th century CE",
    year: 1600,
    when: "1556–1627",
    refs: "His couplets are cited by form (dohā); collections number them differently.",
    about: [
      "Son of Bairam Khan, Akbar's regent, Rahīm was a commander, one of the “nine jewels” of Akbar's court, the translator of Bābur's memoirs into Persian, and a poet in Hindi. His dohās on friendship, humility and giving are still learned in school.",
    ],
    care: "As with Kabīr, many dohās circulate under his name; the couplet on this site is a traditional attribution.",
    read: [],
    further: [],
  },
  {
    id: "vemana", name: "Vēmana", original: { text: "వేమన", lang: "te" }, language: "Telugu",
    kind: "Short verses of a plain-spoken poet",
    form: "Padyams, short verses, most ending “Viśvadābhirāma, vinura Vēma”",
    by: "Vēmana, of whose life little is certain",
    date: "Uncertain; proposals range from the 14th to the 18th century",
    year: 1650,
    when: "uncertain, 14th–18th c.",
    refs: "His verses are cited by form (padyam); collections number them differently.",
    about: [
      "In plain Telugu, Vēmana's verses attack caste, idol worship and hypocrisy, and give homely advice on conduct; they are among the most quoted verses in Telugu. C. P. Brown, a British official, collected and translated them as Verses of Vemana (1829).",
    ],
    care: "His dates and life are uncertain, and many verses are attributed to him; the one here is a traditional attribution.",
    read: [],
    further: ["C. P. Brown, Verses of Vemana (1829)"],
  },
  {
    id: "basavanna", name: "Basavaṇṇa", original: { text: "ಬಸವಣ್ಣ", lang: "kn" }, language: "Kannada",
    kind: "Vacanas, sayings of a reformer",
    form: "Vacanas, short sayings in free verse",
    by: "Basavaṇṇa, minister at the court of the Kalachuri king Bijjala at Kalyāṇa",
    date: "12th century CE",
    year: 1150,
    when: "12th c.",
    refs: "His vacanas are cited by form; collections number them differently.",
    about: [
      "Basavaṇṇa led the Vīraśaiva movement, which rejected caste, temple ritual and priestly privilege, and held honest work (kāyaka) to be a form of worship. His vacanas, addressed to Kūḍalasaṅgamadēva, are plain speech rather than metre, which was itself a statement.",
    ],
    care: "The vacanas were gathered and edited centuries later; the one here is a traditional attribution.",
    read: [],
    further: ["A. K. Ramanujan, Speaking of Śiva (Penguin, 1973)"],
  },
  {
    id: "narayana-guru", name: "Śrī Nārāyaṇa Guru", original: { text: "ശ്രീനാരായണഗുരു", lang: "ml" }, language: "Malayalam",
    kind: "Sayings and poems of a philosopher and reformer",
    form: "Poems and hymns in Malayalam, Sanskrit and Tamil, and public sayings",
    by: "Śrī Nārāyaṇa Guru (1856–1928)",
    date: "Late 19th and early 20th century",
    year: 1900,
    when: "1856–1928",
    refs: "His sayings are cited without numbers.",
    about: [
      "A philosopher and reformer from Kerala who worked against caste exclusion. In 1888 he consecrated a Śiva image at Aruvippuram, defying the rule that only Brahmins could do so. The saying quoted here is his best known: one caste, one religion, one God for humankind.",
    ],
    care: "Some of his sayings come down through his followers' records.",
    read: [],
    further: [],
  },
  {
    id: "tagore", name: "Tagore", original: { text: "রবীন্দ্রনাথ ঠাকুর", lang: "bn" }, language: "Bengali",
    kind: "Poems of Rabindranath Tagore",
    form: "Poems, songs, plays, novels and essays",
    by: "Rabindranath Tagore (1861–1941)",
    date: "The poem quoted here: Bengali, 1901; Tagore's English, 1912",
    year: 1901,
    when: "1901",
    refs: "The Bengali collection and poem number, with Tagore's English version.",
    about: [
      "Poet, composer, painter and educator, and in 1913 the first non-European to win the Nobel Prize in Literature. The poem quoted here, “Where the mind is without fear”, was written in Bengali in Naivedya (1901), and Tagore's own English version is poem 35 of Gitanjali (1912). He founded Visva-Bharati at Santiniketan, and wrote the national anthems of India and Bangladesh.",
    ],
    care: "Tagore's English versions are free re-creations of his Bengali, not close translations.",
    read: [{ label: "Gitanjali (1912), at Project Gutenberg", url: "https://www.gutenberg.org/ebooks/7164" }],
    further: [],
  },
];

// Modern management writing, for the timeline, each with the chapter that explains it.
export const MODERN: { year: number; date: string; who: string; work: string; slug: string }[] = [
  { year: 1776, date: "1776", who: "Adam Smith", work: "The Wealth of Nations", slug: "business-economics-and-demand" },
  { year: 1911, date: "1911", who: "Frederick W. Taylor", work: "The Principles of Scientific Management", slug: "theories-of-management" },
  { year: 1916, date: "1916", who: "Henri Fayol", work: "Administration industrielle et générale", slug: "principles-of-management" },
  { year: 1922, date: "1922", who: "Max Weber", work: "Economy and Society, on bureaucracy", slug: "theories-of-management" },
  { year: 1928, date: "1924–32", who: "Elton Mayo and colleagues", work: "The Hawthorne studies", slug: "theories-of-management" },
  { year: 1943, date: "1943", who: "Abraham Maslow", work: "“A Theory of Human Motivation”", slug: "values-learning-and-motivation" },
  { year: 1947, date: "1947", who: "Herbert Simon", work: "Administrative Behavior", slug: "decision-making" },
  { year: 1954, date: "1954", who: "Peter Drucker", work: "The Practice of Management", slug: "principles-of-management" },
  { year: 1959, date: "1959", who: "Frederick Herzberg", work: "The Motivation to Work", slug: "values-learning-and-motivation" },
  { year: 1960, date: "1960", who: "Douglas McGregor", work: "The Human Side of Enterprise", slug: "theories-of-management" },
  { year: 1967, date: "1967", who: "Philip Kotler", work: "Marketing Management", slug: "marketing-concepts" },
  { year: 1980, date: "1980", who: "Michael Porter", work: "Competitive Strategy", slug: "external-analysis" },
  { year: 1990, date: "1990", who: "C. K. Prahalad and Gary Hamel", work: "“The Core Competence of the Corporation”", slug: "internal-analysis" },
];

export type TextPassage = {
  slug: string; pairing: number; chapter: string; unitN: number;
  modern: string; classic: string; kind: Kind; quote: string; ref: string; href: string;
};

/** Every passage the chapters quote from a text, in syllabus order. */
export function passagesFrom(id: string): TextPassage[] {
  const out: TextPassage[] = [];
  for (const c of CHAPTERS) c.pairings.forEach((p, i) => {
    if (!p.quote || !textsCited(p.quote).some(t => t.id === id)) return;
    out.push({
      slug: c.slug, pairing: i, chapter: c.short ?? c.title, unitN: c.unitN,
      modern: p.modern, classic: p.classic ?? "", kind: p.kind, quote: p.quote, ref: refOf(p.quote),
      href: passageHref(c.slug, i),
    });
  });
  return out;
}

export const textById = (id: string) => TEXTS.find(t => t.id === id);

/** Texts cited in a chapter, in the order they first appear. */
export function textsInChapter(slug: string): TextRef[] {
  const c = CHAPTERS.find(x => x.slug === slug);
  const seen = new Map<string, TextRef>();
  for (const p of c?.pairings ?? []) for (const t of textsCited(p.quote)) seen.set(t.id, t);
  return [...seen.values()];
}

/** Classical texts and modern writing on one line, oldest first. */
export function timeline() {
  return [
    ...TEXTS.map(t => ({ type: "text" as const, year: t.year, t })),
    ...MODERN.map(m => ({ type: "modern" as const, year: m.year, m, href: chapterPath(m.slug) })),
  ].sort((a, b) => a.year - b.year);
}

export const TEXTS_UPDATED = "2026-10-25";

// ---------- Checks, run when the site is built ----------
{
  const problems: string[] = [];
  const ids = new Set(TEXTS.map(t => t.id));
  for (const id of TEXT_IDS) if (!ids.has(id)) problems.push(`text-refs.ts names "${id}", which has no entry in texts.ts`);
  for (const t of TEXTS) {
    if (!TEXT_IDS.includes(t.id)) problems.push(`texts.ts has "${t.id}", which text-refs.ts can't match`);
    if (!passagesFrom(t.id).length) problems.push(`no chapter quotes "${t.id}"`);
    for (const r of t.read) if (!/^https:\/\//.test(r.url)) problems.push(`"${t.id}" has a link that isn't https`);
  }
  for (const c of CHAPTERS) c.pairings.forEach((p, i) => {
    if (refOf(p.quote) && !textsCited(p.quote).length) problems.push(`${c.slug} passage ${i} cites "${refOf(p.quote)}", which names no known text`);
  });
  for (const m of MODERN) if (!CHAPTERS.some(c => c.slug === m.slug)) problems.push(`timeline names missing chapter ${m.slug}`);
  if (problems.length) throw new Error(`texts.ts:\n- ${problems.join("\n- ")}`);
}

