//type
export interface IfMovieCardProps {
  $title?: string
  $age?: 'all' | 12 | 15 | 18
  $likes?: number
  $playing?: 'playing' | 'notPlaying' | 'none'
  $isPlaying?: boolean
}

interface Movie {
  id: number
  movieId: number
  posterImage: string
  title: string
  age?: 'all' | 12 | 15 | 18
  totalLikes: number
}

export interface IfMovieListProps {
  isPlayingMovies: Movie[]
  notPlayingMovies: Movie[]
}
