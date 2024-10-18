import { StyleProfile, StyleProfileImg } from '../../components/Badge/style'
import BasicProfile from '../../assets/svg/profile_user.svg'
import styled from 'styled-components'
import PageContainer from '../../components/Layouts/PageLayout'

const Mypage = () => {
  return (
    <PageContainer>
      <MyPageContainer>
        <MyMenuWrapper>
          <MyMenuBox>
            <MyMenuTitle>마이 메뉴</MyMenuTitle>
            <MyMenuList>
              <MyMenu>개인정보수정</MyMenu>
              <MyMenu>예매/취소 내역</MyMenu>
              <MyMenu>포인트 이용/적립 내역</MyMenu>
              <MyMenu>나의 리뷰</MyMenu>
              <MyMenu>찜 목록</MyMenu>
              <MyMenu>회원탈퇴</MyMenu>
            </MyMenuList>
          </MyMenuBox>
        </MyMenuWrapper>
        <div>
          <StyleProfile>
            <StyleProfileImg src={BasicProfile} />
          </StyleProfile>
        </div>
        <div>
          <div>나의 무비스토리</div>
          <div>컨텐츠</div>
        </div>
      </MyPageContainer>
    </PageContainer>
  )
}

export default Mypage

const MyPageContainer = styled.div`
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: red; */
`
const MyMenuWrapper = styled.div``
const MyMenuBox = styled.div``
const MyMenuTitle = styled.h3``
const MyMenuList = styled.ul``
const MyMenu = styled.li``
