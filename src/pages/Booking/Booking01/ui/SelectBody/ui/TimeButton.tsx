import { BasicBtn } from '../../../../../../components/Button/style'
import { useBookingStore } from '../../../../../../stores/store'
import { ITimeButtonProps } from '../../../Booking01.types'

const TimeButton = ({
  id,
  isSelected,
  setIsSelected,
  setIsTimeSelected,
  time = '00:00',
}: ITimeButtonProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const handleClick = () => {
    const toggleStyle = isSelected ? null : id
    setIsSelected(toggleStyle)
    setIsTimeSelected((prev: boolean) => !prev)
    setField('start_time', isSelected ? '' : time)
  }
  return (
    <BasicBtn $size='medium' onClick={handleClick} $isSelected={isSelected}>
      {time}
    </BasicBtn>
  )
}

export default TimeButton
