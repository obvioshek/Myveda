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
    lead: "External analysis examines the industry and the macro environment to find the opportunities and threats that drive profitability, growth and volatility.",
    check: [
      ask("What is the purpose of external analysis?", "To find opportunities and threats", ["To find internal strengths and weaknesses", "To set staff salaries", "To audit the accounts"], "They drive profitability, growth and volatility."),
      ask("Restaurants turning to cloud kitchens in the Covid-19 lockdowns show which benefit?", "Anticipating and adapting to change", ["Lower interest rates", "Fewer competitors", "Stronger supplier power"], "External analysis helps the firm anticipate and adapt to change."),
      ask("The continuing search for external information is called…", "Environmental scanning", ["Gap analysis", "Value chain analysis", "Strategy evaluation"], "It is the first step of the strategic management process."),
    ],
    lens: [
      { pairing: 0, adds: "The ruler's work is to know quickly all that happens, to everyone, at all times, with agents who gather that knowledge.", differs: "The couplet makes knowing a ruler's duty. External analysis adds named elements to examine, such as supply chain, economic trends, competitors and the industry life cycle." },
    ],
    reflect: "Think of a local business near you. Which outside change in the last few years has most affected it?",
    summary: {
      points: [
        "Industry level: competitive structure, position, dynamics; macro level: economic, political, social, demographic, technological conditions.",
        "Elements include supply chain, industry, economic trends, competitors, demographics, life cycle and PESTEL.",
        "Strategy needs both external and internal analysis.",
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
    lead: "PESTEL scans the Political, Economic, Social, Technological, Environmental and Legal setting.",
    check: [
      ask("Tariffs and trade restrictions are which kind of factor?", "Political", ["Economic", "Social", "Legal"], "Political factors include tax policy, trade restrictions, tariffs and government stability."),
      ask("Health consciousness and age distribution are which kind of factor?", "Social", ["Economic", "Technological", "Environmental"], "Social factors include culture, population growth and attitudes to careers."),
      ask("Which two factors does PESTEL add to PEST?", "Environmental and legal", ["Economic and social", "Ethical and logistic", "Political and technological"], "PEST covers political, economic, social and technological factors."),
    ],
    lens: [
      { pairing: 1, adds: "It is wisdom to move as the world moves.", differs: "The couplet is about personal conduct. PESTEL is a structured scan of political, economic and other trends so that a firm can change with its environment." },
    ],
    reflect: "Pick a product you use daily. Which one PESTEL factor is most likely to change its price or design in the next few years?",
    summary: {
      points: [
        "PEST: political, economic, social, technological; PESTEL adds environmental and legal.",
        "Used in corporate planning and to weigh the pros and cons of a strategy.",
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
    lead: "The collective strength of five forces sets an industry's profit potential and so its attractiveness.",
    check: [
      ask("Energy drinks and coffee both meeting the need to stay alert illustrates…", "The threat of substitutes", ["The threat of new entrants", "Supplier power", "Buyer power"], "Substitutes meet the same need at a better price-performance."),
      ask("Why is supplier power very high in airlines?", "They depend on a few aircraft makers and on fuel", ["Buyers buy in bulk", "Entry barriers are low", "Products are standard"], "Suppliers are few or concentrated and inputs have no substitutes."),
      ask("How does Porter himself treat complements?", "As a factor that affects the five forces", ["As a sixth force", "As irrelevant", "As a kind of buyer"], "Andy Grove proposed complementors as a sixth force; Porter did not."),
    ],
    lens: [
      { pairing: 2, adds: "Weigh four strengths before acting: of the deed, of oneself, of the opponent and of the allies.", differs: "The couplet concerns a single undertaking against a foe. The five forces describe the structure of a whole industry and its profit potential." },
    ],
    reflect: "Choose an industry you buy from, such as mobile phones or airlines. Which of the five forces is strongest there?",
    summary: {
      points: [
        "Forces: new entrants, supplier power, buyer power, substitutes, rivalry.",
        "Intense forces (airlines) leave little profit; mild forces (soft drinks) leave room for higher returns.",
        "Complementors are sometimes added as a sixth factor; Porter treats them as affecting the five.",
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
    lead: "Industries pass through stages, and each stage changes the competitive conditions.",
    check: [
      ask("In which stage does rivalry become intense, with price cuts and weaker firms leaving?", "Shakeout", ["Embryonic", "Growth", "Maturity"], "Growth slows in the shakeout stage."),
      ask("In the embryonic stage, barriers to entry rest on…", "Access to key technological know-how", ["Scale", "Brand loyalty", "High exit barriers"], "There is little competition at this stage."),
      ask("In maturity, firms typically…", "Segment the market and avoid price wars", ["Leave in large numbers", "Face the highest entry threat", "Enjoy little competition"], "Entry barriers rise, so the threat of new entrants falls."),
    ],
    lens: [
      { pairing: 3, adds: "By day the crow defeats the owl: those who would win need the right time.", differs: "The couplet shares only the point about timing. It does not describe stages; the life cycle sets out embryonic, growth, shakeout, maturity and decline." },
    ],
    reflect: "Think of an industry you know, such as streaming or landline phones. Which stage of the life cycle has it reached?",
    summary: {
      points: [
        "Simple version: introduction, growth, maturity, decline; profitability usually peaks in growth and maturity.",
        "Hill and Jones: embryonic, growth, shakeout, maturity, decline.",
        "Entry threat is highest in growth; rivalry is intense in shakeout and decline.",
      ],
      memory: "Embryonic, growth, shakeout, maturity, decline.",
    },
  },
];

export default lessons;
