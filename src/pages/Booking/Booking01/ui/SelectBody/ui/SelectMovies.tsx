import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'

const SelectMovies = () => {
  const bookingState = useBookingStore()
  console.log(bookingState)

  return (
    <SelectMovie>
      <SelectTitle title='영화' />
      <SelectBox>
        <SelectList>
          <OptionButton age={18} label='크라켄' />
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
