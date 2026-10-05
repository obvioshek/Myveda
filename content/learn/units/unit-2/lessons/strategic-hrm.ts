import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-of-shrm",
    name: "Meaning of strategic HRM",
    intro: "HR aligned with strategy.",
    before: {
      q: "Is HR's job mainly administration: payroll, records and leave?",
      choices: [
        { label: "Mainly", reveal: "Strategic HRM shifts the focus from routine administration to strategic people management, treating employees as long-term assets." },
        { label: "Much more", reveal: "Right. Strategic HRM makes HR proactive, shaping the organisation's growth and capability." },
      ],
    },
    lead: "SHRM aligns HR activities with strategy to build capability and advantage.",
    check: [
      ask("In SHRM, employees are treated as…", "Long-term strategic assets", ["A cost to be minimised", "Temporary resources", "An administrative burden"], "HR becomes proactive."),
      ask("SHRM leads from HR activities to…", "Strategic alignment, workforce capability and competitive advantage", ["Lower wages", "Fewer employees", "More paperwork"], "That is the core chain."),
    ],
    lens: [],
    reflect: "Name one HR activity in an organisation you know that is clearly linked to its strategy, and one that is not.",
    summary: {
      points: [
        "SHRM aligns recruitment, training, performance management and development with strategy.",
        "Employees are long-term strategic assets; HR is proactive.",
        "The focus shifts from administration to strategic people management.",
      ],
      memory: "HR activities, alignment, capability, advantage.",
    },
  },
  {
    blockId: "key-strategic-dimensions",
    name: "Key strategic dimensions",
    intro: "Five areas where HR shapes strategy.",
    before: {
      q: "Can a company's reputation as an employer reduce bad hires?",
      choices: [
        { label: "No", reveal: "It can. A strong employer brand brings better applicants and fewer mismatches." },
        { label: "Yes", reveal: "Right. A strong employer brand brings better applicants and fewer mismatches." },
      ],
    },
    lead: "Branding, lifecycle, performance, retention and culture are where HR becomes strategic.",
    check: [
      ask("Onboarding, development, engagement and retention make up…", "Employee lifecycle management", ["Employer branding", "Culture and change management", "Performance and learning"], "It lowers turnover and stabilises the workforce."),
      ask("Performance management in SHRM focuses on…", "Growth, not fault-finding", ["Punishment", "Paperwork", "Ranking only"], "With continuous learning."),
    ],
    lens: [],
    reflect: "Which of the five dimensions is your organisation weakest in?",
    summary: {
      points: [
        "Employer branding and talent acquisition; employee lifecycle management.",
        "Performance and learning; retention and engagement.",
        "Culture and change management.",
      ],
      memory: "Brand, lifecycle, performance, retention, culture.",
    },
  },
  {
    blockId: "components-and-objectives-of-shrm",
    name: "Components and objectives of SHRM",
    intro: "What SHRM is made of and what it aims at.",
    before: {
      q: "Is ‘high-commitment management’ about pay?",
      choices: [
        { label: "Yes", reveal: "It is about trust and employee dedication, one of SHRM's five objectives." },
        { label: "No", reveal: "Right. High-commitment management aims at trust and dedication." },
      ],
    },
    lead: "SHRM combines people capability, HR systems and strategic direction.",
    check: [
      ask("Which SHRM objective treats specialised talent as a competitive advantage?", "Resource-based strategy", ["Strategic fit", "High-involvement management", "High-commitment management"], "Strategic fit aligns HR with strategy."),
      ask("Which objective is about sharing ideas and innovation?", "High-involvement management", ["High-performance management", "High-commitment management", "Strategic fit"], "High-performance management is about measures and productivity."),
    ],
    lens: [],
    reflect: "Which of the five objectives would matter most in a start-up, and which in a large bank?",
    summary: {
      points: [
        "Components: human resources as core capital, HR policies and programmes, plans and patterns, unified direction.",
        "SHRM = people capability + HR systems + strategic direction.",
        "Objectives: strategic fit, resource-based strategy, high performance, high involvement, high commitment.",
      ],
      memory: "Fit, resource, performance, involvement, commitment.",
    },
  },
  {
    blockId: "implementing-shrm",
    name: "Implementing SHRM",
    intro: "Six steps, and strategic HR planning.",
    before: {
      q: "Is SHRM a one-time project?",
      choices: [
        { label: "Yes", reveal: "No. The last step is to evaluate and iterate: monitor outcomes and keep policies relevant." },
        { label: "No", reveal: "Right. The last step is to evaluate and iterate, continuously." },
      ],
    },
    lead: "Understand the vision, use data, assess readiness, forecast talent, assess systems, evaluate and iterate.",
    check: [
      ask("Which step uses people analytics to reduce bias in decisions?", "Identify measures and data", ["Understand the business vision", "Assess HR systems", "Evaluate and iterate"], "Data-driven decisions reduce bias."),
      ask("What comes first in strategic HR planning?", "Define SMART goals", ["Strategic recruitment", "Analyse departmental needs", "Evaluate workforce skills"], "Then assess capabilities, evaluate skills, analyse needs and recruit."),
    ],
    lens: [
      { pairing: 0, adds: "Daily review of those who do the work, so that the whole does not swerve.", differs: "The Kuṟaḷ asks a ruler to watch his officers' conduct. SHRM reviews people practices against strategy using measures and data." },
    ],
    reflect: "What one measure would tell you whether your organisation's people strategy is working?",
    summary: {
      points: [
        "Implementation: vision, measures and data, HR readiness, talent forecast, HR systems, evaluate and iterate.",
        "Strategic HR planning: SMART goals, capabilities, workforce skills, departmental needs, strategic recruitment.",
      ],
      memory: "Right people, right capabilities, right strategy, right time.",
    },
  },
];

export default lessons;
