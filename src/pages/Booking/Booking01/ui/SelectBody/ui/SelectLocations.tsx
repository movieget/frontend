import OptionButton from './OptionButton'
import { MsgBoxStyle, SelectBox, SelectList, SelectLocation } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import { useState } from 'react'
import { TLocations } from '../SelectBody.types'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'

interface ISelectLocationsProps {
  locations?: TLocations[]
  isLoading: boolean
  isError: boolean
  error?: Error | null
}

const SelectLocations = ({ locations, error, isError, isLoading }: ISelectLocationsProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '지역'

  return (
    <SelectLocation>
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
          locations && (
            <SelectList>
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
            </SelectList>
          )
        )}
      </SelectBox>
    </SelectLocation>
  )
}

export default SelectLocations
