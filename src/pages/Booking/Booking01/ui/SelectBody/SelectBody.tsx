import { useEffect, useState } from 'react'
import { useBookingStore } from '../../../../../stores/store'
import BS1 from '../../Booking01.styled'
import BNextButton from './ui/BNextButton'
import SelectLocations from './ui/SelectLocations'
import SelectMovies from './ui/SelectMovies'
import SelectTheaters from './ui/SelectTheaters'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieData } from '../../../../../apis/bookingApi'
import SelectTimes from './ui/SelectTimes'
import { useUserStore } from '../../../../../stores/userStore'

const SelectBody = () => {
  const { date, title, location, cinema } = useBookingStore((state) => state.initialBookingState)
  const { id } = useUserStore((state) => state.userData || {})
  const [isValid, setIsValid] = useState(false)
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ['bookingData', date, id],
    queryFn: () => fetchMovieData(date, id),
    enabled: !!date && !!id,
    staleTime: 1000 * 10,
    retry: 1,
  })

  useEffect(() => {
    const fields = [date, title, location, cinema] // 검사할 필드 배열
    const allValid = fields.every((field) => field !== '') // 모든 필드가 비어있지 않은지 확인
    setIsValid(allValid) // 유효성에 따라 상태 업데이트
  }, [date, title, location, cinema])

  useEffect(() => {
    refetch()
  }, [date])

  return (
    <BS1.SelectBodyWrapper>
      <BS1.SelectBoxRow>
        <SelectMovies
          bookId={data?.book_id}
          movies={data?.movies}
          error={error}
          isError={isError}
          isLoading={isLoading}
          date={date}
        />
        <BS1.SelectBoxCol>
          <SelectLocations
            locations={data?.locations}
            error={error}
            isError={isError}
            isLoading={isLoading}
            date={date}
          />
          <SelectTheaters
            cinemas={data?.cinemas}
            error={error}
            isError={isError}
            isLoading={isLoading}
            date={date}
          />
        </BS1.SelectBoxCol>
      </BS1.SelectBoxRow>

      <SelectTimes
        screenings={data?.screenings}
        isValid={isValid}
        setIsTimeSelected={setIsTimeSelected}
        date={date}
      />
      <BNextButton isValid={isValid} isTimeSelected={isTimeSelected} />
    </BS1.SelectBodyWrapper>
  )
}

export default SelectBody
