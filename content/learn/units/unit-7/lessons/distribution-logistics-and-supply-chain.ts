import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "distribution-channels",
    name: "Distribution channels",
    intro: "How a product travels from producer to consumer, and who helps it along.",
    before: {
      q: "Should a premium car be sold through as many outlets as possible?",
      choices: [
        { label: "Yes, more reach", reveal: "As many outlets as possible is intensive distribution, used for convenience goods like soap. Premium cars use exclusive distribution: one or very few dealers in each area." },
        { label: "No, very few", reveal: "Right. Specialty and luxury goods use exclusive distribution, with one or very few dealers in each area." },
      ],
    },
    lead: "A distribution channel is the line of businesses a product passes through from maker to buyer; its length is its level, its breadth is its intensity.",
    check: [
      ask("Brokers and sales agents who negotiate for the producer but never take title to the goods are…", "Agents", ["Merchants", "Facilitators", "Retailers"], "Agents find customers and may negotiate, but do not own the goods. Merchants, such as wholesalers, buy and take title; facilitators, such as transport firms, neither take title nor negotiate."),
      ask("A biscuit maker sells to a wholesaler, who sells to kirana stores, who sell to shoppers. The channel is…", "Two-level, and its distribution is intensive", ["One-level, and its distribution is intensive", "Two-level, and its distribution is selective", "Three-level, and its distribution is intensive"], "Two intermediaries (wholesaler and retailer) make a two-level channel. Biscuits are convenience goods, sold in as many outlets as possible. One-level would mean the maker sold straight to the stores."),
      ask("Five biscuit makers each deal directly with 100 kirana stores. How many contacts does one shared distributor save?", "395, since 500 contacts fall to 105", ["400, since 500 contacts fall to 100", "95, since 105 contacts fall to 10", "495, since 500 contacts fall to 5"], "Direct: 5 × 100 = 500 contacts. Through a distributor: 5 + 100 = 105. The saving is 500 − 105 = 395. Forgetting the makers' own 5 contacts with the distributor gives 400."),
    ],
    lens: [],
    reflect: "Pick a product you bought recently. How many levels did its channel have, and how intensive is its distribution?",
    summary: {
      points: [
        "A channel transfers ownership from production to consumption; it is part of a wider value network.",
        "Intermediaries are merchants (take title), agents (negotiate, no title) or facilitators (neither).",
        "Channels are direct, indirect or hybrid, and run from zero-level to three-level.",
        "Intensity is intensive, selective or exclusive. Levels measure length; intensity measures breadth.",
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
    lead: "A vertical marketing system makes producer, wholesaler and retailer act as one; producers then push through the trade or pull through consumers.",
    check: [
      ask("Soft-drink bottlers licensed to bottle and distribute are an example of…", "A manufacturer-sponsored wholesaler franchise", ["A service-firm-sponsored retailer franchise", "A manufacturer-sponsored retailer franchise", "A corporate vertical marketing system"], "The bottler is a wholesaler licensed by the maker. Car dealers are the manufacturer-sponsored retailer kind, and fast-food chains the service-firm kind."),
      ask("A large consumer-goods maker sets display and stocking terms for thousands of kirana stores it does not own. This is…", "An administered VMS", ["A corporate VMS", "A contractual VMS", "A horizontal marketing system"], "The maker coordinates the stores through its size and power, not ownership or contract. A corporate VMS would need it to own the stores."),
      ask("A new snack brand is chosen at the counter by shoppers with little brand loyalty. Which strategy fits best?", "Push, with trade margins and display money for retailers", ["Pull, with heavy advertising to consumers", "Exclusive distribution through one dealer", "A horizontal alliance with a rival snack maker"], "Low loyalty and in-store choice suit push: the retailer's shelf decides the sale. Pull suits brands chosen before the store visit, such as phones."),
    ],
    lens: [],
    reflect: "Think of a product you buy. Does its maker mainly push it through shops or pull you towards it? What tells you?",
    summary: {
      points: [
        "Conventional channels breed conflict; a VMS unifies them by ownership (corporate), contract (contractual) or power (administered).",
        "Franchises: manufacturer-sponsored retailer, manufacturer-sponsored wholesaler, service-firm-sponsored retailer.",
        "Horizontal systems join firms at the same level without merging; multichannel marketing uses several channels at once.",
        "Push through the trade, or pull through consumers; reverse-flow and service channels matter too.",
      ],
      memory: "Owned, contracted or led; push through the trade, pull through the buyer.",
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
    lead: "Market logistics gets the right goods to the right place at the right time, at a cost that still leaves a profit.",
    check: [
      ask("Who called distribution ‘the economy's dark continent’?", "Peter Drucker", ["Philip Kotler", "Theodore Levitt", "Michael Hugos"], "Drucker used the phrase in 1962 for the savings distribution hid. Kotler and Keller are the source of the 30 to 40 per cent cost estimate, not the phrase."),
      ask("A phone maker collects faulty handsets from customers for repair and recycling. This is…", "Reverse logistics", ["Inbound logistics", "Outbound logistics", "Order processing"], "Goods flowing back from users through the chain is reverse logistics. It is often handled with inbound, but inbound proper brings inputs in from suppliers."),
      ask("A firm switches from air to rail freight and saves on transport. Why might it still be worse off?", "Slower delivery ties up working capital and delays payment", ["Rail is always less reliable than air", "Transport costs never affect total cost", "Lower freight costs reduce sales by law"], "Logistics costs interact, so decisions are judged on a total-system basis. A cheaper mode can raise inventory and capital costs elsewhere. Rail is not always less reliable; the cost shift is the point."),
    ],
    lens: [
      { pairing: 0, adds: "The Arthaśāstra's storehouse rule: keep half the stock in reserve against calamities, use the other half, and replace old stock with new.", differs: "The rule is for a state storehouse guarding the people against calamity. Market logistics adds reorder points, order quantities and the trade-off between service and cost for a firm's customers." },
    ],
    reflect: "Think of a time a shop was out of stock of something you wanted. Which logistics decision do you think failed?",
    summary: {
      points: [
        "Also called physical distribution; it starts at the factory, and has grown into supply chain management.",
        "Inbound brings inputs in, outbound sends finished goods out, reverse brings goods back.",
        "No system both maximises service and minimises cost, so decide on a total-system basis, for profit.",
        "Kotler and Keller's four steps: value proposition, network, operational excellence, implementation.",
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
    lead: "Logistics rests on four decisions: how to handle orders, where to store, how much to hold and when to reorder, and how to ship.",
    check: [
      ask("Warehouses that move goods out as soon as possible are…", "Distribution warehouses", ["Storage warehouses", "Public warehouses", "Private warehouses"], "Distribution warehouses are built for fast flow. Storage warehouses hold goods for moderate to long periods. Public and private describe ownership, not speed."),
      ask("A distributor sells 40 fans a day. Its supplier takes 5 days to deliver, and it keeps 100 fans as safety stock. When should it reorder?", "When stock falls to 300 fans", ["When stock falls to 200 fans", "When stock falls to 100 fans", "When stock falls to 1,000 fans"], "Reorder point = daily demand × lead time + safety stock = 40 × 5 + 100 = 300. Leaving out the safety stock gives 200, which would use up the buffer on every order."),
      ask("Annual demand is 12,000 fans, each order costs ₹500, and holding one fan for a year costs ₹12. What is the EOQ?", "1,000 fans", ["500 fans", "10,000 fans", "12,000 fans"], "EOQ = √(2 × 12,000 × 500 ÷ 12) = √10,00,000 = 1,000. 500 is the average stock at that order size, not the order itself."),
    ],
    lens: [],
    reflect: "Think of an online order you placed. Which of the four decisions most shaped how fast and in what condition it arrived?",
    summary: {
      points: [
        "Order processing aims to shorten the order-to-payment cycle.",
        "Warehousing trades delivery speed against cost; storage warehouses hold, distribution warehouses move goods out.",
        "Inventory: the reorder point says when, the order quantity says how many; EOQ balances ordering and carrying costs.",
        "Transport weighs speed, dependability and cost across modes and private, contract or common carriers.",
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
    lead: "Supply chain management runs every firm and step from raw material to buyer as one chain, set for responsiveness or efficiency.",
    check: [
      ask("Which is not one of the SCOR model's five core processes?", "Promote", ["Source", "Return", "Deliver"], "SCOR names plan, source, make, deliver and return. Return is easy to forget, but it covers taking back defective or unwanted goods; promotion is a marketing task, not a supply chain process."),
      ask("An auto-parts plant in Pune takes back defective parts from a car maker's assembly line. Which SCOR process is this?", "Return", ["Deliver", "Source", "Make"], "Taking goods back is the return process. Deliver sends parts to the assembly line; return brings them back."),
      ask("A fashion retailer faces fast-changing demand. Which inventory and location settings suit it?", "High stock of a wide range, in many facilities near customers", ["Low stock of a narrow range, in few central facilities", "Low stock of a wide range, in few central facilities", "High stock of a narrow range, in specialised plants"], "Fast-changing demand calls for responsiveness: in Hugos' drivers, high stock of a wide range and facilities close to customers. Low stock in central facilities is the efficiency setting, which suits a cement maker."),
    ],
    lens: [
      { pairing: 1, adds: "Kauṭilya weighing trade routes: water routes are cheaper, land routes less liable to obstruction and danger, and the southern land route yields goods in quantity.", differs: "Kauṭilya compares routes for a state's trade. SCM adds the SCOR processes and Hugos' drivers balancing responsiveness against efficiency." },
      { pairing: 2, adds: "Interdependence stated as a fact of life, not a strategy chosen for advantage.", differs: "The sūtra describes how all beings are bound together. SCM coordinates firms by contract, information and shared targets." },
    ],
    reflect: "Think of an online seller you use. Does its supply chain seem built more for responsiveness or for efficiency? What tells you?",
    summary: {
      points: [
        "Logistics is part of SCM; SCM coordinates many organisations for competitive advantage.",
        "SCOR: plan, source, make, deliver, return.",
        "Hugos' drivers (production, inventory, location, transportation, information) are set for responsiveness or efficiency.",
        "Tight coordination brings dependence: one supplier's failure can stop the chain.",
      ],
      memory: "Plan, source, make, deliver, return; responsive or efficient.",
    },
  },
];

export default lessons;
