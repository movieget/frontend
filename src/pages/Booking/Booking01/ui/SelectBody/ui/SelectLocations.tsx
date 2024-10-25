import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import { useState } from 'react'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import BS1 from '../../../Booking01.styled'
import { ISelectLocationsProps } from '../../../Booking01.types'

const SelectLocations = ({ locations, error, isError, isLoading }: ISelectLocationsProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '지역'

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
          locations && (
            <BS1.SelectList>
              {locations.map((el) => (
                <OptionButton
                  key={el.id}
                  id={el.id}
                  title={title}
                  label={el.spot}
                  isSelected={isSelected === el.id}
                  setIsSelected={setIsSelected}
                />
              ))}
            </BS1.SelectList>
          )
        )}
      </BS1.SelectBox>
    </BS1.SelectLocation>
  )
}

export default SelectLocations
