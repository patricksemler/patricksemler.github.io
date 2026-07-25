import { stack } from "@/content/profile";
import { Section } from "./section";

export function Stack() {
  return (
    <Section id="stack" label="Stack">
      <dl className="flex flex-col gap-3.5">
        {stack.map((group) => (
          <div
            key={group.group}
            className="grid gap-x-8 gap-y-0.5 sm:grid-cols-[9rem_minmax(0,1fr)]"
          >
            <dt className="text-[0.75rem] text-cyan">{group.group}</dt>
            <dd className="text-[0.8125rem] text-dim">
              {group.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
