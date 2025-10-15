import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Sparkles, LinkedinIcon, Instagram, X } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white pt-20 pb-10">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/black-logo.png"
                alt="Prince Giri Logo"
                className="w-16 h-16 rounded-xl object-cover ring-2 ring-slate-600"
              />
              <div>
                <h3 className="text-2xl font-bold">Prince Giri</h3>
                <p className="text-slate-300 text-sm">Digital Marketing Expert</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Helping businesses grow through strategic digital marketing solutions. Over 13+ years of experience delivering measurable results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                <X size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">PPC Advertising</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Email Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <a href="mailto:prince@example.com" className="text-white hover:text-blue-400 transition-colors">
                    prince@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <a href="tel:+918669084748" className="text-white hover:text-blue-400 transition-colors">
                    +91-7087831018
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        {/* <div className="mb-10">
          <div className="max-w-3xl mx-auto bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 mb-4">
              <Sparkles className="text-cyan-400" size={18} />
              <span className="text-sm text-slate-300">Get growth tips in your inbox</span>
            </div>
            <h5 className="text-xl font-semibold mb-4">Subscribe to the newsletter</h5>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto min-w-[240px] px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button type="button" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 font-semibold hover:opacity-95 active:scale-[0.99] transition-all">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div> */}

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-sm">
              &copy; 2025 Prince Giri. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 rounded-full px-8 py-4">
            <img
              src="/profile.png"
              alt="Prince Giri"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-white">Let's work together!</p>
              <p className="text-slate-400 text-sm">Ready to grow your business?</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
