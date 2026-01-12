
import React, { useEffect, useRef } from 'react';
import { PROJECTS, SKILL_CATEGORIES } from './constants';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter uppercase font-mono">
            Taseen<span className="text-gray-400">.X</span>
          </div>
          <div className="hidden md:flex space-x-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-gray-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:taseen2098@gmail.com" 
            className="text-xs font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all"
          >
            SAY HELLO
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 max-w-6xl mx-auto">
        <div className="reveal">
          <h1 className="text-6xl md:text-[120px] leading-[0.9] font-bold tracking-tighter mb-8">
            Software <br /> Engineer.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xl md:text-2xl text-gray-500 leading-snug editorial-serif">
                Based in Dhaka, Bangladesh. Building scalable full-stack applications and automated logic engines. Focused on technical excellence and practical problem-solving.
              </p>
            </div>
            <div className="flex flex-col md:items-end space-y-2 text-sm font-mono text-gray-400 uppercase tracking-widest">
              <span>+880 1731849320</span>
              <a href="mailto:taseen2098@gmail.com" className="hover:text-black">taseen2098@gmail.com</a>
              <span className="text-black font-bold">Open for Internships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16 flex items-baseline justify-between border-b-2 border-black pb-4">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Selected Works</h2>
            <span className="font-mono text-sm text-gray-400">01 — 04</span>
          </div>
          <div className="reveal space-y-0">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-16 border-l-4 border-black pl-8">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Technical Stack</h2>
            <p className="text-gray-500 mt-2 text-lg italic editorial-serif">A disciplined toolkit for modern engineering.</p>
          </div>
          
          <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 border-b border-gray-200 pb-2">
                  {cat.category}
                </h4>
                <ul className="space-y-2">
                  {cat.skills.map(skill => (
                    <li key={skill} className="text-lg font-medium tracking-tight hover:translate-x-1 transition-transform cursor-default">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center reveal">
        <div className="inline-block mb-8">
          <div className="h-1 w-12 bg-black mx-auto"></div>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-12 tracking-tighter">
          Adaptable engineering driven by necessity and rigorous documentation.
        </h3>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed italic editorial-serif">
          I prioritize solving technical constraints through thorough research and persistent iteration. 
          Whether it's learning a new API overnight or refactoring a legacy system, 
          the goal is always clean, functional logic.
        </p>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="reveal">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-white/90">Contact.</h2>
            <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest">
              <a href="mailto:taseen2098@gmail.com" className="hover:text-gray-400 transition-colors border-b border-white/20 pb-1">Email</a>
              <a href="https://github.com/Taseen-X2098" target="_blank" className="hover:text-gray-400 transition-colors border-b border-white/20 pb-1">GitHub</a>
              <a href="#" className="hover:text-gray-400 transition-colors border-b border-white/20 pb-1 opacity-50 cursor-not-allowed">LinkedIn</a>
            </div>
          </div>
          <div className="reveal flex flex-col justify-end">
            <div className="space-y-6 md:text-right">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Based In</p>
                <p className="text-xl font-medium">Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Direct</p>
                <p className="text-xl font-medium underline decoration-gray-500">+880 1731849320</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Role Type</p>
                <p className="text-xl font-medium">Software Intern / Junior Dev</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-500">
          <p>© 2026 TASEEN SOFTWARE SOLUTIONS</p>
          <p>DHK / BGD</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
