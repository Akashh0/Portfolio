import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectGallery = ({ projects, setHoveredProject }) => {
  return (
    <div className="w-full py-20 flex flex-col gap-px bg-transparent">
      {projects.map((project, index) => (
        <motion.a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          className="group relative w-full py-12 md:py-20 border-b border-white/5 flex flex-col transition-all duration-700 ease-in-out hover:px-8"
        >
          {/* Background Reveal Effect */}
          <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom pointer-events-none" />

          {/* MAIN CONTENT ROW */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-20">
            
            {/* Left Section: ID & Category */}
            <div className="flex items-center gap-6 min-w-[200px]">
              <span className="font-mono text-[10px] text-zinc-600 group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em] px-3 py-1 border border-zinc-800 rounded-full group-hover:border-white/20 group-hover:text-white transition-all">
                {project.category}
              </span>
            </div>

            {/* Middle Section: Project Title */}
            <div className="flex-grow">
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif text-zinc-400 group-hover:text-white group-hover:italic transition-all duration-700 tracking-tighter leading-none">
                {project.title}
              </h3>
            </div>

            {/* Right Section: Action Icon */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="p-4 rounded-full border border-white/5 text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                <ArrowUpRight size={24} strokeWidth={1} />
              </div>
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                View_Case_Study
              </span>
            </div>
          </div>

          {/* BOTTOM REVEAL: Description (Slides down on hover) */}
          <motion.div 
            className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out"
          >
            <div className="pt-8 md:pt-12 md:pl-[200px] flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="max-w-xl text-zinc-500 font-sans font-light text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
              
              {/* Aesthetic Pips for the UX feel */}
              <div className="flex gap-1 mb-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[2px] w-8 bg-zinc-900 group-hover:bg-zinc-700 transition-colors" />
                ))}
              </div>
            </div>
          </motion.div>

        </motion.a>
      ))}
    </div>
  );
};

export default ProjectGallery;