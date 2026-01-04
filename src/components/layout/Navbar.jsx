import React from 'react';
import { Home, Layers, Zap, User } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Work', icon: Layers },
    { id: 'analytics', label: 'Insight', icon: Zap },
    { id: 'about', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 px-2 py-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {items.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-500 ease-out
                ${isActive ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              {/* Only show text if active for a smooth expanding effect */}
              {isActive && (
                <span className="text-sm font-medium tracking-wide animate-fade-in">
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