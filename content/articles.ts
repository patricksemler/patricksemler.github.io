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
      ordered?: boolean;
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
    slug: "ai-can-make-you-productive-without-making-you-competent",
    title: "AI Can Make You Productive Without Making You Competent",
    publishedAt: "2026-09-16",
    description:
      "What a failed hackathon taught me about building with coding agents without giving up engineering judgment.",
    content: [
      {
        type: "paragraph",
        text: "At HowdyHack 2025, my team had a frontend that seemed to work, a backend that seemed to work, and an application that did not.",
      },
      {
        type: "paragraph",
        text: "We were building a fitness app that would let someone upload a video of an exercise, analyze the movement, and return feedback on their form. I worked on the frontend, while a teammate worked on the backend and computer vision. We were making use of Kiro, AWS's agentic coding IDE, and because agentic coding was still new to us, we assumed the difficult part was generating the individual pieces. Once those pieces existed, connecting them felt like something the agent could handle for us.",
      },
      {
        type: "heading",
        text: "When Two Working Pieces Do Not Make a Working System",
      },
      {
        type: "paragraph",
        text: "I pulled the backend branch into the codebase with my frontend and told the agent to connect them. The first attempt failed. We changed the prompt and tried again, then kept doing roughly the same thing for far too long.",
      },
      {
        type: "paragraph",
        text: "Looking back, we were playing a kind of prompt lottery. Instead of improving our understanding of the system, we kept hoping the next generation would produce the missing answer.",
      },
      {
        type: "paragraph",
        text: "We had never properly decided where uploaded videos would live, how preprocessing would work, how the frontend would send a video to the backend, what the backend would return, or whether we needed a database. Sometimes we could get the upload closer to working, only to find that the analysis could not make its way back to the frontend. We were trying to debug an implementation before we had agreed on the architecture.",
      },
      {
        type: "paragraph",
        text: "Near the end, I think we came closest to making progress when we started rebuilding the backend inside a codebase that already had access to the frontend. By then, the clock was running out. We had been awake for almost 24 hours, and we had no working product to present.",
      },
      {
        type: "paragraph",
        text: "We failed the hackathon.",
      },
      {
        type: "paragraph",
        text: "I am glad we did. I was not going to understand how to work effectively with coding agents the first time I used them, and that failure forced me to see a problem I probably would have missed if the demo had barely worked.",
      },
      {
        type: "heading",
        text: "Productivity Is Not Competence",
      },
      {
        type: "paragraph",
        text: 'The lesson I took from that weekend was larger than "plan out your APIs first."',
      },
      {
        type: "paragraph",
        text: "AI coding is another increase in the level at which developers can work. The syntax matters less when I can describe a feature and have an agent implement much of it. That gives me more time to think about requirements, architecture, edge cases, interfaces, and testing.",
      },
      {
        type: "paragraph",
        text: "It also makes it easier to produce a large amount of code without understanding the decisions inside it.",
      },
      {
        type: "paragraph",
        text: "AI can make you productive without making you competent.",
      },
      {
        type: "paragraph",
        text: "If I cannot explain why a piece of my system exists, what assumption it depends on, or where I would look when it fails, I have given up ownership of the decision. The code may still work for a while. The problem appears when it stops working and my only debugging strategy is another prompt.",
      },
      {
        type: "heading",
        text: "How I Build With Agents Now",
      },
      {
        type: "paragraph",
        text: "If I rebuilt that fitness app today, I would start with the whole system rather than two independently generated halves.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Define the product before the implementation. My team would agree on the user flow, the core features, and what we are intentionally leaving out.",
          "Research the engineering choices. I would use AI to compare libraries, frameworks, and approaches for tasks such as pose detection, video processing, and storage. AI is extremely useful for research, provided I still make and understand the decisions.",
          "Prove the smallest complete system. Instead of partially supporting push-ups, sit-ups, and several other exercises, I would first make one push-up flow work from video upload through analysis and feedback.",
          "Expand from a shared baseline. Once the frontend and backend work together, that version goes on the main branch. Team members can create feature branches from the same working foundation, then merge and test continuously.",
          "Review what the agent builds. I use AI to generate tests, inspect logs, resolve merge conflicts, and suggest debugging paths. I also read the code and ask the model to explain anything I do not understand.",
        ],
      },
      {
        type: "paragraph",
        text: 'This approach also gives every member of a team meaningful work. At HowdyHack, dividing the project into "frontend" and "backend" left our other teammates with relatively little engineering work while we struggled with integration. Starting from a working baseline would have let us split by features instead, increasing overall productivity.',
      },
      {
        type: "heading",
        text: "What Changed for Me",
      },
      {
        type: "paragraph",
        text: "I now use this process on work that is much less forgiving than a hackathon prototype.",
      },
      {
        type: "paragraph",
        text: 'While working on Finch\'s job-priority ranking, for example, I could have asked an agent to "build a better matching algorithm." Instead, I first had to decide what better matching actually meant.',
      },
      {
        type: "paragraph",
        text: "A recently posted job may seem like a strong opportunity, but recency means very little if the user is not eligible for the role. A high resume match can also be misleading if the position does not support sponsorship and the applicant requires it. Those are product decisions before they are implementation details.",
      },
      {
        type: "paragraph",
        text: "I used AI to research possible scoring factors, challenge the logic, consider drawbacks, and turn the resulting decisions into an implementation plan. The final system considers factors such as eligibility, fit, recency, and network signals, then gives users explanations for the ranking. After the implementation was generated, I reviewed the code and asked for explanations where I needed them.",
      },
      {
        type: "paragraph",
        text: "That is the role I want AI to play in my engineering work. It can research faster than I can, generate code faster than I can type it, and help me inspect problems from several directions. I still need to own the reasoning that gives those capabilities direction.",
      },
      {
        type: "paragraph",
        text: "AI will write more of the code I work with over time. That makes good decisions more valuable.",
      },
      {
        type: "paragraph",
        text: "The engineer who benefits most will be the one who still knows what should be built, and can tell when the machine got it wrong.",
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
