import Tabs from '../../../../components/Tab/Tab'
import EarnPoint from './ui/EarnPoint'
import UsePoint from './ui/usePoint'

const PointsHistory = () => {
  return (
    <Tabs
      tabs={['포인트 이용 내역', '포인트 적립 내역']}
      contents={[<UsePoint />, <EarnPoint />]}
      isSelect={true}
    />
  )
}

export default PointsHistory
