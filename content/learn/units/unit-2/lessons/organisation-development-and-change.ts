import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "organisational-change-and-resistance",
    name: "Organisational change and resistance",
    intro: "What changes, why it changes, and why people push back.",
    before: {
      q: "When staff resist a new system, are they usually just being stubborn?",
      choices: [
        { label: "Yes", reveal: "Often not. Resistance can come from fear of losing status or skills, or from a real flaw in the plan. Listening comes first." },
        { label: "No", reveal: "Right. Resistance has causes, and sometimes it points to a real problem in the change." },
      ],
    },
    lead: "Change alters structure, technology, people or strategy, is pushed by forces inside and outside, and meets resistance that managers can meet in six ways.",
    check: [
      ask("Which set names the four types of organisational change?", "Structural, technological, people-oriented, strategic", ["Planned, unplanned, internal, external", "Structural, financial, people-oriented, operational", "Technological, cultural, strategic, reactive"], "The four types are sorted by what changes. Planned and unplanned describe how a change arises, not what it alters."),
      ask("A bank trains its clerks in emotional intelligence and conflict handling for dealing with angry customers. Which type of change is this?", "People-oriented", ["Structural", "Technological", "Strategic"], "The training targets attitudes and behaviour, which is people-oriented change. It is not structural, since no roles or reporting lines change."),
      ask("Clerks resist new software because they fear making errors before they have learned it. Which approach to resistance fits best?", "Facilitation and support, such as training and a help desk", ["Coercion, since the deadline is fixed", "Manipulation, by hiding the risks", "Negotiation, by paying clerks for accepting it"], "The problem is difficulty in adjusting, which facilitation and support address. Coercion would leave resentment, and nobody here has power to bargain with."),
    ],
    lens: [],
    reflect: "Think of a change at work or college that met resistance. Was the cause fear, habit, lost status or a real flaw?",
    summary: {
      points: [
        "Organisational change is any modification in structure, processes, culture or strategy; it may be planned (proactive) or unplanned (reactive).",
        "Four types: structural, technological, people-oriented and strategic. Real changes often cross types.",
        "Forces come from inside (vision, culture, leadership, performance, employees) and outside (competition, technology, regulation, economy, social change).",
        "Resistance comes from individual and organisational sources. Kotter and Schlesinger's six approaches run from education to coercion.",
      ],
      memory: "What changes: structure, technology, people, strategy.",
    },
  },
  {
    blockId: "organisation-development-and-its-process",
    name: "Organisation development and its process",
    intro: "A planned, data-driven effort, and the steps it follows.",
    before: {
      q: "Should a consultant suggest a remedy before gathering facts?",
      choices: [
        { label: "Yes, experience is enough", reveal: "No. OD starts with information gathering and diagnosis, because the real problem is often not the obvious one." },
        { label: "No, facts first", reveal: "Right. OD is data-driven: gather information, then diagnose, then plan." },
      ],
    },
    lead: "OD improves effectiveness through planned, collaborative, data-driven change on the human and technical sides, in a cycle of diagnosis, planning, implementation, evaluation and reinforcement.",
    check: [
      ask("Which order of an organisational change effort is standard?", "Information gathering, diagnosis, planning, implementation, evaluation", ["Diagnosis, implementation, information gathering, planning, evaluation", "Planning, information gathering, implementation, diagnosis, evaluation", "Implementation, diagnosis, planning, information gathering, evaluation"], "Facts must exist before diagnosis, and a plan must exist before action. The other orders act or plan before the problem is understood."),
      ask("A college merges two departments. It rewrites reporting lines and builds one timetable. Which side of OD's dual approach is this?", "The technical side: structure, goals and processes", ["The human side: culture, behaviour and communication", "Neither, since it is only an announcement", "The human side, since people use the timetable"], "Reporting lines and timetables are structure and process, which are technical. The rivalry between the camps would be the human side."),
      ask("A college runs workshops on cooperation, stops after two months, and finds six months later that old habits are back. Which step was neglected?", "Reinforcement: embedding the change in policy and culture", ["Diagnosis: nobody examined the problem", "Evaluation: no survey was ever done", "Planning: no workshop was designed"], "Reinforcement builds a change into policy and routine so it lasts. Workshops were planned and run; what was missing was the follow-through."),
    ],
    lens: [],
    reflect: "Pick a problem in your workplace. What facts would you gather before proposing any remedy?",
    summary: {
      points: [
        "OD is a planned, systematic, data-driven process to improve effectiveness, adaptability and health (Beckhard: planned, organisation-wide, top-managed).",
        "Dual approach: the human side (culture, behaviour, communication) and the technical side (structure, goals, processes).",
        "Four characteristics: planned, collaborative, data-driven, and feedback with reinforcement.",
        "Five steps: diagnosis, planning interventions, implementation, evaluation, reinforcement. Action research has seven, from entry to evaluation.",
      ],
      memory: "Diagnose, plan, implement, evaluate, reinforce.",
    },
  },
  {
    blockId: "od-interventions-and-tools",
    name: "OD interventions and tools",
    intro: "The planned actions of OD, sorted by level.",
    before: {
      q: "Would one favourite programme, such as a team retreat, suit every organisational problem?",
      choices: [
        { label: "Yes", reveal: "No. A retreat cannot fix a six-desk process. The intervention must match the diagnosed problem and its level." },
        { label: "No", reveal: "Right. Interventions work at different levels, and the diagnosis decides which one." },
      ],
    },
    lead: "An intervention is a planned action on a diagnosed problem, at individual, team, organisation or process level, built from tools such as surveys, workshops and rewards.",
    check: [
      ask("Process consultation is best described as…", "A consultant observes how a group works and helps members fix it themselves", ["A consultant supplies a ready-made answer to the group's problem", "Unstructured sessions where strangers swap frank feedback", "A bargain between two parties over what each expects of the other"], "In process consultation the group finds its own answers. Handing over a ready-made answer is expert consulting."),
      ask("Head office and a regional office quarrel over who approves which expense. Each side writes what it wants the other to do more of, less of and keep doing, then they bargain. Which intervention is this?", "Role negotiation", ["Sensitivity training", "Survey feedback", "Business process re-engineering"], "Writing more, less and same lists and bargaining a written agreement is role negotiation. Sensitivity training builds self-awareness and has no bargaining."),
      ask("A loan application passes through six desks and takes twelve days. Which intervention fits best?", "Business process re-engineering, a process-level redesign", ["A team-building retreat for the six clerks", "Coaching for each clerk at the individual level", "A new vision statement at organisation level"], "The fault lies in the process, so redesigning the process fits. A retreat treats a team problem, and the diagnosis shows a process problem."),
    ],
    lens: [],
    reflect: "Which level, individual, team, organisation or process, would you work on first in your own workplace, and why?",
    summary: {
      points: [
        "An OD intervention is a structured, data-driven, participative, goal-oriented action on a diagnosed problem.",
        "Levels: individual (coaching, training), team (team building, role negotiation), organisation (strategic planning, redesign), process (BPR, process consultation).",
        "Main interventions: sensitivity training, team building, process consultation (Schein), survey feedback, structural redesign, organisational learning, role negotiation, BPR (Hammer and Champy).",
        "Tools: surveys, focus groups, workshops, job rotation, reward systems.",
      ],
      memory: "Level first, then the tool.",
    },
  },
  {
    blockId: "lewins-three-stage-model",
    name: "Lewin's model, benefits and challenges",
    intro: "Unfreeze, change, refreeze, and what OD gains and costs.",
    before: {
      q: "Once new software goes live, will people adopt it automatically?",
      choices: [
        { label: "Yes", reveal: "No. Without preparation and reinforcement, people drift back to the old way. Lewin's model shows what is missing." },
        { label: "No", reveal: "Right. People must first be ready, then supported, then held to the new way." },
      ],
    },
    lead: "Lewin saw change as three stages, loosening the old ways, moving to new ones and making them stick, and OD brings real gains at real costs.",
    check: [
      ask("What is the order of Lewin's three-stage model?", "Unfreezing, changing, refreezing", ["Changing, unfreezing, refreezing", "Refreezing, changing, unfreezing", "Unfreezing, refreezing, changing"], "People must be prepared before the move, and the move must be stabilised after it. Refreezing before changing would fix the old way in place."),
      ask("A college head wants two merged departments to share one timetable. Which action belongs to unfreezing?", "Sharing data on clashes and complaints so staff see why the old way fails", ["Training staff in the new timetable software", "Adding the shared timetable to appraisal criteria", "Retiring the two old timetables"], "Unfreezing prepares people by showing the need. Training is the change stage, and appraisal criteria and retiring old systems belong to refreezing."),
      ask("A critic says Lewin's model suits only stable organisations. Which statement is the critic's point?", "Many organisations change continuously, so there may be no steady state to refreeze into", ["Refreezing is impossible because people dislike rules", "The model ignores the dip in performance", "The model wrongly puts unfreezing first"], "The critique is that the model treats change as one event between stable periods. It does mention the dip, and unfreezing first is the model's own order."),
    ],
    lens: [],
    reflect: "Think of a change you saw fail. Which of the three stages was skipped?",
    summary: {
      points: [
        "Lewin (1947): unfreezing (prepare, show the need), changing (introduce the new, with training), refreezing (reinforce with KPIs and rewards).",
        "Performance often dips during the change stage. Without refreezing, people drift back.",
        "Criticism: too linear and simple, assumes stable periods, neglects power and politics, suits top-down change.",
        "OD gains: productivity, communication, adaptability, retention, teamwork. Challenges: resistance, time, measuring impact, top-management buy-in.",
      ],
      memory: "Unfreeze, change, refreeze: prepare, implement, stabilise.",
    },
  },
];

export default lessons;
