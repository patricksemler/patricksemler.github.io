import { experience } from "@/content/profile";
import { Entry } from "./entry";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      {/* Ordered because it is a timeline — the sequence is the point. */}
      <ol className="entry-list">
        {experience.map((role) => (
          <Entry
            key={`${role.company}-${role.start}`}
            title={role.title}
            href={role.link}
            meta={
              <p className="entry-date">
                {role.start}
                <span aria-hidden>–</span>
                {role.end === "now" ? "present" : role.end}
              </p>
            }
            subtitle={
              <p className="entry-subtitle">{role.company}</p>
            }
            /* One line, not three bullets. The bulleted version is the
               résumé's job, and printing it twice is what made this page a
               duplicate of the PDF. */
            body={role.summary}
            stack={role.stack}
            stackLabel={`Technologies used at ${role.company}`}
          />
        ))}
      </ol>
    </Section>
  );
}
