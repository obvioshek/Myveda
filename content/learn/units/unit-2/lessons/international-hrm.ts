import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-of-ihrm",
    name: "Meaning of IHRM",
    intro: "Managing people when one firm works in several countries.",
    before: {
      q: "Is international HRM just domestic HRM carried out in another country?",
      choices: [
        { label: "Yes", reveal: "No. It adds expatriates, several legal and cultural systems, the employee's family and more risk to the usual HR functions." },
        { label: "No", reveal: "Right. The functions are the same, but the job widens: expatriate management, several systems, families to look after and higher risk." },
      ],
    },
    lead: "IHRM is HR done across borders: the usual functions, plus expatriate management, several legal and cultural systems, and more risk.",
    check: [
      ask("Which task belongs to international HRM but not to domestic HRM?", "Choosing, preparing and paying an employee for a posting abroad", ["Recruiting and selecting new staff for the home office", "Appraising an employee's performance against targets", "Training shop-floor staff to use a new machine"], "Foreign postings and expatriate pay are extra work that only a firm with units abroad has. Recruitment, appraisal and training are standard HR functions that domestic HRM does too."),
      ask("An Indian IT firm posts an engineer to Munich. Her partner needs work there and her child needs a school. What does this show about IHRM?", "It often reaches into employees' personal lives, more than domestic HRM does", ["It covers only the employee's work, as domestic HRM does", "Such family matters are left to the host country's government", "Such requests show that the posting has already failed"], "IHRM often deals with the family: housing, schooling and the partner's job. Domestic HRM deals mainly with the employee. Needing family support does not mean a posting has failed."),
      ask("A student says that IHRM and comparative HRM are the same, since both involve other countries. What is the best reply?", "IHRM manages one firm's people across borders; comparative HRM compares HR practice between countries", ["Comparative HRM manages one firm's people across borders; IHRM compares countries", "They are the same, because both study how firms hire abroad", "IHRM applies only to staff who work at the firm's head office"], "IHRM is about one firm that operates in several countries. Comparative HRM compares, for example, how Indian and German firms hire. The reverse wording is the tempting slip."),
    ],
    lens: [],
    reflect: "Think of a firm you know that works in more than one country. Which extra HR task would it face that a Pune-only firm would not?",
    summary: {
      points: [
        "IHRM: the HR activities a firm carries out at the international level, to meet its objectives and gain an advantage over rivals at home and abroad.",
        "It does the usual HR functions across borders, plus expatriate management, relocation, cross-cultural training and language help.",
        "It differs from domestic HRM in scope, employees, activities, environment, involvement in personal lives and risk.",
        "Objectives: skills, performance, pay and careers of staff abroad, cross-cultural and language training, common practices, competitive strategies, less cultural friction.",
        "Comparative HRM compares countries; IHRM manages one firm across them.",
      ],
      memory: "More countries, more kinds of staff, more activities, more risk.",
    },
  },
  {
    blockId: "employee-types-and-morgans-model",
    name: "Employee types and Morgan's model",
    intro: "PCNs, HCNs and TCNs, and what Morgan's three dimensions cover.",
    before: {
      q: "Is an Indian engineer who works in Germany a host country national?",
      choices: [
        { label: "Yes", reveal: "Not by that fact alone. A host country national belongs to the country where the unit stands, here Germany. For an Indian firm's Munich office she is a PCN." },
        { label: "It depends", reveal: "Right. Her type depends on the firm and the unit: a PCN at an Indian firm's Munich office, an HCN at a foreign carmaker's plant in Pune." },
      ],
    },
    lead: "Sort staff by nationality against the head-office country and the unit's country: PCN, HCN or TCN. Morgan's model joins that with three HR activities and three country categories.",
    check: [
      ask("Which set gives P. V. Morgan's three broad HR activities?", "Procurement, allocation and utilisation", ["Recruitment, selection and induction", "Planning, organising and controlling", "Training, appraisal and compensation"], "Morgan's headings are procurement, allocation and utilisation. Recruitment, training, appraisal and pay are examples of the work under them, not the headings."),
      ask("A carmaker headquartered in Germany sends a Spanish engineer from its plant in Spain to its Pune plant. What is she in Pune?", "A TCN, since she is neither German nor Indian", ["A PCN, since she works for the German firm", "An HCN, since she works in India", "No type at all, since she is only an expatriate"], "A TCN is a citizen of neither the head-office country nor the host country. Working for the German firm does not make her German, and working in India does not make her Indian."),
      ask("An Indian engineer works at the carmaker's Pune plant and is later sent to its plant in Spain. How does her type change?", "HCN in Pune, then TCN in Spain", ["PCN in both places", "HCN in both places", "No change, since nationality fixes the label"], "The label compares her nationality with the head-office country and the unit's country. In Pune she is local; in Spain she is neither German nor Spanish. Nationality alone does not fix the label."),
    ],
    lens: [],
    reflect: "Pick a firm you know that has a foreign subsidiary. Who would be its PCNs, HCNs and TCNs there?",
    summary: {
      points: [
        "PCN: citizen of the head-office country (home country employee), at head office or posted abroad. HCN: citizen of the unit's country. TCN: citizen of neither.",
        "The type depends on the firm and the unit, not on where a person works.",
        "Morgan (1986): three broad HR activities (procurement, allocation, utilisation), three country categories (home, host, other) and three employee types (PCN, HCN, TCN).",
        "Recruitment, training, appraisal and pay are examples of the work, not Morgan's headings.",
        "Nationality is a blunt label: dual nationals and long-term residents fit badly.",
      ],
      memory: "ACE: Activities, Countries, Employees.",
    },
  },
  {
    blockId: "staffing-approaches",
    name: "Staffing approaches",
    intro: "Ethnocentric, polycentric, geocentric and regiocentric: who fills the key posts abroad.",
    before: {
      q: "Under polycentric staffing, do subsidiaries have little autonomy?",
      choices: [
        { label: "Yes", reveal: "No. That describes ethnocentric staffing. In polycentric staffing local nationals run each subsidiary, and it has more autonomy." },
        { label: "No", reveal: "Right. Under polycentric staffing the subsidiary is run by local nationals and has more autonomy, not less." },
      ],
    },
    lead: "Ethnocentric: home nationals in key posts and tight control. Polycentric: local nationals run each subsidiary. Geocentric: the best person anywhere. Regiocentric: managers from the region.",
    check: [
      ask("Which approach fills key posts with the best person, whatever the nationality?", "Geocentric", ["Ethnocentric", "Polycentric", "Regiocentric"], "Geocentric looks for ability across the whole world. Regiocentric is the tempting answer, but it picks only from the same geographic region."),
      ask("A carmaker's Pune plant is run by Indian managers who know local suppliers and labour law, while PCNs hold the key posts at head office. Which approach is this?", "Polycentric", ["Ethnocentric", "Geocentric", "Regiocentric"], "Local nationals run the subsidiary and PCNs hold head-office posts: that is polycentric. Ethnocentric would put PCNs in the key Pune posts."),
      ask("A new IT office in Europe needs a head within weeks and has no local managers ready. Which approach suits at first, and what may it cost later?", "Ethnocentric, at the cost of local morale if no local person can rise", ["Polycentric, at the cost of tight head-office control", "Geocentric, at the cost of a narrow regional outlook", "Regiocentric, at the cost of costly expatriate packages"], "Ethnocentric works when no local managers are ready, but local staff may see no route to the top. The other options pair an approach with a cost that belongs to a different approach."),
    ],
    lens: [],
    reflect: "For a firm you know, which approach fits its first year in a new country, and which fits its tenth?",
    summary: {
      points: [
        "Perlmutter (1969) classified top management's orientation as ethnocentric, polycentric and geocentric; regiocentric was added in later work.",
        "Ethnocentric: PCNs in key posts, head office in control, little subsidiary autonomy. Strength: control. Weakness: local morale.",
        "Polycentric: HCNs run each subsidiary, which has more local autonomy; PCNs hold head-office posts. Weakness: head office and subsidiaries drift apart.",
        "Geocentric: the best person of any nationality; costly and slow. Regiocentric: managers from the region; the region can become a silo.",
        "These are ideal types: most firms mix them and change over time.",
      ],
      memory: "Ethno: home. Poly: host. Geo: best anywhere. Regio: the region.",
    },
  },
  {
    blockId: "expatriates-and-their-assignments",
    name: "Expatriates and their assignments",
    intro: "Why firms send people abroad, what they do there, and how an assignment is managed.",
    before: {
      q: "Is a German engineer hired locally in Munich an expatriate of an Indian IT firm?",
      choices: [
        { label: "Yes", reveal: "No. She is a host country national working in her own country. Expatriates are sent by the firm to work outside their own country." },
        { label: "No", reveal: "Right. She is a host country national in her own country. Expatriates are PCNs or TCNs whom the firm sends abroad." },
      ],
    },
    lead: "An expatriate does more than fill a post: she controls, socialises, builds networks, moves knowledge, spans boundaries and bridges languages. The assignment runs from selection to repatriation.",
    check: [
      ask("An expatriate passes on the firm's values and way of working, so the unit acts as head office would wish without being watched. Which role is this?", "Agent of socialisation", ["Agent of direct control", "Boundary spanner", "Language node"], "Socialisation is informal control through shared values. Direct control is the formal kind, by supervision and rules, which is the tempting answer."),
      ask("A manager sent to Munich attends a trade event, learns what a large client plans, and reports it to Pune. Which role is this?", "Boundary spanner", ["Network builder", "Transfer of competence and knowledge", "Agent of direct control"], "A boundary spanner gathers information from outside and represents the firm to the world. A network builder forms personal links inside the firm, which is the nearest wrong answer."),
      ask("An assignment fails after eight months because the expatriate's partner could not find work and the family never settled. Which steps most likely failed?", "Selection and support, which should have taken the family into account", ["Performance review, because the host manager rated her too low", "Compensation, because the balance sheet paid too little", "Repatriation, because she was not brought home soon enough"], "Family and partner adjustment is among the most common reasons for failure. Selection checks the family's readiness and support helps with the partner's work. The balance sheet only protects the standard of living."),
    ],
    lens: [],
    reflect: "Which one of the six expatriate roles would matter most for a manager opening a new office in a country you know?",
    summary: {
      points: [
        "An expatriate is an employee sent to work in another country, for a long or short term. PCNs and TCNs can be expatriates; an HCN at home cannot.",
        "Six roles: direct control, socialisation, network builder, transfer of competence and knowledge, boundary spanner, language node.",
        "The cycle: selection, preparation (with cross-cultural training), compensation, support, performance review, then repatriation.",
        "Balance-sheet approach: keep the home standard of living by comparing costs in four groups (income tax, housing, goods and services, savings), paying the gaps, and adding incentives.",
        "Failure often traces to the family's adjustment, poor selection, weak preparation or weak support; popular failure figures are shaky.",
      ],
      memory: "Control, socialise, network, transfer, span, speak.",
    },
  },
  {
    blockId: "repatriation",
    name: "Repatriation",
    intro: "Bringing the expatriate home, and keeping what she learned.",
    before: {
      q: "Is coming home after an assignment easier than going abroad?",
      choices: [
        { label: "Yes", reveal: "Not always. Reverse culture shock and career worries make the return hard, and firms often plan it less carefully than the departure." },
        { label: "Not always", reveal: "Right. Home has changed, so has she, and her post, status and pay may not fit. The return needs planning." },
      ],
    },
    lead: "Repatriation runs through four stages: preparation, physical relocation, transition and readjustment. The firm must also keep the returnee's knowledge.",
    check: [
      ask("Which is the correct order of the four stages of repatriation?", "Preparation, physical relocation, transition, readjustment", ["Preparation, transition, physical relocation, readjustment", "Physical relocation, preparation, readjustment, transition", "Readjustment, preparation, physical relocation, transition"], "Plans come first, then the move, then the family's settling-in arrangements, and last the personal and career readjustment. The other orders put a later stage ahead of an earlier one."),
      ask("An engineer returns from Munich to Pune and finds her post filled, her pay lower, and no one asking about her German experience. What does this show?", "Readjustment: career concerns on top of reverse culture shock", ["Preparation: she made no plan for life in the host country", "Physical relocation: her belongings were lost on the way", "Transition: her temporary housing was poor"], "Settling back into the home firm, with its post, status and pay, is the readjustment stage. Preparation is about planning the return, not about life in the host country."),
      ask("Which step best protects the knowledge that the returnee brings back?", "Agree her next post before she leaves, hold a debriefing, and give her work that uses her new skills", ["Return her to her old team so that nothing changes", "Pay her an allowance and leave her to settle quietly", "Ask her to wait until she feels at home before any questions"], "Knowledge is kept by planning her role, asking what she learned and putting it to use. Putting her back in the old team wastes it, and waiting lets it fade."),
    ],
    lens: [],
    reflect: "Imagine returning to your workplace after two years abroad. What would you want your manager to have arranged?",
    summary: {
      points: [
        "Repatriation: an expatriate's return to the home country after the assignment. Four stages, in order: preparation, physical relocation, transition, readjustment.",
        "Readjustment brings reverse culture shock and career worries: the post, status, pay and use of new skills.",
        "Keep the knowledge: agree the next post early, keep a mentor at head office, hold a debriefing, use her skills, ask her to brief the next expatriate.",
        "The four stages are the firm's tasks; the U-curve describes feelings over time.",
        "Cultural distance shapes the whole cycle; Hofstede's dimensions give the vocabulary for it.",
      ],
      memory: "Prepare, relocate, transition, readjust.",
    },
  },
];

export default lessons;
