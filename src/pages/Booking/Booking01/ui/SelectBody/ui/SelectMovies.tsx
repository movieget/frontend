import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'

const SelectMovies = () => {
  const title = '영화'

  return (
    <SelectMovie>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          <OptionButton title={title} age={18} label='크라켄' />
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
