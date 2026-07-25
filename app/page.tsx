import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
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

        <main id="main" className="mt-16 flex flex-col gap-16">
          <Experience />
          <Projects />
          <Education />
          <Stack />
        </main>

        <footer className="relative z-10 mt-16 border-t border-line pt-6">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[0.75rem] text-faint">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Built with Next.js</p>
          </div>
        </footer>
      </div>
    </>
  );
}
