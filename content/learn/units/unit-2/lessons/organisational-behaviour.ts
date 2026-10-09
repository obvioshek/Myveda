import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-organisational-behaviour-studies",
    name: "What organisational behaviour studies",
    intro: "How people think, feel and act at work, at three levels.",
    before: {
      q: "Does organisational behaviour study only individuals?",
      choices: [
        { label: "Only individuals", reveal: "It studies people at three levels: as individuals, in groups, and as part of the whole organisation." },
        { label: "Individuals, groups and the whole", reveal: "Yes. OB looks at individuals, groups and the whole organisation, to understand, predict and improve behaviour." },
      ],
    },
    lead: "OB studies individuals, groups and the whole organisation, to understand, predict and improve behaviour at work.",
    check: [
      ask("Which description fits organisational behaviour?", "The study of how individuals, groups and structure affect behaviour at work", ["The function of hiring, training, paying and appraising employees", "The study of how markets set prices and wages for labour", "The design of a firm's departments and lines of reporting"], "OB studies behaviour at three levels in order to improve effectiveness. Hiring, training and pay describe HRM, a management function that draws on OB but is not the same thing."),
      ask("After new software arrives, the counter staff quietly agree among themselves to work slowly. Which level of OB does this belong to?", "The group level", ["The individual level", "The organisation level", "The environment level"], "An agreement among the counter staff is a norm the group set, so it sits at the group level. No one person's personality explains it, and head office did not set it, so it is neither individual nor organisational."),
      ask("A manager reads that a bonus scheme raised sales in several North American firms. What is the sound OB response?", "Treat it as a tendency and test it in her own branches first", ["Apply it everywhere at once, since OB findings are laws", "Ignore it, since behaviour at work cannot be predicted", "Apply it only to senior staff, who behave more rationally"], "OB findings hold on average, and much of the research comes from North American and European firms, so they need testing locally. Treating them as laws overstates them; ignoring them throws away the evidence."),
    ],
    lens: [],
    reflect: "Think of one thing at your workplace or college that would make more sense if you understood the behaviour behind it. What is it?",
    summary: {
      points: [
        "OB studies how individuals, groups and structure affect behaviour at work, to understand, predict and improve it.",
        "It draws on psychology, social psychology, sociology, anthropology and political science.",
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
    lead: "Three approaches, one aim: efficiency through the best method, clear authority and rules.",
    check: [
      ask("Which is NOT one of Taylor's four principles?", "Unity of command", ["Science, not rule of thumb", "Scientific selection and training", "Cooperation between workers and management"], "Unity of command is one of Fayol's fourteen principles. The tempting confusion is that both men sought efficiency, but Taylor's four principles concern the task, not the chain of command."),
      ask("In a Pune plant, each machinist takes orders from three supervisors who often disagree. Which classical principle is being broken?", "Fayol's unity of command", ["Taylor's science, not rule of thumb", "Weber's impersonality", "Fayol's esprit de corps"], "Unity of command says each worker should take orders from one superior. Esprit de corps, team spirit, may suffer too, but the direct breach is having three bosses."),
      ask("A plant pays ₹50 a piece to workers who reach the standard of 40 pieces a day, and ₹40 a piece to those below it. What does a worker who makes 45 pieces earn?", "₹2,250", ["₹1,800", "₹2,000", "₹2,100"], "45 pieces reaches the standard, so every piece earns the higher rate: 45 × ₹50 = ₹2,250. ₹1,800 applies the lower rate, which is only for workers below 40 pieces."),
    ],
    lens: [
      { pairing: 0, adds: "Registers for every department, a fixed timetable for accounts, and penalties for officials who fail to present them.", differs: "Kauṭilya's office keeps a state's accounts. Weber describes bureaucracy as a general form of organisation, with appointment by competence and impersonal rules." },
    ],
    reflect: "Where have you seen a rule protect people from favouritism, and where has a rule only slowed things down?",
    summary: {
      points: [
        "Taylor (scientific management): find the most efficient way to do a job; four principles; the differential piece-rate.",
        "Fayol (administrative management): five functions and fourteen principles, including unity of command.",
        "Weber (bureaucracy): hierarchy, rules, division of labour, impersonality, appointment by competence; aim: efficiency without favouritism.",
        "Weakness: workers treated as machine parts; feelings, informal groups and the environment ignored.",
      ],
      memory: "Taylor the task, Fayol the manager, Weber the rules.",
    },
  },
  {
    blockId: "behavioural-school-of-management",
    name: "Behavioural school of management",
    intro: "People, needs and relationships at the centre.",
    before: {
      q: "Do workers produce more simply because someone pays attention to them?",
      choices: [
        { label: "No, only pay matters", reveal: "The Hawthorne studies found otherwise: productivity rose when employees felt valued. Attention and social relations change behaviour." },
        { label: "It can help", reveal: "Yes. That is the Hawthorne effect: attention and social relations change behaviour and productivity." },
      ],
    },
    lead: "Productivity depends on how people feel and relate to each other, not only on how work is arranged.",
    check: [
      ask("What did the Hawthorne illumination experiments find?", "Output rose in both groups, whether lighting went up or down", ["Output rose only when the lighting was increased", "Output rose only in the test group, not the control", "Output fell steadily as the lighting was reduced"], "Output rose in the test and control groups alike, so light was not the cause. That pointed the researchers toward attention and social factors."),
      ask("A bank branch manager checks every voucher himself and lets no officer decide anything alone. Which assumptions is he working on?", "Theory X", ["Theory Y", "Theory Z", "The Hawthorne effect"], "Close control and no trust in self-direction are Theory X. Theory Z is Ouchi's later account of Japanese-style management, not part of McGregor's pair."),
      ask("Output in a team rises as soon as researchers start watching it. What should a manager conclude before rolling out the change being tested?", "Part of the rise may be the Hawthorne effect, so compare with an unobserved group", ["The change clearly works and should go everywhere at once", "Attention never affects output, so the change caused it", "The team was hiding effort before and should be disciplined"], "Being observed can itself change behaviour, which is the Hawthorne effect, so a comparison group is needed. Rolling out at once assumes the change alone caused the rise."),
    ],
    lens: [
      { pairing: 1, adds: "Self-direction treated as a human capacity: each person can lift themselves.", differs: "The Gītā speaks of inner discipline and self-effort. McGregor describes a manager's assumptions about employees." },
    ],
    reflect: "Which of your own managers or teachers worked on Theory X assumptions, and which on Theory Y? How did you respond?",
    summary: {
      points: [
        "Hawthorne studies (1924–32, interpreted by Elton Mayo): illumination, relay assembly, interviewing, bank wiring.",
        "Feeling valued raised productivity; the Hawthorne effect is behaviour changed by attention.",
        "Maslow: physiological, safety, social, esteem and self-actualisation needs.",
        "McGregor: Theory X (control) against Theory Y (participation), as assumptions that tend to fulfil themselves.",
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
    lead: "An organisation is an open system of inputs, transformation, outputs and feedback, and the best practice depends on the situation.",
    check: [
      ask("In systems theory, labour, materials and capital are…", "Inputs", ["Outputs", "Feedback", "The environment"], "Inputs pass through transformation to become outputs such as products and services. The environment surrounds the system; it is not what the system takes in and processes."),
      ask("A milk cooperative changes its pack sizes after shops report that one size goes unsold. In systems terms, the shops' reports are…", "Feedback", ["Inputs", "Outputs", "Transformation"], "Information about outputs that returns to shape the next cycle is feedback. The reports are not inputs in the systems sense of labour, materials and capital."),
      ask("A firm's market changes fast, with new products every few months. Which structure does contingency research suggest?", "An organic one, with flexible roles and loose rules", ["A mechanistic one, with tight rules and hierarchy", "The same structure that works for any well-run firm", "Whichever structure the founder happens to prefer"], "Contingency research found that organic structures suit fast-changing markets and mechanistic ones suit stable markets. Choosing one structure for every firm is exactly what contingency theory rejects."),
    ],
    lens: [],
    reflect: "Think of a practice that worked in one team and failed in another. Which part of the situation was different?",
    summary: {
      points: [
        "Systems theory: inputs, transformation and outputs, with feedback, inside an external environment.",
        "Key ideas: interdependence, interaction, environment and feedback; open, not closed, systems.",
        "Contingency theory: no single best way; fit practice to environment, technology, structure and people.",
        "Mechanistic structures suit stable markets; organic structures suit changing ones.",
      ],
      memory: "It depends on the situation.",
    },
  },
];

export default lessons;
