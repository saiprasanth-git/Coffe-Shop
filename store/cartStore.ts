import { create } from 'zustand';
import { CartItem, Product, ViewName, Customization } from '../types';

interface AppState {
  currentView: ViewName;
  cart: CartItem[];
  userPoints: number;
  selectedProduct: Product | null;
  isMenuOpen: boolean;
  
  // Actions
  setView: (view: ViewName) => void;
  addToCart: (product: Product, customization: Customization, price: number) => void;
  removeFromCart: (cartId: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  clearCart: () => void;
  addPoints: (amount: number) => void;
  toggleMenu: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentView: 'ONBOARDING',
  cart: [],
  userPoints: 1450, // Mock initial points
  selectedProduct: null,
  isMenuOpen: false,

  setView: (view) => set({ currentView: view }),
  
  addToCart: (product, customization, price) => set((state) => {
    const newItem: CartItem = {
      ...product,
      cartId: Math.random().toString(36).substr(2, 9),
      customization,
      quantity: 1,
      totalPrice: price,
    };
    return { cart: [...state.cart, newItem] };
  }),

  removeFromCart: (cartId) => set((state) => ({
    cart: state.cart.filter((item) => item.cartId !== cartId)
  })),

  setSelectedProduct: (product) => set({ selectedProduct: product }),

  clearCart: () => set({ cart: [] }),

  addPoints: (amount) => set((state) => ({ userPoints: state.userPoints + amount })),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen }))
}));
