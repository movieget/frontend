import Counter from './ui/Counter'
import BS2 from '../../Booking02.styled'
import { ISelectPeopleHeaderProps } from '../../Booking02.types'

const SelectPeopleHeader = ({
  totalPrice,
  setTotalPrice,
  totalSeat,
  setTotalSeat,
  count,
  setCount,
}: ISelectPeopleHeaderProps) => {
  return (
    <BS2.HeaderWrapper>
      <BS2.CounterContainer>
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
      </BS2.CounterContainer>
    </BS2.HeaderWrapper>
  )
}

export default SelectPeopleHeader
