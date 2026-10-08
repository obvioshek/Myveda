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
    lead: "Strategic intent is a long-term ambition to win a position beyond today's reach, carried down from vision through mission and goals to measurable objectives.",
    check: [
      ask("Who made the term strategic intent famous, and when?", "Gary Hamel and C. K. Prahalad, in 1989", ["Michael Porter, in 1980", "Henry Mintzberg, in 1987", "Fred R. David, in 1981"], "Hamel and Prahalad's 1989 Harvard Business Review article made the term famous. Porter's 1980 book is about competitive strategy, not intent."),
      ask("A Pune auto-parts maker aims to win export orders worth ₹50 crore a year by March 2029. At which level of the hierarchy is this?", "Objective", ["Goal", "Mission", "Vision"], "It says exactly what, how much and by when. ‘Grow export sales’, with no number or date, would be the goal above it."),
      ask("A board sets an intent its staff see as plainly impossible, and never breaks it into goals. What is the likely result?", "It demoralises people and stays a slogan", ["It motivates people more, the higher it is", "It turns into objectives on its own", "It makes a plan unnecessary"], "A stretch motivates only while people believe it can be reached, and only goals and objectives make it actionable. Higher is not always better."),
    ],
    lens: [
      { pairing: 0, adds: "Let every thought be of rising high; such aims keep their worth even when they fail.", differs: "The couplet is about a person's ambition. Strategic intent is an organisation's competitive aspiration, made concrete through vision, mission, goals and objectives." },
    ],
    reflect: "Think of an organisation you admire. What is its long-term aspiration, and does it seem out of reach of its present resources?",
    summary: {
      points: [
        "Strategic intent (Hamel and Prahalad, 1989): a long-term aspiration with a strong competitive focus.",
        "It stretches resources and competencies, clarifies priorities, focuses effort and motivates people.",
        "Hierarchy: vision, mission, goals, objectives, each supporting the one above.",
        "The intent fixes the destination and stays steady; the plan says how, and changes.",
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
    lead: "A vision says where the organisation wants to be one day; a mission says what it does now, for whom and why, and frames its strategy.",
    check: [
      ask("A mission statement usually has three parts: the purpose, the core values and…", "The main goals", ["The annual budget", "The organisation chart", "The vision"], "Purpose, core values that shape behaviour, and main goals. The vision is a separate statement about the future, not part of the mission."),
      ask("A dairy cooperative's statement reads: ‘Every home in the district drinks fresh, fairly priced milk from its own farmers.’ It has not happened yet. Is this a vision or a mission?", "A vision: it describes a future not yet reached", ["A mission: it names whom the dairy serves", "A mission: it states the dairy's values", "Neither: it has no number or date"], "If a statement describes something not yet reached, it is a vision. Mentioning customers does not make it a mission, which says what the organisation does now."),
      ask("A firm's mission reads ‘We serve customers.’ Which quality of a good mission does it lack most?", "Precision: it is far too broad", ["Brevity: it is too long", "Feasibility: it cannot be done", "Credibility: no one believes it"], "A precise mission is neither too broad nor too narrow. ‘We serve customers’ could describe any firm, so it guides no choice."),
    ],
    lens: [],
    reflect: "Find the mission statement of a company you buy from. Does it say what it does, for whom and what makes it distinctive?",
    summary: {
      points: [
        "Vision: where do we want to be? Future; inspires and gives direction. Clear, realistic, memorable and shared.",
        "Mission: what do we do, for whom and why? Present; defines scope and frames strategy.",
        "A mission has purpose, core values and main goals, and should be feasible, clear, inspiring, precise, distinctive and credible.",
        "Test: already true today, it is a mission; not yet reached, it is a vision.",
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
    lead: "A goal is a broad result the organisation wants; an objective turns it into a SMART target: what, how much and by when.",
    check: [
      ask("In George Doran's 1981 version of SMART, the A stood for…", "Assignable", ["Achievable", "Ambitious", "Accurate"], "Doran's ‘assignable’ meant saying who will do it. ‘Achievable’ is the tempting answer because it now usually stands in its place."),
      ask("A bank branch is told to ‘improve customer service’. Which statement turns this into an objective?", "Cut the average cash-counter wait to 12 minutes by 31 March", ["Make every customer feel welcome at the branch", "Become the best-loved branch in the region", "Improve customer service as much as possible"], "Only this one is specific, measurable and time-bound. The others restate the goal, or a vision, with no number or date."),
      ask("The branch's average wait falls from 20 minutes to 12. By what percentage has it fallen?", "40%", ["8%", "60%", "67%"], "The fall is 20 − 12 = 8 minutes, and 8 ÷ 20 = 40%. 8% mistakes the minutes for a percentage; 60% is 12 ÷ 20, the share that remains."),
    ],
    lens: [
      { pairing: 1, adds: "A warning that many who did not know their own strength set out in a rush of zeal and broke down halfway.", differs: "The couplet is about a person's strength and zeal. Objectives add specific, measurable, time-bound targets set by top management for an organisation." },
    ],
    reflect: "Take a goal you have set for yourself. Rewrite it so that it passes the SMART test.",
    summary: {
      points: [
        "Goals are precise, measurable, realistic yet challenging, time-bound, and include non-financial results.",
        "Objectives are set by top management, multiple, short and long term, flexible, feasible and operational.",
        "SMART: specific, measurable, achievable, realistic, time-bound (Doran, 1981, had ‘assignable’).",
        "One number invites gaming; pair targets, such as waiting time with errors.",
      ],
      memory: "Goals make the mission concrete; objectives make goals measurable.",
    },
  },
];

export default lessons;
