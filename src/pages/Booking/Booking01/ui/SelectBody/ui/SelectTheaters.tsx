import { SelectBox, SelectList, SelectTheater } from '../SelectBody.style'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'

const SelectTheaters = () => {
  return (
    <SelectTheater>
      <SelectTitle title='영화관' />
      <SelectBox>
        <SelectList>
          <OptionButton label='울산 중구 성남동 메가박스' />
        </SelectList>
      </SelectBox>
    </SelectTheater>
  )
}

export default SelectTheaters
