import { Badge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { DateBtn, Day } from '../SelectDateCarousel.styled'
import { IDateButtonProps } from '../SelectDateCarousel.types'
const DateButton = ({ isSelected, setIsSelected, dateNumber, today }: IDateButtonProps) => {
  const [year, month, day, weekday] = dateNumber.split('-')

  const setField = useBookingStore((state) => state.actions.setField)

  const handleSelectDay = () => {
    const formattedDate = dateNumber.slice(0, 10)
    setIsSelected(dateNumber)
    setField('date', formattedDate)
  }

  const isFirstDay = today === day || day === '01'

  return (
    <DateBtn $week={weekday} $isSelected={isSelected} onClick={handleSelectDay}>
      {isFirstDay && <Badge $color='primary'>{`${year}.${month}`}</Badge>}
      <Day>{`${day} ${weekday}`}</Day>
    </DateBtn>
  )
}

export default DateButton
