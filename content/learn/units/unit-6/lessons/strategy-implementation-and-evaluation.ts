import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "strategy-implementation",
    name: "Strategy implementation",
    intro: "Turning a formulated strategy into actions, tasks and programmes.",
    before: {
      q: "Once a good strategy is formulated, does success follow by itself?",
      choices: [
        { label: "Yes", reveal: "No. Implementation turns the strategy into concrete actions; when it fails, resources are wasted and the organisation drifts." },
        { label: "No", reveal: "Right. Implementation turns the strategy into concrete actions; when it fails, resources are wasted and the organisation drifts." },
      ],
    },
    lead: "Implementation bridges planning and results by turning strategy into actions, tasks and programmes.",
    check: [
      ask("Chandler's finding from the history of large American firms was that…", "Structure follows strategy", ["Strategy follows structure", "Culture follows pay", "Budgets follow sales"], "Implementation includes designing a structure that fits the strategy."),
      ask("Compared with formulation, implementation is mainly…", "Operational, needing motivation, coordination and leadership", ["Intellectual, needing analysis and intuition", "Done before any action", "A task for one analyst"], "Formulation positions forces before action; implementation manages them during action."),
      ask("Which framework serves as a checklist for implementation alignment?", "McKinsey 7-S", ["BCG matrix", "PESTEL", "Ansoff matrix"], "The 7-S checks that the organisation's elements are aligned."),
    ],
    lens: [
      { pairing: 0, adds: "Saying is easy for anyone; doing as one has said is hard.", differs: "The couplet is about a person's word and deed. Implementation adds the organisational work of structure, resources, policies, people, culture and reward systems." },
    ],
    reflect: "Think of a plan announced by an organisation you know that never quite happened. Where did implementation break down?",
    summary: {
      points: [
        "Implementation turns strategy into actions, tasks and programmes.",
        "It involves structure, resources, policies, people, culture, leadership, and information and reward systems.",
        "Formulation is intellectual and before action; implementation is operational and during action.",
      ],
      memory: "A strategy is only as good as its execution.",
    },
  },
  {
    blockId: "challenges-and-forms-of-implementation",
    name: "Challenges and forms of implementation",
    intro: "Where execution usually goes wrong, and the three forms it takes.",
    before: {
      q: "If a strategy fails, is the plan usually the only thing to blame?",
      choices: [
        { label: "Usually", reveal: "Often it is the execution: unclear goals, poor alignment, weak training, too few resources, poor communication, no follow-through or no measures." },
        { label: "Not usually", reveal: "Right. Many failures come from execution: goals, alignment, training, resources, communication, follow-through and measures." },
      ],
    },
    lead: "Execution fails in predictable ways, and it runs through structure, leadership and functional plans.",
    check: [
      ask("OKRs and SMART goals are remedies for…", "Poor goal-setting", ["Lack of resources", "Lack of follow-through", "Ineffective training"], "One goal-setting method across the organisation gives clarity on priorities."),
      ask("Which form of implementation centres on leadership?", "Behavioural", ["Structural", "Functional and operational", "Financial"], "Leadership is the key factor in implementation."),
      ask("Short-term game plans for production, finance, marketing and personnel belong to…", "Functional and operational implementation", ["Structural implementation", "Behavioural implementation", "Corporate strategy"], "They spell out how the grand strategy is carried out in each area."),
    ],
    lens: [],
    reflect: "Think of a change your school, college or workplace announced that never quite happened. Which of the nine challenges explains it best?",
    summary: {
      points: [
        "Common challenges: weak strategy, poor goals, misalignment, poor training, lack of resources, poor communication, no follow-through, people not connected, no measures.",
        "‘You manage what you measure’: set measurable goals and leading indicators.",
        "Three forms: structural, behavioural (leadership) and functional and operational.",
      ],
      memory: "Clear goals, alignment, training, resources, communication, follow-through, measures.",
    },
  },
  {
    blockId: "approaches-to-implementation",
    name: "Five approaches to implementation",
    intro: "Five ways chief executives go about implementing strategy.",
    before: {
      q: "Are commander, collaborative and cultural best called challenges of implementation?",
      choices: [
        { label: "Challenges", reveal: "No. The source sheet lists four of them under ‘challenges’, but Bourgeois and Brodwin described them as approaches, and there are five." },
        { label: "Approaches", reveal: "Right. Bourgeois and Brodwin (1984) described five approaches: commander, organisational change, collaborative, cultural and crescive." },
      ],
    },
    lead: "Chief executives implement strategy through the commander, organisational change, collaborative, cultural or crescive approach.",
    check: [
      ask("In which approach does strategy ‘grow’ from ideas proposed by lower-level employees?", "Crescive", ["Commander", "Collaborative", "Organisational change"], "Top management judges and supports the ideas."),
      ask("What is the weakness of the commander approach?", "It separates thinkers from doers", ["It is very slow", "It loosens top-down control", "It suits only educated staff"], "It is clear and quick but may lack commitment."),
      ask("Managers at different levels formulating the strategy together is…", "Collaborative", ["Cultural", "Commander", "Crescive"], "It brings more commitment and better information, but is slower."),
    ],
    lens: [
      { pairing: 1, adds: "Those who plan will gain what they planned, as they planned it, if they are firm of will.", differs: "The couplet speaks of an individual's resolve. The five approaches describe how a leader builds commitment in others, from instruction to empowerment." },
    ],
    reflect: "Think of a team you have been part of. Which of the five approaches did its leader use, and how committed were people?",
    summary: {
      points: [
        "Commander and organisational change: top management decides and drives it through.",
        "Collaborative: managers formulate together; cultural: employees empowered, managers coach.",
        "Crescive: strategy grows from lower-level ideas.",
      ],
      memory: "Commander, change, collaborative, cultural, crescive.",
    },
  },
  {
    blockId: "applying-the-7s-model",
    name: "Applying the McKinsey 7-S model",
    intro: "Using the seven S's to carry a strategy through.",
    before: {
      q: "Can a firm change its strategy without touching its structure or skills?",
      choices: [
        { label: "Yes", reveal: "Rarely. The seven elements are interdependent, so a change in one usually needs changes in the others." },
        { label: "Rarely", reveal: "Right. A change in one element affects the others, so they must be realigned together." },
      ],
    },
    lead: "The 7-S model finds misfits among seven elements and guides their realignment.",
    check: [
      ask("The first step in using the 7-S model is to…", "Identify the areas that are not aligned", ["Make the changes", "Hire consultants", "Review continuously"], "The steps are identify, design, plan, change, review."),
      ask("‘Is decision-making centralised or decentralised?’ is a question about…", "Structure", ["Style", "Shared values", "Skills"], "Structure covers divisions, hierarchy, coordination and where decisions are made."),
      ask("Compared with the hard elements, the soft elements are…", "Harder to manage but more likely to give sustained advantage", ["Easier to manage and less important", "Unimportant during a merger", "The same as systems"], "The soft elements are the foundation of the organisation."),
    ],
    lens: [],
    reflect: "Choose one element of the 7-S model in an organisation you know. If its strategy changed tomorrow, what would have to change in that element?",
    summary: {
      points: [
        "Uses: organisational change, implementing a new strategy, anticipating future change, aligning units in a merger.",
        "Each element has diagnostic questions; all seven deserve equal attention.",
        "Steps: identify misalignment, design the optimum, plan changes, make them, review continuously.",
      ],
      memory: "Find the misfits, design the fit, plan, change, keep reviewing.",
    },
  },
  {
    blockId: "strategy-evaluation-and-control",
    name: "Strategy evaluation and control",
    intro: "Reviewing, measuring and correcting while the strategy runs.",
    before: {
      q: "Are financial results the only test of a strategy?",
      choices: [
        { label: "Only financial", reveal: "No. The balanced scorecard adds customer, internal business process and learning and growth perspectives to the financial one." },
        { label: "Not only", reveal: "Right. The balanced scorecard adds customer, internal business process and learning and growth perspectives to the financial one." },
      ],
    },
    lead: "Evaluation reviews the premises, measures performance and corrects the course; strategic control keeps watch as the strategy runs.",
    check: [
      ask("Checking whether the strategy's assumptions are still valid is…", "Premise control", ["Implementation control", "Strategic surveillance", "Special alert control"], "Schreyögg and Steinmann (1987) named four kinds of strategic control."),
      ask("A rapid response to a sudden, unexpected event is…", "Special alert control", ["Premise control", "Implementation control", "Strategic surveillance"], "Strategic surveillance is a broad watch for anything that may affect the strategy."),
      ask("‘Can we continue to improve and create value?’ is the question of which perspective?", "Learning and growth", ["Financial", "Customer", "Internal business process"], "Kaplan and Norton's balanced scorecard (1992)."),
    ],
    lens: [
      { pairing: 2, adds: "The physician examines the disease, then its cause, then the remedy, and acts accordingly.", differs: "The couplet is about medicine. Strategy evaluation applies the same order to reviewing premises, measuring performance and taking corrective action in an organisation." },
    ],
    reflect: "Pick an organisation you know. Which balanced scorecard perspective do you think it neglects?",
    summary: {
      points: [
        "Fred David: review the factors, measure performance, take corrective action.",
        "Strategic control: premise, implementation, surveillance, special alert.",
        "Balanced scorecard: financial, customer, internal process, learning and growth.",
      ],
      memory: "Review the premises, measure the results, correct the course.",
    },
  },
];

export default lessons;
