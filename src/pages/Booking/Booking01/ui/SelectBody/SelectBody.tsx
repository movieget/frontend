import { useEffect, useState } from 'react'
import { useBookingStore } from '../../../../../stores/store'
import { SelectBodyWrapper, SelectBoxCol, SelectBoxRow } from './SelectBody.style'
import BNextButton from './ui/BNextButton'
import SelectLocations from './ui/SelectLocations'
import SelectMovies from './ui/SelectMovies'
import SelectTheaters from './ui/SelectTheaters'

import { useQuery } from '@tanstack/react-query'
import { fetchMovieData } from '../../../../../apis/bookingApi'
import SelectTimes from './ui/SelectTimes'
import { IBookingData } from './SelectBody.types'

const SelectBody = () => {
  const initialBookingState = useBookingStore((state) => state.initialBookingState)
  const { date, movie, location, cinema } = initialBookingState
  const [isValid, setIsValid] = useState(false)
  const { data, refetch } = useQuery<IBookingData>({
    queryKey: ['bookingData'],
    queryFn: () => fetchMovieData(date),
    enabled: !!date,
    staleTime: 1000 * 10,
    retry: 1,
  })

  useEffect(() => {
    const fields = [date, movie, location, cinema] // 검사할 필드 배열
    const allValid = fields.every((field) => field !== '') // 모든 필드가 비어있지 않은지 확인
    setIsValid(allValid) // 유효성에 따라 상태 업데이트
  }, [date, movie, location, cinema])

  useEffect(() => {
    refetch()
  }, [date])

  return (
    <SelectBodyWrapper>
      <SelectBoxRow>
        <SelectMovies movies={data?.movies} />
        <SelectBoxCol>
          <SelectLocations locations={data?.locations} />
          <SelectTheaters cinemas={data?.cinemas} />
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTimes screenings={data?.screenings} isValid={isValid} />
      <BNextButton />
    </SelectBodyWrapper>
  )
}

export default SelectBody
