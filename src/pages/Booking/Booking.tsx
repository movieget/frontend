import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
import { BookingWrapper } from './Booking.style'
import Booking01 from './Booking01/Booking01'
import Booking02 from './Booking02/Booking02'

const Booking = () => {
  return (
    <CenterPageLayout>
      <BookingWrapper>
        <Booking01 />
        {/* <Booking02 /> */}
      </BookingWrapper>
    </CenterPageLayout>
  )
}

export default Booking
