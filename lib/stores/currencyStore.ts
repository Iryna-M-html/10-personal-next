// lib\stores\currencyStore.ts
import { create } from 'zustand';

interface CurrencyState {
  currency: string | null;
  setCurrency: (code: string) => void;
  initialized: boolean;
  setInitialized: (value: boolean) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: null,
  initialized: false,
  setCurrency: (code) => set({ currency: code }),
  setInitialized: (value) => set({ initialized: value }),
}));
