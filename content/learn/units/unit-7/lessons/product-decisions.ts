import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "product-levels-and-classification",
    name: "Product levels and classification",
    intro: "What buyers really buy, and how they buy it.",
    before: {
      q: "When someone buys a smartphone, what are they really seeking?",
      choices: [
        { label: "The phone itself", reveal: "The phone, its brand and box are the actual product. The core product is the basic benefit sought: staying connected." },
        { label: "Staying connected", reveal: "Right. That is the core product. The phone, brand and box are the actual product; warranty and repair network are the augmented product." },
      ],
    },
    lead: "A product is seen at several levels, from the core benefit to the augmented offer, each adding customer value.",
    check: [
      ask("A warranty and after-sales service belong to which level?", "Augmented product", ["Core product", "Actual product", "Potential product"], "Competition increasingly takes place at the augmented level."),
      ask("Furniture and clothing compared on quality, price and style are…", "Shopping products", ["Convenience products", "Specialty products", "Unsought products"], "Shopping products are compared before buying."),
      ask("Life insurance is an example of…", "An unsought product", ["A specialty product", "A convenience product", "A shopping product"], "Unsought products are not known of, or not normally thought of buying."),
    ],
    lens: [],
    reflect: "Take something you own. What is its core benefit, its actual product and its augmented product?",
    summary: {
      points: [
        "Kotler and Armstrong: core, actual and augmented product.",
        "Kotler and Keller: five levels, ending with the potential product.",
        "Consumer products: convenience, shopping, specialty and unsought.",
      ],
      memory: "Core benefit, actual product, augmented product.",
    },
  },
  {
    blockId: "product-mix-and-product-lines",
    name: "Product mix and product lines",
    intro: "Items, lines and the four dimensions of the mix.",
    before: {
      q: "Is a toothpaste sold in three sizes one product or three?",
      choices: [
        { label: "One product", reveal: "It is one product with several variants. The number of variants in a line is the depth of the mix." },
        { label: "Three items", reveal: "Right. Each size is a separate item; the number of variants is the depth of the mix." },
      ],
    },
    lead: "The product mix is all the lines and items a firm sells, measured by width, length, depth and consistency.",
    check: [
      ask("A group of closely related products sold by the same firm is a…", "Product line", ["Product mix", "Product item", "Product class"], "The product mix is the complete set of lines and items."),
      ask("The total number of items across all product lines is the mix's…", "Length", ["Width", "Depth", "Consistency"], "Width counts lines; depth counts variants."),
      ask("A toothpaste in three formulations and three sizes has a depth of…", "9", ["3", "6", "1"], "Three formulations times three sizes."),
    ],
    lens: [],
    reflect: "Pick a company whose products you buy. How wide is its product mix, and which line is deepest?",
    summary: {
      points: [
        "Product item, product line and product mix (assortment).",
        "Width: number of lines. Length: total items. Depth: variants per product. Consistency: how related the lines are.",
        "Each dimension is a way to grow the mix.",
      ],
      memory: "Width: lines. Length: items. Depth: variants. Consistency: relatedness.",
    },
  },
  {
    blockId: "new-product-development",
    name: "New product development and adoption",
    intro: "Eight steps from idea to launch, and who adopts first.",
    before: {
      q: "Should poor ideas be dropped early or late in development?",
      choices: [
        { label: "Late, once tested", reveal: "Early. Idea screening drops poor ideas early, since costs rise at each later step." },
        { label: "Early", reveal: "Right. Idea screening drops poor ideas early, since costs rise at each later step." },
      ],
    },
    lead: "New products move through eight steps from idea generation to commercialisation.",
    check: [
      ask("Estimating sales, costs and profits against the firm's objectives is…", "Business analysis", ["Concept testing", "Test marketing", "Idea screening"], "It is step 5, after marketing strategy development."),
      ask("Which step does the source sheet leave out?", "Marketing strategy development", ["Test marketing", "Business analysis", "Idea screening"], "Kotler and Armstrong give eight steps; the source sheet gives seven."),
      ask("In Rogers' adopter groups, the early majority is…", "34 per cent", ["13.5 per cent", "16 per cent", "2.5 per cent"], "Innovators 2.5, early adopters 13.5, early and late majority 34 each, laggards 16."),
    ],
    lens: [],
    reflect: "Think of a new product you took up. Were you an innovator, early adopter, early majority, late majority or laggard?",
    summary: {
      points: [
        "Eight NPD steps: idea generation, screening, concept testing, marketing strategy, business analysis, product development, test marketing, commercialisation.",
        "Screening drops poor ideas early because costs rise later.",
        "Rogers (1962): innovators, early adopters, early majority, late majority, laggards.",
      ],
      memory: "Generate, screen, test the concept, plan the strategy, analyse, develop, test-market, launch.",
    },
  },
  {
    blockId: "product-life-cycle",
    name: "The product life cycle",
    intro: "Sales and profits over a product's life, and the strategy for each stage.",
    before: {
      q: "Should a product be marketed the same way at every stage of its life?",
      choices: [
        { label: "Yes, keep it steady", reveal: "Each stage calls for a different strategy: build awareness at introduction, grow share, defend it at maturity, and cut spending in decline." },
        { label: "No, it changes", reveal: "Right. Each stage calls for a different strategy: build awareness at introduction, grow share, defend it at maturity, and cut spending in decline." },
      ],
    },
    lead: "The PLC traces sales and profits through introduction, growth, maturity and decline, and each stage needs a different mix.",
    check: [
      ask("At which stage is the marketing objective to maximise market share?", "Growth", ["Introduction", "Maturity", "Decline"], "Introduction seeks awareness and trial; maturity seeks profit while defending share."),
      ask("In the decline stage, distribution becomes…", "Selective, dropping unprofitable outlets", ["More intensive", "Intensive", "Exclusive to new dealers"], "Distribution grows more intensive through maturity, then narrows."),
      ask("Which rise and collapse quickly?", "Fads", ["Fashions", "Styles", "Mature products"], "Fashions rise and decline slowly; styles come and go in cycles."),
    ],
    lens: [
      { pairing: 0, adds: "An image of great wealth gathering like a crowd at a play and leaving as that crowd disperses.", differs: "The couplet is about the impermanence of riches, not products. The PLC adds stages with set changes in product, price, distribution and promotion." },
    ],
    reflect: "Think of a product you know that is now in maturity or decline. How has its price, distribution or promotion changed?",
    summary: {
      points: [
        "Sales: low, rising fast, peak, falling; profits move from negative or low to high, then decline.",
        "Objectives: awareness and trial, maximise share, maximise profit while defending share, cut spending and milk the brand.",
        "Styles cycle, fashions rise and fall slowly, fads rise and collapse quickly.",
      ],
      memory: "Introduce, grow, mature, decline: change the mix at each stage.",
    },
  },
];

export default lessons;
