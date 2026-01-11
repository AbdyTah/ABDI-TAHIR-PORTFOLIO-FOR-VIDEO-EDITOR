import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Send, Mail, PlayCircle, Plus, Check } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Scroll reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    // Standard Netlify/FormSubmit logic
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Exclusive Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-black text-xs">AT</div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white font-display uppercase leading-none">Abdy Tahir</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Creative Editor</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {['Work', 'Toolkit', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-widest">{item}</a>
            ))}
            <a href="#contact" className="px-6 py-2.5 rounded-full btn-premium bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-transform">
              Hire Me
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-float" style={{animationDelay: '-3s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="reveal">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 border-b border-zinc-800 pb-1">Based in UK / Global</span>
            <h1 className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter text-white leading-[0.85] uppercase">
              Premium <br />
              <span className="gradient-text italic">Storytelling.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base mb-12 leading-relaxed tracking-wide font-medium">
              Elevating brands through high-performance <span className="text-white">Reels, Shorts, and TikTok</span> edits designed for maximal retention.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#work" className="group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-zinc-200 transition-all">
                The Portfolio
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-10 py-5 glass rounded-full text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 reveal stagger-3 hidden md:block">
           <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </section>

      {/* Portfolio Section: Creative Grid */}
      <section id="work" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="reveal mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-indigo-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Case Studies</p>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-none">Featured Work</h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm italic leading-relaxed">
              Curated selection of viral edits that combined reach over 5M+ views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`reveal stagger-${(idx % 3) + 1} group cursor-pointer`}>
                <div className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0 opacity-80"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                    <div className="p-4 bg-white/10 rounded-full mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <PlayCircle className="text-white w-10 h-10" />
                    </div>
                    <span className="text-white text-xs font-black uppercase tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Watch Reel</span>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest text-indigo-400 border border-white/5">
                      {project.category}
                    </span>
                  </div>
                  
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
                </div>
                
                <div className="mt-8 px-2">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Services Toolkit */}
      <section id="toolkit" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="reveal text-center mb-24">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">The Toolkit</h2>
            <div className="h-px w-12 bg-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className={`reveal stagger-${(idx % 4) + 1} p-12 rounded-[2.5rem] glass hover:bg-white/[0.04] transition-all group relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Plus className="w-12 h-12 text-white" />
                </div>
                <div className="mb-8 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 group-hover:border-indigo-500/30 group-hover:scale-110 transition-all w-fit">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black mb-4 uppercase tracking-tight text-white">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: Clean & Minimal */}
      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-6xl font-black mb-10 tracking-tighter leading-[0.9] text-white uppercase italic">Let's build <br /><span className="text-indigo-500">The Brand.</span></h2>
              <p className="text-zinc-400 mb-12 text-base leading-relaxed max-w-md">
                Don't just post. Dominate. If you're looking for high-end creative direction and execution, let's talk.
              </p>
              
              <div className="space-y-8">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full glass text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"><Mail size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Direct Line</span>
                    <span className="text-lg font-bold text-white group-hover:underline underline-offset-4">{CONTACT_EMAIL}</span>
                  </div>
                </a>
                
                <div className="flex space-x-5 pt-4">
                  {SOCIAL_LINKS.filter(l => l.name !== 'Email').map((link) => (
                    <a key={link.name} href={link.url} className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="glass p-10 md:p-14 rounded-[3rem] relative">
                <form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST" onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Your Details</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" name="name" placeholder="Full Name" required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                      <input type="email" name="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">The Project</label>
                    <textarea name="message" placeholder="Tell me about your vision..." rows={4} required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSent}
                    className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all duration-500 ${isSent ? 'bg-green-500 text-white' : 'bg-white text-black hover:bg-zinc-200 shadow-2xl shadow-white/5'}`}
                  >
                    {isSent ? (
                      <>Sent Successfully <Check size={18} className="ml-2" /></>
                    ) : (
                      <>Send Inquiry <Send size={16} className="ml-2" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col items-center mb-10">
            <span className="text-2xl font-black text-white font-display uppercase tracking-tighter">Abdy Tahir</span>
            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.4em] mt-3 tracking-widest">© {new Date().getFullYear()} – The New Standard</p>
          </div>
          <div className="flex space-x-12">
            {['Instagram', 'TikTok', 'YouTube'].map(platform => (
              <a key={platform} href="#" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">{platform}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black p-10 flex flex-col justify-center space-y-12">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-zinc-500"><X size={32} /></button>
          {['Work', 'Toolkit', 'Contact'].map((item, idx) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-6xl font-black uppercase tracking-tighter text-white hover:text-indigo-500 transition-colors"
              style={{transitionDelay: `${idx * 0.1}s`}}
            >
              {item}
            </a>
          ))}
          <div className="pt-10 border-t border-white/5 mt-auto">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Let's Connect</p>
            <span className="text-white text-lg font-bold">{CONTACT_EMAIL}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;