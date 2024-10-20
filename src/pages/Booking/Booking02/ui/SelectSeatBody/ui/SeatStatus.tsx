import SeatUnchecked from '../../../../../../assets/svg/seat_unchecked.svg'
import SeatChecked from '../../../../../../assets/svg/seat_checked.svg'
import SeatDisabled from '../../../../../../assets/svg/seat_disabled.svg'
import styled from 'styled-components'

const SeatStatus = () => {
  return (
    <Container>
      <Wrapper>
        <img src={SeatUnchecked} alt='선택가능좌석 아이콘' />
        <h2>선택 가능 좌석</h2>
      </Wrapper>
      <Wrapper>
        <img src={SeatDisabled} alt='선택가능좌석 아이콘' />
        <h2>선택 불가 좌석</h2>
      </Wrapper>
      <Wrapper>
        <img src={SeatChecked} alt='선택가능좌석 아이콘' />
        <h2>선택한 좌석</h2>
      </Wrapper>
    </Container>
  )
}

export default SeatStatus

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`

const Wrapper = styled(Container)`
  height: 1.8rem;
  font-size: 1.8rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  img {
    height: 1.8rem;
  }

  h2 {
    text-align: center;
    word-break: keep-all;
  }
`
