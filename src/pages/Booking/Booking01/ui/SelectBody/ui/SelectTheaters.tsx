import { useState } from 'react'
import { SelectBox, SelectList, SelectTheater } from '../SelectBody.style'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import { TCinemas } from '../SelectBody.types'

const SelectTheaters = ({ cinemas }: { cinemas?: TCinemas[] }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화관'

  return (
    <SelectTheater>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {cinemas?.map((el) => (
            <OptionButton
              key={el.id}
              id={el.id}
              title={title}
              label={el.cinema_name}
              isSelected={isSelected === el.id}
              setIsSelected={setIsSelected}
            />
          ))}
        </SelectList>
      </SelectBox>
    </SelectTheater>
  )
}

export default SelectTheaters
