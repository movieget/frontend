import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'

interface NowPlayingMovieProps {
  movieData: Movie[]
}

const UpcomingMovie = ({ movieData }: NowPlayingMovieProps) => {
  return (
    <MovieCardWrapper>
      {movieData?.map((movie) => (
        <MovieCardBox key={movie.id}>
          <MovieCard
            $movieId={movie.id}
            $posterImage={movie.posterImage}
            $title={movie.title}
            $age={movie.age ?? 'all'}
            $playing={false}
            $totalLikes={movie.totalLikes}
          />
        </MovieCardBox>
      ))}
    </MovieCardWrapper>
  )
}

export default UpcomingMovie

const MovieCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 2rem;
`
const MovieCardBox = styled.div`
  flex: 0 0 calc(20% - 1.6rem);
`
