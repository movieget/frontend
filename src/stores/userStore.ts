import { create } from 'zustand'

interface IfUserState {
  accessToken: string | null
  userId: string | null
  profileImg: string | null
  setUser: (accessToken: string, userId: string, profileImg: string) => void
  clearUser: () => void
}

export const useUserStore = create<IfUserState>((set) => ({
  accessToken: null,
  userId: null,
  profileImg: null,
  setUser: (accessToken, userId, profileImg) => set({ accessToken, userId, profileImg }),
  clearUser: () => set({ accessToken: null, userId: null, profileImg: null }),
}))
