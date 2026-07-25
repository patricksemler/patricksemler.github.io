import { bio, links, profile } from "@/content/profile";
import { Arrow, Metrics } from "./section";

export function Intro() {
  return (
    <header className="relative z-10">
      {/* No shadow, no halo, no second copy — a terminal draws a glyph into
          its cell and stops. See the note in globals.css. */}
      <h1 className="text-display font-semibold tracking-tight text-ink">
        {profile.name}
      </h1>

      <p className="mt-2.5 text-[0.875rem] text-dim">
        {`Texas A&M CS ’28 · ${profile.location}`}
      </p>

      {/* The lead paragraph sits a notch above body prose — it is the only
          thing on the page that has to be read from the top. */}
      <p className="mt-8 font-sans text-[1.0625rem] leading-[1.75] text-dim">
        {bio.map((part, i) =>
          part.href ? (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-line-strong decoration-1 underline-offset-[3px] transition-colors hover:decoration-cyan"
            >
              {part.text}
            </a>
          ) : (
            <Metrics key={i} text={part.text} />
          ),
        )}
      </p>

      <nav aria-label="Profile links" className="mt-7">
        <ul className="flex flex-wrap gap-x-7 gap-y-1">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-block py-1 text-[0.875rem] text-dim transition-colors hover:text-ink"
                >
                  {link.label}
                  <Arrow />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
