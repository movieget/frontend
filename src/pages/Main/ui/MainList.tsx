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
import { IMovieStoreProps } from '../type'
import { Link } from 'react-router-dom'

// 상영중 / 상영예정 필터링을 안해도 되는 이유: 리스트를 따로 제공
const MainList = ({ nowData, soonData }: IMovieStoreProps) => {
  // 무비 정보들 props로 받을 예정

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
    pauseOnHover: true, // 호버시 멈 춤
    initialSlide: 0, // 처음에 보여질 슬라이드 번호
    speed: 1000,
  }

  return (
    <StyleMovieCardWrapper>
      <StyleMovieContents>
        <StyleMovieTitle>
          <StyleTitle>상영중 TOP 10</StyleTitle>
          <Link to='/movie?menu=now'>
            <BasicBtn $size='small'>더보기</BasicBtn>
          </Link>
        </StyleMovieTitle>
        <StyleMovieListWrapper>
          <Slider {...settings}>
            {nowData?.movies.map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                poster_image={item.poster_image}
                backdrop_image={item.backdrop_image}
                title={item.title}
                age_rating={item.age_rating ?? 'all'}
                genre={item.genre}
                duration={item.duration}
                overview={item.overview}
                trailer_url={item.trailer_url}
                actor_images={item.actor_images}
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
          <Link to='/movie?menu=soon'>
            <BasicBtn $size='small'>더보기</BasicBtn>
          </Link>
        </StyleMovieTitle>
        <StyleMovieListWrapper>
          <Slider {...settings}>
            {soonData?.movies.map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                poster_image={item.poster_image}
                backdrop_image={item.backdrop_image}
                title={item.title}
                age_rating={item.age_rating ?? 'all'}
                genre={item.genre}
                duration={item.duration}
                overview={item.overview}
                trailer_url={item.trailer_url}
                actor_images={item.actor_images}
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
