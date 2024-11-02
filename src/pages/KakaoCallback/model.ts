import { client } from '../../apis/instances'

// 백엔드에서 토큰 및 유저 정보 받아오는 함수
export const kakaoLogin = async (code: string) => {
  try {
    // 인수로 auth code를 params로 전달
    const response = await client.get(`/user/login/kakao?code=${code}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // 전역 상태를 호출하고 이 함수 내부에 넣지 않는 이유: 이 함수는 API 호출 함수이기 때문에

    // response.data에 객체의 형태로 값 저장 되어 반환
    return response.data
    // 호출에 실패할경우 상태에 값을 전달하지 못하므로 error
  } catch (error) {
    console.error('Failed to login:', error)
    throw new Error('로그인 요청에 실패했습니다.')
  }
}

// 카카오 Auth에서 기본적으로 토큰까지 받아오는 방법
// export const getKakaoToken = async (code: string) => {
//   try {
//     const response = await kakao.get('/token', {
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//       params: {
//         grant_type: 'authorization_code',
//         client_id: KAKAO_API_KEY,
//         redirect_uri: 'http://localhost:5173/kakao/callback',
//         code: code,
//       },
//     })
//     const data = await response.data
//     return data
//   } catch (err) {
//     alert('로그인 요청에 실패하였습니다. 로그인 페이지로 이동합니다.')
//     navigate('/login')
//     throw new Error('로그인요청에 실패했습니다')
//   }
// }
