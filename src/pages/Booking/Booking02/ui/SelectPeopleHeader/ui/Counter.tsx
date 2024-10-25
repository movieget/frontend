import BS2 from '../../Booking02.styled'
import CounterBtn from './CounterBtn'
import { useEffect } from 'react'
import { ICounterProps } from '../../../Booking02.types'

const Counter = ({
  age,
  setTotalPrice,
  setTotalSeat,
  totalSeat,
  count,
  setCount,
}: ICounterProps) => {
  const totalSeats = count.adult_count + count.child_count
  useEffect(() => {
    setTotalPrice(count.adult_count * 14000 + count.child_count * 12000)
    setTotalSeat(totalSeats)
  }, [count.adult_count, count.child_count, setTotalPrice, setTotalSeat])

  return (
    <BS2.CounterWrapper>
      <BS2.CounterTitle>{age}</BS2.CounterTitle>
      <BS2.CounterBox>
        <CounterBtn ico='minus' count={count} setCount={setCount} totalSeat={totalSeat} age={age} />
        <p>{age === '성인' ? count.adult_count : count.child_count}</p>
        <CounterBtn ico='plus' count={count} setCount={setCount} totalSeat={totalSeat} age={age} />
      </BS2.CounterBox>
    </BS2.CounterWrapper>
  )
}

export default Counter
