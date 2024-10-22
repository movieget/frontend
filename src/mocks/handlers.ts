import { http, HttpResponse } from 'msw'
import review_page1 from './review_page1.json'
import review_page2 from './review_page2.json'
import review_page3 from './review_page3.json'
import review_page4 from './review_page4.json'
import review_page5 from './review_page5.json'
import review_page6 from './review_page6.json'

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
]
