import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "workforce-diversity-and-its-dimensions",
    name: "Workforce diversity and its dimensions",
    intro: "Recognising and respecting differences among employees.",
    before: {
      q: "Is tolerating differences enough to manage diversity?",
      choices: [
        { label: "Yes", reveal: "Diversity is more than tolerance: it means inclusion, equal opportunity and respect." },
        { label: "No", reveal: "Right. Diversity means inclusion, equal opportunity and respect, not mere tolerance." },
      ],
    },
    lead: "Workforce diversity means people at work differ in many ways and are treated fairly: inclusion, equal opportunity and respect, not mere tolerance.",
    check: [
      ask("Flexible schedules, attire and prayer facilities address which dimension?", "Religious beliefs", ["Disability", "Age and generation", "Socioeconomic background"], "Prayer facilities and attire point to religion. Disability calls for assistive tools and accessibility instead."),
      ask("A bank branch holds every team event on a Saturday evening. Older staff with family duties never attend. Which part of managing diversity is missing?", "Inclusion: designing for every group, not one", ["A business link to performance", "Respect, by banning discrimination", "Equal pay for equal work"], "Nobody was barred, so it is not a breach of a rule against discrimination. The event was simply built around one group, which is a failure of inclusion."),
      ask("A firm has hired staff from many backgrounds, but only one group speaks in meetings or gets promoted. What is the best judgement?", "It has diversity but not inclusion", ["It has inclusion but not diversity", "It has neither diversity nor inclusion", "It has managed diversity well"], "Diversity is the mix of people; inclusion is whether each is heard and can progress. The mix is there, so saying it has no diversity is wrong."),
    ],
    lens: [
      { pairing: 0, adds: "A shared core that the wise express in many ways.", differs: "The hymn is about naming the divine. Workforce diversity is about fair treatment of real differences at work, so the link is a reading." },
      { pairing: 3, adds: "A reformer's case that the categories used to exclude people were never real.", differs: "The Guru dissolves the categories. Diversity management keeps them in view so that no one is treated unfairly because of them." },
    ],
    reflect: "Which dimension of diversity is least visible where you work or study?",
    summary: {
      points: [
        "Diversity: differences in age, gender, race, religion, ethnicity, ability and background; in India also language, region and caste.",
        "Managing it: fairness and equity, inclusion, respect, a business link.",
        "Surface-level differences are seen at once; deep-level ones (values, personality) show over time.",
        "Diversity is the mix; inclusion is whether the mix is heard and valued.",
        "Benefits are not automatic: diverse teams can also bring more conflict.",
      ],
      memory: "Inclusion, equal opportunity, respect.",
    },
  },
  {
    blockId: "techniques-for-managing-diversity",
    name: "Techniques for managing diversity",
    intro: "Seven techniques, and how groups include or exclude.",
    before: {
      q: "Can a close-knit friendly group still exclude people?",
      choices: [
        { label: "No", reveal: "It can. In-groups give belonging to members and, by the same token, exclusion to out-groups." },
        { label: "Yes", reveal: "Right. In-groups create belonging for some and exclusion for others." },
      ],
    },
    lead: "Diversity is managed through seven techniques, from awareness to firm rules against discrimination and harassment, and by watching who groups include.",
    check: [
      ask("Addressing hidden bias and the glass ceiling belongs to which technique?", "Ending discrimination", ["Raising awareness", "Special care programmes", "Diverse committees"], "The glass ceiling is a barrier to promotion, so removing it is ending discrimination. Raising awareness works through training and discussion, not through changing who gets promoted."),
      ask("At a plant, supervisors give the skilled jobs to the men they share tea with. The new women operators are left out. What is this?", "An in-group and out-group at work", ["A formal group doing its task", "Social loafing", "A relationship role"], "Belonging for some and exclusion for others is the in-group and out-group effect. A formal group is one the organisation sets up for a task."),
      ask("With one year's budget, which measure is most likely to raise the share of women in skilled jobs?", "A mentoring scheme with a committee reviewing job allocation", ["A one-off awareness training for all staff", "A poster campaign on respect", "A diversity day once a year"], "Research on US employers found that making someone responsible, and mentoring, did more than training alone. Training is tempting, but on its own it changed little."),
    ],
    lens: [
      { pairing: 1, adds: "Counting people as kin and not kin is called small-minded; the whole earth is a family.", differs: "The verse is a moral teaching. Managing diversity uses specific techniques and rules, such as zero tolerance for harassment." },
    ],
    reflect: "Which of the seven techniques does your organisation do best, and which not at all?",
    summary: {
      points: [
        "Techniques: awareness, shared culture, special care, career development, ending discrimination, preventing harassment, diverse committees.",
        "Glass ceiling: an invisible barrier to the top jobs.",
        "In-groups and out-groups create belonging and exclusion.",
        "Group roles: task (planner), relationship (motivator), individual (dominator).",
        "Equity can need different arrangements; responsibility and mentoring beat training alone.",
      ],
      memory: "Aware, share, care, develop, end bias, protect, include.",
    },
  },
  {
    blockId: "cross-cultural-behaviour-and-hofstede",
    name: "Cross-cultural behaviour and Hofstede",
    intro: "How national culture shapes behaviour at work.",
    before: {
      q: "Would the same management style work equally well in Japan and Sweden?",
      choices: [
        { label: "Yes", reveal: "Hofstede's research suggests not: Japan scores high on masculinity (competition), Sweden low (cooperation and quality of life)." },
        { label: "Probably not", reveal: "Right. Hofstede found large differences, such as Japan's competitiveness against Sweden's emphasis on cooperation." },
      ],
    },
    lead: "Five of Hofstede's dimensions describe how national cultures differ at work; a sixth, indulgence versus restraint, was added in 2010.",
    check: [
      ask("Which dimension concerns how much hierarchy and authority are accepted?", "Power distance", ["Uncertainty avoidance", "Individualism", "Time orientation"], "Power distance measures acceptance of unequal power. Uncertainty avoidance is about comfort with risk and ambiguity, not about hierarchy."),
      ask("A Swedish manager in Pune asks her team to challenge her in meetings, and gets silence. Which dimension best explains the gap?", "Power distance", ["Masculinity and femininity", "Uncertainty avoidance", "Time orientation"], "India scores high on power distance and Sweden low, so juniors expect the boss to decide. Masculinity is about competition against care, not about who speaks up to a boss."),
      ask("An Indian colleague argues openly with every manager. What does this tell you about Hofstede's scores?", "Nothing is wrong: the scores are national averages, not rules for individuals", ["Hofstede's India data must be wrong", "The colleague is not really Indian in outlook", "Power distance applies only to managers"], "Hofstede warned against reading individuals from country scores. Concluding that the data is wrong confuses an average with a description of everyone."),
    ],
    lens: [
      { pairing: 2, adds: "An instruction to examine the customs of regions, guilds and families before settling a matter.", differs: "Manu writes about settling disputes in a kingdom. Cross-cultural management is about working effectively across nations." },
    ],
    reflect: "Where would your own culture sit on each of these five Hofstede dimensions?",
    summary: {
      points: [
        "Cross-cultural OB: how cultural differences affect behaviour in multicultural workplaces.",
        "Hofstede (IBM surveys; Culture's Consequences, 1980): power distance, uncertainty avoidance, individualism, masculinity, time orientation.",
        "Scores are national averages, not descriptions of individuals.",
        "Criticism: one company, old data, and a nation is not always one culture.",
      ],
      memory: "P, U, I, M, T.",
    },
  },
  {
    blockId: "culture-shock-and-cross-cultural-training",
    name: "Culture shock and cross-cultural training",
    intro: "Adapting to an unfamiliar culture.",
    before: {
      q: "Does culture shock come only from not knowing the language?",
      choices: [
        { label: "Yes", reveal: "Language is one cause. New customs and emotional stress are the others." },
        { label: "Not only", reveal: "Right. Language barriers, new customs and emotional stress all cause it." },
      ],
    },
    lead: "Culture shock is the stress of adapting to a new culture; it often follows a U-curve and is reduced by training, adjustment support and integration.",
    check: [
      ask("Understanding one's own cultural assumptions is which training area?", "Self-awareness", ["Host-country knowledge", "Role clarification", "Conflict resolution"], "Self-awareness looks inward at your own assumptions. Host-country knowledge looks outward at the new country's customs and workplace practice."),
      ask("Three months into a posting abroad, an engineer is irritable and homesick, though his work is going well. Which stage of the U-curve is he in?", "Crisis", ["Honeymoon", "Adjustment", "Mastery"], "Frustration after the early excitement marks the crisis, the low point of the U. Adjustment comes later, when he starts learning the new rules and recovers."),
      ask("A firm is planning support for staff posted abroad. Which order of support follows the chapter's sequence?", "Training before departure, support during the crisis, then help to integrate", ["Integration first, then training before the next posting", "Support only once the person reports a problem", "Training only after the person has fully settled in"], "The sequence is training, then adjustment support, then integration. Waiting for problems to be reported misses the point of preparing people before the crisis."),
    ],
    lens: [],
    reflect: "If you were posted abroad next month, which training area would you need most?",
    summary: {
      points: [
        "Culture shock: difficulty adapting to an unfamiliar culture; caused by language, customs and stress.",
        "U-curve: honeymoon, crisis, adjustment, mastery; research support is weak, so treat it as a warning.",
        "Reduced by training, adjustment support and integration.",
        "Training areas: self-awareness, host-country knowledge, role clarification, intercultural communication, conflict resolution.",
        "Reverse culture shock comes on returning home.",
      ],
      memory: "Train, support, integrate.",
    },
  },
];

export default lessons;
