import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectLocation } from '../SelectBody.style'
import SelectTitle from './SelectTitle'

const SelectLocations = ({ data }) => {
  const title = '지역'
  return (
    <SelectLocation>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {data?.locations.map((el) => <OptionButton key={el.id} title={title} label={el.spot} />)}
        </SelectList>
      </SelectBox>
    </SelectLocation>
  )
}

export default SelectLocations
