import axios from 'axios'
import { KAKAO_BASE_URL } from '../utils/constants'
import { useUserStore } from '../stores/userStore'

axios.defaults.withCredentials = true

export const client = axios.create({
  baseURL: 'https://movieget.kprolabs.space/api/v1',
})

export const auth = axios.create({
  baseURL: 'https://movieget.kprolabs.space/api/v1',
})

export const kakao = axios.create({
  baseURL: KAKAO_BASE_URL,
})

// 요청 인터셉터
auth.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem('USER_DATA')
    let accessToken: string | null = null // 초기화
    let userId: string | null = null // user_id 초기화

    if (userData) {
      try {
        const parsedData = JSON.parse(userData)
        accessToken = parsedData.access_token // 엑세스 토큰을 가져옴
        userId = parsedData.user_id // user_id를 가져옴
      } catch (error) {
        console.error('Error parsing USER_DATA from localStorage:', error)
      }
    } else {
      console.warn('No USER_DATA found in localStorage.')
    }

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}` // 엑세스 토큰 헤더 추가
    }

    // 본문(body)에 user_id 추가 (POST 요청 시)
    if (config.method === 'put' || config.method === 'get') {
      config.data = {
        ...config.data,
        user_id: userId, // user_id 추가
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 응답 인터셉터
auth.interceptors.response.use(
  (response) => {
    // 응답 성공 처리
    return response
  },
  async (error) => {
    const originalRequest = error.config // 실패한 요청 정보
    if (error.response) {
      const { status } = error.response

      // 여기서 에러를 처리하고 메시지를 던짐
      switch (status) {
        case 400:
          throw new Error('잘못된 요청입니다. 요청 내용을 확인하세요.')
        case 401:
          console.log('Access token expired, attempting to refresh automatically.')

          // 로컬 스토리지에서 USER_DATA 가져오기
          const userData = localStorage.getItem('USER_DATA')
          let userId: string | null = null // user_id 초기화

          if (userData) {
            try {
              const parsedData = JSON.parse(userData)
              userId = parsedData.user_id // user_id를 가져옴
            } catch (error) {
              console.error('Error parsing USER_DATA from localStorage:', error)
            }
          }

          try {
            // user_id를 본문에 추가
            if (userId) {
              originalRequest.data = {
                ...(originalRequest.data || {}), // 기존 데이터가 있을 경우 유지
                user_id: userId, // user_id 추가
              }
            }
            // 엑세스 토큰을 만료된 상태로 요청을 다시 시도
            const newResponse = await client(originalRequest)

            // 새로운 엑세스 토큰을 로컬 스토리지에 저장
            const newAccessToken = newResponse.data.access_token
            localStorage.setItem('USER_DATA', JSON.stringify(newResponse.data)) // 새로운 엑세스 토큰 및 유저 데이터 저장

            // 원래 요청에 새로운 엑세스 토큰 헤더 추가
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

            // 원래 요청 다시 전송
            return client(originalRequest)
          } catch (refreshError) {
            console.error('Failed to fetch data after refreshing token:', refreshError)
            useUserStore.getState().setLogout() // 실패한 경우 로그아웃 처리
            throw new Error('엑세스 토큰 갱신에 실패했습니다. 다시 로그인해주세요.')
          }

        case 403:
          throw new Error('로그인 후 이용가능해요.')
        case 404:
          throw new Error('해당 정보가 없어요!')
        case 500:
          throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.')
        default:
          throw new Error(error.response.data?.error || '알 수 없는 오류가 발생했습니다.')
      }
    } else if (error.request) {
      // 요청이 이루어졌지만 응답을 받지 못한 경우
      throw new Error('서버와 연결할 수 없습니다. 인터넷 연결을 확인하세요.')
    } else {
      // 오류를 발생시킨 요청 설정 중 발생한 오류
      throw new Error('요청 중 오류가 발생했습니다.')
    }
  },
)
