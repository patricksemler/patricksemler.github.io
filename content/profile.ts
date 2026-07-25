/* ==========================================================================
 * EDIT THIS FILE — it is the only file you need to touch to change what the
 * site says.
 *
 * The résumé is linked in the header and carries the complete record: every
 * bullet, every date, coursework, honors. So this page does not have to, and
 * the rule for anything you add here is that it should not try to.
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
  {
    text: ", currently doing machine learning research on veterinary diagnostics. I build full-stack AI systems at ",
  },
  { text: "Apply Finch" },
  { text: ", and before that wrote backtesting and risk infrastructure at " },
  { text: "Maroon Fund" },
  /* The paragraph hands off to the section below it rather than summing up:
     both projects are named with just enough of a hook to make scrolling the
     obvious next move, and Projects is the very next thing on the page. */
  { text: ". On my own time I'm building " },
  { text: "LeetMind" },
  {
    text: ", an adaptive coding-practice platform that aims each problem at what you are actually weak at, and ",
  },
  { text: "Phobos" },
  {
    text: ", a self-hosted AI chief of staff that can safely write and deploy new tools for itself.",
  },
];

/* --------------------------------------------------------------------------
 * Links. `label` is what renders; order is preserved.
 *
 * No "Email" entry — the address is written out in full under the name
 * instead, which is both more visible and one fewer thing to click.
 * ----------------------------------------------------------------------- */
export const links = [
  { label: "GitHub", href: "https://github.com/patricksemler" },
  { label: "LinkedIn", href: "https://linkedin.com/in/patricksemler" },
  { label: "Résumé", href: "/resume.pdf" },
] as const;

/* --------------------------------------------------------------------------
 * Projects. Not a sequence — order is editorial, so put your best first.
 *
 * The title links to `repo`, falling back to `demo`; leave both null and it
 * renders as plain text with no arrow.
 * ----------------------------------------------------------------------- */
export type Project = {
  name: string;
  /** Neither `lang` nor `status` is rendered — the stack tags already say what
   *  a project is written in, and a status pill was the kind of chrome this
   *  page is trying not to have. Kept as metadata; `status` is one of
   *  "active" | "shipped" | "archived". */
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
      "An adaptive coding-practice platform that generates original problems tailored to each user's per-concept mastery, so every session lands at the edge of their ability. Each generated problem clears a six-stage gate — schema, compile, differential, boundary, example, and mutation checks — before it is ever shown, and the judge holds roughly 75 submissions per minute with zero incomplete jobs.",
    stack: ["TypeScript", "Python", "React", "Fastify", "PostgreSQL", "Docker"],
    repo: null,
    demo: null,
  },
  {
    name: "Phobos",
    lang: "TypeScript",
    status: "active",
    blurb:
      "A self-hosted AI chief of staff for one person — 63 natural-language tools across 13 capability modules, reachable from a Telegram bot and a Realtime-synced React dashboard, that tracks habits, watches an inbox and calendar, and messages first. A self-extending forge plans and generates new TypeScript modules in isolated Git worktrees, then gates them behind typecheck, tests, and an independent cross-vendor review; nothing reaches production without human approval, and anything the system writes to itself is one command from a revert.",
    stack: ["TypeScript", "Node.js", "React", "Supabase", "MCP"],
    repo: null,
    demo: null,
  },
];

/* --------------------------------------------------------------------------
 * Experience. Newest first — this renders as a timeline, so order matters.
 * Dates are ISO (`2026-06`); `end: "now"` marks the entry as current.
 *
 * Deliberately one line each. The full bullets live in the résumé, and
 * reprinting them here is what made this page a duplicate of the PDF. Give
 * each role the single sentence you would say out loud, with the number that
 * makes it real, and let the résumé carry the rest.
 * ----------------------------------------------------------------------- */
export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  /** Not rendered — every role so far has been in the same city as the one
   *  under my name, so printing it on each entry was three repetitions of a
   *  line the header already carries. */
  location: string;
  summary: string;
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Texas A&M University",
    title: "Machine Learning Research Assistant",
    start: "2026-06",
    end: "now",
    location: "College Station, TX",
    summary:
      "Diagnostic classification across 144 veterinary conditions — cut the production classifier's peak memory by 83% while holding 91% accuracy, and grounded the Gemini RAG pipeline in full case context so it stopped inventing care plans.",
    stack: ["Python", "scikit-learn", "Gemini", "RAG"],
  },
  {
    company: "Apply Finch",
    title: "Full-Stack Developer",
    start: "2026-01",
    end: "now",
    location: "College Station, TX",
    summary:
      "An AI job-application platform built with a 5-developer team — routed pipeline stages across cost-optimized LLMs to get generation under $0.01 per application, and hardened the async pipeline against 4 failure modes it used to lose work to.",
    stack: ["React", "TypeScript", "Flask", "PostgreSQL", "AWS"],
  },
  {
    company: "Maroon Fund",
    title: "Quantitative Developer",
    start: "2026-02",
    end: "2026-05",
    location: "College Station, TX",
    summary:
      "Backtesting and risk infrastructure — added Jensen's alpha, OLS beta, and tracking error against a 3-source SPY fallback, and raised backtest fidelity by modeling slippage, commissions, and forced exits.",
    stack: ["Python", "Pandas", "Plotly", "pytest"],
  },
];
