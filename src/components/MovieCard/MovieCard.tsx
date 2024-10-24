import styled from 'styled-components'
import { StyleAge } from '../Badge/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../Checkbox/style'
import { formatLikes } from '../../utils/formatLikes'
import { BasicBtn, MainBtn } from '../Button/style'
import { Movie } from '../../pages/Movie/Movie'

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <MovieCardHolder>
      <MoviePosterImgBox>
        <MoviePosterImg src={movie.posterImage} alt={movie.title} />
      </MoviePosterImgBox>
      <MovieInfoBox>
        <MovieTitleHolder>
          <StyleAge $age={movie.age} />
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieTitleHolder>
        <MovieCardActionBox>
          <CheckboxWrapper>
            <Checkbox type='checkbox' id={`like${movie.id}`} name='' />
            <CheckHeartCount
              htmlFor={`like${movie.id}`}
              $color='transparent'
              $borderColor='transparent'
              $padding='0'
            >
              {formatLikes(movie.totalLikes)}
            </CheckHeartCount>
          </CheckboxWrapper>
          <MovieCardBtnBox>
            <BasicBtn $size='small'>영화정보</BasicBtn>
            <MainBtn $size='small'>예매하기</MainBtn>
          </MovieCardBtnBox>
        </MovieCardActionBox>
      </MovieInfoBox>
    </MovieCardHolder>
  )
}

export default MovieCard

const MovieCardHolder = styled.div`
  flex: 0 0 calc(25% - 1.5rem);
  position: relative;
`

const MoviePosterImgBox = styled.span`
  display: block;
  aspect-ratio: 2 / 3;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`

const MoviePosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MovieInfoBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2.4rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  width: calc(100% - 1.6rem);
`

const MovieTitleHolder = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const MovieTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
`

const MovieCardActionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MovieCardBtnBox = styled.div`
  display: flex;
  gap: 0.8rem;
`
