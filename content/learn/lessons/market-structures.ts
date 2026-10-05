import { ask, type Lesson } from "./types";

const lessons: Lesson[] = [
  {
    blockId: "the-four-market-structures",
    name: "The four market structures",
    intro: "Sellers, products and entry decide price and profit.",
    before: {
      q: "In which market structure is the firm a price taker?",
      choices: [
        { label: "Monopoly", reveal: "No. A monopolist is a price maker. The price taker is the firm in perfect competition, which has no control over price." },
        { label: "Perfect competition", reveal: "Yes. With very many sellers and a homogeneous product, the firm has no price control: it is a price taker." },
      ],
    },
    lead: "Markets are classified by the number of sellers, the product and the ease of entry.",
    check: [
      ask("Which structure has few sellers and difficult entry?", "Oligopoly", ["Perfect competition", "Monopoly", "Monopolistic competition"], "Examples: automobiles, airlines, steel and cement."),
      ask("Long-run profit under perfect and monopolistic competition is…", "Normal", ["Supernormal", "Always zero", "Negative"], "Supernormal profit is possible under oligopoly and monopoly."),
      ask("Wheat and rice are examples of…", "Perfect competition", ["Monopoly", "Oligopoly", "Monopolistic competition"], "Homogeneous products, very many sellers and free entry."),
    ],
    lens: [
      { pairing: 0, adds: "Merchants who combine to hold back goods and fix prices for gain, with penalties prescribed.", differs: "The Arthaśāstra chapter is about the control of traders. The chapter's oligopoly is defined by few sellers whose pricing is interdependent." },
      { pairing: 2, adds: "Enterprises such as mines placed under state superintendents, with accountability for revenue and quality.", differs: "These are public enterprises run by officers. The chapter's monopoly is a single seller with blocked entry and full control over price." },
    ],
    reflect: "Name an industry you buy from. Which structure does it look like, and why?",
    summary: {
      points: [
        "Perfect competition: very many sellers, homogeneous product, free entry, price taker.",
        "Monopolistic competition: many sellers, differentiated product, easy entry, limited price control.",
        "Oligopoly: few sellers, difficult entry, considerable price control.",
        "Monopoly: one seller, no close substitute, blocked entry, price maker.",
      ],
      memory: "Sellers, product, entry.",
    },
  },
  {
    blockId: "price-determination",
    name: "Price determination",
    intro: "One rule for output, different power over price.",
    before: {
      q: "Do firms in different market structures follow different rules for choosing output?",
      choices: [
        { label: "Yes, different rules", reveal: "No. Every profit-maximising firm in every structure sets output where marginal cost equals marginal revenue. What differs is the price it can charge." },
        { label: "No, the same rule", reveal: "Right. Every profit-maximising firm sets output where MC = MR. What differs is the price it can charge at that output." },
      ],
    },
    lead: "Every profit-maximising firm sets output where marginal cost equals marginal revenue.",
    check: [
      ask("Under perfect competition…", "P = MR, and the firm is a price taker", ["P is greater than MR", "MR has a gap", "The firm sets any price it likes"], "The firm cannot influence price."),
      ask("The kinked demand curve explains…", "Price rigidity in oligopoly", ["Monopoly profit", "Price taking", "Product differentiation"], "Rivals match a price cut but ignore a price rise, leaving a gap in the MR curve."),
      ask("A monopolist's supernormal profit can persist because…", "Entry is blocked", ["Demand is horizontal", "Price equals MR", "Costs are zero"], "Blocked entry keeps rivals out."),
    ],
    lens: [],
    reflect: "For a firm you know, which of the four structures describes how much power it has over its price?",
    summary: {
      points: [
        "Every profit-maximising firm sets output where MC = MR.",
        "Perfect competition: P = MR, price taker. Monopolistic competition: P > MR, partial control and heavy advertising.",
        "Oligopoly: interdependent firms; the kinked demand curve explains price rigidity.",
        "Monopoly: P > MR, full control over price, supernormal profit can persist.",
      ],
      memory: "MC = MR everywhere; the price differs.",
    },
  },
  {
    blockId: "price-discrimination-dumping-and-reverse-dumping",
    name: "Price discrimination, dumping and reverse dumping",
    intro: "Different prices for the same product.",
    before: {
      q: "Can a seller charge two groups different prices for the same product with no difference in cost?",
      choices: [
        { label: "Yes, with monopoly power", reveal: "Yes, under three conditions: monopoly power, markets that can be separated with resale prevented, and different elasticity across markets." },
        { label: "No, never", reveal: "It is possible under three conditions: monopoly power, separable markets with resale prevented, and different elasticity across markets." },
      ],
    },
    lead: "Price discrimination charges different prices for the same product when the difference is not due to cost.",
    check: [
      ask("Which is a condition for price discrimination?", "Markets can be separated and resale prevented", ["Perfect competition", "Identical elasticity in every market", "Zero profit"], "The others are monopoly power and different elasticity across markets."),
      ask("What is reverse dumping?", "Selling abroad at a higher price than at home", ["Selling abroad at a lower price", "Selling at cost", "Selling only at home"], "It is international price discrimination."),
      ask("Third-degree price discrimination…", "Divides buyers into market segments", ["Charges each buyer their own willingness to pay", "Prices by quantity or blocks", "Sets price equal to marginal cost"], "First degree charges each buyer their willingness to pay; second prices by quantity."),
    ],
    lens: [
      { pairing: 1, adds: "Regulated differential pricing by market, with the state setting the difference to protect the buyer.", differs: "The chapter offers this as a reading: the state, not the seller, sets the difference, to protect the buyer rather than to extract surplus." },
    ],
    reflect: "Where have you seen the same thing sold at different prices to different groups?",
    summary: {
      points: [
        "Price discrimination: different prices for the same product when the difference is not due to cost.",
        "It needs monopoly power, separable markets with resale prevented, and different elasticity across markets.",
        "Degrees: first (each buyer's willingness to pay), second (by quantity), third (market segments).",
        "Reverse dumping: selling abroad at a higher price than at home.",
      ],
      memory: "Monopoly power, separable markets, different elasticity.",
    },
  },
];

export default lessons;
