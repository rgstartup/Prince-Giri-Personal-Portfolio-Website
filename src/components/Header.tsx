import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navItems = ["Home", "About", "Services", "Strategies", "Testimonials", "Contact"];
  const tabletNavItems = ["Home", "About", "Services", "Contact"];

  // Handle scroll events for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(navItems[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl ring-1 ring-slate-900/10 shadow-lg py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-btn"
          aria-label="Prince Giri - Go to home"
        >
          <img 
            src="/black-logo.png" 
            alt="Prince Giri Logo" 
            className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-xl object-cover" 
            width={48}
            height={48}
          />
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
        <nav 
          className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = currentSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-dark hover:text-primary font-medium relative group text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-2 py-1 ${
                  isActive ? 'text-primary' : ''
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Tablet Navigation - Hidden on mobile, visible on tablet */}
        <nav 
          className="hidden md:flex lg:hidden items-center space-x-4"
          role="navigation"
          aria-label="Main navigation (tablet)"
        >
          {tabletNavItems.map((item) => {
            const isActive = currentSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-dark hover:text-primary font-medium relative group text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-2 py-1 ${
                  isActive ? 'text-primary' : ''
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  aria-hidden="true"
                ></span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a 
          href="tel:7087831018"
          className="hidden md:flex bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-button font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Book Free Consultation - Call 7087831018"
        >
          Book Free Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-dark p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-white/90 backdrop-blur-xl z-40 pt-20 px-4 sm:px-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Dismiss Button */}
          <button
            className="absolute top-6 right-4 sm:right-6 text-dark p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
          
          <nav 
            className="flex flex-col space-y-4 sm:space-y-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => {
              const isActive = currentSection === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-dark hover:text-primary font-medium text-lg sm:text-xl py-3 sm:py-2 border-b border-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm ${
                    isActive ? 'text-primary' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </a>
              );
            })}
            <a 
              href="tel:7087831018"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white w-full py-3 sm:py-4 rounded-button font-semibold shadow-md mt-6 sm:mt-4 text-base sm:text-lg text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Book Free Consultation - Call 7087831018"
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
