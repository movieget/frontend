import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
import { BookingWrapper } from './Booking.style'
import Booking01 from './Booking01/Booking01'

const Booking = () => {
  return (
    <CenterPageLayout>
      <BookingWrapper>
        <Booking01 />
      </BookingWrapper>
    </CenterPageLayout>
  )
}

export default Booking
