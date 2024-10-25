import styled from 'styled-components'
import { Checkbox, CheckboxWrapper, CheckSeat } from '../../../../../../components/Checkbox/style'
import SeatWrapper from './SeatWrapper'
import { dummyArr } from '../../../../../../mocks/dummyArray'

const SelectSeat = ({ totalSeat, seatId, setSeatId }) => {
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
      {dummyArr.map((row) => (
        <ColWrapper key={row.id}>
          {row.seat.map((seat) => {
            const uniqueId = `${row.id}${seat.id}`

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
                  <EmptySeat />
                )}
              </div>
            )
          })}
        </ColWrapper>
      ))}
    </SeatWrapper>
  )
}

export default SelectSeat

const ColWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`

const EmptySeat = styled.span`
  display: inline-block;
  width: 2rem;
  height: 1.8rem;
`
