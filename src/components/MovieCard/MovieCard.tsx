import styled from 'styled-components'
import { Badge, StyleAge } from '../Badge/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../Checkbox/style'
import { formatLikes } from '../../utils/formatLikes'
import { BasicBtn, MainBtn } from '../Button/style'

interface MovieInfoCardProps {
  $movieId: number
  $posterImage: string
  $title: string
  $age: 'all' | 12 | 15 | 18
  $playing: boolean
  $totalLikes: number
  $isBooking?: boolean
}

const MovieCard: React.FC<MovieInfoCardProps> = ({
  $movieId,
  $posterImage,
  $title,
  $age,
  $playing,
  $totalLikes,
  $isBooking,
}) => {
  return (
    <MovieCardHolder>
      <MoviePosterImgBox>
        <MoviePosterImg src={$posterImage} alt={$title} />
      </MoviePosterImgBox>
      <MoviePlayingBox>
        <Badge $playing={$playing ? 'playing' : 'notPlaying'}>
          {$playing ? '상영중' : '개봉예정'}
        </Badge>
      </MoviePlayingBox>
      <MovieInfoBox>
        <MovieTitleHolder>
          <StyleAge $age={$age} />
          <MovieTitle>{$title}</MovieTitle>
        </MovieTitleHolder>
      </MovieInfoBox>
      <MovieCardActionBox>
        <CheckboxWrapper>
          <Checkbox type='checkbox' id={`idFor${$movieId}`} name='' />
          <CheckHeartCount
            htmlFor={`idFor${$movieId}`}
            $color='transparent'
            $borderColor='transparent'
            $padding='0'
          >
            {formatLikes($totalLikes)}
          </CheckHeartCount>
        </CheckboxWrapper>
        <MovieCardBtnBox>
          <BasicBtn $size='large'>영화정보</BasicBtn>
          {$isBooking && <MainBtn $size='large'>예매하기</MainBtn>}
        </MovieCardBtnBox>
      </MovieCardActionBox>
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
const MoviePlayingBox = styled.span`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
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
  width: calc(100% - 2.4rem);
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
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;

  ${MovieCardHolder}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
  }
`
const MovieCardBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
