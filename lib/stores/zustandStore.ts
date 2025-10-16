import { create } from 'zustand';
export interface StoreState {
  baseCurrency: string;
  filter: string;
  rates: Record<string, number>;
  setFilter: (value: string) => void;
  setRates: (rates: Record<string, number>) => void;
}

export const useStore = create<StoreState>((set) => ({
  baseCurrency: 'USD',
  rates: {}, // здесь будут храниться курсы
  filter: '',

  setFilter: (value) => set({ filter: value }),
  setRates: (rates) => set({ rates }),
}));
