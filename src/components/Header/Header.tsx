import { Link } from 'react-router-dom'
import { GNB, HeaderContainer, HeaderLeft, LogoutWrapper, Nav, StyledHeader, Title } from './style'
import { IconBtn, IconBtnImg, MainBtn } from '../Button/style'
import BasicProfileImg from '../../assets/svg/profile_user.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  // 임시구성 => 상태관리 해야함
  const isAuth = window.localStorage.getItem('KakaoToken')

  const logoutHandler = () => {
    navigate('/')
    window.localStorage.removeItem('KakaoToken')
  }

  const loginHandler = () => {
    navigate('/login')
  }

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
              <li>
                <Link to='/mypage' aria-label='마이페이지 페이지로 이동'>
                  마이페이지
                </Link>
              </li>
            </GNB>
          </Nav>
        </HeaderLeft>
        {isAuth ? (
          <LogoutWrapper>
            <IconBtn>
              <IconBtnImg width='100%' height='100%' src={BasicProfileImg} />
            </IconBtn>
            <MainBtn $size='large' onClick={logoutHandler}>
              로그아웃
            </MainBtn>
          </LogoutWrapper>
        ) : (
          <Link to='/login' aria-label='로그인 페이지로 이동'>
            <MainBtn $size='large' onClick={loginHandler}>
              로그인
            </MainBtn>
          </Link>
        )}
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
