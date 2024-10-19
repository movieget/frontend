import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'

const SelectMovies = () => {
  return (
    <SelectMovie>
      <SelectTitle title='영화' />
      <SelectBox>
        <SelectList>
          <OptionButton age='18' label='크라켄' />
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
