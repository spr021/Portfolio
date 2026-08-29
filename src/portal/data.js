import {openSource} from "../portfolio";

export const slugify = value =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const projectDetails = {
  "space-x": {
    year: "2021",
    status: "Live",
    role: "Design & development",
    statement: "Turning a dense launch API into a focused mission browser.",
    challenge:
      "Space exploration data is fascinating, but long payloads and unfamiliar terminology can make it difficult to scan. The interface needed to make missions feel approachable without hiding the useful details.",
    approach:
      "I designed the experience around a visual launch timeline, compact mission cards, and clear status cues. Data fetching stays separate from presentation so the interface remains easy to extend.",
    outcome:
      "A responsive React explorer that makes upcoming and historic launches quick to browse on desktop and mobile.",
    highlights: [
      "API-driven launch directory",
      "Responsive mission details",
      "Clear loading and error states"
    ]
  },
  clicker: {
    year: "2024",
    status: "Playable",
    role: "Product & development",
    statement: "A tiny game designed around one irresistible interaction.",
    challenge:
      "The goal was to build a browser game with almost no learning curve while still creating tension, momentum, and a reason to try one more round.",
    approach:
      "The loop is deliberately small: click, build a streak, chase the record. Immediate visual feedback and a fast reset keep every session frictionless.",
    outcome:
      "A quick Next.js experiment that turns a single action into a playful, replayable challenge.",
    highlights: ["Instant game loop", "Responsive input", "Deployed on Vercel"]
  },
  usesortable: {
    year: "2023",
    status: "Published",
    role: "Library author",
    statement: "Reusable collection controls without reusable complexity.",
    challenge:
      "Sorting, searching, and bookmarking are common UI needs, but rebuilding their state logic for every collection makes product code harder to maintain.",
    approach:
      "I packaged the state transitions into a small React hook with a straightforward API, keeping rendering decisions in the consuming product.",
    outcome:
      "A focused npm package that gives React projects useful collection behavior while staying flexible and easy to adopt.",
    highlights: ["Typed React hook", "Search and sorting", "Published package"]
  },
  "cinema-seat": {
    year: "2024",
    status: "In progress",
    role: "Frontend architecture",
    statement: "One cinema experience across mobile, web, and shared packages.",
    challenge:
      "Reservation flows span discovery, seat selection, checkout, and account states. Keeping those experiences consistent across web and mobile adds another layer of complexity.",
    approach:
      "A Turborepo structure shares product logic and UI foundations between Next.js and Expo while allowing each platform to keep the interactions that feel native.",
    outcome:
      "An open architecture for a multi-platform cinema product and a practical test bed for shared design systems.",
    highlights: [
      "Turborepo workspace",
      "Next.js + Expo",
      "Shared UI foundations"
    ]
  }
};

export const openSourceProjects = openSource.projects.map((project, index) => ({
  ...project,
  slug: slugify(project.name),
  number: String(index + 1).padStart(2, "0"),
  year:
    projectDetails[slugify(project.name)]?.year ||
    (index < 7 ? "2023" : "2022"),
  status: projectDetails[slugify(project.name)]?.status || "Open source",
  role: projectDetails[slugify(project.name)]?.role || "Design & development",
  statement:
    projectDetails[slugify(project.name)]?.statement || project.description,
  challenge:
    projectDetails[slugify(project.name)]?.challenge ||
    `This project started as a practical exploration of ${project.tags.join(
      ", "
    )}—with an emphasis on making the result understandable, useful, and easy to build on.`,
  approach:
    projectDetails[slugify(project.name)]?.approach ||
    "The implementation keeps the core idea small, gives the interface a clear hierarchy, and leaves room for the project to evolve without unnecessary machinery.",
  outcome:
    projectDetails[slugify(project.name)]?.outcome ||
    "The result is a public, inspectable project that captures both the solution and the thinking behind it.",
  highlights: projectDetails[slugify(project.name)]?.highlights || [
    `${project.language} codebase`,
    project.tags[0],
    "Built in public"
  ]
}));

