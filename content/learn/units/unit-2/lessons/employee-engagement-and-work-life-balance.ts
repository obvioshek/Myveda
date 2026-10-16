import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-employee-engagement-is",
    name: "What employee engagement is",
    intro: "The energy people bring to work, and how it is sorted.",
    before: {
      q: "Two colleagues have the same pay and say they are equally happy. Must they put the same energy into the job?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. Satisfaction is a feeling about the job; engagement is the energy and attention a person actually brings." },
        { label: "No", reveal: "Right. One may coast while the other gives extra. That gap is what engagement describes." },
      ],
    },
    lead: "Engagement is the energy, attention and care people give their work; Kahn named three dimensions, and Gallup sorts people into three groups.",
    check: [
      ask("Which list gives Kahn's three dimensions of engagement?", "Physical, cognitive and emotional", ["Emotional, cognitive and behavioural", "Physical, social and financial", "Affective, continuance and normative"], "Kahn's dimensions are physical (energy), cognitive (thinking) and emotional (attachment). \"Emotional, cognitive and behavioural\" appears in some texts as a description of commitment but is not Kahn's list. Affective, continuance and normative are Meyer and Allen's forms of commitment."),
      ask("An office assistant does exactly what the checklist says, finishes on time and waits to be told the next task. In Gallup's typology she is…", "Not engaged", ["Engaged", "Actively disengaged", "Highly engaged"], "She puts in time but not energy or passion, and waits for instructions: that is \"not engaged\". She is not actively disengaged, because nothing suggests she is unhappy or working against others. \"Highly engaged\" is a level in the four-level scheme, not a Gallup group."),
      ask("A bank keeps almost all its staff for years, but a survey shows most do the minimum. What does this show?", "High retention can sit alongside low engagement", ["Retention proves the staff are engaged", "Engagement and commitment are the same thing", "The survey must be wrong, since people who stay must care"], "People can stay for pay, security or habit and still give little energy. Treating staying as proof of engagement is the tempting mistake; engagement is about the energy brought, not the length of stay."),
    ],
    lens: [],
    reflect: "Think of a job you did well and one you only got through. Which of Kahn's three dimensions was missing in the second?",
    summary: {
      points: [
        "Engagement: enthusiasm and dedication toward the job. Kahn (1990): people bring themselves physically, cognitively and emotionally.",
        "Physical is energy and effort, cognitive is attention and thinking, emotional is care, pride and trust.",
        "Four levels: highly engaged, moderately engaged, barely engaged, disengaged. Gallup's three groups: engaged, not engaged, actively disengaged.",
        "Engagement is not satisfaction (a feeling about the job) or commitment (attachment to the employer).",
      ],
      memory: "Physical is energy, cognitive is thinking, emotional is attachment.",
    },
  },
  {
    blockId: "building-and-measuring-engagement",
    name: "Building and measuring engagement",
    intro: "A five-step cycle, two common numbers and the usual drivers.",
    before: {
      q: "A firm runs an engagement survey every year but changes nothing. Will staff keep answering it honestly?",
      choices: [
        { label: "Yes", reveal: "Usually not. Staff learn that answers lead nowhere, and response and honesty fall." },
        { label: "No", reveal: "Right. That is why the process ends in action and follow-up, not in a report." },
      ],
    },
    lead: "Diagnose, survey, analyse, act, follow up, and repeat; measure with an engagement score and eNPS, and act on the drivers staff name.",
    check: [
      ask("Which is the correct order of the engagement process?", "Diagnose, survey, analyse, act, follow up", ["Survey, diagnose, act, analyse, follow up", "Diagnose, act, survey, analyse, follow up", "Survey, analyse, diagnose, follow up, act"], "Diagnosis and design come first, then the survey, then analysis, then action, then follow-up. Acting before the survey and analysis would mean guessing what staff want."),
      ask("In a survey of 60 staff, 27 answer 9 or 10, 18 answer 7 or 8, and 15 answer 0 to 6. What is the eNPS?", "+20", ["+12", "+45", "+60"], "Promoters are 27 ÷ 60 = 45% and detractors 15 ÷ 60 = 25%, so eNPS = 45 − 25 = +20. +12 is the difference in head-count (27 − 15), not in percentage points."),
      ask("Survey results show late shift lists and no thanks from managers. What is the strongest next move?", "Pick two or three of these issues, name an owner for each, and report back to staff", ["Run the survey again next month to confirm the results", "Keep the results with HR so staff do not worry", "Launch ten perks across all teams at once"], "Acting on what staff named, visibly, builds trust in the survey. Surveying again without acting repeats the original mistake, and perks answer a question nobody asked."),
    ],
    lens: [],
    reflect: "When did you last answer a survey at work? What changed because of it, and how did you find out?",
    summary: {
      points: [
        "Process: diagnose and design, survey, analyse (the most important step), act (action planning), follow up. It repeats.",
        "Action needs owners, measurable targets and coached line managers; follow-up reports back to staff.",
        "Engagement score: a summary of survey answers, with no single formula. eNPS = % promoters (9–10) − % detractors (0–6), from −100 to +100.",
        "Common drivers: meaningful work, supportive manager, recognition, growth, voice, autonomy and a manageable workload.",
      ],
      memory: "Diagnose, survey, analyse, act, follow up.",
    },
  },
  {
    blockId: "work-life-balance-and-how-to-build-it",
    name: "Work-life balance and how to build it",
    intro: "What balance means, four principles and five strategies.",
    before: {
      q: "Does a balanced life mean spending exactly half your time on work and half on everything else?",
      choices: [
        { label: "Yes", reveal: "No. Balance is meeting the demands that matter to you, and the right mix changes with life stage." },
        { label: "No", reveal: "Right. Balance is a fit between the demands of work and of the rest of life, not an equal split." },
      ],
    },
    lead: "Balance means work and the rest of life each get what they need; prioritise, reduce stress, manage time and set boundaries.",
    check: [
      ask("Which statement best describes work-life balance?", "Work and the rest of life each get the time and energy they need, in a mix that suits the person", ["Splitting hours equally between work and home", "Working fewer hours than colleagues", "Keeping work and personal life entirely separate"], "Balance is about meeting the demands of both areas in a proportion that fits the person. An equal split is the tempting reading, but the right mix differs by person and life stage."),
      ask("An engineer takes client calls at 10 pm and checks mail over dinner. Which strategy deals most directly with this?", "Agree when she is reachable and mute work notifications outside those hours", ["Take on extra tasks so deadlines are met sooner", "Compress the week into longer days without changing the calls", "Skip leisure until the backlog is cleared"], "Setting a boundary on when she is reachable targets the cause. Compressing the week changes the shape of the hours but leaves the late calls in place."),
      ask("A team moves from five 8-hour days to four 10-hour days. What changes?", "The weekly hours stay at 40, and one full day is freed, but the days are longer and more tiring", ["The weekly hours fall to 32", "The weekly hours rise to 50", "Nothing changes, since the total is the same"], "4 × 10 = 5 × 8 = 40 hours, so total hours are unchanged. The gain is a free day and the cost is tiring days, so the option is not \"nothing changes\"."),
    ],
    lens: [],
    reflect: "Which of the five strategies would give you the most back this month: a plan, dropping time-wasters, delegating, rest or better priorities?",
    summary: {
      points: [
        "Work-life balance: the relationship between work and the other commitments in life, and how they affect each other.",
        "Four principles: prioritise, reduce stress, manage time, set boundaries.",
        "Five strategies: work-leisure plan, cut time-wasters, delegate or outsource, schedule rest, prioritise smartly.",
        "Benefits: health, output, relationships, motivation. Balance is not an equal split.",
      ],
      memory: "Prioritise, reduce stress, manage time, set boundaries.",
    },
  },
  {
    blockId: "work-life-imbalance-and-the-employers-part",
    name: "Imbalance, burnout and the employer's part",
    intro: "Warning signs, what burnout is and what an employer can change.",
    before: {
      q: "A branch has the best numbers in the region. Does that mean its staff are doing well?",
      choices: [
        { label: "Yes", reveal: "Not always. Results can be bought with long hours, and the cost appears later as sick leave and resignations." },
        { label: "No", reveal: "Right. Check absence, unused leave and resignations before concluding that anything is going well." },
      ],
    },
    lead: "Imbalance shows up in body, mood, behaviour and work; burnout is its extreme, and employers should change the work first.",
    check: [
      ask("The WHO (ICD-11) describes burnout by which three features?", "Exhaustion, mental distance or cynicism toward the job, and reduced effectiveness", ["Anxiety, absenteeism and procrastination", "Low pay, poor tools and weak supervision", "Anger, guilt and envy"], "These three are the core of the definition. Anxiety, absenteeism and procrastination can be signs of imbalance, but they are not the three features of burnout."),
      ask("A bank branch has the most sick leave and two resignations in a year. Which action tackles the cause?", "Reset targets to the staffing level and set clear after-hours rules", ["Hold a one-day yoga workshop", "Praise the branch manager at the annual meet", "Ask staff to take leave quietly"], "Targets that outrun staffing cause the overload, so changing them is a primary measure. A yoga workshop helps people cope but leaves the cause in place."),
      ask("A firm announces flexible hours, but promotions go to staff who reply at midnight. What is the likely result?", "Staff will not use the policy, because they read the culture", ["Staff will use it freely, since it is official", "Absenteeism will fall at once", "Engagement will rise because the policy exists"], "People watch what is rewarded, not what is announced. A policy that the promotion practice contradicts goes unused, so it cannot lift balance or engagement."),
    ],
    lens: [],
    reflect: "Which sign in the table would you notice first in yourself, and who would you tell?",
    summary: {
      points: [
        "Warning signs: physical (exhaustion, illness), emotional (irritability, low motivation), behavioural (absence, withdrawal, procrastination) and at work (mistakes, missed deadlines).",
        "Burnout (WHO, ICD-11): chronic workplace stress not successfully managed; exhaustion, cynicism, reduced effectiveness.",
        "Employer actions: flexible hours, leave that is used, no-meeting days, clear boundaries, realistic workload, support.",
        "Change the work first (primary), then help people cope (secondary).",
      ],
      memory: "Change the work first; help people cope second.",
    },
  },
];

export default lessons;
