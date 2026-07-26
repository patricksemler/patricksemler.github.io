# Patrick Semler — portfolio

Live at **[patricksemler.dev](https://patricksemler.dev)**.

My portfolio: one column, no section nav, no panels, nothing that slides in as
you scroll. I wanted something that felt like a terminal without dressing up as
one, so the effect comes from a few small things — the mono face doing the
structural work, the `//` before each section, a scanline texture at 3% you only
notice if you go looking, and ink printed a hairline out of register the way a
tube misregisters it. A shell path sat above my name for a while and came out,
because it read as costume rather than register; the block cursor came back, but
after the name, where a terminal would actually leave it. Entry titles and
section markers flicker as you reach them, never far enough to stop being
readable. Everything else is content and whitespace.

Next.js 16 (App Router) · Tailwind CSS 4 · TypeScript · statically prerendered.

## The design

**Type.** IBM Plex Mono does the structural work — name, headings, dates, tags,
labels. IBM Plex Sans takes over for anything meant to be read in paragraphs, so
the bio and the one-line summaries stay comfortable while the scaffolding keeps
its terminal texture.

**Colour.** Two accents on a deep indigo-black, and I use them sparingly:

| Token     | Role                                                                       |
| --------- | -------------------------------------------------------------------------- |
| `cyan`    | signal — my email, the figures inside the prose, link and tag hovers, focus, the left of the fringe |
| `magenta` | identity — the `//` section markers, the cursor after my name, the right of the fringe              |

Body copy sits in a calm lavender-grey. Between them the two accents land on a
dozen elements in the whole page, which is the trick: a dense résumé stays
readable, and the page reads professional instead of costumed.

Numbers inside the prose (`144`, `83%`, `$0.01`) get pulled out in cyan
automatically — the `<Metrics>` helper in
[`components/section.tsx`](components/section.tsx) splits prose on numeric
tokens so I never have to mark them up by hand. That started as an
information-design decision (recruiters scan for figures) and turned out to add
exactly the colour texture the page needed.

**Layout.** A single 52rem column, centred, with generous gaps between sections.
There's no section nav because the page isn't long enough to warrant one —
cutting it was the biggest simplification I made, and the only nav landmark left
is the row of profile links under the bio. Section headers are just `// LABEL`:
a magenta marker, the label, nothing else. Every entry prints title, then dates,
then employer; below the `sm` breakpoint those stack in that order rather than
letting the date sit beside short titles and wrap under long ones. Design tokens
live in [`app/globals.css`](app/globals.css).

## Accessibility

Built to WCAG 2.2 AA and checked against the rendered DOM rather than by eye:

- Zero contrast failures across all rendered text. Worst case is 5.2:1, on the
  faint date line over an entry's hover fill — every other token clears 6.7:1.
- One `h1` and a clean `H1 → H2 → H3` outline, labelled landmarks, no duplicate
  IDs, and an accessible name on every link.
- A skip link that actually works (verified with a real Tab press) and a visible
  focus ring on everything interactive.
- Profile links are padded past the 24px target minimum (§2.5.8) — they're a
  standalone nav row, so the inline-text exception doesn't cover them.
- No horizontal scroll at 320px.
- `prefers-reduced-motion` turns off transitions and the flicker, and leaves the
  cursor lit rather than mid-blink; `prefers-contrast: more` drops the scanline
  texture and the fringe.
