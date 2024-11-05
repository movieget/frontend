//type

type TActorImages = {
  image_url: string
  name: string
}

// movie에서 export하고 있는 interface가 있음
interface IMovies {
  id: number // 영화 ID
  title: string // 영화제목
  age_rating: 'all' | '12' | '15' | '18' // 연령 제한
  genre: string // 장르 배열
  overview: string // 영화 개요
  playing: boolean // 상영중 & 개봉예정 : 상영중-true
  poster_image: string // 포스터 이미지 URL
  rating: number // 평점
  total_likes: number // 총 종아요 수
  trailer_url: string // 트레일러 URL
  actor_images: TActorImages[] // 출연배우 배열
  backdrop_image: string // 배경 이미지 URL
  duration: number // 상영시간(분)
  is_likes: boolean // 좋아요 여부 : 좋아요상태-true
}

export interface IMovieStoreProps {
  nowData: IMovies[] | null
  soonData: IMovies[] | null
  setNowData: (movies: IMovies[]) => void
  setSoonData: (movies: IMovies[]) => void
}
