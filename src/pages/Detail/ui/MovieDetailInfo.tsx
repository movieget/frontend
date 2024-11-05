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
import { client } from '../../../apis/instances'
import { useUserStore } from '../../../stores/userStore'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

interface MovieDetailInfoProps {
  movie: Movie
}

const MovieDetailInfo = ({ movie }: MovieDetailInfoProps) => {
  const user = useUserStore((state) => state.userData)
  const userId = user ? Number(user.id) : null
  const navigate = useNavigate()
  // console.log(movie)

  // 좋아요 상태 관리
  const [isChecked, setIsChecked] = useState(movie.isChecked)
  const [likesCount, setLikesCount] = useState(movie.total_likes)

  // 좋아요 상태를 포스트하는 함수
  const postLikeStatus = async ({ id, userId }: { id: number; userId: number | null }) => {
    try {
      const response = await client.post(
        `/favorite/${userId}`,
        {
          is_liked: isChecked,
          movie_id: id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      setIsChecked(response.data.is_liked)
      return response.data // 필요에 따라 데이터를 반환
    } catch (err) {
      console.error(err) // 에러 로그 출력
      throw new Error('네트워크 오류가 발생했습니다.') // 에러 핸들링
    }
  }

  // 좋아요 상태 변경 뮤테이션 정의
  const mutation = useMutation({
    mutationFn: postLikeStatus,
    onSuccess: (data) => {
      console.log('데이터', data)
    },
    onError: (error) => {
      console.log('에러', error) // 에러 발생 시 출력
    },
  })

  // 체크박스 변경 핸들러
  const handleCheckboxChange = () => {
    if (!user) {
      alert('로그인을 해주세요.') // 사용자 로그인 확인
      // 로그인 페이지로 이동 (navigate 사용)
      navigate('/login')
    } else {
      const newCheckedState = !isChecked // 체크박스 상태 반전
      setIsChecked(newCheckedState) // 새로운 체크 상태 설정
      mutation.mutate({ id: movie.id, isLiked: newCheckedState, userId }) // 좋아요 상태 변경 요청
      setLikesCount((prevCount) => (newCheckedState ? prevCount + 1 : prevCount - 1))
    }
  }

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
            {movie.poster_image ? (
              <PosterImg src={movie.poster_image} alt={movie.title} />
            ) : (
              <NoImageCard $width='100%' />
            )}
          </PosterImgBox>
          <MovieInfo>
            <MovieInfoTop>
              <MovieTitleHolder>
                <MovieTitle>
                  <StyleAge $age={movie.age_rating} />
                  {movie.title}
                </MovieTitle>
                <Badge $playing='playing'>상영중</Badge>
              </MovieTitleHolder>
              <BadgeBox>
                <Badge>{movie.genre}</Badge>
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
                  onChange={handleCheckboxChange}
                  checked={isChecked}
                  disabled={mutation.isLoading}
                />
                <CheckHeartCount htmlFor='CheckHeartCount'>
                  {formatLikes(likesCount)}
                </CheckHeartCount>
              </CheckboxWrapper>
            </MovieInfoBottom>
          </MovieInfo>
        </MovieDetails>

        {/* 트레일러 */}
        <MovieTrailerBox>
          <StyleTitle>Trailer</StyleTitle>
          {movie.trailer_url ? (
            <MovieTrailer
              width='100%'
              style={{ aspectRatio: '16 / 9', height: 'auto' }}
              // src={movie.trailerUrl}
              src={`https://www.youtube.com/embed/${movie.trailer_url}`}
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
              {movie.actor_images.map((item, index) => (
                <MovieActor key={index}>
                  {item.image_url ? (
                    <MovieActorImg
                      src={item.image_url}
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
