// Seeds the Veda Verse product with the people, circles, questions and house
// pieces from the product design. Safe to re-run: it clears the product's own
// tables (never the landing page's) and writes everything again.
//
//   npm run db:seed
import { db } from "../src/prisma/db";
import { instantAt } from "../lib/app/time";

const H = 3600000, D = 24 * H;
const ago = (ms: number) => instantAt(Date.now() - ms);

const TOPICS = ["Everyday life", "Books", "Food", "Cities", "History", "Education", "Work and leadership", "Customs and traditions", "Design", "Psychology"];

type P = { id: string; name: string; handle: string; initials: string; hue: number; line: string; ask: string[]; curious: string[]; credential?: string; editor?: boolean };
const PEOPLE: P[] = [
  { id: "u-ananya", name: "Ananya Krishnan", handle: "ananya", initials: "AK", hue: 150, line: "Product designer. Asking more than answering, for now.", ask: ["Design", "Work and leadership"], curious: ["Psychology", "Customs and traditions", "Food", "Books", "Cities"] },
  { id: "u-meera", name: "Meera Iyer", handle: "meera", initials: "MI", hue: 35, line: "Teaches economics to Class 11 in Pune. Likes slow arguments.", ask: ["Education"], curious: ["Cities", "Books"], credential: "Teacher · verified for Education" },
  { id: "u-rohan", name: "Rohan Nair", handle: "rohan", initials: "RN", hue: 250, line: "Reads too many novels at once. Kerala, mostly.", ask: ["Books", "History"], curious: ["Food", "Cities"] },
  { id: "u-harleen", name: "Harleen Sethi", handle: "harleen", initials: "HS", hue: 80, line: "Cooks from memory, badly at first.", ask: ["Food"], curious: ["Customs and traditions"] },
  { id: "u-kabir", name: "Kabir Shah", handle: "kabir", initials: "KS", hue: 200, line: "Six months into managing a team of five.", ask: ["Work and leadership"], curious: ["Psychology", "Design"] },
  { id: "u-ezra", name: "Ezra Thomas", handle: "ezra", initials: "ET", hue: 110, line: "New to Ahmedabad. Walking everywhere.", ask: [], curious: ["Cities", "History"] },
  { id: "u-sana", name: "Sana Qureshi", handle: "sana", initials: "SQ", hue: 320, line: "Three months into managing.", ask: [], curious: ["Work and leadership"] },
  { id: "u-dev", name: "Dev Malhotra", handle: "dev", initials: "DM", hue: 180, line: "Second-year design student.", ask: [], curious: ["Design"] },
  { id: "u-nidhi", name: "Nidhi Parekh", handle: "nidhi", initials: "NP", hue: 20, line: "Leads heritage walks in the old city.", ask: ["History", "Cities"], curious: ["Customs and traditions"] },
  { id: "u-asha", name: "Asha Verma", handle: "asha", initials: "AV", hue: 290, line: "Hindi teacher, patient with beginners.", ask: ["Education", "Customs and traditions"], curious: ["Books"] },
  { id: "u-priya", name: "Priya Menon", handle: "priya", initials: "PM", hue: 60, line: "Editor at the house of Veda Verse.", ask: ["Customs and traditions"], curious: ["History"], editor: true },
];

