import { useEffect, useState } from 'react'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import BS1 from '../../../Booking01.styled'
import { ISelectTheatersProps } from '../../../Booking01.types'
import { useBookingStore } from '../../../../../../stores/store'

const SelectTheaters = ({ isLoading, isError, error, cinemas, date }: ISelectTheatersProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const title = '영화관'
  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('cinema', '')
    setSelectedId(null)
  }, [date])
  return (
    <BS1.SelectTheater>
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
          cinemas?.map((el) => (
            <BS1.SelectList key={el.id}>
              <OptionButton
                id={el.id}
                title={title}
                label={el.cinema_name}
                selectedId={selectedId === el.id}
                onSelect={handleSelectButton}
              />
            </BS1.SelectList>
          ))
        )}
      </BS1.SelectBox>
    </BS1.SelectTheater>
  )
}

export default SelectTheaters
