import { http, HttpResponse } from 'msw'
import review_page1 from './review_page1.json'
import review_page2 from './review_page2.json'
import review_page3 from './review_page3.json'
import review_page4 from './review_page4.json'
import review_page5 from './review_page5.json'
import review_page6 from './review_page6.json'
import booking_info from './booking_info.json'

const REVIEWS_PER_PAGE = 10

const allReviews = [
  ...review_page1,
  ...review_page2,
  ...review_page3,
  ...review_page4,
  ...review_page5,
  ...review_page6,
]

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

  http.get('/api/v1/book/screens', ({ request }) => {
    const url = new URL(request.url)
    const date = url.searchParams.get('date')

    // 날짜 매개변수가 없으면 400 오류 응답 반환
    if (!date) {
      return HttpResponse.json({ error: 'Date parameter is required' }, { status: 400 })
    }

    // 주어진 날짜에 해당하는 상영 정보 필터링
    const filteredData = booking_info.find((info) => info.date === date)

    // 해당 날짜의 데이터가 없으면 404 오류 응답 반환
    if (!filteredData) {
      return HttpResponse.json(
        { error: 'No screenings found for the provided date' },
        { status: 404 },
      )
    }

    // 해당 날짜의 데이터를 그대로 반환
    return HttpResponse.json(filteredData)
  }),
]
