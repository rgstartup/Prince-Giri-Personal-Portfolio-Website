import { MessageCircle, Award, Users, TrendingUp } from 'lucide-react';

export function Differentiators() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What <span className="text-orange-500">Makes Us Different</span> From <br />Other Agencies?
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            As the Best top digital marketing agency, we offer a complete portfolio of digital marketing services, including everything from the Best Content Writing Services to Social Media Marketing Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MessageCircle,
              title: 'Easy Communication',
              description: 'Proactive and easy-to-use CRM tools allow us to manage communication with clients. All clients receive updates regularly.'
            },
            {
              icon: Award,
              title: 'Assured Results',
              description: 'As a Professional SEO Company USA, we are reputed for providing top-notch digital service. You can be assured to get your site ranked on the first page of Google with our SEO.'
            },
            {
              icon: Users,
              title: 'Dedicated Manager',
              description: 'It is necessary to sustain a sense of personal touch throughout the project. Thus, our project manager is dedicated to each project for an enhanced experience with clients.'
            },
            {
              icon: TrendingUp,
              title: 'Track the Progress',
              description: 'We deliver our clients regular updates that allow them to keep track of the progress of their project. You can request any strategic modification at any time.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all group">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                <item.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
