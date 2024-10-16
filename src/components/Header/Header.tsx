import { Link } from 'react-router-dom'
import { GNB, Nav, StyledHeader, Title } from './style'

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Link to='/' aria-label='메인 페이지로 이동'>
          <Title>MovieGet</Title>
        </Link>
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
        </GNB>
      </Nav>
    </StyledHeader>
  )
}

export default Header
