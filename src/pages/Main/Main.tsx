import { client } from '../../apis/instances'
import { Container } from './style'

const Main = () => {
  const page = 2
  const fetchData = async () => {
    const res = await client.get(`/api/v1/review?page=${page}`)
    const data = res.data
    console.log(data)
  }
  return (
    <>
      <Container>
        <h2>메인페이지</h2>
        <button onClick={fetchData}>fetch!</button>
      </Container>
    </>
  )
}

export default Main
