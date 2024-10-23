import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'

const SelectMovies = ({ data }) => {
  const title = '영화'
  console.log('SelectMovies에서 알림:', data)
  return (
    <SelectMovie>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {data?.movies.map((el) => (
            <OptionButton key={el.id} title={title} age={el.age} label={el.title} />
          ))}
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
