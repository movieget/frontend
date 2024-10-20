import styled from 'styled-components'
import { MovieList, MovieListBox } from '../../../style'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BasicBtn, IssueBtn } from '../../../../../components/Button/style'
import { useState } from 'react'

interface Review {
  id: number
  poster: string
  title: string
  age: string
  createdDate: string
  reviewType: string
  rating: number
  rewardPoints: number
}

const dummyData = [
  {
    id: 0,
    poster: '',
    title: '크라벤',
    age: '18',
    createdDate: '2024년 10월 20일',
    reviewType: '포토 리뷰',
    rating: 5,
    rewardPoints: 100,
  },
  {
    id: 1,
    poster: '',
    title: '다크나이트',
    age: '12',
    createdDate: '2024년 10월 20일',
    reviewType: '글 리뷰',
    rating: 4,
    rewardPoints: 50,
  },
]

const MyReviewList = () => {
  const [reviewList, setReviewList] = useState<Review[]>(dummyData)

  return (
    <MovieListBox>
      {reviewList?.map((movie) => {
        return (
          <MovieList key={movie.id}>
            <MovieInfoCard
              $posterImage=''
              $title={movie.title}
              $age={movie.age}
              $createdDate={movie.createdDate}
              $reviewType={movie.reviewType}
              $rating={movie.rating}
              $rewardPoints={movie.rewardPoints}
            />
            <BtnBox>
              <BasicBtn $size='large'>수정하기</BasicBtn>
              <IssueBtn $size='large'>삭제하기</IssueBtn>
            </BtnBox>
          </MovieList>
        )
      })}
    </MovieListBox>
  )
}

export default MyReviewList

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`
