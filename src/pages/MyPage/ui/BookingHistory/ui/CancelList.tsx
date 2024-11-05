import { useEffect, useState } from 'react'
import MovieInfoCard from '../../../../../components/MovieInfoCard/MovieInfoCard'
import { MovieList, MovieListBox } from '../../../style'
import { useQuery } from '@tanstack/react-query'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../../../../KakaoCallback/KakaoCallback.styled'
import { LineMdAlertLoop } from '../../../../../assets/svg/LineMdAlertLoop'
import { commonColors } from '../../../../../styles/theme'
import { MainBtn } from '../../../../../components/Button/style'
import { auth } from '../../../../../apis/instances'
import { useUserStore } from '../../../../../stores/userStore'
import axios from 'axios'

interface ICanceledList {
  booking_id: number
  poster_url: string
  title: string
  duration: number
  booking_date: string
  screening_date: string
  age_rating: 'all' | '12' | '15' | '18' | undefined
  total_price: number
  adult_count: number
  child_count: number
  screening_time: string
  spot: string
  cinema_name: string
  screen_number: 0
}

const getCancelList = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error('사용자 ID가 없습니다.')
  }
  try {
    const res = await auth.get(`/books/canceled/?user_id=${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = res.data
    return data
  } catch (err) {
    throw err
  }
}

const CancelList = () => {
  const userId = useUserStore((state) => state.userData?.id)
  const { data, isLoading, isError, error, refetch } = useQuery<ICanceledList[]>({
    queryKey: ['cancelList', userId],
    queryFn: () => getCancelList(userId),
    enabled: !!userId,
    retry: 1,
  })

  useEffect(() => {
    console.log(data)
  }, [data])

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
      {data?.map((movie) => (
        <MovieList key={movie.booking_id}>
          <MovieInfoCard
            $posterImage={movie.poster_url}
            $title={movie.title}
            $age={movie.age_rating}
            $cancelDate={movie.booking_date}
            // $refundAmount={movie}
            $adultCount={movie.adult_count}
            $youthCount={movie.child_count}
            $location={movie.spot}
            $cinema={movie.cinema_name}
          />
        </MovieList>
      ))}
    </MovieListBox>
  )
}

export default CancelList
