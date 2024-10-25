import React from 'react'
import { StyleMovieCardWrapper, StyleMovieContents, StyleMovieTitle } from '../style'
import { StyleTitle } from '../../../components/Badge/style'
import MovieCard from '../../../components/MovieCard/MovieCard'
import Slider from 'react-slick' // 일단제외 - 추후(필수)적용예정
import { BasicBtn } from '../../../components/Button/style'
import styled from 'styled-components'
import { IfMovieListProps } from '../type'

// dummy
const isPlayingMovies = [
  {
    id: 0,
    posterImage: '/img/detail_review01.jpg',
    age: 'all',
    title: 'API 언제 나오나요?',
    playing: '',
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
  {
    id: 1,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 12,
    title: 'API는 아직 준비 중입니다',
    isLikes: true,
    totalLikes: 15000,
    isPlaying: false,
  },
  {
    id: 2,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 'all',
    title: 'API 언제 나오나요?',
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
  {
    id: 3,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 12,
    title: 'API는 아직 준비 중입니다',
    isLikes: true,
    totalLikes: 15000,
    isPlaying: false,
  },
  {
    id: 4,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 'all',
    title: 'API 언제 나오나요?',
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
]

const notPlayingMovies = [
  {
    id: 0,
    posterImage: '/img/detail_review01.jpg',
    age: 'all',
    title: 'API 언제 나오나요?',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
  {
    id: 1,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 12,
    title: 'API는 아직 준비 중입니다',
    isLikes: true,
    totalLikes: 15000,
    isPlaying: false,
  },
  {
    id: 2,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 'all',
    title: 'API 언제 나오나요?',
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
  {
    id: 3,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 12,
    title: 'API는 아직 준비 중입니다',
    isLikes: true,
    totalLikes: 15000,
    isPlaying: false,
  },
  {
    id: 4,
    posterImage: '/img/detail_review01.jpg',
    playing: true,
    age: 'all',
    title: 'API 언제 나오나요?',
    isLikes: true,
    totalLikes: 22500,
    isPlaying: true,
  },
]

// 상영중 / 상영예정 필터링을 안해도 되는 이유
// 백엔드에서 상영중 / 상영예정 리스트를 따로 제공
const MainList: React.FC<IfMovieListProps> = () => {
  // slick 설정
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    initialSlide: 0,
  }

  // *MovieCard코드 다시 한번 확인해보고 적용해볼것
  return (
    <StyleMovieCardWrapper>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>상영중 TOP 10</StyleTitle>
          <BasicBtn $size='small'>더보기</BasicBtn>
        </StyleMovieTitle>
        <StyleMoviePlayingList>
          {/* // dummy로 넣어놓은 정보들이 제목, 이미지, 나이, 좋아요수 제외하고 정상적용 되지 않고 있음 */}
          {isPlayingMovies.map((item) => (
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
          ))}
        </StyleMoviePlayingList>
      </StyleMovieContents>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>개봉예정 TOP 10</StyleTitle>
          <BasicBtn $size='small'>더보기</BasicBtn>
        </StyleMovieTitle>
        <StyleMoviePlayingList>
          {notPlayingMovies.map((item) => {
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
        </StyleMoviePlayingList>
      </StyleMovieContents>
    </StyleMovieCardWrapper>
  )
}

export default MainList

// 슬릭 스타일 설정
const StyleMoviePlayingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
  width: 100%;

  img {
    width: 20rem;
  }

  div:focus-visible {
    outline: none;
  }
  .slick-track {
    display: flex;
    gap: 1.8rem;
    width: 100%;

    &::before,
    &::after {
      display: none;
    }
  }
  .slick-arrow {
    display: block !important;
    position: absolute;
  }
  .slick-dots {
    li {
      width: auto;
      height: auto;
      margin: 0 4px;
      button {
        content: '';
        position: initial;
        display: block;
        width: 8px;
        height: 8px;
        padding: 0;
        line-height: initial;
        background-color: #353535;
        border: 1px solid;
        border-color: #353535;
        border-radius: 4px;
        opacity: 1;
        transition: all 0.3s;
        &::before {
          display: none;
        }
      }

      &.slick-active {
        button {
          width: 12px;
          background-color: #f45917;
          border-color: #ff8b59;
          transition: all 0.3s;
        }
      }
    }
  }
`
