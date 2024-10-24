import { useState } from 'react'
import { MsgBoxStyle, SelectBox, SelectList, SelectTheater } from '../SelectBody.style'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import { TCinemas } from '../SelectBody.types'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'

interface ISelectTheaters {
  cinemas?: TCinemas[]
  isError: boolean
  isLoading: boolean
  error: Error | null
}

const SelectTheaters = ({ isLoading, isError, error, cinemas }: ISelectTheaters) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화관'

  return (
    <SelectTheater>
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
            {cinemas?.map((el) => (
              <OptionButton
                key={el.id}
                id={el.id}
                title={title}
                label={el.cinema_name}
                isSelected={isSelected === el.id}
                setIsSelected={setIsSelected}
              />
            ))}
          </SelectList>
        )}
      </SelectBox>
    </SelectTheater>
  )
}

export default SelectTheaters
