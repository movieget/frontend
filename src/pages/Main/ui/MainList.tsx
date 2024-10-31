import React, { useEffect } from 'react'
import {
  StyleMovieCardWrapper,
  StyleMovieContents,
  StyleMovieTitle,
  StyleMovieListWrapper,
} from '../style'
import { StyleTitle } from '../../../components/Badge/style'
import MovieCard from '../../../components/MovieCard/MovieCard'
import Slider from 'react-slick'
import { BasicBtn } from '../../../components/Button/style'
import { IfMovieListProps } from '../type'
import { useUserStore } from '../../../stores/userStore'

// dummy
const isPlayingMovies = [
  {
    id: 0,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 1,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '12',
    playing: true,
    isLikes: false,
    totalLikes: 15000,
  },
  {
    id: 2,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 3,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '18',
    playing: true,
    isLikes: true,
    totalLikes: 15000,
  },
  {
    id: 4,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 5,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 6,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '15',
    playing: true,
    isLikes: false,
    totalLikes: 15000,
  },
  {
    id: 7,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 8,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '15',
    playing: true,
    isLikes: true,
    totalLikes: 15000,
  },
  {
    id: 9,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: '12',
    playing: true,
    isLikes: true,
    totalLikes: 22500,
  },
]

const notPlayingMovies = [
  {
    id: 0,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: false,
    isLikes: false,
    totalLikes: 22500,
  },
  {
    id: 1,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '12',
    playing: false,
    isLikes: false,
    totalLikes: 15000,
  },
  {
    id: 2,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: false,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 3,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '18',
    playing: false,
    isLikes: true,
    totalLikes: 15000,
  },
  {
    id: 4,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: false,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 5,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: false,
    isLikes: false,
    totalLikes: 22500,
  },
  {
    id: 6,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '15',
    playing: false,
    isLikes: true,
    totalLikes: 15000,
  },
  {
    id: 7,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: 'all',
    playing: false,
    isLikes: true,
    totalLikes: 22500,
  },
  {
    id: 8,
    posterImage: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age: '15',
    playing: false,
    isLikes: true,
    totalLikes: 15000,
  },
  {
    id: 9,
    posterImage: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age: '12',
    playing: false,
    isLikes: false,
    totalLikes: 22500,
  },
]

// 상영중 / 상영예정 필터링을 안해도 되는 이유
// 백엔드에서 상영중 / 상영예정 리스트를 따로 제공
const MainList: React.FC<IfMovieListProps> = () => {
  // list 불러오는 데이터API 호출
  // userId 담겨있는 상태 불러와서 list에 매치시켜서 좋아요수 반영
  const userId = useUserStore((state) => state.userData?.id)
  console.log(userId)

  useEffect(() => {}, [])
  // slick 설정
  var settings = {
    arrows: true, // 화살표
    dots: true, // 하단 점
    infinite: true, // 슬라이더 처음-마지막 연결
    slidesToShow: 4, // 1줄에 보이는 컨텐츠 수
    slidesToScroll: 2, // 한번에 넘어가는 콘텐츠 수
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 5000, // 자동 슬라이드 넘어가는 시간
    draggable: true, // 드래그 가능 - 기본값: true
    pauseOnHover: true, // 호버시 멈춤
    initialSlide: 0, // 처음에 보여질 슬라이드 번호
    speed: 1000,
  }

  return (
    <StyleMovieCardWrapper>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>상영중 TOP 10</StyleTitle>
          <BasicBtn $size='small'>더보기</BasicBtn>
        </StyleMovieTitle>
        <StyleMovieListWrapper>
          <Slider {...settings}>
            {isPlayingMovies.map((item) => (
              <MovieCard
                key={item.id}
                movieId={item.id}
                posterImage={item.posterImage}
                title={item.title}
                age={item.age}
                playing={item.playing}
                isLikes={item.isLikes}
                totalLikes={item.totalLikes}
              />
            ))}
          </Slider>
        </StyleMovieListWrapper>
      </StyleMovieContents>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>개봉예정 TOP 10</StyleTitle>
          <BasicBtn $size='small'>더보기</BasicBtn>
        </StyleMovieTitle>
        <StyleMovieListWrapper>
          <Slider {...settings}>
            {notPlayingMovies.map((item) => (
              <MovieCard
                key={item.id}
                movieId={item.id}
                posterImage={item.posterImage}
                title={item.title}
                age={item.age}
                playing={item.playing}
                isLikes={item.isLikes}
                totalLikes={item.totalLikes}
              />
            ))}
          </Slider>
        </StyleMovieListWrapper>
      </StyleMovieContents>
    </StyleMovieCardWrapper>
  )
}

export default MainList
