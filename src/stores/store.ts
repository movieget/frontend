import { create } from 'zustand'

interface BookingState {
  date: string
  movie: string
  location: string
  theater: string
  time: string
  setField: (field: keyof BookingState, value: string) => void
}

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

// 다크 모드 스토어
export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

// 예약 스토어
export const useBookingStore = create<BookingState>((set) => ({
  date: '',
  movie: '',
  location: '',
  theater: '',
  time: '',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
}))
