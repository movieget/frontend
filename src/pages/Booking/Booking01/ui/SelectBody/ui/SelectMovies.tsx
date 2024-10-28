import OptionButton from './OptionButton'
import { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import { ISelectMoviesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
import SelectTitle from './SelectTitle'

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
    <BS1.SelectMovie>
      <SelectTitle title={title} />
      <BS1.SelectBox>
        {isLoading && (
          <BS1.MsgBoxStyle>
            <SvgSpinner />
          </BS1.MsgBoxStyle>
        )}
        {isError ? (
          <ErrorMessage errorMsg={error?.message} />
        ) : (
          <BS1.SelectList>
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
          </BS1.SelectList>
        )}
      </BS1.SelectBox>
    </BS1.SelectMovie>
  )
}

export default SelectMovies
