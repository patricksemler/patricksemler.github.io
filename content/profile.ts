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
    "Computer science student building full-stack and AI/LLM products.",
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
    text: " who likes building software for problems I run into. I work on full-stack products at ",
  },
  { text: "Finch", href: "https://applyfinch.com" },
  {
    text: " and research tools at A&M, and I spend my own time building ",
  },
  { text: "LeetMind", href: "https://leetmind.patricksemler.dev" },
  { text: " and " },
  { text: "LiftLedger", href: "https://liftledger.patricksemler.dev" },
  {
    text: ". I still enjoy the same part of programming that hooked me early on: figuring out why something broke and making it work better the next time.",
  },
];

/* --------------------------------------------------------------------------
 * Links. `label` is what renders; order is preserved.
 *
 * Email is rendered beside these links by the intro component so every way
 * to get in touch stays in one compact row.
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
      "I built LeetMind because I wanted coding practice that focused on the topics I was actually weak at. It tracks Elo ratings across 20 algorithm concepts and generates problems aimed at each learner's gaps, then checks every generated problem with authored tests, an independent solution, and 50 reproducible randomized inputs before publishing it. Python and C++ submissions run in isolated Docker containers without access to the network, hidden tests, or expected answers.",
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
    name: "LiftLedger",
    blurb:
      "I built LiftLedger to make workout and nutrition tracking feel less like data entry. One dashboard combines Hevy workouts, Apple Health, and meals logged over Telegram, with a muscle-heatmap body chart, goal tracking, and a tool-calling AI assistant. The Telegram logger turns meal photos and text into calorie and macro entries, grounding the values in USDA data.",
    stack: [
      "TypeScript",
      "React",
      "Hono",
      "PostgreSQL",
      "Vercel AI SDK",
      "Vercel",
    ],
    link: "https://liftledger.patricksemler.dev",
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
    title: "Research Software Engineer",
    start: "2026-08",
    end: "now",
    summary:
      "Built a five-stage U.S. beef supply-chain simulator with weighted representative agents that runs 30 million head over 10 years and 250 trials in under 0.6 seconds, fed by an automated pipeline that turns 179,206 rows from four USDA ERS sources into 11 annual profiles.",
    stack: ["React", "TypeScript"],
    link: null,
  },
  {
    company: "Texas A&M University",
    title: "Machine Learning Research Engineer",
    start: "2026-06",
    end: "2026-08",
    summary:
      "Cut a veterinary classifier's peak memory use by 74%, from 2.6 GB to 689 MB, so it could deploy on Vercel while keeping 90.83% accuracy. Also built a RAG pipeline with Voyage embeddings, Supabase pgvector, and dual-query reciprocal-rank fusion that retrieves the correct source nearly 1.5× as often as single-query search.",
    stack: [
      "Python",
      "Django",
      "scikit-learn",
      "Supabase",
      "pgvector",
      "Gemini",
      "RAG",
    ],
    link: null,
  },
  {
    company: "Finch",
    title: "Software Engineer Intern",
    start: "2026-01",
    end: "now",
    summary:
      "Rebuilt onboarding as a resume-first flow alongside a new job board, cutting signup-to-dashboard time ~99% in automated testing, and built a job-matching pipeline that ranks jobs by fit, recency, and network signals with tailored resumes and cover letters.",
    stack: [
      "React",
      "TypeScript",
      "Flask",
      "PostgreSQL",
      "Supabase",
      "Cloudflare Workers",
    ],
    link: "https://applyfinch.com",
  },
];
