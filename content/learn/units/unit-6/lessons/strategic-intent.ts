import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "strategic-intent-and-hierarchy",
    name: "Strategic intent and the hierarchy of purpose",
    intro: "A long-term aspiration that stretches resources, expressed from vision down to objectives.",
    before: {
      q: "Should strategic intent be limited to what present resources can already achieve?",
      choices: [
        { label: "Yes, stay safe", reveal: "Not quite. Strategic intent stretches resources and core competencies toward goals that may at first seem out of reach." },
        { label: "No, stretch", reveal: "Right. Strategic intent stretches resources and core competencies toward goals that may at first seem out of reach, which clarifies priorities and motivates people." },
      ],
    },
    lead: "Strategic intent is a long-term aspiration to win a desired position, expressed through vision, mission, goals and objectives.",
    check: [
      ask("Who made the term strategic intent famous?", "Gary Hamel and C. K. Prahalad", ["Michael Porter", "Henry Mintzberg", "Fred R. David"], "Hamel and Prahalad (1989): a long-term aspiration with a strong competitive focus."),
      ask("Which level of the hierarchy answers ‘What exactly, by how much and by when?’", "Objectives", ["Vision", "Mission", "Goals"], "Objectives are specific, measurable, time-bound targets."),
      ask("Which level answers ‘Why do we exist, what do we do and for whom?’", "Mission", ["Vision", "Goals", "Objectives"], "Vision asks where we want to be; mission states the purpose now."),
    ],
    lens: [
      { pairing: 0, adds: "Let every thought be of rising high; such aims keep their worth even when they fail.", differs: "The couplet is about a person's ambition. Strategic intent is an organisation's competitive aspiration, made concrete through vision, mission, goals and objectives." },
    ],
    reflect: "Think of an organisation you admire. What is its long-term aspiration, and does it seem out of reach of its present resources?",
    summary: {
      points: [
        "Strategic intent (Hamel and Prahalad, 1989): a long-term aspiration with a strong competitive focus.",
        "It stretches resources, clarifies priorities, focuses effort and motivates people.",
        "Hierarchy: vision, mission, goals, objectives, each supporting the next.",
      ],
      memory: "Vision, mission, goals, objectives: from aspiration to target.",
    },
  },
  {
    blockId: "vision-and-mission",
    name: "Vision and mission",
    intro: "Where we want to be, and what we do, for whom and why.",
    before: {
      q: "Is a mission statement about the organisation's future?",
      choices: [
        { label: "The future", reveal: "That is the vision. The mission is about the present: what the organisation does, whom it serves and what makes it distinctive." },
        { label: "The present", reveal: "Right. The mission is about the present: what the organisation does, whom it serves and what makes it distinctive. The vision looks to the future." },
      ],
    },
    lead: "The vision inspires and gives direction for the future; the mission defines present scope and purpose and frames strategy.",
    check: [
      ask("Which is a feature of an effective vision?", "Short enough to remember", ["Kept secret from staff", "Changed every year", "As broad as possible"], "It should also be clear, realistic, in harmony with culture and shared by everyone."),
      ask("A mission statement usually has three parts: the purpose, the core values and…", "The main goals", ["The annual budget", "The organisation chart", "The share price"], "Purpose, core values that shape behaviour, and main goals."),
      ask("A good mission should be precise, meaning…", "Neither too broad nor too narrow", ["As long as possible", "Written by each employee", "Limited to financial results"], "It should also be feasible, clear, inspiring, distinctive and credible."),
    ],
    lens: [],
    reflect: "Find the mission statement of a company you buy from. Does it say what it does, for whom and what makes it distinctive?",
    summary: {
      points: [
        "Vision: where do we want to be? Future; inspires and gives direction.",
        "Mission: what do we do, for whom and why? Present; defines scope and frames strategy.",
        "A mission has purpose, core values and main goals, and should be feasible, clear, precise and credible.",
      ],
      memory: "Vision looks ahead; mission says what we do now.",
    },
  },
  {
    blockId: "goals-and-objectives",
    name: "Goals and objectives",
    intro: "Goals make the mission concrete; objectives make goals measurable.",
    before: {
      q: "Should objectives cover only financial results?",
      choices: [
        { label: "Only financial", reveal: "No. Long-term objectives cover areas such as competitive position, technological leadership, employee relations and corporate image as well as profitability." },
        { label: "Wider than that", reveal: "Right. Long-term objectives cover areas such as competitive position, technological leadership, employee relations and corporate image as well as profitability." },
      ],
    },
    lead: "Goals are desired future states; objectives are specific targets that should be SMART.",
    check: [
      ask("In SMART, the T stands for…", "Time-bound", ["Targeted", "Tested", "Transparent"], "Specific, measurable, achievable, realistic and time-bound."),
      ask("In George Doran's 1981 version, the A stood for…", "Assignable", ["Achievable", "Ambitious", "Accurate"], "‘Achievable’ now usually stands where Doran had ‘assignable’."),
      ask("Deciding where to locate a store and its launch marketing plan is an example of…", "A short-term objective", ["A vision", "A long-term objective", "A mission"], "Short-term objectives are immediate steps that support the long-term ones."),
    ],
    lens: [
      { pairing: 1, adds: "A warning that many who did not know their own strength set out in a rush of zeal and broke down halfway.", differs: "The couplet is about a person's strength and zeal. Objectives add specific, measurable, time-bound targets set by top management for an organisation." },
    ],
    reflect: "Take a goal you have set for yourself. Rewrite it so that it passes the SMART test.",
    summary: {
      points: [
        "Goals are precise, measurable, realistic yet challenging, time-bound, and include non-financial results.",
        "Objectives are set by top management, multiple, short and long term, flexible, feasible and operational.",
        "SMART: specific, measurable, achievable, realistic, time-bound.",
      ],
      memory: "Goals make the mission concrete; objectives make goals measurable.",
    },
  },
];

export default lessons;
