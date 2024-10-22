import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
import { BookingWrapper } from './Booking.style'
import Booking01 from './Booking01/Booking01'
import Booking02 from './Booking02/Booking02'
import { useSearchParams } from 'react-router-dom'

const Booking = () => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')

  return (
    <CenterPageLayout>
      <BookingWrapper>{page === 'booking02' ? <Booking02 /> : <Booking01 />}</BookingWrapper>
    </CenterPageLayout>
  )
}

export default Booking
