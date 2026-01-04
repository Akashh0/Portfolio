import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { subject: 'Computer Vision', A: 95, fullMark: 100 },
  { subject: 'Predictive AI', A: 90, fullMark: 100 },
  { subject: 'UI/UX Design', A: 75, fullMark: 100 },
  { subject: 'Architecture', A: 85, fullMark: 100 },
  { subject: 'Data Science', A: 90, fullMark: 100 },
  { subject: 'Web Dev', A: 70, fullMark: 100 },
];

const skills = [
  { name: "Python / PyTorch", level: "95%" },
  { name: "TransUNet / CNNs", level: "90%" },
  { name: "React / Figma", level: "75%" },
  { name: "SQL / Pandas", level: "85%" },
];

const AnalyticsView = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 text-white">
      
      {/* LEFT: THE HOLOGRAPHIC RADAR */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 h-[400px] relative"
      >
        <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full z-0"></div>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            {/* Minimalist Grid */}
            <PolarGrid stroke="#333" strokeDasharray="3 3" />
            
            {/* Elegant Typography for Labels */}
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'Inter' }} 
            />
            
            {/* The Glowing Shape */}
            <Radar
              name="Skillset"
              dataKey="A"
              stroke="#10b981" // Emerald Green line
              strokeWidth={2}
              fill="#10b981"
              fillOpacity={0.2}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }}
              itemStyle={{ color: '#10b981' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* RIGHT: THE FLUID METRICS */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-serif italic mb-2">Core Competencies</h3>
          <p className="text-gray-400 font-sans text-sm max-w-sm">
            A visual representation of technical distribution. Heavy focus on Deep Learning architectures balanced with design sensibilities.
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
              className="relative"
            >
              <div className="flex justify-between mb-2 font-mono text-xs text-gray-400">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              
              {/* Background Line */}
              <div className="h-[1px] w-full bg-gray-800 relative overflow-hidden">
                {/* Foreground Growing Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.8 }}
                  className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;