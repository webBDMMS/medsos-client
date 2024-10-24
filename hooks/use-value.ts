// useValue.ts
import { create } from "zustand";

interface ValueState {
  selectedValue: string | null;
  setSelectedValue: (Value: string | null) => void;
}

export const useValue = create<ValueState>((set) => ({
  selectedValue: null,
  setSelectedValue: (Value) => set({ selectedValue: Value }),
}));
