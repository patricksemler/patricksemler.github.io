import { experience } from "@/content/profile";
import { Entry } from "./entry";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      {/* Ordered because it is a timeline — the sequence is the point. */}
      <ol className="-my-3 flex flex-col gap-4">
        {experience.map((role) => (
          <Entry
            key={`${role.company}-${role.start}`}
            title={role.title}
            href={role.link}
            meta={
              <p className="text-[0.75rem] text-faint tabular-nums">
                {role.start}
                <span aria-hidden className="mx-1.5">
                  →
                </span>
                {role.end === "now" ? "present" : role.end}
              </p>
            }
            subtitle={
              <p className="mt-1 text-[0.8125rem] text-dim">{role.company}</p>
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
