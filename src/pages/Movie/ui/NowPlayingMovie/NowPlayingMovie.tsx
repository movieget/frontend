import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'

interface NowPlayingMovieProps {
  movieData: Movie[]
}

const NowPlayingMovie: React.FC<NowPlayingMovieProps> = ({ movieData }) => {
  console.log(movieData)
  return (
    <MovieCardWrapper>
      {movieData?.map((movie) => (
        <MovieCardBox key={movie.id}>
          <MovieCard
            $movieId={movie.id}
            $posterImage={movie.posterImage}
            $title={movie.title}
            $age={movie.age ?? 'all'}
            $playing={true}
            $totalLikes={movie.totalLikes}
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
