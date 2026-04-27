import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ContactView = () => {
  return (
    <section className="w-full min-h-screen bg-transparent flex items-center justify-center p-6 md:p-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* LEFT SIDE: Minimalist Typography */}
        <div className="space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-serif leading-[1.1] tracking-tighter max-w-xl"
          >
            Turning <span className="italic text-zinc-500">What if's</span> <br />into<span className="italic text-zinc-500"> It is</span> 
          </motion.h2>

          <div className="space-y-1 border-l border-zinc-800 pl-6">
            <h3 className="text-zinc-200 text-xl font-medium tracking-tight">M Akash Krishnan</h3>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-mono">
              AI & Data Enthusiast | Blender Artist
            </p>
          </div>

          <p className="text-zinc-800 text-[10px] font-mono uppercase tracking-widest pt-20">
            Copyright @ 2026
          </p>
        </div>

        {/* RIGHT SIDE: The Darkened Physical Device */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-[#0A0A0A] p-8 md:p-10 rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,1)] relative border border-white/5">
            
            {/* The Internal Screen: Obsidian Glass Look */}
            <div className="bg-[#000000] p-1.5 rounded-[2.5rem] shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] mb-10">
              <div className="bg-[#0F0F0F] rounded-[2.3rem] p-6 md:p-8 min-h-[240px] flex flex-col justify-between font-mono relative overflow-hidden border border-white/5">
                
                {/* Screen Header */}
                <div className="flex justify-between text-[9px] font-medium uppercase tracking-widest text-zinc-500">
                  <span className="flex items-center gap-1"></span>
                </div>

                {/* Main Display Area */}
                <div className="text-center space-y-4 py-4 relative z-10">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em]">Your Destination</p>
                  {/* REDUCED: Mobile font size set to text-base, desktop stays text-2xl */}
                  <p className="text-xs md:text-2xl font-medium text-white tracking-tighter lowercase break-all">
                    akashkrishh.dev@gmail.com
                  </p>
                </div>

                {/* Footer Data */}
                <div className="flex justify-between items-end italic text-[9px] text-zinc-700 font-medium tracking-widest">
                  <span>2026</span>
                </div>

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] z-0 opacity-20" />
              </div>
            </div>

            {/* The Bottom Section: Grille & Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2">
              {/* HIDDEN ON MOBILE: Speaker grille is removed on small screens to give button space */}
              <div className="hidden md:flex flex-col gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-[1px] bg-zinc-900 shadow-inner" />
                ))}
              </div>

              {/* EXPANDED: Button set to w-full on mobile, flex-grow on desktop */}
              <a 
                href="mailto:akashkrishh.dev@gmail.com" 
                className="w-full md:w-auto md:flex-grow no-underline"
              >
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#00E5FF" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#00D1FF] text-black font-mono text-[11px] md:text-[11px] uppercase tracking-[0.2em] font-bold py-6 px-8 rounded-full shadow-[0_15px_30px_rgba(0,209,255,0.15)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Let's Connect! <ArrowUpRight size={14} strokeWidth={3} />
                </motion.button>
              </a>
            </div>

            {/* Glass Finish Highlight */}
            <div className="absolute top-0 left-0 w-full h-full rounded-[3.5rem] pointer-events-none border-t border-l border-white/10 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;