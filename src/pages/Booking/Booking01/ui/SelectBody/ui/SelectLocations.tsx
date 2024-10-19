import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectLocation } from '../SelectBody.style'
import SelectTitle from './SelectTitle'

const SelectLocations = () => {
  return (
    <SelectLocation>
      <SelectTitle title='지역' />
      <SelectBox>
        <SelectList>
          <OptionButton label='울산' />
        </SelectList>
      </SelectBox>
    </SelectLocation>
  )
}

export default SelectLocations
