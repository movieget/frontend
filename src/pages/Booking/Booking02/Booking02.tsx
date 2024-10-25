import ResultAside from './ui/ResultAside/ResultAside'
import SelectPeopleHeader from './ui/SelectPeopleHeader/SelectPeopleHeader'
import SelectSeatBody from './ui/SelectSeatBody/SelectSeatBody'
import { useState } from 'react'
import { TCount } from './Booking02.types'
import BS2 from './Booking02.styled'

const Booking02 = () => {
  const [count, setCount] = useState<TCount>({
    adult_count: 0,
    child_count: 0,
  })
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalSeat, setTotalSeat] = useState<number>(0)
  const [seatId, setSeatId] = useState<string[]>([])
  return (
    <>
      <BS2.BoxRow>
        <BS2.BoxCol>
          <SelectPeopleHeader
            count={count}
            setCount={setCount}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            totalSeat={totalSeat}
            setTotalSeat={setTotalSeat}
          />
          <SelectSeatBody totalSeat={totalSeat} seatId={seatId} setSeatId={setSeatId} />
        </BS2.BoxCol>
        <ResultAside totalPrice={totalPrice} count={count} seatId={seatId} totalSeat={totalSeat} />
      </BS2.BoxRow>
    </>
  )
}

export default Booking02
