import styled from 'styled-components'
import { SelectBoxCol } from '../Booking01/ui/SelectBody/SelectBody.style'
import ResultAside from './ui/ResultAside/ResultAside'
import SelectPeopleHeader from './ui/SelectPeopleHeader/SelectPeopleHeader'
import SelectSeatBody from './ui/SelectSeatBody/SelectSeatBody'
import { useState } from 'react'

const Booking02 = () => {
  const [count, setCount] = useState({
    adult_count: 0,
    child_count: 0,
  })
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalSeat, setTotalSeat] = useState<number>(0)
  const [seatId, setSeatId] = useState<string[]>([])
  return (
    <>
      <BoxRow>
        <BoxCol>
          <SelectPeopleHeader
            count={count}
            setCount={setCount}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalSeat={totalSeat}
            setTotalSeat={setTotalSeat}
          />
          <SelectSeatBody totalSeat={totalSeat} seatId={seatId} setSeatId={setSeatId} />
        </BoxCol>
        <ResultAside totalPrice={totalPrice} count={count} seatId={seatId} totalSeat={totalSeat} />
      </BoxRow>
    </>
  )
}

export default Booking02

const BoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 2rem;
`

const BoxCol = styled(SelectBoxCol)`
  flex: 2;
`
