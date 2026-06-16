// auth-store.ts
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  isUserloading: true,
  setUser: (user) => set({ user }),
  setLoading: (isUserloading) => set({ isUserloading }),
}))