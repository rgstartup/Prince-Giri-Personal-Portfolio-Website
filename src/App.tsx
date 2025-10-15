import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from 'lenis'
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
    // Initialize Lenis for inertial smooth scrolling across the site
    const lenis = new Lenis({
      duration: 1.1, // higher = more easing/inertia
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      // smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
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
      const targetY = el.getBoundingClientRect().top + window.pageYOffset - offset;
      // Use Lenis for programmatic smooth scroll so it matches inertial feel
      lenis.scrollTo(targetY, { duration: 1, lock: true });
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
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
