import styled from 'styled-components'
import { StyleAge } from '../../../../../../components/Badge/style'

interface IResultDummyData {
  reservation: {
    date: string
    time: string
    seats: string[]
    location: string
    theater: string
    customer: {
      adult: number
      teenager: number
    }
  }
  movie: {
    title: string
    age: number
    backdrop: string
  }
}

const ResultInfo = ({ dummyData }: any) => {
  return (
    <InfoWrapper>
      <h2>
        <StyleAge $age={dummyData.movie.age} />
        {dummyData.movie.title}
      </h2>
      <p>상영일 : {dummyData.reservation.date}</p>
      <p>상영시간 : {dummyData.reservation.time}</p>
      <p>
        인원 수 : 성인 {dummyData.reservation.customer.adult}명 / 청소년{' '}
        {dummyData.reservation.customer.teenager}명
      </p>
      <p>좌석 : {dummyData.reservation.seats.join(' / ')}</p>
      <p>지점 : {dummyData.reservation.location}</p>
      <p>상영관 : {dummyData.reservation.theater}</p>
    </InfoWrapper>
  )
}

export default ResultInfo

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
    gap: 1rem;
  }
`
