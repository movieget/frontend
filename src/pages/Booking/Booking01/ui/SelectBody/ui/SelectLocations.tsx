import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectLocation } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useState } from 'react'

const SelectLocations = ({ data }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '지역'
  return (
    <SelectLocation>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {data?.locations.map((el) => (
            <OptionButton
              key={el.id}
              id={el.id}
              title={title}
              label={el.spot}
              isSelected={isSelected === el.id}
              setIsSelected={setIsSelected}
            />
          ))}
        </SelectList>
      </SelectBox>
    </SelectLocation>
  )
}

export default SelectLocations
