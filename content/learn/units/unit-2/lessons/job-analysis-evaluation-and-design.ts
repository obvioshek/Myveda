import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "job-analysis",
    name: "Job analysis and its methods",
    intro: "Studying what a job involves and what it needs, before hiring, training or paying for it.",
    before: {
      q: "Will people work exactly as usual while someone watches them?",
      choices: [
        { label: "Yes", reveal: "Often not. The limit of direct observation is that people may change their behaviour when watched: the Hawthorne effect." },
        { label: "Not always", reveal: "Right. That is the limit of observation: behaviour may change when observed." },
      ],
    },
    lead: "Job analysis finds out what a job involves and what kind of person can do it, and feeds almost every other HR decision.",
    check: [
      ask("Analysing exceptionally effective or ineffective incidents is which method?", "Critical incident technique", ["Direct observation", "Work method analysis", "Interview method"], "The critical incident technique studies the best and worst cases. Work method analysis is the tempting wrong answer, but it uses time and motion study to find the most efficient sequence."),
      ask("A hospital wants to analyse its doctors' jobs, which involve a lot of diagnosis and judgement. Which method is weakest on its own here?", "Direct observation", ["Interview method", "Critical incident technique", "Work diaries kept by the doctors"], "Observation suits routine or physical work and misses thinking work, such as diagnosis. Interviews can be inflated, but they can still capture the reasoning behind the job."),
      ask("An analyst finds that an operator's costliest mistakes happen at shift change. Which use of job analysis does this most directly support?", "Setting performance standards and training for the handover", ["Choosing the company logo", "Fixing the interest rate on loans", "Writing the annual report"], "Job analysis supports performance standards, training and selection. The other options have nothing to do with what the job involves."),
    ],
    lens: [],
    reflect: "If someone analysed your current role, what would surprise them?",
    summary: {
      points: [
        "Job analysis: a systematic study of a job's tasks, methods, equipment, skills and attitudes.",
        "Yields purpose, organisational fit, the human profile, and relationships and context.",
        "Methods: direct observation, work method analysis, critical incident technique, interviews; most analyses combine several.",
        "It produces the job description and job specification, and comes before job evaluation.",
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
    lead: "The description defines the job; the specification defines the person who can do it.",
    check: [
      ask("Working conditions belong in…", "The job description", ["The job specification", "The job evaluation", "The pay scale"], "The description covers purpose, tasks, reporting line, conditions and tools. The specification is tempting, but it describes the person, not the work."),
      ask("A bank writes \"stays calm under pressure from a long queue\" for a counter supervisor. Where does this line belong?", "The job specification", ["The job description", "The performance appraisal", "The job evaluation"], "It describes a quality the person needs, so it is part of the specification. The rush of a long queue is a working condition, but calmness is a trait of the person."),
      ask("A data-entry job's specification asks for a postgraduate degree, though no duty needs one. What is the main problem?", "It shrinks the pool and shuts out people who could do the job", ["It makes the job description too short", "It breaks the rule that descriptions come first", "It turns the specification into a job evaluation"], "An inflated specification screens out capable people and narrows the pool. Each line of the specification should be traced to a duty in the description."),
    ],
    lens: [],
    reflect: "Write one line of a job description and one of a job specification for a role you know.",
    summary: {
      points: [
        "Both come from job analysis: the description looks at the work, the specification at the worker.",
        "Job description: purpose and summary, tasks and duties, reporting line, working conditions, tools.",
        "Job specification: qualifications, experience, mental and physical attributes, emotional traits, skills.",
        "The description feeds the advertisement and appraisal; the specification feeds screening and interviews.",
      ],
      memory: "Description is what; specification is who.",
    },
  },
  {
    blockId: "job-evaluation",
    name: "Job evaluation and its methods",
    intro: "Judging the relative worth of jobs, so that pay can be set in a fair order.",
    before: {
      q: "Should two jobs of similar worth receive similar pay?",
      choices: [
        { label: "Not necessarily", reveal: "Job evaluation aims at internal equity: jobs of similar worth should receive fair, comparable pay." },
        { label: "Yes", reveal: "Right. That is internal equity, the first objective of job evaluation." },
      ],
    },
    lead: "Job evaluation compares jobs, not people, and ranks them by worth to build a fair pay structure.",
    check: [
      ask("Which methods of job evaluation are non-quantitative?", "Ranking and grading", ["Points and factor comparison", "Points and ranking", "Factor comparison and grading"], "Ranking and grading compare whole jobs. Points and factor comparison are quantitative, because they score jobs factor by factor."),
      ask("Two cashiers in the same branch get different ratings this year. Which process produced the difference?", "Performance appraisal", ["Job evaluation", "Job analysis", "Job enlargement"], "Job evaluation rates the job, so both cashiers share one job value. Different ratings for people in the same job come from appraisal."),
      ask("Skill is worth 80 points a level, responsibility 60, effort 40 and conditions 20. A job rates 3, 2, 4 and 1. Its total is…", "540 points", ["500 points", "580 points", "460 points"], "3 × 80 = 240, 2 × 60 = 120, 4 × 40 = 160, 1 × 20 = 20. 240 + 120 + 160 + 20 = 540."),
    ],
    lens: [
      { pairing: 0, adds: "A salary scale for the state's servants, graded by the importance of each post.", differs: "Kauṭilya fixes pay by rank in a royal administration. Job evaluation derives worth from a systematic analysis of each job's factors." },
    ],
    reflect: "If you ranked the jobs in a team you know, would the pay order match?",
    summary: {
      points: [
        "Job evaluation: a systematic, comparative process for the relative worth of jobs.",
        "Objectives: internal equity, a standard pay structure, fairness, benchmarking.",
        "Process: job analysis, documentation, rating, hierarchy; pay ranges attach to the grades.",
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
    lead: "Job design decides which tasks go into a job and how much say the person has, balancing efficiency with motivation.",
    check: [
      ask("Which method moves employees across roles to reduce boredom?", "Job rotation", ["Job enlargement", "Job enrichment", "Job simplification"], "Rotation moves the person between jobs without changing them. Enlargement is tempting, but it changes the job itself by adding tasks."),
      ask("A loan clerk who only typed data now handles small loans from start to finish and can approve them up to a limit. This is…", "Job enrichment", ["Job enlargement", "Job rotation", "Job simplification"], "The power to approve is more control over the work, which is vertical: enrichment. Enlargement would add more tasks of the same level, with no new authority."),
      ask("Skill variety 3, task identity 4, task significance 5, autonomy 2, feedback 3. What is the motivating potential score?", "24", ["72", "12", "36"], "Average the first three: (3 + 4 + 5) ÷ 3 = 4. Then multiply by autonomy and feedback: 4 × 2 × 3 = 24. Adding the three instead of averaging gives 72."),
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
        "Match the method to the problem: boredom, low ownership or errors.",
      ],
      memory: "Simplify, rotate, enlarge, enrich.",
    },
  },
];

export default lessons;
