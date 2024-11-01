import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageLayout from '../Layouts/PageLayout'

const Footer = () => {
  return (
    <StyleFooter>
      <PageLayout>
        <FooterContents>
          <FooterLeft>
            <LogoBox>
              <FooterLogo>MovieGet</FooterLogo>
              <FooterCopyright>2024 Movies Inc.</FooterCopyright>
            </LogoBox>
            <CompanyInfoList>
              <CompanyInfo>
                서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS 1544-0070
                대표이메일 m.dreamcenter@partner.megabox.co.kr
              </CompanyInfo>
              <CompanyInfo>
                대표자명 홍정인 · 개인정보보호책임자 강병철 · 사업자등록번호 211-86-59478 ·
                통신판매업신고번호 2023-서울성동-0177
              </CompanyInfo>
              <CompanyInfo>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</CompanyInfo>
            </CompanyInfoList>
          </FooterLeft>
          <FooterRight>
            <CompanyPageLink>
              <CompanyPageTitle>About Us</CompanyPageTitle>
              <CompanyPageList>
                <CompanyPage>
                  <Link to='/'>회사소개</Link>
                </CompanyPage>
                <CompanyPage>
                  <Link to='/'>이용약관</Link>
                </CompanyPage>
                <CompanyPage>
                  <Link to='/'>위치기반서비스 이용약관</Link>
                </CompanyPage>
                <CompanyPage>
                  <Link to='/'>개인정보처리방침</Link>
                </CompanyPage>
              </CompanyPageList>
            </CompanyPageLink>

            <CompanyPageLink>
              <CompanyPageTitle>For Users</CompanyPageTitle>
              <CompanyPageList>
                <CompanyPage>
                  <Link to='/'>회원가입</Link>
                </CompanyPage>
                <CompanyPage>
                  <Link to='/'>영화관 찾기</Link>
                </CompanyPage>
                <CompanyPage>
                  <Link to='/'>FAQ</Link>
                </CompanyPage>
              </CompanyPageList>
            </CompanyPageLink>
          </FooterRight>
        </FooterContents>
      </PageLayout>
    </StyleFooter>
  )
}

export default Footer

const StyleFooter = styled.footer`
  padding: 4.4rem 0;
  background-color: #0a0a0a;
  border-top: 1px solid #3f3f3f;
`
const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
`
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const LogoBox = styled.div``
const FooterLogo = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
`
const FooterCopyright = styled.p`
  margin-top: 1.2rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: #cecece;
`
const CompanyInfoList = styled.ul``
const CompanyInfo = styled.li`
  font-size: 1.4rem;
  line-height: 1.5;
`

const FooterRight = styled.div`
  display: flex;
  gap: 12rem;
`
const CompanyPageLink = styled.div``
const CompanyPageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`
const CompanyPageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 4.8rem;
`
const CompanyPage = styled.li`
  font-size: 1.6rem;
`
