type Post = { category: string; title: string; excerpt: string; time: string; date: string; image?: string };

const posts: Post[] = [
  { category: 'SEO', title: "10 SEO Trends You Can't Ignore in 2025", excerpt: 'Emerging strategies reshaping search optimization', time: '5 min', date: 'Mar 15, 2025', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'PPC', title: 'Reduce PPC Costs While Increasing Conversions', excerpt: 'Exact tactics to optimize ad spend and maximize ROI', time: '7 min', date: 'Mar 10, 2025', image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Strategy', title: 'Complete Guide to Building a Marketing Funnel', excerpt: 'Step-by-step framework for high-converting funnels', time: '10 min', date: 'Mar 5, 2025', image: 'https://images.pexels.com/photos/374563/pexels-photo-374563.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">Latest Insights & Articles</h2>
          <p className="text-text-secondary mt-3">Digital marketing tips, trends, strategies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-card overflow-hidden shadow-sm hover:shadow-lgx transition-all">
              {p.image && (
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold bg-neutral-light px-3 py-1 rounded-full">{p.category}</span>
                <h3 className="mt-3 text-xl font-bold text-text-primary">{p.title}</h3>
                <p className="mt-2 text-text-secondary">{p.excerpt}</p>
                <div className="mt-4 text-sm text-text-secondary flex items-center gap-3">
                  <span>{p.time} read</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{p.date}</span>
                </div>
                <a href="#" className="mt-4 inline-block text-primary font-semibold hover:underline">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




