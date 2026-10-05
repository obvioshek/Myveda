import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "ethics-morals-and-values",
    name: "Ethics, morals and values",
    intro: "Moral principles applied to commercial decisions.",
    before: {
      q: "Are ethics, morals and values three names for the same thing?",
      choices: [
        { label: "Yes", reveal: "Not quite. Ethics are standards and codes that guide right behaviour, morals are personal beliefs about right and wrong, and values are deeply held principles about what is important." },
        { label: "No", reveal: "Right. Ethics are standards and codes, morals are personal beliefs about right and wrong, and values are deeply held principles about what is important." },
      ],
    },
    lead: "Business ethics applies moral principles to business decisions, balancing profit with social welfare.",
    check: [
      ask("Morals are…", "Personal beliefs about right and wrong", ["Standards and codes that guide right behaviour", "Deeply held principles about what is important", "Laws made by the state"], "Ethics are the standards and codes; values are the principles about what is important."),
      ask("Business ethics helps to build…", "Trust and reputation, with fairness, accountability and long-term sustainability", ["Higher prices", "A larger span of control", "Faster inflation"], "Those are the benefits the chapter names."),
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
      ],
      memory: "Ethics are codes, morals are beliefs, values are what matters.",
    },
  },
  {
    blockId: "principles-of-business-ethics",
    name: "Principles of business ethics",
    intro: "Eight principles that guide conduct.",
    before: {
      q: "Does a business owe anything to people other than its owners?",
      choices: [
        { label: "No, only to owners", reveal: "The principles include stakeholder interest: employees, customers, investors and the community." },
        { label: "Yes, to its stakeholders", reveal: "Yes. One of the eight principles is stakeholder interest: employees, customers, investors and the community." },
      ],
    },
    lead: "Eight principles guide ethical business conduct.",
    check: [
      ask("Which principle covers ethical pricing, competition and anti-corruption?", "Fair practices", ["Impartiality", "Due diligence", "Legal compliance"], "Fair practices."),
      ask("What does due diligence mean here?", "Assessing risks and consequences", ["Benefiting society", "Following the law", "Being honest"], "Due diligence is the principle of assessing risks and consequences."),
      ask("Which groups count as stakeholders?", "Employees, customers, investors and the community", ["Owners only", "The state only", "Suppliers only"], "Stakeholder interest is one of the eight principles."),
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
    lead: "An ethical issue breaks a principle. An ethical dilemma sets two values against each other.",
    check: [
      ask("Insider trading is an example of…", "An ethical issue", ["An ethical dilemma", "A CSR rule", "A virtue"], "An ethical issue is a business action that violates moral principles."),
      ask("Which reminder belongs with the three checks?", "What is legal is not always ethical", ["What is ethical is always legal", "Profit settles the question", "Only owners are affected"], "The checks are who is affected, which values conflict, and that reminder."),
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
      ],
      memory: "An issue breaks a principle; a dilemma pits two values.",
    },
  },
  {
    blockId: "decision-approaches-and-theories",
    name: "Decision approaches and theories",
    intro: "Five questions to ask of one decision.",
    before: {
      q: "Does the greatest good for the greatest number settle every ethical question?",
      choices: [
        { label: "Yes", reveal: "It is one approach, the utilitarian. Others ask about rights, justice, the common good and virtue." },
        { label: "No", reveal: "Right. The utilitarian approach is one of five. Others ask about rights, justice, the common good and virtue." },
      ],
    },
    lead: "Utilitarian, rights, justice, common good and virtue: each asks a different question.",
    check: [
      ask("Which approach asks what a person of honesty, courage and compassion would do?", "Virtue ethics", ["Utilitarian", "Rights", "Justice"], "It looks at the decision-maker's character."),
      ask("Deontological ethics judges by…", "Duty and principle, regardless of outcome", ["Consequences", "Character", "The meaning of ethical terms"], "Rights theory, social contract and social justice are examples."),
      ask("Teleological ethics judges by…", "Consequences", ["Duty", "Character", "Rights"], "Ethical egoism, utilitarianism and eudaimonism are examples."),
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
      ],
      memory: "Utilitarian, rights, justice, common good, virtue.",
    },
  },
  {
    blockId: "corporate-social-responsibility",
    name: "Corporate social responsibility",
    intro: "A firm's responsibility to the society it operates in.",
    before: {
      q: "Does CSR law apply to every company in India?",
      choices: [
        { label: "Yes", reveal: "No. It applies to a company that meets any one of three thresholds: net worth of ₹500 crore or more, turnover of ₹1,000 crore or more, or net profit of ₹5 crore or more." },
        { label: "No", reveal: "Right. It applies to a company that meets any one of three thresholds: net worth, turnover or net profit." },
      ],
    },
    lead: "CSR integrates social, environmental and economic responsibility into business operations.",
    check: [
      ask("How much must a company spend on CSR?", "At least 2% of the average net profit of the preceding three years", ["2% of turnover", "5% of net worth", "2% of last year's loss"], "That is the stated spend."),
      ask("In which year did mandatory CSR spending under the Companies Act, 2013 come into force, making India the first country to require it?", "2014", ["2009", "2011", "2016"], "Guidelines came in 2009 and voluntary guidelines in 2011; the Companies Act, 2013 made CSR spending mandatory from 1 April 2014."),
      ask("Which are CSR focus areas?", "Education, the environment and rural development", ["Advertising", "Dividends", "Mergers"], "They are among the focus areas the chapter names."),
    ],
    lens: [
      { pairing: 1, adds: "“He who eats alone eats only sin”: a call to share what is earned, with an eye to the welfare of the world.", differs: "The Ṛgveda and Gītā lines are about sharing food and acting for the world's welfare. India's CSR law sets thresholds and a share of profit." },
    ],
    reflect: "Which cause would you want a company you work for to spend its CSR funds on, and why?",
    summary: {
      points: [
        "CSR integrates social, environmental and economic responsibility into business operations.",
        "India: guidelines 2009, voluntary guidelines 2011, company law 2013, CSR spending mandatory from 2014, the first country to require it.",
        "Applies to a company with net worth of ₹500 crore or more, turnover of ₹1,000 crore or more, or net profit of ₹5 crore or more.",
        "Spend at least 2% of the average net profit of the preceding three years.",
      ],
      memory: "₹500 crore net worth, ₹1,000 crore turnover or ₹5 crore profit. Spend 2%.",
    },
  },
];

export default lessons;
