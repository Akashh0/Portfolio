import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ProjectGallery from './components/ProjectGallery';
import AnalyticsView from './components/AnalyticsView';
import ProfileView from './components/ProfileView';

// Data moved here so App controls the global background
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
    category: "Medical AI / Computer Vision",
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
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen bg-void text-white overflow-hidden relative selection:bg-purple-500 selection:text-white">
      
      {/* 1. FLUID BACKGROUND (Blobs) */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/50 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-900/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-teal-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* 2. PROJECT BACKGROUND OVERLAY (Fix: Now sits at root level) */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-all duration-700">
        <AnimatePresence mode='wait'>
          {activeTab === 'projects' && hoveredProject && (
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

      {/* 3. MAIN CONTENT */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32 min-h-screen flex flex-col justify-center">
        
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in text-center">
            <p className="text-sm tracking-[0.3em] text-gray-400 uppercase font-sans">
              Portfolio 2026
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-thin tracking-tight leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Predictive <br/> <span className="italic font-normal text-white">Elegance</span>
            </h1>
            <p className="text-lg text-gray-400 font-sans max-w-lg mx-auto leading-relaxed">
              Crafting intelligence from chaos. Specializing in Deep Learning architectures and evolutionary AI systems.
            </p>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="w-full animate-fade-in">
            <h2 className="text-sm font-sans text-gray-400 mb-12 tracking-[0.2em] uppercase text-center">
              Selected Works
            </h2>
            {/* Pass state control down to the gallery */}
            <ProjectGallery projects={projects} setHoveredProject={setHoveredProject} />
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === 'analytics' && (
          <div className="w-full animate-fade-in">
            <h2 className="text-sm font-sans text-gray-400 mb-12 tracking-[0.2em] uppercase text-center">
              System Metrics
            </h2>
            <AnalyticsView />
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="w-full animate-fade-in">
             {/* No title here - the component handles the layout perfectly */}
            <ProfileView />
          </div>
        )}

      </main>

      {/* 4. NAVIGATION */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;