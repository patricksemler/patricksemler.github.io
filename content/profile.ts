/* ==========================================================================
 * EDIT THIS FILE — it is the only file you need to touch to change what the
 * site says. Content is drawn from Patrick Semler's résumé (July 2026).
 * ========================================================================== */

export const profile = {
  name: "Patrick Semler",
  /** Not rendered anywhere at the moment — the `~/handle` line above the name
   *  was removed. Kept because it is the one place your username is written
   *  down. Lowercase, no spaces. */
  handle: "patricksemler",
  role: "Software Engineer",
  /** One line. What you build and for whom — not adjectives about yourself. */
  tagline:
    "I build AI systems that hold up under load — retrieval pipelines, job queues, and the failure handling that keeps them from quietly lying to you.",
  location: "College Station, TX",
  email: "patricksemler@tamu.edu",
} as const;


/* --------------------------------------------------------------------------
 * The opening paragraph. Split into parts so a phrase can carry a link: give
 * a part an `href` and it renders as an inline link, otherwise it is plain
 * text. Keep it factual — this is the first thing anyone reads.
 * ----------------------------------------------------------------------- */
export type BioPart = { text: string; href?: string };

export const bio: BioPart[] = [
  { text: "I'm a Computer Science student at " },
  { text: "Texas A&M", href: "https://www.tamu.edu" },
  { text: ", currently doing machine learning research on veterinary diagnostics. I build full-stack AI systems at " },
  { text: "Apply Finch" },
  { text: ", and before that wrote backtesting and risk infrastructure at " },
  { text: "Maroon Fund" },
  { text: ". On my own time I'm building " },
  { text: "LeetMind" },
  { text: ", an adaptive coding-practice platform, and " },
  { text: "Phobos" },
  { text: ", a self-extending AI assistant. National Merit Scholar, 3.79 GPA." },
];

/* --------------------------------------------------------------------------
 * Links. `label` is what renders; order is preserved.
 * ----------------------------------------------------------------------- */
export const links = [
  { label: "GitHub", href: "https://github.com/patricksemler" },
  { label: "LinkedIn", href: "https://linkedin.com/in/patricksemler" },
  { label: "Email", href: "mailto:patricksemler@tamu.edu" },
  { label: "Résumé", href: "/resume.pdf" },
] as const;

/* --------------------------------------------------------------------------
 * Education.
 * ----------------------------------------------------------------------- */
export const education = {
  school: "Texas A&M University",
  degree: "Bachelor of Science, Computer Science",
  location: "College Station, TX",
  graduation: "2028-05",
  detail: [
    { label: "gpa", value: "3.79 / 4.00" },
    {
      label: "honors",
      value: "National Merit Scholar · President's Endowed Scholar",
    },
    {
      label: "coursework",
      value:
        "Program Design and Concepts · Data Structures and Algorithms · Discrete Math",
    },
    {
      label: "involved",
      value: "Aggie Coding Club · Aggies Create · TAMUhack · TIDAL",
    },
  ],
} as const;

/* --------------------------------------------------------------------------
 * Experience. Newest first — this renders as a timeline, so order matters.
 * Dates are ISO (`2026-06`); `end: "now"` marks the entry as current.
 * ----------------------------------------------------------------------- */
export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Texas A&M University",
    title: "Machine Learning Research Assistant",
    start: "2026-06",
    end: "now",
    location: "College Station, TX",
    bullets: [
      "Reduced production classifier peak memory by 83% while holding 91% accuracy across 144 veterinary conditions, by tuning random-forest tree count and leaf constraints.",
      "Eliminated hallucinated care plans in evaluation by grounding a Gemini retrieval-augmented generation pipeline in complete case context — symptoms, vitals, and ranked differential diagnoses.",
      "Expanded diagnostic coverage to swine and equine (64 new condition mappings) by integrating both species into the filtered prediction pipeline end-to-end, verified with automated endpoint tests.",
    ],
    stack: ["Python", "scikit-learn", "Gemini", "RAG"],
  },
  {
    company: "Apply Finch",
    title: "Full-Stack Developer",
    start: "2026-01",
    end: "now",
    location: "College Station, TX",
    bullets: [
      "Built and deployed an AI job-application platform on a 5-developer team that scrapes postings and ranks them via a multi-factor priority score.",
      "Cut generation cost to under $0.01 per application by routing pipeline stages across cost-optimized LLMs, enforcing one-page output on every document through an automated quality gate.",
      "Hardened the asynchronous pipeline against 4 failure modes — lost state, duplicate applications, transient database failures, and orphaned scraper runs — via persisted run snapshots, deduplication, retries, and cross-worker cancellation.",
    ],
    stack: ["React", "TypeScript", "Flask", "PostgreSQL", "AWS"],
  },
  {
    company: "Maroon Fund",
    title: "Quantitative Developer",
    start: "2026-02",
    end: "2026-05",
    location: "College Station, TX",
    bullets: [
      "Extended risk-adjusted strategy evaluation with 3 benchmark metrics — annualized Jensen's alpha, OLS beta, and tracking error — using SPY data from a 3-source fallback pipeline.",
      "Consolidated 6 standalone strategy charts into a single interactive Plotly report covering equity, drawdown, trade P&L, and rolling risk metrics.",
      "Increased backtest fidelity by modeling slippage, commissions, and forced exits; validated the engine, metrics, and reports with an automated pytest suite.",
    ],
    stack: ["Python", "Pandas", "Plotly", "pytest"],
  },
];

/* --------------------------------------------------------------------------
 * Projects. Not a sequence — order is editorial, so put your best first.
 * `status` is one of: "active" | "shipped" | "archived"
 * Set `repo` or `demo` to null to hide that link.
 * ----------------------------------------------------------------------- */
export type Project = {
  name: string;
  lang: string;
  status: "active" | "shipped" | "archived";
  blurb: string;
  stack: string[];
  repo: string | null;
  demo: string | null;
};

export const projects: Project[] = [
  {
    name: "LeetMind",
    lang: "TypeScript",
    status: "active",
    blurb:
      "An adaptive coding-practice platform that generates progressively harder problems tailored to each user's per-concept strengths and weaknesses. Every problem clears 6 stages of solution, edge-case, and hidden-test verification before release, and the judge sustains 75 submissions per minute with zero dropped jobs.",
    stack: ["TypeScript", "React", "Fastify", "PostgreSQL", "Docker"],
    repo: null,
    demo: null,
  },
  {
    name: "Phobos",
    lang: "TypeScript",
    status: "active",
    blurb:
      "A personal AI assistant exposing 63 natural-language tools across 13 capability modules through a Telegram bot and a realtime React dashboard. A self-extending plugin forge plans and generates new TypeScript modules in isolated Git worktrees, then type-checks, tests, and cross-model reviews them before they land.",
    stack: ["TypeScript", "Node.js", "React", "Supabase", "MCP"],
    repo: null,
    demo: null,
  },
];

/* --------------------------------------------------------------------------
 * Stack. Group things the way you would explain them out loud.
 * ----------------------------------------------------------------------- */
export const stack = [
  {
    group: "languages",
    items: ["TypeScript", "Python", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    group: "frameworks",
    items: ["React", "Fastify", "Flask", "Node.js", "scikit-learn", "Pandas"],
  },
  {
    group: "data",
    items: ["PostgreSQL", "Supabase", "Firebase"],
  },
  {
    group: "infrastructure",
    items: ["Docker", "AWS", "REST APIs", "MCP"],
  },
  {
    group: "everyday",
    items: ["Git", "GitHub", "pytest", "Plotly"],
  },
] as const;

