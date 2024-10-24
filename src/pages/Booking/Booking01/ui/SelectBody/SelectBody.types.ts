export type TMovies = {
  id: number
  title: string
  genre: string
  duration: number
  rating: number
  age: number
}

export type TLocations = {
  id: number
  spot: string
}

export type TCinemas = {
  id: number
  cinema_name: string
}

export type TScreenings = {
  id: number
  start_time: string
  end_time: string
  movie__title: string
}

export interface IBookingData {
  date: string
  movies: TMovies[]
  locations: TLocations[]
  cinemas: TCinemas[]
  screenings: TScreenings[]
}
