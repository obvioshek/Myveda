import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "organisational-justice",
    name: "Organisational justice",
    intro: "Fairness as employees see it.",
    before: {
      q: "If your pay rise is fair but the way it was decided was not, would you still feel fairly treated?",
      choices: [
        { label: "Yes", reveal: "Often not. Organisational justice covers both the outcome and how it was reached and communicated." },
        { label: "Probably not", reveal: "Right. Justice has three dimensions: the outcome, the process and the treatment." },
      ],
    },
    lead: "Organisational justice is perceived fairness of outcomes, processes and treatment.",
    check: [
      ask("Who popularised the term organisational justice?", "Jerald Greenberg (1987)", ["Elton Mayo", "Douglas McGregor", "Geert Hofstede"], "Greenberg, in 1987."),
      ask("“Was I treated fairly?” is the question of which dimension?", "Interactional", ["Distributive", "Procedural", "Informational only"], "Distributive asks about the outcome, procedural about the process."),
    ],
    lens: [
      { pairing: 0, adds: "Impartiality pictured as an even balance that leans to neither side.", differs: "The Kuṟaḷ describes a virtue of the wise. Organisational justice is about how employees perceive their workplace." },
    ],
    reflect: "Think of a decision at work that felt unfair. Was it the outcome, the process or the treatment?",
    summary: {
      points: [
        "Organisational justice: employees' perception of fairness at work (Greenberg, 1987).",
        "Fairness builds trust, morale, productivity and retention.",
        "Three dimensions: distributive (outcome), procedural (process), interactional (treatment).",
      ],
      memory: "Outcome, process, treatment.",
    },
  },
  {
    blockId: "distributive-and-procedural-justice",
    name: "Distributive and procedural justice",
    intro: "Fair outcomes, and fair ways of reaching them.",
    before: {
      q: "Can a decision feel fair even when its outcome goes against you?",
      choices: [
        { label: "No", reveal: "It can, if the process was fair: consistent, unbiased, accurate, with a voice and a right of appeal. That is procedural justice." },
        { label: "Yes", reveal: "Right. A fair process can make an unfavourable outcome acceptable: that is procedural justice." },
      ],
    },
    lead: "Distributive justice is about who gets what; procedural justice is about how it was decided.",
    check: [
      ask("Rewards based on contribution follow which principle?", "Equity", ["Equality", "Need", "Seniority"], "Equality gives everyone the same; need allocates by individual needs."),
      ask("A right to challenge or appeal a decision is which procedural requirement?", "Correctability", ["Representation", "Consistency", "Accuracy"], "Representation means employees have a voice."),
    ],
    lens: [
      { pairing: 1, adds: "Regard each by their worth, and many will live by it.", differs: "The Kuṟaḷ commends merit-based regard. Distributive justice also recognises equality and need as fair principles in some situations." },
      { pairing: 2, adds: "Inquire, favour none and act impartially toward all.", differs: "The Kuṟaḷ describes a ruler's justice. Procedural justice adds representation and a right of appeal for employees." },
    ],
    reflect: "Which of the six procedural requirements is weakest in decisions you have seen at work?",
    summary: {
      points: [
        "Distributive justice: fair outcomes; principles of equity (contribution), equality (equal share) and need.",
        "Procedural justice: fair methods, even when the outcome is unfavourable.",
        "Six requirements: consistency, bias-free, accuracy, representation, correctability, ethicality.",
      ],
      memory: "C, B, A, R, C, E.",
    },
  },
  {
    blockId: "interactional-justice",
    name: "Interactional justice",
    intro: "How people are treated and how decisions are explained.",
    before: {
      q: "Does it matter how bad news is delivered, if the news itself cannot change?",
      choices: [
        { label: "No", reveal: "It does. Interactional justice is about dignity, respect and courtesy, and honest, timely, adequate explanations." },
        { label: "Yes", reveal: "Right. That is interactional justice: dignity in treatment and honesty in explanation." },
      ],
    },
    lead: "Interactional justice has two parts: interpersonal and informational.",
    check: [
      ask("Honest, timely and adequate explanations are part of…", "Informational justice", ["Interpersonal justice", "Distributive justice", "Procedural justice"], "Interpersonal justice is dignity, respect and courtesy."),
      ask("Interactional justice concerns…", "The treatment", ["The outcome", "The process", "The pay scale"], "Distributive is the outcome; procedural is the process."),
    ],
    lens: [
      { pairing: 3, adds: "Harsh words where kind ones are possible are like unripe fruit chosen over ripe.", differs: "The Kuṟaḷ is about speech in general. Interactional justice also requires honest, timely and adequate explanations." },
      { pairing: 5, adds: "Respect framed as restraint: the list is mostly about what not to say or show to others.", differs: "Interactional justice is about how decisions are explained and people treated at work. The vacana is a whole moral code for life." },
    ],
    reflect: "How would you tell a colleague that their proposal was rejected, so that they still felt respected?",
    summary: {
      points: [
        "Interpersonal justice: dignity, respect, courtesy.",
        "Informational justice: honest, timely, adequate explanations.",
        "Distributive is the outcome, procedural the process, interactional the treatment.",
      ],
      memory: "Respect in treatment, honesty in explanation.",
    },
  },
  {
    blockId: "whistleblowing",
    name: "Whistleblowing",
    intro: "Reporting wrongdoing to protect the public interest.",
    before: {
      q: "Should an employee who finds fraud go straight to the media?",
      choices: [
        { label: "Yes", reveal: "Internal reporting is generally the preferred first step, giving the organisation a chance to act. External reporting is for when internal channels fail or are hostile." },
        { label: "Internally first", reveal: "Right. Internal reporting usually comes first; external reporting is for when that fails or the environment is hostile." },
      ],
    },
    lead: "Whistleblowing exposes wrongdoing; internal channels come first, external ones when they fail.",
    check: [
      ask("Reporting to a regulator is which type of whistleblowing?", "External", ["Internal", "Anonymous", "Informal"], "Internal reporting goes to HR, senior management or an ethics committee."),
      ask("Which is a form of retaliation against whistleblowers?", "Social ostracism", ["Early detection", "Transparency", "Ethical culture"], "Others are career setbacks, legal threats and harassment."),
    ],
    lens: [
      { pairing: 4, adds: "A ruler who is easy to reach, so those around him cannot confuse what should and should not be done.", differs: "Kauṭilya writes about petitions to a king. Whistleblowing concerns reporting wrongdoing inside organisations, with legal protection." },
    ],
    reflect: "If you saw wrongdoing at work, whom would you report it to first, and what would make you hesitate?",
    summary: {
      points: [
        "Whistleblowing: reporting wrongdoing to protect ethical, legal and public interests.",
        "Anyone connected with the organisation may report; retaliation is a real risk.",
        "Internal first; external when internal mechanisms fail or are hostile.",
      ],
      memory: "Wrongdoing, report inside, resolve; if not, report outside.",
    },
  },
  {
    blockId: "whistleblowing-law-and-benefits",
    name: "Reportable offences, benefits and India's framework",
    intro: "What can be reported, why it helps, and the law in India.",
    before: {
      q: "Does whistleblowing only hurt the organisation it exposes?",
      choices: [
        { label: "Yes", reveal: "It also helps: early detection of risks, trust, an ethical culture, scandal prevention and transparency." },
        { label: "No", reveal: "Right. It brings early detection, trust, an ethical culture and prevention of major scandals." },
      ],
    },
    lead: "Whistleblowing protects organisations too, and Indian law requires vigil mechanisms and provides for protecting whistleblowers.",
    check: [
      ask("Which law requires vigil mechanisms of specified companies?", "Companies Act, 2013", ["Whistle Blowers Protection Act, 2014", "Employees' Compensation Act, 1923", "SEBI Act, 1992 alone"], "The Companies Act also provides for the Serious Fraud Investigation Office."),
      ask("The Whistle Blowers Protection Act, 2014 concerns disclosures about…", "Corruption or misuse of power by public servants", ["Private disputes between employees", "Product quality complaints", "Tax returns"], "It also protects those who make such disclosures."),
    ],
    lens: [],
    reflect: "Does your organisation have a vigil mechanism? Would people know how to use it?",
    summary: {
      points: [
        "Reportable: legal and ethical violations, fraud, safety risks, environmental harm, misuse of funds, abuse of power, IP violations.",
        "Benefits: early detection, trust, ethical culture, a responsible image, scandal prevention, transparency.",
        "India: Companies Act 2013 (vigil mechanisms, SFIO), SEBI framework, Whistle Blowers Protection Act 2014.",
      ],
      memory: "Companies Act, SEBI, Whistle Blowers Protection Act.",
    },
  },
];

export default lessons;
