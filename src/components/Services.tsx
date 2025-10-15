import { Search, MousePointerClick, FileText, Share2, Mail, Shield } from 'lucide-react';

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white" id='services'>
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Services <span className="text-blue-700">We Offer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Search,
              title: 'Digital Marketing',
              image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
              description: 'You can unleash your brand\'s potential with our innovative digital marketing techniques. We rocket your brand to the forefront of the online world, assuring exposure and interaction that captivates audiences.'
            },
            {
              icon: MousePointerClick,
              title: 'App Development',
              image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
              description: 'Use our app development knowledge to go on an innovative path. We create mobile apps that satisfy user demands and re-invent user experiences, from idea to faultless implementation.'
            },
            {
              icon: FileText,
              title: 'Web Development',
              image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
              description: 'Turn your internet presence into an enthralling digital experience. Our web development services perfectly mix creativity and functionality, guaranteeing that your website looks good and operates smoothly.'
            }
          ].map((item, index) => (
            <div key={index} className="relative bg-white/70 backdrop-blur ring-1 ring-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <item.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/70 backdrop-blur ring-1 ring-slate-200 rounded-2xl p-12 shadow-xl" id="strategies">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            6 Top Digital Marketing Strategies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Search Engine Optimization (SEO)',
                description: 'Rank higher on Google, attract more organic traffic, and bring in customers searching for your services.'
              },
              {
                icon: MousePointerClick,
                title: 'Pay-Per-Click Advertising (PPC)',
                description: 'Drive instant leads & sales with laser-targeted ads across Google, Facebook, and Instagram.'
              },
              {
                icon: FileText,
                title: 'Content Marketing',
                description: 'Build authority & trust with blogs, videos, and posts that educate, inspire, and convert your audience.'
              },
              {
                icon: Share2,
                title: 'Social Media Marketing',
                description: 'Boost visibility & engagement on platforms like Instagram, LinkedIn, and X with creative campaigns.'
              },
              {
                icon: Mail,
                title: 'Email Marketing',
                description: 'Nurture leads, build loyalty, and increase repeat sales with personalized, automated email campaigns.'
              },
              {
                icon: Shield,
                title: 'ORM Services',
                description: 'Protect & enhance your brand\'s image, manage reviews, and build strong customer trust online.'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl hover:shadow-lg transition-all ring-1 ring-slate-200">
                  <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
