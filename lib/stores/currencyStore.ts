// lib\stores\currencyStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface ExchangeInfo {
  from: string;
  to: string;
  amount: string;
  rate: number;
  result: number;
}
interface CurrencyStore {
  baseCurrency: string;
  exchangeInfo: ExchangeInfo | null;

  rates: [string, number][];
  filter: string;
  isLoading: boolean;
  isError: string | null;
  hasHydrated: boolean;
  setBaseCurrency: (currency: string) => void;
  setExchangeInfo: (exchangeInfo: ExchangeInfo | null) => void;
  setRates: (rates: [string, number][]) => void;
  setFilter: (filter: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: string | null) => void;
  setHasHydrated: (state: boolean) => void;
}

export const useCurrencyStore = create<CurrencyStore>()(
  persist((set) => ({
    baseCurrency: '',
    exchangeInfo: null,

    rates: [],
    filter: '',
    isLoading: false,
    isError: null,
    hasHydrated: false,
    setBaseCurrency: (currency) => set({ baseCurrency: currency }),
    setExchangeInfo: (exchangeInfo) => set({ exchangeInfo: exchangeInfo }),
    setRates: (rates) => set({ rates }),
    setFilter: (data) => set({ filter: data }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setIsError: (isError) => set({ isError }),
    setHasHydrated: (hasHydrated) => set({ hasHydrated }),
  }),
    {
      name: "currencyStorage",
      partialize: (state) => ({
        baseCurrency: state.baseCurrency
        
      }), 
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated (true)
      }
  })
);
