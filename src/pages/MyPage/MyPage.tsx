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

const Mypage = () => {
  const [URLSearchParams] = useSearchParams()
  const menu = URLSearchParams.get('menu') || 'default' // 기본 모드 설정

  return (
    <PageLayout>
      <MyPageContainer>
        <MyMenuWrapper>
          <MyMenuBox>
            <MyMenuTitle>마이 메뉴</MyMenuTitle>
            <MyMenuList>
              <MyMenu>
                <Link to='?menu=user-info'>개인정보수정</Link>
              </MyMenu>
              <MyMenu>
                <Link to='?menu=booking-history'>예매/취소 내역</Link>
              </MyMenu>
              <MyMenu>
                <Link to='?menu=points-history'>포인트 이용/적립 내역</Link>
              </MyMenu>
              <MyMenu>
                <Link to='?menu=my-reviews'>나의 리뷰</Link>
              </MyMenu>
              <MyMenu>
                <Link to='?menu=my-favorites'>찜 목록</Link>
              </MyMenu>
              <MyMenu>
                <Link to='?menu=withdrawal'>회원탈퇴</Link>
              </MyMenu>
            </MyMenuList>
          </MyMenuBox>
          <MyInfoBox>
            <MyInfo>
              <StyleProfile width='10rem' height='10rem'>
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
          <MyMovieStoryBox>
            <MyMovieStoryTitle>나의 무비스토리</MyMovieStoryTitle>
            <MyMovieStoryList>
              <MyMovieStory>
                <ActivityCount>2</ActivityCount>
                <ActivityTitle>예매</ActivityTitle>
              </MyMovieStory>
              <MyMovieStory>
                <ActivityCount>4</ActivityCount>
                <ActivityTitle>본 영화</ActivityTitle>
              </MyMovieStory>
              <MyMovieStory>
                <ActivityCount>2</ActivityCount>
                <ActivityTitle>리뷰 수</ActivityTitle>
              </MyMovieStory>
              <MyMovieStory>
                <ActivityCount>4</ActivityCount>
                <ActivityTitle>찜한 영화</ActivityTitle>
              </MyMovieStory>
            </MyMovieStoryList>
          </MyMovieStoryBox>
          {menu !== 'default' && (
            <MyContentsBox>
              {menu === 'user-info' && <UserInfo />}
              {menu === 'booking-history' && <BookingHistory />}
              {menu === 'points-history' && <PointsHistory />}
              {menu === 'my-reviews' && <MyReviews />}
              {menu === 'my-favorites' && <MyFavorites />}
              {menu === 'withdrawal' && <Withdrawal />}
            </MyContentsBox>
          )}
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

// 마이메뉴
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
const MyMenu = styled.li`
  font-size: 1.4rem;
  line-height: 2.4rem;
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

// 나의 무비스토리
const MypageContents = styled.div`
  width: 100%;
  padding: 5.8rem 8rem;
  margin-top: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
const MyMovieStoryBox = styled.div`
  padding: 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.4rem;
`
const MyMovieStoryTitle = styled.h3`
  margin-bottom: rem;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`
const MyMovieStoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.8rem;
  margin-top: 3.2rem;
`
const MyMovieStory = styled.li`
  text-align: center;
`
const ActivityCount = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
`
const ActivityTitle = styled.p`
  margin-top: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
`

// 마이페이지 컨텐츠
const MyContentsBox = styled.div`
  margin-top: 5.6rem;
`
