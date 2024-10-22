import { useEffect, useState } from 'react'
import { useBookingStore } from '../../../../../stores/store'
import {
  SelectBodyWrapper,
  SelectBoxCol,
  SelectBoxRow,
  SelectLineBox,
  SelectTime,
} from './SelectBody.style'
import BNextButton from './ui/BNextButton'
import SelectLocations from './ui/SelectLocations'
import SelectMovies from './ui/SelectMovies'
import SelectTheaters from './ui/SelectTheaters'
import SelectTitle from './ui/SelectTitle'
import TimeButton from './ui/TimeButton'

const SelectBody = () => {
  const initialBookingState = useBookingStore((state) => state.initialBookingState)
  console.log(initialBookingState)
  const [isValid, setIsValid] = useState(false)
  const { date, movie, location, theater } = initialBookingState

  useEffect(() => {
    const fields = [date, movie, location, theater] // 검사할 필드 배열
    const allValid = fields.every((field) => field !== '') // 모든 필드가 비어있지 않은지 확인

    setIsValid(allValid) // 유효성에 따라 상태 업데이트
  }, [date, movie, location, theater])

  return (
    <SelectBodyWrapper>
      <SelectBoxRow>
        <SelectMovies />
        <SelectBoxCol>
          <SelectLocations />
          <SelectTheaters />
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTime>
        <SelectTitle title='시간선택' />
        <SelectLineBox>
          {isValid ? (
            <TimeButton time='12:00' />
          ) : (
            <div>
              <p>원하시는 영화, 지역, 영화관을 선택해주세요</p>
            </div>
          )}
        </SelectLineBox>
      </SelectTime>

      <BNextButton />
    </SelectBodyWrapper>
  )
}

export default SelectBody
