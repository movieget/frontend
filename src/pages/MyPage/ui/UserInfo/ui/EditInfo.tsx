import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, InputBox } from '../../../../../components/Input/style'
import { ContentsBigTitle, ContentsTitle } from '../../../style'
import { MainBtn } from '../../../../../components/Button/style'
import ProfileImageUpload from '../../../../../components/Input/ProfileImageUpload/ProfileImageUpload'

const EditInfo = () => {
  const [image2, setImage2] = useState<string | null>(null)

  return (
    <>
      <EditWrapper>
        <EditProfileBox>
          <ProfileImageUpload image={image2} setImage={setImage2} />

          <UserNickName>닉네임</UserNickName>
        </EditProfileBox>
      </EditWrapper>
      <EditWrapper>
        <ContentsBigTitle>닉네임 변경</ContentsBigTitle>
        <EditNickNameHolder>
          <ContentsTitle>닉네임</ContentsTitle>
          <InputBox>
            <Input type='text' width='30rem' />
            <MainBtn $size='large'>닉네임 변경</MainBtn>
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
