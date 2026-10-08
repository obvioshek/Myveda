import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "ethics-morals-and-values",
    name: "Ethics, morals and values",
    intro: "Three words often used as one, and what business ethics adds.",
    before: {
      q: "Are ethics, morals and values three names for the same thing?",
      choices: [
        { label: "Yes", reveal: "Not quite. Ethics are standards and codes that guide right behaviour, morals are personal beliefs about right and wrong, and values are deeply held principles about what is important." },
        { label: "No", reveal: "Right. Ethics are standards and codes, morals are personal beliefs about right and wrong, and values are deeply held principles about what is important." },
      ],
    },
    lead: "Business ethics asks what is right, not only what pays or what is legal, and balances profit with social welfare.",
    check: [
      ask("Morals are…", "Personal beliefs about right and wrong", ["Standards and codes that guide right behaviour", "Deeply held principles about what is important", "Rules that the state enforces by law"], "Morals are a person's own beliefs. Standards and codes shared by a group are ethics, and principles about what matters most are values."),
      ask("A kirana owner keeps quiet about being underbilled by ₹2,000, knowing no law will catch him. Which statement fits?", "No law may catch it, but it is still unethical", ["It is ethical because no rule is broken", "It is a matter of law, not of ethics", "It is acceptable because the sum is small"], "Law is the minimum society enforces; ethics asks what is right where the law is silent. Saying it is ethical because no rule is broken confuses ethics with law."),
      ask("A firm prints an ethics code but pays bonuses for sales volume, however it is achieved. What is the most likely result?", "Staff follow the bonus, and the code becomes paperwork", ["The printed code alone keeps staff honest", "Sales fall because staff refuse to sell", "Customer trust rises because of the code"], "A firm can print a code and still reward the staff who cut corners. A code without matching rewards does not by itself keep people honest."),
    ],
    lens: [
      { pairing: 0, adds: "A farewell instruction that turns on conduct: speak the truth, follow right conduct and do only blameless actions, then give with faith, abundance, modesty and responsibility.", differs: "The Taittirīya instruction is addressed to students leaving their teacher. It is not a code for a company." },
    ],
    reflect: "What is one value you would not give up even if it cost your organisation a sale?",
    summary: {
      points: [
        "Ethics: standards and codes that guide right behaviour. Morals: personal beliefs about right and wrong. Values: deeply held principles about what is important.",
        "Business ethics applies moral principles to business decisions, balancing profit with social welfare.",
        "It builds trust and reputation, promotes fairness and accountability, and supports long-term sustainability.",
        "Law is the minimum; what is legal is not always ethical.",
      ],
      memory: "Ethics are codes, morals are beliefs, values are what matters.",
    },
  },
  {
    blockId: "principles-of-business-ethics",
    name: "Principles of business ethics",
    intro: "Eight standards to check a decision against.",
    before: {
      q: "Does a business owe anything to people other than its owners?",
      choices: [
        { label: "No, only to owners", reveal: "The principles include stakeholder interest: employees, customers, investors and the community." },
        { label: "Yes, to its stakeholders", reveal: "Yes. One of the eight principles is stakeholder interest: employees, customers, investors and the community." },
      ],
    },
    lead: "Eight principles work as a checklist: a decision should pass all of them before you act.",
    check: [
      ask("Which principle covers ethical pricing, competition and anti-corruption?", "Fair practices", ["Impartiality", "Due diligence", "Legal compliance"], "Fair practices covers pricing, competition and corruption. Impartiality is about treating people fairly and equally, not about how a firm competes."),
      ask("A manager signs a new supplier without checking how it treats its workers. Which principle has he failed?", "Due diligence", ["Impartiality", "Accountability", "Social obligation"], "Due diligence means assessing risks and consequences before acting, and he skipped that check. Social obligation is tempting, but the failure here is the missing assessment."),
      ask("During a Diwali sale, which offer passes all eight principles?", "A plain discount open to every customer", ["A discount only for friends of the staff", "A low price agreed with the shop next door", "A low headline price with a hidden charge"], "A friends-only discount fails impartiality, a price agreed with a rival fails fair practices, and a hidden charge fails trust and honesty. An open discount fails none."),
    ],
    lens: [
      { pairing: 2, adds: "Those devoted to the welfare of all beings are said to reach the supreme.", differs: "The chapter calls the phrase an old statement of the stakeholder view. It does not list a company's groups." },
    ],
    reflect: "Which of the eight principles does your workplace follow best, and which least?",
    summary: {
      points: [
        "Impartiality, legal compliance, accountability, and trust and honesty.",
        "Fair practices (ethical pricing and competition, anti-corruption) and due diligence (assess risks and consequences).",
        "Social obligation (benefit society) and stakeholder interest (employees, customers, investors, community).",
        "A code of conduct is one firm's written rules applying the principles; the principles can conflict.",
      ],
      memory: "Eight principles, from impartiality to stakeholder interest.",
    },
  },
  {
    blockId: "ethical-issue-and-ethical-dilemma",
    name: "Ethical issue and ethical dilemma",
    intro: "A wrong to avoid, and a choice between two rights.",
    before: {
      q: "Is a choice between layoffs and going bankrupt an ethical issue or an ethical dilemma?",
      choices: [
        { label: "An ethical issue", reveal: "It is a dilemma: a choice between conflicting moral values or obligations. An ethical issue is an action that violates moral principles, such as data falsification." },
        { label: "An ethical dilemma", reveal: "Yes. A dilemma is a choice between conflicting moral values or obligations, such as layoffs against avoiding bankruptcy." },
      ],
    },
    lead: "An ethical issue is a wrong to refuse. An ethical dilemma sets two moral values against each other.",
    check: [
      ask("Insider trading is an example of…", "An ethical issue", ["An ethical dilemma", "A CSR obligation", "A virtue-ethics test"], "An ethical issue is a business action that violates moral principles. It is not a dilemma, because no moral value sits on the other side, only self-interest."),
      ask("A hospital manager must choose between keeping a patient's records private and warning the public of an infection risk. This is…", "An ethical dilemma: two moral duties conflict", ["An ethical issue: one option is plainly wrong", "A temptation: duty against self-interest", "A legal question with no ethical side"], "Confidentiality and public safety are both moral obligations, so this is a choice between two rights. A temptation sets a duty against self-interest, which is not the case here."),
      ask("An employee is offered a bonus to falsify test data. A colleague calls it a tough dilemma. Is the colleague right?", "No: one side is only self-interest, so it is an issue", ["Yes: any hard choice at work is a dilemma", "Yes: the bonus is a moral value as well", "No: it is a legal matter, not an ethical one"], "Kidder called this right versus wrong: a temptation, so an ethical issue. Feeling hard does not make a choice a dilemma; a dilemma needs moral values on both sides."),
    ],
    lens: [
      { pairing: 4, adds: "The Gītā begins with a dilemma: Arjuna's mind is confused about duty, and he asks to be taught.", differs: "The text admits that the way of action is hard to understand. It does not claim that dilemmas are easy." },
    ],
    reflect: "Think of a dilemma you faced at work. Which two values were in conflict?",
    summary: {
      points: [
        "Ethical issue: a business action that violates moral principles, such as data falsification, insider trading or labour exploitation.",
        "Ethical dilemma: a choice between conflicting moral values or obligations, such as layoffs against avoiding bankruptcy.",
        "Three checks: who is affected, which values conflict, and what is legal is not always ethical.",
        "A temptation (right versus wrong) is an issue, not a dilemma (right versus right).",
      ],
      memory: "An issue breaks a principle; a dilemma pits two values.",
    },
  },
  {
    blockId: "decision-approaches-and-theories",
    name: "Decision approaches and theories",
    intro: "Five questions to ask of one decision, and the theories behind them.",
    before: {
      q: "Does the greatest good for the greatest number settle every ethical question?",
      choices: [
        { label: "Yes", reveal: "It is one approach, the utilitarian. Others ask about rights, justice, the common good and virtue." },
        { label: "No", reveal: "Right. The utilitarian approach is one of five. Others ask about rights, justice, the common good and virtue." },
      ],
    },
    lead: "Theories judge different links in a decision: the person's character, the act's duty, or the results.",
    check: [
      ask("Which approach asks what a person of honesty, courage and compassion would do?", "Virtue ethics", ["Utilitarian", "Rights", "Justice"], "Virtue ethics looks at the decision-maker's character. The utilitarian approach looks at results, not at the person."),
      ask("A manager says: close the unit; 50 jobs go, but 950 are saved. Which approach is he using?", "Utilitarian", ["Rights", "Virtue ethics", "Justice"], "Weighing total good across everyone affected is utilitarian. A rights approach would ask instead whether the 50 workers are being wronged."),
      ask("Which pair are both teleological theories?", "Ethical egoism and utilitarianism", ["Rights theory and social contract", "Utilitarianism and rights theory", "Virtue ethics and social justice"], "Both judge by consequences: egoism counts only one's own good, utilitarianism everyone's. Rights theory and social contract are deontological."),
    ],
    lens: [
      { pairing: 3, adds: "A list of the qualities of a person oriented to the good (fearlessness, purity of heart, charity, self-control, straightforwardness, non-violence, truthfulness), paired with a list of opposing vices.", differs: "The Gītā lists qualities of a person. Virtue ethics in the chapter is one theory among several for deciding what to do." },
      { pairing: 5, adds: "A synthesis: act from duty (svadharma), stay even-minded about results, and aim at the welfare of all, from a trained character.", differs: "The Gītā does not use these categories. The chapter offers the synthesis as a reading for reflection." },
    ],
    reflect: "Take a decision you know of. How would each of the five approaches judge it?",
    summary: {
      points: [
        "Utilitarian: the greatest good for the greatest number. Rights: does it protect individual rights?",
        "Justice: is treatment fair? Common good: does it serve community welfare? Virtue ethics: what would an honest, courageous, compassionate person do?",
        "Teleological ethics judges by consequences; deontological by duty; virtue ethics by character.",
        "Meta-ethics asks what ethical terms mean; applied ethics tackles real cases.",
      ],
      memory: "Person, act, results: virtue, duty, consequences.",
    },
  },
  {
    blockId: "corporate-social-responsibility",
    name: "Corporate social responsibility",
    intro: "A firm's responsibility to the society it operates in, and India's CSR law.",
    before: {
      q: "Does CSR law apply to every company in India?",
      choices: [
        { label: "Yes", reveal: "No. It applies to a company that meets any one of three thresholds: net worth of ₹500 crore or more, turnover of ₹1,000 crore or more, or net profit of ₹5 crore or more." },
        { label: "No", reveal: "Right. It applies to a company that meets any one of three thresholds: net worth, turnover or net profit." },
      ],
    },
    lead: "CSR integrates social, environmental and economic responsibility into business, and in India the law sets who must spend and how much.",
    check: [
      ask("How much must a covered company spend on CSR?", "At least 2% of the average net profit of the preceding three years", ["At least 2% of its turnover in the latest year", "At least 5% of its net worth every year", "At least 2% of its net profit in the latest year"], "The base is the average net profit of the preceding three years. Using the latest year's profit alone is the tempting mistake."),
      ask("A company has net worth of ₹200 crore, turnover of ₹600 crore and net profit of ₹6 crore. Does CSR law apply?", "Yes, because its net profit meets the threshold", ["No, because net worth is below ₹500 crore", "No, because it must meet all three tests", "Yes, but only once turnover reaches ₹1,000 crore"], "Meeting any one threshold is enough, and ₹6 crore is above the ₹5 crore net-profit test. The law does not require all three."),
      ask("A covered company's net profits in the preceding three years were ₹8 crore, ₹10 crore and ₹12 crore. What is its minimum CSR spend?", "₹20 lakh", ["₹24 lakh", "₹16 lakh", "₹30 lakh"], "The average is (8 + 10 + 12) ÷ 3 = ₹10 crore, and 2% of that is ₹20 lakh. ₹24 lakh is 2% of the latest year only."),
    ],
    lens: [
      { pairing: 1, adds: "“He who eats alone eats only sin”: a call to share what is earned, with an eye to the welfare of the world.", differs: "The Ṛgveda and Gītā lines are about sharing food and acting for the world's welfare. India's CSR law sets thresholds and a share of profit." },
      { pairing: 6, adds: "Two tests in one line: how the money was earned, and whether some of it was given away by the earner.", differs: "CSR in India is a legal duty with thresholds and a 2% rule. The salok describes a personal discipline, freely chosen." },
    ],
    reflect: "Which cause would you want a company you work for to spend its CSR funds on, and why?",
    summary: {
      points: [
        "CSR integrates social, environmental and economic responsibility into business operations, aiming at shared value.",
        "Carroll's pyramid: economic, legal, ethical, philanthropic. CSR is more than charity.",
        "India: guidelines 2009, voluntary guidelines 2011, company law 2013, CSR spending mandatory from 1 April 2014, the first country to require it.",
        "Applies to a company with net worth of ₹500 crore or more, turnover of ₹1,000 crore or more, or net profit of ₹5 crore or more (any one).",
        "Spend at least 2% of the average net profit of the preceding three years.",
      ],
      memory: "₹500 crore net worth, ₹1,000 crore turnover or ₹5 crore profit. Spend 2%.",
    },
  },
];

export default lessons;
