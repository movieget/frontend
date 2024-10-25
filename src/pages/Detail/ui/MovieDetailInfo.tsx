import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Badge, BadgeBox, StyleAge, StyleTitle } from '../../../components/Badge/style'
import { MainBtn } from '../../../components/Button/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../../../components/Checkbox/style'
import { formatLikes } from '../../../utils/formatLikes'
import NoImageCard from '../../../components/NoImageCard/NoImageCard'
import { Movie } from '../../Movie/Movie'
interface MovieDetailInfoProps {
  movie: Movie
}

const MovieDetailInfo = ({ movie }: MovieDetailInfoProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <>
      <MovieDetailWrapper>
        {/* 영화정보 */}
        <MovieDetails>
          <PosterImgBox>
            {movie.posterImage ? (
              <PosterImg src={movie.posterImage} alt={movie.title} />
            ) : (
              <NoImageCard $width='100%' />
            )}
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
          {movie.trailer ? (
            <MovieTrailer
              width='100%'
              style={{ aspectRatio: '16 / 9', height: 'auto' }}
              src={movie.trailer}
              title={movie.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></MovieTrailer>
          ) : (
            <NoImageCard $width='100%' $height='50rem' $marginTop='2.4rem' />
          )}
        </MovieTrailerBox>

        {/* 배우 */}
        <MovieActorBox>
          <StyleTitle>Actor</StyleTitle>
          <MovieActorList>
            <Slider {...settings}>
              {movie.actor.map((item) => (
                <MovieActor key={item.name}>
                  {item.image ? (
                    <MovieActorImg
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <NoImageCard $width='100%' />
                  )}
                  <MovieActorName>{item.name}</MovieActorName>
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
