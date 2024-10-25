import { useState } from 'react'
import SelectTitle from './SelectTitle'
import TimeButton from './TimeButton'
import { ISelectTimesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'

const SelectTimes = ({ setIsTimeSelected, screenings, isValid }: ISelectTimesProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  return (
    <BS1.SelectTime>
      <SelectTitle title='시간선택' />
      <BS1.SelectLineBox>
        {isValid ? (
          screenings?.map((el: any) => (
            <TimeButton
              key={el.id}
              id={el.id}
              time={el.start_time.split(' ')[1]}
              isSelected={isSelected === el.id}
              setIsSelected={setIsSelected}
              setIsTimeSelected={setIsTimeSelected}
            />
          ))
        ) : (
          <div>
            <p>원하시는 영화, 지역, 영화관을 선택해주세요</p>
          </div>
        )}
      </BS1.SelectLineBox>
    </BS1.SelectTime>
  )
}

export default SelectTimes
