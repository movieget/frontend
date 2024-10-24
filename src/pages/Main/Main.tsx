import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'

const Main = () => {
  // 메인에서 영화상세정보를 모두 불러와서
  // 상세정보에 state(useNavigate)로 넘겨주는 형태로 데이터 관리
  //

  return (
    <>
      <MainTrailer />
      <MainList />
      <MainFooter />
    </>
  )
}

export default Main
