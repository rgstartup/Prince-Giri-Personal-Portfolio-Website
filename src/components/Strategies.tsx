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
    title: "Organic Growth Strategy",
    icon: Search,
    benefits: [
      "Sustain Visib.",
      "Quality Traffic",
      "Long-term ROI",
    ],
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    num: "02",
    title: "Instant Lead Generation",
    icon: Click,
    benefits: [
      "Immediate Leads",
      "Precise Target",
      "Campaign Scale",
    ],
    gradient: "from-emerald-600 to-green-500",
  },
  {
    num: "03",
    title: "Thought Leadership & Value",
    icon: Document,
    benefits: [
      "Brand Authority",
      "Deep Engagement",
      "Attract Traffic",
    ],
    gradient: "from-fuchsia-600 to-pink-500",
  },
  {
    num: "04",
    title: "Audience Connection",
    icon: Share,
    benefits: [
      "Expand Brand",
      "Build Community",
      "Active Interact.",
    ],
    gradient: "from-red-500 to-orange-500",
  },
  {
    num: "05",
    title: "Customer Nurturing",
    icon: Mail,
    benefits: [
      "Direct Comm.",
      "High Campaign ROI",
      "Boost Retention",
    ],
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    num: "06",
    title: "Brand Trust & Security",
    icon: Shield,
    benefits: [
      "Protect Brand",
      "Build Trust",
      "Manage Reviews",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
];

export function Strategies() {
  return (
    <section className="py-24 bg-white" id="strategies">
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
