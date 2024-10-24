import styled from 'styled-components'

// 트레일러 구역
export const StyleTrailerSection = styled.section`
  // 트레일러 전체구역
  height: 78rem;
  position: relative;
  background-color: black;
`

export const StyleTrailerContents = styled.div`
  // 트레일러 컨텐츠 표시구역 설정
  // 너비와 높이를 지정하지 않으면 컨텐츠 크기만큼 조정됨
  width: 128rem;
  height: 100%;
  // 부모요소보다 위에 위치
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StyleTrailer = styled.iframe`
  height: 78rem;
`

export const StyleTrailerWrapper = styled.div`
  // 트레일러 영상 + 텍스트 묶는 구역

  // 양옆 그라데이션
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    // 부모요소 기준
    position: absolute;
    left: 0;
    top: 0;
    // 외곽 연하게 조정 필요
    background-image: linear-gradient(
      to right,
      #000 0%,
      rgba(0, 0, 0, 0.05) 25%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.05) 75%,
      #000 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`
export const StyleTrailerText = styled.div`
  // 트레일러 텍스트
  h1 {
    position: absolute;
    top: 44rem;
    font-weight: 700;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.text_in_box};
    line-height: 1.45rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    z-index: 2;
    pointer-events: none;
  }

  span {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 1rem;
    position: absolute;
    top: 48rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text_in_box};
    line-height: 2.8rem;
    text-overflow: ellipsis;
    z-index: 3;
    pointer-events: none;
  }
`
// 2. (1뒤에 2가 따라 붙어야 함)
// 상영중 top10/개봉예정 top10 슬라이드형태
// 영화리스트 포스터 내부 : 공통-연령/영화제목/좋아요/영화정보 버튼
// 상영중 - 평점/예매하기 버튼추가

// 상영중

// 상영예정

// 영화 카드 컴포넌트

export const StyleMovieCardWrapper = styled.div<{ isPlaying: boolean }>`
  display: flex;

  width: 128rem;
  height: 33.4rem;
  position: relative;
  background: #333;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
`

export const StyleMovieCard = styled.div`
  width: 22.4rem;
  height: 33.4rem;
  background-color: palevioletred;
`

export const StyleMovieTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

export const StyleLikeCount = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
`

export const StyleButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
