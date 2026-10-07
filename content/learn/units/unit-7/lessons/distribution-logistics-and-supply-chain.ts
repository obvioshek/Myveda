import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "distribution-channels",
    name: "Distribution channels",
    intro: "How a product travels from producer to consumer.",
    before: {
      q: "Should a premium car be sold through as many outlets as possible?",
      choices: [
        { label: "Yes, more reach", reveal: "As many outlets as possible is intensive distribution, used for convenience goods like soap. Premium cars use exclusive distribution: one or very few dealers in each area." },
        { label: "No, very few", reveal: "Right. Specialty and luxury goods use exclusive distribution, with one or very few dealers in each area." },
      ],
    },
    lead: "A distribution channel is the set of interdependent organisations that make a product available for use or consumption.",
    check: [
      ask("Producer → wholesaler → retailer → consumer is a…", "Two-level channel", ["One-level channel", "Zero-level channel", "Three-level channel"], "Each intermediary between producer and consumer adds a level."),
      ask("Appliances and furniture usually get which distribution intensity?", "Selective", ["Intensive", "Exclusive", "Zero-level"], "More than one but fewer than all willing dealers."),
      ask("Brokers and sales agents who negotiate for the producer but never take title are…", "Agents", ["Merchants", "Facilitators", "Retailers"], "Merchants take title; facilitators neither take title nor negotiate."),
    ],
    lens: [],
    reflect: "Pick a product you bought recently. How many levels did its channel have, and how intensive is its distribution?",
    summary: {
      points: [
        "Intermediaries perform information, promotion, negotiation, ordering, financing, risk-taking, physical distribution and payment.",
        "Channels are direct, indirect or hybrid, from zero-level to three-level.",
        "Intermediaries are merchants, agents or facilitators; intensity is intensive, selective or exclusive.",
      ],
      memory: "Direct or through intermediaries; intensive, selective or exclusive.",
    },
  },
  {
    blockId: "channel-systems",
    name: "Channel systems and push and pull",
    intro: "Vertical, horizontal and multichannel systems, and how producers manage intermediaries.",
    before: {
      q: "Is a horizontal marketing system a merger between two firms?",
      choices: [
        { label: "Yes", reveal: "No. It is cooperation between unrelated firms at the same level of the channel, often through a joint venture or alliance; the firms usually stay separate." },
        { label: "No", reveal: "Right. Firms at the same level cooperate, often through a joint venture or alliance, and usually stay separate." },
      ],
    },
    lead: "Channels can be unified vertically, joined horizontally, or run in parallel, and producers can push through the trade or pull through consumers.",
    check: [
      ask("A channel unified because one member owns the others is a…", "Corporate VMS", ["Contractual VMS", "Administered VMS", "Horizontal marketing system"], "A contractual VMS joins independent firms by contract; an administered one relies on a powerful member."),
      ask("Soft-drink bottlers licensed to bottle and distribute are an example of…", "A manufacturer-sponsored wholesaler franchise", ["A service-firm-sponsored retailer franchise", "A retailer cooperative", "A corporate VMS"], "There are three kinds of franchise."),
      ask("A pull strategy suits markets where…", "Brand loyalty is high and the brand is chosen before the store visit", ["The product is an impulse item", "Brand loyalty is low", "The brand is chosen in the store"], "Push suits low loyalty and in-store choice."),
    ],
    lens: [],
    reflect: "Think of a product you buy. Does its maker mainly push it through shops or pull you towards it? What tells you?",
    summary: {
      points: [
        "VMS: corporate, contractual (voluntary chains, retailer cooperatives, franchises) and administered.",
        "Horizontal systems join firms at the same level; multichannel marketing uses several channels at once.",
        "Push through the trade, or pull through consumers; reverse-flow and service channels matter too.",
      ],
      memory: "Conventional, vertical, horizontal, multichannel; push or pull.",
    },
  },
  {
    blockId: "market-logistics",
    name: "Market logistics",
    intro: "Moving goods and information from origin to use, at a profit.",
    before: {
      q: "Can a logistics system give the best service at the lowest cost?",
      choices: [
        { label: "Yes, if well run", reveal: "No system can both maximise service and minimise cost. Higher service needs more inventory and faster transport, which cost more." },
        { label: "No, it trades off", reveal: "Right. Higher service needs more inventory and faster transport; less inventory risks stockouts; rail is cheaper than air but slower." },
      ],
    },
    lead: "Market logistics plans and controls the physical flow of goods and information to meet customer requirements at a profit.",
    check: [
      ask("Returns, recalls, repairs and recycling flowing back through the chain are…", "Reverse logistics", ["Inbound logistics", "Outbound logistics", "Order processing"], "Its aim is to recover value and build trust."),
      ask("‘When to reorder and how much?’ is the key question of which decision?", "Inventory", ["Warehousing", "Transportation", "Order processing"], "The reorder point and the order quantity."),
      ask("Who called distribution ‘the economy's dark continent’?", "Peter Drucker", ["Philip Kotler", "Theodore Levitt", "Michael Hugos"], "Drucker (1962), for the savings it hid."),
    ],
    lens: [
      { pairing: 0, adds: "The Arthaśāstra's storehouse rule: keep half the stock in reserve against calamities, use the other half, and replace old stock with new.", differs: "The rule is for a state storehouse guarding the people against calamity. Market logistics adds reorder points, order quantities and the trade-off between service and cost for a firm's customers." },
    ],
    reflect: "Think of a time a shop was out of stock of something you wanted. Which logistics decision do you think failed?",
    summary: {
      points: [
        "Also called physical distribution; it has grown into supply chain management.",
        "Inbound, outbound and reverse logistics.",
        "Decisions: order processing, warehousing, inventory, transportation, with trade-offs throughout.",
        "Kotler and Keller's four planning steps and an integrated logistics system.",
      ],
      memory: "Right goods, right place, right time, lowest cost: trade-offs throughout.",
    },
  },
  {
    blockId: "logistics-decisions",
    name: "The four logistics decisions",
    intro: "Order processing, warehousing, inventory and transportation.",
    before: {
      q: "Should a firm aim to keep enough stock to fill every order at once?",
      choices: [
        { label: "Yes", reveal: "Not usually. Inventory cost rises at an accelerating rate as the service level approaches 100 per cent." },
        { label: "Not usually", reveal: "Right. Inventory cost rises faster and faster as the service level nears 100 per cent." },
      ],
    },
    lead: "Logistics rests on four decisions: how to handle orders, where to store, how much to hold, and how to ship.",
    check: [
      ask("The stock level at which a new order is placed is the…", "Order (reorder) point", ["Order quantity", "Carrying cost", "Service level"], "It balances stockout risk against overstock cost."),
      ask("Warehouses that move goods out as soon as possible are…", "Distribution warehouses", ["Storage warehouses", "Public warehouses", "Private warehouses"], "Storage warehouses hold goods for moderate to long periods."),
      ask("For the lowest transport cost, shippers usually choose…", "Water or pipeline", ["Air", "Road", "Rail and air together"], "Air, rail and road lead for speed."),
      ask("A transport firm serving set routes on a schedule, open to all shippers, is a…", "Common carrier", ["Contract carrier", "Private carrier", "Freight forwarder"], "A contract carrier sells transport to others on contract."),
    ],
    lens: [],
    reflect: "Think of an online order you placed. Which of the four decisions most shaped how fast and in what condition it arrived?",
    summary: {
      points: [
        "Order processing aims to shorten the order-to-payment cycle.",
        "Warehousing trades delivery speed against cost; postponement matches offers to demand.",
        "Inventory balances order-processing and carrying costs; transport weighs speed, dependability and cost across modes and carriers.",
      ],
      memory: "Order processing, warehousing, inventory, transportation.",
    },
  },
  {
    blockId: "supply-chain-management",
    name: "Supply chain management",
    intro: "The whole chain, from procurement to distribution.",
    before: {
      q: "Is logistics the same as supply chain management?",
      choices: [
        { label: "Yes", reveal: "Logistics is a part of SCM. It covers movement and storage mainly within one organisation; SCM covers the whole chain across many organisations." },
        { label: "No, it is a part", reveal: "Right. Logistics is a part of SCM, mainly within one organisation; SCM coordinates the whole chain across many organisations." },
      ],
    },
    lead: "SCM manages the whole chain from procurement through manufacturing to distribution, for an efficient, responsive chain.",
    check: [
      ask("Which is not one of the SCOR model's five core processes?", "Promote", ["Source", "Return", "Deliver"], "SCOR names plan, source, make, deliver and return."),
      ask("For responsiveness, Hugos' location driver favours…", "Many facilities close to customers", ["Few central facilities", "Specialised plants", "Fewer, larger shipments"], "Few central facilities serving wide areas favour efficiency."),
      ask("Consolidating shipments and recyclable packaging are part of…", "A green supply chain", ["Reverse logistics", "Administered systems", "The affordable method"], "Green practices also include route optimisation and cutting the carbon footprint."),
    ],
    lens: [
      { pairing: 1, adds: "Kauṭilya weighing trade routes: water routes are cheaper, land routes less liable to obstruction and danger, and the southern land route yields goods in quantity.", differs: "Kauṭilya compares routes for a state's trade. SCM adds the SCOR processes and Hugos' drivers balancing responsiveness against efficiency." },
      { pairing: 2, adds: "Interdependence stated as a fact of life, not a strategy chosen for advantage.", differs: "The sūtra describes how all beings are bound together. SCM coordinates firms by contract, information and shared targets." },
    ],
    reflect: "Think of an online seller you use. Does its supply chain seem built more for responsiveness or for efficiency? What tells you?",
    summary: {
      points: [
        "Logistics is part of SCM; SCM coordinates across many organisations for competitive advantage.",
        "SCOR: plan, source, make, deliver, return.",
        "Hugos' drivers (production, inventory, location, transportation, information) can be set for responsiveness or efficiency.",
      ],
      memory: "Plan, source, make, deliver, return; responsive or efficient.",
    },
  },
];

export default lessons;
