import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "competency-and-its-types",
    name: "Competency and its types",
    intro: "What a person knows, can do and is like that shows up as good work.",
    before: {
      q: "Two clerks have the same degree and years of service, yet one handles hard customers far better. What explains the gap?",
      choices: [
        { label: "Qualifications", reveal: "Qualifications are the same here, so they cannot explain the gap. Something else about the person does." },
        { label: "Competencies", reveal: "Right. The difference lies in knowledge, skills, attitudes and traits that show up in behaviour." },
      ],
    },
    lead: "A competency is a demonstrable characteristic, built from knowledge, skills, attitudes and traits, that enables effective performance. Core, cross-functional and functional types differ in how widely a job family needs them.",
    check: [
      ask("Which list gives the four parts of a competency?", "Knowledge, skills, attitudes and traits", ["Purpose, results, activities and indicators", "Core, cross-functional, functional and technical", "Aptitude, achievement, interview and simulation"], "Competency is built from these four parts. The core, cross-functional and functional list is the three types of competency, not its parts."),
      ask("A Pune plant needs every employee to show integrity and teamwork. Which type of competency is this?", "Core competency", ["Cross-functional competency", "Functional competency", "Core competence in the Prahalad and Hamel sense"], "Behaviours needed by everyone and tied to the organisation's aims are core competencies. Budgeting, needed by several departments, would be cross-functional; Prahalad and Hamel's term describes a collective strength of the whole firm."),
      ask("A hospital lists \"data analysis\" for its records officers only. Why is it functional, not cross-functional?", "It is a job-specific technical skill", ["It is a trait that cannot be trained", "Every department needs it", "It is a behaviour tied to the hospital's strategy"], "Functional competencies are job-specific hard skills. If many departments needed the same skill, it would be cross-functional."),
    ],
    lens: [],
    reflect: "List one core, one cross-functional and one functional competency in a job you know well.",
    summary: {
      points: [
        "A competency is a demonstrable characteristic that enables effective job performance.",
        "Four parts: knowledge (knows), skills (can do), attitudes (outlook), traits (enduring qualities).",
        "Core: needed by everyone, tied to strategy. Cross-functional: needed across many functions. Functional: job-specific hard skills.",
        "Core competencies in HR differ from a firm's core competence (Prahalad and Hamel), a strength of the whole firm.",
      ],
      memory: "Know, can do, outlook, trait; core, cross-functional, functional.",
    },
  },
  {
    blockId: "the-competency-mapping-process",
    name: "The competency mapping process",
    intro: "Working out once what each job demands, then reusing it.",
    before: {
      q: "Hiring, training, appraisal and promotion each need to know what a job demands. Should each decision work it out separately?",
      choices: [
        { label: "Yes", reveal: "That repeats the work and gives different answers. One shared description of the job is better." },
        { label: "No", reveal: "Right. Mapping builds one description and reuses it in all four decisions." },
      ],
    },
    lead: "Competency mapping identifies the competencies each job needs in four stages and builds them into HR decisions.",
    check: [
      ask("Which is the correct order of the four stages?", "Design the questionnaire, collect data, analyse and map, finalise", ["Collect data, design the questionnaire, finalise, analyse and map", "Analyse and map, collect data, design the questionnaire, finalise", "Finalise, design the questionnaire, collect data, analyse and map"], "The questionnaire must exist before data is gathered, and the analysis needs the data. Finalising the role descriptions comes last."),
      ask("An analyst compares the daily habits of the best and average stores supervisors and ranks the competencies that differ. Which stage is this?", "Stage 3, analyse and map", ["Stage 1, design the questionnaire", "Stage 2, collect the data", "Stage 4, finalise"], "Ranking competencies and comparing good with average performers is stage 3. Interviewing the supervisors and their managers is stage 2, which only supplies the data."),
      ask("A manager says competency mapping is the same as job analysis. What is the best reply?", "Job analysis records the tasks and duties; mapping asks which behaviour separates strong performers", ["Mapping records tasks and duties; job analysis ranks behaviour", "They are the same; only the names differ", "Mapping applies to managers; job analysis applies to workers"], "Job analysis describes the job and often feeds mapping. Mapping goes further, to the behaviour behind strong performance."),
    ],
    lens: [],
    reflect: "Pick a job you know. What would be its purpose, one critical success factor and one key result area?",
    summary: {
      points: [
        "Competency mapping identifies the competencies for an organisation and each job and builds them into HR processes.",
        "Why: costly staff, people as an asset, getting more from existing people, customer focus.",
        "Four stages: design the questionnaire, collect data, analyse and map, finalise.",
        "Stage 1 covers purpose, critical success factors, key result areas and key activities.",
        "Uses: recruitment, training, appraisal and promotion.",
      ],
      memory: "Design, collect, analyse, finalise.",
    },
  },
  {
    blockId: "methods-of-competency-mapping",
    name: "Methods of competency mapping",
    intro: "Five ways to find out which competencies a job needs and who has them.",
    before: {
      q: "Choosing one manager from forty applicants and mapping four thousand employees: do both need the same method?",
      choices: [
        { label: "Yes", reveal: "A method that observes people closely is too costly for four thousand; one that reaches thousands cheaply may miss behaviour." },
        { label: "No", reveal: "Right. Each method has its own strength, which is why mapping often combines two or three." },
      ],
    },
    lead: "Assessment centres, critical incidents, interviews, questionnaires and psychometric tests each see a different part of the picture.",
    check: [
      ask("Which method has trained assessors observe candidates in group discussions, in-basket exercises and role-plays?", "Assessment centre", ["Critical incident technique", "Psychometric testing", "Questionnaire"], "Observed simulations define the assessment centre. The critical incident technique studies real events instead, collected from the job."),
      ask("A firm wants to know whether trainees can learn programming quickly, before any training. Which test fits?", "An aptitude test", ["An achievement test", "A critical incident interview", "The Position Analysis Questionnaire"], "Aptitude tests predict how well a person will learn with training. An achievement test shows what has already been learned."),
      ask("An exam question lists the Position Analysis Questionnaire and Functional Job Analysis as mapping methods. What should you note?", "They come from job analysis and describe work, not the person", ["They are the only methods that assess personality", "They are psychometric tests of aptitude", "They are assessment centre exercises"], "CMQ, PAQ and FJA are job analysis tools that mapping borrows. Functional Job Analysis is a method (Fine: data, people, things), not a questionnaire."),
    ],
    lens: [],
    reflect: "For a role you might hire for, which two methods would you combine, and what does each cover that the other misses?",
    summary: {
      points: [
        "Assessment centre: observed simulations such as group discussion, in-basket and role-play.",
        "Critical incident technique (Flanagan): real examples of exceptional success or failure, grouped by behaviour.",
        "Interviews: first-hand insight, compared with the competency map.",
        "Questionnaires: CMQ, PAQ and others are job analysis tools; Functional Job Analysis is a method rating data, people and things.",
        "Psychometric tests: aptitude (can learn) and achievement (has learned).",
      ],
      memory: "Centre, incidents, interviews, questionnaires, tests.",
    },
  },
  {
    blockId: "balanced-scorecard-and-people-measures",
    name: "The balanced scorecard and people measures",
    intro: "Four views of performance, with people at the foundation.",
    before: {
      q: "A plant reports record profit while its best technicians leave. Is profit alone a safe guide?",
      choices: [
        { label: "Yes", reveal: "Profit reports what has already happened. Trouble in people and processes shows up there last." },
        { label: "No", reveal: "Right. The scorecard adds customer, process and learning measures that move before profit does." },
      ],
    },
    lead: "The balanced scorecard (Kaplan and Norton, 1992) is a general strategic framework with four perspectives, and people measures sit under each, mostly under learning and growth.",
    check: [
      ask("Who introduced the balanced scorecard, and in which year?", "Robert Kaplan and David Norton, 1992", ["Frederick Taylor and Henry Fayol, 1911", "Douglas McGregor and David Norton, 1960", "Donald Kirkpatrick and Robert Kaplan, 1959"], "Kaplan and Norton published it in Harvard Business Review in 1992. McGregor, Taylor and Kirkpatrick are known for other ideas."),
      ask("A firm measures how many customers return within a month. Under which perspective does this measure belong?", "Customer", ["Learning and growth", "Internal business process", "Financial"], "Customer retention and repeat custom belong to the Customer perspective. Learning and growth covers employee skills, training and culture."),
      ask("A manager says the scorecard is an HR tool with a fifth perspective called Human Resource. How should you judge this?", "Wrong: it is a general framework with four perspectives, and people measures sit under them", ["Right: HR is a fifth perspective, added to the original four", "Right: it was designed to evaluate HR departments only", "Wrong: it has no people measures at all"], "The scorecard serves the whole organisation and has exactly four perspectives. The HR-specific adaptation is the separate HR scorecard (Becker, Huselid and Ulrich)."),
    ],
    lens: [],
    reflect: "Choose one people measure for each of the four perspectives in an organisation you know. Which is easiest to measure, and which matters most?",
    summary: {
      points: [
        "The balanced scorecard (Kaplan and Norton, 1992) turns mission and strategy into measures in four perspectives.",
        "It is a general strategic framework, not an HR-only tool; the four are Financial, Customer, Internal Business Process, Learning and Growth.",
        "Learning and growth holds employee skills, training, engagement and culture; customer retention belongs under Customer.",
        "The competency map gives a yardstick for learning and growth measures.",
        "People measures are hard to choose well: training hours show effort, not skill.",
      ],
      memory: "Money, customers, processes, learning: people at the foundation.",
    },
  },
];

export default lessons;
