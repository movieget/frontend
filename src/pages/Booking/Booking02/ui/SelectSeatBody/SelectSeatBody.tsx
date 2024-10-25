import SelectSeat from './ui/SelectSeat'
import GradientLine from '../../../../../assets/svg/GradientLine'
import SeatStatus from './ui/SeatStatus'
import { ISelectSeatBodyProps } from '../../Booking02.types'
import BS2 from '../../Booking02.styled'

const SelectSeatBody = ({ totalSeat, seatId, setSeatId }: ISelectSeatBodyProps) => {
  return (
    <BS2.SelectSeatBodyWrapper>
      <GradientLine />
      <SelectSeat totalSeat={totalSeat} seatId={seatId} setSeatId={setSeatId} />
      <SeatStatus />
    </BS2.SelectSeatBodyWrapper>
  )
}

export default SelectSeatBody
