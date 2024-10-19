import React from 'react'
import styled from 'styled-components'
import {
  Input,
  InputBox,
  ProfileAreaImgInpBox,
  ProfileImgInpBox,
  ProfileInputFile,
  ProfileInputFileLabel,
  ProfilePreviewImg,
  ProfilePreviewImgBox,
} from '../../../../../components/Input/style'
import useImagePreview from '../../../../../hooks/useImagePreview'
import { ContentsBigTitle, ContentsTitle } from '../../../style'
import { MainBtn } from '../../../../../components/Button/style'

const EditInfo = () => {
  const { image: image, handleImageChange: handleImageChange } = useImagePreview()

  return (
    <>
      <EditBox>
        <EditProfileBox>
          <ProfileImgInpBox>
            <ProfileAreaImgInpBox>
              <ProfileInputFile
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                id='file02'
                ref={(input) => input && (input.value = '')}
              />
              <ProfileInputFileLabel htmlFor='file02'>파일첨부</ProfileInputFileLabel>
              {image && (
                <ProfilePreviewImgBox>
                  <ProfilePreviewImg src={image} alt='첨부한 이미지 미리보기' />
                </ProfilePreviewImgBox>
              )}
            </ProfileAreaImgInpBox>
          </ProfileImgInpBox>
          <UserNickName>닉네임</UserNickName>
        </EditProfileBox>
      </EditBox>
      <EditBox>
        <ContentsBigTitle>닉네임 변경</ContentsBigTitle>
        <EditNickNameHolder>
          <ContentsTitle>닉네임</ContentsTitle>
          <InputBox>
            <Input type='text' width='30rem' />
            <MainBtn $size='large'>닉네임 변경</MainBtn>
          </InputBox>
        </EditNickNameHolder>
      </EditBox>
    </>
  )
}

export default EditInfo

const EditBox = styled.div`
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
