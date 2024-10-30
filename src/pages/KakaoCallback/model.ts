import { client } from '../../apis/instances'
import { useUserStore } from '../../stores/userStore'

//   카카오 Auth에서 기본적으로 토큰까지 받아오는 방법
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
//     console.log(data)
//     console.log(code)
//     return data
//   } catch (err) {
//     alert('로그인 요청에 실패하였습니다. 로그인 페이지로 이동합니다.')
//     navigate('/login')
//     throw new Error('로그인요청에 실패했습니다')
//   }
// }

// 백엔드에서 토큰 및 유저 정보 받아오는 함수
export const getAccessToken = async () => {
  try {
    // 인수로 auth code를 params로 전달
    const response = await client.get(`/api/v1/user/login/kakao`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // response.data에 객체의 형태로 값 저장 되어 반환
    // 전역 상태값에 넣지 않는 이유 : 이 함수는 API 호출 함수이기 때문에
    // 호출에 실패할경우 상태에 값을 전달하지 못하므로 error
    // const { access_token, user_id, profile_image, refresh_token } = response.data
    console.log('response data:', response.data)
    return response.data
  } catch (err: any) {
    // 상태 코드에 따른 분기 처리
    if (err.response) {
      const { status } = err.response
      switch (status) {
        case 400:
          throw new Error('잘못된 요청입니다. 요청 내용을 확인하세요.')
        case 401:
          throw new Error('로그인 후 이용가능해요.')
        case 403:
          throw new Error('로그인 후 이용가능해요.')
        case 404:
          throw new Error('일치하는 유저정보가 없습니다.')
        case 500:
          throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.')
        default:
          throw new Error(err.response.data?.error || '알 수 없는 오류가 발생했습니다.')
      }
    } else if (err.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      throw new Error('서버와 연결할 수 없습니다. 인터넷 연결을 확인하세요.')
    } else {
      // 오류를 발생시킨 요청 설정 중 발생한 오류
      throw new Error('요청 중 오류가 발생했습니다.')
    }
  }
}

// 유저인증및 유저정보 요청
// export const getUser = async (token: string) => {
//   const { userId, setUser } = useUserStore()
//   try {
//     const response = await client.get('api/v1/user/me', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },

//       // cookie:
//       // refresh_token=eyJhbGci...;
//       // HttpOnly;
//       // Secure;
//       // SameSite=Lax;
//       // Max-Age=300
//     })
//     return
//   } catch (error) {
//     console.error('Failed to login:', error)
//     throw new Error('사용자 정보 요청에 실패했습니다. 다시 로그인해주세요.')
//   }
// }
