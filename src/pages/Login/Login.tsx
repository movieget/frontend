import { SocialBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { KAKAO_AUTH_URI } from '../../utils/constants'
import { StyleLoginContainer, StyleLoginTextWrapper, StyleLoginBtnWrapper } from './style'

// VITE_KAKAO_AUTH_BASE_URL
// https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}

const Login = () => {
  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URI
  }

  return (
    <ContainerLayout>
      <StyleLoginContainer>
        <StyleLoginTextWrapper>
          <h1>MovieGet</h1>
          <p>
            영화예매를 간편하게 <br />
            시작해보세요
          </p>
        </StyleLoginTextWrapper>
        <StyleLoginBtnWrapper>
          <SocialBtn $social='kakao' onClick={kakaoLoginHandler}>
            카카오로 시작하기
          </SocialBtn>
          <SocialBtn $social='google'>구글로 시작하기</SocialBtn>
          <SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>
        </StyleLoginBtnWrapper>
      </StyleLoginContainer>
    </ContainerLayout>
  )
}

export default Login
