import { useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getAccessToken, getKakaoToken } from './model'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { useEffect } from 'react'

const KakaoCallback = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const authCode = searchParams.get('code')

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data'],
    queryFn: () => getAccessToken(authCode),
    enabled: !!authCode,
  })

  // 정상작동 토큰 및 에러처리
  // useEffect(() => {
  //   if (isError) {
  //     alert('로그인 요청에 실패하였습니다. 로그인 페이지로 이동합니다.')
  //     navigate('/login')
  //   } else if (data) {
  //     localStorage.setItem(
  //       'KakaoToken',
  //       JSON.stringify({
  //         access_token: data.access_token,
  //         refresh_token: data.refresh_token,
  //       }),
  //     )
  //     navigate('/')
  //   }
  // }, [data, isError])

  useEffect(() => {
    if (data) {
      localStorage.setItem(
        'KakaoToken',
        JSON.stringify({
          refresh_token: data.refresh_token,
        }),
      )
      navigate('/')
    } else if (isError) {
      console.log(isError)
      alert('로그인 요청에 실패하였습니다. 로그인 페이지로 이동합니다.')
      navigate('/login')
    }
  }, [data, isError])

  return (
    <>
      {isLoading && <SvgSpinner />}
      {isError && <div>{error.message}</div>}
    </>
  )
}
export default KakaoCallback
