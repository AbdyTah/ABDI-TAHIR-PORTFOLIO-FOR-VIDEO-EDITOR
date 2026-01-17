import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight, Send, Mail, PlayCircle, Check, Phone, FileUp, Scissors, Video, Loader2, RefreshCcw } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL, PHONE_NUMBER, LOGO_URL } from './constants';

const workflowSteps = [
  {
    icon: <FileUp className="w-6 h-6" />,
    text: "You send your footage and idea"
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    text: "I edit and refine the video"
  },
  {
    icon: <Video className="w-6 h-6" />,
    text: "You receive a ready-to-post video"
  }
];

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, [isLoading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      if (isMenuOpen) setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;
    }
    return url;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            ...data,
            _subject: `New Portfolio Inquiry from ${data.name}`,
            _template: "table"
        })
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try emailing me directly at " + CONTACT_EMAIL);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen selection:bg-indigo-500/30 ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-[200] bg-[#030303] flex flex-col items-center justify-center transition-all duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-24 h-24 animate-pulse">
          <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white font-display uppercase leading-none block overflow-visible">Abdy Tahir</span>
              <span className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-bold tracking-widest block">Video Editor</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-3 rounded-full btn-premium btn-glow bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.15em] shadow-xl active:scale-95 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Refined Background Depth Blobs - Smaller and more scattered */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[90px] animate-float"></div>
          <div className="absolute bottom-[30%] right-[25%] w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] animate-float-reverse"></div>
          <div className="absolute top-[50%] left-[60%] w-[200px] h-[200px] bg-indigo-400/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="reveal">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-6 border-b border-zinc-800 pb-1">Independent Video Editor</span>
            <h1 className="text-6xl md:text-[8.5rem] font-black mb-10 tracking-tighter text-white leading-[0.82] uppercase">
              <span className="inline-block pb-2 overflow-visible">Your Clip.</span> <br />
              <span className="gradient-text italic inline-block pr-8 pb-4 overflow-visible">My Edit.</span>
            </h1>
            
            <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base mb-2 leading-relaxed tracking-wide font-medium">
              I turn raw footage into professional <span className="text-white">Reels, Shorts, and TikToks.</span>
            </p>
            
            <div className="flex flex-col items-center justify-center mt-12">
              <a 
                href="#work" 
                onClick={(e) => scrollToSection(e, 'work')}
                className="group px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-zinc-900/10">
        <div className="container mx-auto px-6">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">How It Works</h2>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Simple, direct steps to your final video.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className={`reveal stagger-${idx + 1} flex flex-col items-center text-center`}>
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-indigo-400 mb-6 border-indigo-500/20">
                  {step.icon}
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px] mx-auto font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="reveal mb-20">
            <p className="text-indigo-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Portfolio</p>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-none block overflow-visible">Selected Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`reveal stagger-${(idx % 3) + 1} group cursor-pointer`}>
                <div 
                  onClick={() => setActiveVideo(project.videoUrl)}
                  className="relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-indigo-500/60 shadow-2xl"
                >
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-all duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[4px]">
                    <div className="p-5 bg-white text-black rounded-full mb-4 translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      <PlayCircle className="w-10 h-10" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 px-4">
                  <h3 className="text-xl font-bold mb-2 text-white uppercase tracking-tight block overflow-visible">{project.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-500">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-indigo-500 transition-colors p-2 glass rounded-full"
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl glass border-white/10">
            <iframe
              className="w-full h-full"
              src={getEmbedUrl(activeVideo)}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="reveal text-center mb-24">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-white">Focus Areas</h2>
            <div className="h-px w-12 bg-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className={`reveal stagger-${(idx % 4) + 1} p-12 rounded-[3rem] glass transition-all duration-500 hover:border-indigo-500/50 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] group relative overflow-hidden`}>
                <div className="mb-8 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all w-fit">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black mb-4 uppercase tracking-tight text-white block overflow-visible">{service.title}</h3>
                <h4 className="text-zinc-500 text-xs leading-relaxed font-medium">{service.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-6xl font-black mb-6 tracking-tighter leading-[0.9] text-white uppercase italic block overflow-visible">Let's work <br /><span className="text-indigo-500">together.</span></h2>
              
              <div className="flex items-center space-x-2 text-indigo-400 mb-10">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Currently available for new projects.</span>
              </div>
              
              <div className="space-y-8">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full glass text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"><Mail size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Email</span>
                    <span className="text-lg font-bold text-white group-hover:underline underline-offset-4">{CONTACT_EMAIL}</span>
                  </div>
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-full glass text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all"><Phone size={22} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Phone / WhatsApp</span>
                    <span className="text-lg font-bold text-white group-hover:underline underline-offset-4">{PHONE_NUMBER}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="glass p-10 md:p-14 rounded-[3.5rem] relative border-white/5 min-h-[400px] flex items-center justify-center">
                {!isSent ? (
                  <form onSubmit={handleFormSubmit} className="space-y-8 w-full animate-in fade-in duration-500">
                    <div className="space-y-4">
                      <input 
                          type="text" 
                          name="name"
                          placeholder="Name" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white placeholder:text-zinc-700" 
                      />
                      <input 
                          type="email" 
                          name="email"
                          placeholder="Email" 
                          required 
                          className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm text-white placeholder:text-zinc-700" 
                      />
                    </div>
                    <textarea 
                      name="message"
                      placeholder="Tell me about your project" 
                      rows={3} 
                      required 
                      className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none text-white placeholder:text-zinc-700"
                    ></textarea>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center transition-all duration-500 bg-indigo-600 text-white hover:bg-indigo-700 btn-glow disabled:opacity-70"
                    >
                      {isSubmitting ? (
                          <>Sending... <Loader2 size={18} className="ml-2 animate-spin" /></>
                      ) : (
                          <>Send Message <Send size={16} className="ml-2" /></>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-6 animate-in zoom-in-95 duration-700">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                      <Check size={40} className="animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter block overflow-visible">Message Sent!</h3>
                    <p className="text-zinc-400 text-sm max-w-[240px] mx-auto leading-relaxed">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSent(false)}
                      className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white flex items-center justify-center mx-auto transition-colors mt-8"
                    >
                      <RefreshCcw size={12} className="mr-2" /> Send another message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 mb-6">
               <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-black text-white font-display uppercase tracking-tighter block overflow-visible">Abdy Tahir</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {SOCIAL_LINKS.map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">{link.name}</a>
            ))}
          </div>
          <p className="mt-12 text-[9px] text-zinc-800 uppercase tracking-widest font-black">© {new Date().getFullYear()} Abdy Tahir. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;