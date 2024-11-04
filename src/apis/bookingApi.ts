import { client } from './instances'
import { IPaymentData } from '../pages/TossCheckout/type'
import axios from 'axios'

// 공통 에러 처리 함수
export const handleApiError = (err: unknown) => {
  // 'any'를 'unknown'으로 변경
  if (axios.isAxiosError(err)) {
    // Axios 에러인지 확인하는 조건 추가
    const { response } = err
    if (response) {
      const { status } = response
      switch (status) {
        case 400:
          throw new Error('잘못된 요청입니다. 요청 내용을 확인하세요.')
        case 401:
        case 403:
          throw new Error('로그인 후 이용가능해요.')
        case 404:
          throw new Error('해당 날짜에 상영되고 있는 영화정보가 없어요.')
        case 500:
          throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도하세요.')
        default:
          throw new Error(response.data?.error || '알 수 없는 오류가 발생했습니다.')
      }
    } else if (err.request) {
      throw new Error('서버와 연결할 수 없습니다. 인터넷 연결을 확인하세요.')
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
      // 오류 메시지 처리 개선
      throw new Error((err as any).message)
    } else {
      throw new Error('요청 중 오류가 발생했습니다.')
    }
  } else {
    throw new Error('알 수 없는 오류가 발생했습니다.') // Axios가 아닌 다른 에러에 대한 기본 메시지 추가
  }
}

// 영화 데이터 가져오기
export const fetchMovieData = async (date: string, userId: number) => {
  const formattedDate = date.slice(0, 10)
  try {
    const res = await client.get(
      `/books/options?screening_date=${formattedDate}&user_id=${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = res.data
    if (!data.movies || data.movies.length === 0) {
      throw new Error('해당 날짜에 상영되고 있는 영화정보가 없어요.')
    }
    return data
  } catch (err: any) {
    handleApiError(err)
  }
}

// 영화 데이터 저장하기
export const postMovieData = async (bookData: IPaymentData) => {
  try {
    const res = await client.post(`/api/v1/books/tosspay`, bookData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err: any) {
    handleApiError(err)
  }
}

// 좌석 데이터 가져오기
export const getSeatData = async (screenId: number) => {
  try {
    const res = await client.get(`/books/${screenId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err: any) {
    handleApiError(err)
  }
}

export const getUserPoint = async (userId: string | undefined) => {
  try {
    const res = await client.get(`/books/points/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(res.data)
    const data = res.data
    return data
  } catch (err: any) {
    handleApiError(err)
  }
}

// export const postUsePoint = async ()
