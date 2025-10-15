type Example = {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
};

const examples: Example[] = [
  { client: 'E-commerce', challenge: 'Low traffic, poor conversions', solution: 'SEO + PPC', results: ['+250% Traffic', '+180% Conversions', '320% ROI'], image: 'https://images.pexels.com/photos/5632408/pexels-photo-5632408.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { client: 'SaaS Startup', challenge: 'Need B2B leads', solution: 'LinkedIn + Content', results: ['500+ Leads', '+400% Engagement', '$2M Pipeline'], image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { client: 'Local Service', challenge: 'Compete with chains', solution: 'Local SEO + Google Ads', results: ['#1 Rankings', '+300% Calls', '45% Cost Reduction'], image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">Success Stories & Results</h2>
          <p className="text-text-secondary mt-3">Real campaigns, real impact, real growth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((c) => (
            <article key={c.client} className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-lgx transition-shadow">
              {c.image && (
                <div className="h-44 overflow-hidden">
                  <img src={c.image} alt={`${c.client} case study`} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 space-y-3">
                <div className="text-sm font-semibold text-primary">{c.client}</div>
                <h3 className="text-xl font-bold text-text-primary">{c.solution}</h3>
                <p className="text-text-secondary">Challenge: {c.challenge}</p>
                <div className="pt-2 grid grid-cols-3 gap-2">
                  {c.results.map((r) => (
                    <div key={r} className="bg-neutral-light rounded-card px-3 py-2 text-sm font-semibold text-text-primary text-center">
                      {r}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="inline-block mt-2 text-primary font-semibold hover:underline">Work with me</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



