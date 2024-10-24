import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'

interface MovieCardProps {
  movie: Movie[]
}

const NowPlayingMovie: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <MovieCardWrapper>
      {movie.map((item) => {
        return (
          <MovieCard
            key={item.id}
            $movieId={item.id}
            $posterImage={item.posterImage}
            $title={item.title}
            $age={item.age ?? 'all'}
            $playing={true}
            $totalLikes={item.totalLikes}
            $isBooking={true}
          />
        )
      })}
    </MovieCardWrapper>
  )
}

export default NowPlayingMovie

const MovieCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 2rem;
`
