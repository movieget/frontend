import Tabs from '../../../../components/Tab/Tab'
import MyReviewList from './ui/MyReviewList'

const MyReviews = () => {
  return <Tabs tabs={['나의 리뷰']} contents={[<MyReviewList />]} isSelect={true} />
}

export default MyReviews
