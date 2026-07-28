import { projects } from "@/content/profile";
import { Entry } from "./entry";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      {/* Unordered — the arrangement is editorial, not a ranking. */}
      <ul className="-my-3 flex flex-col gap-4">
        {projects.map((project) => (
          <Entry
            key={project.name}
            title={project.name}
            href={project.link}
            body={project.blurb}
            stack={project.stack}
            stackLabel={`${project.name} technologies`}
          />
        ))}
      </ul>
    </Section>
  );
}
