import styled from 'styled-components'
import AllIcon from '../../assets/svg/all.svg'
import Age12Icon from '../../assets/svg/12.svg'
import Age15Icon from '../../assets/svg/15.svg'
import Age18Icon from '../../assets/svg/18.svg'

// commons badge
interface IfBadgeColor {
  $color?: 'gray' | 'orange' | 'primary'
  $playing?: 'playing' | 'notPlaying' | 'none'
}
export const BadgeBox = styled.div`
  display: flex;
  gap: 0.8rem;
`
export const Badge = styled.span<IfBadgeColor>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.2rem;
  height: 3.2rem;
  padding: 0 1.2rem;
  font-size: 1.4rem;
  background-color: ${({ $color }) => {
    if ($color === 'orange') return '#F45917'
    if ($color === 'primary') return '#733FF1'
    return '#353535'
  }};
  border: 1px solid;
  border-color: ${({ $color }) => {
    if ($color === 'orange') return '#FF8B59'
    if ($color === 'primary') return '#8D70CD'
    return '#3F3F3F' // 기본 색상
  }};
  border-radius: 0.4rem;
  color: #fdfdfd;

  &::before {
    content: ${({ $playing }) =>
      $playing === 'playing' || $playing === 'notPlaying' ? '""' : 'none'};
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.5rem;
    background-color: ${({ $playing }) =>
      $playing === 'playing' ? '#2CE003' : $playing === 'notPlaying' ? '#F22421' : 'transparent'};
    border-radius: 50%;
  }
`

// age badge
interface IfStyleAge {
  $age: 'all' | 12 | 15 | 18
}

export const StyleAge = styled.span<IfStyleAge>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  background: no-repeat center / 100%;
  background-image: ${({ $age }) =>
    $age === 'all'
      ? `url(${AllIcon})`
      : $age === 12
        ? `url(${Age12Icon})`
        : $age === 15
          ? `url(${Age15Icon})`
          : `url(${Age18Icon})`};
`

// title
export const StyleTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-left: 2rem;
  font-size: 3.6rem;
  line-height: 3.4rem;
  color: #fdfdfd;
  &::before {
    content: '';
    width: 0.8rem;
    height: 3.6rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #6321f200;
    background: linear-gradient(180deg, #6321f200 0%, #39138c 100%);
  }
`

interface StyleProfileSize {
  $width?: string
  $height?: string
}
// profile
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
