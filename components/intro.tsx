import { bio, links, profile } from "@/content/profile";
import { ScrambleText } from "./scramble";
import { Arrow, Metrics } from "./section";

export function Intro() {
  return (
    <header className="relative z-10">
      {/* A hairline fringe either side of the ink, cyan left and magenta right —
          the guns landing fractionally apart, not a glow. See globals.css. */}
      <h1 className="aberrate text-display font-semibold tracking-tight text-ink">
        {profile.name}
        <span aria-hidden className="cursor" />
      </h1>

      <p className="mt-2.5 text-[0.875rem] text-dim">
        {`Texas A&M CS ’28 · ${profile.location}`}
      </p>

      {/* The address written out rather than hidden behind the word "Email".
          It sits directly under the identity line because that is where a
          reader looks for it, and it takes the signal colour because it is the
          one thing on this page anyone is meant to act on. Still a mailto —
          spelling it out costs nothing and works for the people who would
          rather copy it than have a client opened for them.

          Deliberately the one piece of text on the page that does not flicker.
          Selecting an address means pressing inside it, which follows the
          hover that would have started a run, so a slow drag can lift a
          substituted character into the clipboard. Everywhere else that is a
          misspelled job title; here it is mail that bounces. */}
      <p className="mt-1.5">
        <a
          href={`mailto:${profile.email}`}
          className="text-[0.875rem] text-cyan underline decoration-transparent decoration-1 underline-offset-[3px] transition-colors hover:decoration-cyan"
        >
          {profile.email}
        </a>
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
              /* Ruled with a border rather than underlined. A text shadow is
                 cast by an element's decorations too, so an underline here came
                 out fringed in cyan and magenta — brighter, in places, than the
                 dim rule it was fringing. A border is not text and no shadow
                 can reach it. See the note in globals.css.

                 A border sits at the bottom of the inline content box, which is
                 one descender below the baseline — 4.5px at this size, where
                 the old underline-offset put it at 3px. There is no padding
                 that closes a 1.5px gap in the wrong direction, and it is not
                 worth a background-gradient rule pinned to a hardcoded offset
                 to recover, so the rule now sits a pixel and a half lower. */
              className="aberrate box-decoration-clone border-b border-line-strong text-ink transition-colors hover:border-cyan"
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
                  aria-label={link.label}
                  className="group inline-block py-1 text-[0.875rem] text-dim transition-colors hover:text-ink"
                >
                  <ScrambleText text={link.label} />
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
