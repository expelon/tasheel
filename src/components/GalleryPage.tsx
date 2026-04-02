import { motion } from 'motion/react';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';

const galleryVideos = [
  {
    id: "OgtjknM6HRU",
    title: "Arabian Inspirations E#43 (T.A Haque)",
    thumbnail: "https://img.youtube.com/vi/OgtjknM6HRU/hqdefault.jpg"
  },
  {
    id: "XPwWOWpdJVQ",
    title: "UAE WELCOMES BUSINESSMEN TO FUJAIRAH",
    thumbnail: "https://img.youtube.com/vi/XPwWOWpdJVQ/hqdefault.jpg"
  },
  {
    id: "FregrpUOzEo",
    title: "Tasheel Consultancy Services",
    thumbnail: "https://img.youtube.com/vi/FregrpUOzEo/hqdefault.jpg"
  }
];

const youtubeVideos = [
  {
    id: "OgtjknM6HRU",
    title: "Arabian Inspirations",
    thumbnail: "https://img.youtube.com/vi/OgtjknM6HRU/hqdefault.jpg"
  },
  {
    id: "FregrpUOzEo",
    title: "Tasheel Services",
    thumbnail: "https://img.youtube.com/vi/FregrpUOzEo/hqdefault.jpg"
  },
  {
    id: "XPwWOWpdJVQ",
    title: "Fujairah Business",
    thumbnail: "https://img.youtube.com/vi/XPwWOWpdJVQ/hqdefault.jpg"
  },
  {
    id: "JT4HjscDm5I",
    title: "Consultancy Feature",
    thumbnail: "https://img.youtube.com/vi/JT4HjscDm5I/hqdefault.jpg"
  }
];

const images = [
  {
    url: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800",
    title: "Independence Day Celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    title: "Dubai Cityscape"
  },
  {
    url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800",
    title: "Modern Office"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    title: "Business Meeting"
  }
];

const GalleryPage = () => {
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920" 
          alt="Gallery Banner" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <h1 className="relative z-20 text-7xl font-bold text-white uppercase tracking-tight">Gallery</h1>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-[#c59d5f] font-bold text-lg mb-4 block uppercase tracking-widest">VIDEO GALLERY</span>
            <h2 className="text-5xl font-bold text-[#333] uppercase tracking-tighter">Our Latest Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryVideos.map((video, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg mb-4">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-lg font-bold text-[#333] group-hover:text-[#c59d5f] transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#c59d5f] font-bold text-lg mb-4 block uppercase tracking-widest">SOCIAL MEDIA</span>
              <h2 className="text-5xl font-bold text-[#333] mb-8 uppercase tracking-tighter leading-tight">
                Follow Us on <span className="text-[#c59d5f]">Instagram</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Stay updated with our latest news, events, and business insights. Join our community on Instagram and be part of our journey.
              </p>
              <a 
                href="https://www.instagram.com/tasheelconsultancy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#333] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#c59d5f] transition-all rounded-sm"
              >
                <Instagram size={24} />
                @tasheelconsultancy
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden rounded-2xl shadow-md"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#c59d5f] font-bold text-lg mb-4 block uppercase tracking-widest">YOUTUBE CHANNEL</span>
              <h2 className="text-5xl font-bold text-[#333] mb-8 uppercase tracking-tighter leading-tight">
                Subscribe to Our <span className="text-[#c59d5f]">YouTube</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Watch our latest business insights, success stories, and expert consultations. Subscribe to our channel to stay ahead in the business world.
              </p>
              <a 
                href="https://www.youtube.com/@tasheelconsultancy1076" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#333] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#c59d5f] transition-all rounded-sm"
              >
                <Youtube size={24} />
                Tasheel Consultancy
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {youtubeVideos.map((video, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-video overflow-hidden rounded-2xl shadow-md bg-gray-100"
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
