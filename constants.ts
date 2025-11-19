import { Product, Category, Size, Milk, Syrup } from './types';

export const APP_NAME = "Brew & Byte";

export const SIZES: Size[] = ['Tall', 'Grande', 'Venti'];
export const MILKS: Milk[] = ['Whole', '2%', 'Oat', 'Almond', 'Soy'];
export const SYRUPS: Syrup[] = ['None', 'Vanilla', 'Caramel', 'Hazelnut', 'Mocha'];

export const SIZE_PRICE_MODIFIERS: Record<Size, number> = {
  'Tall': 0,
  'Grande': 0.50,
  'Venti': 1.00
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.',
    price: 4.95,
    category: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop',
    calories: 250,
    customizable: true,
  },
  {
    id: '2',
    name: 'Iced Brown Sugar Oat Shaken Espresso',
    description: 'Blonde espresso, brown sugar and cinnamon, shaken together and topped with oat milk.',
    price: 5.45,
    category: 'Iced Coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop',
    calories: 120,
    customizable: true,
  },
  {
    id: '3',
    name: 'Nitro Cold Brew',
    description: 'Our small-batch cold brew slowly steeped for a super smooth taste. Infused with nitrogen for a creamy texture.',
    price: 4.75,
    category: 'Iced Coffee',
    image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=600&auto=format&fit=crop',
    calories: 5,
    customizable: true,
  },
  {
    id: '4',
    name: 'Mocha Cookie Crumble Frappuccino',
    description: 'Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice.',
    price: 5.95,
    category: 'Blended',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
    calories: 480,
    customizable: true,
  },
  {
    id: '5',
    name: 'Matcha Tea Latte',
    description: 'Smooth and creamy matcha sweetened just right and served with steamed milk.',
    price: 4.95,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=600&auto=format&fit=crop',
    calories: 240,
    customizable: true,
  },
  {
    id: '6',
    name: 'Butter Croissant',
    description: 'Classic butter croissant with a flaky texture and golden crust.',
    price: 3.25,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=600&auto=format&fit=crop',
    calories: 260,
    customizable: false,
  }
];

export const CATEGORIES: Category[] = ['Hot Coffee', 'Iced Coffee', 'Blended', 'Tea', 'Bakery'];
