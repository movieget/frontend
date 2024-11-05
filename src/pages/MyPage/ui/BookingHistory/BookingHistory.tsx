import Tabs from '../../../../components/Tab/Tab'
import BookingList from './ui/BookingList'
import CancelList from './ui/CancelList'

const BookingHistory = () => {
  return (
    <Tabs
      tabs={['예매내역', '취소내역']}
      contents={[<BookingList />, <CancelList />]}
      isSelect={true}
    />
  )
}

export default BookingHistory
