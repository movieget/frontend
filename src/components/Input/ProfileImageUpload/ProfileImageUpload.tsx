import { useRef, useEffect, useState } from 'react'
import {
  ProfileAreaImgInpBox,
  ProfileImgInpBox,
  ProfileInputFile,
  ProfileInputFileLabel,
  ProfilePreviewImg,
  ProfilePreviewImgBox,
} from './style'
import { auth } from '../../../apis/instances'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface ProfileImageUploadProps {
  image: File | null
  setImage: (image: File | null) => void
}

const uploadUserProfileImg = async (profileImg: File | null) => {
  try {
    const res = await auth.patch(
      `/user/me`,
      {
        image_url: profileImg,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    const data = res.data
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

const ProfileImageUpload = ({ image, setImage }: ProfileImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const queryClient = useQueryClient()
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)

  const { mutate } = useMutation({
    mutationKey: ['userProfileImg'],
    mutationFn: (file: File | null) => uploadUserProfileImg(file),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['userInfoData', 'userNickName', 'userProfileImg'],
      })
    },
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
      mutate(file)
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
