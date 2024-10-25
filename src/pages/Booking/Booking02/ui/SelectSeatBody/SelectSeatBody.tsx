import styled from 'styled-components'
import { StyledWrapper } from '../../../Booking01/ui/SelectDateCarousel/SelectDateCarousel.style'
import SelectSeat from './ui/SelectSeat'
import GradientLine from '../../../../../assets/svg/GradientLine'
import SeatStatus from './ui/SeatStatus'

const SelectSeatBody = ({ totalSeat, seatId, setSeatId }) => {
  return (
    <BodyWrapper>
      <GradientLine />
      <SelectSeat totalSeat={totalSeat} seatId={seatId} setSeatId={setSeatId} />
      <SeatStatus />
    </BodyWrapper>
  )
}

export default SelectSeatBody

const BodyWrapper = styled(StyledWrapper)`
  width: 100%;
  height: 100%;
  padding: 40px 0;

  svg {
    width: 100%;
    object-fit: cover;
  }
`