export const workProjects = [
  {
    slug: "taaghche-reader",
    number: "01",
    title: "Taaghche",
    type: "Reading platform",
    timeframe: "2022 — 2023",
    color: "#ff6f52",
    image: require("../assets/images/taaghche.webp"),
    website: "https://taaghche.com/",
    headline: "A calmer way to find, read, and listen to books.",
    summary:
      "Product-focused frontend work for one of Iran’s major digital reading platforms, spanning web experiences and a modern Next.js stack.",
    role: "Frontend developer",
    responsibilities: [
      "Product interface development",
      "Next.js delivery",
      "Cross-team feature ownership"
    ],
    challenge:
      "A large reading product has to balance discovery, purchasing, reading, and listening while remaining fast and familiar for a broad audience.",
    solution:
      "I helped develop and maintain customer-facing web experiences, translated product requirements into resilient interface components, and worked across the feature lifecycle from implementation through refinement.",
    result:
      "A dependable web product foundation that supports continued iteration across a high-traffic content catalogue."
  },
  {
    slug: "panext-publisher",
    number: "02",
    title: "Panext",
    type: "Publisher workspace",
    timeframe: "2022 — 2023",
    color: "#5865f2",
    image: require("../assets/images/taaghche.webp"),
    website: "https://publisher.taaghche.ir/",
    headline: "Publishing tools that make complex work feel ordered.",
    summary:
      "A focused workspace for the publishers behind Taaghche’s digital catalogue, designed around operational clarity.",
    role: "Frontend developer",
    responsibilities: [
      "Workflow UI",
      "Data-heavy screens",
      "Reusable frontend patterns"
    ],
    challenge:
      "Publisher operations involve dense forms, many content states, and repeat actions. The product needed to keep that complexity visible without making it overwhelming.",
    solution:
      "I built structured workflows and reusable interface patterns that keep status, actions, and data relationships easy to follow.",
    result:
      "A clearer operational surface for managing digital publications and their lifecycle."
  },
  {
    slug: "panoramic-commerce",
    number: "03",
    title: "Panoramic",
    type: "Commerce experience",
    timeframe: "2021",
    color: "#eeb647",
    image: require("../assets/images/panoramic.png"),
    website: "https://panoramic.ir/",
    headline: "A direct path from product interest to purchase.",
    summary:
      "A responsive commerce interface for discovering and purchasing television products.",
    role: "Frontend developer",
    responsibilities: [
      "Responsive storefront",
      "Product catalogue",
      "Interaction implementation"
    ],
    challenge:
      "Technical products need enough detail for comparison, but customers still need a simple journey through the catalogue.",
    solution:
      "The interface prioritizes product imagery, specifications, and clear actions within a responsive layout that works across screen sizes.",
    result:
      "A practical sales surface that makes the catalogue easier to navigate and understand."
  },
  {
    slug: "hadish-sales-system",
    number: "04",
    title: "Hadish Sabz",
    type: "Internal sales system",
    timeframe: "2020 — 2021",
    color: "#3faa8c",
    image: require("../assets/images/hadish-sabz.png"),
    headline: "One operational view of an entire sales process.",
    summary:
      "A comprehensive internal application for supervising and running company sales workflows.",
    role: "Frontend developer",
    responsibilities: [
      "React + TypeScript",
      "Business workflows",
      "Component architecture"
    ],
    challenge:
      "Internal sales work crosses multiple roles and process states, creating a risk of fragmented tools and inconsistent information.",
    solution:
      "I implemented the frontend in React and TypeScript, giving recurring workflows a consistent structure and turning business states into clear interface states.",
    result:
      "A unified system for teams to follow, manage, and supervise the company’s sales process."
  }
];

