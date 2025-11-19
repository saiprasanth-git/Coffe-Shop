import React, { useState } from 'react';
import { useAppStore } from '../../store/cartStore';
import { getCoffeeRecommendation } from '../../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';

export const AIBaristaView: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAsk = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setResponse(null);
    
    const timeOfDay = new Date().getHours() < 12 ? 'morning' : 'afternoon';
    const result = await getCoffeeRecommendation(input, 'Sunny', timeOfDay);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white p-6 pb-24">
      <div className="flex items-center gap-3 mb-8 pt-4">
        <div className="w-12 h-12 bg-gradient-to-tr from-accent-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Sparkles className="text-white" />
        </div>
        <div>
          <h1 className="font-serif font-bold text-2xl text-brand-900">AI Barista</h1>
          <p className="text-xs text-gray-500">Powered by Gemini 2.5 Flash</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
         <p className="text-brand-800 font-medium mb-4">
           Not sure what to order? Tell me how you're feeling or what flavors you like!
         </p>
         
         <div className="relative">
           <textarea
             value={input}
             onChange={(e) => setInput(e.target.value)}
             placeholder="e.g., I need energy but nothing too sweet..."
             className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-500 min-h-[100px]"
           />
           <button 
             onClick={handleAsk}
             disabled={isLoading || !input}
             className="absolute bottom-3 right-3 bg-brand-800 text-white p-2 rounded-full disabled:opacity-50"
           >
             {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
           </button>
         </div>
      </div>

      {response && (
        <div className="bg-brand-900 text-white p-6 rounded-3xl shadow-xl animate-bounce-slight">
           <div className="flex items-start gap-3">
             <div className="min-w-[2rem] text-2xl">☕</div>
             <div>
               <h3 className="font-bold text-accent-400 mb-2 text-sm uppercase tracking-wider">Recommended For You</h3>
               <p className="font-serif text-lg leading-relaxed">"{response}"</p>
             </div>
           </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Quick Prompts</h3>
        <div className="flex flex-wrap gap-2">
          {['Something low calorie', 'I need maximum caffeine', 'Sweet treat', 'Surprise me'].map(prompt => (
            <button 
              key={prompt}
              onClick={() => setInput(prompt)}
              className="bg-white border border-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm hover:bg-brand-50 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
