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
    title: "Ballon'Dor Predictor",
    category: "Predictive Analytics",
    color: "from-blue-900 via-blue-950 to-black",
    description: "Forecasting Champions League winners using historical data metrics.",
    link: "https://github.com/Akashh0/DL-Model" // <--- ADD THIS
  },
  {
    id: 2,
    title: "Lung Cancer Detection",
    category: "Medical AI / Vision",
    color: "from-red-900 via-red-950 to-black",
    description: "TransUNet architecture for high-precision tumor segmentation.",
    link: "https://github.com/Akashh0/Lung-Cancer-Detection-TransUNet-based-" // Example of a demo link
  },
  {
    id: 3,
    title: "Resume Analyser",
    category: "Analytic Systems",
    color: "from-purple-900 via-purple-950 to-black",
    description: "An AI model for resume analysis & provides throughput insights.",
    link: "https://talent-align.streamlit.app/"
  },
  {
    id: 4,
    title: "Career Roadmap Generator",
    category: "Generative Systems",
    color: "from-emerald-900 via-emerald-950 to-black",
    description: "A BERT model for career roadmap generation. The backend (Model) Github repo is linked here.",
    link: "https://github.com/Akashh0/CareerpathBackend"
  },
  // ... do this for all 8 projects ...
  {
    id: 5,
    title: "Emotion Detection using Wave Format",
    category: "Audio Processing",
    color: "from-orange-900 via-orange-950 to-black",
    description: "Real-time emotion detection using wave format.",
    link: "https://github.com/Akashh0/Emotion-Detection-Using-Wave-Format"
  },
  
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