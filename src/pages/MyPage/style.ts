import styled from 'styled-components'

//style.ts

// 공통 타이틀
export const ContentsBigTitle = styled.h4`
  font-size: 2.4rem;
  font-weight: 600;
`
export const ContentsTitle = styled.p`
  width: 18rem;
  font-size: 1.8rem;
  font-weight: 600;
`

export const MovieListBox = styled.ul`
  display: flex;
  flex-direction: column;
`
export const MovieList = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4.8rem;
  padding-top: 2.5rem;
  margin-top: 2.4rem;
  border-top: 1px solid #292929;

  &:first-child {
    padding-top: 0;
    margin-top: 0;
    border-top: none;
  }
`

export const PointTitleBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  height: 7.2rem;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
export const PointTitle = styled.li`
  width: 7rem;
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
`

export const PointTextBox = styled.ul``
export const PointTextLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  min-height: 6.4rem;
  height: auto;
  padding: 1.2rem 0;
  border-bottom: 1px solid #474747;

  &:last-child {
    border-bottom: none;
  }
`
export const PointText = styled.span`
  display: inline-block;
  width: 7rem;
  text-align: center;
`
