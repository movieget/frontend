import { create } from 'zustand'

interface BookingState {
  initialBookingState: {
    date: string
    movie: string
    location: string
    theater: string
    time: string
  }
  page: boolean
  actions: {
    setField: (field: keyof BookingState['initialBookingState'], value: string) => void
    setPage: () => void
  }
}

interface DarkModeState {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const initialBookingState = {
  date: '',
  movie: '',
  location: '',
  theater: '',
  time: '',
}

// 다크 모드 스토어
export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

// 예약 스토어
export const useBookingStore = create<BookingState>((set) => ({
  initialBookingState,
  page: true, // 기본적으로 첫 번째 페이지로 시작 (Booking01)
  actions: {
    setField: (field, value) =>
      set((state) => ({
        initialBookingState: {
          ...state.initialBookingState,
          [field]: value,
        },
      })),
    setPage: () =>
      set((state) => ({
        page: !state.page, // page 상태만 변경
      })),
  },
}))
