import Background from "@/components/Background";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function HomePage() {
  useSectionReveal();

  return (
    <>
      <Seo />
      <Background />
      <Topbar />

      <main id="top">
        <Hero />
        <div className="content">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Connect />
        </div>
      </main>

      <Footer />
    </>
  );
}
