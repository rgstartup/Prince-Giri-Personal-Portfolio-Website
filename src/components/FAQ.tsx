import { Plus, Minus, Send, Mail, Phone, User, Sparkles } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Why Should I Hire Prince Giri for Digital Marketing Consultation?',
    answer: 'With over 13+ years of experience in digital marketing, I bring a proven track record of helping businesses grow through strategic SEO, PPC, social media, and content marketing. I focus on delivering measurable results tailored to your business goals.'
  },
  {
    question: 'What are the charges of Prince Giri for Digital Marketing Consultation?',
    answer: 'My consultation fees vary based on the scope and complexity of your project. I offer flexible packages for startups, small businesses, and enterprises. Contact me for a customized quote that fits your budget and objectives.'
  },
  {
    question: 'What Major Services are Offered by Prince Giri?',
    answer: 'I offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, brand strategy, and online reputation management. Each service is designed to drive traffic, leads, and sales for your business.'
  },
  {
    question: 'Can I Hire Prince Giri for Consultation Only As We Have In-house Team?',
    answer: 'Absolutely! I offer strategic consultation services to guide your in-house team. I can help with campaign planning, strategy development, performance audits, and training your team on best practices in digital marketing.'
  },
  {
    question: 'How Can Prince Giri Work for Me If He is Not Available in My City?',
    answer: 'I work with clients globally through virtual meetings, email, and project management tools. Distance is no barrier to delivering exceptional results. I maintain clear communication and provide regular updates throughout our collaboration.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact' className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/5 ring-1 ring-slate-900/10 mb-4">
              <Sparkles className="text-violet-600" size={18} />
              <span className="text-sm text-slate-700">Answers you need, fast</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl overflow-hidden bg-white ring-1 ring-slate-200">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <Minus className="text-slate-600 flex-shrink-0" size={20} />
                    ) : (
                      <Plus className="text-slate-600 flex-shrink-0" size={20} />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-5 bg-slate-50 border-t border-slate-200">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white sticky top-8 overflow-hidden">
              <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-violet-600/20 blur-2xl" />
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
                    <User size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
                    <Phone size={18} />
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40 transition-colors"
                    required
                  >
                    <option value="" className="text-slate-900">Select Service</option>
                    <option value="seo" className="text-slate-900">SEO</option>
                    <option value="ppc" className="text-slate-900">PPC Advertising</option>
                    <option value="social" className="text-slate-900">Social Media Marketing</option>
                    <option value="content" className="text-slate-900">Content Marketing</option>
                    <option value="email" className="text-slate-900">Email Marketing</option>
                    <option value="consultation" className="text-slate-900">Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-violet-700/20"
                >
                  Send Message
                  <Send className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
