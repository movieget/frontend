import { BasicBtn } from '../../../../../../components/Button/style'
import { useBookingStore } from '../../../../../../stores/store'

interface ITimeButtonProps {
  time?: string
}

const TimeButton = ({ time = '00:00' }: ITimeButtonProps) => {
  const setField = useBookingStore((state) => state.setField)
  const handleClick = () => {
    setField('time', time)
  }
  return (
    <BasicBtn $size='medium' onClick={handleClick}>
      {time}
    </BasicBtn>
  )
}

export default TimeButton
