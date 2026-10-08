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
      ],
      memory: "Training for now; development for next.",
    },
  },
];

export default lessons;
