import { useRef } from 'react'
import {
  ProfileAreaImgInpBox,
  ProfileImgInpBox,
  ProfileInputFile,
  ProfileInputFileLabel,
  ProfilePreviewImg,
  ProfilePreviewImgBox,
} from './style'

interface ProfileImageUploadProps {
  image: string | null
  setImage: (image: string | null) => void
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ image, setImage }) => {
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
    <ProfileImgInpBox>
      <ProfileAreaImgInpBox>
        <ProfileInputFile
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={inputRef}
          id='file02'
        />
        <ProfileInputFileLabel htmlFor='file02'>파일첨부</ProfileInputFileLabel>
        {image && (
          <ProfilePreviewImgBox>
            <ProfilePreviewImg src={image} alt='첨부한 이미지 미리보기' />
          </ProfilePreviewImgBox>
        )}
      </ProfileAreaImgInpBox>
    </ProfileImgInpBox>
  )
}

export default ProfileImageUpload
