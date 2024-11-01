import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { kakaoLogin } from './model'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { useEffect } from 'react'
import { useUserStore } from '../../stores/userStore'
import { commonColors } from '../../styles/theme'
import { LineMdAlertLoop } from '../../assets/svg/LineMdAlertLoop'
import { MainBtn } from '../../components/Button/style'
import { ErrorMsg } from './KakaoCallback.styled'
import ContainerLayout from '../../components/Layouts/ContainerLayout'

// 백엔드로부터 인가코드 전달 후 data 받음
const KakaoCallback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { setIsLogin } = useUserStore()
  const code = searchParams.get('code')

  // 인가코드 추출 확인
  // console.log(code)

  // 데이터 요청
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: () => kakaoLogin(code!),
    enabled: !!code,
  })

  // data 상태가 업데이트 될때마다 useEffect 실행
  useEffect(() => {
    if (data) {
      setIsLogin(data)
      navigate('/')
    }
  }, [data])

  // 로딩상태, error 상태메세지 출력
  // * error메세지 출력 후 로그인페이지로 돌아갈수 있게 에러 핸들링
  return (
    <ContainerLayout>
      {isLoading && <SvgSpinner />}
      {isError && (
        <ErrorMsg>
          <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
          <span>{error.message}</span>
          <MainBtn $size='large' onClick={() => navigate('/')}>
            메인으로 돌아가기
          </MainBtn>
        </ErrorMsg>
      )}
    </ContainerLayout>
  )
}
export default KakaoCallback
