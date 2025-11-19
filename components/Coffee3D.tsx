import React from 'react';
import { Size, Milk } from '../types';

interface Coffee3DProps {
  size: Size;
  milk: string;
}

// A CSS-only artistic representation of the cup to serve as the "3D" element
// Real WebGL is too heavy for a single file generated response without assets.
export const CoffeeVisualizer: React.FC<Coffee3DProps> = ({ size, milk }) => {
  
  const getHeight = () => {
    switch(size) {
      case 'Tall': return 'h-32';
      case 'Grande': return 'h-40';
      case 'Venti': return 'h-48';
      default: return 'h-40';
    }
  };

  const getLiquidColor = () => {
    // Darker for less milk, lighter for more
    return milk === 'None' || milk === 'Whole' ? 'bg-[#5e3a28]' : 'bg-[#8c6b5d]'; 
  };

  return (
    <div className="flex items-end justify-center py-8 h-64 transition-all duration-500">
      <div className="relative group cursor-pointer">
        {/* Cup Body */}
        <div className={`relative w-24 ${getHeight()} bg-white rounded-b-2xl rounded-t-sm shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 z-10`}>
          
          {/* Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-800 rounded-full flex items-center justify-center border-2 border-brand-600 z-20">
             <span className="text-white font-serif font-bold text-lg">B</span>
          </div>

          {/* Liquid Level Animation */}
          <div className={`absolute bottom-0 left-0 right-0 h-[85%] ${getLiquidColor()} opacity-90 transition-colors duration-500`}>
             <div className="absolute top-0 left-0 right-0 h-4 bg-white/10 backdrop-blur-sm"></div>
          </div>

          {/* Reflection */}
          <div className="absolute top-0 right-2 w-2 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent rounded-full blur-[1px]"></div>
        </div>

        {/* Lid */}
        <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-[6.5rem] h-6 bg-gray-50 rounded-t-lg border-b border-gray-200 shadow-sm z-20 transition-all duration-300 ${size === 'Venti' ? 'mb-0' : ''}`}>
             <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2 w-4 h-2 bg-brand-800 rounded-t-sm"></div>
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-black/20 rounded-[100%] blur-md"></div>
        
        {/* Steam Particles (CSS Animation) */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-1 h-4 bg-gray-400/30 rounded-full animate-bounce-slight" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-6 bg-gray-400/30 rounded-full animate-bounce-slight" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-4 bg-gray-400/30 rounded-full animate-bounce-slight" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};
