import React, { useRef, useState } from 'react'
import useRating from '../../../hooks/useRating'
import { Input, InputBox, Textarea, TextareaBox } from '../../../components/Input/style'
import StarRating from '../../../components/StarRating/StarRating'
import ImageUpload from '../../../components/Input/ImageUpload/ImageUpload'
import { AddIconBtn } from '../../../components/Button/style'
import styled from 'styled-components'
import { client } from '../../../apis/instances'
import { useUserStore } from '../../../stores/userStore'
import { useMutation } from '@tanstack/react-query'

interface UploadImageParams {
  userId: number | null
  image: File | null
}

const uploadImage = async ({ userId, image }: UploadImageParams) => {
  const formData = new FormData()
  if (image) {
    formData.append('image_file', image) // 이미지 파일 추가
  }

  const response = await client.post(`/review/image/${userId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

const ReviewWriteBox = ({ movieId }) => {
  const user = useUserStore((state) => state.userData)
  const userId = user ? user.id : null

  const [image1, setImage1] = useState<File | null>(null)
  const { rating: userRating1, handleRatingChange: handleRatingChange1 } = useRating()
  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const mutation = useMutation({
    mutationFn: async ({ userId, image }: UploadImageParams) => {
      try {
        const data = await uploadImage({ userId, image })
        return data
      } catch (error) {
        throw new Error('이미지 업로드에 실패했습니다.')
      }
    },
    onSuccess: (data) => {
      console.log('Upload successful:', data)
    },
    onError: (error) => {
      console.error('Upload failed:', error.message)
    },
  })

  const handleSubmit = async () => {
    if (userId) {
      const title = titleRef.current?.value || ''
      const contents = textRef.current?.value || ''
      const rating = userRating1

      const formatDate = (date: Date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 1을 더해줌
        const day = String(date.getDate()).padStart(2, '0') // 하루를 두 자리로 포맷팅

        return `${year}-${month}-${day}` // "YYYY-MM-DD" 형식으로 반환
      }

      const reviewPayload = {
        user_id: userId,
        title,
        contents,
        rating,
        review_image_url: image1 ? URL.createObjectURL(image1) : '', // 이미지 URL
        registration_date: formatDate(new Date()),
      }

      try {
        // 이미지 업로드
        if (image1) {
          await mutation.mutateAsync({ userId, image: image1 })
        }

        // 리뷰 데이터 전송 (무비 ID 포함)
        const response = await client.post(`/review/${movieId}`, reviewPayload, {
          headers: {
            'Content-Type': 'application/json', // JSON 데이터로 전송
          },
        })
        console.log('리뷰 업로드 성공:', response.data)
      } catch (error) {
        console.error('리뷰 업로드 실패:', error)
      }
    } else {
      console.log('사용자 ID가 없습니다.')
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
          <AddIconBtn $size='large' onClick={handleSubmit}>
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

const WriteBox = styled.form`
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

const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
`
