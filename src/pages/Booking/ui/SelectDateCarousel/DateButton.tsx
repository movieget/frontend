import { Badge } from '../../../../components/Badge/style'
import { DateBtn, Day } from './SelectDateCarousel.style'
import { IDateButtonProps } from './SelectDateCarousel.type'

const DateButton = ({ date, today, onSelect }: IDateButtonProps) => {
  const [year, month, day, weekday] = date.split('-')

  return (
    <DateBtn $week={weekday} onClick={() => onSelect(date)}>
      {(today === day || day === '01') && <Badge $color='primary'>{`${year}.${month}`}</Badge>}
      <Day>{`${day} ${weekday}`}</Day>
    </DateBtn>
  )
}

export default DateButton
