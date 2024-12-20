import { http, HttpResponse } from 'msw'
import review_page1 from './review_page1.json'
import review_page2 from './review_page2.json'
import review_page3 from './review_page3.json'
import review_page4 from './review_page4.json'
import review_page5 from './review_page5.json'
import review_page6 from './review_page6.json'
import now_playing_movie1 from './now_playing_movie1.json'
import now_playing_movie2 from './now_playing_movie2.json'
import now_playing_movie3 from './now_playing_movie3.json'
import upcoming_movie1 from './upcoming_movie1.json'
import upcoming_movie2 from './upcoming_movie2.json'
import upcoming_movie3 from './upcoming_movie3.json'
import booking_info from './booking_info.json'
import login_user from './login_user.json'

const REVIEWS_PER_PAGE = 10

const allReviews = [
  ...review_page1,
  ...review_page2,
  ...review_page3,
  ...review_page4,
  ...review_page5,
  ...review_page6,
]

const MOVIES_PER_PAGE = 10

const nowPlayingMovie = [...now_playing_movie1, ...now_playing_movie2, ...now_playing_movie3]
const upcomingMovie = [...upcoming_movie1, ...upcoming_movie2, ...upcoming_movie3]

// const loginUsers = login_user

export const handlers = [
  http.get('/api/v1/review', ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')

    const startIndex = (page - 1) * REVIEWS_PER_PAGE
    const endIndex = startIndex + REVIEWS_PER_PAGE
    const paginatedReviews = allReviews.slice(startIndex, endIndex)

    return HttpResponse.json({
      reviews: paginatedReviews,
      totalReviews: allReviews.length,
      currentPage: page,
      totalPages: Math.ceil(allReviews.length / REVIEWS_PER_PAGE),
    })
  }),

  http.get('/api/v1/now-playing-movie', ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')

    const startIndex = (page - 1) * MOVIES_PER_PAGE
    const endIndex = startIndex + MOVIES_PER_PAGE
    const paginatedMovies = nowPlayingMovie.slice(startIndex, endIndex)

    return HttpResponse.json({
      movies: paginatedMovies,
      totalMovies: nowPlayingMovie.length,
      currentPage: page,
      totalPages: Math.ceil(nowPlayingMovie.length / MOVIES_PER_PAGE),
    })
  }),

  http.get('/api/v1/upcoming-movie', ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')

    const startIndex = (page - 1) * MOVIES_PER_PAGE
    const endIndex = startIndex + MOVIES_PER_PAGE
    const paginatedMovies = upcomingMovie.slice(startIndex, endIndex)

    return HttpResponse.json({
      movies: paginatedMovies,
      totalMovies: upcomingMovie.length,
      currentPage: page,
      totalPages: Math.ceil(upcomingMovie.length / MOVIES_PER_PAGE),
    })
  }),

  http.get('/api/v1/books/options', ({ request }) => {
    const url = new URL(request.url)
    const date = url.searchParams.get('screening_date')

    // 날짜 매개변수가 없으면 400 오류 응답 반환
    if (!date) {
      return HttpResponse.json({ error: 'Date parameter is required' }, { status: 400 })
    }

    // 주어진 날짜에 해당하는 상영 정보 필터링
    const filteredData = booking_info.find((info) => info.date === date)

    // 해당 날짜의 데이터가 없으면 404 오류 응답 반환
    if (!filteredData) {
      return HttpResponse.json(
        { error: '해당 날짜는 상영하고있는 영화정보가 없어요.' },
        { status: 404 },
      )
    }

    // 해당 날짜의 데이터를 그대로 반환
    return HttpResponse.json(filteredData)
  }),

  // 로그인 응답
  // http.get('/api/v1/user/login/kakao', ({ request }) => {
  //   const url = new URL(request.url)
  //   const code = url.searchParams.get('code')

  //   if (!code) {
  //     return HttpResponse.json({ error: 'detail' }, { status: 400 })
  //   }

  //   // 가상 응답으로 토큰과 사용자 정보를 생성
  //   return HttpResponse.json(
  //     {
  //       access_token: 'mockAccessTokenATtokenUpcoming',
  //       refresh_token: 'mockRefreshTokenRTtokenUpcoming',
  //       user_id: loginUsers[0].user_id, // 예시 사용자 ID
  //       profile_image: loginUsers[0].profile_image, // 예시 프로필 이미지
  //       age: loginUsers[0].age, // 예시 연령 정보
  //     },
  //     {
  //       headers: {
  //         'Set-Cookie': 'refresh_token=mockRefreshToken; HttpOnly',
  //       },
  //       status: 200,
  //     },
  //   )
  // }),

  http.post('/api/v1/books/tosspay', ({ request }) => {
    const res = request.body

    return HttpResponse.json({
      res,
      booking_id: res?.booking_id,
      msg: '예약이 완료되었습니다.',
      redirect_url: 'https://tosspayments.com/checkout/some-unique-id',
    })
  }),

  http.get('/api/v1/books', ({ request }) => {
    const url = new URL(request.url)
    const screenId = url.searchParams.get('screen_id')

    // If screen_id parameter is missing, return 400 error
    if (!screenId) {
      return HttpResponse.json({ error: 'screen_id parameter is required' }, { status: 400 })
    }

    // Generate seating data
    const seatingData = generateSeatingData()

    // Create the response object
    const response = {
      screen_id: parseInt(screenId),
      rows: seatingData,
    }

    // Return the data for the given screen_id
    return HttpResponse.json(response)
  }),
]

// Helper function to generate a random seat status
const getRandomStatus = () => {
  const statuses = [true, false, null]
  return statuses[Math.floor(Math.random() * statuses.length)]
}

// Generate the seating data
const generateSeatingData = () => {
  const rows = 'ABCDEFGHI'.split('')
  const nullRow = rows[Math.floor(Math.random() * rows.length)]

  return rows.map((rowId) => ({
    id: rowId,
    seat: Array.from({ length: 14 }, (_, index) => ({
      id: (index + 1).toString(),
      status: rowId === nullRow ? null : getRandomStatus(),
    })),
  }))
}
