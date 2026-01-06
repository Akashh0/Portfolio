import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

// --- DATA STRUCTURE: 4 CLUSTERS ---
const skillCategories = [
  {
    title: "Deep Learning & Vision",
    description: "Core architectures for medical imaging and predictive modeling.",
    chartData: [
      { subject: 'Architecture', A: 90, fullMark: 100 },
      { subject: 'Optimization', A: 85, fullMark: 100 },
      { subject: 'Training', A: 80, fullMark: 100 },
      { subject: 'Deployment', A: 70, fullMark: 100 },
      { subject: 'Research', A: 90, fullMark: 100 },
    ],
    skills: [
      { name: "PyTorch / TensorFlow", level: "70%" },
      { name: "TransUNet / CNNs", level: "80%" },
      { name: "OpenCV / MediaPipe", level: "70%" },
      { name: "YOLO / Object Detection", level: "70%" },
      { name: "Transformers (NLP)", level: "85%" },
    ]
  },
  {
    title: "Data Science & Analytics",
    description: "Processing raw chaos into actionable statistical insights.",
    chartData: [
      { subject: 'Statistics', A: 90, fullMark: 100 },
      { subject: 'Visualization', A: 95, fullMark: 100 },
      { subject: 'Cleaning', A: 88, fullMark: 100 },
      { subject: 'SQL Logic', A: 70, fullMark: 100 },
      { subject: 'Pipelines', A: 75, fullMark: 100 },
    ],
    skills: [
      { name: "Pandas / NumPy", level: "95%" },
      { name: "Scikit-Learn", level: "90%" },
      { name: "Matplotlib / Seaborn", level: "92%" },
      { name: "SQL / Database", level: "70%" },
      { name: "Jupyter Notebooks", level: "80%" },
    ]
  },
  {
    title: "Web & Spatial Interface",
    description: "Building immersive frontends for complex AI backends.",
    chartData: [
      { subject: 'UI Logic', A: 85, fullMark: 100 },
      { subject: '3D Math', A: 70, fullMark: 100 },
      { subject: 'Reactivity', A: 90, fullMark: 100 },
      { subject: 'Styling', A: 95, fullMark: 100 },
      { subject: 'UX Flow', A: 80, fullMark: 100 },
    ],
    skills: [
      { name: "React.js / Vite", level: "90%" },
      { name: "Tailwind CSS", level: "75%" },
      { name: "Three.js / R3F", level: "75%" },
      { name: "Figma (Prototyping)", level: "75%" },
      { name: "Framer Motion", level: "80%" },
    ]
  },
  {
    title: "DevOps & Tools",
    description: "The environment and tools that maintain system integrity.",
    chartData: [
      { subject: 'Version Control', A: 95, fullMark: 100 },
      { subject: 'Container', A: 70, fullMark: 100 },
      { subject: 'Cloud', A: 70, fullMark: 100 },
      { subject: 'Terminal', A: 80, fullMark: 100 },
      { subject: 'Workflow', A: 90, fullMark: 100 },
    ],
    skills: [
      { name: "Git / GitHub", level: "95%" },
      { name: "Docker", level: "70%" },
      { name: "Bash", level: "85%" },
      { name: "VS Code / Extensions", level: "95%" },
      { name: "Postman / API", level: "88%" },
    ]
  }
];

const AnalyticsView = () => {
  return (
    <div className="w-full flex flex-col gap-32 py-20">
      {skillCategories.map((category, index) => (
        <SkillBlock 
          key={index} 
          category={category} 
          isReversed={index % 2 !== 0} // Zig-Zag Logic: Odd numbers get reversed
        />
      ))}
    </div>
  );
};

// --- SUB-COMPONENT FOR EACH BLOCK ---
const SkillBlock = ({ category, isReversed }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 w-full ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. THE RADAR CHART */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[400px] relative"
      >
        {/* Glowing Background Blob */}
        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full z-0"></div>
        
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={category.chartData}>
            <PolarGrid stroke="#333" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#6b7280', fontSize: 12, fontFamily: 'Inter' }} 
            />
            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#10b981" 
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

      {/* 2. THE SKILL LIST */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
           initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif italic mb-2 text-white">{category.title}</h3>
          <p className="text-gray-400 font-sans text-sm max-w-sm leading-relaxed">
            {category.description}
          </p>
        </motion.div>

        <div className="space-y-6">
          {category.skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.8 }}
              className="relative"
            >
              <div className="flex justify-between mb-2 font-mono text-xs text-gray-400">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              
              <div className="h-[1px] w-full bg-gray-800 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
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