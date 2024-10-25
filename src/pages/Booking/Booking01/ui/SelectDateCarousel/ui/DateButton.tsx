import { Badge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { IDateButtonProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
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
    <BS1.DateBtn $week={weekday} $isSelected={isSelected} onClick={handleSelectDay}>
      {isFirstDay && <Badge $color='primary'>{`${year}.${month}`}</Badge>}
      <BS1.Day>{`${day} ${weekday}`}</BS1.Day>
    </BS1.DateBtn>
  )
}

export default DateButton
