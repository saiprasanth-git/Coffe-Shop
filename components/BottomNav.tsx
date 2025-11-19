import React from 'react';
import { Home, Coffee, Star, Sparkles } from 'lucide-react';
import { useAppStore } from '../store/cartStore';
import { ViewName } from '../types';

export const BottomNav: React.FC = () => {
  const { currentView, setView } = useAppStore();

  const NavItem = ({ view, icon: Icon, label }: { view: ViewName, icon: any, label: string }) => (
    <button 
      onClick={() => setView(view)}
      className={`flex flex-col items-center gap-1 w-full py-3 transition-colors ${
        currentView === view ? 'text-brand-800' : 'text-gray-400 hover:text-brand-600'
      }`}
    >
      <Icon size={24} strokeWidth={currentView === view ? 2.5 : 2} />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe z-50 flex justify-around shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <NavItem view="HOME" icon={Home} label="Home" />
      <NavItem view="AI_BARISTA" icon={Sparkles} label="AI Barista" />
      <NavItem view="REWARDS" icon={Star} label="Rewards" />
    </nav>
  );
};
