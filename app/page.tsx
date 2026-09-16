import { SiteFooter } from "@/components/chrome";
import { Experience } from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="page-shell">
        <Intro />

        <main id="main">
          <Projects />
          <Experience />
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
