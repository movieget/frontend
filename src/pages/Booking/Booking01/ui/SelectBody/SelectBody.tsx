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
import { useQuery } from '@tanstack/react-query'
import { fetchMovieData } from '../../../../../apis/bookingApi'

const SelectBody = () => {
  const initialBookingState = useBookingStore((state) => state.initialBookingState)
  const { date, movie, location, cinema } = initialBookingState
  const [isValid, setIsValid] = useState(false)
  console.log('SelectBody에서 알림 : ', date)
  const { data, refetch } = useQuery({
    queryKey: ['bookingData'],
    queryFn: () => fetchMovieData(date),
    enabled: !!date,
    staleTime: 1000 * 10,
    retry: 1,
  })

  console.log('SelectBody에서 알림2: ', date, movie, location, cinema)

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
        <SelectMovies data={data} />
        <SelectBoxCol>
          <SelectLocations data={data} />
          <SelectTheaters data={data} />
        </SelectBoxCol>
      </SelectBoxRow>

      <SelectTime>
        <SelectTitle title='시간선택' />
        <SelectLineBox>
          {isValid ? (
            data?.screenings.map((el: any) => (
              <TimeButton key={el.id} time={el.start_time.split(' ')[1]} />
            ))
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
