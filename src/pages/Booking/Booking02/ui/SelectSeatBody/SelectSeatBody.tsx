import styled from 'styled-components'
import { StyledWrapper } from '../../../Booking01/ui/SelectDateCarousel/SelectDateCarousel.style'
import SelectSeat from './ui/SelectSeat'
import GradientLine from '../../../../../assets/svg/GradientLine'

const SelectSeatBody = () => {
  return (
    <BodyWrapper>
      <GradientLine />
      <SelectSeat />
    </BodyWrapper>
  )
}

export default SelectSeatBody

const BodyWrapper = styled(StyledWrapper)`
  height: 100%;
  padding: 40px 0;
`
