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
    lead: "Diversity means inclusion, equal opportunity and respect, and it brings innovation and balanced decisions.",
    check: [
      ask("Flexible schedules, attire and prayer facilities address which dimension?", "Religious beliefs", ["Disability", "Age and generation", "Socioeconomic background"], "Disability calls for assistive tools and accessibility."),
      ask("Which is one of the four parts of managing diversity?", "Inclusion: valuing different identities", ["Uniformity: one way of working", "Assimilation: everyone the same", "Separation: distinct teams"], "The four are fairness and equity, inclusion, respect and a business link."),
    ],
    lens: [
      { pairing: 0, adds: "A shared core that the wise express in many ways.", differs: "The hymn is about naming the divine. Workforce diversity is about fair treatment of real differences at work, so the link is a reading." },
      { pairing: 3, adds: "A reformer's case that the categories used to exclude people were never real.", differs: "The Guru dissolves the categories. Diversity management keeps them in view so that no one is treated unfairly because of them." },
    ],
    reflect: "Which dimension of diversity is least visible where you work or study?",
    summary: {
      points: [
        "Diversity: differences in age, gender, race, religion, ethnicity, ability and background.",
        "Managing it: fairness and equity, inclusion, respect, a business link.",
        "Dimensions include race, age, gender, sexual orientation, religion, disability and socioeconomic background.",
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
    lead: "Diversity is managed through awareness, shared culture, care, career support and firm rules against discrimination.",
    check: [
      ask("Addressing hidden bias and the glass ceiling belongs to which technique?", "Ending discrimination", ["Raising awareness", "Special care programmes", "Diverse committees"], "Raising awareness is through training, storytelling and discussion."),
      ask("Which group role is the dominator?", "An individual role", ["A task role", "A relationship role", "A formal role"], "Task roles plan; relationship roles motivate."),
    ],
    lens: [
      { pairing: 1, adds: "Counting people as kin and not kin is called small-minded; the whole earth is a family.", differs: "The verse is a moral teaching. Managing diversity uses specific techniques and rules, such as zero tolerance for harassment." },
    ],
    reflect: "Which of the seven techniques does your organisation do best, and which not at all?",
    summary: {
      points: [
        "Techniques: awareness, shared culture, special care, career development, ending discrimination, preventing harassment, diverse committees.",
        "In-groups and out-groups create belonging and exclusion.",
        "Group roles: task (planner), relationship (motivator), individual (dominator).",
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
      ask("Which dimension concerns how much hierarchy and authority are accepted?", "Power distance", ["Uncertainty avoidance", "Individualism", "Time orientation"], "High power distance accepts hierarchy; low prefers equality."),
      ask("In the chapter's examples, which country is low on uncertainty avoidance?", "Singapore", ["France", "Japan", "China"], "France is high: structure and risk avoidance."),
    ],
    lens: [
      { pairing: 2, adds: "An instruction to examine the customs of regions, guilds and families before settling a matter.", differs: "Manu writes about settling disputes in a kingdom. Cross-cultural management is about working effectively across nations." },
    ],
    reflect: "Where would your own culture sit on each of these five Hofstede dimensions?",
    summary: {
      points: [
        "Cross-cultural OB: how cultural differences affect behaviour in multicultural workplaces.",
        "Hofstede: power distance, uncertainty avoidance, individualism, masculinity, time orientation.",
        "Benefits: better cooperation, fewer misunderstandings, greater global competitiveness.",
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
    lead: "Culture shock is reduced by training, adjustment support and integration.",
    check: [
      ask("Understanding one's own cultural assumptions is which training area?", "Self-awareness", ["Host-country knowledge", "Role clarification", "Conflict resolution"], "Host-country knowledge covers customs and workplace practice."),
      ask("In what order is culture shock reduced?", "Training, adjustment support, integration", ["Integration, training, support", "Support, integration, training", "Training, integration, support"], "That is the sequence the chapter gives."),
    ],
    lens: [],
    reflect: "If you were posted abroad next month, which training area would you need most?",
    summary: {
      points: [
        "Culture shock: difficulty adapting to an unfamiliar culture; caused by language, customs and stress.",
        "Reduced by training, adjustment support and integration.",
        "Training areas: self-awareness, host-country knowledge, role clarification, intercultural communication, conflict resolution.",
      ],
      memory: "Train, support, integrate.",
    },
  },
];

export default lessons;
