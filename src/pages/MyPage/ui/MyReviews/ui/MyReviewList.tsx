import styled from 'styled-components'
import { BtnBox, MovieList, MovieListBox } from '../../../style'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BasicBtn, IssueBtn } from '../../../../../components/Button/style'
import { useState } from 'react'
import Modal from '../../../../../components/Modal/Modal'
import EditReview from '../../../../../components/Modal/EditReview/EditReview'
import NoImageCard from '../../../../../components/NoImageCard/NoImageCard'

interface Review {
  id: number
  poster: string
  title: string
  age: 'all' | 12 | 15 | 18
  createdDate: string
  reviewType: string
  rating: number
  rewardPoints: number
  reviewImg: string
  reviewTitle: string
  reviewText: string
}

const dummyData: Review[] = [
  {
    id: 0,
    poster: '/img/movie_poster01.jpg',
    title: '크라벤',
    age: 18,
    createdDate: '2024년 10월 20일',
    reviewType: '포토 리뷰',
    rating: 5,
    rewardPoints: 100,
    reviewImg: '/img/detail_actor01.jpg',
    reviewTitle: '리뷰 타이틀asdasd',
    reviewText: '리뷰 텍스트 입니다요',
  },
  {
    id: 1,
    poster: '',
    title: '다크나이트',
    age: 12,
    createdDate: '2024년 10월 20일',
    reviewType: '글 리뷰',
    rating: 4,
    rewardPoints: 50,
    reviewImg: '',
    reviewTitle: '리뷰 타이틀',
    reviewText:
      '리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트',
  },
]

const MyReviewList = () => {
  const [reviewList, setReviewList] = useState<Review[]>(dummyData)
  const [modal, setModal] = useState(false)
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)

  const handleModalButtonClick = () => {
    alert('모달 기능 함수')
  }

  const handleEditButtonClick = (review: Review) => {
    setSelectedReview(review) // 선택된 리뷰 설정
    setModal(true) // 모달 열기
  }

  return (
    <>
      <MovieListBox>
        {reviewList?.map((review) => {
          return (
            <>
              <MovieList key={review.id}>
                <MovieInfoCard
                  $posterImage={review.poster}
                  $title={review.title}
                  $age={review.age}
                  $createdDate={review.createdDate}
                  $reviewType={review.reviewType}
                  $rating={review.rating}
                  $rewardPoints={review.rewardPoints}
                />
                <BtnBox>
                  <BasicBtn $size='large' onClick={() => handleEditButtonClick(review)}>
                    수정하기
                  </BasicBtn>
                  <IssueBtn $size='large'>삭제하기</IssueBtn>
                </BtnBox>
              </MovieList>
              <ReviewContents>
                <ReviewImgBox>
                  {review.reviewImg ? (
                    <ReviewImg src={review.reviewImg} alt={review.reviewTitle} />
                  ) : (
                    <NoImageCard $width='100%' $height='100%' />
                  )}
                </ReviewImgBox>
                <ReviewTextBox>
                  <ReviewTitle>{review.reviewTitle}</ReviewTitle>
                  <ReviewText>{review.reviewText}</ReviewText>
                </ReviewTextBox>
              </ReviewContents>
            </>
          )
        })}
      </MovieListBox>
      {modal && (
        <Modal
          title={'리뷰 수정'}
          content={<EditReview review={selectedReview} />}
          btnText={'수정하기'}
          onClose={() => setModal(false)}
          onBtnClick={handleModalButtonClick}
        />
      )}
    </>
  )
}

export default MyReviewList

const ReviewContents = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  margin-top: 1.2rem;
`
const ReviewImgBox = styled.span`
  display: block;
  width: 10rem;
  min-width: 10rem;
  height: 10rem;
  background-color: #292929;
  border: 1px solid #474747;
  border-radius: 0.8rem;
  overflow: hidden;
`
const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const ReviewTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.2rem;
`
const ReviewTitle = styled.p`
  font-size: 1.8rem;
`
const ReviewText = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
