import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'
import { useState } from 'react'

const SelectMovies = ({ data }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화'
  console.log('SelectMovies에서 알림:', data)

  return (
    <SelectMovie>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {data?.movies.map((el) => (
            <OptionButton
              key={el.id}
              id={el.id}
              title={title}
              age={el.age}
              label={el.title}
              isSelected={isSelected === el.id}
              setIsSelected={setIsSelected}
            />
          ))}
        </SelectList>
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
