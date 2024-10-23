import { StyleAge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { OptionButtonStyle, OptionLabel } from '../SelectBody.style'

interface IOptionButtonProps {
  title: '영화' | '지역' | '영화관'
  age?: 'all' | 12 | 15 | 18
  label?: string
}

const OptionButton = ({ title, age, label = '옵션라벨' }: IOptionButtonProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const handleClick = () => {
    switch (title) {
      case '영화':
        setField('movie', label)
        break
      case '지역':
        setField('location', label)
        break
      case '영화관':
        setField('cinema', label)
        break
      default:
        throw new Error(
          '타이틀값이 설정되어있지 않습니다! 영화 | 지역 | 영화관 중에 값을 설정해주세요',
        )
    }
  }

  return (
    <OptionButtonStyle onClick={handleClick}>
      {age && <StyleAge $age={age} />}
      <OptionLabel>{label}</OptionLabel>
    </OptionButtonStyle>
  )
}

export default OptionButton
