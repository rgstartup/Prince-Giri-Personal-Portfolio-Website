import {
  Search,
  MousePointerClick as Click,
  FileText as Document,
  Share2 as Share,
  Mail,
  Shield,
} from "lucide-react";

const items = [
  {
    num: "01",
    title: "SEO",
    icon: Search,
    benefits: ["Organic visibility", "Quality traffic", "Long-term ROI"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    num: "02",
    title: "PPC",
    icon: Click,
    benefits: ["Immediate results", "Precise targeting", "Scalable"],
    gradient: "from-emerald-500 to-green-500",
  },
  {
    num: "03",
    title: "Content",
    icon: Document,
    benefits: ["Brand authority", "Engagement", "SEO benefits"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    num: "04",
    title: "Social Media",
    icon: Share,
    benefits: ["Brand awareness", "Community", "Engagement"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    num: "05",
    title: "Email",
    icon: Mail,
    benefits: ["Direct communication", "High ROI", "Retention"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    num: "06",
    title: "ORM",
    icon: Shield,
    benefits: ["Brand protection", "Trust", "Review management"],
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Strategies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            6 Top Digital Marketing Strategies
          </h2>
          <p className="text-text-secondary mt-3">
            Proven approaches that drive measurable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-card bg-[#f8fafc] p-6 sm:p-8 shadow-sm hover:shadow-lgx transition-shadow"
            >
              <div className="absolute right-4 top-4 text-7xl font-extrabold text-slate-200/50 select-none">
                {item.num}
              </div>
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-btn bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-md`}
                >
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-text-secondary">
                    {item.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
