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
  { text: "ApplyFinch" },
  {
    text: ", and before that extended backtesting and risk infrastructure at ",
  },
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
      "An adaptive coding-practice platform that generates original problems tailored to each user's per-concept mastery across 20 data-structure and algorithm categories, so every session lands at the edge of their ability. Nothing is published until it survives differential testing between the reference solution and an independent oracle across authored cases and 50 seeded randomized inputs, and submitted code runs in throwaway, network-disabled Docker containers that cannot see the hidden answers.",
    stack: [
      "TypeScript",
      "Python",
      "C++",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://leetmind.patricksemler.dev",
  },
  {
    name: "Phobos",
    blurb:
      "A self-hosted AI chief of staff for one person — natural-language requests from a Telegram bot and a React dashboard become approved, durable task graphs, worked by 8 specialized agent roles spanning research, planning, execution, verification, repair, and independent review. When a task needs a capability it lacks, a self-extending forge generates, reviews, builds, tests, and installs a new TypeScript module, then runs it inside a networkless, read-only container that can reach host services only through a grant-checked broker — and nothing executes until the plan and its permissions are approved.",
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "React",
      "PostgreSQL",
      "Docker",
    ],
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
      "Diagnostic classification across 143 veterinary conditions — cut the classifier's peak memory by 74% while holding accuracy at 90.83%, and grounded Gemini care plans in each patient's own context instead of the disease name alone.",
    stack: ["Python", "scikit-learn", "Gemini", "RAG"],
    link: null,
  },
  {
    company: "ApplyFinch",
    title: "Full-Stack Developer",
    start: "2026-01",
    end: "now",
    summary:
      "An AI job-application platform built by a multi-developer team — shipped full-stack workflows for scraping, ranking, and document generation, and hardened the async pipeline against 4 failure modes it used to lose work to.",
    stack: [
      "React",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "Cloudflare Workers",
    ],
    link: null,
  },
  {
    company: "Maroon Fund",
    title: "Quantitative Developer",
    start: "2026-02",
    end: "2026-05",
    summary:
      "Backtesting and risk infrastructure — added Jensen's alpha, OLS beta, and tracking error against a 3-source SPY fallback, and raised backtest fidelity by modeling slippage, commissions, and forced exits.",
    stack: ["Python", "pandas", "Plotly", "pytest"],
    link: null,
  },
];
