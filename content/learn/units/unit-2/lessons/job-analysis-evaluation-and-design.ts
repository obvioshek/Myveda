import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "job-analysis",
    name: "Job analysis and its methods",
    intro: "Studying what a job involves and what it needs.",
    before: {
      q: "Will people work exactly as usual while someone watches them?",
      choices: [
        { label: "Yes", reveal: "Often not. The limit of direct observation is that people may change their behaviour when watched: the Hawthorne effect." },
        { label: "Not always", reveal: "Right. That is the limit of observation: behaviour may change when observed." },
      ],
    },
    lead: "Job analysis studies a job's tasks, methods, equipment, skills and attitudes.",
    check: [
      ask("Analysing exceptionally effective or ineffective incidents is which method?", "Critical incident technique", ["Direct observation", "Work method analysis", "Interview method"], "Work method analysis uses time and motion study."),
      ask("Which is a strategic use of job analysis?", "Setting measurable performance standards", ["Choosing the company logo", "Fixing interest rates", "Writing the annual report"], "Others are work simplification and supporting HR decisions."),
    ],
    lens: [],
    reflect: "If someone analysed your current role, what would surprise them?",
    summary: {
      points: [
        "Job analysis: a systematic study of a job's tasks, methods, equipment, skills and attitudes.",
        "Yields purpose, organisational fit, the human profile, and relationships and context.",
        "Methods: direct observation, work method analysis, critical incident technique, interviews.",
      ],
      memory: "Study the job before you fill it.",
    },
  },
  {
    blockId: "job-description-and-specification",
    name: "Job description and job specification",
    intro: "What the job involves, and who can do it.",
    before: {
      q: "Does a job description list the qualifications a candidate needs?",
      choices: [
        { label: "Yes", reveal: "That is the job specification. The job description defines the job: purpose, tasks, reporting line, conditions and tools." },
        { label: "No", reveal: "Right. Qualifications belong in the job specification; the description defines the job itself." },
      ],
    },
    lead: "The description defines the job; the specification defines the person.",
    check: [
      ask("Working conditions belong in…", "The job description", ["The job specification", "Both equally", "Neither"], "The description covers purpose, tasks, reporting line, conditions and tools."),
      ask("Emotional traits belong in…", "The job specification", ["The job description", "The job evaluation", "The pay scale"], "With qualifications, experience and skills."),
    ],
    lens: [],
    reflect: "Write one line of a job description and one of a job specification for a role you know.",
    summary: {
      points: [
        "Job description: purpose and summary, tasks and duties, reporting line, working conditions, tools.",
        "Job specification: qualifications, experience, mental and physical attributes, emotional traits, skills.",
      ],
      memory: "Description is what; specification is who.",
    },
  },
  {
    blockId: "job-evaluation",
    name: "Job evaluation and its methods",
    intro: "Judging the relative worth of jobs.",
    before: {
      q: "Should two jobs of similar worth receive similar pay?",
      choices: [
        { label: "Not necessarily", reveal: "Job evaluation aims at internal equity: jobs of similar worth should receive fair, comparable pay." },
        { label: "Yes", reveal: "Right. That is internal equity, the first objective of job evaluation." },
      ],
    },
    lead: "Job evaluation ranks jobs by worth to build a fair pay structure.",
    check: [
      ask("Which method weights compensable factors and assigns points?", "The points system", ["Ranking", "Grading", "Job rotation"], "It is a quantitative method."),
      ask("Which methods are non-quantitative?", "Ranking and grading", ["Points and factor comparison", "Points and ranking", "Factor comparison and grading"], "They compare whole jobs rather than scoring factors."),
    ],
    lens: [
      { pairing: 0, adds: "A salary scale for the state's servants, graded by the importance of each post.", differs: "Kauṭilya fixes pay by rank in a royal administration. Job evaluation derives worth from a systematic analysis of each job's factors." },
    ],
    reflect: "If you ranked the jobs in a team you know, would the pay order match?",
    summary: {
      points: [
        "Job evaluation: a systematic, comparative process for the relative worth of jobs.",
        "Objectives: internal equity, pay structure, fairness, benchmarking.",
        "Methods: ranking and grading (non-quantitative); points and factor comparison (quantitative).",
      ],
      memory: "Analyse, document, rate, rank.",
    },
  },
  {
    blockId: "job-design",
    name: "Job design",
    intro: "Shaping jobs for efficiency and motivation.",
    before: {
      q: "Is adding more tasks at the same level the same as giving more responsibility?",
      choices: [
        { label: "Yes", reveal: "No. More tasks at the same level is job enlargement (horizontal); more responsibility and autonomy is job enrichment (vertical)." },
        { label: "No", reveal: "Right. Enlargement is horizontal; enrichment is vertical." },
      ],
    },
    lead: "Job design balances efficiency with what motivates people.",
    check: [
      ask("Which method moves employees across roles to reduce boredom?", "Job rotation", ["Job enlargement", "Job enrichment", "Job simplification"], "It also builds versatility."),
      ask("Which method risks monotony?", "Job simplification", ["Job enrichment", "Job rotation", "Job enlargement"], "Fewer, repetitive tasks raise efficiency but can bore people."),
    ],
    lens: [
      { pairing: 1, adds: "Once a person is found fit for the work, make them its master.", differs: "The Kuṟaḷ is about appointing a capable officer. Job enrichment redesigns a job to add responsibility and autonomy." },
    ],
    reflect: "Which design method would make your own job more motivating?",
    summary: {
      points: [
        "Job design: structuring jobs for efficiency while meeting motivational needs.",
        "Simplification: fewer tasks. Rotation: different tasks.",
        "Enlargement: more tasks (horizontal). Enrichment: more authority (vertical).",
      ],
      memory: "Simplify, rotate, enlarge, enrich.",
    },
  },
];

export default lessons;
