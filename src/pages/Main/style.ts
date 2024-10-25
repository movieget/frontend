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

  // -webkit 관련 속성: 레거시... -> 사용이유: 줄거리가 길때 말줄임표를 표현하는데 있어 가장 자연스럽게 표현되는 속성
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

// Top10영역들 전체
export const StyleMovieCardWrapper = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 0 4rem;
  margin: 0 auto;
  top: 20rem;
  position: relative;
  color: #fff;
  overflow: hidden;
  gap: 1rem;
`
// 타이틀과 컨텐츠간 간격
export const StyleMovieTitle = styled.h3`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 10px;
`

// 상영중 - 개봉예정 묶음
export const StyleMovieContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
// 이미지 박스 -> 적용유무 다시 체크
// export const StyleMovieListImg = styled.image`
//   display: block;
//   position: relative;
//   width: 100%;
//   max-width: 20rem;
// `
