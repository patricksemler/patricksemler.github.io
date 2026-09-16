import Link from "next/link";
import { bio, links, profile } from "@/content/profile";
import { Arrow } from "./section";

export function Intro() {
  return (
    <header className="site-header">
      <div className="header-row">
        <div>
          <h1>{profile.name}</h1>
          <p className="identity-line">{`Texas A&M CS ’28 · ${profile.location}`}</p>
        </div>

        <nav aria-label="Contact and profile links">
          <ul className="profile-links">
            <li>
              <Link href="/articles" className="text-link">
                Articles
                <span aria-hidden className="arrow">
                  →
                </span>
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.name}`}
                className="text-link"
              >
                Email
                <Arrow />
              </a>
            </li>
            {links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.label}
                    className="text-link"
                  >
                    {link.label}
                    <Arrow />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="intro-grid">
        <p className="eyebrow">{profile.role}</p>
        <div className="intro-copy">
          <p className="bio">
            {bio.map((part, i) =>
              part.href ? (
                <a
                  key={i}
                  href={part.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  {part.text}
                </a>
              ) : (
                part.text
              ),
            )}
          </p>
        </div>
      </div>
    </header>
  );
}
