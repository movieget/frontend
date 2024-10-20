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
