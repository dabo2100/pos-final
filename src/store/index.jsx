import { create } from 'zustand';

export const domain = 'http://localhost:1337';

export const useCart = create((set) => ({
  cart: [],
  setCart: (newValue) => set(() => ({ cart: newValue })),
}));

export const useType = create((set) => ({
  type: 'Dine',
  setType: (newValue) => set(() => ({ type: newValue })),
}));
