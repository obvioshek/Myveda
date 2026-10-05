import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "functions-of-management-posdc",
    name: "The functions of management",
    intro: "Five linked functions that repeat in a cycle, with coordination running through them.",
    before: {
      q: "When a manager finds a gap between results and plan, what happens next?",
      choices: [
        { label: "The cycle ends", reveal: "Not quite. Controlling measures results, compares them with the plan and corrects the gap, which feeds the next round of planning." },
        { label: "Back to planning", reveal: "Yes. Controlling measures results, compares them with the plan and corrects the gap, which feeds the next round of planning." },
      ],
    },
    lead: "Management is five linked functions that repeat in a cycle: plan, organise, staff, direct, control.",
    check: [
      ask("Whose list of functions is POSDCORB?", "Luther Gulick", ["Henri Fayol", "George R. Terry", "Koontz and O'Donnell"], "Gulick (1937): planning, organising, staffing, directing, co-ordinating, reporting and budgeting."),
      ask("Which function recruits, selects and develops people?", "Staffing", ["Planning", "Organising", "Directing"], "Organising arranges tasks, people and resources; directing leads, motivates and communicates."),
      ask("Why do many writers treat coordination as the essence of management rather than a separate function?", "It runs through all the other functions", ["It happens only at the top", "It replaces controlling", "It is done once, at the start"], "Every function needs the efforts of different people and units brought into line."),
    ],
    lens: [
      { pairing: 0, adds: "A ruler's work named as a cycle of duties: create, gather, guard and allocate resources.", differs: "The couplet describes a king's duties over wealth. The functions of management are a general list for any organisation." },
    ],
    reflect: "Which of the five functions takes most of your time in a group project, and which gets neglected?",
    summary: {
      points: [
        "Fayol: plan, organise, command, co-ordinate, control. Gulick: POSDCORB. Terry: plan, organise, actuate, control.",
        "Koontz and O'Donnell's five: planning, organising, staffing, directing, controlling.",
        "Controlling corrects the gap, which feeds the next round of planning.",
        "Coordination runs through all of them.",
      ],
      memory: "Plan, organise, staff, direct, control, then round again.",
    },
  },
  {
    blockId: "planning",
    name: "Planning",
    intro: "Deciding in advance what to do, how, when and by whom.",
    before: {
      q: "Can a manager control performance without a plan?",
      choices: [
        { label: "Yes", reveal: "Not really. Control compares results with a standard, and the standard comes from the plan. That is why planning is called the primary function." },
        { label: "No", reveal: "Right. Control compares results with a standard, and the standard comes from the plan. That is why planning is called the primary function." },
      ],
    },
    lead: "Planning decides in advance what to do, how, when and by whom; every other function follows from it.",
    check: [
      ask("Assumptions about the future on which a plan rests are called…", "Planning premises", ["Objectives", "Policies", "Derivative plans"], "Premises may be external (economy, technology, competition) or internal (resources, policies)."),
      ask("A plan kept ready in case conditions change is a…", "Contingency plan", ["Strategic plan", "Operational plan", "Functional plan"], "Strategic plans are long-term and for the whole organisation; operational plans are day-to-day."),
      ask("Hiring and training plans that make a main expansion plan work are…", "Supporting (derivative) plans", ["Planning premises", "Contingency plans", "Objectives"], "They are formulated after the main alternative is selected, in step 7."),
    ],
    lens: [
      { pairing: 1, adds: "Thinking before the deed, and the fault of starting first and thinking later.", differs: "The couplet is a rule for any undertaking. Planning in management adds objectives, premises and a formal eight-step process." },
    ],
    reflect: "Think of a recent plan that went wrong. Which planning premise turned out to be false?",
    summary: {
      points: [
        "Planning is primary, goal-oriented, all-pervasive, forward-looking, continuous and a matter of choice.",
        "Types by level, focus (strategic, tactical, operational, contingency) and time.",
        "Process: need, objectives, premises, alternatives, evaluation, selection, supporting plans, implementation.",
        "Without a plan, control has nothing to measure.",
      ],
      memory: "Think first, then act; plan first, then everything else.",
    },
  },
  {
    blockId: "organising",
    name: "Organising",
    intro: "Arranging work, people and resources so the plan can be carried out.",
    before: {
      q: "Planning decides what to do. What does organising decide?",
      choices: [
        { label: "How it will be done", reveal: "Yes. Organising decides the tasks, who does them, how they are grouped, who reports to whom and where decisions are made." },
        { label: "Whether to do it", reveal: "That is still planning. Organising decides the tasks, who does them, how they are grouped, who reports to whom and where decisions are made." },
      ],
    },
    lead: "Organising groups the work and resources, assigns authority and sets who reports to whom.",
    check: [
      ask("Combining related activities into departments is called…", "Departmentalisation", ["Delegation", "Decentralisation", "Coordination"], "It is the second step of the organising process, after identifying the activities."),
      ask("What is the first step in the organising process?", "Identifying the activities to be done", ["Setting reporting relationships", "Assigning authority", "Recruiting staff"], "The steps run: identify, group, assign duties and authority, then establish reporting relationships."),
    ],
    lens: [
      { pairing: 2, adds: "Five things to weigh before acting: means, instruments, time, the deed and the place.", differs: "The couplet is advice to one person about to act. Organising builds a lasting structure of departments and reporting lines." },
    ],
    reflect: "In a team you know, is it clear who reports to whom? What problem shows up when it isn't?",
    summary: {
      points: [
        "Organising brings together physical, financial and human resources.",
        "It decides tasks, who does them, grouping, reporting and where decisions are made.",
        "Process: identify activities, group them, assign duties and authority, set reporting relationships.",
        "Its result is the organisation structure.",
      ],
      memory: "Planning says what; organising says how and by whom.",
    },
  },
  {
    blockId: "staffing",
    name: "Staffing",
    intro: "Filling the structure with the right people, and keeping it filled.",
    before: {
      q: "Is staffing over once the right person has been hired?",
      choices: [
        { label: "Yes", reveal: "No. Staffing goes on: placement, orientation, training, compensation, appraisal, and promotion or transfer keep the structure well filled." },
        { label: "No", reveal: "Right. Staffing goes on: placement, orientation, training, compensation, appraisal, and promotion or transfer keep the structure well filled." },
      ],
    },
    lead: "Staffing fills the organisation structure with the right people, the right person in the right job, and keeps it filled.",
    check: [
      ask("What is the first step in the staffing process?", "Manpower planning", ["Recruitment", "Selection", "Orientation"], "First estimate how many people, and of what kind, are needed."),
      ask("Introducing a new employee to colleagues, rules and facilities is…", "Orientation (induction)", ["Recruitment", "Performance appraisal", "Placement"], "Placement puts the person in the job they suit; orientation familiarises them with the organisation."),
      ask("Searching for prospective employees and encouraging them to apply is…", "Recruitment", ["Selection", "Placement", "Manpower planning"], "Selection then chooses from the applicants."),
    ],
    lens: [
      { pairing: 3, adds: "The quality to look for in anyone employed: the judgement to weigh good and harm, and a leaning toward the good.", differs: "The couplet names a quality of character. Staffing is a sequence of steps from manpower planning to career planning." },
    ],
    reflect: "Which step of staffing do you think organisations most often rush, and what does it cost them?",
    summary: {
      points: [
        "Right person, right job; today largely the work of human resource management.",
        "Steps: manpower planning, recruitment, selection, placement and orientation.",
        "Then training and development, compensation, appraisal, promotion, transfer and career planning.",
      ],
      memory: "Plan, find, choose, place, grow, pay, rate, move.",
    },
  },
  {
    blockId: "directing",
    name: "Directing and leadership styles",
    intro: "Turning plans into action through supervision, motivation, communication and leadership.",
    before: {
      q: "A team of experienced specialists works best when the leader…",
      choices: [
        { label: "Decides everything", reveal: "That is the autocratic style: fast, but it stifles experts. For self-driven specialists, a democratic or laissez-faire style usually works better." },
        { label: "Gives them room", reveal: "Usually, yes. Democratic and laissez-faire styles suit experienced, self-driven people; the autocratic style suits urgent work or a team that needs clear guidance." },
      ],
    },
    lead: "Directing guides, motivates and supervises people toward the goals; leadership style decides how.",
    check: [
      ask("The four elements of directing are supervision, motivation, communication and…", "Leadership", ["Budgeting", "Departmentalisation", "Recruitment"], "Directing works through people: overseeing, encouraging, informing and influencing them."),
      ask("Which style relies on rewards and penalties for meeting set goals?", "Transactional", ["Transformational", "Laissez-faire", "Democratic"], "Transformational leadership inspires change through a shared vision instead."),
      ask("Whose studies (1939) gave the autocratic, democratic and laissez-faire styles?", "Kurt Lewin", ["James MacGregor Burns", "Henri Fayol", "Douglas McGregor"], "Burns (1978) set transactional against transformational leadership."),
    ],
    lens: [
      { pairing: 4, adds: "Willing following won by kind words and generous care, not by force.", differs: "The couplet praises a ruler's manner. Leadership styles are a range of methods suited to different followers and situations." },
    ],
    reflect: "Which leadership style brings out your best work, and which style do you fall into under pressure?",
    summary: {
      points: [
        "Elements: supervision, motivation, communication, leadership.",
        "Autocratic, democratic and laissez-faire styles (Lewin, 1939).",
        "Transactional and transformational leadership (Burns, 1978).",
        "The best style depends on the leader, the followers and the culture.",
      ],
      memory: "Direct through people: oversee, encourage, inform, influence.",
    },
  },
  {
    blockId: "coordinating",
    name: "Coordinating",
    intro: "Bringing every effort into line toward one purpose.",
    before: {
      q: "Production makes more than sales can sell. Which function failed?",
      choices: [
        { label: "Coordination", reveal: "Yes. Production and sales each did their own work, but nobody brought their efforts into line. Horizontal coordination was missing." },
        { label: "Staffing", reveal: "Probably not. Both departments did their work; nobody brought their efforts into line. That is a failure of horizontal coordination." },
      ],
    },
    lead: "Coordination is the orderly arrangement of group effort to provide unity of action toward a common purpose.",
    check: [
      ask("Who defined coordination as the orderly arrangement of group effort to provide unity of action?", "Mooney and Reiley", ["Koontz and O'Donnell", "Henri Fayol", "Luther Gulick"], "Koontz and O'Donnell called coordination the essence of management."),
      ask("Coordination between production and sales, at the same level, is…", "Horizontal", ["Vertical", "External", "Diagonal"], "Vertical coordination runs between levels of the hierarchy."),
      ask("Which is one of Mary Parker Follett's four principles of coordination?", "An early start, while plans are being made", ["Strict unity of command", "Coordination only at the top", "Coordination after results are known"], "Her four: direct contact, early start, reciprocal relating and continuity."),
    ],
    lens: [
      { pairing: 5, adds: "Shared movement, shared speech and one mind: unity of action as an ideal.", differs: "The hymn prays for concord. Coordination arranges it through plans, structure, communication and committees." },
    ],
    reflect: "Where in an organisation you know do two departments work hard but against each other?",
    summary: {
      points: [
        "Coordination is the essence of management, running through every function.",
        "Kinds: internal and external, vertical and horizontal.",
        "Achieved through clear objectives, sound structure, communication, committees and leadership.",
        "Follett: direct contact, early start, reciprocal relating, continuity.",
      ],
      memory: "Many efforts, one direction.",
    },
  },
  {
    blockId: "controlling",
    name: "Controlling",
    intro: "Measuring performance against standards and correcting the gap.",
    before: {
      q: "Is a good control system only about catching mistakes after they happen?",
      choices: [
        { label: "Yes", reveal: "Not only. Control corrects past deviations, but good control also looks ahead to prevent them, and its findings feed the next plan." },
        { label: "No", reveal: "Right. Control corrects past deviations, but good control also looks ahead to prevent them, and its findings feed the next plan." },
      ],
    },
    lead: "Controlling sets standards, measures performance, compares the two and corrects the deviation.",
    check: [
      ask("What is the first step in the control process?", "Setting standards", ["Measuring performance", "Taking corrective action", "Comparing results"], "The steps run: set standards, measure, compare, correct."),
      ask("Attending only to significant deviations is called…", "Management by exception", ["Benchmarking", "Budgetary control", "Break-even analysis"], "It saves managers' time for the deviations that matter."),
      ask("Comparing performance with the best in the field is…", "Benchmarking", ["Ratio analysis", "Personal observation", "Return on investment"], "Ratio analysis and return on investment check financial health and returns."),
    ],
    lens: [
      { pairing: 6, adds: "A check from outside: someone able to point out the errors of the person in charge.", differs: "The couplet is about a ruler's advisers. Control builds the check into standards, reports and correction." },
      { pairing: 7, adds: "The first controller sits inside the person, with measured habits in eating, rest and work.", differs: "Controlling in management compares results with a standard and corrects. The Gītā speaks of self-mastery, not of a plan-against-actual cycle." },
    ],
    reflect: "What standard do you hold your own work to, and how do you find out when you've missed it?",
    summary: {
      points: [
        "Process: set standards, measure, compare, take corrective action.",
        "Planning sets the standard; control checks against it and feeds the next plan.",
        "Control is continuous, at every level, and action-oriented.",
        "Techniques: observation, reports and MIS, budgets, ratios and ROI, break-even, benchmarking.",
      ],
      memory: "Set, measure, compare, correct.",
    },
  },
];

export default lessons;
