import { useEffect, useState } from 'react'
import SelectTitle from './SelectTitle'
import TimeButton from './TimeButton'
import { ISelectTimesProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'
import { useBookingStore } from '../../../../../../stores/store'

const SelectTimes = ({ setIsTimeSelected, screenings, isValid, date }: ISelectTimesProps) => {
  const setField = useBookingStore((state) => state.actions.setField)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleSelectButton = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id))
  }

  useEffect(() => {
    setField('startTime', '')
    setField('screenId', '')
    setField('screeningDate', '')
    setSelectedId(null)
    setIsTimeSelected(false)
  }, [date])

  console.log(screenings)

  return (
    <BS1.SelectTime>
      <SelectTitle title='시간선택' />
      <BS1.SelectLineBox>
        {isValid ? (
          screenings?.map((el: any) => (
            <TimeButton
              key={el.id}
              id={el.id}
              screenId={el.screen_id}
              screeningDate={el.screening_date}
              time={el.start_time.substring(0, 5)}
              selectedId={selectedId === el.id}
              setSelectedId={setSelectedId}
              setIsTimeSelected={setIsTimeSelected}
              onSelect={handleSelectButton}
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
