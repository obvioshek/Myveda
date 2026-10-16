import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "recruitment-and-its-sources",
    name: "Recruitment and its sources",
    intro: "Attracting a pool of capable candidates, from inside and outside.",
    before: {
      q: "Is promoting from within usually cheaper than hiring from outside?",
      choices: [
        { label: "No", reveal: "Usually it is. Internal recruitment costs less, is faster, lifts morale and supports career development." },
        { label: "Yes", reveal: "Right. Internal recruitment is cheaper and faster, though external hiring brings fresh skills and perspectives." },
      ],
    },
    lead: "Recruitment gets suitable people to apply. Internal sources are cheaper and faster; external sources bring a wider pool and fresh ideas.",
    check: [
      ask("Which is an internal source of recruitment?", "Job posting", ["Campus recruitment", "Headhunting", "Job fairs"], "Job posting announces the vacancy inside the organisation. Headhunting may feel targeted, but the search firm approaches people outside."),
      ask("A software firm needs a cloud-security specialist. Nobody inside has the skills, and it wants new ideas in the team. Which approach fits best?", "External recruitment, for example through headhunting", ["An internal job posting for the role", "A transfer from another team inside", "Promoting the senior-most developer"], "Internal sources only work when someone inside has the skills. Here the skills and the fresh ideas must come from outside, which is what external recruitment brings."),
      ask("A firm fills almost every opening through employee referrals. Which risk should it watch most?", "A less diverse workforce, as people refer people like themselves", ["Much higher hiring costs than using agencies", "Much slower hiring than running campus drives", "Low morale among the people already employed"], "Referrals are usually cheap and quick, so cost and speed are not the worry. The risk is sameness: people tend to refer people like themselves."),
    ],
    lens: [],
    reflect: "How did you find your current or last role, and was it an internal or external source?",
    summary: {
      points: [
        "Recruitment: searching for prospective employees and stimulating them to apply (Flippo).",
        "Internal: job posting, referrals, promotions, transfers, rehiring, previous applicants; cheaper and faster, but a smaller pool.",
        "External: online, social media, agencies, campus, headhunting, walk-ins and more; wider pool and fresh skills, but costlier and riskier.",
        "Referrals count as internal, though the people referred come from outside.",
      ],
      memory: "Vacancy, attract, talent pool, select.",
    },
  },
  {
    blockId: "the-recruitment-process",
    name: "The recruitment process",
    intro: "Eleven steps from vacancy to evaluation, and how to measure them.",
    before: {
      q: "Should a job be advertised before its duties are defined?",
      choices: [
        { label: "Yes, to save time", reveal: "No. Job analysis and the job description come first (steps 2 and 3); advertising is step 4." },
        { label: "No", reveal: "Right. Job analysis and the description and specification come before advertising." },
      ],
    },
    lead: "Need, analyse, attract, screen, build, evaluate, with yield ratios to check how well it worked.",
    check: [
      ask("What comes right after identifying the vacancy?", "Job analysis", ["Advertising the job", "Networking", "Tracking and reporting"], "Duties and skills must be worked out before anything is advertised. Advertising comes later, at step 4, after the description and specification are written."),
      ask("A job advertisement for an accountant asks for \"CA qualification and three years' experience\". This part comes from…", "The job specification", ["The job description", "Employer branding", "The talent pool"], "Qualifications and experience describe the person needed, which is the specification. The job description sets out the duties, not the qualifications."),
      ask("A company needs 6 new sales staff. In the past, 3 in 4 offers were accepted, and it made 1 offer for every 5 people interviewed. How many should it interview?", "40", ["30", "32", "45"], "Offers needed = 6 ÷ 0.75 = 8, and interviews = 8 × 5 = 40. Answering 30 multiplies 6 by 5 and forgets that some offers are turned down."),
    ],
    lens: [],
    reflect: "Which step would most improve the hiring you have seen?",
    summary: {
      points: [
        "Identify the vacancy, analyse the job, write the description and specification.",
        "Advertise, review applications, build a talent pool, brand the employer.",
        "Communicate, network, run campaigns, track and report.",
        "Yield ratios and cost per hire show how well recruitment worked.",
      ],
      memory: "Need, analyse, attract, screen, build, evaluate.",
    },
  },
  {
    blockId: "recruitment-planning-strategy-and-policy",
    name: "Recruitment planning, strategy and policy",
    intro: "The rules, choices and costs behind every hiring drive.",
    before: {
      q: "Should each unit of a firm hire in its own way, with no common rules?",
      choices: [
        { label: "Yes, freedom is best", reveal: "A recruitment policy gives the whole firm the same objectives and rules, so hiring is consistent and fair." },
        { label: "No", reveal: "Right. A policy sets standing rules for all hiring; the strategy then adapts to each drive." },
      ],
    },
    lead: "A policy sets the standing rules, a strategy plans one drive, and costs are checked at the end.",
    check: [
      ask("A firm decides to train its own supervisors for a new post instead of hiring trained ones. This is a…", "Make decision", ["Buy decision", "Decentralised decision", "Screening decision"], "Making means developing existing staff for the post. Buying means hiring people already trained, which is the tempting opposite."),
      ask("Which is an external factor affecting recruitment?", "The level of unemployment", ["The firm's recruitment budget", "The firm's human resource plan", "The firm's own recruitment policy"], "Unemployment sits in the labour market, outside the firm. Budget, plan and policy are decided inside the firm, so they are internal factors."),
      ask("A rule says \"fill senior posts from inside first\". A manager now plans to hire two trained welders from outside this quarter. Which is which?", "The rule is policy; the plan for this quarter is strategy", ["The rule is strategy; the plan is policy", "Both are policy", "Both are strategy"], "The policy stands for all hiring over time. The strategy is the plan for one drive. Calling the rule a strategy confuses a permanent rule with a one-off plan."),
    ],
    lens: [],
    reflect: "Does an organisation you know have a written hiring policy, or does each manager decide?",
    summary: {
      points: [
        "Five stages: planning, strategy, searching, screening, evaluation and control.",
        "Strategy choices: make or buy, centralised or decentralised, area, sources.",
        "Internal factors: policy, HR plan, size and growth, budget, attractiveness. External: labour market, unemployment, laws, competitors, conditions.",
        "Policy is the permanent rule book; strategy is the plan for one drive.",
        "Recruitment costs include recruiter pay, advertising, agency fees, overheads and the cost of an empty post.",
      ],
      memory: "Plan, strategise, search, screen, evaluate.",
    },
  },
  {
    blockId: "selection-and-selection-tests",
    name: "Selection and selection tests",
    intro: "Choosing the most suitable candidate, one hurdle at a time.",
    before: {
      q: "Should selection judge skills alone?",
      choices: [
        { label: "Yes", reveal: "Its goal is wider: to match the candidate's skills, attitude and values with the organisation's requirements." },
        { label: "No", reveal: "Right. Selection matches skills, attitude and values with requirements." },
      ],
    },
    lead: "Selection removes the unsuitable through a series of hurdles, using tests that should be reliable and valid.",
    check: [
      ask("Which test measures the ability to learn job-specific skills?", "Aptitude test", ["Achievement test", "Interest test", "Dexterity test"], "Aptitude is potential to learn. An achievement test is the tempting answer, but it measures what the candidate has already learnt."),
      ask("An electronics plant asks candidates to fit small parts onto a circuit board against the clock. Which test is this?", "Dexterity test", ["Aptitude test", "Intelligence test", "Personality test"], "Manual skill and coordination are what a dexterity test measures. An aptitude test looks at the ability to learn a skill, not hand speed and precision."),
      ask("A test gives the same candidate very different scores on Monday and on Friday. What is wrong with it?", "It is not reliable", ["It is not valid for the job", "It is too difficult for freshers", "It measures interest, not ability"], "Reliability means consistent results for the same person. Validity is about whether scores predict job performance; the problem here is inconsistency."),
    ],
    lens: [
      { pairing: 0, adds: "Four tests of character: virtue, wealth, pleasure and the fear of death.", differs: "The couplet tests character under temptation and threat. Modern selection tests ability, aptitude and personality, openly." },
      { pairing: 1, adds: "Secret trials of integrity, with each person placed where the trials showed they fit.", differs: "Kauṭilya's tests relied on deception. Modern ethics and employment law rule out deceiving a candidate this way." },
      { pairing: 3, adds: "An image for why first impressions are not enough: the difference shows only in use.", differs: "Vemana judges worth and virtue. Selection tests measure specific abilities against a job's requirements." },
    ],
    reflect: "Which selection test would best predict success in a job you know well?",
    summary: {
      points: [
        "Selection: evaluating applicants and choosing the most suitable one.",
        "Process: screening, tests, interview, verification, decision, medical, offer. Onboarding follows selection.",
        "Tests: intelligence, aptitude, interest, personality, achievement, trade, dexterity.",
        "Good tests are reliable (consistent) and valid (predict job performance).",
      ],
      memory: "Skills, attitude and values must match the role.",
    },
  },
  {
    blockId: "interviews-and-the-final-steps-of-selection",
    name: "Interviews and the final steps of selection",
    intro: "Types of interview, how they go wrong, and what follows.",
    before: {
      q: "Is a relaxed chat with no fixed questions the best way to judge a candidate?",
      choices: [
        { label: "Yes", reveal: "It feels natural, but answers cannot be compared and bias creeps in. A structured interview predicts job performance better." },
        { label: "No", reveal: "Right. Planned, same-for-all questions give comparable and fairer results." },
      ],
    },
    lead: "Structured interviews with written scoring reduce interviewer errors; reference check, final selection, medical and offer follow.",
    check: [
      ask("In which interview does every candidate get the same job-related questions, scored against a guide?", "Structured interview", ["Unstructured interview", "Stress interview", "Depth interview"], "Same questions and a scoring guide define a structured interview. A depth interview probes one candidate's background in detail instead."),
      ask("An interviewer rates a candidate highly on every point because the candidate spoke very fluently. This error is the…", "Halo effect", ["Contrast effect", "Similar-to-me bias", "Stereotyping"], "One good trait coloured the whole judgement, which is the halo effect. The contrast effect would need the previous candidate to be the yardstick."),
      ask("A firm hires 5 people from 250 applicants. What is its selection ratio?", "0.02", ["0.2", "50", "0.002"], "Selection ratio = hired ÷ applicants = 5 ÷ 250 = 0.02, or 1 in 50. The figure 50 is the inverse, applicants per hire, not the ratio."),
    ],
    lens: [],
    reflect: "Recall an interview you sat. Was it structured? Which of the errors might it have shown?",
    summary: {
      points: [
        "Types: structured, unstructured, semi-structured, individual, panel, group, behavioural, situational, stress, depth.",
        "An exit interview is held at leaving, not for selection.",
        "Errors: halo, first impression, contrast, similar-to-me, stereotyping; structure and independent scoring reduce them.",
        "After the interview: reference and background check, final selection, medical examination and offer.",
        "Selection ratio = number hired ÷ number of applicants.",
      ],
      memory: "Ask all the same, score on paper, check, then offer.",
    },
  },
  {
    blockId: "recruitment-against-selection",
    name: "Recruitment against selection",
    intro: "One attracts, the other chooses.",
    before: {
      q: "Is recruitment a positive or a negative process?",
      choices: [
        { label: "Negative", reveal: "Recruitment is positive: it encourages applicants. Selection is negative: it eliminates unsuitable ones." },
        { label: "Positive", reveal: "Right. Recruitment encourages applicants; selection eliminates the unsuitable." },
      ],
    },
    lead: "Recruitment widens the pool; selection narrows it to the people who are hired.",
    check: [
      ask("Which is the outcome of recruitment?", "A pool of candidates", ["The final hiring decision", "A signed offer letter", "A completed medical"], "Recruitment ends with a pool of applicants. The hiring decision, the offer and the medical all belong to selection."),
      ask("At a campus drive, 900 students apply and the company hires 12. Which stage produced the 900?", "Recruitment", ["Selection", "Onboarding", "Verification"], "The campus talk, advertisement and reputation drew the 900 applicants, which is recruitment. Selection then rejected 888 of them."),
      ask("Selection is called a \"negative\" process because…", "It rejects most applicants to choose a few", ["It harms the candidates who take part", "It is run by departmental heads", "It discourages people from applying"], "Negative here means eliminating, not harmful. Discouraging applicants would undermine recruitment, which is the positive stage that invites people in."),
    ],
    lens: [
      { pairing: 2, adds: "Trusting the untested and doubting the tested both bring endless trouble.", differs: "The Kuṟaḷ warns about trust in general. Selection builds a structured process to earn that trust before hiring." },
    ],
    reflect: "Have you seen a hire that was rushed? Which part of selection was skipped?",
    summary: {
      points: [
        "Recruitment: attracting candidates; positive; broad; a pool of candidates.",
        "Selection: choosing the best; negative (it eliminates); narrow; the hiring decision.",
        "Recruitment is mainly HR; selection is HR with departmental heads.",
        "Judge recruitment by the quality of the pool, selection by how hires perform.",
      ],
      memory: "Recruitment attracts; selection chooses.",
    },
  },
];

export default lessons;
