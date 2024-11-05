import React, { useRef } from 'react'
import {
  DeletePreviewImg,
  ImgInpBox,
  InputFile,
  InputFileLabel,
  PreviewImg,
  PreviewImgBox,
} from './style'

// props로 File | null 타입의 image와 setImage를 받음
interface ImageUploadProps {
  // image: string | null // 문제: string | null 타입은 data URL 형식만 지원
  image: File | null // 수정: File 객체를 사용하여 업로드 용이
  // setImage: (image: string | null) => void // 문제: string | null 타입으로 설정
  setImage: (image: File | null) => void // 수정: File 객체를 사용하여 업로드 용이
}

const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // const reader = new FileReader() // 문제: FileReader를 사용하여 data URL 형식으로 변환
      // reader.onloadend = () => {
      //   setImage(reader.result as string) // 문제: setImage에 data URL을 전달
      // }
      // reader.readAsDataURL(file)

      // 수정: FileReader를 사용하지 않고 File 객체를 직접 설정
      setImage(file) // setImage에 File 객체를 직접 전달
    }
  }

  const resetImage = () => {
    setImage(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  // 수정: image가 File 객체일 경우 미리보기 URL 생성
  const imagePreviewUrl = image ? URL.createObjectURL(image) : null

  return (
    <ImgInpBox>
      {imagePreviewUrl && ( // 수정: 미리보기 URL이 있는 경우에만 미리보기 이미지 표시
        <PreviewImgBox>
          <PreviewImg src={imagePreviewUrl} alt='첨부한 이미지 미리보기' />
          <DeletePreviewImg onClick={resetImage}>삭제</DeletePreviewImg>
        </PreviewImgBox>
      )}
      <InputFile
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={inputRef}
        id='file01'
      />
      <InputFileLabel htmlFor='file01'>파일첨부</InputFileLabel>
    </ImgInpBox>
  )
}

export default ImageUpload
