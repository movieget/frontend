import styled from 'styled-components'
import { Checkbox, CheckboxWrapper, CheckSeat } from '../../../../../../components/Checkbox/style'
import SeatWrapper from './SeatWrapper'

const SelectSeat = () => {
  const handleSelectSeat = (uniqueId: string) => {
    console.log(uniqueId)
  }
  return (
    <SeatWrapper>
      {dummyArr.map((row) => (
        <ColWrapper key={row.id}>
          {row.seat.map((seat) => {
            const uniqueId = `${row.id}-${seat.id}`
            console.log(row.id)

            // 상태에 따른 속성만 설정
            const isDisabled = seat.status === false
            const isEmptySeat = seat.status === null

            return (
              <div key={uniqueId}>
                {!isEmptySeat ? (
                  <CheckboxWrapper onClick={() => handleSelectSeat(uniqueId)}>
                    <Checkbox type='checkbox' id={uniqueId} disabled={isDisabled} />
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

const dummyArr = [
  {
    id: 'A',
    seat: [
      { id: '1', status: null },
      { id: '2', status: null },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: false },
      { id: '6', status: false },
      { id: '7', status: false },
      { id: '8', status: false },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: null },
      { id: '14', status: null },
    ],
  },
  {
    id: 'B',
    seat: [
      { id: '1', status: null },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: false },
      { id: '6', status: false },
      { id: '7', status: false },
      { id: '8', status: false },
      { id: '9', status: false },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: null },
    ],
  },
  {
    id: 'C',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: false },
      { id: '8', status: false },
      { id: '9', status: false },
      { id: '10', status: false },
      { id: '11', status: false },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'D',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'E',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'F',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'G',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'H',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'I',
    seat: [
      { id: '1', status: true },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: true },
      { id: '7', status: true },
      { id: '8', status: true },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: true },
    ],
  },
  {
    id: 'J',
    seat: [
      { id: '1', status: null },
      { id: '2', status: true },
      { id: '3', status: true },
      { id: '4', status: true },
      { id: '5', status: true },
      { id: '6', status: null },
      { id: '7', status: true },
      { id: '8', status: null },
      { id: '9', status: true },
      { id: '10', status: true },
      { id: '11', status: true },
      { id: '12', status: true },
      { id: '13', status: true },
      { id: '14', status: null },
    ],
  },
]
