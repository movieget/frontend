import styled from 'styled-components'

import PageLayout from '../../components/Layouts/PageLayout'
import { StyleTitle } from '../../components/Badge/style'
import MovieDetailInfo from './ui/MovieDetailInfo'
import ReviewWriteBox from './ui/ReviewWriteBox'
import UserReviewList from './ui/UserReviewList'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Movie } from '../Movie/Movie'
import NoImageCard from '../../components/NoImageCard/NoImageCard'

const Detail = () => {
  const location = useLocation()
  const [movie] = useState<Movie>(location.state)

  return (
    <DetailPage>
      <BackDropImgBox>
        {movie.backdropImage ? (
          <BackDropImg src={movie.backdropImage} alt={movie.title} />
        ) : (
          <NoImageCard $width='100%' $height='50rem' />
        )}
      </BackDropImgBox>
      <PageLayout>
        <MovieDetailInfo movie={movie} />
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

const BackDropImgBox = styled.span`
  display: block;
  margin: 0 auto;
`
const BackDropImg = styled.img`
  width: 100%;
`

// 리뷰
const MovieReviewWrapper = styled.div`
  margin-top: 10rem;
`
