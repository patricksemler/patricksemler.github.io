import type { ReactNode } from "react";

/* Split on numeric tokens, keeping them, so figures can be picked out of a
   sentence. Two expressions because a global regex is stateful and `.test`
   on it would give different answers on alternate calls. */
const SPLIT_ON_NUMBER = /(\$?\d+(?:[.,]\d+)*%?)/g;
const IS_NUMBER = /^\$?\d/;

/**
 * Prose with its figures pulled forward. Everything measurable in this
 * résumé — 83%, $0.01, 75/min — is the part worth reading first, so it gets
 * the signal colour and the surrounding sentence stays quiet.
 */
export function Metrics({ text }: { text: string }) {
  return (
    <>
      {text.split(SPLIT_ON_NUMBER).map((part, i) =>
        IS_NUMBER.test(part) ? (
          <span key={i} className="text-cyan">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** A section marker: `// LABEL`. */
export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="relative z-10">
      {/* Only the label lives inside the heading. The marker is decoration,
          and decoration nested in a heading ends up in its accessible name no
          matter how it is hidden. */}
      {/* Set on the character cell, the way a terminal would print it: no
          letterspacing, and exactly one mono advance (0.6em) between the
          marker and the label rather than an arbitrary gap. */}
      <div className="mb-6 flex items-center gap-[0.6em] text-[0.75rem] tracking-normal text-faint uppercase">
        <span aria-hidden className="text-magenta">
          {"//"}
        </span>
        <h2 id={`${id}-heading`} className="shrink-0 font-normal">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

/** Technology tags. Bordered rather than bracketed — quieter at this density,
 *  and the mono face already carries the terminal register. */
export function TagList({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ul aria-label={label} className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-line px-2.5 py-1 text-[0.6875rem] text-dim transition-colors hover:border-cyan/40 hover:text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** The outbound arrow used on every external link. */
export function Arrow() {
  return (
    <span
      aria-hidden
      className="ml-1.5 inline-block -translate-y-[0.12em] align-middle text-[1.15em] leading-none text-faint transition-colors group-hover:text-cyan"
    >
      ↗
    </span>
  );
}
