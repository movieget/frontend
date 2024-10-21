import styled from 'styled-components'

import ProfileUser from '../../assets/svg/profile_user.svg'
import ProfileSetting from '../../assets/svg/profile_setting.svg'

// input
export const InputBox = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  width: ${(props) => props.width || 'auto'};
`
export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 4rem;
  padding: 0 1.2rem;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 0.4rem;

  &:focus {
    outline: 1px solid;
    outline-color: #6321f2;
    outline-offset: -1px;
  }
`

// textarea
export const TextareaBox = styled.span`
  display: flex;
  gap: 0.8rem;
  width: ${(props) => props.width || '100%'};
`
export const Textarea = styled.textarea`
  width: ${(props) => props.width || '100%'};
  height: 12.4rem;
  padding: 1.2rem;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 0.4rem;
  resize: none;

  &:focus {
    outline: 1px solid;
    outline-color: #6321f2;
    outline-offset: -1px;
  }
`

// input - file - profile
export const ProfileImgInpBox = styled.span`
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.6rem;
    right: -0.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background: url(${ProfileSetting}) no-repeat 50% 50% / 2.4rem;
  }
`
export const ProfileAreaImgInpBox = styled.span`
  display: inline-block;
  width: 7.6rem;
  height: 7.6rem;
  background: #353535 url(${ProfileUser}) no-repeat 50% 50% / 4.8rem;
  border: 1px solid #3f3f3f;
  border-radius: 1.2rem;
  overflow: hidden;
  position: relative;
`
export const ProfileInputFile = styled.input`
  display: none;
`
export const ProfileInputFileLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 0;
  cursor: pointer;
  z-index: 1;
`
export const ProfilePreviewImgBox = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`
export const ProfilePreviewImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: #353535;
  object-fit: cover;
`
