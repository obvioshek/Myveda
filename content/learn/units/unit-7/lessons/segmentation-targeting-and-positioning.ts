import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "market-segmentation",
    name: "Market segmentation",
    intro: "Dividing a market into groups of buyers who want different things.",
    before: {
      q: "Is ‘people who buy often and stay loyal’ a demographic segment?",
      choices: [
        { label: "Yes", reveal: "Not quite. Usage rate and loyalty status are behavioural variables. Demographic variables are age, gender, income, education, occupation, family size and life cycle, and religion." },
        { label: "No, behavioural", reveal: "Right. Usage rate and loyalty status are behavioural variables, along with occasions, benefits sought, user status, readiness to buy and attitude." },
      ],
    },
    lead: "Segmentation divides a market into distinct groups of buyers with similar needs, characteristics or behaviour.",
    check: [
      ask("Lifestyle measured by activities, interests and opinions belongs to which basis?", "Psychographic", ["Demographic", "Behavioural", "Geographic"], "The AIO approach of Wells and Tigert (1971) measures lifestyle."),
      ask("Tailoring to a city, neighbourhood or individual is…", "Micromarketing", ["Mass marketing", "Segment marketing", "Niche marketing"], "Micromarketing tailors to local markets or to individuals."),
      ask("A segment the firm can design programmes for is called…", "Actionable", ["Substantial", "Accessible", "Measurable"], "Useful segments are measurable, substantial, accessible, differentiable and actionable."),
    ],
    lens: [
      { pairing: 0, adds: "A rule for speakers: those who know the range of words should study the assembly before they speak.", differs: "The couplet is about addressing a gathering, not dividing a market. Segmentation adds bases such as geographic, demographic, psychographic and behavioural variables, and tests of a useful segment." },
    ],
    reflect: "Choose a brand you buy. Which segment do you think it is aiming at, and on which bases (geographic, demographic, psychographic, behavioural)?",
    summary: {
      points: [
        "STP: segmentation, targeting and positioning.",
        "Levels: mass, segment, niche and micromarketing.",
        "Consumer bases: geographic, demographic, psychographic, behavioural; business markets use Bonoma and Shapiro's nested approach.",
        "Useful segments are measurable, substantial, accessible, differentiable and actionable.",
      ],
      memory: "Geographic, demographic, psychographic, behavioural.",
    },
  },
  {
    blockId: "targeting",
    name: "Targeting",
    intro: "Choosing which segments to serve.",
    before: {
      q: "Should a firm always target the biggest segment?",
      choices: [
        { label: "Yes, always", reveal: "Size and growth are only one test. A segment is also judged on its structural attractiveness and its fit with the firm's objectives and resources." },
        { label: "Not necessarily", reveal: "Right. A segment is judged on size and growth, structural attractiveness, and fit with the firm's objectives and resources." },
      ],
    },
    lead: "Targeting evaluates segments and then chooses a pattern of coverage.",
    check: [
      ask("Selling one product to several segments is…", "Product specialisation", ["Market specialisation", "Selective specialisation", "Single-segment concentration"], "Market specialisation serves many needs of one customer group."),
      ask("Serving several unrelated segments, each attractive on its own, is…", "Selective specialisation", ["Full market coverage", "Product specialisation", "Market specialisation"], "Each segment is chosen on its own merits."),
      ask("Niche marketing as a targeting strategy is also called…", "Concentrated marketing", ["Undifferentiated marketing", "Differentiated marketing", "Mass marketing"], "Undifferentiated is mass; differentiated is segmented; concentrated is niche."),
    ],
    lens: [],
    reflect: "Think of a company you know well. Which of the five patterns of target market selection does it follow?",
    summary: {
      points: [
        "Segments are evaluated on size and growth, structural attractiveness, and fit with objectives and resources.",
        "Five patterns (Abell, 1980): single-segment, selective specialisation, product specialisation, market specialisation, full coverage.",
        "Strategies run from undifferentiated through differentiated and concentrated to micromarketing.",
      ],
      memory: "Evaluate the segments, then choose a pattern of coverage.",
    },
  },
  {
    blockId: "positioning",
    name: "Positioning",
    intro: "Winning a distinct, valued place in the customer's mind.",
    before: {
      q: "Is positioning something you do to the product?",
      choices: [
        { label: "Yes", reveal: "Ries and Trout said the opposite: positioning is not what you do to a product but what you do to the prospect's mind." },
        { label: "No, to the mind", reveal: "Right. In Ries and Trout's words, positioning is what you do to the prospect's mind." },
      ],
    },
    lead: "Positioning designs the offering and image to occupy a distinct, valued place in the target market's mind.",
    check: [
      ask("Associations a brand needs just to be credible in its category are…", "Points of parity", ["Points of difference", "Value propositions", "Positioning bases"], "Points of parity remove reasons not to choose the brand."),
      ask("What do points of difference do?", "Give customers a reason to choose the brand", ["Make the brand credible in its category", "Neutralise a rival's strengths", "Set the price"], "PODs are strongly held, positive and not found to the same extent in competitors."),
      ask("The full set of benefits on which a brand is positioned is its…", "Value proposition", ["Point of parity", "Product class", "Marketing mix"], "Often summed up as more for more, more for less, and so on."),
    ],
    lens: [],
    reflect: "Pick two competing brands you know. What is one point of difference and one point of parity for each?",
    summary: {
      points: [
        "Ries and Trout: positioning is what you do to the prospect's mind.",
        "Keller's PODs give a reason to choose; POPs remove reasons not to.",
        "Brands can be positioned on attributes, benefits, use, user, competitor, product class, or price and quality.",
      ],
      memory: "Positioning lives in the customer's mind, not in the product.",
    },
  },
  {
    blockId: "differentiation-and-the-positioning-bulls-eye",
    name: "Differentiation and the brand bull's-eye",
    intro: "How an offer is made different, and how the positioning is shared.",
    before: {
      q: "Is any feature that makes a brand different a good point of difference?",
      choices: [
        { label: "Yes", reveal: "Not quite. It must pass three tests: desirable to consumers, deliverable by the company, and differentiating from competitors." },
        { label: "No", reveal: "Right. A real point of difference must be desirable, deliverable and differentiating." },
      ],
    },
    lead: "Firms differentiate on product, services, personnel, channel or image, and test each point of difference before building on it.",
    check: [
      ask("Competence, courtesy, credibility and responsiveness are bases of…", "Personnel differentiation", ["Product differentiation", "Channel differentiation", "Image differentiation"], "Service firms depend heavily on their people."),
      ask("Points of parity that consumers see as essential for any credible offer in the category are…", "Category points of parity", ["Competitive points of parity", "Points of difference", "Reasons to believe"], "They are necessary but not sufficient for choice."),
      ask("At the centre of the brand-positioning bull's-eye is…", "The brand mantra, with the key points of parity and difference", ["The brand's visual identity", "Competitors' brands", "The target consumer"], "Reasons to believe and the brand's character sit in the outer rings."),
    ],
    lens: [],
    reflect: "Pick a brand you use. What is its main point of difference, and does it pass all three tests?",
    summary: {
      points: [
        "Five bases of differentiation: product, services, personnel, channel, image.",
        "A point of difference must be desirable, deliverable and differentiating; points of parity are category or competitive.",
        "The bull's-eye: brand mantra and key POPs and PODs at the centre, then reasons to believe, then values and executional properties.",
      ],
      memory: "Differentiate on product, services, people, channel or image.",
    },
  },
];

export default lessons;
