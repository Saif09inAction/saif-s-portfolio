export type ProjectDetail = {
  overview?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  features?: string[];
  myRole?: string;
  techNotes?: string;
};

export type Project = {
  id: string;
  type: "developer";
  title: string;
  hook: string;
  description: string;
  date: string;
  githubUrl: string;
  siteUrl: string;
  technologies: string[];
  thumbnail: string;
  detail?: ProjectDetail;
};

export const siteImages = {
  portrait: "/images/profile/saif.jpg",
  portraitAlt: "Saif Salmani",
} as const;

export const hero = {
  location: "Mumbai, India",
};

export const projects: Project[] = [
  {
    id: "dev-1",
    type: "developer",
    title: "PrismHold",
    hook: "Live e-commerce for a handmade brand — shop + full admin panel.",
    description:
      "Full e-commerce website for the PrismHold brand: customers browse and buy products; admins manage catalog, orders, and operations from a dedicated admin panel. Live at prismhold.store.",
    date: "2023-11-30",
    githubUrl: "https://github.com/Saif09inAction/Prismhold.store",
    siteUrl: "https://www.prismhold.store/",
    technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "Admin panel"],
    thumbnail: "/images/projects/prismhold.png",
    detail: {
      overview:
        "PrismHold is a handmade brand. I built their live e-commerce website so shoppers can discover and purchase products online, while the brand team runs catalog, inventory, and orders from an admin panel.",
      problem:
        "The brand needed a real storefront — not a brochure site — with shopping for users and day-to-day control for admins.",
      solution:
        "Designed and implemented a full e-commerce flow: product pages, cart/checkout-ready shopping, and an admin panel to manage products and operations without touching code.",
      impact: "Live production store at prismhold.store — users shop; admins control the catalog and backend from the panel.",
      features: [
        "Customer-facing shop (browse, product detail, purchase flow)",
        "Admin panel for catalog and operations",
        "Live production deployment",
      ],
      myRole: "Full-stack developer — storefront, admin panel, and going live.",
      techNotes: "HTML/CSS/JavaScript e-commerce build with a dedicated admin surface for the brand team.",
    },
  },
  {
    id: "dev-2",
    type: "developer",
    title: "LinguaSync",
    hook: "Real-time multilingual MERN chat with instant translation.",
    description:
      "Socket.IO messaging, JWT auth, MongoDB persistence. Built to let people chat across languages in one thread.",
    date: "2024-01-15",
    githubUrl: "https://github.com/Saif09inAction/linguasync",
    siteUrl: "",
    technologies: ["React", "Tailwind", "Node", "Express", "MongoDB", "Socket.IO", "JWT"],
    thumbnail: "/images/projects/lyguasync.png",
    detail: {
      overview:
        "LinguaSync is a MERN chat app where messages can be translated in real time so people who speak different languages can collaborate in one thread.",
      problem: "Language barriers slow collaboration in global teams and communities.",
      solution:
        "Socket.IO for live messaging, JWT sessions, MongoDB persistence, and translation layered on the message pipeline.",
      impact: "Demo-ready full-stack reference for real-time + i18n patterns.",
      features: ["Real-time rooms", "JWT auth", "Translation on send/receive", "Mongo persistence"],
      myRole: "Full-stack — API, client, and real-time layer.",
      techNotes: "React (Vite) + Tailwind UI; Express + Socket.IO; MongoDB for messages and users.",
    },
  },
  {
    id: "dev-3",
    type: "developer",
    title: "PlagiaCheck",
    hook: "Academic plagiarism checks — upload PDF/DOCX/TXT, similarity scoring.",
    description:
      "Cosine similarity & TF-based analysis. Firebase for auth and data. Built for coursework and demos.",
    date: "2024-02-20",
    githubUrl: "https://github.com/Saif09inAction/PlagiaCheck",
    siteUrl: "https://saif09inaction.github.io/PlagiaCheck/",
    technologies: ["JavaScript", "Node", "Express", "Firebase"],
    thumbnail: "/images/projects/plagiacheck.png",
  },
  {
    id: "dev-4",
    type: "developer",
    title: "FundFlow – Finance Learning Platform",
    hook: "Hackathon finance app — AI stock signal, paper trading, news, chat.",
    description:
      "Demo Day build: learning surface with simulated trades, news feed, and community discussion.",
    date: "2024-01-25",
    githubUrl: "https://github.com/Saif09inAction/Fund-Flow-mumbai-hacks",
    siteUrl: "",
    technologies: ["JavaScript", "Node", "AI/ML"],
    thumbnail: "/images/projects/fundflow.png",
    detail: {
      overview:
        "Hackathon finance learning surface: paper trading, news, community chat, and an ML-inspired stock signal experiment for demo day.",
      problem: "Make finance concepts approachable under time pressure at a hackathon.",
      solution:
        "Rapid UI + API integration; simulated trades and news feed; chat for peer learning; model hook for signals.",
      impact: "🥈 Demo Day recognition — shipped narrative and working demo.",
      features: ["Paper trading", "News module", "Community chat", "Signal experiment"],
      myRole: "Full-stack contributor — features, integration, and pitch support.",
      techNotes: "Node/JavaScript stack; AI/ML module scoped for demo reliability.",
    },
  },
  {
    id: "dev-life-lens",
    type: "developer",
    title: "LifeLens",
    hook: "Hackathon story site — AI goggles for blind & deaf users.",
    description:
      "Next.js marketing site for LifeLens: narrative scroll, stats, prototypes, and team — Code Paglu's.",
    date: "2025",
    githubUrl: "https://github.com/Saif09inAction/Life-Lens",
    siteUrl: "https://life-lens-flax.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "R3F"],
    thumbnail: "/images/projects/life-lens.jpg",
    detail: {
      overview:
        "LifeLens is a concept for AI-powered smart goggles that help blind users navigate safely and deaf users follow conversations with live captions. The public site tells that story with chapters, impact numbers, prototype sketches, and team — built for a hackathon as Code Paglu's.",
      problem:
        "Blind and deaf people face daily barriers crossing streets, following speech in noise, and getting timely environmental cues.",
      solution:
        "A startup-style Next.js site presents research, imagined user journeys, hardware concept (Raspberry Pi, sensors, displays), and clear calls to action — with motion and layout tuned for emotional storytelling.",
      impact:
        "Deployed demo at Vercel; repo and narrative package for judges and stakeholders.",
      features: [
        "Story-driven sections (problem → journeys → concept → prototypes)",
        "Dark-mode UI, glass cards, animated counters",
        "Team & contact; SEO-oriented structure",
        "R3F-ready stack for future product mockups",
      ],
      myRole:
        "Team Code Paglu's — contributor alongside Sufyan Khan and Arsheel Patel (site build, content, and presentation).",
      techNotes:
        "Next.js 16, Tailwind CSS 4, Framer Motion, React Three Fiber per project README. Live: https://life-lens-flax.vercel.app/ · Source: https://github.com/Saif09inAction/Life-Lens",
    },
  },
  {
    id: "dev-5",
    type: "developer",
    title: "Revora",
    hook: "UI/UX playground — layout, motion, and component experiments.",
    description: "Early-stage lab for interaction patterns and structure before shipping features.",
    date: "2023-09-15",
    githubUrl: "https://github.com/Saif09inAction/Revora",
    siteUrl: "https://revorabysaif.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/revora.png",
  },
  {
    id: "dev-6",
    type: "developer",
    title: "Family Info App",
    hook: "Family dashboard — profiles, birthdays, and reminders.",
    description: "Firebase-backed CRUD with upcoming dates highlighted. Simple household hub.",
    date: "2024-03-10",
    githubUrl: "https://github.com/Saif09inAction/family-info-app",
    siteUrl: "https://familyboard.netlify.app",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    thumbnail: "/images/projects/familyinfo.png",
  },
  {
    id: "dev-7",
    type: "developer",
    title: "Country Info",
    hook: "REST-driven country explorer — flags, regions, metadata.",
    description: "API-driven cards for quick reference and geography demos.",
    date: "2023-12-15",
    githubUrl: "https://github.com/Saif09inAction/Country-Info",
    siteUrl: "https://country-info-app-by-saifsalmani.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/images/projects/countryinfo.png",
  },
  {
    id: "dev-8",
    type: "developer",
    title: "YouTube Clone",
    hook: "Responsive YouTube UI clone — layout & grid fidelity.",
    description: "Front-end practice: responsive shell and visual parity with the real product.",
    date: "2023-10-20",
    githubUrl: "https://github.com/Saif09inAction/youtube-clone",
    siteUrl: "https://youtubeclone-by-saif.netlify.app/",
    technologies: ["HTML", "CSS"],
    thumbnail: "/images/projects/youtubeclone.png",
  },
];

export const about = {
  paragraphs: [
    "Computer Engineering @ ITM — I ship full-stack web, compete in hackathons, and build live product sites like e-commerce with admin tools.",
  ],
  education: {
    title: "BTech — Computer Science Engineering",
    place: "ITM Skills University, Mumbai",
    period: "2024 – 2028",
  },
};

export const contact = {
  links: [
    { label: "GitHub", href: "https://github.com/Saif09inAction" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saif-salmani-38b63a30b/" },
    { label: "Email", href: "mailto:saifsalmani224@gmail.com" },
  ],
};

export const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1hLZFlz9x_Os6IXZYqQ7-2h6wUpUgmsT0";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Case Studies" },
  { href: "#projects", label: "My Projects" },
  { href: "#about", label: "About Me" },
];

