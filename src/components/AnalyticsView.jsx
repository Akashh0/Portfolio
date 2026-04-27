import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Deep Learning & Vision",
    description: "Core architectures for medical imaging and predictive modeling.",
    color: "#6366f1", 
    chartData: [
      { subject: 'Arch', A: 90 },
      { subject: 'Opt', A: 85 },
      { subject: 'Train', A: 80 },
      { subject: 'Deploy', A: 70 },
      { subject: 'Research', A: 90 },
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
    color: "#0ea5e9", 
    chartData: [
      { subject: 'Stats', A: 90 },
      { subject: 'Viz', A: 95 },
      { subject: 'Clean', A: 88 },
      { subject: 'SQL', A: 70 },
      { subject: 'Pipe', A: 75 },
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
    color: "#f43f5e", 
    chartData: [
      { subject: 'Logic', A: 85 },
      { subject: '3D Math', A: 70 },
      { subject: 'React', A: 90 },
      { subject: 'Styling', A: 95 },
      { subject: 'UX Flow', A: 80 },
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
    color: "#a855f7", 
    chartData: [
      { subject: 'Git', A: 95 },
      { subject: 'Docker', A: 70 },
      { subject: 'Cloud', A: 70 },
      { subject: 'Terminal', A: 80 },
      { subject: 'Workflow', A: 90 },
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

// Animation Variants for the Parent Block
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between category sections
      delayChildren: 0.3
    }
  }
};

const itemVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: "easeOut" }
  }
});

const AnalyticsView = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full space-y-40 py-24 px-6 md:px-12 bg-transparent"
    >
      {skillCategories.map((category, index) => (
        <SkillBlock 
          key={index} 
          category={category} 
          isReversed={index % 2 !== 0} 
        />
      ))}
    </motion.div>
  );
};

const SkillBlock = ({ category, isReversed }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between gap-16 w-full max-w-7xl mx-auto ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. RADAR CHART CARD */}
      <motion.div 
        variants={itemVariants(isReversed ? 'right' : 'left')}
        className="w-full md:w-1/2 group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md"
      >
        <div 
          className="absolute inset-0 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
          style={{ background: category.color }}
        ></div>
        
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={category.chartData}>
              <PolarGrid stroke="#ffffff20" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#ffffff60', fontSize: 10, fontWeight: 500 }} 
              />
              <Radar
                dataKey="A"
                stroke={category.color}
                strokeWidth={3}
                fill={category.color}
                fillOpacity={0.15}
                animationDuration={2500} // Chart itself animates its "growth"
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', backdropBlur: '10px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* 2. SKILL CONTENT */}
      <div className="w-full md:w-1/2 space-y-10">
        <motion.div
           variants={itemVariants(isReversed ? 'left' : 'right')}
        >
          <div className="flex items-center gap-3 mb-4">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 48 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="h-[2px] rounded-full" 
               style={{ background: category.color }}
             ></motion.div>
             <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Capabilities</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-none mb-6">
            {category.title}
          </h3>
          <p className="text-white/50 font-sans text-base max-w-md leading-relaxed border-l border-white/10 pl-6">
            {category.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {category.skills.map((skill, index) => (
            <div key={index} className="group cursor-default">
              <div className="flex justify-between items-end mb-3">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  className="text-sm font-medium text-white/70 group-hover:text-white transition-colors"
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/40 border border-white/10"
                >
                  {skill.level}
                </motion.span>
              </div>
              
              <div className="h-[2px] w-full bg-white/5 rounded-full relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.7 + (index * 0.1) }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ background: category.color, boxShadow: `0 0 20px ${category.color}60` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnalyticsView;