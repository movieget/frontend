import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, InputBox } from '../../../../../components/Input/style'
import { ContentsBigTitle, ContentsTitle } from '../../../style'
import { MainBtn } from '../../../../../components/Button/style'
import { useInfoStore, useUserStore } from '../../../../../stores/userStore'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { auth } from '../../../../../apis/instances'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { commonColors } from '../../../../../styles/theme'
import { LineMdAlertLoop } from '../../../../../assets/svg/LineMdAlertLoop'
import ProfileImageUpload from '../../../../../components/Input/ProfileImageUpload/ProfileImageUpload'

const patchUserNickName = async (nickName: string | undefined) => {
  try {
    const res = await auth.patch(
      `/user/me`,
      {
        nickname: nickName,
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

const EditInfo = () => {
  const [image2, setImage2] = useState<string | null>(null)
  const { userInfo, fetchInfo } = useInfoStore()
  const [nickName, setNickName] = useState<string | undefined>(userInfo?.nickname)
  const { userData } = useUserStore()
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ['userNickName'],
    mutationFn: () => patchUserNickName(nickName),
    onSuccess: () => {
      queryClient.invalidateQueries(['userInfoData', 'userNickName', 'userProfileImg'])
    },
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate()
  }

  return (
    <EditContainer onSubmit={handleSubmit}>
      <EditWrapper>
        <EditProfileBox>
          <ProfileImageUpload image={image2 || userData?.profile_image_url} setImage={setImage2} />

          <UserNickName>{userInfo?.nickname}님, 반갑습니다</UserNickName>
        </EditProfileBox>
      </EditWrapper>
      <EditWrapper>
        {isPending && <SvgSpinner />}
        {isError && (
          <ErrorMsg>
            <LineMdAlertLoop color={commonColors.warning} width={64} height={64} />
            <span>{error.message}</span>
          </ErrorMsg>
        )}
        {(isSuccess || (!isPending && !isError)) && ( // 초기 상태와 성공 상태일 때만 표시
          <>
            <ContentsBigTitle>닉네임 변경</ContentsBigTitle>
            <EditNickNameHolder>
              <ContentsTitle>닉네임</ContentsTitle>
              <InputBox>
                <Input
                  type='text'
                  width='30rem'
                  placeholder={nickName === '' ? '닉네임을 입력해주세요' : nickName}
                  onChange={handleInput}
                  value={nickName}
                />
                <MainBtn $size='large' type='submit'>
                  닉네임 변경
                </MainBtn>
              </InputBox>
            </EditNickNameHolder>
          </>
        )}
      </EditWrapper>
    </EditContainer>
  )
}

export default EditInfo

const EditContainer = styled.form``

const EditWrapper = styled.div`
  padding: 3.2rem 0;
  border-top: 1px solid #494949;

  &:first-child {
    padding-top: 0;
    border-top: none;
  }
  &:last-child {
    padding-bottom: 0;
  }
`
const EditProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`

const EditNickNameHolder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
`
const UserNickName = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
`
