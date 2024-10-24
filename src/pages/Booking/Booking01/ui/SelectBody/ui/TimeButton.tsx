import { BasicBtn } from '../../../../../../components/Button/style'
import { useBookingStore } from '../../../../../../stores/store'

interface ITimeButtonProps {
  time?: string
  id: number
  isSelected: boolean
  setIsSelected: (toggleStyle: number | null) => void
  setIsTimeSelected: (prev: boolean) => void
}

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
    setIsTimeSelected((prev) => !prev)
    setField('start_time', isSelected ? '' : time)
  }
  return (
    <BasicBtn $size='medium' onClick={handleClick} $isSelected={isSelected}>
      {time}
    </BasicBtn>
  )
}

export default TimeButton
