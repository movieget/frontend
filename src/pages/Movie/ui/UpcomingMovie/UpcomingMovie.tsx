import styled from 'styled-components'
import MovieCard from '../../../../components/MovieCard/MovieCard'
import { Movie } from '../../Movie'

interface MovieCardProps {
  movie: Movie[]
}

const UpcomingMovie: React.FC<MovieCardProps> = ({ movie }) => {
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
            $playing={false}
            $totalLikes={item.totalLikes}
            $isBooking={false}
          />
        )
      })}
    </MovieCardWrapper>
  )
}

export default UpcomingMovie

const MovieCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 2rem;
`
