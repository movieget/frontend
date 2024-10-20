import styled from 'styled-components'
import { StyledWrapper } from '../../../Booking01/ui/SelectDateCarousel/SelectDateCarousel.style'
import SelectSeat from './ui/SelectSeat'
import GradientLine from '../../../../../assets/svg/GradientLine'
import SeatStatus from './ui/SeatStatus'

const SelectSeatBody = () => {
  return (
    <BodyWrapper>
      <GradientLine />
      <SelectSeat />
      <SeatStatus />
    </BodyWrapper>
  )
}

export default SelectSeatBody

const BodyWrapper = styled(StyledWrapper)`
  height: 100%;
  padding: 40px 0;
`
