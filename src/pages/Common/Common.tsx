import styled from 'styled-components'

const Common = () => {
  return (
    <>
      <div className='d'>
        <div className='commons'>공통 CSS</div>
        <p className='p'></p>
        badge
        <BadgeBox>
          <Badge>일반/장르</Badge>
          <Badge color='orange'>러닝타임</Badge>
          <Badge color='orange'>180분</Badge>
          <Badge>길어집니다아아아아아아아아</Badge>
          <Badge playing='playing'>상영중입니다</Badge>
          <Badge playing='notPlaying'>상영예정</Badge>
        </BadgeBox>
      </div>
    </>
  )
}

export default Common

interface IfBadgeColor {
  color?: 'gray' | 'orange'
  playing?: 'playing' | 'notPlaying' | 'none'
}
const BadgeBox = styled.div`
  display: flex;
  gap: 0.8rem;
`
const Badge = styled.span<IfBadgeColor>`
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
