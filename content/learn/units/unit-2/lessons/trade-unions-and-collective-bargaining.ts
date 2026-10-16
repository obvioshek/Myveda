import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "trade-unions-and-their-objectives",
    name: "Trade unions",
    intro: "Why workers join together, what unions want and the kinds of union there are.",
    before: {
      q: "Can one worker easily bargain with an employer who controls all the jobs?",
      choices: [
        { label: "Yes", reveal: "Rarely. One worker can be refused or replaced, which is why workers join together in a union." },
        { label: "No", reveal: "Right. Acting together gives workers a shared voice that one worker alone does not have." },
      ],
    },
    lead: "A trade union is an organised group of workers that protects and promotes their collective interests, with economic, protective, political and social aims.",
    check: [
      ask("A union runs adult education classes and a health camp for members' families. Which objective is this?", "Social", ["Economic", "Protective", "Political"], "Education, welfare and health camps are social objectives. Economic objectives are about pay and benefits, so they are the tempting answer only if you read the camp as a benefit."),
      ask("A union of electricians, with members from many different factories, is best described as…", "A craft union", ["An industrial union", "A general union", "A white-collar union"], "Members share one skill across industries, which is a craft union. An industrial union groups people by industry whatever their skill."),
      ask("A union takes a worker's case to management after she was dismissed without a hearing. Which objective does this show?", "Protective", ["Economic", "Political", "Social"], "Defending a worker against unfair dismissal is protection. It is not economic, even though she may lose pay, because the union is defending her rights and job, not bargaining over pay."),
    ],
    lens: [],
    reflect: "Think of a workplace you know. Which of the four objectives would matter most to its workers?",
    summary: {
      points: [
        "A trade union is an organised group of workers that protects and promotes their collective interests.",
        "Objectives: economic, protective, political and social.",
        "Types: craft (by skill), industrial (by industry), general (open to all), blue-collar and white-collar (by kind of job).",
        "The Trade Unions Act, 1926 was the main law; the Industrial Relations Code, 2020 now consolidates it.",
        "INTUC, AITUC, HMS and CITU are well-known central union organisations.",
      ],
      memory: "Economic, protective, political, social.",
    },
  },
  {
    blockId: "collective-bargaining-and-its-stages",
    name: "Collective bargaining",
    intro: "How workers' representatives and the employer settle the terms of work, step by step.",
    before: {
      q: "Is bargaining over the terms of work a single meeting?",
      choices: [
        { label: "Yes", reveal: "Not quite. It is a process that begins with preparation and starts again when the agreement expires." },
        { label: "No", reveal: "Right. It is a continuing cycle of five stages." },
      ],
    },
    lead: "Collective bargaining is a negotiation between a union and an employer on the terms of employment, moving from preparation to a signed agreement, then to review.",
    check: [
      ask("Which is the correct order of the five stages of collective bargaining?", "Preparation, negotiation, agreement, implementation, follow-up and renegotiation", ["Negotiation, preparation, agreement, follow-up, implementation", "Preparation, agreement, negotiation, implementation, follow-up", "Agreement, negotiation, preparation, implementation, follow-up"], "Facts and goals come first, then offers, then a signed agreement, then its application and review. Agreement cannot come before negotiation."),
      ask("A union collects the wages paid by rival firms and works out what the company can afford, before meeting the owner. Which stage is this?", "Preparation", ["Negotiation", "Agreement", "Implementation"], "Gathering data and setting goals is preparation. Negotiation starts only when offers and counter-offers are exchanged."),
      ask("A bank-sector wage agreement is negotiated for all banks together by their association and the unions. At which level is this bargaining?", "Industry level", ["Plant level", "Individual level", "It is not collective bargaining"], "Many firms bargain together, which is industry level. Plant level means one factory or firm bargaining for itself."),
    ],
    lens: [
      { pairing: 0, adds: "Two parties ask for shared benefit and no quarrel.", differs: "The chant assumes common goals. Bargaining begins from differing interests and reaches an agreement by negotiation." },
    ],
    reflect: "Which stage do you think weaker unions often skip, and what does that cost them?",
    summary: {
      points: [
        "Collective bargaining: negotiation between employee representatives, usually a union, and the employer on terms of employment.",
        "Features: collective, two sides, a continuing process, give and take.",
        "Five stages: preparation, negotiation, agreement, implementation, follow-up and renegotiation.",
        "The collective bargaining agreement runs for a fixed period; in India a conciliation settlement binds all workers, a direct agreement only its signatories.",
        "Levels: plant, industry, national. Bargaining is not the same as worker participation.",
      ],
      memory: "Prepare, negotiate, agree, implement, review.",
    },
  },
  {
    blockId: "types-benefits-and-challenges-of-bargaining",
    name: "Types of bargaining",
    intro: "Five types of bargaining, and what helps and hinders it.",
    before: {
      q: "Must one side lose for the other to gain in a wage negotiation?",
      choices: [
        { label: "Always", reveal: "Not always. When the pie is fixed, yes; but sides can sometimes grow the gain together." },
        { label: "Not always", reveal: "Right. Distributive bargaining is win-lose; integrative bargaining looks for a win-win." },
      ],
    },
    lead: "Bargaining may be distributive (win-lose), integrative (win-win), concessionary, productivity-linked or composite, and it faces challenges such as rival unions and globalisation.",
    check: [
      ask("A union gives up a wage rise for one year so that the company will not lay off workers. Which type of bargaining is this?", "Concessionary", ["Distributive", "Productivity", "Composite"], "The union gives up benefits to protect jobs in a time of financial stress, which is concessionary. Distributive is a general win-lose fight over a fixed sum, not a deliberate sacrifice for security."),
      ask("A plant and its union agree that a bonus is paid whenever output rises above an agreed level. Which type is this?", "Productivity bargaining", ["Distributive bargaining", "Composite bargaining", "Concessionary bargaining"], "Pay is tied to gains in output, which defines productivity bargaining. Composite means many issues in one bargain, which is not what the deal is about."),
      ask("Three unions in one factory each claim to speak for the workers, and the employer does not know whom to deal with. Which challenge is this?", "Multiplicity of unions", ["Employer resistance", "Globalisation", "Lack of legal limits"], "Several unions claiming to represent the same workers is multiplicity of unions. Employer resistance would mean the employer avoids talks, which is not the situation described."),
    ],
    lens: [],
    reflect: "Think of a negotiation you took part in. Was it a fixed sum to share, or could both sides gain?",
    summary: {
      points: [
        "Distributive: win-lose over a fixed sum. Integrative: win-win through shared interests.",
        "Concessionary: union gives up benefits to protect jobs. Productivity: pay tied to output. Composite: many issues in one bargain.",
        "Benefits: better pay, workplace democracy, fewer disputes, better relations, higher morale.",
        "Challenges: multiplicity of unions, lack of unity, employer resistance, legal limits, globalisation.",
      ],
      memory: "Distributive wins and loses; integrative wins together.",
    },
  },
  {
    blockId: "shops-arbitration-and-strike-kinds",
    name: "Common terms and strike kinds",
    intro: "Closed, open and agency shops, arbitration, grievances and four kinds of strike.",
    before: {
      q: "Can a factory insist that every new worker already belongs to the union?",
      choices: [
        { label: "Yes", reveal: "Under a closed shop it can, though many countries restrict or ban the closed shop." },
        { label: "No", reveal: "Only in an open shop. Under a closed shop the employer may hire only union members." },
      ],
    },
    lead: "These terms say whether workers must join a union, how a stalled dispute is settled, and what kind of strike has occurred.",
    check: [
      ask("In which arrangement do workers choose freely whether to join the union?", "Open shop", ["Closed shop", "Agency shop", "Arbitration"], "In an open shop membership is a free choice. In an agency shop workers need not join but must pay a fee, which is the tempting answer."),
      ask("Workers at a mill walk out suddenly, without their union's approval, while an agreement is still running. What kind of strike is this?", "A wildcat strike", ["An economic strike", "A sympathy strike", "An unfair labour practice strike"], "A sudden strike without union approval is wildcat. An economic strike follows a failure to agree on contract terms, not an unapproved walkout during an agreement."),
      ask("Workers strike to protest the employer's illegal conduct. A manager says it is an economic strike. What is wrong with that?", "It is an unfair labour practice strike, since the cause is the employer's illegal act, not the terms of a contract", ["Nothing, since all strikes are economic strikes", "It is a sympathy strike, since workers are acting together", "It is a wildcat strike, since the employer was not warned"], "The cause decides the kind. Terms of a contract make a strike economic; the employer's illegal conduct makes it an unfair labour practice strike. Acting together does not make it a sympathy strike, which needs another union's strike."),
    ],
    lens: [],
    reflect: "Why might a country ban the closed shop yet allow an agency shop?",
    summary: {
      points: [
        "Closed shop: only union members hired. Open shop: free choice. Agency shop: no need to join, but all pay the union a fee.",
        "Arbitration: a neutral third party decides when talks fail. Grievance procedure: a formal route for a worker's complaint.",
        "Economic strike: failure to agree contract terms. Unfair labour practice strike: protest at illegal conduct by the employer.",
        "Wildcat strike: sudden and unapproved, such as during an agreement. Sympathy strike: one union supports another's strike.",
      ],
      memory: "Terms, employer's wrong, no approval, for another.",
    },
  },
];

export default lessons;
