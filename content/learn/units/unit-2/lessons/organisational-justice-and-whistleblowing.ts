import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "organisational-justice",
    name: "Organisational justice",
    intro: "Fairness as employees see it: the outcome, the process and the treatment.",
    before: {
      q: "If your pay rise is fair but the way it was decided was not, would you still feel fairly treated?",
      choices: [
        { label: "Yes", reveal: "Often not. Organisational justice covers both the outcome and how it was reached and communicated." },
        { label: "Probably not", reveal: "Right. Justice has three dimensions: the outcome, the process and the treatment." },
      ],
    },
    lead: "Organisational justice is how fair employees feel their workplace is, in outcomes, processes and treatment.",
    check: [
      ask("“Was I treated fairly?” is the question of which dimension of organisational justice?", "Interactional", ["Distributive", "Procedural", "Equity"], "Interactional justice is about treatment. Distributive asks whether the outcome was fair and procedural whether the process was; equity is a principle of distributive justice, not a dimension."),
      ask("Two bank officers get the same pay rise. One is told the reasons in person; the other learns it from a payslip and a rumour. Why might only the second feel unfairly treated?", "Justice covers how a decision is made and told, not only the outcome", ["The second officer's rise was smaller", "Pay rises are never seen as fair", "Only distributive justice affects morale"], "The rupees were the same, so the outcome is not the difference. The process and the treatment were, and both count in organisational justice."),
      ask("Staff call a new shift roster “unfair”. What should the manager find out first?", "Whether they object to the outcome, the process or the treatment", ["Which employees complained the loudest", "Whether the roster is legal", "How other firms draw up rosters"], "Each dimension needs a different fix: a new roster, a new way of deciding, or a better way of explaining. Checking legality matters, but a lawful roster can still be seen as unfair."),
    ],
    lens: [
      { pairing: 0, adds: "Impartiality pictured as an even balance that leans to neither side.", differs: "The Kuṟaḷ describes a virtue of the wise. Organisational justice is about how employees perceive their workplace." },
    ],
    reflect: "Think of a decision at work that felt unfair. Was it the outcome, the process or the treatment?",
    summary: {
      points: [
        "Organisational justice: employees' perception of fairness at work (Greenberg, 1987).",
        "It is about perception: what staff believe, not what management intended.",
        "Three dimensions: distributive (outcome), procedural (process), interactional (treatment).",
        "Fairness builds trust, morale, productivity and retention.",
      ],
      memory: "Outcome, process, treatment.",
    },
  },
  {
    blockId: "distributive-and-procedural-justice",
    name: "Distributive and procedural justice",
    intro: "Fair shares, and fair ways of deciding them.",
    before: {
      q: "Can a decision feel fair even when its outcome goes against you?",
      choices: [
        { label: "No", reveal: "It can, if the process was fair: consistent, unbiased, accurate, with a voice and a right of appeal. That is procedural justice." },
        { label: "Yes", reveal: "Right. A fair process can make an unfavourable outcome acceptable: that is procedural justice." },
      ],
    },
    lead: "Distributive justice is about who gets what; procedural justice is about how it was decided, judged by Leventhal's six rules.",
    check: [
      ask("Rewards shared out in proportion to each person's contribution follow which principle?", "Equity", ["Equality", "Need", "Seniority"], "Equity ties the share to contribution. Equality, the tempting answer, gives everyone the same share whatever they put in."),
      ask("An officer who missed a promotion can take her case to a higher committee. Which procedural rule does this meet?", "Correctability", ["Representation", "Consistency", "Accuracy"], "Correctability is a way to challenge or appeal a decision. Representation means having a voice while the decision is being made, not a route to overturn it."),
      ask("A fest committee shares ₹1 lakh among volunteers who logged 1,000 hours in all. Under equity, what does a volunteer with 60 hours get?", "₹6,000", ["₹5,000", "₹600", "₹60,000"], "60 ÷ 1,000 of ₹1,00,000 is ₹6,000. ₹5,000 is the equal share (₹1 lakh ÷ 20), which is the equality principle."),
    ],
    lens: [
      { pairing: 1, adds: "Regard each by their worth, and many will live by it.", differs: "The Kuṟaḷ commends merit-based regard. Distributive justice also recognises equality and need as fair principles in some situations." },
      { pairing: 2, adds: "Inquire, favour none and act impartially toward all.", differs: "The Kuṟaḷ describes a ruler's justice. Procedural justice adds representation and a right of appeal for employees." },
    ],
    reflect: "Which of the six procedural rules is weakest in decisions you have seen at work?",
    summary: {
      points: [
        "Distributive justice: fair shares, by equity (contribution), equality (same for all) or need.",
        "Deutsch: equity suits productivity, equality suits harmony, need suits welfare.",
        "Procedural justice: fair methods, even when the outcome is unfavourable.",
        "Leventhal's six rules: consistency, bias-free, accuracy, representation, correctability, ethicality.",
      ],
      memory: "C, B, A, R, C, E.",
    },
  },
  {
    blockId: "adams-equity-theory",
    name: "Adams's equity theory",
    intro: "Comparing your input-outcome ratio with someone else's, and what you do about a gap.",
    before: {
      q: "Two colleagues get the same pay, but one works far longer hours. Will both feel equally fairly paid?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. People compare pay against effort, not pay alone, so the one working longer hours may feel under-rewarded." },
        { label: "No", reveal: "Right. Equity theory says people compare the ratio of outcomes to inputs with someone else's ratio." },
      ],
    },
    lead: "Adams's equity theory: people compare their outcome-to-input ratio with a referent's and act to remove any perceived inequity.",
    check: [
      ask("In Adams's equity theory, the person with whom someone compares their ratio is called the…", "Referent", ["Mediator", "Benchmark manager", "Input provider"], "The comparison person is the referent. Inputs and outcomes are the two parts of each ratio, not the person compared with."),
      ask("Meena earns ₹40,000 for 40 hours a week; Sunil earns ₹36,000 for 30 hours. How does Meena's ratio compare with Sunil's, and what does she feel?", "Lower (₹1,000 an hour against ₹1,200): she feels under-rewarded", ["Higher (₹1,000 an hour against ₹800): she feels over-rewarded", "Equal, because both are bank clerks", "Higher, because her monthly pay is larger"], "Meena's ratio is 40,000 ÷ 40 = ₹1,000; Sunil's is 36,000 ÷ 30 = ₹1,200. Her larger pay misleads, because the theory compares pay per unit of input, not the pay itself."),
      ask("A manager hears that a worker who feels under-rewarded has started arriving late and working less carefully. Which response to inequity is this?", "Changing inputs", ["Changing the referent", "Leaving the field", "Distorting perceptions"], "Cutting effort lowers the input side of the ratio. Leaving the field would mean quitting or transferring, which has not happened here."),
    ],
    lens: [],
    reflect: "Whom do you compare yourself with at work? Would a different referent change how fairly you feel paid?",
    summary: {
      points: [
        "Adams (1963): people compare outcomes ÷ inputs with a referent's ratio.",
        "Equal ratios bring satisfaction; a lower ratio brings resentment; a higher ratio can bring guilt.",
        "Ways to restore balance: change inputs, change outcomes, distort perceptions, change the referent, act on the referent, leave.",
        "Equity theory (a reaction) is not the equity principle (a way to share rewards).",
      ],
      memory: "My ratio against theirs: equal is calm, unequal is action.",
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
    lead: "Interactional justice is fair treatment when decisions are carried out and told: interpersonal (respect) and informational (explanation).",
    check: [
      ask("Honest, timely and adequate explanations of a decision are part of…", "Informational justice", ["Interpersonal justice", "Distributive justice", "Procedural justice"], "Informational justice is about explanation. Interpersonal justice, its partner, is about dignity, respect and courtesy."),
      ask("A manager announces a cancelled bonus politely, but gives no reason and takes no questions. Which part of interactional justice is missing?", "Informational justice", ["Interpersonal justice", "Distributive justice", "Correctability"], "She was courteous, so interpersonal justice was met. What was missing was an honest, adequate explanation, which is informational justice."),
      ask("A company always tells staff bad news with great courtesy, but the same group loses out every time. What follows?", "Respectful delivery cannot make an unfair outcome fair", ["Interactional justice makes the outcomes fair", "The staff have no reason to object", "Only procedural justice matters here"], "Courtesy helps people accept hard decisions, but repeated unfair outcomes are a distributive problem that politeness does not fix."),
    ],
    lens: [
      { pairing: 3, adds: "Harsh words where kind ones are possible are like unripe fruit chosen over ripe.", differs: "The Kuṟaḷ is about speech in general. Interactional justice also requires honest, timely and adequate explanations." },
      { pairing: 5, adds: "Respect framed as restraint: the list is mostly about what not to say or show to others.", differs: "Interactional justice is about how decisions are explained and people treated at work. The vacana is a whole moral code for life." },
    ],
    reflect: "How would you tell a colleague that their proposal was rejected, so that they still felt respected?",
    summary: {
      points: [
        "Interactional justice: fair treatment when decisions are carried out and told (Bies and Moag, 1986).",
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
    intro: "Reporting wrongdoing to people who can stop it.",
    before: {
      q: "Should an employee who finds fraud go straight to the media?",
      choices: [
        { label: "Yes", reveal: "Internal reporting is generally the preferred first step, giving the organisation a chance to act. External reporting is for when internal channels fail or are hostile." },
        { label: "Internally first", reveal: "Right. Internal reporting usually comes first; external reporting is for when that fails or the environment is hostile." },
      ],
    },
    lead: "Whistleblowing is reporting wrongdoing to those who can act on it: inside first, outside when inside channels fail or are hostile.",
    check: [
      ask("Reporting suspected fraud to a regulator is which type of whistleblowing?", "External", ["Internal", "A personal grievance", "Informal"], "Regulators, legal authorities and the media are outside the organisation. Internal reporting goes to HR, senior management or an ethics committee."),
      ask("An executive finds duplicate payments to a supplier, and her manager tells her to drop it. What is the usual next step?", "Record the facts and report through a channel that bypasses her manager", ["Go straight to the newspapers", "Drop it, as her manager said", "Confront the supplier herself"], "Internal reporting comes first, but not through the person blocking it. Going to the media skips the organisation's chance to act and is the fallback if internal channels fail."),
      ask("Which of these is a whistleblowing concern rather than a personal grievance?", "A colleague taking bribes from contractors", ["Being denied a transfer you asked for", "A pay rise smaller than expected", "A disliked change to your shift"], "Bribery harms the organisation and the public. The other three are about the complainant's own treatment, which makes them grievances."),
    ],
    lens: [
      { pairing: 4, adds: "A ruler who is easy to reach, so those around him cannot confuse what should and should not be done.", differs: "Kauṭilya writes about petitions to a king. Whistleblowing concerns reporting wrongdoing inside organisations, with legal protection." },
    ],
    reflect: "If you saw wrongdoing at work, whom would you report it to first, and what would make you hesitate?",
    summary: {
      points: [
        "Whistleblowing: disclosure of illegal, immoral or illegitimate practices to those who can act (Near and Miceli, 1985).",
        "Employees, customers, contractors, consultants and suppliers may report; retaliation is a real risk.",
        "Internal first; external when internal mechanisms fail or are hostile.",
        "A grievance is about your own treatment; whistleblowing is about harm to others.",
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
    lead: "Early reporting protects the organisation too; in India, the Companies Act and SEBI require reporting mechanisms, and the 2014 Act is not yet in force.",
    check: [
      ask("Which law requires vigil mechanisms of specified companies?", "Companies Act, 2013", ["Whistle Blowers Protection Act, 2014", "Employees' Compensation Act, 1923", "SEBI Act, 1992 alone"], "The Companies Act, 2013 requires vigil mechanisms and provides for the Serious Fraud Investigation Office. The 2014 Act concerns disclosures about public servants."),
      ask("A clerk reports that a government officer is misusing his power. Which framework is written for such disclosures?", "Whistle Blowers Protection Act, 2014", ["Companies Act, 2013", "SEBI framework for listed entities", "Serious Fraud Investigation Office"], "The 2014 Act covers disclosures about corruption or misuse of power by public servants. Note that it has been enacted but not yet brought into force."),
      ask("A supplier double-bills ₹2 lakh a month. How much does a report in the first month save, compared with finding it after a year?", "₹22 lakh", ["₹24 lakh", "₹2 lakh", "₹20 lakh"], "A year of double-billing costs 12 × ₹2 lakh = ₹24 lakh; stopping it after one month limits the loss to ₹2 lakh, saving ₹22 lakh. ₹24 lakh is the full year's loss, not the saving."),
    ],
    lens: [],
    reflect: "Does your organisation have a vigil mechanism? Would people know how to use it?",
    summary: {
      points: [
        "Reportable: legal and ethical violations, fraud, safety risks, environmental harm, misuse of funds, abuse of power, IP violations.",
        "Benefits: early detection, trust, ethical culture, a responsible image, scandal prevention, transparency.",
        "India: Companies Act 2013 (vigil mechanisms, SFIO), SEBI framework for listed entities.",
        "Whistle Blowers Protection Act 2014: disclosures about public servants; enacted, not yet in force.",
      ],
      memory: "Companies Act, SEBI, Whistle Blowers Protection Act.",
    },
  },
  {
    blockId: "vigil-mechanism-and-safeguards",
    name: "Vigil mechanism and safeguards",
    intro: "The safe route inside a company for raising serious concerns, and who must have one.",
    before: {
      q: "If a finance head is the person being reported, whom can an employee safely go to?",
      choices: [
        { label: "Only the finance head", reveal: "No. A vigil mechanism must allow direct access to the audit committee chairperson in appropriate or exceptional cases." },
        { label: "The audit committee chairperson", reveal: "Right. The law builds in direct access to the audit committee chairperson so a report can bypass an implicated manager." },
      ],
    },
    lead: "A vigil mechanism is a duty of listed, deposit-taking and large-borrowing companies, with safeguards against victimisation and access to the audit committee chairperson.",
    check: [
      ask("Which of these must have a vigil mechanism under the Companies Act, 2013 and its rules?", "A listed company", ["Every private firm with ten employees", "Only public sector banks", "Only companies with a foreign parent"], "Listed companies are covered directly. Deposit-taking companies and those borrowing above ₹50 crore from banks and financial institutions are covered by the rules; size of staff is not the test."),
      ask("An auditor suspects her finance head is splitting orders to avoid approval limits. Which feature of the vigil mechanism lets her report safely?", "Direct access to the audit committee chairperson", ["A requirement to report to the finance head first", "Anonymous reports being compulsory by law", "A guarantee that the complaint will always be upheld"], "The mechanism must let a report reach the audit committee chairperson in appropriate cases. The law does not make anonymous reporting compulsory, and a complaint is tested on its merits."),
      ask("A student writes in an exam that SEBI's Clause 49 is the current law for listed-company vigil mechanisms. What is the correct position?", "Clause 49 was replaced by the LODR Regulations, 2015", ["Clause 49 was replaced by the Whistle Blowers Protection Act, 2014", "Clause 49 is the same as Section 177 of the Companies Act", "Clause 49 required all companies to accept anonymous reports"], "LODR 2015 replaced Clause 49 for listed entities. The 2014 Act concerns public servants and is not yet in force, so it replaced nothing."),
    ],
    lens: [],
    reflect: "Does the policy at your organisation let a report bypass the line manager? Do people know how?",
    summary: {
      points: [
        "Section 177(9): listed companies, and by rule deposit-taking companies and those borrowing above ₹50 crore, must have a vigil mechanism.",
        "Safeguards against victimisation and direct access to the audit committee chairperson are required.",
        "Clause 49 of the listing agreement gave way to the LODR Regulations, 2015.",
        "Good policies add confidentiality, several channels, fair investigation and feedback.",
        "Frivolous reports are screened by the audit committee; the vigil mechanism is not the 2014 Act.",
      ],
      memory: "Listed, deposits, ₹50 crore: vigil mechanism, safeguards, audit committee access.",
    },
  },
];

export default lessons;
