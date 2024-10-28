import { useEffect, useState } from 'react'
import MainFooter from './ui/MainFooter'
import MainList from './ui/MainList'
import MainTrailer from './ui/MainTrailer'
import { client } from '../../apis/instances'

const Main = () => {
  // 메인에서 영화상세정보를 모두 불러와서
  // 상세정보에 state(useNavigate)로 넘겨주는 형태로 데이터 관리

  const [token, setToken] = useState(null)

  const fetchData = async () => {
    const res = await client.get('/api/users')
    const data = res.data
    console.log(data)
  }

  useEffect(() => {
    const tokenString = localStorage.getItem('KakaoToken')
    if (tokenString) {
      const parsedToken = JSON.parse(tokenString)
      console.log('Parsed token:', parsedToken)
      setToken(parsedToken)
    }
  }, [])

  console.log('token:', token)

  return (
    <>
      <MainTrailer />
      <MainList />
      <MainFooter />
    </>
  )
}

export default Main
