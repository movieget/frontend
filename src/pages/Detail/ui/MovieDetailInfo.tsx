import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BackDropImage from '../../../assets/img/detail_backdrop.jpg'
import PosterImage from '../../../assets/img/detail_poster.jpg'
import { Badge, BadgeBox, StyleAge, StyleTitle } from '../../../components/Badge/style'
import { MainBtn } from '../../../components/Button/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../../../components/Checkbox/style'
import { formatLikes } from '../../../utils/formatLikes'

interface Actor {
  name: string
  image: string
}

interface DummyData {
  id: number
  backdropImage: string
  posterImage: string
  title: string
  age: 'all' | 12 | 15 | 18
  genre: string[]
  duration: number
  playing: boolean
  overview: string
  trailer: string
  actor: Actor[]
  isLikes: boolean
  totalLikes: number
}

const dummyData: DummyData = {
  id: 0,
  backdropImage: '이미지 경로',
  posterImage: '이미지 경로',
  title: '더 크로우',
  age: 18,
  genre: ['액션', 'SF/판타지'],
  duration: 200,
  playing: true,
  overview:
    '"더 크로우"는 에릭 드레븐이라는 뮤지션이 사랑하는 여자친구 셸리를 잔인하게 살해당한 후, 해골 같은 새의 힘으로 부활하는 이야기입니다. 에릭은 자신의 죽음을 기억하며 복수의 길에 나섭니다. 범죄자들을 처치하며 셸리와의 사랑을 되찾으려 하고, 자신의 과거와 마주합니다. 이 과정에서 그는 진정한 정의와 사랑의 의미를 찾으려 합니다. 에릭은 복수의 사냥꾼으로서, 그의 고통과 상실을 통해 인간의 복잡한 감정을 드러내며, 관객에게 깊은 여운을 남깁니다.',
  trailer: '트레일러 경로',
  actor: [
    { name: '빌 스카스가드', image: '/img/detail_actor01.jpg' },
    { name: 'FKA twigs', image: '/img/detail_actor02.jpg' },
    { name: '대니 휴스턴', image: '/img/detail_actor03.jpg' },
    { name: 'Laura Birn', image: '/img/detail_actor04.jpg' },
    { name: 'Jordan Bolger', image: '/img/detail_actor05.jpg' },
    { name: 'Isabella Wei', image: '/img/detail_actor06.jpg' },
    { name: 'Karel Dobrý', image: '/img/detail_actor07.jpg' },
    { name: 'Sebastian Orozco', image: '/img/detail_actor08.jpg' },
  ],
  isLikes: true,
  totalLikes: 2500,
}

const MovieDetailInfo = () => {
  const [movie, setMovie] = useState<DummyData>(dummyData)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <>
      <BackDropImgBox>
        <BackDropImg src={BackDropImage} alt={movie.title} />
      </BackDropImgBox>
      <MovieDetailWrapper>
        <MovieDetails>
          <PosterImgBox>
            <PosterImg src={PosterImage} alt={movie.title} />
          </PosterImgBox>
          <MovieInfo>
            <MovieInfoTop>
              <MovieTitleHolder>
                <MovieTitle>
                  <StyleAge $age={movie.age} />
                  {movie.title}
                </MovieTitle>
                <Badge $playing='playing'>상영중</Badge>
              </MovieTitleHolder>
              <BadgeBox>
                {movie.genre.map((item) => {
                  return <Badge key={item}>{item}</Badge>
                })}
                <Badge $color='orange'>{movie.duration}분</Badge>
              </BadgeBox>
              <MovieOverview>{movie.overview}</MovieOverview>
            </MovieInfoTop>
            <MovieInfoBottom>
              <MainBtn $size='large'>예매하기</MainBtn>
              <CheckboxWrapper>
                <Checkbox
                  type='checkbox'
                  id='CheckHeartCount'
                  name=''
                  defaultChecked={movie.isLikes}
                />
                <CheckHeartCount htmlFor='CheckHeartCount'>
                  {formatLikes(movie.totalLikes)}
                </CheckHeartCount>
              </CheckboxWrapper>
            </MovieInfoBottom>
          </MovieInfo>
        </MovieDetails>

        {/* 트레일러 */}
        <MovieTrailerBox>
          <StyleTitle>Trailer</StyleTitle>
          <MovieTrailer
            width='100%'
            style={{ aspectRatio: '16 / 9', height: 'auto' }}
            src='https://www.youtube.com/embed/djSKp_pwmOA?si=l1wO5dvCTL_p6bKx'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></MovieTrailer>
        </MovieTrailerBox>

        {/* 배우 */}
        <MovieActorBox>
          <StyleTitle>Actor</StyleTitle>
          <MovieActorList>
            <Slider {...settings}>
              {movie.actor.map((actor) => (
                <MovieActor key={actor.name}>
                  <MovieActorImg
                    src={actor.image}
                    alt={actor.name}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <MovieActorName>{actor.name}</MovieActorName>
                </MovieActor>
              ))}
            </Slider>
          </MovieActorList>
        </MovieActorBox>
      </MovieDetailWrapper>
    </>
  )
}

export default MovieDetailInfo

const BackDropImgBox = styled.span`
  display: block;
  margin: 0 auto;
`
const BackDropImg = styled.img`
  width: 100%;
`

const MovieDetailWrapper = styled.div``

// 영화 상세
const MovieDetails = styled.div`
  display: flex;
  gap: 6rem;
  padding-top: 6rem;
`
const PosterImgBox = styled.span`
  display: block;
  width: 100%;
  max-width: 40rem;
  margin-top: -14rem;
`
const PosterImg = styled.img`
  width: 100%;
`
const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
const MovieInfoTop = styled.div``
const MovieTitleHolder = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid #3f3f3f;
`
const MovieTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 3.2rem;
  font-weight: 700;
`
const MovieOverview = styled.p`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.5;
  word-break: keep-all;
`
const MovieInfoBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

// 트레일러
const MovieTrailerBox = styled.div`
  margin-top: 10rem;
`
const MovieTrailer = styled.iframe`
  margin-top: 2.4rem;
`

// 배우
const MovieActorBox = styled.div`
  margin-top: 10rem;
`
const MovieActorList = styled.div`
  margin-top: 2.4rem;
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
    display: none !important;
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
const MovieActor = styled.div``
const MovieActorImg = styled.img``
const MovieActorName = styled.p`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 600;
`
