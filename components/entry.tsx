import type { ReactNode } from "react";
import { Metrics, TagList } from "./section";

/**
 * One entry — a project or a role. The two were the same block all along: a
 * title, a paragraph, a row of tags, optionally somewhere to go. Experience
 * adds the date range beside the title and the company beneath it, and that
 * difference is the whole of it, so it is two optional slots rather than two
 * components.
 *
 * `meta` sits at the far end of the title line; `subtitle` on its own line
 * under it. Both are passed in as nodes because their type is the caller's
 * business — a date range is not a company name and should not have to
 * pretend to be.
 */
export function Entry({
  title,
  href,
  meta,
  subtitle,
  body,
  stack,
  stackLabel,
}: {
  title: string;
  href: string | null;
  meta?: ReactNode;
  subtitle?: ReactNode;
  body: string;
  stack: readonly string[];
  stackLabel: string;
}) {
  return (
    <li className="entry group">
      {/* Stacked on narrow screens. Left to wrap, the date sits beside short
          titles and under long ones, so the column of dates moves from entry
          to entry; it only shares the line once there is reliably room for
          every title.

          The right padding is the arrow's berth — it is parked in the corner,
          and nothing on this line may run under it. Only where there is an
          arrow, though: reserved unconditionally it pulls the date range in
          from the column edge on every entry to make room for nothing. */}
      <div
        className={`flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-8 ${href ? "pr-7" : ""}`}
      >
        <h3 className="aberrate text-[1rem] font-medium text-ink">
          {href ? (
            /* Only the title is the link, and only the title is its accessible
               name — the box-wide hit area is a bare rectangle drawn by CSS,
               so a screen reader is told "LeetMind", not the whole blurb.
               It takes no hover colour: the pointer is over the whole entry
               long before it is over the title, so colouring the title would
               be pointing at the wrong thing. The lit box says the entry is
               live and the arrow says where it goes. */
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="entry-link"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {meta}
      </div>

      {href && <CornerArrow />}
      {subtitle}

      <p
        className={`${subtitle ? "mt-4" : "mt-2.5"} font-sans text-[1rem] leading-[1.7] text-dim`}
      >
        <Metrics text={body} />
      </p>

      <TagList items={stack} label={stackLabel} />
    </li>
  );
}

/**
 * The outbound mark for an entry, parked in its top-right corner rather than
 * trailing the title. It is the only thing standing for a hit area the size of
 * the whole block, so it belongs at the block's edge — hung off the title it
 * would keep pointing at the title.
 *
 * Grey, and outside the heading so it takes no fringe: the misregistration is
 * a property of printed ink, and an arrow that is chrome rather than text has
 * no business picking up the same defect.
 *
 * The box is exactly one title line tall (1rem × 1.65) and starts where that
 * line starts, so centring inside it puts the arrow on the title's optical
 * centre without either measurement depending on the arrow's own size.
 */
function CornerArrow() {
  return (
    <span
      aria-hidden
      className="absolute top-[calc(0.75rem-1px)] right-[calc(1rem-1px)] flex h-[1.65rem] items-center text-[1.15rem] leading-none text-faint transition-colors group-hover:text-cyan"
    >
      ↗
    </span>
  );
}
