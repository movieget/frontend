import styled from 'styled-components'
import { Badge, StyleAge } from '../Badge/style'
import { Checkbox, CheckboxWrapper, CheckHeartCount } from '../Checkbox/style'
import { formatLikes } from '../../utils/formatLikes'
import { BasicBtn, MainBtn } from '../Button/style'
import NoImageCard from '../NoImageCard/NoImageCard'
import { Link, useNavigate } from 'react-router-dom'
import { Movie } from '../../pages/Movie/Movie'
import { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useUserStore } from '../../stores/userStore'
import { client } from '../../apis/instances'

// 좋아요 상태를 포스트하는 함수
const postLikeStatus = async ({
  id,
  isLiked,
  userId,
}: {
  id: number
  isLiked: boolean
  userId: number | null
}) => {
  try {
    const response = await client.post(
      `/favorite/${userId}`,
      {
        is_liked: isLiked,
        movie_id: id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data // 필요에 따라 데이터를 반환
  } catch (err) {
    console.error(err) // 에러 로그 출력
    throw new Error('네트워크 오류가 발생했습니다.') // 에러 핸들링
  }
}

// MovieCard 컴포넌트 정의
const MovieCard = ({
  id,
  poster_image,
  backdrop_image,
  title,
  age_rating,
  playing,
  genre,
  duration,
  overview,
  trailer_url,
  actor_images,
  is_likes,
  total_likes,
}: Movie) => {
  const user = useUserStore((state) => state.userData)
  const userId = user ? user.id : null
  const navigate = useNavigate()

  // useQuery로 좋아요 상태를 가져오는 쿼리
  const { data } = useQuery({
    queryKey: ['favorite', userId, id], // 쿼리 키 설정
    queryFn: () => fetchLikes(Number(userId), id), // 좋아요 상태 가져오는 함수
    enabled: !!userId, // userId가 존재할 때만 쿼리 실행
  })

  // isChecked 상태 초기화
  const [isChecked, setIsChecked] = useState()

  // totalCount
  const [likesCount, setLikesCount] = useState(total_likes)

  // 사용자의 좋아요 상태를 가져오는 함수
  const fetchLikes = async (userId: number, movie_id: number) => {
    try {
      const res = await client.get(`/favorite?user_id=${userId}&movie_id=${movie_id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = res.data
      setIsChecked(data.is_liked)
      return data
    } catch (err) {
      console.error(err)
    }
  }

  // useEffect를 사용하여 data가 업데이트될 때 isChecked를 설정
  useEffect(() => {
    if (data) {
      setIsChecked(data.is_liked) // 데이터가 존재하면 is_liked로 상태 업데이트
    }
  }, [data]) // data가 변경될 때마다 실행

  // 좋아요 상태 변경 뮤테이션 정의
  const mutation = useMutation({
    mutationFn: postLikeStatus,
    // onSuccess: (data) => {
    //   // 성공 시 데이터 로그
    // },
    onError: (error) => {
      console.log('에러', error) // 에러 발생 시 출력
    },
  })

  // 체크박스 변경 핸들러
  const handleCheckboxChange = () => {
    if (!user) {
      alert('로그인을 해주세요.') // 사용자 로그인 확인
      navigate('/login') // 로그인 페이지로 이동
    } else {
      const newCheckedState = !isChecked // 체크박스 상태 반전
      setIsChecked(newCheckedState) // 새로운 체크 상태 설정
      if (userId !== null) {
        // userId가 null이 아닐 때만 호출
        mutation.mutate({ id, isLiked: newCheckedState, userId: Number(userId) }) // 좋아요 상태 변경 요청
      }
      setLikesCount((prevCount) => (newCheckedState ? prevCount + 1 : prevCount - 1))
    }
  }

  return (
    <MovieCardHolder>
      <MoviePosterImgBox>
        {poster_image ? (
          <MoviePosterImg src={poster_image} alt={title} />
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
          <StyleAge $age={age_rating} />
          <MovieTitle>{title}</MovieTitle>
        </MovieTitleHolder>
      </MovieInfoBox>
      <MovieCardActionBox>
        <MovieCardBtnBox>
          <Link
            to='/detail'
            state={{
              id,
              poster_image,
              backdrop_image,
              title,
              age_rating,
              genre,
              duration,
              overview,
              trailer_url,
              actor_images,
              is_likes,
              total_likes: likesCount,
              isChecked,
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
            onChange={handleCheckboxChange}
            checked={isChecked} // 체크박스 상태
          />
          <CheckHeartCount
            htmlFor={`idFor${id}`}
            $padding='0'
            $fontSize='2rem'
            $borderColor='transparent'
            $color='transparent'
          >
            {formatLikes(likesCount)}
          </CheckHeartCount>
        </CheckboxWrapper>
      </MovieCardActionBox>
    </MovieCardHolder>
  )
}

export default MovieCard

// 스타일 정의
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
