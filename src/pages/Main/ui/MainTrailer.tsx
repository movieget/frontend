import { useEffect, useState } from 'react'
import {
  StyleTrailer,
  StyleTrailerOverview,
  StyleTrailerSection,
  StyleTrailerText,
  StyleTrailerTitle,
  StyleTrailerWrapper,
} from '../style'
import { IMovieStoreProps } from '../type'
import styled, { keyframes } from 'styled-components'

const MainTrailer = ({ nowData }: IMovieStoreProps) => {
  const [randomTrailer, setRandomTrailer] = useState<string | null>(null)
  const [loading, setLoading] = useState(true) // 로딩상태 true

  useEffect(() => {
    // 랜덤 인덱스 선택
    const randomIndex = Math.floor(Math.random() * nowData?.movies.length)

    //로딩시간을 위한 타이머
    setTimeout(() => {
      // 선택한 트레일러 데이터 설정
      setRandomTrailer(nowData?.movies[randomIndex])
      setLoading(false)
    }, 1000)
  }, [nowData])

  console.log(randomTrailer)
  if (loading) {
    return (
      <StyleTrailerSection>
        <StyleTrailerWrapper>
          <SkeletonTrailer />
          <SkeletonText>
            <SkeletonTitle />
            <SkeletonOverview />
          </SkeletonText>
        </StyleTrailerWrapper>
      </StyleTrailerSection>
    )
  }

  return (
    <StyleTrailerSection>
      <StyleTrailerWrapper>
        {nowData && (
          <StyleTrailer
            width='100%'
            height='auto'
            style={{ aspectRatio: '16 / 9' }}
            // 자동재생및음소거 : '${apiurl}?autoplay=1&mute=1' 맨뒤에 추가
            // 유튜브 정책상 자동재생은 음소거일때만 가능
            // 컨트롤러 숨김 : controls=0
            src={`https://www.youtube-nocookie.com/embed/${randomTrailer?.trailer_url}?&autoplay=1&mute=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></StyleTrailer>
        )}

        <StyleTrailerText>
          <StyleTrailerTitle>{nowData?.movies.title}</StyleTrailerTitle>
          <StyleTrailerOverview>{nowData?.movies.overview}</StyleTrailerOverview>
        </StyleTrailerText>
      </StyleTrailerWrapper>
    </StyleTrailerSection>
  )
}

export default MainTrailer

// Skeleton 애니메이션 추가
const SkeletonAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

// Skeleton 스타일 컴포넌트
const SkeletonTrailer = styled.div`
  height: 100rem;
  background: linear-gradient(90deg, #303030 25%, #6422f230 50%, #303030 75%);
  background-size: 200% 100%;
  animation: ${SkeletonAnimation} 3s infinite;
`

const SkeletonText = styled.div`
  position: absolute;
  left: 20%;
  top: 55%;
  z-index: 3;
`

const SkeletonTitle = styled.div`
  width: 20rem;
  height: 4rem;
  margin-bottom: 1rem;
  background-color: #303030;
  animation: ${SkeletonAnimation} 1.5s infinite;
`

const SkeletonOverview = styled.div`
  width: 32rem;
  height: 4rem;
  background-color: #303030;
  animation: ${SkeletonAnimation} 1.5s infinite;
`
