import styled from 'styled-components'

export const MovieInfoCardWrapper = styled.div`
  display: flex;
  gap: 3.6rem;
`

// 영화 포스터
interface MoviePosterSize {
  $width?: string
  $height?: string
}
export const MoviePosterBox = styled.span<MoviePosterSize>`
  display: block;
  min-width: 14rem;
  width: ${({ $width }) => $width || '14rem'};
  height: ${({ $height }) => $height || 'auto'};
`
export const MoviePoster = styled.img`
  width: 100%;
`

// 영화 상세정보
export const MovieDetailBox = styled.div`
  margin-top: 1.2rem;
  text-align: left;
`

export const MovieTitleBox = styled.p``
export const MovieTitle = styled.span`
  margin-left: 0.8rem;
  font-size: 3.2rem;
  font-weight: 700;
`

export const MovieInfoList = styled.ul``
export const MovieInfo = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  font-size: 1.6rem;
  line-height: 2rem;
`
export const MovieInfoTitle = styled.span`
  font-weight: 800;
`
export const MovieInfoContent = styled.span`
  font-weight: 500;
`
