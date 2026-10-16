import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-talent-management-is",
    name: "What talent management is",
    intro: "Looking after capable people as one connected path, from hiring to succession.",
    before: {
      q: "If a firm recruits well and trains well, has it done talent management?",
      choices: [
        { label: "Yes", reveal: "Not yet. Talent management also needs forecasting, retention, succession and engagement, joined into one managed path." },
        { label: "Not yet", reveal: "Right. Good separate HR tasks are not enough unless someone manages the whole path of capable people." },
      ],
    },
    lead: "Talent management ties seven HR processes into one flow that attracts, develops, motivates and retains high performers, and it pays off in performance, innovation and lower turnover.",
    check: [
      ask("Which description fits talent management best?", "The full set of HR processes that attract, onboard, develop, motivate and retain high-performing employees", ["The forecast of how many employees the firm will need in each job", "The process of choosing the best candidate from the applicants", "The study of how people behave in groups at work"], "Talent management spans the whole path. A forecast of numbers is only HR planning, which is one process inside talent management."),
      ask("A hospital recruits and trains nurses well, but nobody plans who leads the ward when the head nurse retires, and good nurses leave for lack of a career path. What is the best diagnosis?", "The separate HR tasks are not joined into one managed path that covers succession and retention", ["Recruitment is the only process that needs improving", "The hospital needs more staff for pay administration", "Talent management applies only to senior managers"], "The gaps are in succession and retention, so the path as a whole is unmanaged. Recruitment is already working, so improving it would not fix these gaps."),
      ask("A firm says only its top 10 performers count as \"talent\" and invests in them alone. What risk does the chapter point to?", "Everyone else may lose motivation, because the word can mean a few stars or all employees", ["The plan breaks the rule that talent management covers all staff equally", "The top 10 will refuse the investment", "Succession planning becomes impossible"], "Firms differ on whether talent means a few or all, and investing in a chosen few can discourage the rest. No rule forces equal treatment, so the first option is the tempting wrong answer."),
    ],
    lens: [],
    reflect: "Think of a key post in an organisation you know. Who could fill it if the holder left tomorrow, and who in a year?",
    summary: {
      points: [
        "Talent management: the full scope of HR processes to attract, onboard, develop, motivate and retain high-performing employees.",
        "Seven processes: workforce planning, recruitment and onboarding, performance management, learning and development, engagement, succession planning, retention.",
        "It matters for performance, competitive advantage, innovation, team synergy, lower turnover, employer branding and internal capability.",
        "It is wider than succession planning and narrower than all of HRM. Critics say it can be old HR under a new name.",
      ],
      memory: "Attract, develop, motivate, retain: the whole path.",
    },
  },
  {
    blockId: "the-five-phases-and-three-strategies",
    name: "The five phases and three strategies",
    intro: "A talent cycle of five phases, and three ways to find talent.",
    before: {
      q: "Does talent management end when a person leaves the firm?",
      choices: [
        { label: "Yes", reveal: "No. The fifth phase, transitioning, exists so that the person's knowledge stays behind." },
        { label: "No", reveal: "Right. Transitioning plans moves and exits so that knowledge stays in the organisation." },
      ],
    },
    lead: "Planning, attracting, developing, retaining and transitioning form a cycle, and a firm can hire elite talent, nurture emerging talent or blend both.",
    check: [
      ask("Which is the correct order of the five phases of talent management?", "Planning, attracting, developing, retaining, transitioning", ["Attracting, planning, developing, transitioning, retaining", "Planning, developing, attracting, retaining, transitioning", "Attracting, developing, retaining, planning, transitioning"], "The cycle starts with planning talent needs and ends with passing on knowledge. The other orders put attracting or developing before the plan exists."),
      ask("A firm has many junior vacancies, a modest pay budget and no time for a long search for star candidates. Which strategy fits best?", "Hire promising specialists and develop them", ["Hire only top employees", "Combine both, hiring mostly top performers", "Stop hiring and rely on referrals only"], "Nurturing emerging talent is faster to staff and cheaper per head. Hiring only top people costs more and takes longer to find."),
      ask("A firm can hire one proven manager at ₹30 lakh a year or two promising specialists at ₹12 lakh each. What does the second route cost, and what is the trade?", "₹24 lakh a year, giving up speed of results for lower cost and two people to grow", ["₹24 lakh a year, with no trade-off since two people always outperform one", "₹42 lakh a year, which is why elite hiring is preferred", "₹12 lakh a year, because only one specialist is needed"], "2 × ₹12 lakh = ₹24 lakh. Two specialists cost less but need time to reach the proven manager's level, so the trade-off is real."),
    ],
    lens: [],
    reflect: "For one role in your organisation, would you buy ready talent, grow it, or blend? What would decide it?",
    summary: {
      points: [
        "Five phases: planning, attracting, developing, retaining, transitioning. Transitioning keeps knowledge (knowledge management) and feeds the next plan.",
        "Methods are examples: predictive analytics, employer branding, mentoring and rotation, inclusion and flexibility, mobility and documentation.",
        "Hire elite talent: speed, a high benchmark. Nurture emerging talent: lower cost, loyalty. Blend both: mentoring and knowledge transfer.",
        "The phases are stages of the cycle; the seven processes are the HR functions that carry them out.",
      ],
      memory: "Plan, attract, develop, retain, transition.",
    },
  },
  {
    blockId: "the-seven-step-framework",
    name: "The seven-step framework",
    intro: "A checklist for running talent management from skills needed to succession.",
    before: {
      q: "Should a firm advertise for a skill before checking whether its own staff could be taught it?",
      choices: [
        { label: "Yes", reveal: "The framework asks first whether existing employees can be taught. If so, there is no need to hire." },
        { label: "No", reveal: "Right. Step 1 includes checking whether existing staff can learn the skill before any hiring." },
      ],
    },
    lead: "Specify the skills, attract, onboard, learn and develop, appraise, retain and plan succession: seven steps in order, with modern tools as examples only.",
    check: [
      ask("What is the first step in the seven-step framework?", "Specify the skills the organisation needs", ["Attract the right people with targeted advertisements", "Onboard and organise work for new joiners", "Plan for succession"], "Everything else depends on knowing the skills required. Attracting people is step 2, and it goes wrong if the need is unclear."),
      ask("A firm hires a data analyst, but on day one there is no desk, no task list and nobody assigned to help. Which step was missed?", "Step 3: onboard and organise work before the person arrives", ["Step 2: attract the right people", "Step 5: hold performance appraisals", "Step 6: strategise to retain the best talent"], "Step 3 means being ready for the new joiner. The hire itself was made in step 2, so attraction worked; the failure came after."),
      ask("A manager calls the yearly appraisal pointless because \"we know who is good\". Which reason from the framework best argues for regular appraisal?", "It shows who can take on more responsibility, which can save an outside hire and prepare a promotion", ["It lets the firm pay everyone the same", "It replaces the need to specify skills in step 1", "It removes the need for succession planning"], "Appraisal feeds development and succession by revealing readiness. It does not replace step 1 or step 7; it informs them."),
    ],
    lens: [],
    reflect: "Which of the seven steps is weakest in an organisation you know, and which tool, if any, would help?",
    summary: {
      points: [
        "Seven steps: specify skills, attract, onboard and organise work, learn and develop, appraise, retain, plan succession.",
        "Step 1 includes checking whether existing staff can be taught; step 7 involves knowledge management.",
        "Appraisal shows who is ready for more, saving outside hires and preparing promotions.",
        "Gamified applications, pulse surveys, job crafting, gig platforms and similar tools are examples, not requirements.",
        "The seven processes name HR functions; the seven steps give an order of use.",
      ],
      memory: "Skills, attract, onboard, learn, appraise, retain, succeed.",
    },
  },
  {
    blockId: "skill-development-and-its-pillars",
    name: "Skill development and its three pillars",
    intro: "Finding the gap between skills held and skills needed, and closing it.",
    before: {
      q: "Is a skill the same as a talent a person is born with?",
      choices: [
        { label: "Yes", reveal: "No. A skill is an ability that can be developed with practice, which is why skill development is possible." },
        { label: "No", reveal: "Right. Skills can be learnt and improved, so gaps can be closed." },
      ],
    },
    lead: "Skill development finds skill gaps and closes them through soft skills, functional skills and management skills, which Katz splits into conceptual, human and technical.",
    check: [
      ask("Skill development is best described as…", "Finding the gap between skills held and skills needed, then building them through targeted learning", ["Hiring people who already have every skill the job needs", "Testing candidates' personality during selection", "Paying higher salaries to people with more skills"], "It has two parts: identify the gaps, then develop the skills. Hiring for ready-made skills avoids the gap rather than closing it."),
      ask("A newly promoted supervisor is technically excellent but handles team conflict badly. Which development need is clearest?", "Soft skills, which overlap with Katz's human skill", ["Functional skills, since the gap is in technical knowledge", "Conceptual skill, since conflict is a problem of strategy", "None, since technical excellence is enough"], "Handling conflict is a behavioural, people skill. His technical skill is already strong, so more technical training would not touch the gap."),
      ask("A job needs technical 3, human 4 and conceptual 3. The person has 5, 2 and 2. Which gap comes first, and how big is it?", "Human skill, a gap of 2", ["Conceptual skill, a gap of 1", "Technical skill, a gap of 2", "Human skill, a gap of 4"], "Human: 4 − 2 = 2, the largest gap. Technical shows a surplus of 2, not a gap. The conceptual gap is only 1."),
    ],
    lens: [],
    reflect: "Rate yourself against your current role on soft, functional and management skills. Where is the biggest gap?",
    summary: {
      points: [
        "Skill development: identify skill gaps, then develop and hone the skills. Its value: innovation, agility, job satisfaction, role mastery.",
        "Soft (behavioural) skills: emotional intelligence, cultural sensitivity, decision-making, negotiation, empathy.",
        "Functional (technical) skills: budgeting, spreadsheet modelling, digital literacy, technical writing. The phrase has other senses elsewhere.",
        "Management skills (Katz): conceptual, human, technical. Technical skill is sometimes loosely called hard skill, in contrast to soft skills. See Principles of Management.",
      ],
      memory: "Find the gap, build the skill: soft, functional, managerial.",
    },
  },
];

export default lessons;
