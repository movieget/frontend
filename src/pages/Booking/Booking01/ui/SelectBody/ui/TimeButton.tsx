import { BasicBtn } from '../../../../../../components/Button/style'

interface ITimeButtonProps {
  time?: string
}

const TimeButton = ({ time = '00:00' }: ITimeButtonProps) => {
  return <BasicBtn $size='medium'>{time}</BasicBtn>
}

export default TimeButton
