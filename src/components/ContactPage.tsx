import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          alt="Contact Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <h1 className="relative z-20 text-7xl font-bold text-white uppercase tracking-tight">Contact us</h1>
      </section>

      {/* Address Cards Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fujairah Branch */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-sm shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-[#333] mb-8 uppercase tracking-tight">FUJAIRAH</h3>
              <div className="flex flex-col items-center gap-6 text-gray-600">
                <p className="max-w-xs leading-relaxed">
                  P.O Box :3869 , Twin Towers M1 Fujairah, Opposite National Hypermarket -Fujairah UAE
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#333] p-3 rounded-full text-white mb-2">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">+971 50 608 7833</span>
                  <span className="font-medium">+971 9 201 1829</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[#c59d5f] font-bold">creative@tasheelconsultancy.com</span>
                </div>
                <button className="mt-4 bg-[#333] text-white px-10 py-3 font-bold uppercase tracking-widest hover:bg-[#c59d5f] transition-all rounded-sm">
                  LOCATE US
                </button>
              </div>
            </motion.div>

            {/* Fujairah H.O */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-sm shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-[#333] mb-8 uppercase tracking-tight">FUJAIRAH (H.O)</h3>
              <div className="flex flex-col items-center gap-6 text-gray-600">
                <p className="max-w-xs leading-relaxed">
                  Merashid, NearLabour& ImmigrationOffice, Fujairah-UAE
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#333] p-3 rounded-full text-white mb-2">
                    <Phone size={20} />
                  </div>
                  <span className="font-medium">+971 9 228 8633</span>
                  <span className="font-medium">+971 56 606 8833</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[#c59d5f] font-bold">fujairah@tasheelconsultancy.com</span>
                </div>
                <button className="mt-4 bg-[#333] text-white px-10 py-3 font-bold uppercase tracking-widest hover:bg-[#c59d5f] transition-all rounded-sm">
                  LOCATE US
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* World Map Background (Decorative) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            alt="World Map" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Form Side */}
            <div className="lg:w-3/5">
              <h2 className="text-6xl font-bold text-[#333] mb-12 uppercase tracking-tighter">Get in touch</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Company</label>
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Phone</label>
                  <input 
                    type="text" 
                    placeholder="Phone" 
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-[#333] uppercase text-sm tracking-widest">Message</label>
                  <textarea 
                    placeholder="Message" 
                    rows={6}
                    className="bg-white border-none p-4 rounded-sm shadow-sm focus:ring-2 focus:ring-[#c59d5f] outline-none resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-[#333] text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-black transition-all">
                    SEND
                  </button>
                </div>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-[#c59d5f] font-bold text-lg mb-4 block uppercase tracking-widest">MORE INFORMATION?</span>
              <h3 className="text-5xl font-bold text-[#333] mb-8 uppercase tracking-tighter leading-tight">
                Connect with Us for Expert Business Support
              </h3>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Have questions or need assistance? Our team is ready to provide personalized guidance and solutions to help your business succeed. Reach out today and let's get started.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-[#c59d5f] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#333] uppercase tracking-tight">Email Support</h4>
                    <p className="text-gray-600">info@tasheelconsultancy.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-[#c59d5f] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#333] uppercase tracking-tight">Let's Talk</h4>
                    <p className="text-gray-600">+971 50 519 4833</p>
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

export default ContactPage;
