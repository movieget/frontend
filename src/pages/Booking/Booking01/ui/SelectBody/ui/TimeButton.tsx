import { BasicBtn } from '../../../../../../components/Button/style'
import { useBookingStore } from '../../../../../../stores/store'

interface ITimeButtonProps {
  time?: string
  id: number
  isSelected: boolean
  setIsSelected: (id: number) => void
}

const TimeButton = ({ id, isSelected, setIsSelected, time = '00:00' }: ITimeButtonProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const handleClick = () => {
    setIsSelected(id)
    setField('start_time', time)
  }
  return (
    <BasicBtn $size='medium' onClick={handleClick} $isSelected={isSelected}>
      {time}
    </BasicBtn>
  )
}

export default TimeButton
