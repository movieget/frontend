import { SelectBox, SelectList, SelectTheater } from '../SelectBody.style'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'

const SelectTheaters = ({ data }) => {
  const title = '영화관'
  return (
    <SelectTheater>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {data?.cinemas.map((el) => (
            <OptionButton key={el.id} title={title} label={el.cinema_name} />
          ))}
        </SelectList>
      </SelectBox>
    </SelectTheater>
  )
}

export default SelectTheaters
