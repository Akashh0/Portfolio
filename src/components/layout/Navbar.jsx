import React, { useState, useEffect } from 'react';
import { Home, Layers, Zap, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Automatically update the active button as you scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'analytics', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { id: 'home', label: 'Profile', icon: Home },
    { id: 'analytics', label: 'Skills', icon: Zap },
    { id: 'projects', label: 'Work', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 px-2 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-500 ease-out
                ${isActive ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              {isActive && (
                <span className="text-sm font-medium tracking-wide">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;