import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const ProfileView = () => {
  return (
    <div className="relative isolate z-0 bg-[#050505] w-[calc(100vw-24px)] md:w-[calc(100vw-32px)] left-1/2 -translate-x-1/2 -mt-[80px] md:-mt-[120px] h-[92vh] md:h-[95vh] rounded-b-[2.5rem] md:rounded-b-[3rem] overflow-hidden flex flex-col justify-between px-6 md:px-16 pt-16 md:pt-24 pb-12 md:pb-16">
      
      {/* 1. THE CENTERED IMAGE */}
      <img 
        src="/Assets/Image_1.png" 
        alt="Akash Krishnan" 
        className="absolute inset-0 -z-10 w-full h-full rounded-b-[2rem] md:rounded-b-[3rem] object-cover object-[center_35%] md:object-[center_25%] scale-110 md:scale-105 transition-transform duration-[3s] ease-out filter grayscale-[80%] contrast-125 opacity-60"
      />

      {/* 2. VIGNETTE GRADIENTS */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]/95"></div>

      {/* 3. TOP SECTION: NAME (Pushed higher as per red arrow) */}
      <div className="relative z-10 w-full flex flex-col items-start leading-[0.8] md:-ml-8 mt-1">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[8rem] lg:text-[8.5rem] font-serif text-white tracking-tighter"
        >
          Akash
        </motion.h1>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-6xl md:text-[8rem] lg:text-[8.5rem] font-serif text-zinc-500 italic tracking-tighter"
        >
          Krishnan.
        </motion.h1>
      </div>

      {/* MIDDLE SECTION: Large spacer to push description down */}
      <div className="flex-grow min-h-[10vh]"></div>

      {/* 4. BOTTOM SECTION: Bio and Controls (Dropped lower as per red arrow) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-10 md:gap-12 md:-ml-8"
      >
        
        {/* Bottom Left: Bio */}
        <div className="max-w-md text-left">
          <p className="text-[9px] md:text-xs font-mono text-zinc-500 tracking-[0.3em] uppercase mb-3 md:mb-4 [text-shadow:_0_2px_10px_rgba(0,0,0,1)]">
            AI & Data Enthusiast | Blender Artist
          </p>
          <p className="text-sm md:text-lg text-zinc-400 font-sans font-light leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,1)]">
            I bridge the gap between high-dimensional data and seamless User Interface. My work centers on teaching machines to see patterns, specializing in <span className="text-white font-medium">Computer Vision, Complex analysis</span> and <span className="text-white font-medium">Predictive Modeling</span>.
          </p>
        </div>

        {/* Bottom Right: Action Links */}
        <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-6 md:gap-8 border-t border-white/5 md:border-none pt-6 md:pt-0">
          
          <div className="flex items-center gap-5 md:gap-6 text-zinc-500">
            <a href="https://github.com/Akashh0" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akash-krishnan-m/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akashkrishh.dev@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <a 
            href="/Assets/Akash's_Resume.pdf" 
            download="Akash_Krishnan_Resume"
            className="group flex items-center gap-2 text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium border-b border-zinc-700 hover:border-white pb-1 md:pb-2 transition-all"
          >
            Resume
            <Download size={12} className="group-hover:translate-y-1 transition-transform text-zinc-400 group-hover:text-white" />
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default ProfileView;