
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, Send, PlayCircle, ExternalLink, Mail } from 'lucide-react';
import { PROJECTS, SERVICES, SOCIAL_LINKS, CONTACT_EMAIL } from './constants';

/**
 * DEPLOYMENT INSTRUCTIONS FOR NETLIFY:
 * 1. Push this folder to a GitHub repository.
 * 2. Connect the GitHub repo to Netlify.
 * 3. Build Command: npm run build
 * 4. Publish Directory: dist (or build)
 * 5. Environment Variables: If using a custom API for the form, add it in Netlify UI.
 */

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
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white font-display uppercase">Abdy Tahir</span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em]">Video Editor</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#services" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all duration-300">Hire Me</a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-zinc-100 p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-32 px-6`}>
        <div className="flex flex-col space-y-8 text-center">
          <a href="#work" onClick={toggleMenu} className="text-3xl font-bold">Portfolio</a>
          <a href="#services" onClick={toggleMenu} className="text-3xl font-bold">Services</a>
          <a href="#contact" onClick={toggleMenu} className="text-3xl font-bold">Contact</a>
          <div className="flex justify-center space-x-6 pt-10">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="text-zinc-400 hover:text-white">{link.icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Gradients */}
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Transforming <br />
            <span className="gradient-text">Short-Form Content.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-zinc-400 text-lg mb-10 leading-relaxed">
            Helping creators and brands dominate <span className="text-zinc-100 font-medium">Reels, Shorts, and TikTok</span> with high-retention, cinematic video editing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center group hover:bg-blue-50 transition-all">
              View Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 glass rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10">
              Get Started
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
            <div className="w-1 h-2 bg-zinc-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Recent Work</h2>
              <p className="text-zinc-400 max-w-md">A selection of high-performing short-form edits for various niches.</p>
            </div>
            <a href="#" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors group">
              View All Projects <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={project.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-white text-black rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 hover:bg-blue-50 shadow-2xl"
                    >
                      <PlayCircle size={32} />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-10 rounded-3xl glass hover:bg-white/[0.05] transition-all duration-300 text-left flex flex-col items-start group">
                <div className="mb-6 p-3 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-white/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-24 bg-zinc-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 bg-white/5 border-b md:border-b-0 md:border-r border-white/5">
              <h2 className="text-3xl font-bold mb-8 tracking-tight">The Growth Formula</h2>
              <div className="space-y-6">
                {[
                  "Hook-first structure for retention",
                  "Seamless pacing and flow",
                  "Strategic subtitling & callouts",
                  "Emotional visual storytelling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <CheckCircle2 className="text-blue-500 shrink-0" size={24} />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center space-y-6">
              <div className="text-5xl font-black text-white">50M+</div>
              <div className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Total Views Managed</div>
              <p className="text-zinc-500 text-sm">Experience editing for multi-million follower channels.</p>
              <a href="#contact" className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">Book a Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's Create <br />Something Viral.</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed">
                Ready to take your social media presence to the next level? Send me a message and let's discuss your project vision.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl glass text-blue-400"><Mail size={24} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Direct Email</div>
                    <div className="text-lg font-bold text-white">{CONTACT_EMAIL}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl glass text-purple-400"><ExternalLink size={24} /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Social Media</div>
                    <div className="flex space-x-4 pt-1">
                      {SOCIAL_LINKS.filter(l => l.name !== 'Email').map((link) => (
                        <a key={link.name} href={link.url} className="text-zinc-400 hover:text-white transition-colors">
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              <form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center group hover:bg-zinc-200 transition-all"
                >
                  Send Inquiry
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg font-bold tracking-tight text-white font-display uppercase">Abdy Tahir</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</span>
            </div>
            
            <div className="flex space-x-6">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} className="text-zinc-500 hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
            
            <a href="#" className="text-zinc-500 text-xs hover:text-white transition-colors underline underline-offset-4">
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;