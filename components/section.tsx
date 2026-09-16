import type { ReactNode } from "react";

/* Split on numeric tokens, keeping them, so figures can be picked out of a
   sentence. Two expressions because a global regex is stateful and `.test`
   on it would give different answers on alternate calls. */
const SPLIT_ON_NUMBER = /(\$?\d+(?:[.,]\d+)*%?)/g;
const IS_NUMBER = /^\$?\d/;

/**
 * Prose with its figures pulled forward. Everything measurable in this
 * résumé — 143 conditions, 74%, 4 failure modes — is the part worth reading
 * first, so it gets the signal colour and the surrounding sentence stays quiet.
 */
export function Metrics({ text }: { text: string }) {
  return (
    <>
      {text.split(SPLIT_ON_NUMBER).map((part, i) =>
        IS_NUMBER.test(part) ? (
          <span key={i} className="metric">
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
    <section aria-labelledby={`${id}-heading`} className="content-section">
      <h2 id={`${id}-heading`} className="section-label">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

/** Technology tags. Bordered rather than bracketed — quieter at this density,
 *  and the mono face already carries the terminal register.
 *
 *  Inert: no hover state, because a tag is not a control and lighting one up
 *  under the pointer promised a click that was never there. Inside a linked
 *  entry the whole block is the target now, and a tag that reacts on its own
 *  reads as a second, smaller target competing with it. */
export function TagList({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ul aria-label={label} className="tag-list">
      {items.map((item, index) => (
        <li key={item}>
          {item}
          {index < items.length - 1 && <span aria-hidden>·</span>}
        </li>
      ))}
    </ul>
  );
}

/** The outbound arrow used on every external link. */
export function Arrow() {
  return (
    <span aria-hidden className="arrow">
      ↗
    </span>
  );
}
