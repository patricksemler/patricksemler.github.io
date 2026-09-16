import type { Metadata } from "next";
import Link from "next/link";
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

      <div className="page-shell article-page-shell">
        <header className="collection-header">
          <Link href="/" className="quiet-link">
            {profile.name}
          </Link>
          <h1 className="collection-title">Articles</h1>
        </header>

        <main id="articles" className="article-index">
          <ol className="article-list">
            {articles.map((article) => (
              <li key={article.slug} className="article-list-item">
                <h2>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="article-list-link"
                  >
                    {article.title}
                  </Link>
                </h2>
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
              </li>
            ))}
          </ol>
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <Link href="/" className="quiet-link">
            Home
          </Link>
        </footer>
      </div>
    </>
  );
}
