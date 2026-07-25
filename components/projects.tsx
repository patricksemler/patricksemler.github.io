import { projects } from "@/content/profile";
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
              <h3 className="text-[1rem] font-medium text-ink">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-colors hover:text-cyan"
                  >
                    {project.name}
                    <Arrow />
                  </a>
                ) : (
                  project.name
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
