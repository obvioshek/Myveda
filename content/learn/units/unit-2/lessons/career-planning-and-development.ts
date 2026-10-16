import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "career-cone-and-career-stages",
    name: "Careers, Schein's cone and career stages",
    intro: "Three directions a career can move, and five stages it passes through.",
    before: {
      q: "Can a person move ahead in an organisation without being promoted?",
      choices: [
        { label: "No", reveal: "She can. Schein's cone has three directions, and only one of them is promotion." },
        { label: "Yes", reveal: "Right. Moving to another function, or closer to the centre of decisions, is also career movement." },
      ],
    },
    lead: "Schein's cone shows a career moving vertically (rank), circumferentially (function) and radially (closeness to the centre), through five stages from exploration to decline.",
    check: [
      ask("In Schein's career cone, a move to a different department at the same level is called…", "Circumferential movement", ["Vertical movement", "Radial movement", "Downward mobility"], "Circumferential movement crosses a functional boundary. Vertical movement changes rank, so it is the tempting answer only when the level changes."),
      ask("A senior clerk keeps her title, but the branch manager now consults her before every major decision. Which movement is this?", "Radial: she has moved toward the inner circle", ["Vertical: she has been promoted", "Circumferential: she has changed function", "None: nothing about her career has changed"], "Radial movement is gaining trust, influence and access to decisions. It is not vertical, because her rank has not changed."),
      ask("A 30-year-old has just spent four years in a first job, learning from a mentor and making mistakes. Which stage fits best, using the rough ages in the chapter?", "Establishment", ["Exploration", "Mid-career", "Late career"], "Establishment is the first real job, about 25 to 35, with a mentor and mistakes. Exploration comes before the first job, and the ages are rough guides only."),
    ],
    lens: [
      { pairing: 0, adds: "Stages of life are met steadily when they are expected.", differs: "The verse concerns the self across lives. Career stages are an organisational model whose ages vary, and the chapter says that textbooks differ on them." },
    ],
    reflect: "Think of one move in your own working life. Was it vertical, circumferential or radial?",
    summary: {
      points: [
        "A career is the sequence of work experiences over a person's life (Hall); Flippo stresses continuity, order and meaning.",
        "Schein's cone: vertical (rank), circumferential (function), radial (closeness to the centre).",
        "Five stages: exploration, establishment, mid-career, late career, decline. Ages are rough guides.",
        "Textbooks differ on the ages and on the number of stages (Super, Greenhaus and others).",
      ],
      memory: "Up, across, inward; explore, establish, mid, late, decline.",
    },
  },
  {
    blockId: "career-planning-management-and-development",
    name: "Career planning, management and development",
    intro: "Who plans, who manages, and the seven steps from self-assessment to review.",
    before: {
      q: "Whose job is it to plan a person's career: the employer's or the employee's?",
      choices: [
        { label: "The employer's", reveal: "Mainly the individual's. The organisation manages the system around the plan and supports it." },
        { label: "The employee's", reveal: "Right, mainly. The organisation supplies information, opportunities and support." },
      ],
    },
    lead: "Career planning is the individual choosing goals and a path through seven steps; the organisation supports it through career management and initiatives such as mentoring and personal development plans.",
    check: [
      ask("Which is the correct order of the first three steps of career planning?", "Self-assessment, explore options, set SMART goals", ["Set SMART goals, self-assessment, explore options", "Explore options, set SMART goals, self-assessment", "Self-assessment, set SMART goals, explore options"], "You assess yourself, then research options that fit, then set goals. Setting goals before exploring options is the common slip."),
      ask("A firm gives each employee a written plan of skills to build, with dates, and tracks progress against it. Which initiative is this?", "A personal development plan", ["Career counselling", "Coaching", "A career planning workshop"], "A PDP is a written, dated plan to track progress. Counselling is advice, and coaching is one-to-one guidance on skills."),
      ask("Which is NOT one of the five career development initiatives listed in the chapter?", "Exit interviews", ["Mentoring", "Coaching", "Career counselling"], "Mentoring, coaching and career counselling are all on the list, with planning workshops and personal development plans. An exit interview happens after someone has decided to leave."),
    ],
    lens: [],
    reflect: "Which of the seven steps have you done for your own career, and which have you skipped?",
    summary: {
      points: [
        "Career planning: the individual selects career goals and the path to them (Werther and Davis).",
        "Seven steps: self-assessment, explore options, SMART goals, action plan, acquire skills, seek feedback, monitor and adjust.",
        "Five initiatives: career planning workshops, mentoring, career counselling, coaching, personal development plans.",
        "Textbooks disagree on which of career management and career development is the umbrella; learn each definition.",
      ],
      memory: "Assess, explore, goal, plan, learn, feedback, adjust.",
    },
  },
  {
    blockId: "succession-planning",
    name: "Succession planning",
    intro: "Getting people ready now for key jobs that will fall vacant later.",
    before: {
      q: "Should a firm wait until a key person resigns before looking for a successor?",
      choices: [
        { label: "Yes", reveal: "That is the gap succession planning exists to close. It prepares people before the vacancy arises." },
        { label: "No", reveal: "Right. Succession planning identifies and develops successors in advance." },
      ],
    },
    lead: "Succession planning follows six steps in order: key positions, competencies, potential successors, readiness, development plans, then implement and monitor.",
    check: [
      ask("Which is the correct order of the first three steps of succession planning?", "Identify key positions, map competencies, identify potential successors", ["Identify potential successors, identify key positions, map competencies", "Map competencies, identify key positions, identify potential successors", "Identify key positions, identify potential successors, map competencies"], "You cannot map the skills of a job you have not chosen, and you map them before judging who has them. Identifying successors before mapping skills has no yardstick."),
      ask("A bank wants to know whether its branch managers are ready to run regional offices. Appraisal records and 360-degree feedback are collected. Which step is this?", "Assess readiness", ["Identify key positions", "Build development plans", "Map competencies"], "Appraisal and 360-degree feedback are the tools of step 4, readiness. Development plans come after readiness is known."),
      ask("A manager says: \"Succession planning is just career planning for everyone.\" What is wrong with this?", "Succession planning starts from key positions and covers key and high-potential staff, not everyone", ["Nothing: both start from the employee's own goals", "Succession planning has a shorter horizon than career planning", "Succession planning is for outside candidates only"], "Career planning is employee-focused and covers all employees. Succession planning is organisation-focused and aims at leadership continuity for key positions."),
    ],
    lens: [],
    reflect: "Pick one key job in an organisation you know. Who could fill it if the holder left next month?",
    summary: {
      points: [
        "Succession planning: the systematic process of identifying and developing future leaders for key positions.",
        "Six steps: key positions, competency mapping, potential successors, readiness, development plans, implement and monitor.",
        "Aims: leadership continuity, retained knowledge, readiness for sudden vacancies.",
        "Career planning is employee-focused; succession planning is organisation-focused.",
        "Replacement charts are its simple form; plans can favour people who resemble today's leaders.",
      ],
      memory: "Key jobs, skills, candidates, readiness, plans, review.",
    },
  },
  {
    blockId: "career-paths-mobility-plateau-and-anchors",
    name: "Career paths, plateau and anchors",
    intro: "Routes, moves, dead ends, and what a person will not give up.",
    before: {
      q: "Is a career plateau the same as failing at work?",
      choices: [
        { label: "Yes", reveal: "No. A plateau means promotion chances are low and work is repetitive. The person may still perform well." },
        { label: "No", reveal: "Right. A plateau is about the path and the job, not about how well the person performs." },
      ],
    },
    lead: "Career paths can be historical, organisational or behavioural; mobility is movement across grades or occupations; a plateau is a dead end for promotion; Schein's anchors are the themes a person will not give up.",
    check: [
      ask("Which kind of career path is built from a formal analysis of the work actually done in each job?", "Behavioural", ["Historical", "Organisational", "Vertical"], "A behavioural path comes from analysing the job's activities. A historical path copies how people got where they are."),
      ask("A skilled tool-room specialist is offered a managerial post but turns it down, saying she wants to keep getting better at her craft. Which of Schein's anchors does this suggest?", "Technical or functional competence", ["General managerial competence", "Security or stability", "Pure challenge"], "She will not give up mastery of her craft, which is the technical or functional anchor. A managerial anchor would make her accept the post."),
      ask("An employee has done the same repetitive work for eight years, and the post above hers has no vacancy. A manager proposes a lateral move into a different function with a wider role. Is this a sensible response?", "Yes: lateral moves and wider roles are ways to respond to a plateau", ["No: a plateau can only be solved by promotion", "No: lateral moves count as downward mobility", "Yes, but only if she is also demoted"], "Lateral moves, rotation and a bigger role restore growth when promotion is blocked. A lateral move changes function, not rank, so it is not downward mobility."),
    ],
    lens: [],
    reflect: "What is your own career anchor? Which of the eight would you refuse to give up?",
    summary: {
      points: [
        "Career path: the sequential pattern of jobs that forms a career; three kinds are historical, organisational and behavioural.",
        "Career mobility: movement across grades or positions, upward or downward, or a change of occupation.",
        "Career plateau: promotion chances are low and the work is repetitive; the cause may be structure or content.",
        "Career anchors are Schein's: eight themes, found by self-assessment.",
      ],
      memory: "Path, move, plateau, anchor.",
    },
  },
];

export default lessons;
