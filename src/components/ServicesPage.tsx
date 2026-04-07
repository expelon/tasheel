import React from 'react';
import { ChevronRight, Mail, Phone, TrendingUp, Building2, Handshake, ShieldCheck, HardHat, FileCheck, Globe, Scale, Building, Files, Gavel, Package, Landmark, Calculator, BookOpen, Flag, Users, Plane, HeartHandshake } from 'lucide-react';

const services = [
  {
    title: "Business Setup & Management",
    description: "We provide complete support for starting and managing your business in the UAE, guiding you through every step from registration to operations.",
    icon: <TrendingUp size={48} />,
  },
  {
    title: "FreeZone Company Setup",
    description: "Get your company established in UAE Free Zones with 100% ownership and hassle-free procedures.",
    icon: <Building2 size={48} />,
  },
  {
    title: "Sponsorship Arrangement",
    description: "We arrange reliable UAE national sponsorship to help you meet legal requirements without any operational interference.",
    icon: <Handshake size={48} />,
  },
  {
    title: "P.R.O Services",
    description: "Our PRO team handles all government-related paperwork, renewals, and approvals efficiently.",
    icon: <ShieldCheck size={48} />,
  },
  {
    title: "Labor & Immigration Services",
    description: "We take care of labor card processing, visa applications, and all immigration-related tasks.",
    icon: <HardHat size={48} />,
  },
  {
    title: "Certificate Attestation",
    description: "Fast and secure attestation services for educational, personal, and commercial documents.",
    icon: <FileCheck size={48} />,
  },
  {
    title: "Foreign Visa Services",
    description: "Assistance with visa applications and processing for various countries, ensuring smooth travel.",
    icon: <Globe size={48} />,
  },
  {
    title: "Legal Translation",
    description: "Accurate and certified translations for official and legal documents.",
    icon: <Scale size={48} />,
  },
  {
    title: "Municipality Services",
    description: "All types of municipality approvals, permits, and inspections handled professionally.",
    icon: <Building size={48} />,
  },
  {
    title: "Document Clearing Services",
    description: "Complete document clearing solutions to save you time and effort.",
    icon: <Files size={48} />,
  },
  {
    title: "Court Services",
    description: "We assist with legal documentation, submissions, and court-related formalities.",
    icon: <Gavel size={48} />,
  },
  {
    title: "Customs Approval",
    description: "Support in obtaining customs clearance and related permits for imports and exports.",
    icon: <Package size={48} />,
  },
  {
    title: "Ministry of Education",
    description: "Assistance with approvals, certifications, and procedures related to the Ministry of Education.",
    icon: <Landmark size={48} />,
  },
  {
    title: "Ministry of Economy",
    description: "Processing of licenses, registrations, and formalities with the Ministry of Economy.",
    icon: <Landmark size={48} />,
  },
  {
    title: "Ministry of Foreign Affairs",
    description: "Attestation and other services related to the Ministry of Foreign Affairs.",
    icon: <Landmark size={48} />,
  },
  {
    title: "Tax Consultancy",
    description: "Expert tax registration, filing, and advisory services to ensure compliance.",
    icon: <Calculator size={48} />,
  },
  {
    title: "Accounts & Auditing",
    description: "Professional accounting and auditing services to keep your business financially sound.",
    icon: <BookOpen size={48} />,
  },
  {
    title: "Consulate Services",
    description: "We coordinate with various consulates for documentation, attestations, and related services.",
    icon: <Flag size={48} />,
  },
  {
    title: "HR Consultancy & Recruitment",
    description: "Expert HR solutions and recruitment services to find the right talent for your business.",
    icon: <Users size={48} />,
  },
  {
    title: "Travel & Tourism",
    description: "Comprehensive travel and tourism services for business and leisure trips.",
    icon: <Plane size={48} />,
  },
  {
    title: "Insurance Services",
    description: "Protect your business and assets with our range of insurance consultancy services.",
    icon: <HeartHandshake size={48} />,
  }
];

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="relative h-[200px] md:h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
          alt="Services Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <h1 className="relative z-20 text-3xl md:text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">Our Service</h1>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-custom text-center px-4">
          <span className="text-primary font-bold text-base md:text-lg mb-4 block uppercase tracking-widest">WHAT WE OFFER</span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#333] mb-6 md:mb-8 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Transforming Business Finances with Expert Solutions.
          </h2>
          <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Tasheel consultancy offers scientifically qualitative and documented advisory services to enterprises and organizations we offer assistance in following categories.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-12 md:pb-24 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 lg:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-primary mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    {React.cloneElement(service.icon, { size: 48, className: 'w-full h-full' })}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333] mb-4 md:mb-6 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 md:mb-10 min-h-[60px] md:min-h-[80px]">
                  {service.description}
                </p>
                <button className="bg-[#333] text-white px-6 md:px-8 py-2 md:py-3 font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-black transition-colors w-full md:w-auto">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section (Reused) */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container-custom px-4">
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
                <button className="md:col-span-2 bg-[#333] text-white py-3 md:py-4 font-bold uppercase text-xs md:text-sm tracking-widest hover:bg-black transition-colors">
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

export default ServicesPage;
