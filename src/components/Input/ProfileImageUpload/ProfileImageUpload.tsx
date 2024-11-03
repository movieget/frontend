import { useRef } from 'react'
import {
  ProfileAreaImgInpBox,
  ProfileImgInpBox,
  ProfileInputFile,
  ProfileInputFileLabel,
  ProfilePreviewImg,
  ProfilePreviewImgBox,
} from './style'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { auth } from '../../../apis/instances'

interface ProfileImageUploadProps {
  image: File | null
  setImage: (image: File | null) => void
}

const uploadUserProfileImg = async (profileImg: File | null) => {
  const formData = new FormData()
  console.log('프로필이미지: ', profileImg)
  if (profileImg) {
    formData.append('image_file', profileImg)
  }

  console.log(formData)

  try {
    const res = await auth.patch('/user/me', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // multipart/form-data로 설정
      },
    })
    const data = res.data
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

const ProfileImageUpload = ({ image, setImage }: ProfileImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ['userProfileImg'],
    mutationFn: () => uploadUserProfileImg(image),
    onSuccess: () => {
      queryClient.invalidateQueries(['userInfoData', 'userNickName', 'userProfileImg'])
    },
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
      mutate()
    }
  }

  // image에서 URL 생성
  // const imagePreviewUrl = image ? URL.createObjectURL(image) : null

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
        {image && ( // imagePreviewUrl이 null이 아닐 때만 렌더링
          <ProfilePreviewImgBox>
            <ProfilePreviewImg src={image} alt='첨부한 이미지 미리보기' />
          </ProfilePreviewImgBox>
        )}
      </ProfileAreaImgInpBox>
    </ProfileImgInpBox>
  )
}

export default ProfileImageUpload
