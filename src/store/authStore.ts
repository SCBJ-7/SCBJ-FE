import create from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));

export default useAuthStore;
