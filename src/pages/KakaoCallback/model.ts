//비즈니스로직

import axios from 'axios'
import { kakao } from '../../apis/instances'
import { KAKAO_API_KEY } from '../../utils/constants'

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
//     // alert('로그인 요청에 실패하였습니다. 로그인 페이지로 이동합니다.')
//     // navigate('/login')
//     throw new Error('로그인요청에 실패했습니다')
//   }
// }

// 백엔드에서 토큰 및 유저 정보 받아오는 함수
export const getAccessToken = async (code: string) => {
  try {
    const response = await axios.get('/api/v1/user/login/kakao', {
      params: { code },
    })
    // const { access_token, user_id, profile_image, refresh_token } = response.data

    // console.log('response data:', response.data)
    return response.data
  } catch (error) {
    console.error('Failed to login:', error)
    throw new Error('로그인 요청에 실패했습니다.')
  }
}
