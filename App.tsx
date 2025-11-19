import React from 'react';
import { useAppStore } from './store/cartStore';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './app/home/index';
import { CustomizerView } from './app/customizer/index';
import { CartView } from './app/cart/index';
import { RewardsView } from './app/rewards/index';
import { CheckoutView } from './app/checkout/index';
import { AIBaristaView } from './app/ai-barista/index';
import { Onboarding } from './components/Onboarding';

const App: React.FC = () => {
  const { currentView } = useAppStore();

  if (currentView === 'ONBOARDING') {
    return <Onboarding />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <HomeView />;
      case 'DETAILS': return <CustomizerView />;
      case 'CART': return <CartView />;
      case 'REWARDS': return <RewardsView />;
      case 'CHECKOUT': return <CheckoutView />;
      case 'AI_BARISTA': return <AIBaristaView />;
      default: return <HomeView />;
    }
  };

  // Views that don't need the standard layout (Header/BottomNav)
  const isFullScreen = currentView === 'CHECKOUT' || currentView === 'DETAILS';

  return (
    <div className="max-w-md mx-auto bg-[#fdfbf7] min-h-screen shadow-2xl relative overflow-hidden">
      {!isFullScreen && <Header />}
      
      <main className="min-h-[calc(100vh-4rem)]">
        {renderView()}
      </main>

      {!isFullScreen && currentView !== 'CART' && <BottomNav />}
    </div>
  );
};

export default App;
