import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const ProfileView = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-4 md:px-0">
      
      {/* LEFT: THE NARRATIVE */}
      <div className="w-full md:w-3/5 space-y-8 text-left order-2 md:order-1">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm font-sans text-emerald-400 tracking-[0.3em] uppercase mb-6">
            The Architect
          </h3>
          <h2 className="text-6xl md:text-8xl font-serif leading-none mb-8">
            <span className="italic text-gray-500">Akash </span>  
            <span className= "italic text-white">Krishnan</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans leading-relaxed max-w-2xl">
            I am a Data Science specialist focused on the intersection of 
            <span className="text-white font-medium"> Computer Vision</span> and <span className="text-white font-medium">Predictive Modeling</span>. 
            I apply my analytical background to building clean, efficient, and responsive fullstack applications, and build robust, efficient<span className= "text-white font-medium"> Machine Learning Models. </span>  
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
           className="flex gap-4 pt-8"
        >
          {/* RESUME BUTTON (Links to a file in your public/Assets folder) */}
          <a 
            href="/Assets/Akash's_Resume.pdf" 
            download="Akash_Krishnan_Resume"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black text-lg rounded-full hover:bg-gray-200 transition-colors"
          >
            <Download size={20} />
            <span className="font-medium">Resume</span>
          </a>
          
          <div className="flex gap-4">
            {/* GITHUB LINK */}
            <a 
              href="https://github.com/Akashh0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              <Github size={24} />
            </a>

            {/* LINKEDIN LINK */}
            <a 
              href="https://www.linkedin.com/in/akash-krishnan-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              <Linkedin size={24} />
            </a>

            {/* EMAIL LINK (Opens default mail app) */}
            <a 
              href="mailto:akashkrishh85@gmail.com"
              className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

      </div>

      {/* RIGHT: THE VISUAL */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/5 relative group flex justify-end order-1 md:order-2"
      >
        <div className="w-full max-w-md aspect-[3/4] relative overflow-hidden rounded-2xl border border-white/10">
          <img 
            src="/Assets/Pic1_Edited.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="absolute bottom-8 right-8 bg-white text-black px-6 py-4 rounded-full shadow-2xl z-10">
            <p className="font-mono text-xs tracking-widest uppercase">Status</p>
            <p className="font-serif italic text-lg">Online</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileView;