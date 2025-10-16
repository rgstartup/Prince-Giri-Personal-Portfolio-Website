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
        ? "bg-white/70 backdrop-blur-xl ring-1 ring-slate-900/10 shadow-lg py-3 sm:py-4"
        : "bg-transparent py-4 sm:py-6"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        <a
          href="#home"
          className="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-btn"
          aria-label="Go to home"
        >
          <img src="/black-logo.png" alt="Prince Giri Logo" className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-xl object-cover" />
          <div className="hidden sm:block">
            <p className="text-text-primary text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Prince Giri
            </p>
            <p className="text-text-secondary text-xs sm:text-sm">
              Digital Marketing Consultant
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
              className="text-dark hover:text-primary font-medium relative group text-sm xl:text-base"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Tablet Navigation - Hidden on mobile, visible on tablet */}
        <nav className="hidden md:flex lg:hidden items-center space-x-4">
          {[
            "Home",
            "About",
            "Services",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-dark hover:text-primary font-medium relative group text-sm"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:flex bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-button font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-sm lg:text-base">
          <a href="tel:7087831018"> Book Free Consultation</a>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-xl z-40 pt-20 px-4 sm:px-6 animate-fade-in">
          {/* Dismiss Button */}
          <button
            className="absolute top-6 right-4 sm:right-6 text-dark p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
          
          <nav className="flex flex-col space-y-4 sm:space-y-6">
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
                className="text-dark hover:text-primary font-medium text-lg sm:text-xl py-3 sm:py-2 border-b border-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white w-full py-3 sm:py-4 rounded-button font-semibold shadow-md mt-6 sm:mt-4 text-base sm:text-lg">
              <a href="tel:7087831018">Book Free Consultation</a>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
