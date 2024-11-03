import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'
// 테스트용 주석
interface NowPlayingMovieProps {
  movieData: Movie[]
}

const NowPlayingMovie = ({ movieData }: NowPlayingMovieProps) => {
  // console.log(movieData)
  return (
    <MovieCardWrapper>
      {movieData?.map((movie) => (
        <MovieCardBox key={movie.id}>
          <MovieCard
            id={movie.id}
            poster_image={movie.poster_image}
            title={movie.title}
            age_rating={movie.age_rating ?? 'all'}
            playing={movie.playing}
            total_likes={movie.total_likes}
            backdrop_image={movie.backdrop_image}
            genre={movie.genre}
            duration={movie.duration}
            overview={movie.overview}
            trailer_url={movie.trailer_url}
            actor_images={movie.actor_images}
            is_likes={movie.is_likes}
          />
        </MovieCardBox>
      ))}
    </MovieCardWrapper>
  )
}

export default NowPlayingMovie

const MovieCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 2rem;
`

const MovieCardBox = styled.div`
  flex: 0 0 calc(20% - 1.6rem);
`
