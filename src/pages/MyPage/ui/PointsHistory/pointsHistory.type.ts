export interface Point {
  booking_code: number
  movie_title: string
  usage_date: string
  used_points: number
  remaining_points: number
}

export interface PointStack {
  type: string
  accumulation_date: string
  movie_title: string
  points_earned: number
  remaining_points: number
}

export enum EPriod {
  all = 'all',
  today = 'today',
  week = 'week',
}

export interface IGetUsedPointInfoParams {
  userId: string | undefined
  period?: EPriod
}
