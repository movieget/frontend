import styled from 'styled-components'

// 트레일러 구역
export const StyleTrailerSection = styled.section`
  // 트레일러 전체구역
  height: 100rem;
  background-color: black;
`

export const StyleTrailerWrapper = styled.div`
  // 트레일러 영상 + 텍스트 묶는 구역

  // 양옆 그라데이션
  &::before {
    content: '';
    width: 100%;
    height: 100rem;
    // 부모요소 기준
    position: absolute;
    left: 0;
    top: 9.2rem;
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

export const StyleTrailer = styled.iframe`
  // 트레일러 영상
  height: 100rem;
`

export const StyleTrailerText = styled.div`
  // 트레일러 텍스트
  // 부모요소 기준
  position: absolute;
  left: 52rem;
  top: 60rem;
  z-index: 3;
`
export const StyleTrailerTitle = styled.div`
  // 트레일러 영화제목
  font-weight: 700;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text_in_box};
  line-height: 1.45;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  pointer-events: none;
`

// -webkit 관련 속성: 레거시... -> 사용이유: 줄거리가 길때 말줄임표를 표현하는데 있어 가장 자연스럽게 표현되는 속성
export const StyleTrailerOverview = styled.span`
  // 트레일러 영화 줄거리
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 4rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text_in_box};
  line-height: 2;
  text-overflow: ellipsis;
  pointer-events: none;
`

// Top10영역들 전체
export const StyleMovieCardWrapper = styled.div`
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  color: #fff;
`
// 타이틀과 컨텐츠간 간격
export const StyleMovieTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 8rem;
`

// 상영중 - 개봉예정 묶음
export const StyleMovieContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12rem;
  padding-top: 12rem;
`

// 슬릭 스타일 설정 부분
// 슬라이더 부모 -> 슬라이더의 자식 컴포넌트 = MovieCard
export const StyleMovieListWrapper = styled.div`
  width: 100%;
  height: 28rem;

  div:focus-visible {
    outline: none;
  }

  .slick-track {
    display: flex;
    gap: 3rem;
    width: 100%;

    &::before,
    &::after {
      display: none;
    }
  }
  .slick-arrow {
    display: block !important;
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
