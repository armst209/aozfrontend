import { create } from "zustand";
import { User } from "../types/user";

interface UserState {
  isAdmin: boolean;
  isLoggedIn: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  clearUserStore: () => void;
}
const useUserStore = create<UserState>((set) => ({
  isAdmin: false,
  isLoggedIn: false,
  setIsAdmin: (isAdmin: boolean) =>
    set((state) => ({ isAdmin: (state.isAdmin = isAdmin) })),
  setIsLoggedIn: (isLoggedIn: boolean) =>
    set((state) => ({ isLoggedIn: (state.isLoggedIn = isLoggedIn) })),
  clearUserStore: () => set({ isAdmin: false, isLoggedIn: false }, true),
}));

export default useUserStore;
