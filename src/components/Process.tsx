import { Search, Lightbulb, Rocket, BarChart as ChartLineUp } from 'lucide-react';

const steps = [
  { num: '01', icon: Search, title: 'Discovery & Audit', desc: 'Deep dive into business, audience, competitors', deliverables: ['Market research', 'Competitor analysis', 'Marketing audit'] },
  { num: '02', icon: Lightbulb, title: 'Strategy Development', desc: 'Customized roadmap with goals, KPIs, tactics', deliverables: ['Strategic roadmap', 'KPI framework', 'Budget allocation'] },
  { num: '03', icon: Rocket, title: 'Implementation', desc: 'Execute campaigns with precision', deliverables: ['Campaign setup', 'Content creation', 'Technical implementation'] },
  { num: '04', icon: ChartLineUp, title: 'Optimization', desc: 'Monitor, test, refine based on data', deliverables: ['Weekly reports', 'A/B testing', 'Optimization'] },
  { num: '05', icon: Rocket, title: 'Scale & Grow', desc: 'Expand winning strategies', deliverables: ['Scaling strategy', 'New channels', 'ROI maximization'] }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">My Proven Process</h2>
          <p className="text-text-secondary mt-3">Systematic approach to exceptional results</p>
        </div>

        <div className="hidden md:grid grid-cols-5 gap-4">
          {steps.map((s, idx) => (
            <div key={s.num} className="relative bg-blue-50 rounded-card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{s.num}</div>
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="mt-3 font-bold text-text-primary text-base">{s.title}</h3>
              <p className="text-sm text-text-secondary">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-text-secondary">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:hidden grid gap-4">
          {steps.map((s) => (
            <div key={s.num} className="bg-neutral-light rounded-card p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{s.num}</div>
                <s.icon className="text-primary" size={22} />
                <h3 className="font-bold text-text-primary">{s.title}</h3>
              </div>
              <p className="text-sm text-text-secondary mt-2">{s.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="text-xs bg-white rounded-full px-3 py-1 border border-slate-200">{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



