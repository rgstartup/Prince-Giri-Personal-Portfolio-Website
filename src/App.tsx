import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyHireMe } from "./components/WhyHireMe";
import { Differentiators } from "./components/Differentiators";
import { CTA } from "./components/CTA";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Strategies } from "./components/Strategies";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { Blog } from "./components/Blog";
// import { FinalCTA } from "./components/FinalCTA";
import { Header } from "./components/Header";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    const header = document.getElementById("site-header");
    const getHeaderOffset = () => (header ? header.offsetHeight + 8 : 0);

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const offset = getHeaderOffset();
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      gsap.to(window, { duration: 0.8, scrollTo: { y, autoKill: true }, ease: "power2.out" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyHireMe />
      <Differentiators />
      <CTA />
      <Services />
      <Strategies />
      <CaseStudies />
      <Process />
      <Blog />
      {/* <FinalCTA /> Nott Using */}
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
