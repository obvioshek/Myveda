import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-organisational-behaviour-studies",
    name: "What organisational behaviour studies",
    intro: "How people think, feel and act at work.",
    before: {
      q: "Does organisational behaviour study only individuals?",
      choices: [
        { label: "Only individuals", reveal: "It studies people at three levels: as individuals, in groups, and as part of the whole organisation." },
        { label: "Individuals, groups and the whole", reveal: "Yes. OB looks at individuals, groups and the whole organisation, to understand, predict and improve behaviour." },
      ],
    },
    lead: "OB studies behaviour at work in order to understand it, predict it and improve it.",
    check: [
      ask("In what order did management thought move?", "Efficiency, then human behaviour, then systems and situational thinking", ["Human behaviour, then efficiency, then systems", "Systems, then efficiency, then human behaviour", "Situational thinking, then efficiency, then people"], "Classical, then behavioural, then modern."),
      ask("Which thinkers belong to the behavioural school?", "Mayo, Maslow and McGregor", ["Taylor, Fayol and Weber", "Fiedler, Lawrence and Lorsch", "Barnard and Bertalanffy"], "Taylor, Fayol and Weber are the classical school."),
    ],
    lens: [],
    reflect: "Think of one thing at your workplace or college that would make more sense if you understood the behaviour behind it. What is it?",
    summary: {
      points: [
        "OB studies people at work as individuals, in groups and in the organisation as a whole.",
        "Classical school: efficiency and structure (Taylor, Fayol, Weber).",
        "Behavioural school: people and motivation (Mayo, Maslow, McGregor). Modern school: systems and situations.",
      ],
      memory: "Efficiency, then people, then systems and situations.",
    },
  },
  {
    blockId: "classical-school-of-management",
    name: "Classical school of management",
    intro: "Efficiency, structure and formal organisation.",
    before: {
      q: "Can rules and a clear hierarchy make an organisation fairer?",
      choices: [
        { label: "No, only slower", reveal: "Weber thought they could: one aim of bureaucracy was to end favouritism, with impersonal rules and appointment by competence." },
        { label: "Yes, fairer", reveal: "That was part of Weber's aim: efficiency and an end to favouritism, through impersonal rules and appointment by competence." },
      ],
    },
    lead: "Three approaches, one aim: efficiency through structure.",
    check: [
      ask("Which is NOT one of Taylor's four principles?", "Unity of command", ["Science, not rule of thumb", "Scientific selection and training", "Cooperation between workers and management"], "Unity of command is one of Fayol's principles."),
      ask("Which is one of Fayol's five functions of management?", "Commanding", ["Staffing", "Budgeting", "Recruiting"], "Fayol's five are planning, organising, commanding, coordinating and controlling."),
      ask("Which is a feature of Weber's bureaucracy?", "Appointment by professional competence", ["Informal, flexible roles", "Decisions by personal loyalty", "No written rules"], "Others are a clear hierarchy, detailed rules, division of labour, formalised operations and impersonality."),
    ],
    lens: [
      { pairing: 0, adds: "Registers for every department, a fixed timetable for accounts, and penalties for officials who fail to present them.", differs: "Kauṭilya's office keeps a state's accounts. Weber describes bureaucracy as a general form of organisation, with appointment by competence and impersonal rules." },
    ],
    reflect: "Where have you seen a rule protect people from favouritism, and where has a rule only slowed things down?",
    summary: {
      points: [
        "Taylor (scientific management): find the most efficient way to do a job; four principles.",
        "Fayol (administrative management): five functions and fourteen principles of management.",
        "Weber (bureaucracy): hierarchy, rules, division of labour, impersonality, appointment by competence; aim: efficiency without favouritism.",
      ],
      memory: "Taylor the task, Fayol the manager, Weber the rules.",
    },
  },
  {
    blockId: "behavioural-school-of-management",
    name: "Behavioural school of management",
    intro: "People, needs and attitudes at the centre.",
    before: {
      q: "Do workers produce more simply because someone pays attention to them?",
      choices: [
        { label: "No, only pay matters", reveal: "The Hawthorne studies found otherwise: productivity rose when employees felt valued. Attention and social relations change behaviour." },
        { label: "It can help", reveal: "Yes. That is the Hawthorne effect: attention and social relations change behaviour and productivity." },
      ],
    },
    lead: "Productivity depends on how people feel, not only on how work is arranged.",
    check: [
      ask("Where were the Hawthorne studies conducted?", "Western Electric's Hawthorne plant", ["Ford's Detroit plant", "A railway workshop in Britain", "The Tata steel plant"], "Under Elton Mayo."),
      ask("Which assumption belongs to Theory Y?", "People can direct themselves and seek responsibility", ["People dislike work", "People need coercion and control", "Creativity is limited"], "The others are Theory X."),
      ask("Which is the highest level of Maslow's hierarchy?", "Self-actualisation", ["Esteem", "Social", "Safety"], "Physiological, safety, social, esteem, self-actualisation."),
    ],
    lens: [
      { pairing: 1, adds: "Self-direction treated as a human capacity: each person can lift themselves.", differs: "The Gītā speaks of inner discipline and self-effort. McGregor describes a manager's assumptions about employees." },
    ],
    reflect: "Which of your own managers or teachers worked on Theory X assumptions, and which on Theory Y? How did you respond?",
    summary: {
      points: [
        "Hawthorne studies (Elton Mayo): feeling valued raised productivity; social needs and morale matter.",
        "Maslow: physiological, safety, social, esteem and self-actualisation needs.",
        "McGregor: Theory X (control) against Theory Y (participation).",
      ],
      memory: "Control or participation: X or Y.",
    },
  },
  {
    blockId: "modern-school-of-management",
    name: "Modern school: systems and contingency",
    intro: "The organisation as an open system that must fit its situation.",
    before: {
      q: "Is there one best way to manage every organisation?",
      choices: [
        { label: "Yes", reveal: "Contingency theory says no: practice must be tailored to the environment, technology, structure and workforce." },
        { label: "No", reveal: "Right. Contingency theory holds that effectiveness depends on fitting practice to the situation." },
      ],
    },
    lead: "Organisations are open systems, and the best practice depends on the situation.",
    check: [
      ask("In systems theory, labour, materials and capital are…", "Inputs", ["Outputs", "Feedback", "The environment"], "Inputs pass through transformation to become outputs such as products and services."),
      ask("Which does contingency theory say effectiveness depends on?", "Environment, technology, structure and workforce characteristics", ["A single best method", "The manager's personality alone", "Fixed principles"], "Analyse the situation, identify the variables, adapt and act."),
    ],
    lens: [],
    reflect: "Think of a practice that worked in one team and failed in another. Which part of the situation was different?",
    summary: {
      points: [
        "Systems theory: inputs, transformation and outputs, with feedback, inside an external environment.",
        "Key ideas: interdependence, interaction, environment and feedback.",
        "Contingency theory: no single best way; fit practice to environment, technology, structure and people.",
      ],
      memory: "It depends on the situation.",
    },
  },
];

export default lessons;
