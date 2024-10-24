// userStore.ts
import {create} from "zustand";

interface User {
  id: string;
  nama: string | null;
  role: string;
  id_pj_cabang: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default userStore;
