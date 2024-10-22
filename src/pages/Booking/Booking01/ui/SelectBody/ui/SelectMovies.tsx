import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useState } from 'react'

const SelectMovies = () => {
  const [isSelected, setIsSelected] = useState()
  return (
    <SelectMovie>
      <SelectTitle title='영화' />
      <SelectBox>
        <SelectList>
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
          <OptionButton age={18} label='크라켄' />
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
