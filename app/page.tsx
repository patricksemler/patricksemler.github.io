import { Experience } from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="skip-link border border-cyan bg-bg px-4 py-2 text-cyan"
      >
        Skip to content
      </a>

      {/* The frame. Wide enough that the page reads as a document rather than
          a column, with the prose inside it still held to a measure. */}
      <div className="mx-auto w-full max-w-[52rem] px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
        <Intro />

        {/* Projects lead. The résumé is linked in the header and covers the
            employment record in order; what this page adds is the work, so the
            work goes first and experience corroborates it.

            Education and Stack both came out — the résumé carries the degree
            and the coursework, and the per-entry tags already say what each
            thing was built with, which is the only context a tool list has. */}
        <main id="main" className="mt-16 flex flex-col gap-16">
          <Projects />
          <Experience />
        </main>

        {/* The rule spans the column, so it promises two corners and the
            colophon has to hold the far one — left on its own, the copyright
            reads as a row that failed to finish. The credit names the type and
            the stylesheet rather than the framework: those are the two things
            a reader can see, and neither is a claim the page has to keep
            earning. */}
        <footer className="relative z-10 mt-16 border-t border-line pt-6">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[0.75rem] text-faint">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Built with IBM Plex &amp; Tailwind</p>
          </div>
        </footer>
      </div>
    </>
  );
}
