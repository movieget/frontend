import BS2 from '../../../Booking02.styled'
import { StyleAge } from '../../../../../../components/Badge/style'
import { IResultInfoProps } from '../../../Booking02.types'

const ResultInfo = ({ dummyData, count, seatId }: IResultInfoProps) => {
  const seatCount = seatId.join(' / ')

  return (
    <BS2.AsideInfoWrapper>
      <h2>
        <StyleAge $age={dummyData.movie.age} />
        {dummyData.movie.title}
      </h2>
      <p>상영일 : {dummyData.reservation.date}</p>
      <p>상영시간 : {dummyData.reservation.time}</p>
      <p>
        인원 수 : 성인 {count.adult_count}명 / 청소년 {count.child_count}명
      </p>
      <p>좌석 : {seatId.length !== 0 ? `[ ${seatCount} ]` : '[ 좌석을 선택해주세요 ]'}</p>
      <p>지점 : {dummyData.reservation.location}</p>
      <p>상영관 : {dummyData.reservation.theater}</p>
    </BS2.AsideInfoWrapper>
  )
}

export default ResultInfo
