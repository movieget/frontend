import { useState } from 'react'
import { SelectLineBox, SelectTime } from '../SelectBody.style'
import SelectTitle from './SelectTitle'
import TimeButton from './TimeButton'
import { TScreenings } from '../SelectBody.types'

interface ISelectTimesProps {
  setIsTimeSelected: React.Dispatch<React.SetStateAction<boolean>>
  screenings?: TScreenings[]
  isValid: boolean
}

const SelectTimes = ({ setIsTimeSelected, screenings, isValid }: ISelectTimesProps) => {
  const [isSelected, setIsSelected] = useState<number | null>(null)
  return (
    <SelectTime>
      <SelectTitle title='시간선택' />
      <SelectLineBox>
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
      </SelectLineBox>
    </SelectTime>
  )
}

export default SelectTimes
