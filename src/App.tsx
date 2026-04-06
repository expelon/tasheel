/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Eye, Target, Award, CheckCircle2, Users, Briefcase, Building2, MessageSquare, Globe, Clock, ShieldCheck, Zap, Handshake, Menu, X, Ghost } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CompanyPage from './components/CompanyPage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';

const TopBar = () => (
  <div className="bg-primary text-white py-2 px-4 text-sm font-medium">
    <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-2">
      <p className="uppercase tracking-wider text-xs md:text-sm text-center md:text-left">HI, WE'RE HERE IF YOU NEED ANY ASSISTANCE?</p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Phone size={14} className="md:size-16" />
          <span className="text-xs md:text-sm">+971 9 228 8633</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={14} className="md:size-16" />
          <span className="text-xs md:text-sm break-all">info@tasheelconsultancy.com</span>
        </div>
      </div>
    </div>
  </div>
);

const Navbar = ({ currentView, setView }: { currentView: string, setView: (view: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'company', label: 'Our Company' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (view: string) => {
    if (['home', 'company', 'services', 'gallery', 'contact'].includes(view)) {
      setView(view);
    }
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm">
              <Building2 className="text-white" size={32} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-[#333]">TASHEEL</span>
              <span className="text-[10px] tracking-[0.2em] text-primary font-bold -mt-1 uppercase">Consultancy</span>
            </div>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[#333] uppercase text-sm">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)} 
              className={`${currentView === link.id ? 'text-primary' : 'hover:text-primary'} transition-colors cursor-pointer`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[#333]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4 font-bold text-[#333] uppercase text-sm">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)} 
                  className={`${currentView === link.id ? 'text-primary' : 'hover:text-primary'} transition-colors cursor-pointer text-left py-2`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/First.jpeg",
    "/Second.jpeg", 
    "/Third.jpeg",
    "/Fouth.jpeg",
    "/fifth.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[220px] md:h-[600px] lg:h-[800px] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img 
          src={slides[currentSlide]} 
          alt={`Hero Banner ${currentSlide + 1}`}
          className="w-full h-full object-cover md:h-auto lg:h-auto"
        />
        <div className="container-custom relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-4">
              Tasheel<br />Consultancy
            </h1>
            <p className="text-2xl md:text-3xl font-light tracking-wide">
              Your Trusted Business Partner
            </p>
          </div>
        </div>
      </div>
      
      {/* Slide indicators hidden */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}
    </section>
  );
};

const Stats = () => (
  <section className="bg-primary py-20">
    <div className="container-custom">
      <div className="bg-white rounded-2xl p-12 shadow-2xl relative z-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#333] uppercase tracking-tight">
          Entrepreneur Makers Since 2010
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "1.5M", label: "HAPPY CLIENTS", color: "bg-primary" },
            { value: "16+", label: "YEARS OF EXPERIENCE", color: "bg-[#4a4a4a]" },
            { value: "90+", label: "COMPANY INCORPORATION", color: "bg-primary" },
            { value: "90+", label: "CONSULTATION", color: "bg-[#4a4a4a]" }
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.color} text-white p-8 rounded-2xl text-center flex flex-col justify-center items-center h-48`}>
              <span className="text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-primary font-bold text-lg">"Let's Start</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#333] mb-6 uppercase tracking-tighter">A Business"</h2>
          <span className="text-primary font-bold mb-8 uppercase tracking-wider">A Super Easy Experience For You!</span>
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            A global network of independent firms specialized in business networks seek to help entrepreneurs and firms, providing services with a team of business advisors by facilitating inter country business. Our team of experts can provide you with a wide variety of business setup services, including legal registration of your company as well as legal documentation to ensure your business complies in protecting your business interests. By choosing our business setup, we can assure you of high financial savings and a professional management services. We are well aware when it comes to the corporate sector for the provision of reliable and efficient services.
          </p>
          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#333] text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-black transition-colors text-center">
              Free Consultations
            </button>
            <button className="w-full border-2 border-[#333] text-[#333] px-8 py-4 font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-[#333] hover:text-white transition-all text-center">
              Learn More <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1600880212340-02d956371844?auto=format&fit=crop&q=80&w=400&h=400" alt="Team" className="rounded-full w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" alt="Meeting" className="rounded-full w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=400" alt="Office" className="rounded-full w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400&h=400" alt="Business" className="rounded-full w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-full shadow-2xl border-8 border-gray-50 flex flex-col items-center justify-center w-48 h-48">
            <span className="text-4xl font-bold text-primary">16+</span>
            <span className="text-[10px] font-bold text-[#333] uppercase text-center leading-tight">Years of<br />Experience</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VisionMission = () => (
  <section className="py-24 bg-primary">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Vision",
            icon: <Eye size={32} />,
            text: "To provide exceptional, high-quality services that consistently meet and exceed the expectations of our valued customers. We strive to be a forward-thinking organization that understands and fulfills our clients' evolving needs through innovation, creativity, and continuous improvement. Driven by a deep passion for technology, content, and service excellence, we are committed to delivering reliable, customer-focused solutions that create lasting value, foster growth, strengthen partnerships, and positively impact the communities we serve."
          },
          {
            title: "Mission",
            icon: <Target size={32} />,
            text: "To build and maintain strong, long-term relationships with our clients by focusing on \"client share\" rather than \"market share,\" delivering exceptional value and personalized service. We are dedicated to creating a positive work environment that supports performance-based career development and fair compensation. By fostering a safe, inclusive, and enjoyable workplace, we empower our team members to grow professionally, collaborate effectively, and contribute meaningfully to the sustainable success and growth of our organization."
          },
          {
            title: "Core Value",
            icon: <Award size={32} />,
            text: "We believe in treating our customers with respect, fairness, and trust, building strong and lasting relationships. We grow and succeed through creativity, invention, and continuous innovation, embracing new ideas and opportunities for improvement. We are committed to integrating honesty, integrity, accountability, and strong business ethics into every aspect of our operations. Through transparency and responsibility, we ensure that our actions consistently reflect our values, guiding our decisions, partnerships, and long-term commitments."
          }
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start">
            <div className="bg-primary p-4 rounded-xl text-white mb-6">
              {card.icon}
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6 uppercase tracking-tight">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-24 bg-gray-50">
    <div className="container-custom">
      <h2 className="text-5xl font-bold text-center mb-20 text-[#333] uppercase tracking-tight">
        Why Choose <span className="text-primary">Tasheel?</span>
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 bg-linear-to-br from-[#4a4a4a] to-primary p-12 rounded-3xl text-white flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-6 leading-tight">Your Trusted Partner in Progress</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            Experience expert solutions, clear communication, and a commitment you can trust. From business setup to sustained success, we guide you with transparency, efficiency, and care.
          </p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { icon: <Users />, label: "Large Network Of Connections" },
            { icon: <Clock />, label: "Many Years Of Experience" },
            { icon: <ShieldCheck />, label: "Expertise In The Local Industry" },
            { icon: <Users />, label: "Professional Team" },
            { icon: <Zap />, label: "Efficient And Costeffective Investment" },
            { icon: <Handshake />, label: "Flexibility For The Ideal Satisfaction Of Needs" },
            { icon: <Users />, label: "Specialized Personnel" },
            { icon: <Building2 />, label: "Adaptability To The Operation Processes Of The Customers" },
            { icon: <Send />, label: "Flexibility In Mode Of Delivery" },
            { icon: <Award />, label: "Dedication To The Customers" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="bg-[#4a4a4a] p-3 rounded-lg text-white mb-4 group-hover:bg-primary transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase text-[#333] leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-2">Our Associated UAE</h2>
        <h3 className="text-6xl font-bold text-[#333] uppercase tracking-tighter">Government Departments</h3>
      </div>
      
      {/* Auto-scrolling logos container */}
      <div className="relative">
        <div 
          className="flex"
          style={{
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {/* First set of logos */}
          {[
            { name: "TADBEER", logo: "/Tad-beer.jpg" },
            { name: "Fujairah Govt", logo: "/Fujairah-Coat-of-Arms-1.jpg" },
            { name: "Federal Authority", logo: "/Federal-authority-for-identity.jpg" },
            { name: "Federal Tax", logo: "/Federal-tax-authority.jpg" },
            { name: "Etihad WE", logo: "/Etihad.jpg" },
            { name: "AFNIC", logo: "/Afnic.jpg" },
            { name: "Emirates Gate", logo: "/Emirates-Vehicle-Gate-EVG.jpg" },
            { name: "Fujairah Chamber", logo: "/Fujairah-Chamber-of-Commerce-and-Industry.jpg" },
            { name: "Fujairah Transport", logo: "/Fujairah-Transport-a-transportation-service-provider.jpg" },
            { name: "RTA", logo: "/Roads-and-Transport-Authority-RTA.jpg" },
            { name: "UAE Emblem", logo: "/Emblem-of-the-United-Arab-Emirates.jpg" }
          ].map((partner, idx) => (
            <div key={idx} className="shrink-0 mx-8">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-48 object-contain transition-all cursor-pointer"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {[
            { name: "TADBEER", logo: "/Tad-beer.jpg" },
            { name: "Fujairah Govt", logo: "/Fujairah-Coat-of-Arms-1.jpg" },
            { name: "Federal Authority", logo: "/Federal-authority-for-identity.jpg" },
            { name: "Federal Tax", logo: "/Federal-tax-authority.jpg" },
            { name: "Etihad WE", logo: "/Etihad.jpg" },
            { name: "AFNIC", logo: "/Afnic.jpg" },
            { name: "Emirates Gate", logo: "/Emirates-Vehicle-Gate-EVG.jpg" },
            { name: "Fujairah Chamber", logo: "/Fujairah-Chamber-of-Commerce-and-Industry.jpg" },
            { name: "Fujairah Transport", logo: "/Fujairah-Transport-a-transportation-service-provider.jpg" },
            { name: "RTA", logo: "/Roads-and-Transport-Authority-RTA.jpg" },
            { name: "UAE Emblem", logo: "/Emblem-of-the-United-Arab-Emirates.jpg" }
          ].map((partner, idx) => (
            <div key={`duplicate-${idx}`} className="shrink-0 mx-8">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-48 object-contain transition-all cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </section>
);

const Ownership = () => (
  <section className="py-24 bg-gray-50">
    <div className="container-custom">
      <h2 className="text-5xl font-bold text-center mb-20 text-[#333] uppercase tracking-tight">Company Ownership</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            name: "Leadership Team Member 1",
            title: "(Senior Executive)",
            image: "/1-1-819x1024.jpg"
          },
          {
            name: "Leadership Team Member 2", 
            title: "(Director)",
            image: "/2-1-819x1024.jpg"
          },
          {
            name: "Leadership Team Member 3",
            title: "(Manager)",
            image: "/3-1-819x1024.jpg"
          }
        ].map((person, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img src={person.image} alt={person.name} className="w-full h-auto max-w-md" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ setView }: { setView: (view: string) => void }) => (
  <footer className="bg-linear-to-r from-[#4a4a4a] to-primary text-white pt-24 pb-10">
    <div className="container-custom">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start">
            <Building2 className="text-white mb-4" size={80} strokeWidth={1} />
            <div className="flex flex-col">
              <span className="text-5xl font-bold tracking-tighter leading-none">TASHEEL</span>
              <span className="text-sm tracking-[0.3em] text-white/80 font-bold mt-1 uppercase">Consultancy</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/TasheelConsultancy" },
              { Icon: Twitter, href: "https://x.com/TasheelConsultancy" },
              { Icon: Instagram, href: "https://www.instagram.com/tasheelconsultancy?igsh=eTZ0ejV1dWtuY2Nx" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/tasheel-consultancy/" },
              { Icon: Ghost, href: "https://www.snapchat.com/Tasheel%20Consultancy" },
              { Icon: Youtube, href: "https://www.youtube.com/@tasheelconsultancy1076" },
              { Icon: Send, href: "https://telegram.org/tasheelconsultancy" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-md"
              >
                <social.Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight text-white">Major Services</h4>
          <ul className="space-y-4 text-white/90">
            <li className="hover:text-white transition-colors cursor-pointer">Business Setup & Management</li>
            <li className="hover:text-white transition-colors cursor-pointer">Free Zone Company Setup</li>
            <li className="hover:text-white transition-colors cursor-pointer">Sponsorship Arrangement</li>
            <li className="hover:text-white transition-colors cursor-pointer">P.R.O Services</li>
            <li className="hover:text-white transition-colors cursor-pointer">Labor & Immigration Services</li>
            <li className="hover:text-white transition-colors cursor-pointer">Shipping & Logistics</li>
            <li className="hover:text-white transition-colors cursor-pointer">Real Estate</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight text-white">Quick Links</h4>
          <ul className="space-y-4 text-white/90">
            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { setView('home'); window.scrollTo(0, 0); }}>Home</li>
            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { setView('company'); window.scrollTo(0, 0); }}>Our Company</li>
            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { setView('services'); window.scrollTo(0, 0); }}>Services</li>
            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { setView('gallery'); window.scrollTo(0, 0); }}>Gallery</li>
            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => { setView('contact'); window.scrollTo(0, 0); }}>Contact us</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-2xl font-bold mb-8 uppercase tracking-tight text-white">Contact us</h4>
          <ul className="space-y-4 text-white/90">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-white shrink-0 mt-1" />
              <span>Fujairah, UAE</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              <span>+971 56 606 8833</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              <span>+971 9 224 9625</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-white" />
              <span className="break-all">info@tasheelconsultancy.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/20 pt-10 text-center text-sm text-white/80">
        <p>Copyright © 2026 Tasheel, All rights reserved. Powered by Techzone</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar currentView={view} setView={setView} />
      
      {view === 'home' ? (
        <>
          <Hero />
          <Stats />
          <About />
          <VisionMission />
          <WhyChoose />
          <Partners />
          <Ownership />
        </>
      ) : view === 'company' ? (
        <CompanyPage />
      ) : view === 'services' ? (
        <ServicesPage />
      ) : view === 'gallery' ? (
        <GalleryPage />
      ) : (
        <ContactPage />
      )}
      
      <Footer setView={setView} />
    </div>
  );
}
