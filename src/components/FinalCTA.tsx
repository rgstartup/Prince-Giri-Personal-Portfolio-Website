export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm">🚀 Let's Get Started</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">Ready to Grow Your Business?</h2>
          <p className="mt-3 text-white/90">Schedule free 30-min consultation to discuss goals</p>
          <ul className="mt-6 space-y-2">
            {['Free 30-min strategy session', 'Customized growth recommendations', 'No obligation, just insights'].map((b) => (
              <li key={b} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>{b}</li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-flex items-center justify-center bg-white text-text-primary px-6 py-4 rounded-btn font-semibold shadow-lgx">Book Your Free Consultation</a>
          <p className="mt-3 text-white/80 text-sm">Or email: princegiriseo@gmail.com</p>
        </div>
        <div className="flex justify-center">
          <img src="/profile.png" alt="Prince Giri" className="w-full max-w-md rounded-img shadow-lg" />
        </div>
      </div>
    </section>
  );
}



