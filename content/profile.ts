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
  role: "Software Engineer",
  /** One line. What you build and for whom, or where your interests lie. */
  tagline:
    "Computer Science student interested in AI and full-stack development.",
  location: "College Station, TX",
  email: "patricksemler@tamu.edu",
} as const;

/* --------------------------------------------------------------------------
 * The opening paragraph. Split into parts so a phrase can carry a link: give
 * a part an `href` and it renders as an inline link, otherwise it is plain
 * text. Keep it factual — this is the first thing anyone reads.
 * ----------------------------------------------------------------------- */
type BioPart = { text: string; href?: string };

export const bio: readonly BioPart[] = [
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
 * `link` is where the title points — the live site, or the repo if there is no
 * site. One destination, because a title can only carry one: leave it null and
 * the name renders as plain text with no arrow.
 * ----------------------------------------------------------------------- */
type Project = {
  name: string;
  blurb: string;
  stack: readonly string[];
  link: string | null;
};

export const projects: readonly Project[] = [
  {
    name: "LeetMind",
    blurb:
      "An adaptive coding-practice platform that generates original problems tailored to each user's per-concept mastery, so every session lands at the edge of their ability. Each generated problem clears a six-stage gate — schema, compile, differential, boundary, example, and mutation checks — before it is ever shown, and the judge holds roughly 75 submissions per minute with zero incomplete jobs.",
    stack: ["TypeScript", "Python", "React", "Fastify", "PostgreSQL", "Docker"],
    link: "https://leetmind.patricksemler.dev",
  },
  {
    name: "Phobos",
    blurb:
      "A self-hosted AI chief of staff for one person — 63 natural-language tools across 13 capability modules, reachable from a Telegram bot and a Realtime-synced React dashboard, that tracks habits, watches an inbox and calendar, and messages first. A self-extending forge plans and generates new TypeScript modules in isolated Git worktrees, then gates them behind typecheck, tests, and an independent cross-vendor review; nothing reaches production without human approval, and anything the system writes to itself is one command from a revert.",
    stack: ["TypeScript", "Node.js", "React", "Supabase", "MCP"],
    link: null,
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
 *
 * `link` points the company name outward — the employer's site, or the lab's.
 * Null renders it as plain text.
 * ----------------------------------------------------------------------- */
type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  stack: readonly string[];
  link: string | null;
};

export const experience: readonly Role[] = [
  {
    company: "Texas A&M University",
    title: "Machine Learning Research Assistant",
    start: "2026-06",
    end: "now",
    summary:
      "Diagnostic classification across 144 veterinary conditions — cut the production classifier's peak memory by 83% while holding 91% accuracy, and grounded the Gemini RAG pipeline in full case context so it stopped inventing care plans.",
    stack: ["Python", "scikit-learn", "Gemini", "RAG"],
    link: null,
  },
  {
    company: "Apply Finch",
    title: "Full-Stack Developer",
    start: "2026-01",
    end: "now",
    summary:
      "An AI job-application platform built with a 5-developer team — routed pipeline stages across cost-optimized LLMs to get generation under $0.01 per application, and hardened the async pipeline against 4 failure modes it used to lose work to.",
    stack: ["React", "TypeScript", "Flask", "PostgreSQL", "AWS"],
    link: null,
  },
  {
    company: "Maroon Fund",
    title: "Quantitative Developer",
    start: "2026-02",
    end: "2026-05",
    summary:
      "Backtesting and risk infrastructure — added Jensen's alpha, OLS beta, and tracking error against a 3-source SPY fallback, and raised backtest fidelity by modeling slippage, commissions, and forced exits.",
    stack: ["Python", "Pandas", "Plotly", "pytest"],
    link: null,
  },
];
