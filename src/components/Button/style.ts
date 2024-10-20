import styled from 'styled-components'
import KakaoLogo from '../../assets/svg/kakao_logo.svg'
import NaverLogo from '../../assets/svg/naver_logo.svg'

//button styles
interface IfBtnHeight {
  $size?: 'large' | 'medium' | 'small'
  $disabled?: boolean
}
export const BasicBtn = styled.button<IfBtnHeight>`
  min-width: ${({ $size }) =>
    $size === 'large' ? '12.4rem' : $size === 'medium' ? '10rem' : '6rem'};
  height: ${({ $size }) => ($size === 'large' ? '4rem' : $size === 'medium' ? '3.2rem' : '2.4rem')};
  padding: 0 1.2rem;
  font-size: ${({ $size }) =>
    $size === 'large' ? '1.6rem' : $size === 'medium' ? '1.4rem' : '1.2rem'};
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#353535')};
  border: 1px solid;
  border-color: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#3f3f3f')};
  border-radius: 4px;
  color: ${({ $disabled }) => ($disabled ? '#797979' : '#FDFDFD')};
  cursor: ${({ $disabled }) => ($disabled ? 'initial' : 'pointer')};
`
export const MainBtn = styled.button<IfBtnHeight>`
  min-width: ${({ $size }) =>
    $size === 'large' ? '12.4rem' : $size === 'medium' ? '10rem' : '6rem'};
  height: ${({ $size }) => ($size === 'large' ? '4rem' : $size === 'medium' ? '3.2rem' : '2.4rem')};
  padding: 0 1.2rem;
  font-size: ${({ $size }) =>
    $size === 'large' ? '1.6rem' : $size === 'medium' ? '1.4rem' : '1.2rem'};
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $disabled }) =>
    $disabled ? '#4B4B4B' : 'linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb)'};
  border: 1px solid;
  border-color: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#9d7ce5')};
  border-radius: 4px;
  color: ${({ $disabled }) => ($disabled ? '#797979' : '#FDFDFD')};
  cursor: ${({ $disabled }) => ($disabled ? 'initial' : 'pointer')};
`

// 소셜 로그인 버튼
interface IfSocialBtn {
  $social?: 'kakao' | 'naver'
}
export const SocialBtn = styled.button<IfSocialBtn>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 40rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${({ $social }) =>
    $social === 'kakao' ? '#fee500' : $social === 'naver' ? '#03c75a' : '#6321F2'};
  border: none;
  border-radius: 0.8rem;
  color: ${({ $social }) => ($social === 'kakao' ? '#000' : $social === 'naver' ? '#fff' : '#fff')};
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    background: no-repeat 50% 50% / 2.4rem;
    background-image: ${({ $social }) =>
      $social === 'kakao'
        ? `url(${KakaoLogo})`
        : $social === 'naver'
          ? `url(${NaverLogo})`
          : 'none'};
  }
`

// 아이콘 버튼

interface IconBtnProps {
  width?: string
  height?: string
}
export const IconBtn = styled.button<IconBtnProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '2.4rem'};
  height: ${(props) => props.width || '2.4rem'};
  padding: 0;
  background-color: #292929;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
`
export const IconBtnImg = styled.img`
  width: ${(props) => props.width || '2.4rem'};
  height: ${(props) => props.width || '2.4rem'};
  object-fit: cover;
`
