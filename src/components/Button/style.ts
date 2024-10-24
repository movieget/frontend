import styled from 'styled-components'
import KakaoLogo from '../../assets/svg/kakao_logo.svg'
import NaverLogo from '../../assets/svg/naver_logo.svg'
import GoogleLogo from '../../assets/svg/google_g_logo.svg'
import GithubLogo from '../../assets/svg/github_logo.svg'
import AddIconPlus from '../../assets/svg/add_icon_btn_plus.svg'

//button styles
interface IfBtnHeight {
  $size?: 'large' | 'medium' | 'small'
  $disabled?: boolean
  $isSelected?: boolean
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
  background: ${({ $disabled, $isSelected, theme }) => {
    if ($disabled) {
      return theme.colors.bg_btn_disabled
    }
    if ($isSelected) {
      return theme.colors.bg_btn_gradient_purple
    }
    return theme.colors.bg_btn_normal
  }};
  border: 1px solid;
  border-color: ${({ $disabled, $isSelected, theme }) => {
    if ($disabled) {
      return theme.colors.border_disabled
    }
    if ($isSelected) {
      return theme.colors.border_purple
    }
    return theme.colors.border_normal
  }};
  border-radius: 4px;
  color: ${({ $disabled, theme }) => ($disabled ? theme.colors.text_disabled : theme.colors.text)};
  cursor: ${({ $disabled }) => ($disabled ? 'initial' : 'pointer')};

  &:hover {
    background: ${({ $isSelected, theme }) => {
      if ($isSelected) {
        return theme.colors.bg_btn_purple
      }
      return theme.colors.border_normal
    }};
    border-color: ${({ $isSelected, theme }) => {
      if ($isSelected) {
        return theme.colors.border_purple
      }
      return theme.colors.border_wrapper
    }};
  }
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
export const IssueBtn = styled.button<IfBtnHeight>`
  min-width: ${({ $size }) =>
    $size === 'large' ? '12.4rem' : $size === 'medium' ? '10rem' : '6rem'};
  height: ${({ $size }) => ($size === 'large' ? '4rem' : $size === 'medium' ? '3.2rem' : '2.4rem')};
  padding: 0 1.2rem;
  font-size: ${({ $size }) =>
    $size === 'large' ? '1.6rem' : $size === 'medium' ? '1.4rem' : '1.2rem'};
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#F22421')};
  border: 1px solid;
  border-color: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#F29594')};
  border-radius: 4px;
  color: ${({ $disabled }) => ($disabled ? '#797979' : '#FDFDFD')};
  cursor: ${({ $disabled }) => ($disabled ? 'initial' : 'pointer')};
`
export const AddIconBtn = styled.button<IfBtnHeight>`
  height: 4rem;
  padding: 0 1rem 0 4.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $disabled }) =>
    $disabled ? '#4B4B4B' : 'linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb)'};
  border: 1px solid;
  border-color: ${({ $disabled }) => ($disabled ? '#4B4B4B' : '#9d7ce5')};
  border-radius: 1.2rem;
  color: ${({ $disabled }) => ($disabled ? '#797979' : '#FDFDFD')};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 3.4rem;
    height: 4rem;
    background: url(${AddIconPlus}) no-repeat 50% 50% / 1.4rem;
    border-right: 1px solid rgba(245, 245, 245, 0.2);
  }
`

// 소셜 로그인 버튼
interface IfSocialBtn {
  $social?: 'kakao' | 'naver' | 'google' | 'github'
}
export const SocialBtn = styled.button<IfSocialBtn>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  position: relative; /* 버튼을 relative로 설정 */
  padding-left: 3rem; /* 아이콘과 텍스트 간격 확보 */
  width: 40rem;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${({ $social }) =>
    $social === 'kakao'
      ? '#fee500'
      : $social === 'naver'
        ? '#03c75a'
        : $social === 'google'
          ? '#FFFFFF'
          : $social === 'github'
            ? '#FFFFFF'
            : '#6321F2'};
  border: none;
  border-radius: 0.8rem;
  color: ${({ $social }) =>
    $social === 'kakao'
      ? '#000'
      : $social === 'naver'
        ? '#fff'
        : $social === 'google'
          ? '#000'
          : $social === 'github'
            ? '#000'
            : '#fff'};

  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    position: absolute; /* 아이콘을 절대 위치로 설정 */
    left: 1.2rem; /* 버튼의 왼쪽 끝에 위치 */
    background: no-repeat 50% 50% / 2rem;
    background-image: ${({ $social }) =>
      $social === 'kakao'
        ? `url(${KakaoLogo})`
        : $social === 'naver'
          ? `url(${NaverLogo})`
          : $social === 'google'
            ? `url(${GoogleLogo})`
            : $social === 'github'
              ? `url(${GithubLogo})`
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
  min-width: 4.4rem;
  width: ${(props) => props.width || '4.4rem'};
  height: ${(props) => props.width || '4rem'};
  padding: 0;
  background-color: #292929;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 1.2rem;
  overflow: hidden;
  cursor: pointer;
`
export const IconBtnImg = styled.img`
  width: ${(props) => props.width || '2.4rem'};
  height: ${(props) => props.width || '2.4rem'};
  object-fit: cover;
`

export const MainIconBtn = styled.button<IconBtnProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  width: ${(props) => props.width || '6rem'};
  height: ${(props) => props.width || '4rem'};
  padding: 0;
  background: linear-gradient(to bottom, #6d3adb, #6422f2, #6d3adb);
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 1.2rem;
  overflow: hidden;
  cursor: pointer;
`
