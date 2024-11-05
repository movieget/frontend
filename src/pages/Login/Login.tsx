import { useNavigate } from 'react-router-dom'
import { SocialBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { useUserStore } from '../../stores/userStore'
import { KAKAO_API_KEY } from '../../utils/constants'
import { StyleLoginContainer, StyleLoginTextWrapper, StyleLoginBtnWrapper } from './style'
import { useEffect } from 'react'

const Login = () => {
  const userData = useUserStore((state) => state.userData)
  const navigate = useNavigate()

  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=http://localhost:5173/kakao/callback&response_type=code&prompt=login`
  }

  useEffect(() => {
    if (userData) {
      navigate('/mypage')
    }
  }, [userData, navigate])

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
          <SocialBtn $social='naver'>네이버로 시작하기</SocialBtn>
          <SocialBtn $social='google'>구글로 시작하기</SocialBtn>
        </StyleLoginBtnWrapper>
      </StyleLoginContainer>
    </ContainerLayout>
  )
}

export default Login
