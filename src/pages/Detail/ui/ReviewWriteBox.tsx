import React, { useState } from 'react'
import useRating from '../../../hooks/useRating'
import { Input, InputBox, Textarea, TextareaBox } from '../../../components/Input/style'
import StarRating from '../../../components/StarRating/StarRating'
import ImageUpload from '../../../components/Input/ImageUpload/ImageUpload'
import { AddIconBtn } from '../../../components/Button/style'
import styled from 'styled-components'

const ReviewWriteBox = () => {
  const [image1, setImage1] = useState<string | null>(null)
  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()

  return (
    <MovieReviewForm>
      <WriteBox>
        <InputBox $width='100%'>
          <Input type='text' placeholder='타이틀을 입력하세요.' />
        </InputBox>
        <TextareaBox>
          <Textarea placeholder='텍스트를 입력하세요.' />
        </TextareaBox>
      </WriteBox>

      <ReviewInputWrapper>
        <StarRating rating={userRating1} onRatingChange={handleRatingChange1} userId='user1' />
        <ActionBtnBox>
          <ImageUpload image={image1} setImage={setImage1} />
          <AddIconBtn $size='large'>작성하기</AddIconBtn>
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
