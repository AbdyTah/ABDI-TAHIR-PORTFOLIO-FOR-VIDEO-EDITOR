import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PlayCircle, Send, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL, FEATURES } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-white font-display uppercase leading-none group-hover:gradient-text transition-all">Abdy Tahir</span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-medium mt-1">Video Editor Portfolio</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {['Work', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] gradient-bg transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full gradient-bg text-white text-xs font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-zinc-100 p-2 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-700 flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-10 text-center">
          {['Work', 'Services', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={toggleMenu} 
              className="text-4xl font-black uppercase tracking-tighter text-white hover:gradient-text transition-all"
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-8 pt-8 justify-center">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="text-zinc-500 hover:text-white transition-colors">{link.icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Specializing in Viral Shorts</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-black mb-8 tracking-tighter text-white leading-[0.9] uppercase">
            Editing <br />
            <span className="gradient-text">For Growth.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
            I craft cinematic <span className="text-white font-medium">Reels, Shorts, and TikToks</span> designed to stop the scroll and turn viewers into loyal followers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#work" className="w-full sm:w-auto px-10 py-5 gradient-bg text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center group hover:scale-105 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              View Portfolio
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-5 glass rounded-2xl text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-32 relative bg-zinc-950/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-6">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-4 block">Selected Projects</span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase leading-none">Creative Work</h2>
              <p className="text-zinc-500 text-lg leading-relaxed">A visual showcase of short-form storytelling, dynamic transitions, and viral-ready edits.</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-3xl font-black text-white">3+ Years</span>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">In the industry</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-all duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20 backdrop-blur-md">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight leading-tight">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 font-light">{project.description}</p>
                    
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 text-white font-bold uppercase tracking-widest text-[10px] group/btn transition-all"
                    >
                      <span className="p-3 bg-white text-black rounded-full group-hover/btn:scale-110 transition-transform">
                        <PlayCircle size={20} fill="currentColor" />
                      </span>
                      <span className="group-hover/btn:translate-x-2 transition-transform underline underline-offset-4 decoration-zinc-700">Watch Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-purple-500 mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">My Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-10 rounded-[2.5rem] glass hover:bg-white/[0.04] transition-all duration-500 group border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] translate-x-10 -translate-y-10 group-hover:bg-white/10 transition-all"></div>
                <div className="mb-8 p-4 rounded-2xl bg-zinc-900 border border-white/5 w-fit group-hover:scale-110 transition-transform group-hover:border-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Why Me Section */}
      <section className="py-32 bg-zinc-950/40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-[0.95]">
                Why Work <br />
                <span className="gradient-text">With Me?</span>
              </h2>
              <div className="space-y-6">
                {FEATURES.map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 p-4 rounded-2xl glass border-none hover:bg-white/[0.03] transition-all">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <CheckCircle2 className="text-blue-500" size={24} />
                    </div>
                    <span className="text-zinc-300 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 p-12 glass rounded-[3rem] border border-white/10 text-center">
                <div className="text-8xl font-black text-white mb-4 tracking-tighter">50M+</div>
                <div className="text-blue-400 uppercase tracking-[0.4em] text-xs font-black mb-6">Total Views Managed</div>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  I've helped creators across niches achieve viral status through precise pacing and psychology-backed editing.
                </p>
                <div className="mt-10 pt-10 border-t border-white/5 flex justify-center space-x-12">
                  <div>
                    <div className="text-3xl font-black text-white">100%</div>
                    <div className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">24h</div>
                    <div className="text-[10px] text-zinc-600 uppercase tracking-widest mt-1">Turnaround</div>
                  </div>
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-4 block">Get in touch</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">Ready to Go <br />Viral?</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed font-light">
                Fill out the form below or reach out directly to discuss your project. I usually respond within a few hours.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-6 group">
                  <div className="p-4 rounded-2xl glass text-blue-400 group-hover:gradient-bg group-hover:text-white transition-all"><Mail size={28} /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-1">Direct Message</div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl md:text-2xl font-black text-white hover:gradient-text transition-all">{CONTACT_EMAIL}</a>
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-black mb-6">Social Channels</div>
                  <div className="flex space-x-6">
                    {SOCIAL_LINKS.filter(l => l.name !== 'Email').map((link) => (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        className="p-4 rounded-2xl glass text-zinc-400 hover:text-white hover:border-white/20 transition-all transform hover:-translate-y-2"
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-[3rem] blur-2xl opacity-10"></div>
              <div className="relative glass p-8 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl">
                <form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST" className="space-y-8">
                  <input type="hidden" name="_subject" value="New Portfolio Inquiry - Abdy Tahir" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-medium placeholder:text-zinc-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Your Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-medium placeholder:text-zinc-700"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={6} 
                      className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none font-medium placeholder:text-zinc-700"
                      placeholder="Tell me about your vision..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full gradient-bg text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-all"
                  >
                    Send Proposal
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-zinc-950/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-black tracking-tighter text-white font-display uppercase">Abdy Tahir</span>
              <p className="text-zinc-500 text-xs mt-3 font-medium uppercase tracking-[0.3em]">Crafting viral stories since 2021.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex space-x-8 mb-4">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.name} href={link.url} className="text-zinc-500 hover:text-white transition-all transform hover:scale-110">
                    {link.icon}
                  </a>
                ))}
              </div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} Abdy Tahir. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;