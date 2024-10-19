import styled from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`

export const TabButtonBox = styled.div`
  display: flex;
  gap: 1.2rem;
`

export const TabButton = styled.button<{ $isActive: boolean }>`
  min-width: 12.4rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 600;
  background: ${({ $isActive }) =>
    $isActive ? 'linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb)' : '#353535'};
  border: 1px solid;
  border-color: ${({ $isActive }) => ($isActive ? '#9D7CE5' : '#353535')};
  border-radius: 1.2rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb);
  }
`

export const TabContentsBox = styled.div`
  width: 100%;
  padding: 2.4rem 4rem;
  border: 1px solid #474747;
  border-radius: 4px;
`
