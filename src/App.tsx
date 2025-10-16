import { useEffect, Suspense, lazy } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from 'lenis'
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";

// Lazy load non-critical components
const About = lazy(() => import("./components/About").then(module => ({ default: module.About })));
const WhyHireMe = lazy(() => import("./components/WhyHireMe").then(module => ({ default: module.WhyHireMe })));
const Differentiators = lazy(() => import("./components/Differentiators").then(module => ({ default: module.Differentiators })));
const CTA = lazy(() => import("./components/CTA").then(module => ({ default: module.CTA })));
const Services = lazy(() => import("./components/Services").then(module => ({ default: module.Services })));
const Testimonials = lazy(() => import("./components/Testimonials").then(module => ({ default: module.Testimonials })));
const FAQ = lazy(() => import("./components/FAQ").then(module => ({ default: module.FAQ })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const Strategies = lazy(() => import("./components/Strategies").then(module => ({ default: module.Strategies })));
const CaseStudies = lazy(() => import("./components/CaseStudies").then(module => ({ default: module.CaseStudies })));
const Process = lazy(() => import("./components/Process").then(module => ({ default: module.Process })));
const Blog = lazy(() => import("./components/Blog").then(module => ({ default: module.Blog })));

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
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <WhyHireMe />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Differentiators />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <CTA />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Strategies />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Blog />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
