# Patrick Semler — portfolio

Live at **[patricksemler.dev](https://patricksemler.dev)**.

My portfolio: one column, no navigation, no panels, nothing that slides in as
you scroll. I wanted something that felt like a terminal without dressing up as
one, so the whole effect comes from three small things — the shell path above my
name, a resting block cursor, and the `//` before each section. Everything else
is content and whitespace.

Next.js 16 (App Router) · Tailwind CSS 4 · TypeScript · statically prerendered.

## The design

**Type.** IBM Plex Mono does the structural work — name, headings, dates, tags,
labels. IBM Plex Sans takes over for anything meant to be read in paragraphs, so
the bio and the résumé bullets stay comfortable while the scaffolding keeps its
terminal texture.

**Colour.** Two accents on a deep indigo-black, and I use them sparingly:

| Token     | Role                                                    |
| --------- | ------------------------------------------------------- |
| `cyan`    | interactive — the shell path, stack labels, link hovers |
| `magenta` | identity — the cursor after my name, the `//` markers   |

Body copy sits in a calm lavender-grey. Between them the two accents show up
only a few dozen times on the entire page, which is the whole trick: a dense
résumé stays readable, and the page reads professional instead of costumed.

Numbers inside bullets (`83%`, `$0.01`, `75`) get pulled out in cyan
automatically — the `<Metrics>` helper in
[`components/section.tsx`](components/section.tsx) splits prose on numeric
tokens so I never have to mark them up by hand. That started as an
information-design decision (recruiters scan for figures) and turned out to add
exactly the colour texture the page needed.

**Layout.** A single 46rem column, centred, with generous gaps between sections.
There's no nav because the page isn't long enough to warrant one — cutting it
was the biggest simplification I made. Section headers are just `// LABEL`: a
magenta marker, the label, nothing else. Design tokens live in
[`app/globals.css`](app/globals.css).

## Accessibility

Built to WCAG 2.2 AA and checked against the rendered DOM rather than by eye:

- Zero contrast failures across all rendered text.
- One `h1` and a clean `H1 → H2 → H3` outline, labelled landmarks, no duplicate
  IDs, and an accessible name on every link.
- A skip link that actually works (verified with a real Tab press) and a visible
  focus ring on everything interactive.
- Profile links are padded past the 24px target minimum (§2.5.8) — they're a
  standalone nav row, so the inline-text exception doesn't cover them.
- No horizontal scroll at 320px.
- `prefers-reduced-motion` turns off transitions; `prefers-contrast: more` drops
  the scanline texture.
