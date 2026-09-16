import { Experience } from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="page-shell">
        <Intro />

        <main id="main" className="section-stack">
          <Projects />
          <Experience />
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </footer>
      </div>
    </>
  );
}
