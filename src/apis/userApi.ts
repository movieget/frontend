import { handleApiError } from './bookingApi'
import { auth } from './instances'
import { AxiosError } from 'axios' // 추가: AxiosError 임포트

// 유저 로그인정보
// auth interceptor에서 token을 보내므로 GET요청에서 인수로 넣어줄 필요가 없음
export const fetchUserData = async () => {
  try {
    const res = await auth.get(`/user/me`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err: unknown) {
    // 여기서 에러 처리를 생략
    // 에러는 인터셉터에서 처리됨
    throw err // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
  }
}

// 유저 로그아웃
export const fetchLogout = async (accessToken: string) => {
  try {
    const res = await auth.get('/user/logout/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = res.data
    console.log(data)
  } catch (err: unknown) {
    if (isAxiosError(err)) {
      // 수정: AxiosError인지 확인하는 타입 가드 추가
      handleApiError(err) // AxiosError인 경우에만 처리
    } else {
      // AxiosError가 아닌 경우 별도 처리 (예: 콘솔 로그)
      console.error('Unexpected error:', err) // 수정: 예상치 못한 에러를 로그
      throw err // 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
    }
  }
}

// 유저정보변경 호출 API
// *axios 사용때 body에는 어떻게 넣으면 되는지 확인필요
// 여기도 동일하게 header값......... token은 필요없음
export const fetchUserInfoPatch = async (accessToken: string, nickname: string) => {
  try {
    const response = await auth.patch(
      `/user/me`,
      { nickname: nickname },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log('fetchUserInfoData:', response.data)
    return response.data
  } catch (err: unknown) {
    // 수정: err의 타입을 unknown으로 변경
    throw err // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
  }
}

// AxiosError 확인을 위한 타입 가드 추가
function isAxiosError(error: unknown): error is AxiosError {
  // 수정: AxiosError인지 체크하는 타입 가드
  return (error as AxiosError).isAxiosError !== undefined // 수정: 타입 가드 로직
}