export const articles = [
  {
    slug: "interfaces-that-explain-themselves",
    number: "01",
    category: "Product thinking",
    title: "Interfaces that explain themselves",
    dek: "A practical way to replace extra instructions with hierarchy, feedback, and the right defaults.",
    readTime: "5 min",
    date: "May 18, 2026",
    color: "#5865f2",
    intro:
      "The best interface copy is often the copy you never need to write. When structure and feedback do their job, people can understand what is possible by simply looking and trying.",
    sections: [
      {
        heading: "Start with the next decision",
        body: "A screen should make its next meaningful decision obvious. That does not always mean one giant button. It means the hierarchy should answer: where am I, what can I do, and what happens next? If several actions are equally loud, the product has moved its prioritization problem onto the user."
      },
      {
        heading: "Feedback is part of the instruction",
        body: "Hover, focus, loading, success, and error states are not polish. They complete the conversation between a person and the product. Immediate, specific feedback builds confidence and helps users recover without opening documentation."
      },
      {
        heading: "Choose defaults with a point of view",
        body: "Good defaults compress complexity. They should represent the most likely successful path while keeping alternatives visible. A neutral interface is rarely truly neutral; it often just asks everyone to configure the product before receiving value."
      }
    ]
  },
  {
    slug: "small-hooks-large-systems",
    number: "02",
    category: "Engineering",
    title: "Small hooks, large systems",
    dek: "What building reusable React logic taught me about finding the right boundary.",
    readTime: "6 min",
    date: "April 03, 2026",
    color: "#e95589",
    intro:
      "Reusability is not measured by the number of options an abstraction exposes. It is measured by how often the abstraction removes work without removing control.",
    sections: [
      {
        heading: "Separate behavior from appearance",
        body: "Hooks are most useful when they describe state and transitions without prescribing markup. A sortable collection can return ordered data and actions while letting each product decide whether the interface is a table, a card grid, or a command menu."
      },
      {
        heading: "Design the smallest public API",
        body: "Every option becomes a promise. Start with the behavior that is stable and necessary, then let real product needs reveal the next extension. Small APIs are easier to understand, test, and evolve."
      },
      {
        heading: "Keep escape hatches",
        body: "A useful abstraction handles the common path beautifully and makes unusual paths possible. Composition, callbacks, and controlled state are usually healthier escape hatches than a long list of one-off configuration flags."
      }
    ]
  },
  {
    slug: "designing-for-one-more-round",
    number: "03",
    category: "Play",
    title: "Designing for one more round",
    dek: "Tiny lessons from browser games about feedback, tension, and respectful replayability.",
    readTime: "4 min",
    date: "March 12, 2026",
    color: "#ff6f52",
    intro:
      "A small game exposes interaction design with unusual clarity. The goal is obvious, the feedback is immediate, and any friction becomes impossible to ignore.",
    sections: [
      {
        heading: "Teach through the first action",
        body: "The quickest tutorial is a safe first move. Put the useful control in reach, respond generously, and introduce complexity only after the player understands the basic loop."
      },
      {
        heading: "Make progress visible",
        body: "Scores, streaks, time, and spatial change turn repeated input into a story. The player should feel the difference between the start of a round and its final seconds even when the mechanics stay simple."
      },
      {
        heading: "A reset should feel effortless",
        body: "Replayability depends on the space between rounds. Keep the result clear, preserve the useful record, and make the next attempt one obvious action away."
      }
    ]
  },
  {
    slug: "the-portfolio-as-a-product",
    number: "04",
    category: "Process",
    title: "The portfolio as a product",
    dek: "Why personal sites become more useful when they are designed as maps instead of monuments.",
    readTime: "5 min",
    date: "February 21, 2026",
    color: "#3faa8c",
    intro:
      "A portfolio does not need to hold every detail on one long page. Its more valuable job is to help different people find the evidence they care about and build a clear picture along the way.",
    sections: [
      {
        heading: "Give every visitor an entry point",
        body: "A hiring manager may want shipped work, a developer may want source code, and a curious visitor may want to play. Strong navigation acknowledges those different intentions without fragmenting the personal story."
      },
      {
        heading: "Show the work at two speeds",
        body: "Directories support fast scanning; detail pages support understanding. Using both lets a visitor create an overview first and then follow their curiosity into the decisions behind a specific project."
      },
      {
        heading: "Leave room for change",
        body: "A portal is a living system. Projects, notes, and experiments can be added without redesigning the entire identity, while the home page remains a concise map of what matters now."
      }
    ]
  }
];

export const portalSections = [
  {
    path: "/work",
    label: "Selected work",
    short: "Work",
    count: workProjects.length,
    color: "#ff6f52"
  },
  {
    path: "/open-source",
    label: "Open source",
    short: "Source",
    count: openSourceProjects.length,
    color: "#5865f2"
  },
  {
    path: "/play",
    label: "Playable lab",
    short: "Play",
    count: 3,
    color: "#eeb647"
  },
  {
    path: "/notes",
    label: "Notes",
    short: "Notes",
    count: articles.length,
    color: "#3faa8c"
  }
];
