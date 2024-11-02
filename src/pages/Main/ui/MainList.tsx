import React from 'react'
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
import { IfMovieStoreProps } from '../type'
import { useSearchParams } from 'react-router-dom'
import { useUserStore } from '../../../stores/userStore'
import { useMovieStore } from '../../../stores/store'

// dummy
const isNowMovies = [
  {
    id: 0,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 1,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '12',
    playing: true,
    is_likes: false,
    total_likes: 15000,
  },
  {
    id: 2,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 3,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '18',
    playing: true,
    is_likes: true,
    total_likes: 15000,
  },
  {
    id: 4,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 5,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 6,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '15',
    playing: true,
    is_likes: false,
    total_likes: 15000,
  },
  {
    id: 7,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 8,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '15',
    playing: true,
    is_likes: true,
    total_likes: 15000,
  },
  {
    id: 9,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: '12',
    playing: true,
    is_likes: true,
    total_likes: 22500,
  },
]

const isSoonMovies = [
  {
    id: 0,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: false,
    is_likes: false,
    total_likes: 22500,
  },
  {
    id: 1,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '12',
    playing: false,
    is_likes: false,
    total_likes: 15000,
  },
  {
    id: 2,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: false,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 3,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '18',
    playing: false,
    is_likes: true,
    total_likes: 15000,
  },
  {
    id: 4,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: false,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 5,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: false,
    is_likes: false,
    total_likes: 22500,
  },
  {
    id: 6,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '15',
    playing: false,
    is_likes: true,
    total_likes: 15000,
  },
  {
    id: 7,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: 'all',
    playing: false,
    is_likes: true,
    total_likes: 22500,
  },
  {
    id: 8,
    poster_image: '/img/detail_review01.jpg',
    title: 'API는 아직 준비 중입니다',
    age_rating: '15',
    playing: false,
    is_likes: true,
    total_likes: 15000,
  },
  {
    id: 9,
    poster_image: '/img/detail_review01.jpg',
    title: 'API 언제 나오나요?',
    age_rating: '12',
    playing: false,
    is_likes: false,
    total_likes: 22500,
  },
]

// 상영중 / 상영예정 필터링을 안해도 되는 이유
// 백엔드에서 상영중 / 상영예정 리스트를 따로 제공

// 상영중/상영예정 필터링을 안해도 되는 이유: 백엔드에서 상영중/상영예정 따로 제공
const MainList: React.FC<IfMovieStoreProps> = () => {
  const [searchParams] = useSearchParams()

  const { nowMovies, soonMovies } = useMovieStore()

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
            {isNowMovies?.map((item) => (
              <MovieCard
                key={item.id}
                movieId={item.id}
                poster_image={item.poster_image}
                title={item.title}
                age_rating={item.age_rating ?? 'all'}
                playing={item.playing}
                is_likes={item.is_likes}
                total_likes={item.total_likes}
              />
            ))}
          </Slider>
        </StyleMovieListWrapper>
      </StyleMovieContents>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>개봉예정</StyleTitle>
          <BasicBtn $size='small'>더보기</BasicBtn>
        </StyleMovieTitle>
        <StyleMovieListWrapper>
          <Slider {...settings}>
            {isSoonMovies?.map((item) => (
              <MovieCard
                key={item.id}
                movieId={item.id}
                poster_image={item.poster_image}
                title={item.title}
                age_rating={item.age_rating ?? 'all'}
                playing={item.playing}
                is_likes={item.is_likes}
                total_likes={item.total_likes}
              />
            ))}
          </Slider>
        </StyleMovieListWrapper>
      </StyleMovieContents>
    </StyleMovieCardWrapper>
  )
}

export default MainList
