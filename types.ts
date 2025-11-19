export type Category = 'Hot Coffee' | 'Iced Coffee' | 'Blended' | 'Tea' | 'Bakery';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string; // URL
  calories: number;
  customizable: boolean;
}

export type Size = 'Tall' | 'Grande' | 'Venti';
export type Milk = 'Whole' | '2%' | 'Oat' | 'Almond' | 'Soy';
export type Syrup = 'None' | 'Vanilla' | 'Caramel' | 'Hazelnut' | 'Mocha';

export interface Customization {
  size: Size;
  milk?: Milk;
  syrup?: Syrup;
  shots?: number;
}

export interface CartItem extends Product {
  cartId: string;
  customization: Customization;
  quantity: number;
  totalPrice: number;
}

export interface UserProfile {
  name: string;
  points: number;
  tier: 'Green' | 'Gold';
}

export type ViewName = 'ONBOARDING' | 'HOME' | 'DETAILS' | 'CART' | 'CHECKOUT' | 'REWARDS' | 'AI_BARISTA';
