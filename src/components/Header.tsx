import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/70 backdrop-blur-xl ring-1 ring-slate-900/10 shadow-lg py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        <a
          href="#home"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-btn"
          aria-label="Go to home"
        >
          <img src="/black-logo.png" alt="Prince Giri Logo" className="w-10 h-12 md:w-12 md:h-12 rounded-xl object-cover" />
          <div className="hidden sm:block">
            <p className="text-text-primary text-2xl font-bold leading-tight">
              Prince Giri
            </p>
            <p className="text-text-secondary text-sm">
              Digital Marketing Consultant
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            "Home",
            "About",
            "Services",
            "Strategies",
            "Testimonials",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-dark hover:text-primary font-medium relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:flex bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-button font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
          <a href="tel:7087831018"> Book Free Consultation</a>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-xl z-40 pt-20 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-6">
            {[
              "Home",
              "About",
              "Services",
              "Strategies",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark hover:text-primary font-medium text-xl py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white w-full py-4 rounded-button font-semibold shadow-md mt-4">
              <a href="tel:7087831018">Book Free Consultation</a>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
