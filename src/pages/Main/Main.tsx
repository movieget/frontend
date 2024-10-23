import { client } from '../../apis/instances'
import { TrailerContents, TrailerSection, TrailerWrapper } from './style'

const Main = () => {
  const page = 2
  const fetchData = async () => {
    const res = await client.get(`/api/v1/review?page=${page}`)
    const data = res.data
    console.log(data)
  }
  return (
    <>
      <h2>메인페이지</h2>
      <button onClick={fetchData}>fetch!</button>
      <TrailerSection>
        <TrailerContents>
          <TrailerWrapper>
            <h1>IU, 바이 썸머</h1>
            <span>
              안녕? 여름!
              <br /> 안녕, 여름.
            </span>
          </TrailerWrapper>
        </TrailerContents>
      </TrailerSection>
    </>
  )
}

export default Main
