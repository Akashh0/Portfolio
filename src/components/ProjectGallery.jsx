import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectGallery = ({ projects, setHoveredProject }) => {
  return (
    // CHANGED: Increased gap to 'gap-10' (40px) and kept grid-cols-3
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full py-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          // CHANGED: Adjusted padding (p-8) and height (min-h-[400px]) for a more premium, spread-out look
          className="group relative flex flex-col justify-between p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer min-h-[400px]"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* Top Section */}
          <div className="flex justify-between items-start mb-6">
            <span className="text-[11px] font-mono text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <div className="p-3 rounded-full border border-white/20 text-white opacity-50 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500">
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* Middle Section: Title */}
          <div className="flex-grow flex items-center">
            <h3 className="text-4xl xl:text-5xl font-serif text-gray-300 group-hover:text-white transition-colors duration-500 leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Bottom Section: Description */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-400 font-sans text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
              {project.description}
            </p>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;