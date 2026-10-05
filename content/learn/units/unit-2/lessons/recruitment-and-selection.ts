import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "recruitment-and-its-sources",
    name: "Recruitment and its sources",
    intro: "Attracting a pool of capable candidates.",
    before: {
      q: "Is promoting from within usually cheaper than hiring from outside?",
      choices: [
        { label: "No", reveal: "Usually it is. Internal recruitment costs less, is faster, lifts morale and supports career development." },
        { label: "Yes", reveal: "Right. Internal recruitment is cheaper and faster, though external hiring brings fresh skills and perspectives." },
      ],
    },
    lead: "Recruitment builds a pool of candidates, from inside and outside the organisation.",
    check: [
      ask("Which is an internal source of recruitment?", "Employee referrals", ["Campus recruitment", "Headhunting", "Job fairs"], "The others are external sources."),
      ask("What does external recruitment bring that internal recruitment cannot?", "A wider talent pool and fresh perspectives", ["Lower cost", "Faster hiring", "Higher morale among existing staff"], "Those are the benefits of internal recruitment."),
    ],
    lens: [],
    reflect: "How did you find your current or last role, and was it an internal or external source?",
    summary: {
      points: [
        "Recruitment: searching for, identifying and attracting qualified candidates.",
        "Internal: job posting, referrals, promotions, transfers, rehiring, previous applicants; cheaper and faster.",
        "External: online, social media, agencies, campus, headhunting and more; wider pool and fresh skills.",
      ],
      memory: "Vacancy, attract, talent pool, select.",
    },
  },
  {
    blockId: "the-recruitment-process",
    name: "The recruitment process",
    intro: "Eleven steps from vacancy to evaluation.",
    before: {
      q: "Should a job be advertised before its duties are defined?",
      choices: [
        { label: "Yes, to save time", reveal: "No. Job analysis and the job description come first (steps 2 and 3); advertising is step 4." },
        { label: "No", reveal: "Right. Job analysis and the description and specification come before advertising." },
      ],
    },
    lead: "Need, analyse, attract, screen, build, evaluate.",
    check: [
      ask("What comes right after identifying the vacancy?", "Job analysis", ["Advertising the job", "Networking", "Tracking and reporting"], "Then the job description and specification."),
      ask("Reaching passive candidates is the purpose of…", "Networking", ["Employer branding", "Initial communication", "Recruitment campaigns"], "Employer branding attracts quality applicants."),
    ],
    lens: [],
    reflect: "Which step would most improve the hiring you have seen?",
    summary: {
      points: [
        "Identify the vacancy, analyse the job, write the description and specification.",
        "Advertise, review applications, build a talent pool, brand the employer.",
        "Communicate, network, run campaigns, track and report.",
      ],
      memory: "Need, analyse, attract, screen, build, evaluate.",
    },
  },
  {
    blockId: "selection-and-selection-tests",
    name: "Selection and selection tests",
    intro: "Choosing the most suitable candidate.",
    before: {
      q: "Should selection judge skills alone?",
      choices: [
        { label: "Yes", reveal: "Its goal is wider: to match the candidate's skills, attitude and values with the organisation's requirements." },
        { label: "No", reveal: "Right. Selection matches skills, attitude and values with requirements." },
      ],
    },
    lead: "Selection evaluates applicants and chooses the best fit, step by step.",
    check: [
      ask("Which test measures the ability to learn job-specific skills?", "Aptitude test", ["Achievement test", "Interest test", "Dexterity test"], "Achievement tests measure what the candidate already knows."),
      ask("Which comes after the interview in the selection process?", "Tests", ["Shortlisting", "Preliminary screening", "Application review"], "Then verification, medical, offer and onboarding."),
    ],
    lens: [
      { pairing: 0, adds: "Four tests of character: virtue, wealth, pleasure and the fear of death.", differs: "The couplet tests character under temptation and threat. Modern selection tests ability, aptitude and personality, openly." },
      { pairing: 1, adds: "Secret trials of integrity, with each person placed where the trials showed they fit.", differs: "Kauṭilya's tests relied on deception. Modern ethics and employment law rule out deceiving a candidate this way." },
    ],
    reflect: "Which selection test would best predict success in a job you know well?",
    summary: {
      points: [
        "Selection: evaluating and choosing the most suitable candidate.",
        "Process: review, screening, shortlisting, interview, tests, verification, medical, offer, onboarding.",
        "Tests: intelligence, aptitude, interest, personality, achievement, trade, dexterity.",
      ],
      memory: "Skills, attitude and values must match the role.",
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
    lead: "Recruitment widens the pool; selection narrows it to one.",
    check: [
      ask("Which is the outcome of recruitment?", "A pool of candidates", ["The final hiring decision", "A job description", "An offer letter"], "Selection ends in the hiring decision."),
      ask("Who is mainly responsible for selection?", "HR with departmental heads", ["The HR recruitment team alone", "The candidate", "An external agency alone"], "Recruitment is mainly the HR team's job."),
    ],
    lens: [
      { pairing: 2, adds: "Trusting the untested and doubting the tested both bring endless trouble.", differs: "The Kuṟaḷ warns about trust in general. Selection builds a structured process to earn that trust before hiring." },
    ],
    reflect: "Have you seen a hire that was rushed? Which part of selection was skipped?",
    summary: {
      points: [
        "Recruitment: attracting candidates; positive; broad; a pool of candidates.",
        "Selection: choosing the best; negative; narrow; the hiring decision.",
        "Recruitment is mainly HR; selection is HR with departmental heads.",
      ],
      memory: "Recruitment attracts; selection chooses.",
    },
  },
];

export default lessons;
