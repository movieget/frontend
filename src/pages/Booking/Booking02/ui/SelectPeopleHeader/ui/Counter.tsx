import styled from 'styled-components'
import CounterBtn from './CounterBtn'
import { useEffect } from 'react'

interface ICounterProps {
  age: '성인' | '청소년'
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>
  setTotalSeat: React.Dispatch<React.SetStateAction<number>>
  totalSeat: number
  count: {
    adult_count: number
    child_count: number
  }
  setCount: React.Dispatch<React.SetStateAction<{ adult_count: number; child_count: number }>>
}

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
    <Container>
      <CounterTitle>{age}</CounterTitle>
      <Wrapper>
        <CounterBtn ico='minus' count={count} setCount={setCount} totalSeat={totalSeat} age={age} />
        <p>{age === '성인' ? count.adult_count : count.child_count}</p>
        <CounterBtn ico='plus' count={count} setCount={setCount} totalSeat={totalSeat} age={age} />
      </Wrapper>
    </Container>
  )
}

export default Counter

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
  }
`

const CounterTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`
