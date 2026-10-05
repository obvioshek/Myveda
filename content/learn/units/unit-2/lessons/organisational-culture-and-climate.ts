import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-organisational-culture-is",
    name: "What organisational culture is",
    intro: "Shared meaning that sets one organisation apart.",
    before: {
      q: "Can two companies in the same industry, with the same products, have different cultures?",
      choices: [
        { label: "No", reveal: "They can. Culture is a system of shared meaning that distinguishes one organisation from another, whatever they make." },
        { label: "Yes", reveal: "Right. Culture is the shared meaning that distinguishes one organisation from another." },
      ],
    },
    lead: "Culture is the shared values, beliefs and norms that shape how things are done.",
    check: [
      ask("Which dimension of culture concerns the effect of decisions on employees?", "People orientation", ["Outcome orientation", "Team orientation", "Stability"], "Outcome orientation concerns results and targets."),
      ask("Which dimension is about precision, analysis and thoroughness?", "Attention to detail", ["Innovation and risk-taking", "Aggressiveness", "Stability"], "One of the seven dimensions."),
    ],
    lens: [],
    reflect: "Pick three of the seven dimensions. How would you rate your organisation on each?",
    summary: {
      points: [
        "Culture: a system of shared meaning that distinguishes one organisation from another.",
        "Seven dimensions: innovation and risk-taking, attention to detail, outcome orientation, people orientation, team orientation, aggressiveness, stability.",
      ],
      memory: "Culture is how things are done here.",
    },
  },
  {
    blockId: "strength-and-functions-of-culture",
    name: "Strength and functions of culture",
    intro: "Dominant and subcultures, strong and weak, and what culture does.",
    before: {
      q: "Can a sales team have a culture slightly different from the company's?",
      choices: [
        { label: "No", reveal: "It can. Subcultures form within departments, locations or professions, mixing the organisation's values with local experience." },
        { label: "Yes", reveal: "Right. That is a subculture: organisational values combined with local experience." },
      ],
    },
    lead: "A strong culture brings loyalty and consistency; culture also tells people who they are and how to behave.",
    check: [
      ask("A weak culture tends to bring…", "Less unity and disconnected employees", ["Greater loyalty", "Consistent behaviour", "Clear norms"], "Strong cultures bring loyalty and consistency."),
      ask("Which function of culture acts as social glue?", "Stability", ["Boundary definition", "Identity", "Behaviour guide"], "It holds the organisation together."),
    ],
    lens: [],
    reflect: "Is the culture where you work or study strong or weak? What tells you?",
    summary: {
      points: [
        "Dominant culture: core values most accept. Subcultures: departmental or local variants.",
        "Strong culture: shared beliefs, clear norms, loyalty. Weak culture: fragmented beliefs, less unity.",
        "Functions: boundary definition, identity, commitment, stability, behaviour guide.",
      ],
      memory: "Boundary, identity, commitment, stability, guide.",
    },
  },
  {
    blockId: "how-culture-is-built-and-kept",
    name: "How culture is built and kept",
    intro: "Founders, leaders, reinforcement and socialisation.",
    before: {
      q: "Does a new employee's adjustment to culture start on their first day?",
      choices: [
        { label: "Yes", reveal: "It starts earlier. In the pre-arrival stage, expectations form through interviews, websites and reviews." },
        { label: "Before that", reveal: "Right. Socialisation begins with pre-arrival, then encounter, then metamorphosis." },
      ],
    },
    lead: "Founders start a culture, leaders model it, and selection, training and rewards keep it going.",
    check: [
      ask("In which socialisation stage do expectations meet reality through orientation and onboarding?", "Encounter", ["Pre-arrival", "Metamorphosis", "Selection"], "Metamorphosis is when the employee adapts and fits in."),
      ask("Which is NOT a reinforcement mechanism?", "The weather", ["Selection", "Performance evaluation", "Promotion"], "Selection, training, evaluation, rewards and promotion reinforce culture."),
    ],
    lens: [
      { pairing: 0, adds: "When the leader is active, the people are active; when careless, careless.", differs: "Kauṭilya speaks of a ruler and his servants. Culture theory adds founders' philosophy, reinforcement systems and socialisation." },
    ],
    reflect: "What does your manager do, not say, that has shaped how your team works?",
    summary: {
      points: [
        "Built by the founder's philosophy and top management as role models.",
        "Kept by selection, training, performance evaluation, rewards and promotion.",
        "Socialisation: pre-arrival, encounter, metamorphosis. A positive culture still needs objective standards.",
      ],
      memory: "Pre-arrival, encounter, metamorphosis.",
    },
  },
  {
    blockId: "types-of-culture-and-climate",
    name: "Types of culture, and climate",
    intro: "Clan, adhocracy, market, hierarchy, and how work feels.",
    before: {
      q: "Is culture the same thing as how it feels to work somewhere?",
      choices: [
        { label: "Yes", reveal: "Not quite. Culture is shared values and meaning; climate is shared perceptions and feelings about the workplace now." },
        { label: "Not quite", reveal: "Right. Culture asks “How do we do things here?” Climate asks “What does it feel like to work here?”" },
      ],
    },
    lead: "Culture is deep and lasting; climate is the current feel of the workplace.",
    check: [
      ask("A dynamic, entrepreneurial culture that values innovation is…", "Adhocracy", ["Clan", "Market", "Hierarchy"], "Adhocracy creates."),
      ask("Which is more immediate and changeable?", "Climate", ["Culture", "Both equally", "Neither"], "Culture is deep-rooted and relatively stable."),
    ],
    lens: [],
    reflect: "Which of the four culture types fits your organisation best, and what is its climate like this month?",
    summary: {
      points: [
        "Clan collaborates, adhocracy creates, market competes, hierarchy controls.",
        "Climate: shared perceptions of the workplace; people-, rule-, innovation- or goal-oriented.",
        "Culture is values and meaning, long-term; climate is perceptions and feelings, current.",
      ],
      memory: "Clan collaborates, adhocracy creates, market competes, hierarchy controls.",
    },
  },
];

export default lessons;
