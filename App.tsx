import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Send, ExternalLink, Mail, CheckCircle2, PlayCircle } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white font-display uppercase">Abdy Tahir</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Video Editor</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Portfolio</a>
            <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Services</a>
            <a href="#contact" className="px-5 py-2 rounded-lg btn-gradient text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Hire Me</a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Available for viral projects</span>
          </div>
          
          <h1 className="text-5xl md:text-[7rem] font-black mb-8 tracking-tighter text-white leading-none uppercase">
            Transforming <br />
            <span className="gradient-text">Short Form.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
            I help creators and brands dominate social media with high-retention <span className="text-white font-bold">Reels, Shorts, and TikToks</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#work" className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest flex items-center justify-center group hover:bg-zinc-200 transition-all">
              Watch Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 glass rounded-xl text-white font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              Start Project
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="work" className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Selected Edits</h2>
            <div className="h-1 w-20 btn-gradient rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="portfolio-card group flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity flex items-center justify-center pointer-events-none">
                    <PlayCircle className="text-white w-16 h-16 opacity-80" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-blue-400 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute inset-0"
                  ></a>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">My Toolkit</h2>
            <p className="text-zinc-500 max-w-xl mx-auto italic">Everything you need to go from raw footage to viral sensations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-10 rounded-2xl glass hover:bg-white/[0.04] transition-all group">
                <div className="mb-6 p-3 rounded-xl bg-zinc-900 border border-white/5 group-hover:scale-110 transition-transform w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black mb-8 tracking-tighter leading-none uppercase">Let's Hit <br /><span className="gradient-text">The Explore Page.</span></h2>
              <p className="text-zinc-400 mb-10 text-lg">
                Ready to take your content seriously? Send me a brief or just say hi. I'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg glass text-blue-400"><Mail size={20} /></div>
                  <span className="font-bold text-white">{CONTACT_EMAIL}</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  {SOCIAL_LINKS.filter(l => l.name !== 'Email').map((link) => (
                    <a key={link.name} href={link.url} className="p-3 rounded-lg glass text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl">
              <form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Name" required className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                  <input type="email" name="email" placeholder="Email" required className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <textarea name="message" placeholder="Project details..." rows={5} required className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"></textarea>
                <button type="submit" className="w-full py-4 btn-gradient text-white font-black uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center">
                  Send Inquiry <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black text-white font-display uppercase tracking-tight">Abdy Tahir</span>
            <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="text-zinc-600 hover:text-white transition-colors">{link.icon}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-10 text-center">
          <a href="#work" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-white">Work</a>
          <a href="#services" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-white">Services</a>
          <a href="#contact" onClick={toggleMenu} className="text-4xl font-black uppercase tracking-tighter text-white">Contact</a>
        </div>
      )}
    </div>
  );
};

export default App;