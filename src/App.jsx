import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ProfileView from './components/ProfileView';
import AnalyticsView from './components/AnalyticsView';
import ProjectGallery from './components/ProjectGallery';
import ContactView from './components/ContactView';

// Project Data (Kept here for the background effect)
const projects = [
  {
    id: 1,
    title: "DeepBallonNet",
    category: "Predictive Analytics",
    color: "from-blue-900 via-blue-950 to-black",
    description: "Forecasting Champions League winners using historical data metrics."
  },
  {
    id: 2,
    title: "Lung Cancer Detection",
    category: "Medical AI / Vision",
    color: "from-red-900 via-red-950 to-black",
    description: "TransUNet architecture for high-precision tumor segmentation."
  },
  {
    id: 3,
    title: "Evolving Human AI",
    category: "Generative Systems",
    color: "from-purple-900 via-purple-950 to-black",
    description: "A digital companion that matures visually and mentally over time."
  },
  {
    id: 4,
    title: "Mid-Air Sculpting",
    category: "Spatial Computing",
    color: "from-emerald-900 via-emerald-950 to-black",
    description: "Hand-tracking interface for 3D modeling without physical tools."
  },
  // --- NEW PROJECTS ADDED BELOW ---
  {
    id: 5,
    title: "Neuro-Style Transfer",
    category: "Computer Vision",
    color: "from-orange-900 via-orange-950 to-black",
    description: "Real-time artistic style transfer for video streams using CNNs."
  },
  {
    id: 6,
    title: "Algo-Trading Bot",
    category: "Fintech / Data",
    color: "from-cyan-900 via-cyan-950 to-black",
    description: "Reinforcement learning agent optimized for crypto market volatility."
  },
  {
    id: 7,
    title: "Smart Traffic Control",
    category: "IoT / AI",
    color: "from-yellow-900 via-yellow-950 to-black",
    description: "Adaptive traffic light system based on vehicle density analysis."
  },
  {
    id: 8,
    title: "Voice Auth System",
    category: "Audio Processing",
    color: "from-pink-900 via-pink-950 to-black",
    description: "Biometric security system using voiceprint analysis."
  }
];

function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="bg-void text-white relative selection:bg-purple-500 selection:text-white">
      
      {/* 1. FIXED FLUID BACKGROUND (Stays behind while you scroll) */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/50 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-900/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-teal-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* 2. PROJECT BACKGROUND CHANGE (Only triggers when hovering projects) */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-700">
        <AnimatePresence mode='wait'>
          {hoveredProject && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 bg-gradient-to-br ${projects.find(p => p.id === hoveredProject)?.color}`}
            />
          )}
        </AnimatePresence>
      </div>

      {/* 3. SCROLLABLE CONTENT STACK */}
      {/* 3. SCROLLABLE CONTENT STACK */}
      {/* CHANGED: max-w-[95%] allows it to stretch almost to the edges */}
      <main className="relative z-10 w-full max-w-[95%] 2xl:max-w-[1800px] mx-auto px-4 md:px-10">
        
        {/* SECTION 1: PROFILE */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <ProfileView />
        </section>

        {/* SECTION 2: SKILLS */}
        <section id="analytics" className="min-h-screen flex flex-col justify-center py-20">
           <div className="w-full flex justify-start mb-16 border-b border-white/10 pb-4">
              <h2 className="text-sm font-sans text-gray-400 tracking-[0.2em] uppercase">
                 02 — Technical Arsenal
              </h2>
           </div>
           <AnalyticsView />
        </section>

        {/* SECTION 3: PROJECTS */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
           <div className="w-full flex justify-start mb-16 border-b border-white/10 pb-4">
              <h2 className="text-sm font-sans text-gray-400 tracking-[0.2em] uppercase">
                 03 — Selected Works
              </h2>
           </div>
           {/* Passed styling props to ensure it fills the new wide space */}
           <ProjectGallery projects={projects} setHoveredProject={setHoveredProject} />
        </section>

        {/* SECTION 4: CONTACT */}
        <section id="contact" className="min-h-[80vh] flex flex-col justify-center pb-32">
           <ContactView />
        </section>

      </main>

      {/* 4. NAVIGATION (Floating) */}
      <Navbar />
    </div>
  );
}

export default App;