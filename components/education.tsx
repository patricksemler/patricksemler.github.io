import { education } from "@/content/profile";
import { Section } from "./section";

export function Education() {
  const honors = education.detail.find((d) => d.label === "honors");

  return (
    <Section id="education" label="Education">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
        <h3 className="text-[1rem] font-medium text-ink">{education.school}</h3>
        <p className="text-[0.75rem] text-faint tabular-nums">{`expected ${education.graduation}`}</p>
      </div>
      <p className="mt-1 text-[0.8125rem] text-dim">
        {`${education.degree} · 3.79 GPA`}
      </p>
      {honors ? (
        <p className="mt-4 font-sans text-[1rem] leading-[1.7] text-dim">
          {honors.value}
        </p>
      ) : null}
    </Section>
  );
}
