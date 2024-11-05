import styled from 'styled-components'
import AdImage from '/img/advertise.png'
import NaverMapIcon from '/svg/naver_location.svg'
import EasyBooking from '/svg/coupons.svg'
import { NavLink } from 'react-router-dom'
import { MainBtn } from '../../../components/Button/style'

const MainFooter = () => {
  return (
    <StyleFooterSection>
      <StyleFooterWrapper>
        <FooterItem
          title='가까운 영화관 찾기'
          subTitle='현재 위치에서 가장 가까운 영화관을 찾아보세요'
          buttonName='영화관 찾기'
          iconSrc={NaverMapIcon}
          linkTo='/cinema'
        />
        <FooterItem
          title='간편 예매'
          subTitle='다양한 영화들을 간편하게 예매해보세요'
          buttonName='예매하기'
          iconSrc={EasyBooking}
          linkTo='/booking'
        />
        <FooterItem backgroundImg={AdImage} />
      </StyleFooterWrapper>
    </StyleFooterSection>
  )
}

export default MainFooter

interface IFooterItemProps {
  title?: string
  subTitle?: string
  buttonName?: string
  iconSrc?: string
  backgroundImg?: string
  linkTo?: string
}

// main 하단 전체
const StyleFooterSection = styled.section`
  height: 70rem;
  margin-top: 10rem;
`

// 하단 컨텐츠 묶음
const StyleFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`

// 하단 내부내용 컨테이너
const StyleFooterItemContainer = styled.div<{ backgroundImg?: string }>`
  height: 44rem;
  width: 41rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-left: 4rem;
  background-color: ${({ backgroundImg }) => (backgroundImg ? 'transparent' : '#181818')};
  background-image: ${({ backgroundImg }) => (backgroundImg ? `url(${backgroundImg})` : 'none')};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  word-break: keep-all;
`

// 아이콘
const Icon = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
`

// 컨텐츠 타이틀
const Title = styled.div`
  color: #fff;
  font-size: 3.6rem;
  margin-bottom: 1rem;
`

// 컨텐츠 내용
const SubTitle = styled.div`
  font-size: 1.6rem;
`

// 컨텐츠 텍스트 묶음
const StyleFooterTextWrapper = styled.div`
  margin-bottom: 8rem;
`

const FooterItem = ({
  title,
  subTitle,
  iconSrc,
  buttonName,
  backgroundImg,
  linkTo,
}: IFooterItemProps) => {
  // const Content = linkTo ? NavLink : 'div'
  return (
    <StyleFooterItemContainer backgroundImg={backgroundImg}>
      {iconSrc && <Icon src={iconSrc} alt={`${title} icon`} />}
      <StyleFooterTextWrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </StyleFooterTextWrapper>
      {!backgroundImg && linkTo && (
        <NavLink to={linkTo}>
          <MainBtn $size='large'>{buttonName}</MainBtn>
        </NavLink>
      )}
    </StyleFooterItemContainer>
  )
}
