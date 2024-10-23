import { create } from 'zustand'
import { generateDates } from '../utils/generateDates'

const initialDates = generateDates()

interface BookingState {
  initialBookingState: {
    date: string
    movie: string
    location: string
    cinema: string
    start_time: string
  }
  actions: {
    setField: (field: keyof BookingState['initialBookingState'], value: string) => void
  }
}

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const initialBookingState = {
  date: initialDates[0],
  movie: '',
  location: '',
  cinema: '',
  start_time: '',
}

// 다크 모드 스토어
export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

// 예약 스토어
export const useBookingStore = create<BookingState>((set) => ({
  initialBookingState,
  actions: {
    setField: (field, value) =>
      set((state) => ({
        initialBookingState: {
          ...state.initialBookingState,
          [field]: value,
        },
      })),
  },
}))
