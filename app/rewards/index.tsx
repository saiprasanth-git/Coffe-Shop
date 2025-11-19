import React from 'react';
import { useAppStore } from '../../store/cartStore';
import { Star, Gift } from 'lucide-react';

export const RewardsView: React.FC = () => {
  const { userPoints } = useAppStore();

  const tiers = [
    { cost: 25, name: 'Customize Drink', icon: '☕' },
    { cost: 100, name: 'Brewed Coffee', icon: '🥐' },
    { cost: 200, name: 'Handcrafted Drink', icon: '🥤' },
    { cost: 400, name: 'Merchandise', icon: '🎒' },
  ];

  return (
    <div className="min-h-screen bg-brand-900 text-white pb-24">
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-serif font-bold mb-2">Star Rewards</h1>
        <p className="text-brand-200 text-sm">Earn Stars for every $1 you spend.</p>
        
        {/* Points Circle */}
        <div className="mt-12 flex justify-center relative">
           <div className="w-64 h-64 rounded-full border-8 border-brand-700 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-t-8 border-accent-500 transform -rotate-45"></div>
              <div className="text-center z-10">
                 <div className="text-6xl font-serif font-bold mb-1">{userPoints}</div>
                 <div className="text-accent-400 uppercase tracking-widest text-xs font-bold">Star Balance</div>
              </div>
           </div>
           {/* Decor */}
           <Star className="absolute top-0 right-10 text-accent-500 animate-pulse" size={32} fill="#d97706" />
        </div>
      </div>

      {/* Redeem Section */}
      <div className="bg-white rounded-t-3xl text-brand-900 mt-8 p-6 min-h-[40vh]">
         <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
           <Gift size={20} className="text-accent-600" />
           Redeem Rewards
         </h2>

         <div className="space-y-4">
            {tiers.map((tier) => (
               <div key={tier.cost} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-accent-200 transition-colors bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{tier.icon}</div>
                    <div>
                       <p className="font-bold text-brand-800">{tier.cost} Stars</p>
                       <p className="text-xs text-gray-500">{tier.name}</p>
                    </div>
                  </div>
                  <button 
                    disabled={userPoints < tier.cost}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      userPoints >= tier.cost 
                      ? 'bg-brand-800 text-white' 
                      : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    Redeem
                  </button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};
