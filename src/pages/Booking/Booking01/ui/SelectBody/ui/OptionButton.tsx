import { StyleAge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { OptionButtonStyle, OptionLabel } from '../SelectBody.style'

interface IOptionButtonProps {
  age?: 'all' | 12 | 15 | 18
  label?: string
}

const OptionButton = ({ age, label = '옵션라벨' }: IOptionButtonProps) => {
  const setField = useBookingStore((state) => state.setField)
  const handleClick = () => {
    setField('movie', label)
  }

  return (
    <OptionButtonStyle onClick={handleClick}>
      {age && <StyleAge $age={age} />}
      <OptionLabel>{label}</OptionLabel>
    </OptionButtonStyle>
  )
}

export default OptionButton
