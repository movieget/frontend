import React from 'react'
import { IfMovieCardProps } from '../type'
import { StyleMovieCard, StyleMovieCardWrapper, StyleMovieTitle } from '../style'
import { Badge, StyleAge, StyleTitle } from '../../../components/Badge/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../../../components/Checkbox/style'
import { formatLikes } from '../../../utils/formatLikes'
import { BasicBtn, MainBtn } from '../../../components/Button/style'

const MovieCard: React.FC<IfMovieCardProps> = ({ $title, $age, $likes, $playing, $isPlaying }) => {
  return (
    <StyleMovieCardWrapper $isPlaying={$isPlaying}>
      <StyleMovieCard>
        <Badge $playing='playing'>상영중</Badge>
        <Badge
          $color={$playing ? 'primary' : 'gray'}
          $playing={$playing ? 'playing' : 'notPlaying'}
        >
          {$playing ? '상영중' : '상영예정'}
        </Badge>
        <StyleMovieTitle>
          <StyleAge $age={$age} /> {$title}
        </StyleMovieTitle>
        <CheckboxWrapper>
          <Checkbox type='checkbox' id='CheckHeartCount' name='' />
          <CheckHeartCount
            htmlFor='CheckHeartCount'
            $padding=''
            $borderColor='opercity'
            $color='opercity'
          >
            {formatLikes(Number($likes))}
          </CheckHeartCount>
        </CheckboxWrapper>

        <BasicBtn $size='medium'>기본버튼</BasicBtn>
        {$playing ? <MainBtn $size='medium'>예매하기</MainBtn> : <p></p>}
      </StyleMovieCard>
    </StyleMovieCardWrapper>
  )
}

const MainList: React.FC = () => {
  const movies = [
    {
      id: 0,
      posterImage: '/public/img/detail_review01.jpg',
      playing: true,
      age: 'all',
      title: 'API 언제 나오나요?',
      isLikes: true,
      totalLikes: 22500,
      isPlaying: true,
    },
    {
      id: 1,
      title: 'API는 아직 준비 중입니다',
      age: 12,
      likes: 15000,
      status: '개봉예정',
      isPlaying: false,
    },
    {
      id: 2,
      title: 'API 언제 나오나요?',
      age: 'all',
      likes: 22500,
      status: '상영중',
      isPlaying: true,
    },
    {
      id: 3,
      title: 'API는 아직 준비 중입니다',
      age: 12,
      likes: 15000,
      status: '개봉예정',
      isPlaying: false,
    },
    {
      id: 4,
      title: 'API 언제 나오나요?',
      age: 'all',
      likes: 22500,
      status: '상영중',
      isPlaying: true,
    },
    {
      id: 5,
      title: 'API는 아직 준비 중입니다',
      age: 12,
      likes: 15000,
      status: '개봉예정',
      isPlaying: false,
    },
  ]

  return (
    <>
      <div>
        <StyleTitle>상영중 TOP 10</StyleTitle>
        {movies
          .filter((movie) => movie.isPlaying)
          .map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
      <div>
        <StyleTitle>개봉예정 TOP 10</StyleTitle>
        {movies
          .filter((movie) => !movie.isPlaying)
          .map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
    </>
  )
}

export default MainList
