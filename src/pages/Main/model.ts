import { client } from '../../apis/instances'

//model.ts
export const fetchMovieData = async (accessToken: string) => {
  try {
    const response = await client.get(`/user/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = response
    console.log(data)
    return
  } catch (err: any) {
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
          throw new Error('해당 유저 정보가 없어요.')
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
