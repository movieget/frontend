import { Checkbox, CheckboxWrapper, CheckSeat } from '../../../../../../components/Checkbox/style'
import SeatWrapper from './SeatWrapper'
import { ISeatData, ISelectSeatProps, TRowSeat } from '../../../Booking02.types'
import BS2 from '../../../Booking02.styled'
import { useQuery } from '@tanstack/react-query'
import { getSeatData } from '../../../../../../apis/bookingApi'
import { useBookingStore } from '../../../../../../stores/store'

const SelectSeat = ({ totalSeat, seatId, setSeatId }: ISelectSeatProps) => {
  const { screenId } = useBookingStore((state) => state.initialBookingState)
  const { data } = useQuery<ISeatData>({
    queryKey: ['seatData'],
    queryFn: () => getSeatData(screenId),
  })
  // totalSeat === 선택할 수 있는 최대 좌석 갯수.
  const handleSelectSeat = (uniqueId: string, isChecked: boolean) => {
    // 최대 좌석 수 초과 시 클릭 무시
    if (isChecked && seatId.length >= totalSeat) {
      return
    }

    setSeatId((prev) => {
      if (isChecked) {
        return [...prev, uniqueId]
      } else {
        return prev.filter((id) => id !== uniqueId)
      }
    })
  }

  return (
    <SeatWrapper>
      {data?.rows.map((row) => (
        <BS2.ColWrapper key={row.row}>
          {row.seats.map((seat) => {
            const uniqueId = `${row.row}${seat.column}`

            // 상태에 따른 속성만 설정
            const isDisabled = seat.status === false
            const isEmptySeat = seat.status === null

            return (
              <div key={uniqueId}>
                {!isEmptySeat ? (
                  <CheckboxWrapper>
                    <Checkbox
                      type='checkbox'
                      id={uniqueId}
                      disabled={isDisabled}
                      checked={seatId.includes(uniqueId)}
                      onChange={(e) => handleSelectSeat(uniqueId, e.target.checked)}
                    />
                    <CheckSeat htmlFor={uniqueId} />
                  </CheckboxWrapper>
                ) : (
                  <BS2.EmptySeat />
                )}
              </div>
            )
          })}
        </BS2.ColWrapper>
      ))}
    </SeatWrapper>
  )
}

export default SelectSeat
