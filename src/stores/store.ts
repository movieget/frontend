import { create } from 'zustand'
import { generateDates } from '../utils/generateDates'

const initialDates = generateDates()

interface IBookingState {
  initialBookingState: {
    date: string
    movie: string
    location: string
    cinema: string
    start_time: string
  }

  initialCountState: {
    adult_count: number
    child_count: number
    total_price: number
  }

  actions: {
    setField: (field: keyof IBookingState['initialBookingState'], value: string) => void
    setCount: (age: 'adult' | 'child', value: number) => void
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

const initialCountState = {
  adult_count: 0,
  child_count: 0,
  total_price: 0,
}

// 다크 모드 스토어
export const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))

// 예약 스토어
export const useBookingStore = create<IBookingState>((set) => ({
  initialBookingState,
  initialCountState,
  actions: {
    setField: (field, value) =>
      set((state) => ({
        initialBookingState: {
          ...state.initialBookingState,
          [field]: value,
        },
      })),
    setCount: (age, value) =>
      set((state) => ({
        initialCountState: {
          ...state.initialCountState,
          [`${age}_count`]: value,
        },
      })),
  },
}))

// 성인 카운터 => 성인만 증가 && 좌석 선택할 수 있는 갯수 증가
// 청소년 카운터 => 청소년만 증가 && 좌석 선택할 수 있는 갯수 증가
// 두 카운터 number를 더한 최댓값 === 이용가능한(status === true인)좌석의 갯수
// 좌석을 선택할 때 마다 총 합계 금액 증가
// 성인은 14000원씩 증가
// 청소년은 12000원씩 증가
