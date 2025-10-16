import { Target, TrendingUp, Palette, Users, Rocket } from "lucide-react";

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="why-hire-me-heading">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="why-hire-me-heading" className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Hire Me As Digital Marketing <span className="md:block">Consultant Or Expert?</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Let me share some of the most important things I can do for you when
            you hire me as your digital marketing consultant or expert in India.
            Over the last 13+ years, I have closely observed algorithms, which
            helped me understand the overall marketing process deeply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list" aria-label="Marketing expertise areas">
          {[
            {
              icon: Target,
              title: "Result-Driven Campaigns",
              description:
                "I focus on generating real outcomes: more traffic, quality leads, and higher sales.",
            },
            {
              icon: TrendingUp,
              title: "Multi-Channel Marketing",
              description:
                "SEO, PPC, Social Media, and Email – I cover all strategies to maximize growth.",
            },
            {
              icon: Palette,
              title: "Creative + Data-Backed",
              description:
                "Blending creativity with analytics to craft campaigns that connect and convert.",
            },
            {
              icon: Users,
              title: "Your Growth Partner",
              description:
                "Dedicated support, clear communication, and long-term success guaranteed.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all group"
              role="listitem"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors" aria-hidden="true">
                <item.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="order-1 lg:order-none">
              <img
                src="/see.png"
                alt="Prince Giri, Digital Marketing Consultant"
                className="w-full max-w-full sm:max-w-full md:max-w-full h-auto border-0 border-gray-300 relative rounded-xl mx-auto"
                width="500"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-2 lg:order-none text-center lg:text-left">
              <h3 id="journey-heading" className="text-3xl font-bold">The Journey So Far</h3>
              <div aria-labelledby="journey-heading">
                <p className="text-base text-slate-200 leading-relaxed">
                  Preparing a good marketing strategy and driving better results
                  from implementation requires much expertise and experience as a
                  digital marketer, which you might not have as a business owner.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Moreover, choosing the proper marketing channels and allocating
                  the budget among the selected channels might be a challenging
                  task for you.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  Hiring a consultant is a wise decision to get digital marketing
                  services that can help in the growth of your business.
                </p>
                <p className="text-base text-slate-200 leading-relaxed">
                  But I can't assure you that you will start getting results
                  immediately after hiring. It depends on factors such as the
                  marketing strategy, your products/services, competition, etc.
                </p>
              </div>

              <a 
                href="/about" 
                className="group relative inline-block bg-primary text-white px-8 py-4 rounded-button font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                aria-label="Read more about Prince Giri's journey as a digital marketing consultant"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read More About My Journey
                  <Rocket
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16" role="list" aria-label="Services offered">
          {[
            {
              icon: Target,
              title: "Business Planning",
              description:
                "We've compiled a digital marketing strategies that marketers can adapt to help their teams and businesses grow.",
            },
            {
              icon: TrendingUp,
              title: "Business Analysis",
              description:
                "We provide a complete dept business analysis solutions which includes a improvement, strategic planning and more.",
            },
            {
              icon: Palette,
              title: "Brand Development",
              description:
                "Avail our hassle-free process of maintaining the brand development with quality & particular marketing assets.",
            },
            {
              icon: Users,
              title: "Problem Solving",
              description:
                "We, as a team, try to solve all your common digital marketing problems with the best proved solutions.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center group" role="listitem">
              <div className="bg-slate-50 w-20 h-20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-50 transition-colors" aria-hidden="true">
                <item.icon
                  className="text-slate-700 group-hover:text-blue-600 transition-colors"
                  size={36}
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
