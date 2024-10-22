import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectLocation } from '../SelectBody.style'
import SelectTitle from './SelectTitle'

const SelectLocations = () => {
  const title = '지역'
  return (
    <SelectLocation>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          <OptionButton title={title} label='울산' />
        </SelectList>
      </SelectBox>
    </SelectLocation>
  )
}

export default SelectLocations
