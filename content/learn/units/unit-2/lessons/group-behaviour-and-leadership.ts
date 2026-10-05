import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "groups-and-group-norms",
    name: "Groups and group norms",
    intro: "Formal and informal groups, their unwritten rules, and social loafing.",
    before: {
      q: "Do people usually work harder in a group than alone?",
      choices: [
        { label: "Harder", reveal: "Often the reverse. Social loafing is putting in less effort in a group, assuming others will make up for it." },
        { label: "Sometimes less hard", reveal: "Right. That is social loafing: less effort in a group, on the assumption that others will compensate." },
      ],
    },
    lead: "Groups change how their members behave, through roles, norms and influence.",
    check: [
      ask("Colleagues who go jogging together form…", "An informal group", ["A formal group", "A project team", "A committee"], "Informal groups form naturally from shared interests."),
      ask("Group norms are…", "Unwritten rules that guide behaviour", ["Written company policies", "Legal regulations", "Job descriptions"], "Positive norms bring harmony; negative norms bring excessive pressure."),
      ask("What is an effect of social loafing?", "Lower group performance and less motivated committed members", ["Higher creativity", "Stronger cohesion", "Faster decisions"], "The committed members end up carrying the load."),
    ],
    lens: [
      { pairing: 0, adds: "A plain rule: do the work that is yours, for action beats inaction.", differs: "The verse addresses one person's duty. Social loafing is a group effect, where shared responsibility lowers individual effort." },
    ],
    reflect: "Have you seen social loafing in a group project? What would have prevented it?",
    summary: {
      points: [
        "Formal groups are created by the organisation; informal groups form naturally.",
        "Norms: unwritten rules; positive ones help, negative ones pressure.",
        "Social loafing: less effort in groups, lowering performance and morale.",
      ],
      memory: "Formal is official; informal is spontaneous.",
    },
  },
  {
    blockId: "team-building-and-tuckmans-stages",
    name: "Team building and Tuckman's stages",
    intro: "How a group becomes a team.",
    before: {
      q: "Is conflict in a new team a sign that it is failing?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. Tuckman's second stage, storming, is expected: conflict and clashes come before norms and performance." },
        { label: "Not necessarily", reveal: "Right. Storming is a normal stage before norming and performing." },
      ],
    },
    lead: "Teams move through forming, storming, norming, performing and adjourning.",
    check: [
      ask("In which stage do shared norms and trust grow?", "Norming", ["Forming", "Storming", "Performing"], "Norming comes after storming and before performing."),
      ask("Which stage is marked by high efficiency, synergy and self-management?", "Performing", ["Norming", "Adjourning", "Forming"], "Adjourning follows when the task is complete."),
    ],
    lens: [
      { pairing: 1, adds: "The habit of sharing rather than hoarding, as the crow calls its kin to the food.", differs: "The couplet is about a ruler who shares with his kin. Team building is a deliberate process that also covers conflict and goals." },
    ],
    reflect: "Think of a team you were in. Which stage did it get stuck in, and why?",
    summary: {
      points: [
        "Team building: trust, communication, conflict resolution, collaboration, shared goals.",
        "Tuckman: forming, storming, norming, performing, adjourning.",
        "Benefits: trust, creativity, communication, problem-solving.",
      ],
      memory: "Forming, storming, norming, performing, adjourning.",
    },
  },
  {
    blockId: "leadership",
    name: "Leadership",
    intro: "Motivating and guiding people toward a shared vision.",
    before: {
      q: "Is one leadership style best in every situation?",
      choices: [
        { label: "Yes, democratic", reveal: "Each style has its place: autocratic for crises, democratic for ownership, laissez-faire for skilled, self-motivated teams." },
        { label: "It depends", reveal: "Right. Autocratic suits crises, democratic builds ownership, and laissez-faire suits skilled, self-motivated teams." },
      ],
    },
    lead: "A leader sets direction, manages conflict, inspires and improves productivity.",
    check: [
      ask("Which style suits a crisis, at the risk of demoralising people if overused?", "Autocratic", ["Democratic", "Laissez-faire", "Participative"], "The leader makes decisions alone."),
      ask("Which style gives high autonomy and minimal guidance?", "Laissez-faire", ["Autocratic", "Democratic", "Transactional"], "Best for skilled, self-motivated teams."),
    ],
    lens: [
      { pairing: 2, adds: "Four qualities that must never fail: fearlessness, generosity, wisdom and energy.", differs: "The Kuṟaḷ describes a king. Modern lists add empathy, communication and ethics as traits of effective leaders." },
    ],
    reflect: "Which leadership style do you fall back on under pressure, and what does it cost your team?",
    summary: {
      points: [
        "Leadership: motivating and guiding people toward a shared vision.",
        "Styles: autocratic (control), democratic (participation), laissez-faire (autonomy).",
        "Traits: visionary, empathetic, communicative, ethical, decisive.",
      ],
      memory: "Autocratic is control, democratic participation, laissez-faire autonomy.",
    },
  },
  {
    blockId: "group-dynamics",
    name: "Group dynamics",
    intro: "Size, cohesiveness and groupthink.",
    before: {
      q: "Is a very close-knit group always a better decision-maker?",
      choices: [
        { label: "Yes", reveal: "Not always. Extreme cohesiveness can suppress dissent and lead to groupthink, where harmony beats critical evaluation." },
        { label: "Not always", reveal: "Right. Extreme cohesiveness can lead to groupthink: alternatives ignored and poor decisions." },
      ],
    },
    lead: "The forces inside a group shape how well it decides and performs.",
    check: [
      ask("A large group, compared with a small one, tends to have…", "More diversity, but more coordination problems", ["Faster decisions", "Deeper discussion", "No communication problems"], "Small groups decide faster and discuss more deeply."),
      ask("Groupthink is when…", "The wish for harmony overrides critical evaluation", ["A group splits into factions", "Members put in less effort", "A leader makes decisions alone"], "Nixon's inner circle during Watergate is often cited."),
    ],
    lens: [
      { pairing: 3, adds: "Advisers willing to rebuke the leader: the check that groupthink removes.", differs: "The Kuṟaḷ describes a ruler's counsellors. Groupthink research explains why such voices fall silent inside cohesive groups." },
    ],
    reflect: "When did you last stay silent in a group to keep the peace? What would it have taken to speak?",
    summary: {
      points: [
        "Size: small groups decide faster; large ones bring diversity and coordination problems.",
        "Cohesiveness helps coordination, but extreme cohesiveness suppresses dissent.",
        "Groupthink: harmony over critical thinking, alternatives ignored, poor decisions.",
      ],
      memory: "Size, cohesiveness, groupthink.",
    },
  },
];

export default lessons;
