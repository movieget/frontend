import OptionButton from './OptionButton'
import { SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useState } from 'react'
import { TMovies } from '../SelectBody.types'

const SelectMovies = ({ movies }: { movies?: TMovies[] }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화'
  console.log('SelectMovies에서 알림:', movies)

  // age 매핑을 위한 함수
  const mapAgeToOption = (age: number): 12 | 15 | 18 | 'all' | undefined => {
    if (age === 12 || age === 15 || age === 18) {
      return age
    }
    return 'all' // 나머지 경우에는 "all"로 처리
  }

  return (
    <SelectMovie>
      <SelectTitle title={title} />
      <SelectBox>
        <SelectList>
          {movies?.map((el) => (
            <OptionButton
              key={el.id}
              id={el.id}
              title={title}
              age={mapAgeToOption(el.age)}
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
