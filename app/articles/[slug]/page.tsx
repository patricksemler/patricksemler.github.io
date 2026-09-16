import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articles,
  formatArticleDate,
  getArticle,
  type ArticleBlock,
} from "@/content/articles";
import { profile } from "@/content/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} — ${profile.name}`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <a href="#article" className="skip-link">
        Skip to article
      </a>

      <div className="page-shell article-page-shell">
        <nav className="article-nav" aria-label="Article navigation">
          <Link href="/" className="quiet-link">
            {profile.name}
          </Link>
          <Link href="/articles" className="quiet-link">
            All articles
          </Link>
        </nav>

        <main id="article">
          <article>
            <header className="article-header">
              <p className="eyebrow">Article</p>
              <h1 className="article-title">{article.title}</h1>
              <time
                className="article-published"
                dateTime={article.publishedAt}
              >
                {formatArticleDate(article.publishedAt)}
              </time>
            </header>

            <div className="article-body">
              {article.content.map((block, index) => (
                <ArticleBlockView key={`${block.type}-${index}`} block={block} />
              ))}
            </div>
          </article>
        </main>

        <footer className="article-footer">
          <Link href="/articles" className="quiet-link">
            ← All articles
          </Link>
        </footer>
      </div>
    </>
  );
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "heading":
      return <h2>{block.text}</h2>;
    case "list":
      const List = block.ordered ? "ol" : "ul";

      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    case "image":
      return (
        <figure>
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width}
            height={block.height}
            sizes="(max-width: 768px) calc(100vw - 2rem), 736px"
            className="article-image"
            unoptimized
          />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
  }
}
