import Tabs from '../../../../components/Tab/Tab'
import EditInfo from './ui/EditInfo'

const UserInfo = () => {
  return <Tabs tabs={['개인정보수정']} contents={[<EditInfo />]} />
}

export default UserInfo
