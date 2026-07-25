# Patrick Semler — portfolio

A single-column software engineering portfolio. Deliberately quiet: no
navigation, no panels, no chrome. The terminal character comes from the
monospace face, a cyan/magenta duotone, and three small signals — the shell
path above the name, a resting block cursor, and the `//` section markers.
Everything else is content and whitespace.

Next.js 16 (App Router) · Tailwind CSS 4 · TypeScript · statically prerendered.

## Editing the content

**Everything you'll want to change lives in [`content/profile.ts`](content/profile.ts).**

The opening paragraph is the one piece worth attention. It's an array of parts
so a phrase can carry a link — give a part an `href` and it renders as an inline
link, leave it off and it's plain text:

```ts
{ text: "I'm a Computer Science student at " },
{ text: "Texas A&M", href: "https://www.tamu.edu" },
```

Two things to check before you publish:

- Only **Texas A&M** is linked in the bio. Apply Finch, Maroon Fund, LeetMind,
  and Phobos are named but not linked — add `href` values when you have URLs.
- Both projects have `repo: null` and `demo: null`, so their titles don't link
  anywhere. Add URLs and the title becomes a link with an `↗` automatically.

The résumé is served from [`public/resume.pdf`](public/resume.pdf).

## Running it

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build
```

Every route prerenders to static HTML, so it deploys anywhere.

## How the design works

**Type.** IBM Plex Mono carries the interface — name, headings, dates, tags,
labels. IBM Plex Sans carries prose meant to be read in paragraphs, so the bio
and the résumé bullets stay comfortable while everything structural keeps the
terminal texture.

**Colour.** Two accents on deep indigo-black, used sparingly:

| Token     | Role                                                    |
| --------- | ------------------------------------------------------- |
| `cyan`    | interactive — the shell path, stack labels, link hovers |
| `magenta` | identity — the cursor after the name, the `//` markers  |

Body copy is a calm lavender-grey, and the two accents together appear only a
few dozen times on the whole page. That restraint is what keeps a dense résumé
readable and the page reading professional rather than costumed.

Figures inside bullets (`83%`, `$0.01`, `75`) are pulled out in cyan by the
`<Metrics>` helper in [`components/section.tsx`](components/section.tsx). It
splits prose on numeric tokens, so nothing has to be marked up by hand — this
is an information-design choice first (recruiters scan for numbers) that
happens to add colour texture.

Dates are ISO (`2026-06 → present`), set in `content/profile.ts`.

**Layout.** One 46rem column, centred, with large gaps between sections. There
is no navigation because the page is short enough not to need it — removing it
was the single biggest simplification.

- Section headers are `// LABEL`: a magenta marker and the label, nothing else.

Tokens live in [`app/globals.css`](app/globals.css).

## Accessibility

Built to WCAG 2.2 AA and verified against the rendered DOM, not by eye:

- Zero contrast failures across all rendered text.
- One `h1` and a clean `H1 → H2 → H3` outline; labelled landmarks; no duplicate
  IDs; every link has an accessible name.
- A working skip link (verified with a real Tab press) and a visible focus ring
  on every interactive element.
- Profile links are padded to clear the 24px target minimum (§2.5.8) — they're a
  standalone nav row, so the inline-text exception doesn't apply to them.
- No horizontal scroll at 320px.
- `prefers-reduced-motion` disables transitions; `prefers-contrast: more` drops
  the scanline texture.
