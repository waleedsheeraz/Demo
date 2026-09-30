import Head from "next/head";
import Background from "@/components/Background";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function HomePage() {
  useSectionReveal();

  return (
    <>
      <Head>
        <title>Rob Hill — Software Automation Engineer</title>
        <meta
          name="description"
          content="Rob Hill, Software Automation Engineer at Howorth Air Tech. PLC, HMI, and SCADA for pharmaceutical containment systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preload" as="image" href="/sample-portrait.webp" type="image/webp" fetchPriority="high" />
      </Head>

      <Background />
      <Topbar />

      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Connect />
      </main>

      <Footer />
    </>
  );
}
