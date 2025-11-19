import React from 'react';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { useAppStore } from '../store/cartStore';

export const Header: React.FC = () => {
  const { cart, setView, userPoints } = useAppStore();
  
  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-brand-100 px-4 h-16 flex items-center justify-between">
      <button onClick={() => setView('HOME')} className="flex items-center gap-2">
         <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-white font-serif font-bold">
           B
         </div>
         <span className="font-serif font-bold text-xl text-brand-900 tracking-tight">Brew & Byte</span>
      </button>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setView('REWARDS')}
          className="hidden md:flex items-center gap-1 bg-brand-50 px-3 py-1 rounded-full border border-brand-100"
        >
          <div className="w-2 h-2 rounded-full bg-accent-500"></div>
          <span className="text-xs font-bold text-brand-800">{userPoints} ★</span>
        </button>

        <button 
          onClick={() => setView('CART')}
          className="relative p-2 text-brand-800 hover:bg-brand-100 rounded-full transition-colors"
        >
          <ShoppingBag size={24} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-accent-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              {cart.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