async function wipe() {
  const o = db.orm.public;
  // children first
  await o.Notification.where(x => x.id.isNotNull()).deleteAndCount(); await o.Report.where(x => x.id.isNotNull()).deleteAndCount(); await o.ReadEvent.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Draft.where(x => x.id.isNotNull()).deleteAndCount();
  await o.CollectionItem.where(x => x.collectionId.isNotNull()).deleteAndCount(); await o.Collection.where(x => x.id.isNotNull()).deleteAndCount(); await o.Bookmark.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Helpful.where(x => x.userId.isNotNull()).deleteAndCount();
  await o.Hide.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Block.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Mute.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Follow.where(x => x.followerId.isNotNull()).deleteAndCount();
  await o.Response.where(x => x.id.isNotNull()).deleteAndCount(); await o.SourceCheck.where(x => x.userId.isNotNull()).deleteAndCount(); await o.CorrectionSuggestion.where(x => x.id.isNotNull()).deleteAndCount();
  await o.ArticleCorrection.where(x => x.id.isNotNull()).deleteAndCount(); await o.ArticleSource.where(x => x.id.isNotNull()).deleteAndCount(); await o.ArticleParagraph.where(x => x.id.isNotNull()).deleteAndCount(); await o.Article.where(x => x.id.isNotNull()).deleteAndCount();
  await o.QuestionFollow.where(x => x.userId.isNotNull()).deleteAndCount(); await o.Question.where(q => q.id.isNotNull()).updateAndCount({ acceptedAnswerId: null });
  await o.Answer.where(a => a.onAnswerId.isNotNull()).updateAndCount({ onAnswerId: null });
  await o.Answer.where(x => x.id.isNotNull()).deleteAndCount(); await o.Question.where(x => x.id.isNotNull()).deleteAndCount();
  await o.Note.where(n => n.buildsOnId.isNotNull()).updateAndCount({ buildsOnId: null });
  await o.Note.where(x => x.id.isNotNull()).deleteAndCount(); await o.SpoilerUnlock.where(x => x.userId.isNotNull()).deleteAndCount(); await o.CommunityThread.where(x => x.id.isNotNull()).deleteAndCount(); await o.CommunityTopic.where(x => x.communityId.isNotNull()).deleteAndCount();
  await o.Expertise.where(x => x.userId.isNotNull()).deleteAndCount();
  const ids = PEOPLE.map(p => p.id);
  await o.TopicFollow.where(t => t.userId.in(ids)).deleteAndCount();
  await o.Membership.where(m => m.userId.in(ids)).deleteAndCount();
}

