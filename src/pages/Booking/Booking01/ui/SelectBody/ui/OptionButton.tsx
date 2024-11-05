import { StyleAge } from '../../../../../../components/Badge/style'
import { useBookingStore } from '../../../../../../stores/store'
import BS1 from '../../../Booking01.styled'
import { IOptionButtonProps } from '../../../Booking01.types'

const OptionButton = ({
  id,
  selectedId,
  onSelect,
  title,
  age,
  duration,
  bookId,
  poster,

  label = '옵션라벨',
}: IOptionButtonProps) => {
  const setField = useBookingStore((state) => state.actions.setField)

  // 버튼 클릭 핸들러
  const handleClick = () => {
    onSelect(id)
    console.log(age)
    // 전역 상태에 필드 설정
    switch (title) {
      case '영화':
        setField('bookId', selectedId ? '' : bookId)
        setField('title', selectedId ? '' : label)
        setField('age', selectedId ? '' : age)
        setField('duration', selectedId ? '' : duration)
        setField('poster', selectedId ? '' : poster)
        setField('movieId', selectedId ? '' : id)
        break
      case '지역':
        setField('location', selectedId ? '' : label)
        break
      case '영화관':
        setField('cinema', selectedId ? '' : label)
        break
      default:
        throw new Error(
          '타이틀값이 설정되어있지 않습니다! 영화 | 지역 | 영화관 중에 값을 설정해주세요',
        )
    }
  }

  return (
    <BS1.OptionButtonStyle $isSelected={selectedId} onClick={handleClick}>
      {age && <StyleAge $age={age} />}
      <BS1.OptionLabel>{label}</BS1.OptionLabel>
    </BS1.OptionButtonStyle>
  )
}

export default OptionButton
