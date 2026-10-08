import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "characteristics-of-services",
    name: "Services and their characteristics",
    intro: "Five features that make services different from goods, and the marketing response to each.",
    before: {
      q: "Can an airline sell yesterday's empty seat today?",
      choices: [
        { label: "Yes, later", reveal: "No. Services are perishable: they cannot be stored, so unused capacity is lost. Airlines respond with differential pricing and reservations." },
        { label: "No, it is lost", reveal: "Right. Services are perishable: they cannot be stored, so unused capacity is lost. Airlines respond with differential pricing and reservations." },
      ],
    },
    lead: "A service is an act or performance that is essentially intangible and leaves the buyer owning nothing; five characteristics follow, each with its own response.",
    check: [
      ask("A doctor's consultation is produced and consumed at the same time, with the doctor part of the service. This is…", "Inseparability", ["Intangibility", "Variability", "Perishability"], "Inseparability means production and consumption happen together, with the provider present. Intangibility is tempting, but it is about not being able to inspect a service before buying it."),
      ask("A Pune–Goa bus often leaves with empty seats. Which response fits the characteristic causing this?", "Sell late seats cheaper and take advance bookings", ["Train the drivers to greet passengers warmly", "Show photographs of the bus interior online", "Write a standard checklist for every trip"], "Empty seats are perishability: unsold capacity is lost for good. Differential pricing and reservations match supply and demand. Photographs answer intangibility, which is not the problem here."),
      ask("A 40-seat bus charges ₹1,500 a seat and leaves with 30 passengers. It then sells 6 of the empty seats at ₹900 each. How much revenue do the late sales recover?", "₹5,400", ["₹15,000", "₹9,000", "₹6,000"], "6 × ₹900 = ₹5,400. ₹15,000 is tempting, but it is the full-price value of all 10 empty seats (10 × ₹1,500), not what the late sales brought in."),
    ],
    lens: [],
    reflect: "Think of a service you use, such as a bank or a coaching class. Which of the five characteristics causes it the most trouble?",
    summary: {
      points: [
        "A service is essentially intangible and results in no ownership (Kotler).",
        "Five characteristics: intangibility, inseparability, variability, perishability, lack of ownership; Kotler and Keller list the first four.",
        "Responses: tangible evidence, trained staff, standard processes, yield management, membership.",
        "Offerings range from pure tangible goods to pure services.",
      ],
      memory: "Intangible, inseparable, variable, perishable, not owned.",
    },
  },
  {
    blockId: "services-marketing-mix",
    name: "The services marketing mix: 7Ps",
    intro: "Three more Ps added to the four, each answering a feature of services.",
    before: {
      q: "Are the 4Ps enough to market a service?",
      choices: [
        { label: "Yes", reveal: "Booms and Bitner (1981) thought not, and added people, process and physical evidence to make seven Ps." },
        { label: "No", reveal: "Right. Booms and Bitner (1981) added people, process and physical evidence to make seven Ps." },
      ],
    },
    lead: "The services mix adds people, process and physical evidence to product, price, place and promotion (Booms and Bitner, 1981).",
    check: [
      ask("Who added people, process and physical evidence to the marketing mix for services?", "Bernard Booms and Mary Jo Bitner", ["Parasuraman, Zeithaml and Berry", "Philip Kotler and Kevin Keller", "Lovelock and Gummesson"], "Booms and Bitner extended the mix in 1981. Parasuraman, Zeithaml and Berry are tempting because they also worked on services, but they built the gaps model and SERVQUAL."),
      ask("A bank branch brings in a token machine and a fixed order of counters for each kind of request. Which P is it working on?", "Process", ["Place", "People", "Physical evidence"], "Process is the steps and flow of delivery once the customer arrives. Place is tempting, but it is about where and how customers reach the service, such as a branch or an app."),
      ask("In a coaching class, one disruptive student spoils lessons for the rest. In Zeithaml and Bitner's view, which P does this fall under?", "People: other customers are part of the service", ["Process: the timetable is at fault", "Physical evidence: the room is too crowded", "Promotion: it attracted the wrong students"], "People include the customer and other customers present, not only staff. Promotion is tempting, but the problem arises during delivery, inside the class."),
    ],
    lens: [],
    reflect: "Visit a café or bank in your mind. Which of people, process and physical evidence does it handle best?",
    summary: {
      points: [
        "The 4Ps: product, price, place, promotion.",
        "Booms and Bitner (1981) added people, process and physical evidence.",
        "People answers inseparability, process answers variability, physical evidence answers intangibility.",
        "People include staff, the customer and other customers present.",
      ],
      memory: "The 4Ps plus people, process and physical evidence.",
    },
  },
  {
    blockId: "service-quality-and-servqual",
    name: "Service quality and SERVQUAL",
    intro: "Quality measured as the gap between expectation and perception, and where the gap comes from.",
    before: {
      q: "Is service quality simply how good the service is?",
      choices: [
        { label: "Yes", reveal: "SERVQUAL measures it differently: as the gap between what customers expected and what they perceived, on five dimensions." },
        { label: "It is a gap", reveal: "Right. SERVQUAL measures quality as the gap between customers' expectations and their perceptions of performance, on five dimensions." },
      ],
    },
    lead: "SERVQUAL measures service quality as perception minus expectation on five dimensions (RATER); the gaps model shows where shortfalls start.",
    check: [
      ask("Performing the promised service dependably and accurately is…", "Reliability", ["Assurance", "Responsiveness", "Empathy"], "Reliability is doing what was promised, accurately. Assurance is tempting, but it is about staff knowledge and courtesy that inspire trust and confidence."),
      ask("Managers tell bank tellers to give ‘fast’ service but never say how many minutes. Which gap is this?", "Gap 2, the standards gap", ["Gap 1, the knowledge gap", "Gap 3, the delivery gap", "Gap 4, the communication gap"], "Managers know customers want speed but have not turned it into a precise standard: that is the standards gap. The knowledge gap would mean they misjudged what customers want in the first place."),
      ask("A branch scores 6.2 expected and 4.8 perceived on responsiveness, and 5.0 expected and 5.8 perceived on tangibles. Which reading is right?", "Responsiveness −1.4 and tangibles +0.8: fix responsiveness", ["Responsiveness +1.4 and tangibles −0.8: fix tangibles", "Both gaps are −1.4: fix them equally", "Responsiveness −0.8 and tangibles +1.4: fix neither"], "Gap = perception − expectation. Responsiveness: 4.8 − 6.2 = −1.4, a shortfall. Tangibles: 5.8 − 5.0 = +0.8, above expectation. Subtracting the other way round gives the tempting but wrong signs."),
    ],
    lens: [
      { pairing: 0, adds: "A saying that help given in time of need, however small, is greater than the world.", differs: "The couplet is about kindness between people. Responsiveness is one of five measured dimensions of a service firm's quality." },
    ],
    reflect: "Recall a service that let you down. Which RATER dimension failed, and which gap caused it?",
    summary: {
      points: [
        "SERVQUAL (1988): reliability, assurance, tangibles, empathy, responsiveness.",
        "Score per dimension: perception minus expectation; a negative score is a shortfall.",
        "Gaps model (1985): knowledge, standards, delivery and communication gaps lead to the customer gap.",
        "Zone of tolerance (1993) lies between desired and adequate service; Oliver's expectancy disconfirmation (1980).",
      ],
      memory: "Reliability, Assurance, Tangibles, Empathy, Responsiveness.",
    },
  },
  {
    blockId: "the-service-triangle",
    name: "The service triangle",
    intro: "Company, employees and customers, linked by three kinds of marketing.",
    before: {
      q: "Is marketing only what a company says to its customers?",
      choices: [
        { label: "Yes", reveal: "That is only external marketing. The service triangle adds internal marketing to employees and interactive marketing between employees and customers." },
        { label: "No", reveal: "Right. Besides external marketing to customers, there is internal marketing to employees and interactive marketing between employees and customers." },
      ],
    },
    lead: "The service triangle links company, employees and customers through external, internal and interactive marketing: promise, enable, deliver.",
    check: [
      ask("Hiring, training and motivating staff to serve customers well is…", "Internal marketing", ["External marketing", "Interactive marketing", "Yield management"], "Internal marketing runs between the company and its employees. External marketing is tempting, but it runs from the company to customers: it makes the promises."),
      ask("An advert promises a one-call fix, but agents have no authority to reverse a wrong charge. Which side of the triangle is weakest?", "Internal: staff cannot keep the promise", ["External: the advert reached the wrong people", "Interactive: the agents were rude on calls", "None: customers simply called too often"], "The promise breaks in the encounter, but the cause is that the firm never gave agents the authority to keep it. Nothing suggests the agents were rude, so blaming interactive marketing misses the cause."),
      ask("A surgery succeeds, but the surgeon never explains anything to the worried family. Which kind of quality was weak?", "Functional quality: how it was delivered", ["Technical quality: what the patient got", "Both, since the family is unhappy", "Neither, since the operation worked"], "Technical quality is the outcome, and the surgery succeeded. Functional quality is how it was delivered: concern and confidence. ‘Neither’ ignores that clients judge both."),
    ],
    lens: [
      { pairing: 1, adds: "The anicham flower withers when smelt, but a guest withers at the host's cold look.", differs: "The couplet concerns a host's hospitality. Interactive marketing is one side of a triangle that also needs internal and external marketing." },
    ],
    reflect: "Think of a shop or office you visit. Which side of its triangle is weakest: promise, enable or deliver?",
    summary: {
      points: [
        "External marketing: company to customers; making promises.",
        "Internal marketing: company to employees; enabling staff to keep promises.",
        "Interactive marketing: employees to customers; keeping promises in the service encounter.",
        "Clients judge technical quality (what) and functional quality (how).",
      ],
      memory: "External, internal, interactive: promise, enable, deliver.",
    },
  },
  {
    blockId: "excellence-in-services",
    name: "Excellence in services and service brands",
    intro: "What well-managed service firms do, and what a mishandled complaint costs.",
    before: {
      q: "Is a customer complaint bad news for a service firm?",
      choices: [
        { label: "Bad news", reveal: "It can be a gift. A complaint handled well can keep a customer who would otherwise leave quietly." },
        { label: "A chance", reveal: "Right. Firms that encourage complaints and fix problems on the spot earn more." },
      ],
    },
    lead: "Excellent service firms share a strategic concept, committed leaders, high standards, profit tiers, monitoring and good complaint handling.",
    check: [
      ask("McDonald's measures its outlets on QSCV, which stands for…", "Quality, service, cleanliness and value", ["Quality, speed, cost and variety", "Quantity, service, choice and value", "Quality, safety, courtesy and visibility"], "Quality, service, cleanliness and value: measuring every outlet on them shows top-management commitment. ‘Quality, speed, cost and variety’ sounds plausible but is not the formula."),
      ask("A bank gives its largest depositors a dedicated relationship manager and moves small accounts to app-based service. This is…", "Profit tiers", ["Yield management", "Internal marketing", "Mystery shopping"], "Profit tiers vary the level of service by how valuable the customer is. Yield management is tempting, but it varies price by time and demand to fill capacity."),
      ask("A hotel has 150 guests a year with a bad stay, each worth ₹20,000 a year. If 40 per cent of them leave, how much yearly business is lost?", "₹12 lakh", ["₹30 lakh", "₹6 lakh", "₹18 lakh"], "150 × 0.4 = 60 guests, and 60 × ₹20,000 = ₹12 lakh. ₹30 lakh is tempting, but it is the business of all 150 guests, as if every one of them left."),
    ],
    lens: [],
    reflect: "Recall a service problem you complained about. Did the firm turn it into a reason to stay or a reason to leave?",
    summary: {
      points: [
        "A customer-obsessed strategic concept and top-management commitment (QSCV).",
        "High standards, profit tiers, and monitoring through voice-of-the-customer measures and mystery shopping.",
        "On average about 40 per cent of customers with a bad experience leave; complaints handled well keep them.",
        "Brand experience: sensory, affective, behavioural, intellectual.",
      ],
      memory: "Customer-obsessed, committed, high standards, tiers, monitoring, complaints welcomed.",
    },
  },
];

export default lessons;
