import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-industrial-relations-is",
    name: "What industrial relations is",
    intro: "Four parties, one aim, five objectives.",
    before: {
      q: "Is industrial relations only about factories and strikes?",
      choices: [
        { label: "Yes", reveal: "No. Industry means any productive activity, and IR covers terms of work, grievances and worker participation, not only strikes." },
        { label: "No", reveal: "Right. IR covers every productive activity and the whole range of dealings between employers, workers, unions and the government." },
      ],
    },
    lead: "IR is the management of relationships among employers, employees, trade unions and the government, aimed at harmony and productivity.",
    check: [
      ask("Which four parties take part in industrial relations?", "Employers, employees, trade unions and the government", ["Employers, employees, customers and suppliers", "Managers, shareholders, banks and the government", "Employees, trade unions, courts and consumers"], "IR is a four-sided relationship. Customers and suppliers matter to a business, but they are not parties to industrial relations."),
      ask("A plant starts a monthly joint committee of managers and workers' representatives to share production targets. Which IR objective does this serve most directly?", "Industrial democracy: giving workers a voice in decisions", ["Limited government intervention", "Better welfare facilities", "Lower wage costs"], "A joint forum that shares targets gives workers a say, which is industrial democracy. It may also reduce outside intervention, but its direct purpose is voice, not self-regulation."),
      ask("A manager says, \"HR and IR are the same, so one policy on hiring will do for both.\" What is the best reply?", "HRM deals with each employee; IR deals with the collective side, including unions and the state", ["IR deals with individuals and HRM with unions", "IR covers only the factory floor, and HRM covers offices", "They differ only in name, but IR is older"], "HRM looks at individual employees: hiring, training, appraisal, pay. IR looks at groups, unions, employers and the government. The reverse statement is the tempting error."),
    ],
    lens: [],
    reflect: "Which of the five objectives would your workplace find hardest to meet, and why?",
    summary: {
      points: [
        "IR is the management of relationships among employers, employees, trade unions and the government, aimed at harmony and productivity.",
        "Industry means any productive activity, from farming and mining to manufacturing, trade and banking.",
        "Five objectives: healthy relationships, preventing and resolving disputes, welfare and productivity, limited government intervention, industrial democracy.",
        "HRM deals with each employee; IR deals with the collective side.",
      ],
      memory: "Four parties, one aim: harmony and productivity.",
    },
  },
  {
    blockId: "approaches-to-industrial-relations",
    name: "Approaches to industrial relations",
    intro: "Different ways of seeing conflict at work.",
    before: {
      q: "Is conflict between management and workers always a sign that something has gone wrong?",
      choices: [
        { label: "Yes", reveal: "That is the unitary view. The pluralist view treats such conflict as normal and manageable." },
        { label: "No", reveal: "That is the pluralist view: groups have different interests, so conflict is normal and managed through bargaining." },
      ],
    },
    lead: "Unitary, pluralist and Marxist views differ on conflict. Named approaches add Dunlop's systems, Flanders' Oxford, Margerison, Silverman's action frame, Mayo's human relations and Gandhi.",
    check: [
      ask("Which thinker is linked with the systems approach, built on actors, contexts, ideology and rules?", "John T. Dunlop", ["Allan Flanders", "David Silverman", "Elton Mayo"], "Dunlop's Industrial Relations Systems (1958) describes the system. Flanders is tempting because he also stresses rules, but his Oxford approach studies the institutions that regulate jobs."),
      ask("A plant head thinks the company is one team, and sees the union as an outsider that stirs up trouble. Which approach is she using?", "Unitary", ["Pluralist", "Marxist", "Action frame of reference"], "Seeing one team with one source of authority, and conflict as the work of troublemakers, is the unitary view. A pluralist would accept the union as a legitimate voice for a different interest."),
      ask("A union leader says, \"Owners and workers sit on opposite sides, because the system itself divides them.\" Which approach does this match?", "Marxist: conflict comes from class division in capitalism", ["Human relations: conflict comes from unmet social needs", "Gandhian: trusteeship removes the conflict", "Oxford: conflict comes from missing rules"], "Class division as the source of conflict is the Marxist view. Human relations blames unmet human needs and poor supervision, not the structure of society."),
    ],
    lens: [],
    reflect: "Think of a recent dispute you know of. Which approach did the manager seem to follow?",
    summary: {
      points: [
        "Unitary: one team, conflict rare. Pluralist: many groups, conflict normal and bargained. Marxist: conflict from class division.",
        "Dunlop: systems approach, with actors, contexts, ideology and a web of rules (1958).",
        "Flanders: Oxford approach. Margerison: industrial sociology. Silverman (1970): action frame of reference. Mayo: human relations.",
        "Gandhian approach: trusteeship, non-violence and moral persuasion.",
      ],
      memory: "Dunlop systems, Flanders Oxford, Silverman action, Mayo human.",
    },
  },
  {
    blockId: "industrial-disputes-and-settlement",
    name: "Industrial disputes and settlement",
    intro: "What a dispute is, how it shows itself, and how it is prevented or settled.",
    before: {
      q: "Can two workers' groups have an industrial dispute with each other?",
      choices: [
        { label: "No", reveal: "They can. The definition covers employer against employer, employer against workers, and worker against worker." },
        { label: "Yes", reveal: "Right. The definition has three pairings, including worker against worker." },
      ],
    },
    lead: "A dispute is a work-related disagreement between employers, workers, or both. Forms of action show it; works committees prevent it; conciliation, adjudication and arbitration settle it.",
    check: [
      ask("Which of these is a lockout?", "The employer shuts the workplace until workers accept its terms", ["Workers stand at the gate to persuade others not to work", "Workers surround managers and stop them leaving", "Workers stay at their stations but refuse to work"], "A lockout is the employer's tool. Picketing, gherao and the sit-down strike are all things workers do, which is the tempting confusion."),
      ask("A union in one factory stops work to support another union's strike at a different company. What kind of strike is this?", "A sympathy strike", ["An economic strike", "A wildcat strike", "An unfair labour practice strike"], "Supporting another union's strike is a sympathy strike. A wildcat strike is one without the union's approval, which is not what happened here."),
      ask("Which of these is machinery that settles a dispute that has already arisen, and not a method of direct negotiation?", "Conciliation", ["Collective bargaining", "A works committee's monthly meeting", "A union's notice to the employer"], "Conciliation brings in a neutral to help settle the dispute. Collective bargaining is direct talks between the sides, with no third party, so it is a method of negotiation and not statutory machinery."),
    ],
    lens: [],
    reflect: "At which rung of the ladder (prevent, conciliate, decide) does most of your workplace's trouble get handled?",
    summary: {
      points: [
        "1947 Act definition: a dispute connected with employment, terms of employment or conditions of labour between employers and employers, employers and workmen, or workmen and workmen.",
        "The Industrial Relations Code, 2020 consolidates the 1947 Act; older exam questions still use the 1947 Act's terms.",
        "Economic causes: wages, bonus, hours, leave, dismissal. Non-economic: union recognition, victimisation, ill-treatment, sympathy, politics.",
        "Forms: strike, lockout, gherao, picketing; strike kinds include economic, unfair labour practice, sympathy, general, wildcat, sit-down and go-slow.",
        "Prevention: works committee. Settlement: conciliation, adjudication, voluntary arbitration. Collective bargaining is a method of negotiation, not settlement machinery.",
      ],
      memory: "Prevent, conciliate, then decide.",
    },
  },
  {
    blockId: "grievance-management",
    name: "Grievance management",
    intro: "How a complaint is heard, judged and closed.",
    before: {
      q: "If a grievance is not justified, can it be ignored?",
      choices: [
        { label: "Yes", reveal: "No. A grievance may or may not be justified, but an ignored one still lowers motivation and can grow into a dispute." },
        { label: "No", reveal: "Right. Even an unjustified grievance needs a hearing, because ignoring it hurts trust and can grow into a dispute." },
      ],
    },
    lead: "A grievance is an employee's sense of unfair treatment at work. Handle it in order: acknowledge, investigate, communicate, resolve, document and follow up.",
    check: [
      ask("Which is the correct order of the five grievance-handling steps?", "Acknowledge, investigate, communicate, resolve, document and follow up", ["Investigate, acknowledge, resolve, communicate, document and follow up", "Acknowledge, resolve, investigate, communicate, document and follow up", "Communicate, acknowledge, investigate, document, resolve and follow up"], "The complaint is registered first, then the facts are gathered, then parties are kept informed, then a decision is made, and finally it is recorded and followed up. Resolving before investigating risks an unfair decision."),
      ask("None of a team of six gets the overtime bonus that the policy promises. What type of grievance is this?", "A group grievance", ["An individual grievance", "A policy or union grievance only", "Not a grievance, since the policy is clear"], "The same management action hurts a group in the same way, so it is a group grievance. A single employee's complaint would be individual."),
      ask("A supervisor settles an operator's complaint quickly, but writes nothing down and never checks back. Which step has been skipped?", "Document and follow up", ["Acknowledge", "Investigate", "Resolve"], "Without a record, nobody can spot repeated problems, and without a later check nobody knows whether the operator faced retaliation. The supervisor did resolve it, so resolution is not the missing step."),
    ],
    lens: [],
    reflect: "How would an employee in your workplace raise a grievance, and would they trust it enough to do so?",
    summary: {
      points: [
        "Grievance: dissatisfaction or a sense of injustice about the job, justified or not, often the gap between expectation and reality.",
        "Types: individual (one employee), group (a team), policy or union (many, or how a policy is read).",
        "Five steps: acknowledge, investigate, communicate, resolve, document and follow up without retaliation.",
        "Open procedures catch problems early, build trust and show where policies fail; unresolved grievances can become industrial disputes.",
      ],
      memory: "Acknowledge, investigate, communicate, resolve, document.",
    },
  },
];

export default lessons;
