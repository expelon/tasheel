import { Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Eye, Target, Award, Users, Building2, Clock, ShieldCheck, Zap, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

const CompanyPage = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="relative h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          alt="About Us Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <h1 className="relative z-20 text-3xl md:text-6xl font-bold text-white uppercase tracking-tight">About us</h1>
      </section>

      {/* Who We Are - Split Section */}
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-[300px] lg:h-[600px] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
            alt="Who We Are" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
        </div>
        <div className="lg:w-1/2 bg-primary p-8 md:p-16 lg:p-24 flex flex-col justify-center text-white relative">
          <div className="absolute top-10 right-10 opacity-10">
            <span className="text-[100px] md:text-[200px] font-bold leading-none">?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-12 uppercase tracking-tighter">WHO<br />WE ARE</h2>
          <div className="space-y-4 md:space-y-8 text-base md:text-lg opacity-90 leading-relaxed">
            <p>
              All our partners are nationally and internationally renowned experts in their fields, able to provide professional advice, knowledge and support for all our clients' with many years of experience. Our results are current, relevant and immediately applicable to our clients work setting.
            </p>
            <p>
              We have been serving our community since 2010. With over TEN YEARS of our vast experience, qualified staff and excellent coordination and planning skills, guaranteeing you 100% satisfaction.
            </p>
            <div className="bg-white/10 p-4 md:p-6 border-l-4 border-white">
              <p className="font-bold text-lg md:text-2xl">
                We Have Been Serving Our Community Since 2010. We Take Pride In Our Work, With Over <span className="text-[#333]">TEN Years Of Experience !</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Text Section */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">WHO WE ARE</span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#333] mb-6 md:mb-8 uppercase tracking-tighter leading-tight">
              Empowering Entrepreneurs<br />with Financial Expertise.
            </h2>
            <p className="text-lg md:text-2xl italic text-gray-400 mb-8 md:mb-12 border-l-4 border-primary pl-4 md:pl-6 py-2">
              We Have Been Serving Our Community Since 2010. We Take Pride In Our Work, With Over TEN Years Of Experience !
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              All our partners are nationally and internationally renowned experts in their fields, able to provide professional advice, knowledge and support for all our clients' with many years of experience. Our results are current, relevant and immediately applicable to our clients work setting. We have been serving our community since 2010. With over TEN YEARS of our vast experience, qualified staff and excellent coordination and planning skills, guaranteeing you 100% satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-black transition-colors w-full sm:w-auto">
                Free Consultations
              </button>
              <button className="border-2 border-primary text-primary px-6 md:px-8 py-3 md:py-4 font-bold uppercase text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto">
                Learn More <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        {/* Background pattern from image */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 L100 100 M100 0 L0 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          </svg>
        </div>
      </section>

      {/* Vision & Mission - Image Backgrounds */}
      <section className="flex flex-col">
        {/* Vision */}
        <div className="relative min-h-[720px] md:min-h-[500px] lg:h-[600px] flex items-center py-12 md:py-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Vision Background" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="container-custom relative z-20 flex justify-center lg:justify-end">
            <div className="bg-white p-6 md:p-12 lg:p-16 max-w-2xl shadow-2xl mx-4">
              <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">OUR VISION</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#333] mb-6 md:mb-8 uppercase tracking-tighter leading-tight">
                Driving Excellence and Innovation in Business Solutions
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To provide quality services that meets and exceeds the expectations of our esteemed customers. To be an organization that fulfills our clients' needs and interests achieved through our relentless pursuit of innovation driven by our undying passion towards technology, content and services.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="relative min-h-[720px] md:min-h-[500px] lg:h-[600px] flex items-center py-12 md:py-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920" 
            alt="Mission Background" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="container-custom relative z-20 flex justify-center lg:justify-start">
            <div className="bg-white p-6 md:p-12 lg:p-16 max-w-2xl shadow-2xl mx-4">
              <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">OUR MISSION</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#333] mb-6 md:mb-8 uppercase tracking-tighter leading-tight">
                Building Trust, Delivering Value, Empowering Growth
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Maintain strong and long-term relationships with our clients to set great value of "client share" rather than "market share", creating an environment that promotes performance-based career development, compensation, that promotes performance-based career development, compensation safe and fun at work for all our team members. To generate optimum quality of market information in order to build and enhance our customers' business along with promoting the best possible options. To serve our clients by conveying reasonable and executable business arrangements befitting specific customer needs to enable quicker accomplishment of their goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Grid */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">WHY CHOOSE US</span>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#333] uppercase tracking-tighter">Your Trusted Partner in Business Success</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 md:mt-6 text-sm md:text-base">
              We combine years of expertise, a strong network, and a commitment to excellence to deliver tailored solutions that drive growth, efficiency, and lasting partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-0">
            {[
              { icon: <Users />, label: "Large Network Of Connections", dark: true },
              { icon: <Clock />, label: "Many Years Of Experience", dark: false },
              { icon: <ShieldCheck />, label: "Expertise In The Local Industry", dark: true },
              { icon: <Users />, label: "Professional Team", dark: false },
              { icon: <Zap />, label: "Efficient And Costeffective Investment", dark: true },
              { icon: <Handshake />, label: "Flexibility For The Ideal Satisfaction Of Needs", dark: false },
              { icon: <Users />, label: "Specialized Personnel", dark: true },
              { icon: <Building2 />, label: "Adaptability To The Operation Processes Of The Customers", dark: false },
              { icon: <Send />, label: "Flexibility In Mode Of Delivery", dark: true },
              { icon: <Award />, label: "Dedication To The Customers", dark: false }
            ].map((item, idx) => (
              <div key={idx} className={`${item.dark ? 'bg-primary text-white' : 'bg-white text-primary border border-gray-100'} p-4 md:p-8 lg:p-12 flex flex-col items-center text-center justify-center h-48 md:h-64 lg:h-80`}>
                <div className={`${item.dark ? 'bg-white text-primary' : 'bg-primary text-white'} p-3 md:p-4 rounded-full mb-4 md:mb-6`}>
                  {item.icon}
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="CTA Background" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase tracking-tight">Turning Your Business Vision into Reality</h2>
          <p className="text-base md:text-xl opacity-80 mb-6 md:mb-10 max-w-3xl mx-auto">
            From company setup to strategic growth, we provide expert solutions tailored to your goals, ensuring a smooth journey toward success.
          </p>
          <button className="bg-primary text-white px-8 md:px-12 py-3 md:py-4 font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-black transition-all">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-8 md:mb-12">Get in touch</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Name</label>
                  <input type="text" placeholder="Name" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Company</label>
                  <input type="text" placeholder="Company" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Phone</label>
                  <input type="text" placeholder="Phone" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Email</label>
                  <input type="email" placeholder="Email" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Subject</label>
                  <input type="text" placeholder="Subject" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-xs md:text-sm uppercase">Message</label>
                  <textarea rows={4} placeholder="Message" className="bg-gray-100 p-3 md:p-4 rounded-sm outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
                </div>
                <button className="md:col-span-2 bg-primary text-white py-3 md:py-4 font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-black transition-colors">
                  SEND
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">MORE INFORMATION?</span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#333] mb-6 md:mb-8 leading-tight">Connect with Us for Expert Business Support</h2>
              <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                Have questions or need assistance? Our team is ready to provide personalized guidance and solutions to help your business succeed. Reach out today and let's get started.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="bg-primary p-4 md:p-6 rounded-full text-white">
                    <Mail size={24} md:size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-2xl font-bold text-[#333]">Email Support</h4>
                    <p className="text-gray-500 text-sm md:text-lg">info@tasheelconsultancy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="bg-primary p-4 md:p-6 rounded-full text-white">
                    <Phone size={24} md:size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-2xl font-bold text-[#333]">Let's Talk</h4>
                    <p className="text-gray-500 text-sm md:text-lg">+971 50 519 4833</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
