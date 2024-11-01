import React, { useRef, useState } from 'react'
import useRating from '../../../hooks/useRating'
import { Input, InputBox, Textarea, TextareaBox } from '../../../components/Input/style'
import StarRating from '../../../components/StarRating/StarRating'
import ImageUpload from '../../../components/Input/ImageUpload/ImageUpload'
import { AddIconBtn } from '../../../components/Button/style'
import styled from 'styled-components'

const ReviewWriteBox = () => {
  const [image1, setImage1] = useState<string | null>(null)
  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()
  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const ReviewRefHandler = () => {
    if (titleRef.current && textRef.current) {
      const title = titleRef.current.value
      const text = textRef.current.value
      console.log('Title:', title) // 타이틀 출력
      console.log('Text:', text) // 텍스트 출력
      console.log('Rating:', userRating1) // 평점도 출력
      console.log('Image:', image1) // 이미지 출력 (파일 경로 또는 데이터)
    }
  }

  return (
    <MovieReviewForm>
      <WriteBox>
        <InputBox $width='100%'>
          <Input type='text' placeholder='타이틀을 입력하세요.' ref={titleRef} />
        </InputBox>
        <TextareaBox>
          <Textarea placeholder='텍스트를 입력하세요.' ref={textRef} />
        </TextareaBox>
      </WriteBox>

      <ReviewInputWrapper>
        <StarRating rating={userRating1} onRatingChange={handleRatingChange1} userId='user1' />
        <ActionBtnBox>
          <ImageUpload image={image1} setImage={setImage1} />
          <AddIconBtn $size='large' onClick={ReviewRefHandler}>
            작성하기
          </AddIconBtn>
        </ActionBtnBox>
      </ReviewInputWrapper>
    </MovieReviewForm>
  )
}

export default ReviewWriteBox

const MovieReviewForm = styled.div`
  padding-bottom: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid #3f3f3f;
`
const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const ReviewInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1.2rem;
`
const ActionBtnBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`
