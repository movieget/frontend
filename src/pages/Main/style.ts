import styled from 'styled-components'

export const TrailerSection = styled.section`
  // 트레일러 전체구역
  height: 78rem;
  position: relative;
  background-color: black;
`

export const TrailerContents = styled.div`
  // 트레일러 컨텐츠 표시구역 설정
  // 너비와 높이를 지정하지 않으면 컨텐츠 크기만큼 조정됨
  width: 128rem;
  height: 100%;
  margin: 0 auto;
  // 부모요소보다 위에 위치
  position: absolute;
  background-color: rebeccapurple;
`

export const TrailerWrapper = styled.div`
  // 트레일러 영상 + 텍스트 묶는 구역
  h1 {
    position: absolute;
    top: 16rem;
    left: 0;
    font-weight: 700;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.text_in_box};
    line-height: 1.45rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
    z-index: 2;
    pointer-events: none;
  }

  span {
    display: -webkit-box;
    overflow: hidden;
    position: absolute;
    top: 24rem;
    left: 0;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text_in_box};
    line-height: 1.45rem;
    text-overflow: ellipsis;
    z-index: 3;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    pointer-events: none;
  }

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
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      #000 100%
    );
    z-index: 2;
  }
`

// 1.
// 메인슬라이드 배너 -> 유튜브 트레일러 영상 => iframe

// 슬라이드 배너 내부 : 영화제목/줄거리

// 2. (1뒤에 2가 따라 붙어야 함)
// 상영중 top10/개봉예정 top10 슬라이드형태
// 영화리스트 포스터 내부 : 공통-연령/영화제목/좋아요/영화정보 버튼
// 상영중 - 평점/예매하기
