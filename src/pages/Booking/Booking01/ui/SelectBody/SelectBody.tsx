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

const SelectBody = () => {
  const initialBookingState = useBookingStore((state) => state.initialBookingState)
  const setField = useBookingStore((state) => state.actions.setField)
  const { date, movie, location, cinema } = initialBookingState
  const [isValid, setIsValid] = useState(false)
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['bookingData', initialBookingState],
    queryFn: () => fetchMovieData(date),
    enabled: !!date,
    staleTime: 1000 * 10,
    retry: 1,
  })

  console.log('SelectBody 렌더링')

  useEffect(() => {
    const fields = [date, movie, location, cinema] // 검사할 필드 배열
    const allValid = fields.every((field) => field !== '') // 모든 필드가 비어있지 않은지 확인
    setIsValid(allValid) // 유효성에 따라 상태 업데이트
  }, [date, movie, location, cinema])

  // date가 바뀔때마다 전역상태 비우기
  useEffect(() => {
    setField('movie', '')
    setField('location', '')
    setField('cinema', '')
    setField('start_time', '')
  }, [date])

  useEffect(() => {
    refetch()
  }, [date])

  return (
    <SelectBodyWrapper>
      <SelectBoxRow>
        <SelectMovies movies={data?.movies} error={error} isError={isError} isLoading={isLoading} />
        <SelectBoxCol>
          <SelectLocations
            locations={data?.locations}
            error={error}
            isError={isError}
            isLoading={isLoading}
          />
          <SelectTheaters
            cinemas={data?.cinemas}
            error={error}
            isError={isError}
            isLoading={isLoading}
          />
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTimes
        screenings={data?.screenings}
        isValid={isValid}
        setIsTimeSelected={setIsTimeSelected}
      />
      <BNextButton isValid={isValid} isTimeSelected={isTimeSelected} />
    </SelectBodyWrapper>
  )
}

export default SelectBody
