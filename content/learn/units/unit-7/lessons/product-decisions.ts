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
    lead: "A product comes in layers: the core benefit, the actual product that delivers it, and the augmented extras around it.",
    check: [
      ask("A warranty and after-sales service belong to which level?", "Augmented product", ["Core product", "Actual product", "Potential product"], "Extras beyond the tangible offer form the augmented product. The actual product is the thing itself: features, design, brand and box."),
      ask("Two phones have the same chip, camera and price. One maker adds a repair centre in every district town. On which level is it competing?", "The augmented product", ["The core benefit", "The actual product", "The basic product"], "A repair network is a service around the phone, so it is augmented. The actual product, the phone itself, is the same for both."),
      ask("A buyer visits four showrooms to compare sofas on price and style. For this buyer, the sofa is…", "A shopping product", ["A convenience product", "A specialty product", "An unsought product"], "Comparing on quality, price and style marks a shopping product. A specialty product is one buyers seek out for a unique brand, without much comparison."),
    ],
    lens: [],
    reflect: "Take something you own. What is its core benefit, its actual product and its augmented product?",
    summary: {
      points: [
        "Kotler and Armstrong: core, actual and augmented product.",
        "Kotler and Keller: five levels, from core benefit to potential product.",
        "Consumer products are classed by buying behaviour: convenience, shopping, specialty and unsought.",
        "When actual products look alike, firms compete on the augmented level.",
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
      ask("The total number of items across all product lines is the mix's…", "Length", ["Width", "Depth", "Consistency"], "Length counts every item in every line. Depth is the tempting wrong answer, but it counts variants of one product inside a line."),
      ask("A food company sells biscuits, noodles and sauces, and now launches a line of breakfast cereals. Which dimension does a new line add to?", "Width", ["Depth", "Consistency", "None: it is one more item"], "Width counts lines, so a new line widens the mix. Depth would grow only if the firm added sizes or flavours to a brand it already sells."),
      ask("A firm has 3 lines holding 7 brands. One brand comes in 2 flavours and 3 pack sizes. What are its average line length and that brand's depth?", "About 2.3, and 6", ["7, and 5", "3, and 6", "About 2.3, and 5"], "Average length = 7 ÷ 3 ≈ 2.3. Depth multiplies the options, 2 × 3 = 6; adding them to get 5 is the common slip."),
    ],
    lens: [],
    reflect: "Pick a company whose products you buy. How wide is its product mix, and which line is deepest?",
    summary: {
      points: [
        "Product item, product line and product mix (assortment).",
        "Width: number of lines. Length: total items. Depth: variants per product. Consistency: how related the lines are.",
        "Average line length = length ÷ width; depth multiplies sizes by flavours or formulations.",
        "A line is too short if adding items would raise profit, too long if dropping them would.",
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
    lead: "New products move through eight steps that drop weak ideas while they are cheap to drop, and buyers then adopt them in waves.",
    check: [
      ask("Which of Kotler and Armstrong's eight steps do short lists often leave out?", "Marketing strategy development", ["Test marketing", "Business analysis", "Idea screening"], "Kotler and Armstrong give eight steps; many study notes give seven and skip step 4. Test marketing is always listed, at step 7."),
      ask("A dairy shows 200 households a description and a picture of a spiced buttermilk that it has not yet made. Which step is this?", "Concept development and testing", ["Test marketing", "Product development", "Idea screening"], "Customers react to a description before the product exists, so it is a concept test. Test marketing sells the real product in a few places."),
      ask("A product will eventually have 1,000 buyers. By Rogers's shares, how many are innovators and early adopters together?", "160", ["135", "500", "25"], "Innovators 2.5% (25) plus early adopters 13.5% (135) make 16%, or 160. 135 counts early adopters alone."),
    ],
    lens: [],
    reflect: "Think of a new product you took up. Were you an innovator, early adopter, early majority, late majority or laggard?",
    summary: {
      points: [
        "Eight NPD steps: idea generation, screening, concept testing, marketing strategy, business analysis, product development, test marketing, commercialisation.",
        "Screening drops poor ideas early because costs rise later; short lists often skip marketing strategy development.",
        "Concept testing uses a description; test marketing sells the real product in a few places.",
        "Rogers (1962): innovators 2.5%, early adopters 13.5%, early and late majority 34% each, laggards 16%.",
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
      ask("At which stage is the marketing objective to maximise market share?", "Growth", ["Introduction", "Maturity", "Decline"], "Growth is the time to win share while the market expands. Maturity is tempting, but there the aim is to maximise profit while defending share."),
      ask("A snack's sales are at their peak but barely growing, and many rivals chase the same buyers. What should its maker do?", "Add flavours, match rivals' prices and stress brand differences", ["Cut advertising to the minimum and drop outlets", "Build awareness and trial among innovators", "Raise the price to skim early buyers"], "These are maturity moves. Cutting to the minimum and dropping outlets belongs to decline, which the snack has not reached."),
      ask("A brand's sales fell this year. Which finding most suggests the product is entering decline rather than losing share to a rival?", "Sales of the whole category fell too", ["A rival ran a big discount", "Only this brand's sales fell", "The brand's ads were cut this year"], "Decline is a fall in the category. If only your brand fell while the category held steady, the cause is competitive and may be fixable."),
    ],
    lens: [
      { pairing: 0, adds: "An image of great wealth gathering like a crowd at a play and leaving as that crowd disperses.", differs: "The couplet is about the impermanence of riches, not products. The PLC adds stages with set changes in product, price, distribution and promotion." },
    ],
    reflect: "Think of a product you know that is now in maturity or decline. How has its price, distribution or promotion changed?",
    summary: {
      points: [
        "Sales: low, rising fast, peak, falling; profit starts negative, peaks before sales, then declines.",
        "Objectives: awareness and trial, maximise share, maximise profit while defending share, cut spending and milk the brand.",
        "Product classes, forms and brands age at different speeds; styles cycle, fashions fade slowly, fads collapse.",
        "Stages are hard to identify, and treating a product as declining can make it decline.",
      ],
      memory: "Introduce, grow, mature, decline: change the mix at each stage.",
    },
  },
];

export default lessons;
