import { experience } from "@/content/profile";
import { Metrics, Section, TagList } from "./section";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      {/* Ordered because it is a timeline — the sequence is the point. */}
      <ol className="-my-3 flex flex-col gap-4">
        {experience.map((role) => (
          <li key={`${role.company}-${role.start}`} className="entry">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
              <h3 className="text-[1rem] font-medium text-ink">{role.title}</h3>
              <p className="text-[0.75rem] text-faint tabular-nums">
                {role.start}
                <span aria-hidden className="mx-1.5">
                  →
                </span>
                {role.end === "now" ? "present" : role.end}
              </p>
            </div>

            <p className="mt-1 text-[0.8125rem] text-dim">{role.company}</p>

            {/* One line, not three bullets. The bulleted version is the
                résumé's job, and printing it twice is what made this page a
                duplicate of the PDF. */}
            <p className="mt-4 font-sans text-[1rem] leading-[1.7] text-dim">
              <Metrics text={role.summary} />
            </p>

            <TagList
              items={role.stack}
              label={`Technologies used at ${role.company}`}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
