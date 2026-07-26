import { projects } from "@/content/profile";
import { ScrambleText } from "./scramble";
import { Arrow, Metrics, Section, TagList } from "./section";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      {/* Unordered — the arrangement is editorial, not a ranking. */}
      <ul className="-my-3 flex flex-col gap-4">
        {projects.map((project) => {
          const href = project.repo ?? project.demo;
          return (
            <li key={project.name} className="entry">
              {/* The name is spelled out for assistive tech rather than read
                  off the rendered text. Focus is one of the things that starts
                  the flicker, so a keyboard user would otherwise be announced
                  the substituted spelling at the exact moment they arrived.
                  Both labels settle to the same string the eye sees. */}
              <h3
                className="aberrate text-[1rem] font-medium text-ink"
                aria-label={project.name}
              >
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={project.name}
                    className="group transition-colors hover:text-cyan"
                  >
                    <ScrambleText text={project.name} />
                    <Arrow />
                  </a>
                ) : (
                  <ScrambleText text={project.name} />
                )}
              </h3>

              <p className="mt-2.5 font-sans text-[1rem] leading-[1.7] text-dim">
                <Metrics text={project.blurb} />
              </p>

              <TagList
                items={project.stack}
                label={`${project.name} technologies`}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
