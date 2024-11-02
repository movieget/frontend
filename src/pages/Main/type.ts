//type

interface Movie {
  id?: number
  movieId?: number
  posterImage?: string
  title?: string
  age?: 'all' | '12' | '15' | '18'
  playing?: 'playing' | 'notPlaying' | 'none'
  isLikes?: number
  totalLikes?: number
}

export interface IfMovieStoreProps {
  nowMovies: Movie[] | null
  soonMovies: Movie[] | null
  setNowMovies: (movies: Movie[]) => void
  setSoonMovies: (movies: Movie[]) => void
}
