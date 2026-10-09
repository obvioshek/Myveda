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
    lead: "A market is all the buyers and sellers of one good in contact with each other, so that one price tends to prevail.",
    check: [
      ask("In economics, a market is…", "All the buyers and sellers of a good in contact, wherever they are", ["A place where goods are bought and sold every day", "All the shops that sell one good in one town", "The sellers of a good who meet in one region"], "Cournot's definition is about contact, so prices tend to equality. A mandi or a shop is a marketplace, only one part of the market."),
      ask("Sugarcane growers in a district can sell only to three local sugar mills. On the buyers' side, this market is…", "An oligopsony", ["An oligopoly", "A monopsony", "A duopsony"], "A few buyers make an oligopsony. Oligopoly is the tempting slip: it means a few sellers, and here the growers are many."),
      ask("Onions sell for ₹20 a kg in one mandi and ₹26 in a nearby one. Moving them costs ₹2 a kg. If traders are free to move onions, the price gap will shrink to about…", "₹2 a kg", ["₹0", "₹6 a kg", "₹4 a kg"], "Traders buy in the cheap mandi and sell in the dear one until moving onions no longer pays, which is when the gap equals the ₹2 transport cost. It cannot reach ₹0 while moving them costs something."),
    ],
    lens: [],
    reflect: "Name a market you buy in. How many sellers does it have, and could you easily start selling in it yourself?",
    summary: {
      points: [
        "A market: buyers and sellers of a commodity in contact, not a place (Cournot, quoted by Marshall).",
        "It needs buyers and sellers, a commodity, contact, knowledge of conditions, and tends to one price.",
        "Structure depends on the number and size of sellers and buyers, the product, entry and exit, and economies of scale.",
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
    lead: "AR is the price and the demand curve; MR, the revenue from one more unit, falls below it whenever price must fall to sell more.",
    check: [
      ask("Under perfect competition, the firm's AR and MR are…", "Equal to each other and to price", ["Both falling, with MR falling faster", "Different, with AR above MR", "Different, with MR above AR"], "The firm sells any quantity at the market price, so each extra unit adds exactly the price. MR falls below AR only when the price must be cut to sell more."),
      ask("A sweet shop sells 100 boxes a day at ₹500. To sell 110 it must charge ₹480 for every box. What do the extra 10 boxes add to revenue?", "₹2,800", ["₹4,800", "₹5,000", "₹2,000"], "Revenue goes from ₹50,000 to ₹52,800. ₹4,800 counts the new boxes at ₹480 but forgets the ₹20 lost on each of the first 100, which is ₹2,000."),
      ask("A firm's price is ₹100 and the price elasticity of demand is 2. What is its marginal revenue?", "₹50", ["₹200", "−₹50", "₹100"], "MR = AR × (1 − 1/e) = 100 × (1 − ½) = ₹50. ₹100 would hold only if MR equalled price, as under perfect competition."),
    ],
    lens: [],
    reflect: "If you sold something and had to cut the price to sell more, at what point would selling more stop paying?",
    summary: {
      points: [
        "TR = P × Q; AR = TR ÷ Q = P; MR = ΔTR ÷ ΔQ. The AR curve is the demand curve.",
        "Perfect competition: AR = MR = P. Otherwise MR is below AR; for a straight-line AR, MR is twice as steep.",
        "TR is at its maximum where MR = 0; MR can be negative.",
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
    lead: "Markets are classified by the number of sellers, the product and the ease of entry; fewer sellers mean more power over price.",
    check: [
      ask("Few sellers, difficult entry and considerable control over price describe…", "Oligopoly", ["Perfect competition", "Monopoly", "Monopolistic competition"], "Oligopoly has a few sellers, such as cement or steel makers. Monopoly is the tempting slip, but it has one seller and entry is blocked, not just difficult."),
      ask("A town has 40 restaurants, each with its own menu and name, and new ones open easily. Which structure is this?", "Monopolistic competition", ["Perfect competition", "Oligopoly", "Monopoly"], "Many sellers with differentiated products and easy entry make monopolistic competition. Perfect competition would need every restaurant to sell an identical product."),
      ask("A store owner could earn ₹6 lakh a year by working elsewhere and lending out her savings. Her store makes ₹9 lakh. Her supernormal profit is…", "₹3 lakh", ["₹9 lakh", "₹6 lakh", "₹15 lakh"], "Normal profit is the ₹6 lakh she needs to stay; anything above it is supernormal, so ₹9 lakh − ₹6 lakh = ₹3 lakh. ₹9 lakh is her total profit, not the part above normal."),
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
        "Normal profit keeps a firm in the industry; supernormal profit is anything above it, and free entry competes it away.",
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
    lead: "Under perfect competition firms are price takers; in the long run entry and exit leave P = AR = MR = MC = minimum average cost.",
    check: [
      ask("In long-run equilibrium under perfect competition…", "P = AR = MR = MC = minimum average cost", ["P = MC, but price stays above minimum average cost", "P is above MC, and supernormal profit persists", "P equals average variable cost, below average cost"], "Entry and exit remove any profit or loss, so price ends at the lowest point of average cost. A price above minimum AC would still draw new firms in."),
      ask("Fish landed each morning must be sold the same day. In Marshall's market period, its price is set by…", "Demand alone, since supply is fixed", ["The cost of catching the fish", "Demand and supply in equal measure", "The sellers' reserve price"], "Supply of a perishable good is fixed in the market period, so demand decides the price. A reserve price applies to durable goods, which sellers can hold back."),
      ask("A rice mill's average variable cost is ₹2,500 a quintal and its average total cost ₹3,200. The market price is ₹3,000. In the short run it should…", "Keep running: it covers variable cost and part of fixed cost", ["Shut down, since price is below average total cost", "Raise its price to ₹3,200 to cover its cost", "Shut down, since it earns no normal profit"], "Price is above AVC, so each quintal pays its variable cost plus ₹500 toward fixed cost. Closing would leave the whole fixed cost unpaid. A price taker cannot raise its price."),
    ],
    lens: [],
    reflect: "Which market you know comes closest to perfect competition, and which condition does it fail?",
    summary: {
      points: [
        "Conditions: many buyers and sellers, homogeneous product, free entry and exit, perfect knowledge and mobility, no transport costs.",
        "Pure competition (Chamberlin): the first three conditions only.",
        "Marshall's periods: market (demand sets price), short run (demand and supply), long run (mainly cost).",
        "Short run: shut down if price falls below average variable cost.",
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
    lead: "A monopolist sets MR = MC and reads its price off demand; monopolistic competition ends in normal profit with excess capacity.",
    check: [
      ask("Who set out the theory of monopolistic competition in 1933?", "Edward Chamberlin", ["Joan Robinson", "Paul Sweezy", "Augustin Cournot"], "Chamberlin's The Theory of Monopolistic Competition appeared in 1933. Joan Robinson is the tempting choice: her The Economics of Imperfect Competition also appeared in 1933, but it used the term imperfect competition."),
      ask("New chai stalls keep opening near a college while existing ones earn well. In the long run, each stall…", "Earns normal profit and has excess capacity", ["Earns supernormal profit, protected by its brand", "Produces at the lowest point of average cost", "Faces a horizontal demand curve"], "Entry shifts each stall's demand left until it just touches average cost on its falling part. A brand gives only limited power, so it cannot protect supernormal profit when entry is free."),
      ask("A monopolist faces demand P = 120 − Q (Q in thousands) and a flat marginal cost of ₹40. What price does it charge?", "₹80", ["₹40", "₹60", "₹120"], "MR = 120 − 2Q = 40 gives Q = 40, and demand then gives P = 120 − 40 = ₹80. ₹40 is the competitive price, where P = MC."),
    ],
    lens: [],
    reflect: "Choose a brand you are loyal to. How much could its price rise before you switched?",
    summary: {
      points: [
        "Monopoly: one seller, no close substitutes, barriers to entry (patents, key inputs, natural monopoly); the firm is the industry.",
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
    lead: "Oligopoly is a few interdependent sellers; its models differ in what each firm assumes about its rivals' reactions.",
    check: [
      ask("The feature that sets oligopoly apart from the other market structures is…", "Interdependence: each firm's moves affect its rivals", ["A differentiated product sold by many firms", "A single seller protected by barriers", "A horizontal demand curve for each firm"], "With only a few sellers, each must allow for its rivals' reactions. A differentiated product is not enough: monopolistic competition has that too, but with so many sellers each can ignore the rest."),
      ask("Steel makers raise their prices whenever one well-informed firm, not the largest, does. This is…", "Barometric price leadership", ["Dominant-firm price leadership", "A cartel with output quotas", "Low-cost price leadership"], "Others follow because they trust the firm to read market conditions well. It is not dominant-firm leadership, since the leader is not the largest firm."),
      ask("Two firms face market demand P = 140 − Q, and each unit costs both of them ₹20. In the Cournot model, their total output is…", "80", ["120", "60", "90"], "The competitive output is 120 (where P = ₹20); Cournot firms produce two-thirds of it, 40 each. 90 is the Stackelberg total, 60 the cartel output and 120 the Bertrand result."),
    ],
    lens: [],
    reflect: "Which industry you know behaves like an oligopoly, and how do its firms avoid price wars?",
    summary: {
      points: [
        "Few sellers, interdependence, entry barriers, advertising; pure or differentiated; a duopoly has two sellers.",
        "Cournot: output, two-thirds of competitive output; Bertrand: price, P = MC; Edgeworth: oscillation; Stackelberg: leader and follower.",
        "Kinked demand (Sweezy; Hall and Hitch, 1939): rigid prices.",
        "Collusion: cartels with quotas, and price leadership by a low-cost, dominant or barometric firm.",
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
    lead: "Every profit-maximising firm sets output where MR = MC; how far price sits above MC depends on the structure.",
    check: [
      ask("Every profit-maximising firm, in every market structure, sets output where…", "Marginal revenue equals marginal cost", ["Price equals marginal cost", "Marginal revenue equals zero", "Price equals minimum average cost"], "MR = MC is the general rule. P = MC holds only under perfect competition, where price and MR are the same; MR = 0 maximises revenue, not profit."),
      ask("An oligopolist's marginal cost rises a little but still passes through the gap in its MR curve. Its price…", "Stays the same", ["Rises by the same amount", "Falls, to win market share", "Rises by half the cost increase"], "Within the gap, MR = MC still holds at the same output, so price and output do not change. A firm on an ordinary demand curve would pass some of the rise on, but the kink removes that."),
      ask("A firm has MR = 120 − 2Q and a marginal cost of ₹40. At Q = 30 thousand, it should…", "Produce more: MR is ₹60, above MC", ["Produce less: MR is ₹60, above MC", "Stay where it is: profit is at its peak", "Produce less: MR is ₹20, below MC"], "MR = 120 − 60 = ₹60, so each extra unit adds ₹60 of revenue for ₹40 of cost. Profit peaks only at Q = 40, where MR = ₹40. MR is ₹20 at Q = 50, not 30."),
    ],
    lens: [],
    reflect: "For a firm you know, which of the four structures describes how much power it has over its price?",
    summary: {
      points: [
        "Every profit-maximising firm sets output where MC = MR, with MC cutting MR from below.",
        "Perfect competition: P = MR = MC, price taker. Monopolistic competition: P > MR, partial control and heavy advertising.",
        "Oligopoly: interdependent firms; the kinked demand curve and its MR gap explain price rigidity.",
        "Monopoly: P > MR, the most control over price, supernormal profit can persist.",
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
    lead: "Price discrimination charges different prices for the same product when the difference is not due to cost; the higher price goes where demand is less elastic.",
    check: [
      ask("Selling a good abroad at a higher price than at home is…", "Reverse dumping", ["Dumping", "First-degree price discrimination", "Second-degree price discrimination"], "Reverse dumping is international price discrimination with the higher price abroad. Dumping is the opposite: a lower price abroad than at home, or below cost."),
      ask("An electricity company charges households, shops and factories different rates for the same unit of power. This is…", "Third-degree price discrimination", ["First-degree price discrimination", "Second-degree price discrimination", "Dumping"], "Buyers are divided into segments, each with its own price. Second-degree is the tempting choice, but it varies price with the quantity bought, not with the type of buyer."),
      ask("Marginal cost is ₹100. In market A demand elasticity is 5; in market B it is 1.25. What prices maximise profit?", "A ₹125, B ₹500", ["A ₹500, B ₹125", "₹100 in both markets", "A ₹80, B ₹20"], "Set MR = P(1 − 1/e) = ₹100 in each: P × 0.8 = 100 gives ₹125, and P × 0.2 = 100 gives ₹500. The higher price goes to the less elastic market, B. ₹80 and ₹20 multiply instead of divide."),
    ],
    lens: [
      { pairing: 1, adds: "Regulated differential pricing by market, with the state setting the difference to protect the buyer.", differs: "The chapter offers this as a reading: the state, not the seller, sets the difference, to protect the buyer rather than to extract surplus." },
    ],
    reflect: "Where have you seen the same thing sold at different prices to different groups?",
    summary: {
      points: [
        "Price discrimination: different prices for the same product when the difference is not due to cost (Joan Robinson).",
        "It needs monopoly power, separable markets with resale prevented, and different elasticity across markets.",
        "Degrees (Pigou, 1920): first (each buyer's willingness to pay), second (by quantity), third (market segments).",
        "Third degree: MR equal in every market and to MC; higher price where demand is less elastic.",
        "Dumping: lower price abroad than at home, or below cost. Reverse dumping: higher price abroad.",
      ],
      memory: "Monopoly power, separable markets, different elasticity.",
    },
  },
];

export default lessons;
