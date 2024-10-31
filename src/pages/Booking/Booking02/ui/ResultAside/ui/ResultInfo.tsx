import BS2 from '../../../Booking02.styled'
import { StyleAge } from '../../../../../../components/Badge/style'
import { IResultInfoProps } from '../../../Booking02.types'
import { useBookingStore } from '../../../../../../stores/store'

const ResultInfo = ({ count, seatId }: IResultInfoProps) => {
  const seatCount = seatId.join(' / ')
  const { title, age, date, startTime, location, cinema, screenId } = useBookingStore(
    (state) => state.initialBookingState,
  )

  return (
    <BS2.AsideInfoWrapper>
      <h2>
        <StyleAge $age={age} />
        {title}
      </h2>
      <p>상영일 : {date}</p>
      <p>상영시간 : {startTime}</p>
      <p>
        인원 수 : 성인 {count.adult_count}명 / 청소년 {count.child_count}명
      </p>
      <p>좌석 : {seatId.length !== 0 ? `[ ${seatCount} ]` : '[ 좌석을 선택해주세요 ]'}</p>
      <p>지점 : {`${location} ${cinema}`}</p>
      <p>상영관 : {screenId}</p>
    </BS2.AsideInfoWrapper>
  )
}

export default ResultInfo
