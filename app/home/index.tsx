import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../../constants';
import { Category } from '../../types';
import { useAppStore } from '../../store/cartStore';
import { Plus } from 'lucide-react';

export const HomeView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Hot Coffee');
  const { setView, setSelectedProduct } = useAppStore();

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setView('DETAILS');
  };

  // Get current time for greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="pb-24 animate-fade-in">
      {/* Hero */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-3xl font-serif text-brand-900 mb-1">{greeting}, <br/><span className="text-brand-600 font-bold">Coffee Lover</span></h1>
        <p className="text-gray-500 text-sm">Ready for your daily brew?</p>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto px-4 gap-3 pb-6 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-brand-800 text-white shadow-md shadow-brand-800/20'
                : 'bg-white text-gray-600 border border-gray-100 hover:bg-brand-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="group bg-white rounded-2xl p-3 shadow-sm border border-gray-100 active:scale-95 transition-transform duration-200 cursor-pointer"
          >
            <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-brand-800">
                <Plus size={18} />
              </button>
            </div>
            <h3 className="font-serif font-bold text-brand-900 leading-tight mb-1">{product.name}</h3>
            <p className="text-accent-600 font-bold text-sm">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      
      {/* Promo Banner */}
      <div className="mt-8 px-4">
        <div className="bg-brand-900 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold mb-2">Double Stars Day</h3>
                <p className="text-brand-100 text-sm mb-4 max-w-[70%]">Earn double stars on all iced espresso beverages today.</p>
                <button className="bg-accent-500 text-white text-xs font-bold py-2 px-4 rounded-full">Order Now</button>
            </div>
            <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-brand-700 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};
