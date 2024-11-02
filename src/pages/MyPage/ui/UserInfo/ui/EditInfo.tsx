import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { Input, InputBox } from '../../../../../components/Input/style'
import { ContentsBigTitle, ContentsTitle } from '../../../style'
import { MainBtn } from '../../../../../components/Button/style'
import ProfileImageUpload from '../../../../../components/Input/ProfileImageUpload/ProfileImageUpload'
import { useInfoStore, useUserStore } from '../../../../../stores/userStore'

const EditInfo = () => {
  const [image2, setImage2] = useState<string | null>(null)
  const { userInfo, fetchInfo } = useInfoStore()
  const { userData } = useUserStore()

  // const submitHandler = () => {
  //   닉네임, 프로필사진 변경을 위한 API 필요함
  //   유저정보 변경요청 : 닉네임변경 버튼을 눌렀을때 함수호출
  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ['data'],
  //     queryFn: () => 함수(userData?.access_token!),
  //   })
  // }
  // 유저가 정보변경 시도시 effect 실행
  // useEffect(() => {}, [image2])

  //* 프로필이미지는 초기값 유저정보에서 불러온값
  //* set img로 이미지를 수정하면 수정한 이미지로 바뀌어야 하는데.......?
  // 생각해보니 이것도...... 리뷰수정이랑 같은 결.....
  return (
    <>
      <EditWrapper>
        <EditProfileBox>
          <ProfileImageUpload image={image2 || userData?.profile_image_url} setImage={setImage2} />

          <UserNickName>{userInfo?.nickname}님, 반갑습니다</UserNickName>
        </EditProfileBox>
      </EditWrapper>
      <EditWrapper>
        <ContentsBigTitle>닉네임 변경</ContentsBigTitle>
        <EditNickNameHolder>
          <ContentsTitle>닉네임</ContentsTitle>
          <InputBox>
            <Input type='text' width='30rem' placeholder='닉네임을 입력해주세요' />
            <MainBtn $size='large' /* onClick={submitHandler} */>닉네임 변경</MainBtn>
          </InputBox>
        </EditNickNameHolder>
      </EditWrapper>
    </>
  )
}

export default EditInfo

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
