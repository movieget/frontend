import styled from 'styled-components'
import prev from '../../assets/svg/prev.svg'
import next from '../../assets/svg/next.svg'

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
  left: 20%;
  top: 55%;
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
  width: 32rem;
  display: -webkit-box;
  margin-top: 4rem;
  overflow: hidden;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text_in_box};
  line-height: 2;
  word-break: keep-all;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
  margin-bottom: 2.4rem;
`

// 상영중 - 개봉예정 묶음
export const StyleMovieContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 12rem 0;
  /* margin-top: 12rem;
  padding-top: 12rem; */
`

// 슬릭 스타일 설정 부분
// 슬라이더 부모 -> 슬라이더의 자식 컴포넌트 = MovieCard
export const StyleMovieListWrapper = styled.div`
  width: 100%;

  div:focus-visible {
    outline: none;
  }

  .slick-slider {
    position: relative;
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
  .slick-list {
    overflow: hidden;
  }

  .slick-arrow {
    // Card가 세로로 정렬되던 부분 수정: 아래 주석 건들지 마세요
    /* display: none !important; */
    /* display: block !important; */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 4.8rem;
    height: 4.8rem;
    font-size: 0;
    background: transparent no-repeat 50% 50%;
    border: none;
    border-radius: 50%;
    &.slick-next {
      right: -4.8rem;
      background-image: url(${next});
    }
    &.slick-prev {
      left: -4.8rem;
      background-image: url(${prev});
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    margin-top: 1rem;
    li {
      width: auto;
      height: auto;
      margin: 0 4px;
      button {
        position: initial;
        display: block;
        width: 8px;
        height: 8px;
        padding: 0;
        font-size: 0;
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
          background-color: #ffffff;
          border-color: #ffffff40;
          transition: all 0.3s;
        }
      }
    }
  }
`
