import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'

interface NowPlayingMovieProps {
  movieData: Movie[]
}

const NowPlayingMovie = ({ movieData }: NowPlayingMovieProps) => {
  return (
    <MovieCardWrapper>
      {movieData?.map((movie) => (
        <MovieCardBox key={movie.id}>
          <MovieCard
            id={movie.id}
            posterImage={movie.posterImage}
            title={movie.title}
            age={movie.age ?? 'all'}
            playing={movie.playing}
            totalLikes={movie.totalLikes}
            backdropImage={movie.backdropImage}
            genre={movie.genre}
            duration={movie.duration}
            overview={movie.overview}
            trailer={movie.trailer}
            actor={movie.actor}
            isLikes={movie.isLikes}
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
