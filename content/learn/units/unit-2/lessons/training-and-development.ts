import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "training-and-its-methods",
    name: "Training and its methods",
    intro: "Skills for the current job, on and off the job.",
    before: {
      q: "Is learning from a senior colleague over months a form of training?",
      choices: [
        { label: "No", reveal: "It is: mentoring, long-term guidance by a senior, is an on-the-job training method." },
        { label: "Yes", reveal: "Right. That is mentoring, an on-the-job method." },
      ],
    },
    lead: "Training improves performance in the current job, through on-the-job and off-the-job methods.",
    check: [
      ask("Which is an on-the-job method?", "Job rotation", ["Classroom training", "E-learning", "Case studies"], "The others take place off the job."),
      ask("Training tends to…", "Raise productivity and quality and lower operational costs", ["Raise costs without benefit", "Prepare only for future roles", "Replace recruitment"], "Its focus is practical and immediate."),
    ],
    lens: [],
    reflect: "Which training method has worked best for you, and why?",
    summary: {
      points: [
        "Training: enhancing skills, knowledge and competencies for the current job.",
        "On the job: coaching, job rotation, mentoring, internships, apprenticeships.",
        "Off the job: classroom, seminars and workshops, e-learning, simulations, case studies.",
      ],
      memory: "On the job or off it.",
    },
  },
  {
    blockId: "the-training-process",
    name: "The training process",
    intro: "Six steps from need to follow-up.",
    before: {
      q: "Is training finished when the session ends?",
      choices: [
        { label: "Yes", reveal: "No. The last step is follow-up: evaluate, correct errors and make sure the learning is applied." },
        { label: "No", reveal: "Right. Follow-up checks that the learning is applied on the job." },
      ],
    },
    lead: "Needs, participants, preparation, presentation, try-out, follow-up.",
    check: [
      ask("What is the first step?", "Identify training needs", ["Determine participants", "Present the operation", "Follow-up"], "Find the performance gaps and skill shortages first."),
      ask("Trainees perform under supervision in which step?", "Performance try-out", ["Present the operation", "Prepare learners", "Follow-up"], "Step 5."),
    ],
    lens: [
      { pairing: 0, adds: "Learn thoroughly, then live by what you have learnt.", differs: "The Kuṟaḷ is about learning for life. The training process makes the second half concrete through supervised try-out and follow-up." },
    ],
    reflect: "Think of a training you attended. Was there any follow-up, and did you apply what you learnt?",
    summary: {
      points: [
        "Identify needs; determine participants; prepare learners.",
        "Present the operation; performance try-out under supervision.",
        "Follow up: evaluate, correct and ensure it is applied.",
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
    lead: "Training is for current performance; development is for future growth.",
    check: [
      ask("Which describes development?", "Long-term, career-oriented and wide", ["Short-term and job-specific", "Narrow and task-based", "Limited to on-the-job training"], "Training is short-term and job-specific."),
      ask("Which is a development method?", "Job enrichment", ["Apprenticeship only", "Time and motion study", "Performance try-out"], "Others include mentoring, cross-training and certifications."),
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
      ],
      memory: "Training for now; development for next.",
    },
  },
];

export default lessons;
