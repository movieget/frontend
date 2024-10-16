import styled from 'styled-components'

// badge
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
