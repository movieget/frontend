import Tabs from '../../../../components/Tab/Tab'
import EarnPointList from './ui/EarnPointList'
import UsePointList from './ui/UsePointList'

const PointsHistory = () => {
  return (
    <Tabs
      tabs={['포인트 이용 내역', '포인트 적립 내역']}
      contents={[<UsePointList />, <EarnPointList />]}
      isSelect={true}
    />
  )
}

export default PointsHistory
