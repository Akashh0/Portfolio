import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const ProfileView = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16 py-10">
      
      {/* LEFT: THE VISUAL IDENTITY (Retro/Cinematic Look) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        {/* The Image Container */}
        <div className="w-72 h-96 relative overflow-hidden rounded-2xl border border-white/10">
          {/* PLACEHOLDER IMAGE - Replace 'src' with your actual photo later */}
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
          />
          
          {/* Retro Grain Overlay */}
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-white/50 transition-colors duration-500"></div>
        </div>

        {/* Floating Status Tag */}
        <div className="absolute -bottom-6 -right-6 bg-white text-black px-6 py-4 rounded-full shadow-2xl">
          <p className="font-mono text-xs tracking-widest uppercase">Status</p>
          <p className="font-serif italic text-lg">Online</p>
        </div>
      </motion.div>

      {/* RIGHT: THE NARRATIVE */}
      <div className="max-w-md space-y-8 text-left">
        
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
        >
          <h3 className="text-sm font-sans text-emerald-400 tracking-[0.2em] uppercase mb-4">
            The Architect
          </h3>
          <h2 className="text-5xl font-serif leading-tight mb-6">
            Blending <span className="italic text-gray-500">Logic</span> with <br/> Visual Intuition.
          </h2>
          <p className="text-gray-400 font-sans leading-relaxed">
            I am a Data Science specialist focused on the intersection of 
            <span className="text-white"> Computer Vision</span> and <span className="text-white">Predictive Modeling</span>. 
            From diagnosing medical conditions via CT scans to predicting Champions League outcomes, I build systems that see and foresee.
          </p>
        </motion.div>

        {/* The "Tech Stack" Metadata */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6"
        >
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Focus</p>
            <p className="font-mono text-sm text-white">Deep Learning / AI</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</p>
            <p className="font-mono text-sm text-white">Chennai, India</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
           className="flex gap-4"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
            <Download size={18} />
            <span className="font-medium text-sm">Resume</span>
          </button>
          
          <div className="flex gap-2">
            <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              <Github size={20} />
            </button>
            <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              <Linkedin size={20} />
            </button>
            <button className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              <Mail size={20} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProfileView;