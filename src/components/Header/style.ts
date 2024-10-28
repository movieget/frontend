import styled from 'styled-components'

//header styles
export const StyledHeader = styled.header`
  width: 100%;
  height: 74px;
  font-size: 1.8rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.bg};
`
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`

export const GNB = styled.ul`
  display: flex;
  gap: 3.6rem;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3.6rem;
`

export const HeaderContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`
export const LogoutWrapper = styled.div``
