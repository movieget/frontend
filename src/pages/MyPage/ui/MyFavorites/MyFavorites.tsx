import Tabs from '../../../../components/Tab/Tab'
import MyFavoriteList from './ui/MyFavoriteList'

const MyFavorites = () => {
  return <Tabs tabs={['찜 목록']} contents={[<MyFavoriteList />]} isSelect={true} />
}

export default MyFavorites
