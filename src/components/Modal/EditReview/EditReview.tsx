import styled from 'styled-components'
import useRating from '../../../hooks/useRating'
import { Input, InputBox, Textarea, TextareaBox } from '../../Input/style'
import StarRating from '../../StarRating/StarRating'
import ImageUpload from '../../Input/ImageUpload/ImageUpload'
import { useState, useEffect } from 'react'

interface Review {
  reviewTitle: string
  reviewText: string
  reviewImg: string
  rating: number
}

interface EditReviewProps {
  review: Review
}

const EditReview = ({ review }: EditReviewProps) => {
  const [title, setTitle] = useState(review.reviewTitle)
  const [text, setText] = useState(review.reviewText)
  const [image, setImage] = useState<string | null>(review.reviewImg)
  const { rating: userRating, handleRatingChange: handleRatingChange } = useRating()

  // review가 변경되면 상태 업데이트
  useEffect(() => {
    setTitle(review.reviewTitle)
    setText(review.reviewText)
    setImage(review.reviewImg)
  }, [review])

  return (
    <EditReviewBox>
      <InputBox $width='100%'>
        <Input
          type='text'
          placeholder='리뷰 타이틀'
          value={title}
          onChange={(e) => setTitle(e.target.value)} // 제목 수정
        />
      </InputBox>
      <TextareaBox $width='100%'>
        <Textarea
          placeholder='리뷰 텍스트'
          value={text}
          onChange={(e) => setText(e.target.value)} // 텍스트 수정
        />
      </TextareaBox>
      <ReviewActionBox>
        <StarRating rating={userRating} onRatingChange={handleRatingChange} userId='user1' />
        <ImageUpload
          image={image}
          setImage={setImage} // 이미지 수정
        />
      </ReviewActionBox>
    </EditReviewBox>
  )
}

export default EditReview

const EditReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
const ReviewActionBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
