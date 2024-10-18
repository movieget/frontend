import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
import { BookingWrapper } from './Booking.style'
import SelectBody from './ui/SelectBody/SelectBody'
import SelectDateCarousel from './ui/SelectDateCarousel/SelectDateCarousel'

const Booking = () => {
  return (
    <CenterPageLayout>
      <BookingWrapper>
        <SelectDateCarousel />
        <SelectBody />
      </BookingWrapper>
    </CenterPageLayout>
  )
}

export default Booking
