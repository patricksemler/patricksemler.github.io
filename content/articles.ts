export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type Article = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  content: readonly ArticleBlock[];
};

/**
 * Articles stay as plain data so the index, static routes, metadata, and body
 * all share one source of truth. The block set intentionally mirrors the
 * compact rhythm of a LinkedIn post: short paragraphs, occasional headings,
 * a restrained list, and an image only when it helps explain the idea.
 */
export const articles: readonly Article[] = [
  {
    slug: "trustworthy-generated-coding-problems",
    title: "Generated code is easy. Trustworthy problems are harder.",
    publishedAt: "2026-09-16",
    description:
      "What building LeetMind taught me about verifying AI-generated coding problems before anyone tries to solve them.",
    content: [
      {
        type: "paragraph",
        text: "A generated coding problem is only useful if the prompt, examples, tests, and expected answer all agree. If one of them drifts, the learner ends up debugging the platform instead of practicing the concept.",
      },
      {
        type: "paragraph",
        text: "That became one of the most important design constraints in LeetMind. Generating a plausible problem was the easy part. Deciding whether it was safe to publish took a separate system.",
      },
      {
        type: "heading",
        text: "The failure mode",
      },
      {
        type: "paragraph",
        text: "Language models are good at producing code that looks finished. That surface quality can hide small contradictions: an edge case missing from the explanation, a sample that follows different rules, or a reference solution that works only for the obvious inputs.",
      },
      {
        type: "paragraph",
        text: "So I stopped treating generation as the final step. Every candidate problem now has to move through a verification pipeline before it reaches a learner.",
      },
      {
        type: "image",
        src: "/articles/verification-pipeline.svg",
        alt: "A four-step verification pipeline: generate a candidate problem, run authored tests, compare an independent solution, then publish or reject it.",
        width: 1200,
        height: 675,
        caption: "The publishing path is intentionally narrow: a candidate advances only after every check agrees.",
      },
      {
        type: "heading",
        text: "What the pipeline checks",
      },
      {
        type: "list",
        items: [
          "Authored examples establish the basic contract.",
          "An independent solution creates a second source of truth.",
          "Fifty reproducible randomized inputs look for disagreements the examples missed.",
          "Submissions run in isolated Docker containers without network access or access to hidden answers.",
        ],
      },
      {
        type: "paragraph",
        text: "The important part is not any one check. It is the disagreement between checks. When two independent paths produce different answers, the problem is rejected instead of asking the learner to absorb that uncertainty.",
      },
      {
        type: "heading",
        text: "The lesson",
      },
      {
        type: "paragraph",
        text: "AI output becomes much more useful when the system around it is allowed to say no. Generation creates options; verification decides what deserves trust.",
      },
      {
        type: "paragraph",
        text: "That principle now shapes how I think about AI features in general: the model can propose, but the product still needs an independent way to check the work.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatArticleDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
