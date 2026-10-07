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
      ask("Group norms are…", "Unwritten rules that guide behaviour", ["Written company policies", "Legal regulations", "Job descriptions"], "Policies are written by the organisation. Norms grow inside the group, and members follow them without being told."),
      ask("In a ten-person project, two people do most of the work and the rest assume it will get done. This is…", "Social loafing", ["Groupthink", "Storming", "A negative norm being enforced"], "Less effort because others will make up for it is social loafing. Groupthink is about bad decisions from too much agreement, not about effort."),
      ask("Which change would most reduce social loafing in that project?", "Split it into smaller teams with each person's part visible", ["Add more people to share the work", "Let the two strong members carry on", "Give everyone the same grade whatever they do"], "Loafing grows when effort is hidden and groups are large. Adding people or pooling credit makes it worse."),
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
      ask("Three weeks into planning a college fest, the committee is arguing about the budget and challenging its convenor. Which stage is this?", "Storming", ["Forming", "Norming", "Adjourning"], "Open conflict and a challenged leader mark storming. It is a normal stage, not a sign the team is failing."),
      ask("What should the convenor do at that point?", "Bring the disagreement into the open and agree how the committee will decide", ["Ignore it until it passes", "Replace the members who disagree", "Delegate everything at once"], "Storming passes when conflict is worked through and ground rules agreed. Delegating fully suits a team that is already performing."),
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
    intro: "Influencing people toward a goal: four families of theory, and how to choose a style.",
    before: {
      q: "Is one leadership style best in every situation?",
      choices: [
        { label: "Yes, democratic", reveal: "Each style has its place: autocratic for crises, democratic for ownership, laissez-faire for skilled, self-motivated teams." },
        { label: "It depends", reveal: "Right. Autocratic suits crises, democratic builds ownership, and laissez-faire suits skilled, self-motivated teams." },
      ],
    },
    lead: "Leadership is influencing people toward a goal. Theories moved from who leaders are, to what they do, to which style fits which situation, to how they change what followers want.",
    check: [
      ask("Which theory asks which leadership style suits which situation?", "Contingency theories, such as Fiedler's and Hersey and Blanchard's", ["Trait theory", "Lewin's three styles", "Scientific management"], "Trait theory asks who leads well; Lewin's styles describe behaviour. Contingency theories match style to situation."),
      ask("A new sales trainee is keen but does not yet know the products. In Hersey and Blanchard's model, the manager should mainly…", "Sell: give clear direction and plenty of encouragement", ["Delegate: let the trainee find their way", "Tell, with no encouragement", "Participate: share decisions as equals"], "Willing but not yet able is R2, which calls for S2, selling. Delegating suits someone both able and willing."),
      ask("Verghese Kurien built Amul around a cooperative that farmers owned and believed in. Which kind of leadership is that?", "Transformational", ["Transactional", "Laissez-faire", "Autocratic"], "Transactional leadership trades reward for effort. Changing what followers want, around a shared idea, is transformational."),
    ],
    lens: [
      { pairing: 2, adds: "Four qualities that must never fail: fearlessness, generosity, wisdom and energy.", differs: "The Kuṟaḷ describes a king. Modern lists add empathy, communication and ethics as traits of effective leaders." },
      { pairing: 4, adds: "Respect is given to the match between word and deed, not to rank.", differs: "Tukaram offers reverence. Leadership theory treats credibility as one source of influence among several." },
    ],
    reflect: "Which leadership style do you fall back on under pressure, and what does it cost your team?",
    summary: {
      points: [
        "Leadership: influencing a group toward a vision or goals (Robbins and Judge).",
        "Four families: trait, behavioural, contingency, transformational.",
        "Lewin's styles: autocratic (control), democratic (participation), laissez-faire (autonomy).",
        "Situational leadership: telling, selling, participating, delegating, as follower readiness grows.",
        "Management copes with complexity; leadership copes with change (Kotter).",
      ],
      memory: "Who they are, what they do, what fits, what they change.",
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
      ask("Groupthink is when…", "The wish for harmony overrides critical evaluation", ["A group splits into factions", "Members put in less effort", "A leader makes decisions alone"], "Less effort is social loafing. Groupthink is a close group agreeing too easily."),
      ask("A close-knit board approves an acquisition in one meeting. Nobody raises the doubts several of them had. Which sign of groupthink is this?", "Self-censorship and an illusion that everyone agrees", ["Social loafing", "Storming", "Too much diversity"], "Members kept their doubts to themselves, so the silence looked like agreement."),
      ask("Which step would best protect that board's next big decision?", "Ask one member to argue against it, and have the chair speak last", ["Make the board even more cohesive", "Decide faster", "Leave out dissenting members"], "Groupthink feeds on unchallenged agreement. Building in disagreement and keeping the most senior view until last counters it."),
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
