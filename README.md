# Patrick Semler — Portfolio

Personal portfolio website for Patrick Semler, featuring selected projects,
professional experience, contact information, and a downloadable résumé.

**Live site:** [patricksemler.dev](https://patricksemler.dev)

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- GitHub Pages

The site is statically exported for fast, serverless hosting.

## Getting started

### Prerequisites

- Node.js 22
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production static export in `out/` |
| `npm run lint` | Check the project with ESLint |

## Updating the portfolio

Most portfolio content is centralized in
[`content/profile.ts`](content/profile.ts), including profile details, links,
projects, and experience.

- Update site content in [`content/profile.ts`](content/profile.ts).
- Replace [`public/resume.pdf`](public/resume.pdf) to update the résumé.
- Edit global styles and design tokens in
  [`app/globals.css`](app/globals.css).
- Update page metadata in [`app/layout.tsx`](app/layout.tsx).

## Deployment

Pushes to `main` are built and deployed to GitHub Pages through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow
installs dependencies, creates the static export, and publishes the generated
`out/` directory.
