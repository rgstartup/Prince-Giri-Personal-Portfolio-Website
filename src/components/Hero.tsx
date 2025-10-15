import { ArrowRight, Rocket, Award, Calendar, Star, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-br from-light via-blue-50/30 to-light flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="text-lg">👋</span>
              <span className="text-sm font-semibold text-dark">
                Hello, I'm Prince Giri
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-dark leading-tight">
                Digital Marketing Consultant Who Drives{" "}
                <span className="text-gradient from-primary to-secondary">
                  Real Growth
                </span>
              </h1>

              <p className="max-w-xl">
                Transforming businesses through data-driven strategies, creative
                campaigns, and measurable results. Let's scale your brand
                together.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group relative bg-primary text-white px-8 py-4 rounded-button font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  Start Growing Today
                  <Rocket
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <button className="group relative border-2 border-dark text-dark px-8 py-4 rounded-button font-semibold hover:bg-dark hover:text-white transition-all hover:-translate-y-1 flex items-center gap-2">
                View My Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  number: "1,400+",
                  label: "Projects Completed",
                  icon: <Award className="text-primary" size={24} />,
                },
                {
                  number: "7+",
                  label: "Years Experience",
                  icon: <Calendar className="text-primary" size={24} />,
                },
                {
                  number: "95%",
                  label: "Client Satisfaction",
                  icon: <Star className="text-primary" size={24} />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/50 border border-slate-200 hover:bg-white p-4 rounded-card shadow-sm hover:shadow-md transition-all flex items-center gap-3"
                >
                  <div className="bg-primary/10 p-2 rounded-full">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-dark">
                      {stat.number}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-image blur-3xl animate-gradient"></div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-light to-white p-2 rounded-3xl shadow-sm">
                <img
                  src="/profile.png"
                  alt="Prince Giri"
                  className="relative rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>

            <div  className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 animate-float border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">7+</div>
                  <div className="text-sm text-text-secondary">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 animate-float border border-slate-100"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-secondary to-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <Star className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">1,400+</div>
                  <div className="text-sm text-text-secondary">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowRight size={20} className="rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
