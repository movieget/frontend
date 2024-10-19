import Tabs from '../../../../components/Tab/Tab'
import BookingList from './ui/BookingList'
import CancelList from './ui/CancelList'

const BookingHistory = () => {
  return (
    <div>
      <Tabs tabs={['예매내역', '취소내역']} contents={[<BookingList />, <CancelList />]} />
    </div>
  )
}

export default BookingHistory
