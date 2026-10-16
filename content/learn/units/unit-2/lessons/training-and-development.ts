import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "training-and-its-methods",
    name: "Training and its methods",
    intro: "Skills for the current job, learnt at work or away from it.",
    before: {
      q: "Is learning from a senior colleague over months a form of training?",
      choices: [
        { label: "No", reveal: "It is: mentoring, long-term guidance by a senior, is an on-the-job training method." },
        { label: "Yes", reveal: "Right. That is mentoring, an on-the-job method." },
      ],
    },
    lead: "Training teaches the skills for the present job, either at the workplace during real work or away from it.",
    check: [
      ask("Which of these is an on-the-job training method?", "Job rotation", ["Classroom training", "E-learning", "Vestibule training"], "Job rotation gives experience across real departments or tasks. Vestibule training uses the same equipment as the job, but in a separate area, so it is off the job."),
      ask("A senior clerk sits beside a new clerk at the counter for a week, showing her how to handle each transaction. This is…", "Coaching", ["Mentoring", "An internship", "Job rotation"], "Short, one-to-one instruction in job skills is coaching. Mentoring is long-term guidance by a senior, often about the person's career as well as the job."),
      ask("Staff at a branch serve customers slowly because the computers keep freezing. What should the manager do first?", "Fix the computers, since training cannot cure a fault that is not a skill gap", ["Send all staff on a customer-service course", "Start a mentoring scheme for the slowest clerks", "Rotate staff between counters to build skills"], "Training only fixes a gap in skill or knowledge. A course is tempting, but the clerks already have the skill; the equipment is the problem."),
    ],
    lens: [],
    reflect: "Which training method has worked best for you, and why?",
    summary: {
      points: [
        "Training: increasing knowledge and skill for doing a particular job (Flippo).",
        "On the job: coaching, job rotation, mentoring, internships, apprenticeships.",
        "Off the job: classroom, seminars and workshops, e-learning, simulations, case studies, vestibule training.",
        "Training fixes skill gaps only; it cannot cure faulty equipment, unclear targets or low morale.",
      ],
      memory: "On the job or off it.",
    },
  },
  {
    blockId: "case-role-play-and-simulation-methods",
    name: "Case, role play and simulation methods",
    intro: "Practising judgement and people skills on made-up problems, away from the job.",
    before: {
      q: "Can a manager learn to handle an angry customer by listening to a lecture alone?",
      choices: [
        { label: "Yes", reveal: "Only partly. A lecture explains ideas but gives little practice; role play lets the trainee try it and review it." },
        { label: "No", reveal: "Right. Practice methods such as role play build the skill; a lecture alone gives little practice." },
      ],
    },
    lead: "Cases, incidents, role plays, in-baskets and business games let trainees practise decisions and dealings with people without real consequences.",
    check: [
      ask("A trainee acts as a manager facing a pile of letters and memos and must set priorities, delegate and schedule within a time limit. Which method is this?", "In-basket", ["Case study", "Business game", "Incident method"], "The in-basket recreates a manager's desk and tests judgement under time pressure. A case is a written account to analyse, and a business game has teams run an imaginary firm."),
      ask("A trainer hands six trainees a one-paragraph account of a real dispute between two supervisors. Each decides alone what to do, then the group compares decisions. This is…", "The incident method", ["A case study", "A role play", "A committee assignment"], "A short account of one event, with a decision and a group comparison, is the incident method. A case is longer and detailed enough to analyse a whole situation."),
      ask("A bank wants new staff to handle angry customers better. Which method fits best?", "Role play, because trainees practise the exchange and can review their own performance", ["A lecture, because it reaches the whole group at once", "A case study, because it trains analysis of written facts", "A conference, because everyone shares views"], "Role play builds interpersonal skill through practice and review. A lecture is tempting for reaching many people, but it gives little practice."),
    ],
    lens: [
      { pairing: 2, adds: "Knowing the words is not the same as being able to act on them.", differs: "The couplet only states the gap. These methods are ways to close it, and the block compares what each method builds." },
    ],
    reflect: "Which of these methods would help you most with a decision you face at work?",
    summary: {
      points: [
        "Case study: a detailed problem to analyse; incident method: one short event and a decision.",
        "Role play: act a part, then review; in-basket: prioritise and delegate under a time limit.",
        "Business games: teams run an imaginary firm; lectures and conferences give concepts and shared views with little practice.",
        "Committee assignments are usually listed as on-the-job: a group studies a real problem.",
        "The learning fades unless trainees can use it at work, and the debrief is where it happens.",
      ],
      memory: "Practise the decision before you face it.",
    },
  },
  {
    blockId: "the-training-process",
    name: "The training process",
    intro: "Six steps from need to follow-up, and four levels for judging the result.",
    before: {
      q: "Is training finished when the session ends?",
      choices: [
        { label: "Yes", reveal: "No. The last step is follow-up: evaluate, correct errors and make sure the learning is applied." },
        { label: "No", reveal: "Right. Follow-up checks that the learning is applied on the job." },
      ],
    },
    lead: "Start by finding who needs to learn what, teach and try it out, then follow up to check the job has changed.",
    check: [
      ask("What is the first step of the training process?", "Identify training needs", ["Determine participants", "Present the operation", "Prepare learners"], "Needs come first: find the performance gaps and skill shortages. Choosing participants is step 2, because you cannot pick people until you know what gap they must fill."),
      ask("A supervisor watches each new cashier bill 20 practice items and corrects mistakes as they happen. Which step is this?", "Performance try-out", ["Present the operation", "Prepare learners", "Follow-up"], "Trainees doing the task under supervision is step 5, the try-out. Follow-up comes later, when the supervisor checks errors on the real job."),
      ask("Trainees rate a workshop highly, but a month later their error rate has not changed. In Kirkpatrick's terms, what does this show?", "A good reaction (level 1), but no proof of change in behaviour or results", ["The training worked, since reaction is the main test", "The trainees learnt nothing at level 2", "The ROI is negative at level 5"], "Enjoying a session is only level 1. Only levels 3 and 4 show the job has changed. The trainees may still have learnt something, so level 2 cannot be ruled out from these facts."),
    ],
    lens: [
      { pairing: 0, adds: "Learn thoroughly, then live by what you have learnt.", differs: "The Kuṟaḷ is about learning for life. The training process makes the second half concrete through supervised try-out and follow-up." },
    ],
    reflect: "Think of a training you attended. Was there any follow-up, and did you apply what you learnt?",
    summary: {
      points: [
        "Identify needs; determine participants; prepare learners.",
        "Present the operation; performance try-out under supervision; follow up.",
        "Steps 3 to 6 are job instruction training: prepare, present, try out, follow up.",
        "Kirkpatrick's levels: reaction, learning, behaviour, results.",
        "Needs analysis has three levels (organisation, task, person) and uses observation, interviews, focus groups, surveys, customer feedback and records.",
      ],
      memory: "Needs, participants, preparation, presentation, try-out, follow-up.",
    },
  },
  {
    blockId: "development-and-how-it-differs",
    name: "Development, and how it differs from training",
    intro: "Growing people for future roles.",
    before: {
      q: "Is a leadership programme for future managers training or development?",
      choices: [
        { label: "Training", reveal: "Development: it prepares people for future roles and long-term growth, not the current job." },
        { label: "Development", reveal: "Right. Development prepares people for future roles and leadership." },
      ],
    },
    lead: "Training is for the present job; development readies people for the jobs they will hold later.",
    check: [
      ask("Which description fits development?", "Long-term, career-oriented and wide in scope", ["Short-term and focused on one job", "Narrow and focused on a single task", "Limited to on-the-job instruction"], "Development prepares people for future roles over a long period. Short-term and job-specific describes training."),
      ask("A bank gives its best loan officer a mentor, a year in branch operations and a small team to lead, to ready her to manage a branch. This is…", "Development, because it prepares her for a future role", ["Training, because mentoring is a training method", "Training, because it improves her present job", "Recruitment, because it fills a future vacancy"], "Mentoring appears under both headings, so the method does not decide. The purpose does: readiness for a future role is development."),
      ask("In a bad year, which spending is most likely to be cut first, and why?", "Development, because it pays off later and is hard to measure", ["Training, because it never improves performance", "Development, because it has no link to succession", "Training, because it is always the most expensive"], "Development's benefits are distant and hard to measure, which makes it an easy cut. The risk is having no one ready when a key person leaves."),
    ],
    lens: [
      { pairing: 1, adds: "Knowledge that keeps flowing the deeper one learns, like water in a sand well.", differs: "The Kuṟaḷ speaks of learning in general. Development is organised by the employer around future roles and the talent pipeline." },
    ],
    reflect: "What would you need to learn in the next two years to be ready for the role above yours?",
    summary: {
      points: [
        "Development: knowledge, skills and abilities for future responsibilities and growth.",
        "Focus: future roles, career growth, leadership potential, the talent pipeline.",
        "Training is short-term and job-specific; development is long-term and career-oriented.",
        "Purpose, not method, decides: the same mentoring can be training or development.",
        "Textbooks add that training is mostly for operatives and reactive, development for managers and proactive; these are tendencies, not rules.",
      ],
      memory: "Training for now; development for next.",
    },
  },
  {
    blockId: "induction-orientation-and-onboarding",
    name: "Induction, orientation and onboarding",
    intro: "Welcoming a new employee and helping them settle in.",
    before: {
      q: "Is a new joiner's first week mainly about learning the job's skills?",
      choices: [
        { label: "Yes", reveal: "Partly. Skills come from training; induction first helps the person settle in, meet people and learn the rules." },
        { label: "No", reveal: "Right. Induction is about settling in. Skill-building is the job of training." },
      ],
    },
    lead: "Induction welcomes and informs a newcomer in three stages: general, specific and follow-up.",
    check: [
      ask("Which kind of induction is given by the immediate supervisor and covers the work, expected results and reporting lines?", "Specific induction", ["General induction", "Follow-up induction", "Preboarding"], "Specific induction concerns the job and the place, and the supervisor gives it. General induction covers the whole organisation and usually comes from HR."),
      ask("Six weeks after a graduate trainee joins, HR asks whether she is satisfied and what difficulties she has met. This is…", "Follow-up induction", ["General induction", "Specific induction", "A training needs analysis"], "Checking satisfaction and counselling a newcomer some weeks after joining is follow-up induction. Specific induction happens at the start, with the supervisor."),
      ask("A firm gives new joiners a six-hour presentation on day one and nothing afterwards. Many leave within months. What is the likeliest weakness?", "Everything is crammed into one day, with no specific or follow-up stage", ["The presentation should have been given by the supervisor alone", "Induction should be dropped in favour of training", "The presentation left out pay and benefits"], "Overload on day one is the usual fault, and the supervisor's job-level stage and the follow-up are skipped. Replacing induction with training is wrong, since the two do different jobs."),
    ],
    lens: [
      { pairing: 3, adds: "A cold welcome is felt at once, and it is hard to undo.", differs: "The couplet is about manners. Induction is a planned programme covering the job, the people, the rules and the place, with follow-up well after the first day." },
    ],
    reflect: "What was missing in your first week at a job, and who could have supplied it?",
    summary: {
      points: [
        "Induction: the planned welcome that helps a new employee settle in and start work.",
        "Three kinds: general (HR, the organisation), specific (supervisor, the job) and follow-up (satisfaction check after some weeks).",
        "Benefits: lower early turnover, faster learning, better morale, fewer grievances, a sense of belonging.",
        "Onboarding is wider: preboarding, induction and orientation, then integration.",
        "Induction welcomes and informs; training builds job skills.",
      ],
      memory: "General, specific, follow-up.",
    },
  },
];

export default lessons;
