import OptionButton from './OptionButton'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import { ISelectMoviesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
import SelectTitle from './SelectTitle'
import { useBookingStore } from '../../../../../../stores/store'

const SelectMovies = ({ movies, isError, error, isLoading, date, bookId }: ISelectMoviesProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const setField = useBookingStore((state) => state.actions.setField)
  const title = '영화'

  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('bookId', '')
    setField('title', '')
    setField('age', '')
    setField('duration', '')
    setField('poster', '')
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
                bookId={bookId}
                duration={el.duration}
                title={title}
                poster={el.poster_image_url}
                age={el.age_rating}
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
