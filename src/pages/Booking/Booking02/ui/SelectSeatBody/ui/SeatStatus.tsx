import SeatUnchecked from '/svg/seat_unchecked.svg'
import SeatChecked from '/svg/seat_checked.svg'
import SeatDisabled from '/svg/seat_disabled.svg'
import BS2 from '../../../Booking02.styled'

const SeatStatus = () => {
  return (
    <BS2.SeatStatusContainer>
      <BS2.SeatStatusWrapper>
        <img src={SeatUnchecked} alt='선택가능좌석 아이콘' />
        <h2>선택 가능 좌석</h2>
      </BS2.SeatStatusWrapper>
      <BS2.SeatStatusWrapper>
        <img src={SeatDisabled} alt='선택가능좌석 아이콘' />
        <h2>선택 불가 좌석</h2>
      </BS2.SeatStatusWrapper>
      <BS2.SeatStatusWrapper>
        <img src={SeatChecked} alt='선택가능좌석 아이콘' />
        <h2>선택한 좌석</h2>
      </BS2.SeatStatusWrapper>
    </BS2.SeatStatusContainer>
  )
}

export default SeatStatus