async function main() {
  console.log("Seeding Veda Verse…");
  await wipe();
  const o = db.orm.public;

  const topic: Record<string, string> = {};
  for (const name of TOPICS) {
    const t = (await o.Topic.where({ name }).first()) ?? (await o.Topic.create({ name }));
    topic[name] = t.id;
  }

  for (const p of PEOPLE) {
    const data = {
      name: p.name, handle: p.handle, initials: p.initials, hue: p.hue, line: p.line, credential: p.credential ?? null,
      isEditor: !!p.editor, timezone: "Asia/Kolkata", openTo: "Answering questions", brings: "Asking",
      onboardedAt: ago(30 * D), lastSeenAt: ago(14 * H), quietHours: true, digest: "Daily", keepHistory: true,
    };
    if (await o.User.where({ id: p.id }).first()) await o.User.where({ id: p.id }).update(data);
    else await o.User.create({ id: p.id, deliveryWindows: [9, 13, 18], ...data });
    for (const t of p.ask) await o.Expertise.create({ userId: p.id, topicId: topic[t] });
    for (const t of p.curious) await o.TopicFollow.create({ userId: p.id, topicId: topic[t] });
  }

  // ── communities ──
  const COMMUNITIES = [
    { slug: "reading-circle", name: "Reading Circle", format: "Circle", memory: "kept", pace: "Thoughtful pace · one chapter a week", contributors: "Anyone can read. Members add notes.", week: "Chapter 5 of The Salt Road", detail: "Notes on chapter 5 stay hidden until you say you've read it.", hosts: ["u-meera", "u-rohan"], members: ["u-ananya", "u-ezra", "u-harleen"], topics: ["Books"], blurb: "One book at a time, a thread per chapter.",
      rules: ["Label your notes like any post.", "Spoilers go in the chapter thread they belong to.", "Build on a note rather than repeating it.", "Disagree with the reading, not the reader."] },
    { slug: "local-ahmedabad", name: "Local: Ahmedabad", format: "Board", memory: "fades", fadeDays: 7, pace: "Quick, practical", contributors: "Anyone in the city.", week: "This week: weekend heritage walks", detail: "Posts fade after 7 days, like a noticeboard.", hosts: ["u-nidhi", "u-ezra"], members: [], topics: ["Cities", "History"], blurb: "Noticeboard for the city.",
      rules: ["Say when and where.", "Posts fade after a week.", "No selling."] },
    { slug: "first-time-managers", name: "First-time managers", format: "Cohort", memory: "members", pace: "Weekly check-ins", contributors: "Members of this cohort only.", week: "Applications open until 30 Sep", detail: "Conversations stay inside the cohort.", hosts: ["u-kabir", "u-sana"], members: ["u-ananya"], topics: ["Work and leadership", "Design"], blurb: "A cohort that moves together.",
      rules: ["What is said here stays here.", "Bring a real situation.", "Advice labelled like any post."] },
    { slug: "hindi-practice", name: "Hindi practice", format: "Practice", memory: "kept", pace: "A prompt a week", contributors: "Anyone practising.", week: "This week: describe your morning", detail: "Corrections come as replies.", hosts: ["u-asha"], members: ["u-harleen"], topics: ["Customs and traditions", "Education"], blurb: "Practise in the open.",
      rules: ["Write in Hindi, however simple.", "Corrections come as replies.", "No correcting without being asked."] },
    { slug: "family-recipes", name: "Family recipes", format: "Circle", memory: "kept", pace: "A prompt a week", contributors: "Members add recipes.", week: "Prompt: a dish you only know by smell", detail: "Recipes as they were taught, measurements optional.", hosts: ["u-harleen"], members: ["u-ananya", "u-meera"], topics: ["Food", "Customs and traditions"], blurb: "Recipes kept the way they were taught.",
      rules: ["Say who taught you.", "Measurements optional, stories welcome.", "Label a family story as Told."] },
  ];
  const cid: Record<string, string> = {};
  for (const c of COMMUNITIES) {
    const existing = await o.Community.where({ slug: c.slug }).first();
    const data = { name: c.name, blurb: c.blurb, format: c.format, memory: c.memory, fadeDays: c.fadeDays ?? null, pace: c.pace, contributors: c.contributors, weekPrompt: c.week, weekDetail: c.detail, rules: c.rules };
    const row = existing ? (await o.Community.where({ id: existing.id }).update(data), existing) : await o.Community.create({ slug: c.slug, ...data });
    cid[c.slug] = row.id;
    for (const t of c.topics) await o.CommunityTopic.create({ communityId: row.id, topicId: topic[t] });
    for (const h of c.hosts) await o.Membership.create({ userId: h, communityId: row.id, isSteward: true, status: "member" });
    for (const m of c.members) await o.Membership.create({ userId: m, communityId: row.id, isSteward: false, status: "member" });
  }

  // Reading Circle threads
  const rc = cid["reading-circle"];
  const th = async (title: string, subtitle: string, position: number, extra: Partial<{ pinned: boolean; isCurrent: boolean; spoiler: boolean; archived: boolean }> = {}) =>
    (await o.CommunityThread.create({ communityId: rc, title, subtitle, position, pinned: !!extra.pinned, isCurrent: !!extra.isCurrent, spoiler: !!extra.spoiler, archived: !!extra.archived })).id;
  const beginner = await th("Beginner's thread", "Pinned · start here if you're new", 0, { pinned: true });
  await th("Chapter 1", "The Salt Road", 1, { archived: true });
  await th("Chapter 2", "The Salt Road", 2, { archived: true });
  await th("Chapter 3", "The Salt Road", 3, { archived: true });
  await th("Previous book: The Monsoon House", "Finished in August", -1, { archived: true });
  const ch4 = await th("Chapter 4", "Current", 4, { isCurrent: true });
  const ch5 = await th("Chapter 5", "Spoilers hidden until you open it", 5, { spoiler: true });
  const translated = await th("Translated edition", "Side thread", 6);
  for (const slug of ["local-ahmedabad", "first-time-managers", "hindi-practice", "family-recipes"]) {
    await o.CommunityThread.create({ communityId: cid[slug], title: "This week", subtitle: "Current", position: 1, isCurrent: true, pinned: false, spoiler: false, archived: false });
  }
  await o.Note.create({ id: "n-beginner", authorId: "u-meera", body: "Welcome. We read one chapter a week and keep notes here, labelled like any post. Start with the chapter 4 thread; the archive has everything before it.", basis: "view", communityId: rc, threadId: beginner, createdAt: ago(20 * D) });
  await o.Note.create({ id: "n1", authorId: "u-rohan", body: "Finished chapter four. The narrator never says she is lonely — you only learn it from what she keeps in the drawer.", basis: "view", communityId: rc, threadId: ch4, createdAt: ago(20 * H) });
  await o.Note.create({ id: "n2", authorId: "u-meera", body: "The drawer appears three times: page 41, page 88 and the last line of the chapter.", basis: "documented", communityId: rc, threadId: ch4, buildsOnId: "n1", createdAt: ago(16 * H) });
  await o.Note.create({ id: "n3", authorId: "u-ezra", body: "Is anyone reading the translated edition? The chapter breaks seem different.", basis: "view", communityId: rc, threadId: ch4, createdAt: ago(9 * H) });
  await o.Note.create({ id: "n-sp1", authorId: "u-harleen", body: "I did not expect the letter to be from her brother. It changes every scene with the drawer.", basis: "view", communityId: rc, threadId: ch5, createdAt: ago(5 * H) });
  await o.Note.create({ id: "n-tr1", authorId: "u-rohan", body: "The translation merges chapters 4 and 5. Page 112 in the translation is where our chapter 5 starts.", basis: "documented", communityId: rc, threadId: translated, createdAt: ago(3 * H) });
  await o.Note.create({ id: "n-ahd1", authorId: "u-nidhi", body: "Saturday walk: Adalaj stepwell at 7 am, meeting at the east gate. Bring water.", basis: "lived", communityId: cid["local-ahmedabad"], threadId: (await o.CommunityThread.where({ communityId: cid["local-ahmedabad"] }).first())!.id, createdAt: ago(26 * H) });
  await o.Note.create({ id: "n-ftm1", authorId: "u-kabir", body: "@ananya might know how designers run critiques without it feeling personal.", basis: "view", communityId: cid["first-time-managers"], threadId: (await o.CommunityThread.where({ communityId: cid["first-time-managers"] }).first())!.id, createdAt: ago(2 * D) });

  // ── posts ──
  await o.Note.create({ id: "p-novel", authorId: "u-rohan", body: "Third novel this year that trusts the reader. Nobody explains the grief; the author shows you the untouched cup on the table.", basis: "view", topicId: topic["Books"], communityId: rc, createdAt: ago(4 * H) });
  await o.Note.create({ id: "p-dal", authorId: "u-harleen", body: "My nani never measured anything. Today I tried her dal by smell alone — the tempering told me when, not the timer. Close, not quite. Next Sunday again.", basis: "lived", topicId: topic["Food"], communityId: cid["family-recipes"], createdAt: ago(2 * H) });
  await o.Note.create({ id: "p-oneonone", authorId: "u-kabir", body: "First 1:1 where I mostly listened. It went better than the ones where I prepared slides.", basis: "lived", topicId: topic["Work and leadership"], createdAt: ago(5 * H) });
  await o.Note.create({ id: "p-jar", authorId: "u-meera", body: "Taught compound interest today with a jar of rice. Half the class got it from the jar, not the formula.", basis: "lived", topicId: topic["Education"], createdAt: ago(1 * D) });
  await o.Note.create({ id: "p-unesco", authorId: "u-nidhi", body: "Rani-ki-Vav in Patan was added to the UNESCO World Heritage List in 2014.", basis: "documented", topicId: topic["Cities"], sourceUrl: "https://whc.unesco.org/en/list/922", sourceType: "Reference work", sourceLocator: "Entry 922", createdAt: ago(3 * D) });
  await o.Note.create({ id: "p-kolam", authorId: "u-rohan", body: "In my family the kolam is skipped for a year after a death. The empty doorstep is how neighbours know.", basis: "told", topicId: topic["Customs and traditions"], createdAt: ago(4 * D) });

  // ── questions ──
  await o.Question.create({ id: "q-fin", askerId: "u-ananya", title: "Should we teach financial literacy in school?", context: "My cousin is 15 and has never seen a payslip. Is school the right place for this, or is it a family job?", topicId: topic["Education"], createdAt: ago(2 * D) });
  await o.Answer.create({ id: "a1", questionId: "q-fin", authorId: "u-meera", relation: "Answers", basis: "lived", body: "I teach Class 11. When we tie it to something they already handle — pocket money, a phone plan — they remember it. When it is a chapter, they forget it by the exam.", createdAt: ago(10 * 60000) });
  await o.Answer.create({ id: "a2", questionId: "q-fin", authorId: "u-kabir", relation: "Answers", basis: "view", body: "Yes, but short and practical: reading a payslip, a loan offer, a scam SMS. Not stock tips.", createdAt: ago(30 * H) });
  await o.Answer.create({ id: "a3", questionId: "q-fin", authorId: "u-harleen", relation: "Builds on", basis: "lived", onAnswerId: "a1", body: "My daughter's school ran a mock-budget week. It worked because parents were asked to join in.", createdAt: ago(20 * H) });
  await o.Answer.create({ id: "a4", questionId: "q-fin", authorId: "u-rohan", relation: "Disagrees", basis: "view", reason: "schools are already overloaded", body: "Families and banks are better placed. A syllabus chapter will be taught to the test and forgotten.", createdAt: ago(18 * H) });
  await o.QuestionFollow.create({ userId: "u-ananya", questionId: "q-fin", following: true, same: false });

  await o.Question.create({ id: "q-greet", askerId: "u-ananya", title: "Why do some families have different ways of greeting elders?", context: "In my family we touch feet. My partner's family folds hands. Neither of us knows why.", topicId: topic["Customs and traditions"], createdAt: ago(21 * D) });
  await o.Answer.create({ id: "g1", questionId: "q-greet", authorId: "u-harleen", relation: "Answers", basis: "told", body: "In our family you touch feet at weddings and fold hands everywhere else. My father says it depends on who taught whom.", createdAt: ago(20 * D) });
  await o.Question.where({ id: "q-greet" }).update({ acceptedAnswerId: "g1" });

  await o.Question.create({ id: "q-adalaj", askerId: "u-ezra", title: "Is Adalaj stepwell open to visitors early on weekends, before the heat?", context: "Planning to go on Saturday with my parents.", topicId: topic["Cities"], communityId: cid["local-ahmedabad"], createdAt: ago(1 * H) });
  await o.Question.create({ id: "q-feedback", askerId: "u-sana", title: "How do you give feedback to someone older than you on your team?", context: "He has been here eight years. I have been a manager for three months.", topicId: topic["Work and leadership"], communityId: cid["first-time-managers"], createdAt: ago(3 * H) });
  await o.Question.create({ id: "q-portfolio", askerId: "u-dev", title: "What's a good first portfolio project for a design student?", context: "Second year, no internships yet.", topicId: topic["Design"], createdAt: ago(6 * H) });
  await o.Question.create({ id: "q-difficult", askerId: "u-kabir", title: "How did you handle your first difficult conversation as a manager?", context: "Looking for what actually worked, not frameworks.", topicId: topic["Work and leadership"], createdAt: ago(9 * D) });
  await o.Answer.create({ questionId: "q-difficult", authorId: "u-sana", relation: "Answers", basis: "lived", body: "I wrote down the one sentence I needed to say and said it first. Everything after was easier.", createdAt: ago(8 * D) });
  await o.Question.create({ id: "q-correct", askerId: "u-dev", title: "Is it rude to correct an elder at work?", context: "", topicId: topic["Customs and traditions"], createdAt: ago(12 * D) });
  await o.Answer.create({ questionId: "q-correct", authorId: "u-asha", relation: "Answers", basis: "view", body: "Not if you ask first and do it privately. The rudeness is in the audience, not the correction.", createdAt: ago(11 * D) });

  // ── the house ──
  await o.Article.create({
    id: "art-rangoli", slug: "rangoli", title: "Why was rangoli drawn with rice flour?", dek: "A doorway drawing that was meant to disappear.",
    topicId: topic["Everyday life"], editorName: "Priya Menon", image: "Photo · kolam at a threshold, mid-morning", readMinutes: 6,
    documented: "Flour designs at the doorway are drawn across much of India, and ants, birds and squirrels do eat them.",
    told: "That the drawing began as a daily meal left for small creatures. Many families explain it this way; the practice is older than the records that could confirm it.",
    carry: "Begin the day by leaving something for someone who can never thank you.",
    related: ["Why are kolams drawn before sunrise?", "Is rangoli the same as alpana?"],
    publishedAt: ago(9 * D), updatedAt: ago(9 * D),
  });
  await o.ArticleParagraph.create({ articleId: "art-rangoli", position: 0, text: "In many homes — especially in the south, where it is called kolam — the morning drawing at the threshold was made with rice flour, and in some homes wheat flour.", sourceNumber: 1 });
  await o.ArticleParagraph.create({ articleId: "art-rangoli", position: 1, text: "It was never meant to last. By midday, ants had carried off the fine lines, and sparrows and squirrels had picked at the rest.", sourceNumber: 2 });
  await o.ArticleSource.create({ id: "src-r1", articleId: "art-rangoli", number: 1, title: "Survey of threshold drawings in Tamil Nadu", type: "Scholarly work", locator: "ch. 2" });
  await o.ArticleSource.create({ id: "src-r2", articleId: "art-rangoli", number: 2, title: "Interview with a kolam practitioner, Madurai", type: "Primary record", locator: "14:20" });
  await o.ArticleCorrection.create({ articleId: "art-rangoli", text: "Added that some homes used wheat flour. Suggested by a reader.", createdAt: ago(9 * D) });
  await o.Response.create({ authorId: "u-harleen", articleId: "art-rangoli", relation: "Adds context", basis: "lived", body: "My grandmother in Chennai still draws hers with rice flour every morning. She calls the ants guests who came early.", createdAt: ago(3 * D) });
  const r2 = await o.Response.create({ authorId: "u-rohan", articleId: "art-rangoli", relation: "Builds on", basis: "told", body: "In my family the kolam is skipped for a year after a death. The empty doorstep is how neighbours know.", createdAt: ago(2 * D) });
  await o.Response.create({ authorId: "u-ezra", articleId: "art-rangoli", relation: "Asks", basis: "asking", anchor: "where it is called kolam", body: "Are the patterns different between Tamil Nadu and Kerala?", createdAt: ago(1 * D) });
  void r2;

  await o.Article.create({
    id: "art-stepwell", slug: "stepwell", title: "Stepwells were water tanks — and public squares", dek: "Built to store water, used as a place to meet.",
    topicId: topic["Cities"], editorName: "Arjun Rao", image: "Photo · Rani-ki-Vav, Patan", readMinutes: 5,
    documented: "Rani-ki-Vav in Patan was inscribed on the UNESCO World Heritage List in 2014.", told: null, carry: null,
    related: ["Is Adalaj stepwell open to visitors early on weekends?"], publishedAt: ago(22 * D),
  });
  await o.ArticleParagraph.create({ articleId: "art-stepwell", position: 0, text: "Across Gujarat and Rajasthan, stepwells stored water, stayed cool through summer, and gave people a shaded place to meet.", sourceNumber: 1 });
  await o.ArticleParagraph.create({ articleId: "art-stepwell", position: 1, text: "Rani-ki-Vav in Patan is a World Heritage Site.", sourceNumber: 1 });
  await o.ArticleSource.create({ id: "src-s1", articleId: "art-stepwell", number: 1, title: "UNESCO World Heritage List — Rani-ki-Vav", type: "Reference work", locator: "entry 922", url: "https://whc.unesco.org/en/list/922" });
  // readers who usually disagree checked it
  for (const u of ["u-meera", "u-rohan", "u-nidhi"]) await o.SourceCheck.create({ userId: u, sourceId: "src-s1", verdict: "Supports it" });

  await o.Article.create({
    id: "art-midnight", slug: "midnight", title: "Did India's independence wait for midnight because of the stars?", dek: "The date came from a law and a viceroy; the hour, many say, from astrologers.",
    topicId: topic["History"], editorName: "Priya Menon", image: "Photo · Parliament House, August 1947", readMinutes: 5,
    documented: "The Indian Independence Act 1947 set 15 August as the appointed day.", told: "That astrologers chose midnight. It is widely repeated; accounts differ on who asked them.", carry: null,
    related: ["How a festival date is set"], publishedAt: ago(40 * D),
  });
  await o.ArticleParagraph.create({ articleId: "art-midnight", position: 0, text: "The Indian Independence Act 1947 named 15 August as the appointed day for the transfer of power.", sourceNumber: 1 });
  await o.ArticleParagraph.create({ articleId: "art-midnight", position: 1, text: "Many accounts say the midnight hour was chosen after astrologers objected to the date; the records confirm the timing, not the reason.", sourceNumber: null });
  await o.ArticleSource.create({ articleId: "art-midnight", number: 1, title: "Indian Independence Act 1947", type: "Primary record", locator: "s. 1(1)" });

  // ── the member's own world (Ananya) ──
  for (const f of ["u-meera", "u-rohan", "u-harleen"]) await o.Follow.create({ followerId: "u-ananya", followeeId: f });
  await o.Follow.create({ followerId: "u-ezra", followeeId: "u-ananya" });
  await o.Helpful.create({ userId: "u-ananya", targetType: "article", targetId: "art-stepwell" });
  await o.Bookmark.create({ userId: "u-ananya", targetType: "article", targetId: "art-rangoli", note: "Read this to Paati on Sunday." });
  await o.Bookmark.create({ userId: "u-ananya", targetType: "note", targetId: "p-jar" });
  await o.Bookmark.create({ userId: "u-ananya", targetType: "note", targetId: "p-dal" });
  const kitchen = await o.Collection.create({ ownerId: "u-ananya", name: "Kitchen memory", visibility: "private" });
  await o.CollectionItem.create({ collectionId: kitchen.id, targetType: "note", targetId: "p-dal" });
  const forRc = await o.Collection.create({ ownerId: "u-ananya", name: "For the Reading Circle", visibility: rc });
  await o.CollectionItem.create({ collectionId: forRc.id, targetType: "note", targetId: "p-novel" });
  await o.Draft.create({ userId: "u-ananya", text: "Why do some families touch the feet of elders and others fold their hands?", intent: "asking", topicName: "Customs and traditions", audience: "public", updatedAt: ago(1 * D) });
  await o.ReadEvent.create({ userId: "u-ananya", targetType: "article", targetId: "art-rangoli", title: "Why was rangoli drawn with rice flour?", readAt: ago(2 * H) });
  await o.ReadEvent.create({ userId: "u-ananya", targetType: "article", targetId: "art-stepwell", title: "Stepwells were water tanks — and public squares", readAt: ago(1 * D) });
  await o.ReadEvent.create({ userId: "u-ananya", targetType: "question", targetId: "q-fin", title: "Should we teach financial literacy in school?", readAt: ago(1 * D + 3 * H) });

  const N = (n: { type: string; actorId?: string | null; text: string; preview?: string; href: string; at: number; replyType?: string; replyId?: string; read?: boolean }) =>
    o.Notification.create({ userId: "u-ananya", type: n.type, actorId: n.actorId ?? null, text: n.text, preview: n.preview ?? null, href: n.href, replyType: n.replyType ?? null, replyId: n.replyId ?? null, deliverAt: ago(n.at), createdAt: ago(n.at), readAt: n.read ? ago(n.at - 60000) : null });
  await N({ type: "Answers", actorId: "u-meera", text: "answered your question “Should we teach financial literacy in school?”", preview: "I teach Class 11. When we tie it to something they already handle…", href: "/q/q-fin", at: 10 * 60000, replyType: "answer", replyId: "a1" });
  await N({ type: "Builds on", actorId: "u-rohan", text: "built on your note in Reading Circle", preview: "“Building on Ananya: the cup and the drawer are the same gesture.”", href: `/c/reading-circle?thread=${ch4}`, at: 2 * H, replyType: "note", replyId: "n1" });
  await N({ type: "Mentions", actorId: "u-kabir", text: "mentioned you in First-time managers", preview: "“Ananya might know how designers run critiques without it feeling personal.”", href: "/c/first-time-managers", at: 2 * D, replyType: "note", replyId: "n-ftm1" });
  await N({ type: "Thanks", actorId: "u-harleen", text: "marked your question helpful and left a note", preview: "“Your question about greeting elders made my father tell a story I had never heard.”", href: "/q/q-greet", at: 3 * D });
  await N({ type: "Communities", text: "Reading Circle · weekly digest", preview: "The chapter 5 thread is open. Spoilers stay hidden until you say you have read it.", href: "/c/reading-circle", at: 3 * D + H });

  console.log("Seeded: 11 people, 5 communities, 7 questions, 3 house pieces.");
  console.log("Sign in as a demo member at /signin (demo sign-in is on in development).");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => db.close());
