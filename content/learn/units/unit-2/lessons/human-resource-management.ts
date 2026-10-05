import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-and-objectives-of-hrm",
    name: "Meaning and objectives of HRM",
    intro: "Acquiring, developing, motivating and retaining people.",
    before: {
      q: "Is HRM mainly about hiring?",
      choices: [
        { label: "Mainly", reveal: "Hiring is one part. HRM acquires, develops, motivates and retains people, and aligns them with strategy." },
        { label: "Much more", reveal: "Right. HRM acquires, develops, motivates and retains people to achieve organisational goals." },
      ],
    },
    lead: "HRM builds a skilled, motivated and committed workforce.",
    check: [
      ask("Work-life balance is which kind of HRM objective?", "Personal", ["Organisational", "Other", "Legal"], "Organisational objectives include productivity and talent management."),
      ask("Legal compliance and fairness are which kind of objective?", "Other objectives", ["Personal objectives", "Organisational objectives", "Strategic objectives only"], "Along with social responsibility and diversity."),
    ],
    lens: [
      { pairing: 0, adds: "Judge that this person can do this task by these means, then entrust it to them.", differs: "The Kuṟaḷ gives a single rule for assigning work. HRM builds a whole system around it: planning, development, reward and retention." },
    ],
    reflect: "Which of the four (acquire, develop, motivate, retain) does your organisation do least well?",
    summary: {
      points: [
        "HRM: acquiring, developing, motivating and retaining employees to achieve goals.",
        "Aims: performance, welfare, alignment with strategy.",
        "Objectives: personal, organisational, and other (compliance, social responsibility, diversity, fairness).",
      ],
      memory: "Acquire, develop, motivate, retain.",
    },
  },
  {
    blockId: "evolution-of-hrm",
    name: "Evolution of HRM",
    intro: "From control to strategy.",
    before: {
      q: "Did HR departments exist in the early factories?",
      choices: [
        { label: "Yes", reveal: "Not as we know them. Early factories focused on supervision and discipline; personnel departments spread widely only after the Second World War." },
        { label: "No", reveal: "Right. Personnel departments grew in the 1940s and 1950s; strategic HRM became the dominant approach from the 2000s." },
      ],
    },
    lead: "HRM moved from administrative control, to a focus on people, to a strategic role.",
    check: [
      ask("Which stage is linked to Elton Mayo, social factors and morale?", "Human relations (1920s–1930s)", ["Scientific management", "Modern HRM", "Strategic HRM"], "Scientific management is Taylor's stage."),
      ask("HR information systems, analytics and a global workforce belong to…", "Strategic HRM (2000s onward)", ["Post-war personnel", "TQM and globalisation", "The Industrial Revolution"], "Technology, analytics and global teams mark the strategic HRM era, from the 2000s."),
    ],
    lens: [],
    reflect: "Which stage does the HR function in an organisation you know still resemble?",
    summary: {
      points: [
        "Pre-industrial, Industrial Revolution, scientific management, human relations.",
        "Post-war personnel, modern HRM, TQM and globalisation, strategic HRM.",
      ],
      memory: "Control, efficiency, human relations, personnel, HRM, strategic HR.",
    },
  },
  {
    blockId: "functions-of-hrm",
    name: "Functions of HRM",
    intro: "Eight things HR does.",
    before: {
      q: "Is succession planning part of HR's job?",
      choices: [
        { label: "No", reveal: "It is: “prepare” is one of the eight functions, through career and succession planning." },
        { label: "Yes", reveal: "Right. Preparing future talent and leadership continuity is one of the eight functions." },
      ],
    },
    lead: "Plan, acquire, develop, evaluate, reward, relate, protect, prepare.",
    check: [
      ask("Performance appraisal belongs to which function?", "Evaluate", ["Develop", "Reward", "Relate"], "Reward is compensation management."),
      ask("Health, safety and well-being belong to which function?", "Protect", ["Relate", "Prepare", "Plan"], "Relate is employee relations."),
    ],
    lens: [],
    reflect: "Which of the eight functions have you experienced directly as an employee or intern?",
    summary: {
      points: [
        "Plan (HR planning), acquire (recruitment and selection), develop (training).",
        "Evaluate (appraisal), reward (compensation), relate (employee relations).",
        "Protect (safety and welfare), prepare (career and succession planning).",
      ],
      memory: "Plan, acquire, develop, evaluate, reward, relate, protect, prepare.",
    },
  },
  {
    blockId: "approaches-to-hrm",
    name: "Approaches to HRM, and how HRM differs",
    intro: "Ten approaches; HRM against personnel management and OB.",
    before: {
      q: "Is HRM just a new name for personnel management?",
      choices: [
        { label: "Yes", reveal: "No. Personnel management is administrative and reactive; HRM is strategic and proactive, with a broader scope." },
        { label: "No", reveal: "Right. HRM is strategic and proactive; personnel management is administrative and reactive." },
      ],
    },
    lead: "Approaches range from administrative control to evidence and strategy.",
    check: [
      ask("Which approach says some HR practices improve performance almost everywhere?", "Best practices", ["Contingency", "Resource-based view", "Traditional"], "Contingency says it depends on the situation."),
      ask("Which approach treats people as strategic resources for lasting competitive advantage?", "Resource-based view", ["Human relations", "Traditional", "Employee-centric"], "The RBV."),
      ask("Which question does OB ask, as opposed to HRM?", "Why do people behave the way they do?", ["How do we manage people?", "How much should we pay?", "Whom should we hire?"], "HRM asks how to manage people."),
    ],
    lens: [],
    reflect: "Which approach would you use if you set up an HR function from scratch, and why?",
    summary: {
      points: [
        "Approaches: traditional, human relations, HRD, contingency, strategic, high-performance, best practices, RBV, employee-centric, evidence-based.",
        "HRM is strategic and proactive; personnel management administrative and reactive.",
        "HRM asks how to manage people; OB asks why people behave as they do.",
      ],
      memory: "HRM manages; OB understands.",
    },
  },
];

export default lessons;
