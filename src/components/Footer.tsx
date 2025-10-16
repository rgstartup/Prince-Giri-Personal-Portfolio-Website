import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Sparkles, LinkedinIcon, Instagram, X } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-20 pb-10" role="contentinfo" aria-label="Site footer">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/black-logo.png"
                alt="Prince Giri Logo"
                className="w-16 h-16 rounded-xl object-cover ring-2 ring-slate-600"
                width="64"
                height="64"
              />
              <div>
                <h3 className="text-2xl font-bold">Prince Giri</h3>
                <p className="text-slate-300 text-sm">Digital Marketing Expert</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Helping businesses grow through strategic digital marketing solutions. Over 13+ years of experience delivering measurable results.
            </p>
            <div className="flex gap-4" aria-label="Social media links">
              <a 
                href="https://linkedin.com" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="LinkedIn profile"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Instagram profile"
                rel="noopener noreferrer"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Twitter profile"
                rel="noopener noreferrer"
              >
                <X size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h4 className="text-lg font-bold mb-6" id="footer-quick-links">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">About Me</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Services</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Contact</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h4 className="text-lg font-bold mb-6" id="footer-services">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">SEO Optimization</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">PPC Advertising</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Social Media Marketing</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Content Marketing</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline">Email Marketing</a></li>
            </ul>
          </nav>

          <div aria-labelledby="footer-contact">
            <h4 className="text-lg font-bold mb-6" id="footer-contact">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                <div>
                  <p className="text-slate-400 text-sm" id="email-label">Email</p>
                  <a 
                    href="mailto:princegiriseo@gmail.com" 
                    className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline"
                    aria-labelledby="email-label"
                  >
                    princegiriseo@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                <div>
                  <p className="text-slate-400 text-sm" id="phone-label">Phone</p>
                  <a 
                    href="tel:+917087831018" 
                    className="text-white hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline"
                    aria-labelledby="phone-label"
                  >
                    +91-7087831018
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
                <div>
                  <p className="text-slate-400 text-sm" id="location-label">Location</p>
                  <p className="text-white" aria-labelledby="location-label">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        {/* <div className="mb-10">
          <div className="max-w-3xl mx-auto bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 mb-4">
              <Sparkles className="text-cyan-400" size={18} aria-hidden="true" />
              <span className="text-sm text-slate-300">Get growth tips in your inbox</span>
            </div>
            <h5 className="text-xl font-semibold mb-4">Subscribe to the newsletter</h5>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto min-w-[240px] px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/40 transition-colors"
                aria-required="true"
              />
              <button 
                type="button" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-95 active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div> */}

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-sm">
              &copy; 2025 Prince Giri. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <div className="flex gap-6 text-sm">
                <a 
                  href="/privacy" 
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline"
                >
                  Terms of Service
                </a>
                <a 
                  href="/cookies" 
                  className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:underline"
                >
                  Cookie Policy
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-4 bg-white/5 rounded-full px-8 py-4 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Contact Prince Giri to work together"
          >
            <img
              src="/stand.png"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
              width="48"
              height="48"
              aria-hidden="true"
            />
            <div className="text-left">
              <p className="font-semibold text-white">Let's work together!</p>
              <p className="text-slate-400 text-sm">Ready to grow your business?</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
