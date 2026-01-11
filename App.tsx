import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Send, Mail, PlayCircle, Plus, Check, Phone } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL, PHONE_NUMBER } from './constants';

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
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  const navItems = [
    { label: 'Portfolio', id: 'work' },
    { label: 'Services', id: 'services' }
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      {/* Essential Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-black text-xs text-white">AT</div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white font-display uppercase leading-none">Abdy Tahir</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-bold tracking-widest">Video Editor</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`} 
                className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full btn-premium btn-glow bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.15em] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
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
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 border-b border-zinc-800 pb-1">Video Editor & Content Creator</span>
            <h1 className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter text-white leading-[0.85] uppercase">
              Your Clip. <br />
              <span className="gradient-text italic">My Edit</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base mb-12 leading-relaxed tracking-wide font-medium">
              I help you grow on social media with high-quality <span className="text-white">Reels, Shorts, and TikTok</span> edits.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#work" className="group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-10 py-5 glass rounded-full text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                Let's Talk
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
              <p className="text-indigo-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Portfolio</p>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-none">Recent Work</h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm italic leading-relaxed">
              A look at some of the best videos I have edited recently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`reveal stagger-${(idx % 3) + 1} group cursor-pointer`}>
                <div className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-indigo-500/60 group-hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)]">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-1000 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  />
                  {/* Hover Overlay with refined indigo tint */}
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[6px]">
                    <div className="p-5 bg-white text-black rounded-full mb-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl shadow-indigo-500/20">
                      <PlayCircle className="w-10 h-10" />
                    </div>
                    <span className="text-white text-[10px] font-black uppercase tracking-[0.4em] translate-y-6 group-hover:translate-y-0 transition-all duration-700">Watch Now</span>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest text-indigo-400 border border-white/10 shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20"></a>
                </div>
                
                <div className="mt-8 px-4 transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Toolkit */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="reveal text-center mb-24">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">My Services</h2>
            <div className="h-px w-12 bg-indigo-500 mx-auto shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className={`reveal stagger-${(idx % 4) + 1} p-12 rounded-[3rem] glass transition-all duration-500 hover:border-indigo-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] hover:bg-white/[0.04] group relative overflow-hidden border-transparent`}>
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Plus className="w-16 h-16 text-white" />
                </div>
                <div className="mb-8 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 group-hover:scale-110 transition-all w-fit shadow-lg shadow-transparent group-hover:shadow-indigo-500/5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black mb-4 uppercase tracking-tight text-white group-hover:text-indigo-400 transition-colors">{service.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed font-medium transition-colors group-hover:text-zinc-400">{service.description}</p>
                
                {/* Subtle border highlight line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-6xl font-black mb-10 tracking-tighter leading-[0.9] text-white uppercase italic">Let's build <br /><span className="text-indigo-500">The Brand.</span></h2>
              <p className="text-zinc-400 mb-12 text-base leading-relaxed max-w-md">
                Have a video project in mind? Send me a message and I’ll reply quickly.
              </p>
              
              <div className="space-y-8">
                {/* Email Link */}
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full glass text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl shadow-transparent group-hover:shadow-indigo-500/20"><Mail size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Email</span>
                    <span className="text-lg font-bold text-white group-hover:underline underline-offset-4">{CONTACT_EMAIL}</span>
                  </div>
                </a>

                {/* Phone Link */}
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full glass text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl shadow-transparent group-hover:shadow-indigo-500/20"><Phone size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Direct Call / WhatsApp</span>
                    <span className="text-lg font-bold text-white group-hover:underline underline-offset-4">{PHONE_NUMBER}</span>
                  </div>
                </a>
                
                <div className="flex space-x-5 pt-4">
                  {SOCIAL_LINKS.filter(l => l.name !== 'Email').map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all shadow-lg">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="glass p-10 md:p-14 rounded-[3.5rem] relative border-white/5 shadow-2xl shadow-indigo-500/5">
                <form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST" onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Your Details</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" name="name" placeholder="Name" required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white" />
                      <input type="email" name="email" placeholder="Email" required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Message</label>
                    <textarea name="message" placeholder="What can I help you with?" rows={4} required className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none text-white"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSent}
                    className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all duration-500 shadow-xl ${isSent ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/20 btn-glow'}`}
                  >
                    {isSent ? (
                      <>Success! <Check size={18} className="ml-2" /></>
                    ) : (
                      <>Send Message <Send size={16} className="ml-2" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-10">
            <span className="text-2xl font-black text-white font-display uppercase tracking-tighter">Abdy Tahir</span>
            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest mt-3">© {new Date().getFullYear()} – Professional Video Editing</p>
          </div>
          <div className="flex space-x-12">
            {SOCIAL_LINKS