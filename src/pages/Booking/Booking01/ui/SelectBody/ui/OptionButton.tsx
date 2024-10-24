import { StyleAge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import { OptionButtonStyle, OptionLabel } from '../SelectBody.style'

interface IOptionButtonProps {
  id: number
  title: '영화' | '지역' | '영화관'
  age?: 'all' | 12 | 15 | 18
  label?: string
  setIsSelected: (id: number | null) => void
}

const OptionButton = ({
  id,
  setIsSelected,
  title,
  age,
  label = '옵션라벨',
}: IOptionButtonProps) => {
  const { movie, location, cinema } = useBookingStore((state) => state.initialBookingState)
  const setField = useBookingStore((state) => state.actions.setField)

  // title에 맞는 전역 상태 값과 현재 버튼의 id가 일치하는지 여부를 확인
  const isOptionSelected = () => {
    switch (title) {
      case '영화':
        return movie === label
      case '지역':
        return location === label
      case '영화관':
        return cinema === label
      default:
        return false
    }
  }

  // 버튼 클릭 핸들러
  const handleClick = () => {
    const toggleLabel = isOptionSelected() ? '' : label
    setIsSelected(isOptionSelected() ? null : id)

    // 전역 상태에 필드 설정
    switch (title) {
      case '영화':
        setField('movie', toggleLabel)
        break
      case '지역':
        setField('location', toggleLabel)
        break
      case '영화관':
        setField('cinema', toggleLabel)
        break
      default:
        throw new Error(
          '타이틀값이 설정되어있지 않습니다! 영화 | 지역 | 영화관 중에 값을 설정해주세요',
        )
    }
  }

  return (
    <OptionButtonStyle $isSelected={isOptionSelected()} onClick={handleClick}>
      {age && <StyleAge $age={age} />}
      <OptionLabel>{label}</OptionLabel>
    </OptionButtonStyle>
  )
}

export default OptionButton
