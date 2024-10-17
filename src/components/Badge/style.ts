import styled from 'styled-components'
import AllIcon from '../../assets/svg/all.svg'
import Age12Icon from '../../assets/svg/12.svg'
import Age15Icon from '../../assets/svg/15.svg'
import Age18Icon from '../../assets/svg/18.svg'

// commons badge
interface IfBadgeColor {
  color?: 'gray' | 'orange'
  playing?: 'playing' | 'notPlaying' | 'none'
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
  height: 2rem;
  padding: 0 0.8rem;
  font-size: 1rem;
  background-color: ${(props) => (props.color === 'orange' ? '#F45917' : '#353535')};
  border: 1px solid;
  border-color: ${(props) => (props.color === 'orange' ? '#FF8B59' : '#3F3F3F')};
  border-radius: 0.4rem;
  color: #fdfdfd;

  &::before {
    content: ${(props) =>
      props.playing === 'playing' || props.playing === 'notPlaying' ? '""' : 'none'};
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.5rem;
    background-color: ${(props) =>
      props.playing === 'playing'
        ? '#2CE003'
        : props.playing === 'notPlaying'
          ? '#F22421'
          : 'transparent'};
    border-radius: 50%;
  }
`

// age badge
interface IfStyleAge {
  age: 'all' | '12' | '15' | '18'
}

export const StyleAge = styled.span<IfStyleAge>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  background: no-repeat center / 100%;
  background-image: ${(props) =>
    props.age === 'all'
      ? `url(${AllIcon})`
      : props.age === '12'
        ? `url(${Age12Icon})`
        : props.age === '15'
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
