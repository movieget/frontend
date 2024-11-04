import { useRef } from 'react'
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
          'Content-Type': 'application/json',
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

  // useMutation을 사용하여 이미지 업로드 설정
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
      // const reader = new FileReader()
      // reader.onloadend = () => {
      setImage(file)
      // mutate(image) // 파일을 mutate 호출에 전달하여 서버에 업로드
      // }
      // reader.readAsDataURL(file)
    }
  }

  // image에서 URL 생성
  const imagePreviewUrl = image ? URL.createObjectURL(image) : null

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
        {imagePreviewUrl && ( // imagePreviewUrl이 null이 아닐 때만 렌더링
          <ProfilePreviewImgBox>
            <ProfilePreviewImg src={imagePreviewUrl} alt='첨부한 이미지 미리보기' />
          </ProfilePreviewImgBox>
        )}
      </ProfileAreaImgInpBox>
    </ProfileImgInpBox>
  )
}

export default ProfileImageUpload
