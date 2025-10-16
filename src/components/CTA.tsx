export function CTA() {
  return (
    <>
      <section id="cta" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Subtle Geometric Pattern for Depth and Beauty (Blue Tones) */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(45deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 30%, transparent 31%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 80%, transparent 81%), linear-gradient(-45deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 30%, transparent 31%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 80%, transparent 81%)',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        ></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-white">
            {/* Left Column - Content */}
            <div>
              {/* Tag/Badge: Light Blue/Indigo */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-200 rounded-full px-4 py-1.5 text-sm font-medium tracking-wider uppercase">
                <span role="img" aria-label="Rocket">🚀</span> Start Your Growth Journey
              </div>

              {/* Headline */}
              <h2 id="cta-heading" className="mt-4 text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Accelerate Your Business?
              </h2>

              {/* Sub-Headline */}
              <p className="mt-4 text-xl text-slate-300 max-w-lg">
                Schedule a <strong>free 30-minute consultation</strong> to align on your goals and chart a clear path forward.
              </p>

              {/* Value Propositions */}
              <ul className="mt-8 space-y-3" aria-label="Benefits of consultation">
                {['Free 30-min strategy session', 'Customized growth roadmap', 'Actionable insights, zero obligation'].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-200">
                    {/* Checkmark Icon in Blue */}
                    <svg
                      className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button: Stronger Blue with Hover/Shadow */}
              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-colors text-white text-lg px-8 py-4 rounded-xl font-bold shadow-2xl shadow-blue-600/50 transform hover:scale-[1.02] active:scale-[0.98] duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                role="button"
                aria-label="Book your free consultation - opens contact form"
              >
                Book Your Free Consultation
              </a>

              {/* Alternative Contact */}
              <p className="mt-4 text-slate-400 text-sm">
                Or reach out directly: <a href="mailto:princegiriseo@gmail.com" className="font-semibold text-slate-200 hover:text-blue-400 transition-colors focus:outline-none focus:underline" aria-label="Send email to princegiriseo@gmail.com">princegiriseo@gmail.com</a>
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="mt-12 lg:mt-0 flex justify-center">
              <img
                src="/stand.png"
                alt="Prince Giri, Digital Marketing Consultant"
                className="w-full h-[50%] lg:h-[50%] lg:w-[80%] rounded-3xl shadow-2xl shadow-blue-900/50 transform hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width="400"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}