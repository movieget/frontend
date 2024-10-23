import styled from 'styled-components'

import PageLayout from '../../components/Layouts/PageLayout'
import { StyleTitle } from '../../components/Badge/style'
import MovieDetailInfo from './ui/MovieDetailInfo'
import ReviewWriteBox from './ui/ReviewWriteBox'
import UserReviewList from './ui/UserReviewList'

const Detail = () => {
  return (
    <DetailPage>
      <PageLayout>
        <MovieDetailInfo />
        <MovieReviewWrapper>
          <StyleTitle>Review</StyleTitle>
          <ReviewWriteBox />
          <UserReviewList />
        </MovieReviewWrapper>
      </PageLayout>
    </DetailPage>
  )
}

export default Detail

const DetailPage = styled.div``

// 리뷰
const MovieReviewWrapper = styled.div`
  margin-top: 10rem;
`
