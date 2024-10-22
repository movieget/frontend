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
  const [isValid, setIsValid] = useState(false)
  const { date, movie, location, theater } = useBookingStore((state) => state.initialBookingState)
  console.log(initialBookingState)

  useEffect(() => {
    const isDateValid = date !== ''
    const isMovieValid = movie !== ''
    const isLocationValid = location !== ''
    const isTheaterValid = theater !== ''
    const allValid =
      isDateValid && isMovieValid && isLocationValid && isTheaterValid && isTheaterValid

    allValid && setIsValid(true)
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
