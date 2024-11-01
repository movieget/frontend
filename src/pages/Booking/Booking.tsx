import styled from 'styled-components'
import CenterPageLayout from '../../components/Layouts/CenterPageLayout'
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

const BookingWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
