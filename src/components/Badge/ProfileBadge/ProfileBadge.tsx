import styled from 'styled-components'
import BasicProfile from '../../../assets/svg/profile_user.svg'

interface ProfileBadgeProps {
  src?: string // 선택적 문자열
  width?: string // 선택적 문자열
  height?: string // 선택적 문자열
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({ src, width, height }) => {
  return (
    <StyleProfile $width={width} $height={height}>
      <StyleProfileImg
        src={src || BasicProfile} // src가 없으면 기본 이미지 사용
        onError={(e) => {
          e.currentTarget.src = BasicProfile // 이미지 로드 실패 시 기본 이미지로 설정
        }}
        alt='Profile'
      />
    </StyleProfile>
  )
}

export default ProfileBadge

interface StyleProfileSize {
  $width?: string
  $height?: string
}

// Profile 스타일
export const StyleProfile = styled.span<StyleProfileSize>`
  display: inline-block;
  width: ${({ $width }) => $width || '2rem'};
  height: ${({ $height }) => $height || '2rem'};
  background-color: #292929;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 50%;
  background: no-repeat center / 100%;
  overflow: hidden;
`

export const StyleProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
