import OptionButton from './OptionButton'
import { MsgBoxStyle, SelectBox, SelectList, SelectMovie } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useState } from 'react'
import { TMovies } from '../SelectBody.types'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'

interface ISelectMoviesProps {
  movies?: TMovies[]
  isLoading: boolean
  isError: boolean
  error?: Error | null
}

const SelectMovies = ({ movies, isError, error, isLoading }: ISelectMoviesProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화'

  // age 매핑을 위한 함수
  const mapAgeToOption = (age: number): 12 | 15 | 18 | 'all' => {
    if (age === 12 || age === 15 || age === 18) {
      return age
    }
    return 'all' // 나머지 경우에는 "all"로 처리
  }

  return (
    <SelectMovie>
      <SelectTitle title={title} />
      <SelectBox>
        {isLoading && (
          <MsgBoxStyle>
            <SvgSpinner />
          </MsgBoxStyle>
        )}
        {isError ? (
          <ErrorMessage errorMsg={error?.message} />
        ) : (
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
        )}
      </SelectBox>
    </SelectMovie>
  )
}

export default SelectMovies
