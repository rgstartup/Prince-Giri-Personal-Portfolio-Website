import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Dr. PK Talwar',
    role: 'Sr. Cosmetic Surgeon in Delhi',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&h=300&fit=crop&crop=faces',
    text: 'I always say that Gaurav has worked for me and after that, I understood how to connect with patients using the latest digital marketing channels like social media and YouTube. I really appreciate the honesty of Gaurav Dubey and his team as we are working since 2019 for a Laser, cosmetic/plastic surgery center in Delhi and I m happy with digital marketing services.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&fit=crop&crop=faces',
    text: 'Working with Prince has been transformative for our business. His strategic approach to digital marketing helped us achieve a 300% increase in qualified leads within just 6 months. Highly recommended!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-commerce Brand',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&h=300&fit=crop&crop=faces',
    text: 'Prince\'s expertise in SEO and PPC advertising took our online store to new heights. We saw immediate improvements in our search rankings and a significant boost in sales. His data-driven approach delivers real results.',
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 mb-4">
            <BadgeCheck className="text-cyan-400" size={18} />
            <span className="text-sm text-slate-300">Trusted by founders and clinicians</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Real Testimonials, Real Satisfaction
          </h2>
          <p className="text-slate-300">Hear from clients who leveled up their growth with me</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-3xl p-10 sm:p-12 text-center relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg">
              <Quote className="text-white" size={20} />
            </div>

            {/* Avatar */}
            <div className="flex justify-center">
              <div className="relative mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={`${testimonials[currentIndex].name} avatar`}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-white/10 shadow-xl"
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400 drop-shadow" size={22} />
              ))}
            </div>

            {/* Text */}
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {testimonials[currentIndex].text}
            </p>

            {/* Name & role */}
            <h4 className="text-xl font-semibold text-white mb-1">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-slate-300">{testimonials[currentIndex].role}</p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'}`}
                />
              ))}
            </div>
          </div>

          {/* Prev/Next controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
