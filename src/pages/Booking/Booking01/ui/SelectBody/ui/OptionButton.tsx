import { StyleAge } from '../../../../../../components/Badge/style'
import { OptionLabel, OptionStyle } from '../SelectBody.style'

interface IOptionButtonProps {
  age?: 'all' | 12 | 15 | 18
  label?: string
}

const OptionButton = ({ age, label = '옵션라벨' }: IOptionButtonProps) => {
  return (
    <OptionStyle>
      {age && <StyleAge $age={age} />}
      <OptionLabel>{label}</OptionLabel>
    </OptionStyle>
  )
}

export default OptionButton
