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

  // FormData 내용 출력
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value)
  }

  const response = await client.post(`/review/image/${userId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

const ReviewWriteBox = () => {
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
        return data // 성공적으로 응답을 반환
      } catch (error) {
        throw new Error('이미지 업로드에 실패했습니다.') // 에러 발생 시 throw
      }
    },
    onSuccess: (data) => {
      console.log('Upload successful:', data)
    },
    onError: (error) => {
      console.error('Upload failed:', error.message) // 에러 메시지 출력
    },
  })

  const handleSubmit = () => {
    if (image1 && userId) {
      mutation.mutate({ userId, image: image1 }) // userId와 image를 함께 전송
    } else {
      console.log('이미지를 선택하지 않거나 사용자 ID가 없습니다.')
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
