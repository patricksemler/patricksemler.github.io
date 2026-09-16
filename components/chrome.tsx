import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";

/**
 * The masthead on every page but the front one. The name points home; the
 * right-hand slot holds whatever the page sits beneath — the articles index
 * from inside an article, nothing from the index itself, since the title
 * directly below already says where you are.
 */
export function SiteNav({ children }: { children?: ReactNode }) {
  return (
    <nav className="site-nav" aria-label="Site">
      <Link href="/" className="text-link">
        {profile.name}
      </Link>
      {children}
    </nav>
  );
}

/** The same two lines on every page, under the same rule. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with Next.js &amp; Tailwind CSS</p>
    </footer>
  );
}
