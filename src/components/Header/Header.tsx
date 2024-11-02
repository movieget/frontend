import { Link } from 'react-router-dom'
import { GNB, HeaderContainer, HeaderLeft, LogoutWrapper, Nav, StyledHeader, Title } from './style'
import { IconBtn, IconBtnImg, MainBtn } from '../Button/style'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../stores/userStore'
import { useEffect } from 'react'
import { fetchLogout } from '../../apis/userApi'

const Header = () => {
  const navigate = useNavigate()
  const { initializeUser, setLogout } = useUserStore()
  const userData = useUserStore((state) => state.userData)

  useEffect(() => {
    initializeUser()
  }, [])

  const handleLogout = () => {
    if (userData) {
      // 로그아웃 함수 추가
      fetchLogout(userData.access_token)
      setLogout()
      navigate('/')
    }
  }

  // const logoutHandler = () => {
  //   clearUser()
  //   setIsLogin(false)
  //   navigate('/')
  //   localStorage.removeItem('TOKEN')
  //   // * user토큰 정보 없애는 delete API요청 보내기
  //   // * 토큰값을 요청에 넣어서 delete요청 하기
  // }

  // 유저정보 확인
  // 리로드 될때 토큰꺼내와서 서버에 로그인요청 보낸후 유저데이터 로드
  // useEffect(() => {
  //   const isAuth = () => {
  //     const Token = window.localStorage.getItem('UserState')
  //     const { data, isLoading, isError, error } = useQuery({
  //       queryKey: ['data'],
  //       queryFn: () => getUser(Token),
  //       enabled: !!Token,
  //     })
  //   }
  // }, [])

  const pageMove = (page: string) => {
    navigate(`/${page}`)
  }

  // useEffect(() => {
  //   try {
  //     const userData = localStorage.getItem('TOKEN')
  //     if (userData) {
  //       const { id, access_token, profile_image_url } = JSON.parse(userData)
  //       setUser(access_token, id, profile_image_url)
  //     }
  //   } catch (err) {
  //     console.error(err)
  //     throw new Error('로그아웃 상태이거나 유저정보를 정상적으로 가져오지 못했습니다.')
  //   }
  // }, [setIsLogin, setUser])

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
        {userData ? (
          <LogoutWrapper>
            <IconBtn>
              <IconBtnImg
                onClick={() => pageMove('mypage')}
                width='150%'
                height='150%'
                src={userData.profile_image_url}
              />
            </IconBtn>
            <MainBtn $size='large' onClick={handleLogout}>
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
