import { Productivitas } from "@/constants/productivitas-digital/input-productivitas/data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductivitasState = {
  tempData: Productivitas[];
  addProductivitas: (productivitas: Productivitas) => void;
  removeProductivitas: (id: string) => void; // Tambah fungsi untuk hapus
  clearProductivitas: () => void;
};

export const useProductivitasStore = create<ProductivitasState>()(
  persist(
    (set) => ({
      tempData: [],
      addProductivitas: (newProductivitas) =>
        set((state) => ({
          tempData: [...state.tempData, newProductivitas],
        })),
      removeProductivitas: (id) =>
        set((state) => ({
          tempData: state.tempData.filter(
            (productivitas) => productivitas.id !== id
          ),
        })),
      clearProductivitas: () => set({ tempData: [] }),
    }),
    {
      name: "productivitas-storage", // Nama key di localStorage
    }
  )
);
