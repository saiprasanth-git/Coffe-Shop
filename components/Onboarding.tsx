import React from 'react';
import { useAppStore } from '../store/cartStore';
import { ArrowRight } from 'lucide-react';

export const Onboarding: React.FC = () => {
  const { setView } = useAppStore();

  return (
    <div className="h-screen w-full relative overflow-hidden bg-brand-900 flex flex-col">
       {/* Background Image */}
       <div className="absolute inset-0 z-0 opacity-40">
         <img 
           src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
           alt="Coffee Background" 
           className="w-full h-full object-cover"
         />
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent z-0"></div>

       <div className="relative z-10 flex-1 flex flex-col justify-end p-8 pb-12">
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-500/30">
             <span className="text-white font-serif text-3xl font-bold">B</span>
          </div>
          
          <h1 className="text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Brewed for <br/> <span className="text-accent-500">Moments.</span>
          </h1>
          <p className="text-brand-100 text-lg mb-8 max-w-xs">
            Experience the perfect cup, crafted just for you with the power of AI.
          </p>

          <button 
            onClick={() => setView('HOME')}
            className="bg-white text-brand-900 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-50 transition-colors"
          >
            Get Started <ArrowRight size={20} />
          </button>
       </div>
    </div>
  );
};
