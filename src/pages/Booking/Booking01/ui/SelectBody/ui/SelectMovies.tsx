import OptionButton from './OptionButton'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import { ISelectMoviesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'

const SelectMovies = ({ movies, isError, error, isLoading, date }: ISelectMoviesProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const setField = useBookingStore((state) => state.actions.setField)
  const title = '영화'

  // age 매핑을 위한 함수
  const mapAgeToOption = (age: number): 12 | 15 | 18 | 'all' => {
    if (age === 12 || age === 15 || age === 18) {
      return age
    }
    return 'all' // 나머지 경우에는 "all"로 처리
  }

  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('movie', '')
    setSelectedId(null)
  }, [date])

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
          movies?.map((el) => (
            <BS1.SelectList key={el.id}>
              <OptionButton
                id={el.id}
                title={title}
                age={mapAgeToOption(el.age)}
                label={el.title}
                selectedId={selectedId === el.id}
                onSelect={handleSelectButton}
              />
            </BS1.SelectList>
          ))
        )}
      </BS1.SelectBox>
    </BS1.SelectMovie>
  )
}

export default SelectMovies
