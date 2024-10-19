import { Link } from 'react-router-dom'
import { GNB, HeaderContainer, HeaderLeft, Nav, StyledHeader, Title } from './style'
import { MainBtn } from '../Button/style'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLeft>
          <Link to='/' aria-label='메인 페이지로 이동'>
            <Title>MovieGet</Title>
          </Link>
          <Nav>
            <GNB role='navigation' aria-label='주요 내비게이션'>
              <li>
                <Link to='/' aria-label='메인 페이지로 이동'>
                  메인
                </Link>
              </li>
              <li>
                <Link to='/movie' aria-label='영화 목록 페이지로 이동'>
                  영화
                </Link>
              </li>
              <li>
                <Link to='/cinema' aria-label='영화관 목록 페이지로 이동'>
                  영화관
                </Link>
              </li>
              <li>
                <Link to='/booking' aria-label='간편예매 페이지로 이동'>
                  간편예매
                </Link>
              </li>
              <li>
                <Link to='/common' aria-label='공통UI 페이지로 이동'>
                  공통UI
                </Link>
              </li>
            </GNB>
          </Nav>
        </HeaderLeft>
        <Link to='/login' aria-label='로그인 페이지로 이동'>
          <MainBtn $size='large'>로그인</MainBtn>
        </Link>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
