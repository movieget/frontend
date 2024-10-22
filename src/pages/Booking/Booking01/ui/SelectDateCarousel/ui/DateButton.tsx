import { Badge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { DateBtn, Day } from '../SelectDateCarousel.style'
import { IDateButtonProps } from '../SelectDateCarousel.type'

const DateButton = ({ dateNumber, today }: IDateButtonProps) => {
  const [year, month, day, weekday] = dateNumber.split('-')
  const date = useBookingStore((state) => state.date)

  const setField = useBookingStore((state) => state.setField)

  const handleSelectDay = () => {
    const formattedDate = dateNumber.slice(0, 10)
    setField('date', formattedDate)
    console.log(formattedDate)
  }

  const isFirstDay = today === day || day === '01'

  return (
    <DateBtn $week={weekday} onClick={handleSelectDay}>
      {isFirstDay && <Badge $color='primary'>{`${year}.${month}`}</Badge>}
      <Day>{`${day} ${weekday}`}</Day>
    </DateBtn>
  )
}

export default DateButton
