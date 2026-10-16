import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "performance-management-and-its-cycle",
    name: "Performance management and its cycle",
    intro: "The year-round system around the yearly review.",
    before: {
      q: "Is the annual review the whole of performance management?",
      choices: [
        { label: "Yes", reveal: "No. The review is one phase. Planning, monitoring, feedback and reward fill the rest of the year." },
        { label: "No", reveal: "Right. The review is phase four of five, and it only works if the other phases happen." },
      ],
    },
    lead: "Performance management is a loop of plan, monitor, feedback, review and reward; appraisal is only the formal look back inside it.",
    check: [
      ask("Which pair correctly contrasts performance management with performance appraisal?", "Management is continuous and looks ahead; appraisal is a periodic review of past performance", ["Management is an annual form; appraisal is a continuous process", "Management rates personality traits; appraisal sets business goals", "They are one process, and appraisal is only the newer name"], "Management runs all year and aims at improvement; appraisal is the formal look back. Swapping the two is the tempting error, but it is appraisal that is periodic."),
      ask("In June a supervisor notices a technician's rejects rising, sits with him and agrees extra practice. Which phase is this?", "Feedback and coaching", ["Performance planning", "Performance review (appraisal)", "Rewards and development"], "Timely help so that people correct course early is phase three. The formal review comes at the end of the period, so it is the tempting but wrong answer."),
      ask("The standard allows 2% rejects. A fitter makes 5,000 parts and 250 are rejected. What is the performance gap in parts?", "150", ["250", "100", "3"], "The standard allows 100 rejects, and 250 − 100 = 150 parts. 250 is the actual figure, 100 is the allowed figure, and 3 is the gap in percentage points, not parts."),
    ],
    lens: [],
    reflect: "Think of your last review at work. Which of the five phases did you actually have in the months before it?",
    summary: {
      points: [
        "Performance management: a continuous, strategic process that aligns people's work with organisational goals; appraisal is a formal, periodic look at past performance.",
        "Objectives: goal alignment, continuous improvement, employee development, recognition and motivation.",
        "Five phases: plan (SMART goals), monitor (KPIs), feedback and coaching, review, reward and development. The loop repeats.",
        "Key terms: KPI, performance standard, performance gap (expected minus actual), performance improvement plan.",
      ],
      memory: "Plan, monitor, feedback, review, reward.",
    },
  },
  {
    blockId: "traditional-appraisal-methods",
    name: "Traditional appraisal methods",
    intro: "Six older ways of rating people.",
    before: {
      q: "Can a team of twelve strong clerks all be ranked first?",
      choices: [
        { label: "Yes", reveal: "Not under ranking. Ranking compares people with each other, so someone must come last." },
        { label: "No", reveal: "Right. Ranking forces an order. A rating scale, which compares each person with a standard, would let all score high." },
      ],
    },
    lead: "Ranking, paired comparison, graphic rating scale, checklist, critical incident and confidential report are the six traditional methods.",
    check: [
      ask("Which method records specific examples of very good or very poor behaviour through the period?", "Critical incident method", ["Graphic rating scale", "Checklist method", "Paired comparison"], "The critical incident method builds its evidence from recorded events. A checklist only ticks yes or no against fixed statements."),
      ask("A department files a private yearly report on each officer, and the officer sees it only if an adverse entry is made. Which method is this?", "Confidential report", ["Ranking", "Forced choice", "Field review"], "Secret reports with feedback only for adverse entries are the classic confidential report. A field review is done by an outsider, but it is not secret in this way."),
      ask("A manager compares each of 6 clerks with every other clerk, one pair at a time. How many comparisons must she make?", "15", ["30", "12", "36"], "N × (N − 1) ÷ 2 = 6 × 5 ÷ 2 = 15. The figure 30 is 6 × 5 without halving, which counts each pair twice."),
    ],
    lens: [],
    reflect: "Which weakness of the graphic rating scale have you seen in a rating you received or gave?",
    summary: {
      points: [
        "Traditional methods: ranking, paired comparison, graphic rating scale, checklist, critical incident, confidential report.",
        "Paired comparison needs N × (N − 1) ÷ 2 pairs; the employee with the most wins ranks first.",
        "Others in textbooks: forced distribution, forced choice, essay, field review, performance tests.",
        "Ranking compares people with each other; rating compares each person with a standard.",
        "Common weakness: trait ratings, a backward look, and room for rater bias.",
      ],
      memory: "Rank, pair, scale, tick, incident, secret report.",
    },
  },
  {
    blockId: "modern-appraisal-methods",
    name: "Modern appraisal methods",
    intro: "Results, behaviour and potential, seen through several eyes.",
    before: {
      q: "Can your juniors and customers help rate your work?",
      choices: [
        { label: "No", reveal: "In 360-degree feedback they do. Supervisor, peers, subordinates, customers and the person all give ratings." },
        { label: "Yes", reveal: "Right. That is 360-degree feedback, and it is one of the six modern methods." },
      ],
    },
    lead: "The modern methods are 360-degree feedback, MBO, BARS, assessment centres, psychological appraisal and human resource accounting.",
    check: [
      ask("In a behaviourally anchored rating scale (BARS), each point on the scale is described by…", "An example of behaviour that a person at that level shows", ["A word such as good or poor, applied to a trait", "A sales target fixed jointly with the manager", "The employee's rank against co-workers"], "BARS anchors each point with observable behaviour. Words such as poor and good describe a graphic rating scale, the tempting confusion."),
      ask("A bank picks branch heads from 12 officers by watching each in an in-basket task, a role play with an angry customer and a group discussion. Which method is this?", "Assessment centre", ["Management by objectives", "Psychological appraisal", "360-degree feedback"], "Trained observers scoring simulated tasks is an assessment centre. Psychological appraisal relies on interviews and tests, not on simulated work."),
      ask("A plant links 360-degree ratings straight to the annual bonus. What is the most likely result?", "Raters may inflate or trade marks, so the feedback becomes less honest", ["Customers will no longer be able to give ratings", "The method will stop measuring interpersonal skills", "Peers will rate more harshly than supervisors"], "When pay depends on ratings, raters may inflate or trade marks, which is why many firms keep 360 for development. Nothing about pay changes who can rate, so the other options do not follow."),
    ],
    lens: [],
    reflect: "Would 360-degree feedback work in your workplace today? What would have to be true first?",
    summary: {
      points: [
        "360-degree feedback: ratings from supervisor, peers, subordinates, customers and self; it needs a mature culture.",
        "MBO (Drucker, 1954): set goals jointly, set standards, compare results, set new goals.",
        "BARS (Smith and Kendall, 1963): each scale point is anchored by an example of behaviour.",
        "Assessment centres use simulations; psychological appraisal looks at potential; human resource accounting counts cost and value in money.",
      ],
      memory: "360 sources, objectives, behaviour anchors, simulations, psychologists, money.",
    },
  },
  {
    blockId: "rater-errors-and-fair-appraisal",
    name: "Rater errors and fair appraisal",
    intro: "How the rater distorts the rating, and how to reduce it.",
    before: {
      q: "If two supervisors give the same worker 9 and 5, is the worker always the cause?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. The gap may come from the raters' own habits, such as leniency or strictness." },
        { label: "No", reveal: "Right. Rater errors can pull a score away from the real performance." },
      ],
    },
    lead: "Halo, horn, leniency, strictness, central tendency and recency are errors of the rater, and standards, records and several raters reduce them.",
    check: [
      ask("Which of these is a rater error, not an appraisal method?", "Halo effect", ["Paired comparison", "Critical incident", "Assessment centre"], "The halo effect is a distortion in the rater's judgement. The other three are ways of appraising, so a question asking for the one that is not a method has the halo effect as its answer."),
      ask("A supervisor rates all ten staff 3 out of 5, though their results differ widely. Which error is this?", "Central tendency", ["Leniency", "Halo effect", "Recency effect"], "Putting everyone in the middle is central tendency. Leniency means marking everyone high, and 3 out of 5 is the middle, not high."),
      ask("A supervisor marks a fitter down for one mistake last month and ignores eleven good months. Which step best prevents this?", "Keep a running record of incidents through the year", ["Rate everyone in a single sitting just before the review", "Let the fitter rate himself instead", "Replace appraisal with a simple ranking"], "A record across the whole period counters the recency effect. A ranking made at the last minute would repeat the problem, because the latest events still stand out."),
    ],
    lens: [],
    reflect: "Which rater error are you most likely to make, and what one habit would catch it?",
    summary: {
      points: [
        "Rater errors: halo, horn, leniency, strictness, central tendency, recency, first impression, spillover, personal bias and stereotyping.",
        "The halo effect is a rater error, not an appraisal method.",
        "Fairer appraisal: clear standards, one dimension at a time, a running record, several raters or calibration, rater training.",
        "Challenges: bias, time and cost, feedback avoidance, inconsistent standards.",
        "A good feedback talk is one to one, specific, two-way and ends with agreed actions.",
      ],
      memory: "The rater is the problem: halo, horn, lenient, strict, middle, recent.",
    },
  },
];

export default lessons;
