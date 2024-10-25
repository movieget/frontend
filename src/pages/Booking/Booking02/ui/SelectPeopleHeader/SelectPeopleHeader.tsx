import styled from 'styled-components'
import { StyledWrapper } from '../../../Booking01/ui/SelectDateCarousel/SelectDateCarousel.style'
import Counter from './ui/Counter'

const SelectPeopleHeader = ({
  totalPrice,
  setTotalPrice,
  totalSeat,
  setTotalSeat,
  count,
  setCount,
}) => {
  return (
    <HeaderWrapper>
      <CounterWrapper>
        <Counter
          count={count}
          setCount={setCount}
          age='성인'
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          totalSeat={totalSeat}
          setTotalSeat={setTotalSeat}
        />
        <Counter
          count={count}
          setCount={setCount}
          age='청소년'
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          totalSeat={totalSeat}
          setTotalSeat={setTotalSeat}
        />
      </CounterWrapper>
    </HeaderWrapper>
  )
}

export default SelectPeopleHeader

const HeaderWrapper = styled(StyledWrapper)`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`
