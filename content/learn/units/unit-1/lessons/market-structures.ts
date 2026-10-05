import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-a-market-is",
    name: "What a market is",
    intro: "Buyers and sellers in contact, not a place.",
    before: {
      q: "Is a market a place where goods are bought and sold?",
      choices: [
        { label: "Yes", reveal: "Not in economics. A market is the whole set of buyers and sellers of a commodity in contact with each other, wherever they are." },
        { label: "No", reveal: "Right. In economics a market is the whole set of buyers and sellers of a commodity in contact with each other, wherever they are." },
      ],
    },
    lead: "A market is the set of buyers and sellers of a commodity in contact, so that one price tends to prevail.",
    check: [
      ask("A single buyer facing many sellers is…", "Monopsony", ["Monopoly", "Oligopsony", "Duopoly"], "Oligopsony has a few buyers; monopoly is a single seller."),
      ask("In bilateral monopoly, price is settled by…", "Bargaining between the single seller and single buyer", ["Market demand and supply", "Government alone", "Marginal cost alone"], "Price is indeterminate within limits and is fixed by bargaining."),
      ask("Which does NOT determine a market's structure?", "The colour of the product's packaging", ["The number of sellers", "Conditions of entry", "Whether the product is differentiated"], "Structure depends on numbers of buyers and sellers, the product, entry and scale economies."),
    ],
    lens: [],
    reflect: "Name a market you buy in. How many sellers does it have, and could you easily start selling in it yourself?",
    summary: {
      points: [
        "A market: buyers and sellers of a commodity in contact, not a place (Cournot).",
        "Structure depends on sellers, buyers, product, entry and scale economies.",
        "Buyer side: monopsony, duopsony, oligopsony; bilateral monopoly settles price by bargaining.",
      ],
      memory: "Contact, not a place; count the sellers, and the buyers.",
    },
  },
  {
    blockId: "revenue-concepts",
    name: "Revenue: total, average and marginal",
    intro: "TR, AR, MR, and how they link to elasticity.",
    before: {
      q: "A firm must cut its price to sell one more unit. Is the extra revenue from that unit equal to its price?",
      choices: [
        { label: "Yes", reveal: "No. The price cut applies to all units sold, so marginal revenue is less than price." },
        { label: "No, it's less", reveal: "Right. The price cut applies to all units sold, so marginal revenue is less than price." },
      ],
    },
    lead: "TR = P × Q, AR = P (the demand curve), and MR is the change in TR from one more unit; MR = AR(1 − 1/e).",
    check: [
      ask("Total revenue is at its maximum where…", "MR = 0", ["MR = AR", "AR = 0", "MR = MC"], "Up to there extra units add revenue; beyond it they subtract."),
      ask("Under perfect competition…", "AR = MR = P", ["MR is below AR", "MR is negative", "AR slopes downward"], "The firm sells any quantity at the market price."),
      ask("If demand is inelastic (e < 1), marginal revenue is…", "Negative", ["Positive", "Zero", "Equal to price"], "MR = AR(1 − 1/e), and 1/e > 1 when e < 1."),
    ],
    lens: [],
    reflect: "If you sold something and had to cut the price to sell more, at what point would selling more stop paying?",
    summary: {
      points: [
        "TR = P × Q; AR = TR/Q = P; MR = ΔTR/ΔQ.",
        "The AR curve is the demand curve.",
        "Perfect competition: AR = MR = P. Otherwise MR < AR.",
        "MR = AR(1 − 1/e): positive if elastic, zero at e = 1, negative if inelastic.",
      ],
      memory: "Average is the price; marginal is less, unless the price never moves.",
    },
  },
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
      ask("Long-run profit under perfect and monopolistic competition is…", "Normal", ["Supernormal", "Unlimited", "Negative"], "Supernormal profit is possible under oligopoly and monopoly."),
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
    blockId: "perfect-competition",
    name: "Perfect competition",
    intro: "Many price takers, free entry, normal profit in the long run.",
    before: {
      q: "In the long run, can a perfectly competitive firm keep earning supernormal profit?",
      choices: [
        { label: "Yes", reveal: "No. Supernormal profit draws in new firms, supply rises and price falls until only normal profit remains." },
        { label: "No", reveal: "Right. Supernormal profit draws in new firms, supply rises and price falls until only normal profit remains." },
      ],
    },
    lead: "Under perfect competition firms are price takers; in the long run P = AR = MR = MC = minimum average cost.",
    check: [
      ask("A perfectly competitive firm's demand curve is…", "Horizontal (perfectly elastic)", ["Vertical", "Downward sloping", "Kinked"], "It can sell any quantity at the market price."),
      ask("In the short run, a firm should shut down if price falls below…", "Average variable cost", ["Average total cost", "Marginal revenue", "Normal profit"], "Below AVC it cannot even cover its variable costs."),
      ask("In Marshall's market period, supply of a perishable good such as fish is…", "Perfectly inelastic", ["Perfectly elastic", "Unitary elastic", "Kinked"], "Supply is fixed, so demand alone sets the price."),
    ],
    lens: [],
    reflect: "Which market you know comes closest to perfect competition, and which condition does it fail?",
    summary: {
      points: [
        "Conditions: many buyers and sellers, homogeneous product, free entry and exit, perfect knowledge and mobility.",
        "Pure competition (Chamberlin): the first three conditions only.",
        "Marshall's periods: market (demand sets price), short run, long run (cost matters most).",
        "Long run: P = AR = MR = MC = minimum AC; normal profit.",
      ],
      memory: "Price takers, free entry, profit competed away.",
    },
  },
  {
    blockId: "monopoly-and-monopolistic-competition",
    name: "Monopoly and monopolistic competition",
    intro: "One seller behind barriers, and many sellers with their own brands.",
    before: {
      q: "Does a monopolist ever choose to produce where demand for its product is inelastic?",
      choices: [
        { label: "Yes, often", reveal: "No. Where demand is inelastic, marginal revenue is negative, so cutting output would raise revenue and lower cost. A profit-maximising monopolist stays on the elastic part." },
        { label: "No", reveal: "Right. Where demand is inelastic, marginal revenue is negative, so a profit-maximising monopolist always produces on the elastic part of its demand curve." },
      ],
    },
    lead: "A monopolist sets MR = MC and charges what demand will bear; monopolistic competition ends in normal profit with excess capacity.",
    check: [
      ask("Who set out the theory of monopolistic competition in 1933?", "Edward Chamberlin", ["Joan Robinson", "Paul Sweezy", "Augustin Cournot"], "Joan Robinson's Economics of Imperfect Competition appeared the same year."),
      ask("In long-run equilibrium under monopolistic competition, the demand curve is…", "Tangent to the average cost curve", ["Above the average cost curve", "Horizontal", "Vertical"], "Price equals average cost, so profit is normal, with excess capacity."),
      ask("Economies of scale so large that one firm supplies most cheaply create a…", "Natural monopoly", ["Cartel", "Product group", "Duopoly"], "Railways and power grids are classic cases."),
    ],
    lens: [],
    reflect: "Choose a brand you are loyal to. How much could its price rise before you switched?",
    summary: {
      points: [
        "Monopoly: one seller, no close substitutes, barriers to entry; the firm is the industry.",
        "Equilibrium MR = MC; price from the demand curve; always on the elastic part.",
        "Monopolistic competition (Chamberlin, 1933): differentiation, free entry, selling costs, a product group.",
        "Long run: demand tangent to AC, normal profit, excess capacity.",
      ],
      memory: "Monopoly keeps its profit; brands compete theirs away.",
    },
  },
  {
    blockId: "oligopoly-and-duopoly",
    name: "Oligopoly and duopoly",
    intro: "A few interdependent sellers, and the models of their rivalry.",
    before: {
      q: "One of three cement makers cuts its price. Should it expect the others to ignore it?",
      choices: [
        { label: "Yes", reveal: "Unlikely. In an oligopoly firms are interdependent: rivals usually match a price cut to protect their share, which is why price wars rarely pay." },
        { label: "No", reveal: "Right. Rivals usually match a price cut to protect their share; that interdependence is the mark of oligopoly." },
      ],
    },
    lead: "Oligopoly is a few interdependent sellers; its models (Cournot, Bertrand, Stackelberg, kinked demand) differ in how firms expect rivals to react.",
    check: [
      ask("In the Cournot model, two firms together produce…", "Two-thirds of the competitive output", ["The competitive output", "Half the competitive output", "The monopoly output"], "Each produces one-third, so together two-thirds."),
      ask("Who proposed the kinked demand curve in 1939?", "Paul Sweezy, and separately Hall and Hitch", ["Augustin Cournot", "Joseph Bertrand", "Heinrich von Stackelberg"], "It explains why oligopoly prices stay rigid."),
      ask("A group of firms that fixes a joint price and allots output quotas is a…", "Cartel", ["Duopoly", "Product group", "Monopsony"], "OPEC is the best-known example."),
    ],
    lens: [],
    reflect: "Which industry you know behaves like an oligopoly, and how do its firms avoid price wars?",
    summary: {
      points: [
        "Few sellers, interdependence, entry barriers, advertising; pure or differentiated.",
        "Cournot: output; Bertrand: price, P = MC; Edgeworth: oscillation; Stackelberg: leader and follower.",
        "Kinked demand (Sweezy; Hall and Hitch, 1939): rigid prices.",
        "Collusion: cartels and price leadership.",
      ],
      memory: "Few sellers, each watching the others.",
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
