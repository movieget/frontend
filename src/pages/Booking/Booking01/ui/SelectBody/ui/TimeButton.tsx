import { BasicBtn } from '../../../../../../components/Button/style'
import { useBookingStore } from '../../../../../../stores/store'
import { ITimeButtonProps } from '../../../Booking01.types'

const TimeButton = ({
  id,
  screenInfoId,
  selectedId,
  screenId,
  screeningDate,
  setSelectedId,
  setIsTimeSelected,
  onSelect,
  time = '00:00',
}: ITimeButtonProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const handleClick = () => {
    const toggleStyle = selectedId ? null : id
    onSelect(id)
    setIsTimeSelected(!selectedId)
    setSelectedId(toggleStyle)
    setField('startTime', selectedId ? '' : time)
    setField('screenId', selectedId ? null : screenId)
    setField('screeningDate', selectedId ? '' : screeningDate)
    setField('screenInfoId', selectedId ? '' : screenInfoId)
  }
  return (
    <BasicBtn $size='medium' onClick={handleClick} $isSelected={selectedId}>
      {time}
    </BasicBtn>
  )
}

export default TimeButton
