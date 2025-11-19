import React from 'react';
import { useAppStore } from '../../store/cartStore';
import { Trash2, ArrowLeft } from 'lucide-react';

export const CartView: React.FC = () => {
  const { cart, removeFromCart, setView, clearCart, addPoints } = useAppStore();

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setView('CHECKOUT');
    // Simulate successful payment process
    setTimeout(() => {
      addPoints(Math.floor(total * 10));
      clearCart();
    }, 2000); // Delay handled in checkout view usually, but doing simplified flow here
  };

  if (cart.length === 0) {
     return (
       <div className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
         <div className="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-6 text-brand-300">
           <Trash2 size={48} />
         </div>
         <h2 className="text-2xl font-serif font-bold text-brand-900 mb-2">Your cart is empty</h2>
         <p className="text-gray-500 mb-8">Looks like you haven't added your caffeine fix yet.</p>
         <button 
           onClick={() => setView('HOME')}
           className="bg-brand-800 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-700"
         >
           Start Ordering
         </button>
       </div>
     );
  }

  return (
    <div className="pb-32 pt-4 px-4 min-h-screen bg-[#fdfbf7]">
       <div className="flex items-center mb-6">
         <button onClick={() => setView('HOME')} className="mr-4 text-brand-800">
           <ArrowLeft />
         </button>
         <h1 className="text-2xl font-serif font-bold text-brand-900">My Order</h1>
       </div>

       <div className="space-y-4">
         {cart.map((item) => (
           <div key={item.cartId} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover bg-gray-100" />
              <div className="flex-1">
                 <div className="flex justify-between items-start">
                   <h3 className="font-bold text-brand-900">{item.name}</h3>
                   <button onClick={() => removeFromCart(item.cartId)} className="text-gray-400 hover:text-red-500">
                     <Trash2 size={16} />
                   </button>
                 </div>
                 <p className="text-xs text-gray-500 mt-1">
                   {item.customization.size} 
                   {item.customization.milk !== '2%' ? ` • ${item.customization.milk} Milk` : ''}
                   {item.customization.syrup !== 'None' ? ` • ${item.customization.syrup}` : ''}
                 </p>
                 <div className="mt-3 flex justify-between items-end">
                    <span className="font-bold text-brand-700">${item.totalPrice.toFixed(2)}</span>
                 </div>
              </div>
           </div>
         ))}
       </div>

       {/* Summary */}
       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 rounded-t-3xl shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)]">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-brand-900 font-bold text-lg mt-2 pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-accent-500/30 transition-colors"
          >
            Checkout
          </button>
       </div>
    </div>
  );
};
