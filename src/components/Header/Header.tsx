import { Link } from 'react-router-dom'
import { GNB, HeaderContainer, HeaderLeft, LogoutWrapper, Nav, StyledHeader, Title } from './style'
import { IconBtn, IconBtnImg, MainBtn } from '../Button/style'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../stores/userStore'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../pages/KakaoCallback/model'

const Header = () => {
  const navigate = useNavigate()
  const clearUser = useUserStore((state) => state.clearUser)
  const { userId, accessToken, profileImg } = useUserStore()

  // *임시구성 => 상태관리 해야함
  const isAuth = window.localStorage.getItem('UserState')

  // *새로고침하면 렌더링시 userId 못가져옴 => useEffect 사용해서 불러와볼것!
  // useEffect(() => {
  //   // *리로드 될때 토큰꺼내와서 서버에 로그인요청 보낸후 유저데이터 로드
  //   const isAuth = () => {
  //     const Token = window.localStorage.getItem('UserState')
  //     const { data, isLoading, isError, error } = useQuery({
  //       queryKey: ['data'],
  //       queryFn: () => getUser(Token),
  //       enabled: !!Token,
  //     })
  //   }
  // }, [])

  const logoutHandler = () => {
    clearUser()
    window.localStorage.removeItem('UserState')
    navigate('/')
    // *그리고 user토큰 정보 없애는 delete API요청 보내기
  }

  const pageMove = (page: string) => {
    navigate(`/${page}`)
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
              <IconBtnImg
                onClick={() => pageMove('mypage')}
                width='100%'
                height='100%'
                src={profileImg}
              />
            </IconBtn>
            <MainBtn $size='large' onClick={logoutHandler}>
              로그아웃
            </MainBtn>
          </LogoutWrapper>
        ) : (
          <MainBtn $size='large' onClick={() => pageMove('login')}>
            로그인
          </MainBtn>
        )}
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header
