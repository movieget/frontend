import { SocialBtn } from '../../components/Button/style'
import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
import { StyleLoginContainer, StyleLoginTextWrapper, StyleLoginBtnWrapper } from './style'

const Login = () => {
  return (
    <CenterPageLayout>
      <StyleLoginContainer>
        <StyleLoginTextWrapper>
          <h1>MovieGet</h1>
          <div>영화예매를 간편하게</div>
          <div> 시작해보세요</div>
        </StyleLoginTextWrapper>
        <StyleLoginBtnWrapper>
          <SocialBtn $social='kakao'>카카오로 시작하기</SocialBtn>
          <SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>
        </StyleLoginBtnWrapper>
      </StyleLoginContainer>
    </CenterPageLayout>
  )
}

export default Login
