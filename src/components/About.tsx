import { ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';

export function About() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
              <img
                src="/stand.png"
                alt="Prince Giri - Digital Marketing Expert"
                className="rounded-3xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-500"
              />

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">1.4K+</div>
                    <div className="text-xs text-slate-600">Success Stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-5 py-2">
                <Zap className="text-cyan-600" size={16} />
                <span className="text-sm font-semibold text-cyan-900 uppercase tracking-wider">About Me</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Promoting{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gradient from-cyan-600 to-blue-600">Digital Excellence</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-cyan-200/50 -rotate-1"></span>
                </span>
                {' '}and Innovation
              </h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">
              As an acclaimed digital marketing professional based in India, I've garnered recognition across diverse facets of the IT and digital marketing industry. My global reach extends to serving clients in over <span className="font-semibold text-slate-900">30+ countries</span>.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              I've successfully mastered the domains of web building and digital marketing, assuring the success of my client's enterprises and creating distinct brand experiences for their valued customers.
            </p>

            <div className="grid grid-cols-3 gap-6 py-8">
              {[
                { icon: Target, label: 'Strategic', color: 'from-blue-600 to-blue-700' },
                { icon: TrendingUp, label: 'Results-Driven', color: 'from-cyan-600 to-cyan-700' },
                { icon: Zap, label: 'Innovative', color: 'from-blue-600 to-cyan-600' }
              ].map((item, index) => (
                <div key={index} className="group text-center">
                  <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-600/30 hover:shadow-xl hover:shadow-cyan-600/40 transition-all hover:-translate-y-0.5 flex items-center gap-3">
              <span className="relative z-10">Read More About My Journey</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
