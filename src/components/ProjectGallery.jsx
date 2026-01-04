import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectGallery = ({ projects, setHoveredProject }) => {
  return (
    <div className="flex flex-col space-y-8 py-10 w-full">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          className="group relative cursor-pointer"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          {/* The Line */}
          <div className="h-[1px] w-full bg-white/20 group-hover:bg-white/60 transition-colors duration-500 mb-6"></div>
          
          <div className="flex justify-between items-baseline px-4">
            {/* Left Side: Title */}
            <div>
              <p className="text-sm font-sans text-gray-500 mb-2 tracking-widest uppercase">
                0{project.id} — {project.category}
              </p>
              <h3 className="text-5xl md:text-6xl font-serif text-gray-400 group-hover:text-white transition-colors duration-500 italic">
                {project.title}
              </h3>
            </div>

            {/* Right Side: Arrow & Interaction */}
            <div className="hidden md:flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span className="text-sm font-sans tracking-wide">Explore Case Study</span>
              <div className="p-3 rounded-full border border-white/30 text-white">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* Description (Visible only on hover) */}
          <div className="h-0 overflow-hidden group-hover:h-16 transition-all duration-500 ease-in-out">
              <p className="text-gray-400 font-sans mt-4 px-4 max-w-xl">
                {project.description}
              </p>
          </div>
        </motion.div>
      ))}
      
      {/* Final Line */}
      <div className="h-[1px] w-full bg-white/20"></div>
    </div>
  );
};

export default ProjectGallery;