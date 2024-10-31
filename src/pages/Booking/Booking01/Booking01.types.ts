export interface IArrowButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IDateButtonProps {
  dateNumber: string
  today: string
  isSelected: boolean
  setIsSelected: any
}

// 영화 정보 타입 정의
export type TMovies = {
  id: number
  title: string
  genre: string
  duration: number
  age_rating: string
  poster_image_url: string
}

// 위치 정보 타입 정의
export type TLocations = {
  id: number
  spot: string // 위치 이름
}

// 영화관 정보 타입 정의
export type TCinemas = {
  id: number
  cinema_name: string // 영화관 이름
}

// 상영 정보 타입 정의
export type TScreenings = {
  id: number
  start_time: string // 상영 시작 시간
  end_time: string // 상영 종료 시간
  movie__title: string // 영화 제목
}

// 전체 예약 데이터 타입 정의
export interface IBookingData {
  date: string // 선택된 날짜
  movies: TMovies[] // 영화 목록
  locations: TLocations[] // 위치 목록
  cinemas: TCinemas[] // 영화관 목록
  screenings: TScreenings[] // 상영 목록
}

export interface ISelectMoviesProps {
  movies?: TMovies[]
  isLoading: boolean
  isError: boolean
  error?: Error | null
  date: string
  bookId: number
}

export interface IErrorMessageProps {
  errorMsg: React.ReactNode
}

export interface IOptionButtonProps {
  id: number
  title: '영화' | '지역' | '영화관'
  poster: string
  age?: 'all' | '12' | '15' | '18'
  label?: string
  selectedId: boolean
  onSelect: (id: number) => void
}

export interface ISelectLocationsProps {
  locations?: TLocations[]
  isLoading: boolean
  isError: boolean
  error?: Error | null
  date: string
}

export interface ISelectTheatersProps {
  cinemas?: TCinemas[]
  isError: boolean
  isLoading: boolean
  error: Error | null
  date: string
}

export interface ISelectTimesProps {
  setIsTimeSelected: React.Dispatch<React.SetStateAction<boolean>>
  screenings?: TScreenings[]
  isValid: boolean
  date: string
}

export interface ISelectTitleProps {
  title?: string
}

export interface ITimeButtonProps {
  time?: string
  id: number
  selectedId: boolean
  screenId: number
  screeningDate: string
  onSelect: (id: number) => void
  setSelectedId: (toggleStyle: number | null) => void
  setIsTimeSelected: React.Dispatch<React.SetStateAction<boolean>>
}
