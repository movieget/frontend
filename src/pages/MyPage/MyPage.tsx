import { StyleProfile, StyleProfileImg } from '../../components/Badge/style'
import BasicProfile from '../../assets/svg/profile_user.svg'
import styled from 'styled-components'
import { Link, useSearchParams } from 'react-router-dom'
import UserInfo from './ui/UserInfo/UserInfo'
import BookingHistory from './ui/BookingHistory/BookingHistory'
import PointsHistory from './ui/PointsHistory/PointsHistory'
import MyReviews from './ui/MyReviews/MyReviews'
import MyFavorites from './ui/MyFavorites/MyFavorites'
import Withdrawal from './ui/Withdrawal/Withdrawal'
import PageLayout from '../../components/Layouts/PageLayout'
import { useEffect, useState } from 'react'
import MyMovieStory from './ui/MyMovieStory/MyMovieStory'

interface MenuItem {
  id: number
  uri: string
  menuTitle: string
  menuContents: React.ReactNode
}

const mypageMenu: MenuItem[] = [
  {
    id: 0,
    uri: '?menu=user-info',
    menuTitle: '개인정보수정',
    menuContents: <UserInfo />,
  },
  {
    id: 1,
    uri: '?menu=booking-history',
    menuTitle: '예매/취소 내역',
    menuContents: <BookingHistory />,
  },
  {
    id: 2,
    uri: '?menu=points-history',
    menuTitle: '포인트 이용/적립 내역',
    menuContents: <PointsHistory />,
  },
  {
    id: 3,
    uri: '?menu=my-reviews',
    menuTitle: '나의 리뷰',
    menuContents: <MyReviews />,
  },
  {
    id: 4,
    uri: '?menu=my-favorites',
    menuTitle: '찜 목록',
    menuContents: <MyFavorites />,
  },
  {
    id: 5,
    uri: '?menu=withdrawal',
    menuTitle: '회원탈퇴',
    menuContents: <Withdrawal />,
  },
]

const Mypage = () => {
  const [URLSearchParams, setSearchParams] = useSearchParams()
  const menu = URLSearchParams.get('menu') || 'default'
  const [activeMenu, setActiveMenu] = useState(menu)

  useEffect(() => {
    setActiveMenu(menu)
  }, [menu])

  const handleMenuClick = (item) => {
    setActiveMenu(item.uri.slice(6))
    setSearchParams({ menu: item.uri.slice(6) })
  }

  const getMenuContent = () => {
    const menuItem = mypageMenu.find((item) => item.uri === `?menu=${activeMenu}`)
    return menuItem ? menuItem.menuContents : null
  }

  return (
    <PageLayout>
      <MyPageContainer>
        <MyMenuWrapper>
          <MyMenuBox>
            <MyMenuTitle>마이 메뉴</MyMenuTitle>
            <MyMenuList>
              {mypageMenu.map((item) => (
                <MyMenu
                  key={item.id}
                  active={activeMenu === item.uri.slice(6)} // active 상태 전달
                >
                  <Link to={item.uri} onClick={() => handleMenuClick(item)}>
                    {item.menuTitle}
                  </Link>
                </MyMenu>
              ))}
            </MyMenuList>
          </MyMenuBox>
          <MyInfoBox>
            <MyInfo>
              <StyleProfile $width='10rem' $height='10rem'>
                <StyleProfileImg src={BasicProfile} />
              </StyleProfile>
              <MyName>
                안녕하세요!
                <br />
                <MyNameStrong>김진모님</MyNameStrong>
              </MyName>
            </MyInfo>
            <MyPoint>350,000P</MyPoint>
          </MyInfoBox>
        </MyMenuWrapper>

        <MypageContents>
          <MyMovieStory />
          {menu !== 'default' && <MyContentsBox>{getMenuContent()}</MyContentsBox>}
        </MypageContents>
      </MyPageContainer>
    </PageLayout>
  )
}

export default Mypage

const MyPageContainer = styled.div`
  width: 100%;
`
const MyMenuWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`

const MyMenuBox = styled.div`
  width: 100%;
  max-width: 26.2rem;
  padding: 2rem 2.8rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
const MyMenuTitle = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`
const MyMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const MyMenu = styled.li<{ active?: boolean }>`
  padding: 0 1.2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  background-color: ${({ active }) =>
    active ? '#3B3B3B' : 'transparent'}; // active 상태에 따라 배경색 변경
  border-radius: 0.4rem;
`

// 나의 정보
const MyInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5.2rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
const MyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const MyName = styled.h2`
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 4.4rem;
`
const MyNameStrong = styled.strong`
  font-weight: 800;
`
const MyPoint = styled.div`
  font-size: 4.8rem;
`

const MypageContents = styled.div`
  width: 100%;
  padding: 5.8rem 8rem;
  margin-top: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`

const MyContentsBox = styled.div`
  margin-top: 5.6rem;
`
