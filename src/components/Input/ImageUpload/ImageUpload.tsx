import React, { useRef } from 'react'
import styled from 'styled-components'
import {
  DeletePreviewImg,
  ImgInpBox,
  InputFile,
  InputFileLabel,
  PreviewImg,
  PreviewImgBox,
} from './style'

interface ImageUploadProps {
  image: string | null
  setImage: (image: string | null) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ image, setImage }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const resetImage = () => {
    setImage(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <ImgInpBox>
      {image && (
        <PreviewImgBox>
          <PreviewImg src={image} alt='첨부한 이미지 미리보기' />
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
