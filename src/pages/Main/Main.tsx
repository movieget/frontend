import { useEffect, useState } from 'react'
import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'

const Main = () => {
  // 메인에서 영화상세정보를 모두 불러와서
  // 상세정보에 state(useNavigate)로 넘겨주는 형태로 데이터 관리

  const [token, setToken] = useState(null)

  useEffect(() => {
    const tokenString = localStorage.getItem('UserState')
    if (tokenString) {
      // 토큰값이 있으면 유저API를 호출하여 유저정보 받아오기
      // 좋아요 상태 불러와 페이지에 반영
      // API 문서 확인하여 어떤 엔드포인트로 좋아요 확인할수 있는지 확인할것
      const parsedToken = JSON.parse(tokenString)
      setToken(parsedToken)
    }
    // 토큰값이 없을경우 영화 list API만 받아와서 화면 출력
  }, [])

  return (
    <>
      <MainTrailer />
      <MainList /* isPlayingMovies={isPlayingMovie} notPlayingMovies={notPlayingMovie} */ />
      <MainFooter />
    </>
  )
}

export default Main
