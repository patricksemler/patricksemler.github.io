import { leadership } from "@/content/profile";
import { Entry } from "./entry";
import { Section } from "./section";

export function Leadership() {
  return (
    <Section id="leadership" label="Leadership">
      {/* Ordered because it is a timeline — the sequence is the point. */}
      <ol className="entry-list">
        {leadership.map((role) => (
          <Entry
            key={`${role.organization}-${role.start}`}
            title={role.title}
            href={null}
            meta={
              <p className="entry-date">
                {role.start}
                <span aria-hidden>–</span>
                {role.end === "now" ? "present" : role.end}
              </p>
            }
            subtitle={
              <p className="entry-subtitle">
                {role.link ? (
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="entry-subtitle-link"
                  >
                    {role.organization}
                    <span aria-hidden className="company-arrow">
                      ↗
                    </span>
                  </a>
                ) : (
                  role.organization
                )}
              </p>
            }
            body={role.summary}
            stack={role.skills}
            stackLabel={`Skills used at ${role.organization}`}
          />
        ))}
      </ol>
    </Section>
  );
}
