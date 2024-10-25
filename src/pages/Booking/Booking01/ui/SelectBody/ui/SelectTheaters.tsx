import { useState } from 'react'
import OptionButton from './OptionButton'
import SelectTitle from './SelectTitle'
import ErrorMessage from './ErrorMessage'
import { SvgSpinner } from '../../../../../../components/Loading/SvgSpinner'
import BS1 from '../../../Booking01.styled'
import { ISelectTheaters } from '../../../Booking01.types'

const SelectTheaters = ({ isLoading, isError, error, cinemas }: ISelectTheaters) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  const title = '영화관'

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
          <BS1.SelectList>
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
          </BS1.SelectList>
        )}
      </BS1.SelectBox>
    </BS1.SelectTheater>
  )
}

export default SelectTheaters
