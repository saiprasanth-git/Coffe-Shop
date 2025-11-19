import React from 'react';
import { useAppStore } from '../../store/cartStore';
import { CheckCircle } from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const { setView } = useAppStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-50 p-6 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slight">
        <CheckCircle size={64} className="text-green-600" />
      </div>
      <h1 className="text-3xl font-serif font-bold text-brand-900 mb-2">Order Placed!</h1>
      <p className="text-gray-600 mb-8 max-w-xs mx-auto">
        Your coffee is being brewed with love. We've added the points to your account.
      </p>
      <div className="bg-white p-4 rounded-xl shadow-sm w-full max-w-xs mb-8">
        <div className="text-sm text-gray-500 mb-2">Estimated pickup</div>
        <div className="text-2xl font-bold text-brand-800">10:45 AM</div>
      </div>
      <button 
        onClick={() => setView('HOME')}
        className="bg-brand-800 text-white px-8 py-3 rounded-full font-bold w-full max-w-xs shadow-lg"
      >
        Back to Home
      </button>
    </div>
  );
};
