export type TCount = {
  adult_count: number
  child_count: number
}

// 공통 속성을 포함하는 기본 인터페이스
interface IPriceSeatProps {
  totalPrice: number
  totalSeat: number
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
  setTotalSeat: React.Dispatch<React.SetStateAction<number>>
}

// ISelectPeopleHeaderProps 정의
export interface ISelectPeopleHeaderProps extends IPriceSeatProps {
  seatId: string[]
  count: TCount
  setCount: React.Dispatch<React.SetStateAction<TCount>>
}

// ICounterProps 정의
export interface ICounterProps extends ISelectPeopleHeaderProps {
  age: '성인' | '청소년'
}

// ICounterBtnProps 정의
export interface ICounterBtnProps
  extends Omit<ICounterProps, 'setTotalPrice' | 'setTotalSeat' | 'totalPrice'> {
  ico: 'plus' | 'minus'
}

// ISelectSeatBodyProps 정의
export interface ISelectSeatBodyProps {
  totalSeat: number
  seatId: string[]
  setSeatId: React.Dispatch<React.SetStateAction<string[]>>
}

// IResultInfoProps 정의
export interface IResultInfoProps {
  count: TCount
  seatId: string[]
}

// ISelectSeatProps 정의
export interface ISelectSeatProps extends ISelectSeatBodyProps {}

export interface IResultAsideProps {
  totalPrice: number
  totalSeat: number
  count: TCount
  seatId: string[]
}

export type TRowSeat = {
  row: string // 'row' 속성 추가
  seats: {
    column: string
    status: boolean | null
  }[]
}

export interface ISeatData {
  screen_id: number | null
  rows: TRowSeat[]
}
