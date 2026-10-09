import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-external-analysis-is",
    name: "What external analysis is",
    intro: "Examining the world outside the firm to find opportunities and threats.",
    before: {
      q: "Is looking at the firm's own culture and processes part of external analysis?",
      choices: [
        { label: "Yes", reveal: "No. Resources, processes and culture belong to internal analysis. External analysis asks how outside factors, such as industry trends, affect the business." },
        { label: "No", reveal: "Right. Resources, processes and culture belong to internal analysis. External analysis asks how outside factors, such as industry trends, affect the business." },
      ],
    },
    lead: "External analysis studies the industry and the wider world outside the firm to find the opportunities and threats that will drive its profits, growth and volatility.",
    check: [
      ask("What is the purpose of external analysis?", "To find the opportunities and threats outside the firm", ["To find the firm's own strengths and weaknesses", "To check that the firm's accounts are correct", "To decide each department's budget for the year"], "Opportunities and threats come from outside and drive profitability, growth and volatility. Strengths and weaknesses are the job of internal analysis, the tempting mix-up."),
      ask("A kirana owner notes a new supermarket nearby and a grocery delivery app entering the area. At which level of external analysis is she working?", "The industry level", ["The macro level", "Internal analysis", "Strategy evaluation"], "The supermarket and the app are competitors in her own industry. The macro level would be wider conditions, such as rising incomes or digital payments, which is why it is the tempting wrong answer."),
      ask("A bank's planners take note only of the outside trends that support the plan they already favour. Which limit of external analysis does this show?", "Managers notice the signals they expect and dismiss the rest", ["The analysis looks at internal factors instead of external ones", "A framework gives only a snapshot of a moving scene", "The macro level matters less than the industry level"], "Picking only the convenient signals is selective attention. A snapshot is a real limit too, but it describes how quickly the scene changes, not which signals people choose to see."),
    ],
    lens: [
      { pairing: 0, adds: "The ruler's work is to know quickly all that happens, to everyone, at all times, with agents who gather that knowledge.", differs: "The couplet makes knowing a ruler's duty. External analysis adds named elements to examine, such as supply chain, economic trends, competitors and the industry life cycle." },
    ],
    reflect: "Think of a local business near you. Which outside change in the last few years has most affected it?",
    summary: {
      points: [
        "Its purpose is to find the opportunities and threats that drive profitability, growth and volatility.",
        "Industry level: competitive structure, the firm's position, dynamics and history. Macro level: economic, global, political, social, demographic and technological conditions.",
        "Elements include supply chain, industry, economic trends, competitors, demographics, life cycle and PESTEL.",
        "External analysis finds opportunities and threats; internal analysis finds strengths and weaknesses. Strategy needs both.",
      ],
      memory: "Look outside for opportunities and threats.",
    },
  },
  {
    blockId: "pestel-analysis",
    name: "PEST and PESTEL analysis",
    intro: "Six broad factors in the setting around a business.",
    before: {
      q: "A new consumer protection law: political factor or legal factor?",
      choices: [
        { label: "Political", reveal: "Political factors concern the relationship between business and government. A law that defines what a business may or may not do, such as consumer protection, is a legal factor." },
        { label: "Legal", reveal: "Right. Legal factors are the laws that define what a business may or may not do. The two meet when government passes legislation that changes how businesses operate." },
      ],
    },
    lead: "PESTEL is a checklist of six kinds of outside change: Political, Economic, Social, Technological, Environmental and Legal.",
    check: [
      ask("Which two factors does PESTEL add to PEST?", "Environmental and legal", ["Economic and social", "Ethical and logistic", "Political and technological"], "PEST already covers political, economic, social and technological factors. Ethical and logistic sound plausible but are not part of PESTEL."),
      ask("A two-wheeler maker finds that higher interest rates are making vehicle loans dearer. Which PESTEL factor is this?", "Economic", ["Political", "Legal", "Social"], "Interest rates are an economic factor. It is tempting to call it political because governments and central banks are involved, but the factor is the cost of borrowing itself."),
      ask("A team has listed forty PESTEL items for its strategy review. What should it do next?", "Rank them by likelihood and impact, and keep the top few", ["Add more factors until nothing is missed", "Drop the environmental and legal factors", "Treat every item as an equal threat"], "PESTEL is a list, not an analysis: its value comes from ranking. Adding more items makes the long, unranked list worse."),
    ],
    lens: [
      { pairing: 1, adds: "It is wisdom to move as the world moves.", differs: "The couplet is about personal conduct. PESTEL is a structured scan of political, economic and other trends so that a firm can change with its environment." },
    ],
    reflect: "Pick a product you use daily. Which one PESTEL factor is most likely to change its price or design in the next few years?",
    summary: {
      points: [
        "PEST: political, economic, social, technological; PESTEL adds environmental and legal.",
        "Used in corporate planning and to weigh the pros and cons of a strategy.",
        "Rank the changes by likelihood and impact; the top few become the opportunities and threats in a SWOT.",
        "Political is business and government; legal is the laws that define what business may do.",
      ],
      memory: "Political, Economic, Social, Technological, Environmental, Legal.",
    },
  },
  {
    blockId: "porters-five-forces",
    name: "Porter's five forces",
    intro: "Competition comes from more than rivals: five forces set an industry's profit potential.",
    before: {
      q: "Does competition come only from a firm's direct rivals?",
      choices: [
        { label: "Only rivals", reveal: "No. Porter's point is that five forces together, entrants, suppliers, buyers, substitutes and rivalry, set an industry's profit potential." },
        { label: "Wider than that", reveal: "Right. Porter's point is that five forces together, entrants, suppliers, buyers, substitutes and rivalry, set an industry's profit potential." },
      ],
    },
    lead: "Five forces, not rivals alone, decide how much profit an industry leaves for its firms.",
    check: [
      ask("For an airline, a video call that replaces a business trip is an example of…", "The threat of substitutes", ["Rivalry among existing firms", "The threat of new entrants", "The bargaining power of buyers"], "A substitute meets the same need in a different way. Another airline on the same route would be a rival, the tempting mix-up."),
      ask("A city's cafés find that a few landlords own all the good sites and can raise rents at will. Which force is strong?", "The bargaining power of suppliers", ["The bargaining power of buyers", "The threat of substitutes", "Rivalry among existing firms"], "The landlords supply a key input, space, and they are few. Buyer power would come from customers, not from those who supply the cafés."),
      ask("The four largest firms in an industry hold 8%, 6%, 4% and 2% of the market. What is the CR4, and what does it suggest?", "20%; the market is fragmented, so rivalry is likely intense", ["20%; a few firms dominate, so rivalry is weak", "8%; only the leader's share counts", "40%; concentration is moderate"], "CR4 = 8 + 6 + 4 + 2 = 20%. Four firms hold only a fifth of the market. Reading any CR4 as domination is the tempting error: a CR4 of about 40–60% is usually read as moderate concentration, and only higher figures as a market a few firms dominate."),
    ],
    lens: [
      { pairing: 2, adds: "Weigh four strengths before acting: of the deed, of oneself, of the opponent and of the allies.", differs: "The couplet concerns a single undertaking against a foe. The five forces describe the structure of a whole industry and its profit potential." },
    ],
    reflect: "Choose an industry you buy from, such as mobile phones or airlines. Which of the five forces is strongest there?",
    summary: {
      points: [
        "Forces: new entrants, supplier power, buyer power, substitutes, rivalry (Porter, 1979).",
        "Intense forces (airlines) leave little profit; mild forces (soft drinks) leave room for higher returns.",
        "A low concentration ratio, such as a CR4 of 20%, signals intense rivalry.",
        "A substitute meets the same need in a different way; a rival sells the same product.",
        "Complementors are sometimes added as a sixth force; Porter treats them as a factor affecting the five.",
      ],
      memory: "Entrants, suppliers, buyers, substitutes, rivalry.",
    },
  },
  {
    blockId: "industry-life-cycle",
    name: "The industry life cycle",
    intro: "The stages an industry passes through, and what each means for competition.",
    before: {
      q: "In the growth stage, is the threat of new entrants low?",
      choices: [
        { label: "Low", reveal: "Not in Hill and Jones's account. Few firms have scale or brand loyalty yet, so the threat of entry is at its highest, though rapid growth keeps rivalry low." },
        { label: "High", reveal: "Right. Few firms have scale or brand loyalty yet, so the threat of entry is at its highest, though rapid growth absorbs newcomers and keeps rivalry low." },
      ],
    },
    lead: "Industries are born, grow, mature and decline, and the rules of competition change at each stage.",
    check: [
      ask("In Hill and Jones's account, in which stage is the threat of new entrants at its highest?", "Growth", ["Embryonic", "Maturity", "Shakeout"], "In growth, few firms have scale or brand loyalty yet, so entry is easiest. In maturity, the tempting answer, entry barriers have risen and the threat falls."),
      ask("Sales of a product category have stopped rising fast. Firms are cutting prices and the weaker ones are closing. Which stage is this?", "Shakeout", ["Growth", "Maturity", "Decline"], "Slowing growth, intense rivalry, price cuts and exits mark the shakeout. In decline, demand itself is falling, not just slowing."),
      ask("Your industry is in the growth stage. Which move best fits?", "Invest to build scale and brand before the shakeout", ["Cut prices hard to start a price war", "Plan an early exit from the market", "Segment the market and protect margins"], "Growth is the time to build the scale and brand that will protect the firm when growth slows. Segmenting and protecting margins is the move for maturity."),
    ],
    lens: [
      { pairing: 3, adds: "By day the crow defeats the owl: those who would win need the right time.", differs: "The couplet shares only the point about timing. It does not describe stages; the life cycle sets out embryonic, growth, shakeout, maturity and decline." },
    ],
    reflect: "Think of an industry you know, such as streaming or landline phones. Which stage of the life cycle has it reached?",
    summary: {
      points: [
        "Simple version: introduction, growth, maturity, decline; profitability usually peaks in growth and maturity.",
        "Hill and Jones: embryonic, growth, shakeout, maturity, decline.",
        "Entry threat is highest in growth, though fast growth keeps rivalry low; rivalry is intense in shakeout and decline.",
        "Growth: build scale and brand. Maturity: segment and protect margins. Decline: lead what remains or leave early.",
      ],
      memory: "Embryonic, growth, shakeout, maturity, decline.",
    },
  },
];

export default lessons;
