import { Search, MousePointerClick, FileText, Share2, Mail, Shield } from 'lucide-react';

export function Services() {
  // Define the service items with the existing data
  const serviceItems = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      image: 'https://images.unsplash.com/photo-1726066012699-1c843dad5fd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      description: 'Rank higher on Google and other search engines to significantly increase your website’s organic traffic and visibility.'
    },
    {
      icon: MousePointerClick,
      title: 'Pay-Per-Click Advertising (PPC)',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      description: 'Achieve instant visibility and generate quality leads through expertly managed and highly targeted paid advertising campaigns.'
    },
    {
      icon: FileText,
      title: 'Social Media Marketing (SMM)',
      image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      description: 'Strategically build your brand presence, foster community, and engage directly with customers across all major social media platforms.'
    },
    {
      icon: Search, // Reusing icon for simplicity as no new icons were provided
      title: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1581547848234-b00b31e1b732?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      description: 'Attract, educate, and successfully convert your target audience with high-quality, relevant blogs, engaging videos, and stunning graphics.'
    },
    {
      icon: MousePointerClick, // Reusing icon for simplicity as no new icons were provided
      title: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      description: 'Nurture your leads, build loyalty, and boost sales revenue with personalized and fully automated email marketing campaigns.'
    },
    {
      icon: FileText, // Reusing icon for simplicity as no new icons were provided
      title: 'Website Design & Development',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464',
      description: 'Craft stunning, fast-loading, and mobile-friendly websites that are perfectly optimized for peak performance and user conversions.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white" id='services'>
      {/* Background blur effects for visual flair */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container mx-auto px-6">

        {/* Updated Professional Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            My Core <span className="text-blue-700">Expertise</span> & Results Driven Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I transform your business objectives into measurable digital success. Let's partner to build an impactful online presence that drives real growth and return on investment.
          </p>
        </div>

        {/* Attractive Card Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              // Card Styling: Solid background, definite rounded corners, strong shadow on hover
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-slate-100"
            >

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  // Scale effect on hover for image
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle dark overlay for better text contrast/visual depth */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors"></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Icon Wrapper: Larger, more prominent, subtle color pop */}
                {/* <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-md">
                  <item.icon className="text-blue-600" size={32} />
                </div> */}

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {item.description}
                </p>

                {/* Action Link/Button Placeholder (Optional but good for professional look) */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors"
                >
                  Explore Service &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The commented-out section for Digital Marketing Strategies remains commented for now */}
        {/* <div className="bg-white/70 backdrop-blur ring-1 ring-slate-200 rounded-2xl p-12 shadow-xl" >
          ...
        </div> */}
      </div>
    </section>
  );
}