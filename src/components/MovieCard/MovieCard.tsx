import styled from 'styled-components'
import { Badge, StyleAge } from '../Badge/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../Checkbox/style'
import { formatLikes } from '../../utils/formatLikes'
import { BasicBtn, MainBtn } from '../Button/style'
import NoImageCard from '../NoImageCard/NoImageCard'
import { Link } from 'react-router-dom'
import { Movie } from '../../pages/Movie/Movie'
// import { useState } from 'react'
// import { useMutation } from '@tanstack/react-query'

// const toggleLike = async (id: number, isLiked: boolean) => {
//   const response = await fetch('/favorite', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id, liked: isLiked }),
//   })
//   if (!response.ok) {
//     throw new Error('김대식')
//   }
// }

const MovieCard = ({
  id,
  posterImage,
  backdropImage,
  title,
  age,
  playing,
  genre,
  duration,
  overview,
  trailerUrl,
  actorImages,
  isLikes,
  totalLikes,
}: Movie) => {
  // const [isChecked, setIsChecked] = useState(isLikes)

  // const mutation = useMutation({
  //   mutationFn: toggleLike,
  //   onSuccess: (data) => {
  //     console.log('aa', data)
  //   },
  //   onError: (error) => {
  //     console.log('bb', error)
  //   },
  // })

  // const handleCheckboxChange = () => {
  //   const newCheckedState = !isChecked
  //   setIsChecked(newCheckedState)
  //   mutation.mutate(id, newCheckedState)
  // }
  return (
    <MovieCardHolder>
      <MoviePosterImgBox>
        {posterImage ? (
          <MoviePosterImg src={posterImage} alt={title} />
        ) : (
          <NoImageCard $width='100%' />
        )}
      </MoviePosterImgBox>
      <MoviePlayingBox>
        <Badge $playing={playing ? 'playing' : 'notPlaying'}>
          {playing ? '상영중' : '개봉예정'}
        </Badge>
      </MoviePlayingBox>
      <MovieInfoBox>
        <MovieTitleHolder>
          <StyleAge $age={age} />
          <MovieTitle>{title}</MovieTitle>
        </MovieTitleHolder>
      </MovieInfoBox>
      <MovieCardActionBox>
        <MovieCardBtnBox>
          <Link
            to='/detail'
            state={{
              id,
              posterImage,
              backdropImage,
              title,
              age,
              genre,
              duration,
              overview,
              trailerUrl,
              actorImages,
              isLikes,
              totalLikes,
            }}
          >
            <BasicBtn $size='large'>영화정보</BasicBtn>
          </Link>
          {playing && <MainBtn $size='large'>예매하기</MainBtn>}
        </MovieCardBtnBox>
        <CheckboxWrapper>
          <Checkbox
            type='checkbox'
            id={`idFor${id}`}
            name=''
            // onChange={handleCheckboxChange}
            // checked={isChecked}
          />
          <CheckHeartCount
            htmlFor={`idFor${id}`}
            $padding='0'
            $fontSize='2rem'
            $borderColor='transparent'
            $color='transparent'
          >
            {formatLikes(totalLikes)}
          </CheckHeartCount>
        </CheckboxWrapper>
      </MovieCardActionBox>
    </MovieCardHolder>
  )
}

export default MovieCard

const MovieCardHolder = styled.div`
  max-width: 50rem;
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
  flex-direction: column;
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
