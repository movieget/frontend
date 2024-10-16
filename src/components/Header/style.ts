import styled from 'styled-components'

//header styles
export const StyledHeader = styled.header`
  width: 100%;
  height: 74px;
  font-size: 18px;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg};
  align-items: center;
  padding: 0 20%;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`

export const GNB = styled.ul`
  display: flex;
  gap: 36px;
`
