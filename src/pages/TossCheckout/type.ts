export interface IPaymentData {
  book_id: number
  poster: string
  age: string | number
  duration: number
  title: string
  date: string
  start_time: string
  location: string
  cinema: string
  screen_id: number
  screening_date: string
  adult_count: number
  child_count: number
  amount: number
  order_id: string
  payment_key: string
}

export interface IUserPoint {
  user_id: number
  available_points: number
}
