import { handleApiError } from './bookingApi'
import { auth } from './instances'

// *? 241030현재 API CORS에러 500번대 에러뜸 확인필요함
export const fetchUserData = async () => {
  try {
    const response = await auth.get(`/users/me`)
    const data = response
    console.log(data)
    return
  } catch (err: any) {
    // 여기서 에러 처리를 생략
    // 에러는 인터셉터에서 처리됨
    throw err // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
  }
}

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
  } catch (err) {
    handleApiError(err)
  }
}
