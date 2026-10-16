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
    blockId: "types-of-teams-and-team-effectiveness",
    name: "Types of teams and team effectiveness",
    intro: "How a team differs from a group, the four types of team, and what makes a team effective.",
    before: {
      q: "If you put five people on a project and call them a team, do you have one?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. A team needs complementary skills, a shared result and mutual accountability. Otherwise it is only a work group." },
        { label: "Not necessarily", reveal: "Right. A work group shares information; a work team produces more together than the members would alone." },
      ],
    },
    lead: "A work team produces more than the sum of its members, and it comes in four main types.",
    check: [
      ask("Which type of team takes over scheduling and assigning tasks from a former supervisor?", "Self-managed team", ["Problem-solving team", "Cross-functional team", "Virtual team"], "A problem-solving team only suggests improvements. A self-managed team runs its own work."),
      ask("Staff from design, production, finance and marketing are brought together to launch one product. What type of team is this?", "Cross-functional", ["Problem-solving", "Virtual", "A work group"], "Members come from different areas to do one task, which is cross-functional. Virtual describes only how they connect, by technology across places."),
      ask("A team has skilled members and a clear goal, but no resources and no trust in the organisation. Which part of the effectiveness model is weak?", "Context", ["Composition", "Process", "Synergy"], "Resources, leadership and trust belong to context. Composition is who is on the team, and process is what happens inside it."),
    ],
    lens: [],
    reflect: "Think of a group you have worked in. Was it a work group or a work team, and what made the difference?",
    summary: {
      points: [
        "A work group shares information; a work team produces more than the sum of its members.",
        "Four types: problem-solving, self-managed, cross-functional, virtual.",
        "A multiteam system is a team of teams sharing a higher goal.",
        "Effectiveness depends on context, composition and process.",
      ],
      memory: "Solve, self-manage, cross over, connect virtually.",
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
    blockId: "belbins-team-roles",
    name: "Belbin's team roles",
    intro: "Nine ways of contributing to a team, and why a balanced team needs a mix.",
    before: {
      q: "Does a strong team need nine people, one for each of Belbin's roles?",
      choices: [
        { label: "Yes", reveal: "No. One person can cover two or three roles. The aim is a balanced mix, not nine bodies." },
        { label: "No", reveal: "Right. The roles describe contributions, and one person can cover several." },
      ],
    },
    lead: "Belbin's nine roles fall into action, people and thinking groups, and balanced teams cover them all.",
    check: [
      ask("Which role did Belbin add after his original eight?", "Specialist", ["Plant", "Shaper", "Teamworker"], "The original eight did not include a role for deep expert knowledge. The Specialist was added later."),
      ask("A team has many creative ideas but nothing gets finished on time, and errors slip through. Which roles does it most need?", "Implementer and Completer Finisher", ["Plant and Shaper", "Teamworker and Co-ordinator", "Resource Investigator and Specialist"], "Implementers turn ideas into action and Completer Finishers catch errors. Adding more Plants would give more ideas but no more output."),
      ask("Which is the best use of Belbin's roles in a new project team?", "List the roles the task needs and ask who can cover each", ["Label each person with one fixed role", "Pick the nine most senior people", "Avoid anyone with a weakness"], "Roles are tendencies, not fixed types, and each strength brings an allowable weakness. The aim is balance."),
    ],
    lens: [],
    reflect: "Which two Belbin roles do you most often play? Which one does your current team lack?",
    summary: {
      points: [
        "A team role is a tendency to contribute and interact in a particular way.",
        "Action: Shaper, Implementer, Completer Finisher.",
        "People: Co-ordinator, Teamworker, Resource Investigator.",
        "Thinking: Plant, Monitor Evaluator, Specialist (added later).",
      ],
      memory: "Action, people, thinking: three groups of three.",
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
    blockId: "trait-theory-and-newer-views-of-leadership",
    name: "Trait theory and newer views of leadership",
    intro: "The search for leader traits, why it falls short, and the relationship-based views that followed.",
    before: {
      q: "If you knew a person's personality traits, could you tell who will be the best leader?",
      choices: [
        { label: "Yes", reveal: "Only partly. Traits help predict who emerges as a leader, but they are weak at telling effective leaders from ineffective ones." },
        { label: "Only partly", reveal: "Right. Traits predict who emerges as a leader better than who leads effectively." },
      ],
    },
    lead: "Trait theory looks for what leaders are like; later views look at relationships, vision and values.",
    check: [
      ask("The \"great man\" idea behind trait theory is linked to…", "Thomas Carlyle", ["Frederick Taylor", "Kurt Lewin", "Robert Blake"], "Carlyle wrote of born heroes shaping history. Lewin is known for leadership styles, not the great man idea."),
      ask("A manager gives two trusted deputies the best projects and treats the other staff formally. Which theory describes this?", "Leader-member exchange (in-group and out-group)", ["Trait theory", "Servant leadership", "Path-goal theory"], "LMX says a leader forms a different relationship with each follower. Servant leadership would instead focus on helping all followers grow."),
      ask("What is the main weakness of trait theory?", "Traits predict who emerges as a leader better than who is effective", ["It shows leaders can be trained easily", "It ignores personality altogether", "It says only the situation matters"], "Trait theory does look at personality and assumes traits are largely fixed. Its weakness is predicting effectiveness."),
    ],
    lens: [],
    reflect: "Think of someone you saw lead well. Which of the listed traits did they show, and which did they lack?",
    summary: {
      points: [
        "Trait theory seeks the qualities that set leaders apart; it grew from the great man idea.",
        "Traits predict who emerges as a leader better than who is effective.",
        "LMX: different relationships with followers form an in-group and an out-group.",
        "Charismatic, authentic and servant leadership add vision, honesty and service.",
      ],
      memory: "Traits show who rises, not who leads well.",
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
