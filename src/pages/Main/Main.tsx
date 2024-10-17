import { client } from '../../apis/instances'
import { Container } from './style'

const Main = () => {
  const fetchData = async () => {
    const res = await client.get('/api/users')
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
