import { create } from 'zustand'

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

export default useDarkModeStore
