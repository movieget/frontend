import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import { BtnBox, MovieList, MovieListBox } from '../../../style'
import { useQuery } from '@tanstack/react-query'
import { auth } from '../../../../../apis/instances'
import { useUserStore } from '../../../../../stores/userStore'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { commonColors } from '../../../../../styles/theme'
import { LineMdAlertLoop } from '../../../../../../public/svg/LineMdAlertLoop'

export interface IBookedInfo {
  booking_id: number
  poster_url: string
  title: string
  duration: number
  booking_date: string
  screening_date: string
  age_rating: 'all' | '12' | '15' | '18' | undefined
  seats: string[]
  total_price: number
  adult_count: number
  child_count: number
  screening_time: string
  spot: string
  cinema_name: string
  screen_number: number
}

export const getSuccessBookInfo = async (userId: string | undefined) => {
  try {
    const res = await auth.get(`/books/completed/?user_id=${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err) {
    throw new Error('예매 정보를 불러오는데 실패했습니다.')
  }
}

const BookingList = () => {
  const userId = useUserStore((state) => state.userData?.id)
  const { data, isError, isLoading, error, refetch } = useQuery<IBookedInfo[]>({
    queryKey: ['finishedBookInfo'],
    queryFn: () => getSuccessBookInfo(userId),
  })

  return (
    <MovieListBox>
      {isLoading && <SvgSpinner />}
      {isError && (
        <ErrorMsg>
          <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
          <span>{error.message}</span>
          <MainBtn $size='large' onClick={() => refetch()}>
            재시도
          </MainBtn>
        </ErrorMsg>
      )}
      {data?.map((el) => {
        return (
          <MovieList key={el.booking_id}>
            <MovieInfoCard
              $posterImage={el.poster_url}
              $title={el.title}
              $age={el.age_rating}
              $bookingDate={el.booking_date}
              $screeningDate={el.screening_date}
              $duration={el.duration}
              $seats={el.seats}
              $price={el.total_price}
              $adultCount={el.adult_count}
              $youthCount={el.child_count}
              $location={el.spot}
              $cinema={el.cinema_name}
            />
            <BtnBox>
              <BasicBtn $size='large'>예매 변경</BasicBtn>
              <MainBtn $size='large' $disabled={true}>
                예매 취소
              </MainBtn>
            </BtnBox>
          </MovieList>
        )
      })}
    </MovieListBox>
  )
}

export default BookingList
