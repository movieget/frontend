import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import BS1 from '../../../Booking01.styled'
import { useBookingStore } from '../../../../../../stores/store'
import { ISelectLocationsProps } from '../../../Booking01.types'

const SelectLocations = ({ locations, error, isError, isLoading, date }: ISelectLocationsProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const title = '지역'

  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('location', '')
    setSelectedId(null)
  }, [date])

  return (
    <BS1.SelectLocation>
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
          locations &&
          locations.map((el) => (
            <BS1.SelectList key={el.id}>
              <OptionButton
                id={el.id}
                title={title}
                label={el.spot}
                selectedId={selectedId === el.id}
                onSelect={handleSelectButton}
              />
            </BS1.SelectList>
          ))
        )}
      </BS1.SelectBox>
    </BS1.SelectLocation>
  )
}

export default SelectLocations
