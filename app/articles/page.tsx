import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteNav } from "@/components/chrome";
import { articles, formatArticleDate } from "@/content/articles";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `Articles — ${profile.name}`,
  description: `Articles by ${profile.name} about software engineering, AI, and building products.`,
};

export default function ArticlesPage() {
  return (
    <>
      <a href="#articles" className="skip-link">
        Skip to articles
      </a>

      <div className="page-shell">
        <SiteNav />

        <header>
          <h1>Articles</h1>
        </header>

        <main id="articles" className="article-index">
          {/* Each row is an entry like the ones on the front page — title on
              the left, date on the right — so the list reads as the same
              kind of thing. */}
          <ol className="entry-list">
            {articles.map((article) => (
              <li key={article.slug} className="entry">
                <div className="entry-heading">
                  <h2>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="entry-link"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <time className="entry-date" dateTime={article.publishedAt}>
                    {formatArticleDate(article.publishedAt)}
                  </time>
                </div>
              </li>
            ))}
          </ol>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
