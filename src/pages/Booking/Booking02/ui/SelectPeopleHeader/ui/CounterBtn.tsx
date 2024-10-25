import { IconBtn, IconBtnImg } from '../../../../../../components/Button/style'
import plusIco from '../../../../../../assets/svg/ic--round-add.svg'
import minusIco from '../../../../../../assets/svg/ic--round-minus.svg'

import { dummyArr } from '../../../../../../mocks/dummyArray'
import { useSeatCounter } from '../../../../../../hooks/useSeatCounter'
import { ICounterBtnProps } from '../../../Booking02.types'

const CounterBtn = ({ age, ico, totalSeat, setCount, count }: ICounterBtnProps) => {
  const icoSrcState = ico === 'plus' ? plusIco : minusIco
  const availableSeat = useSeatCounter(dummyArr)

  // 총 좌석 수가 availableSeat 이하일 때 증가 가능
  const isPlusAllowed = totalSeat < availableSeat
  // 각 카운트가 0보다 클 때만 감소 가능
  const isMinusAllowed = age === '성인' ? count.adult_count > 0 : count.child_count > 0

  const handleCounter = () => {
    if (ico === 'plus' && isPlusAllowed) {
      setCount((prevCount) => {
        if (age === '성인') {
          return { ...prevCount, adult_count: prevCount.adult_count + 1 }
        } else {
          return { ...prevCount, child_count: prevCount.child_count + 1 }
        }
      })
    } else if (ico === 'minus' && isMinusAllowed) {
      setCount((prevCount) => {
        if (age === '성인') {
          return { ...prevCount, adult_count: prevCount.adult_count - 1 }
        } else {
          return { ...prevCount, child_count: prevCount.child_count - 1 }
        }
      })
    }
  }

  return (
    <IconBtn onClick={handleCounter}>
      <IconBtnImg src={icoSrcState} alt={ico === 'plus' ? '더하기' : '빼기'} width='2rem' />
    </IconBtn>
  )
}

export default CounterBtn
