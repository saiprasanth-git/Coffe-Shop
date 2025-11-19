import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../store/cartStore';
import { SIZE_PRICE_MODIFIERS, SIZES, MILKS, SYRUPS } from '../../constants';
import { Size, Milk, Syrup } from '../../types';
import { CoffeeVisualizer } from '../../components/Coffee3D';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

export const CustomizerView: React.FC = () => {
  const { selectedProduct, setView, addToCart } = useAppStore();
  
  // Local state for customization
  const [size, setSize] = useState<Size>('Grande');
  const [milk, setMilk] = useState<Milk>('2%');
  const [syrup, setSyrup] = useState<Syrup>('None');
  const [shots, setShots] = useState<number>(1);

  // Reset state when product changes
  useEffect(() => {
    if (selectedProduct) {
      setMilk('2%');
      setSyrup('None');
      setShots(1);
    }
  }, [selectedProduct]);

  if (!selectedProduct) {
    setView('HOME');
    return null;
  }

  const basePrice = selectedProduct.price;
  const sizePrice = SIZE_PRICE_MODIFIERS[size];
  const shotsPrice = (shots - 1) * 0.80; // Extra shots cost money
  const syrupPrice = syrup !== 'None' ? 0.60 : 0;
  const milkPrice = (milk === 'Oat' || milk === 'Almond' || milk === 'Soy') ? 0.70 : 0;
  
  const totalPrice = basePrice + sizePrice + shotsPrice + syrupPrice + milkPrice;

  const handleAddToCart = () => {
    addToCart(selectedProduct, { size, milk, syrup, shots }, totalPrice);
    setView('HOME');
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen pb-24 relative">
      
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20">
        <button 
          onClick={() => setView('HOME')}
          className="w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-brand-800"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Visualizer Area */}
      <div className="pt-20 pb-8 bg-gradient-to-b from-brand-50 to-[#fdfbf7]">
        <CoffeeVisualizer size={size} milk={milk} />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-serif font-bold text-brand-900">{selectedProduct.name}</h2>
          <p className="text-gray-500 text-sm mt-1">{selectedProduct.calories} calories</p>
        </div>
      </div>

      {/* Options Panel */}
      <div className="bg-white rounded-t-3xl shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] p-6 -mt-4 relative z-10 min-h-[50vh]">
        
        {/* Size Selector */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Size</h3>
          <div className="grid grid-cols-3 gap-4">
             {SIZES.map((s) => (
               <button
                 key={s}
                 onClick={() => setSize(s)}
                 className={`py-3 rounded-xl border-2 transition-all ${
                   size === s 
                   ? 'border-brand-600 bg-brand-50 text-brand-800 font-bold' 
                   : 'border-gray-100 text-gray-500'
                 }`}
               >
                 {s}
               </button>
             ))}
          </div>
        </div>

        {/* Customizable Options (Only if customizable) */}
        {selectedProduct.customizable && (
          <>
            {/* Milk */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Milk</h3>
              <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
                {MILKS.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMilk(m)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm transition-all ${
                       milk === m 
                       ? 'bg-brand-800 text-white border-brand-800' 
                       : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Syrup */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Syrup</h3>
              <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
                {SYRUPS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSyrup(s)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm transition-all ${
                       syrup === s 
                       ? 'bg-brand-800 text-white border-brand-800' 
                       : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

             {/* Shots */}
             <div className="mb-8">
               <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Espresso Shots</h3>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setShots(Math.max(1, shots - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-brand-800">
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-brand-900 w-4 text-center">{shots}</span>
                    <button onClick={() => setShots(shots + 1)} className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-800">
                      <Plus size={16} />
                    </button>
                  </div>
               </div>
             </div>
          </>
        )}

        {/* Add to Cart Sticky */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
           <button 
             onClick={handleAddToCart}
             className="w-full bg-brand-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand-800/30 flex justify-between px-6 active:scale-[0.98] transition-transform"
           >
             <span>Add to Order</span>
             <span>${totalPrice.toFixed(2)}</span>
           </button>
        </div>

      </div>
    </div>
  );
};
