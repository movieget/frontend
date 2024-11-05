import { useNavigate, useSearchParams } from 'react-router-dom'
import { BasicBtn, MainBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { ChargeBtnBox, ChargeContainer, ChargeContentsBox, ChargeHeader } from './style'
import { useEffect } from 'react'
import { auth, client } from '../../apis/instances'
import { useMutation } from '@tanstack/react-query'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../KakaoCallback/KakaoCallback.styled'
import { LineMdAlertLoop } from '../../../public/svg/LineMdAlertLoop'
import { commonColors } from '../../styles/theme'
import MovieInfoCard2 from '../../components/MovieInfoCard/MovieInfoCard2'
import { LineMdConfirmCircleFilled } from '../../../public/svg/LineMdConfirmCircleFilled'
import { useUserStore } from '../../stores/userStore'

const postBookSuccess = async (
  userId: string | undefined,
  screenId: string | null,
  params: any,
  paymentKeyParam: string | null,
  orderParam: string | null,
  amountParam: string | null,
) => {
  console.log(params.seats.split(','))
  try {
    const res = await auth.post(
      `/books/success/${userId}/${screenId}`,
      {
        book_id: params.book_id,
        poster_url: params.poster,
        age_rating: params.age,
        duration: Number(params.duration),
        title: params.title,
        booking_date: params.date.substring(0, 10),
        screening_time: params.start_time,
        spot: params.location,
        cinema_name: params.cinema,
        screen_number: params.screen_id,
        screening_date: params.screening_date,
        adult_count: params.adult_count,
        child_count: params.child_count,
        seats: params.seats.split(','),
        paymentKey: paymentKeyParam,
        orderId: orderParam,
        amount: Number(amountParam),
        total_price: Number(amountParam),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const data = res.data
    return data
  } catch (err) {
    throw err
  }
}

const TossSuccess = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries([...searchParams])
  const orderParam = searchParams.get('orderId')
  const paymentKeyParam = searchParams.get('paymentKey')
  const amountParam = searchParams.get('amount')
  const userId = useUserStore((state) => state.userData?.id)

  console.log('쿼리파라매터: ', params)
  console.log(params.seats.split(','))

  const body = {
    book_id: params.book_id,
    poster_url: params.poster,
    age_rating: params.age,
    duration: Number(params.duration),
    title: params.title,
    booking_date: params.date.substring(0, 10),
    screening_time: params.start_time,
    spot: params.location,
    cinema_name: params.cinema,
    screen_number: params.screen_id,
    screening_date: params.screening_date,
    adult_count: params.adult_count,
    child_count: params.child_count,
    seats: params.seats.split(','),
    paymentKey: paymentKeyParam,
    orderId: orderParam,
    amount: Number(amountParam),
  }

  const tossPaymentMutation = useMutation({
    mutationKey: ['paymentConfirm'],
    mutationFn: async () => {
      const res = await client.post(
        '/payment/confirm',
        {
          ...body,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return { status: res.status, data: res.data }
    },
  })

  const bookSuccessMutation = useMutation({
    mutationKey: ['bookSuccess'],
    mutationFn: () =>
      postBookSuccess(userId, params.screen_id, params, paymentKeyParam, orderParam, amountParam),
  })

  // 뒤로가기 막기 -> 결제페이지로 가는것을 막고 메인페이지로 이동
  // popstate는 단순히 이벤트만 처리, 히스토리 변경 X -> 사용자가 뒤로가기를 시도했다가 앞으로 가면 원래있던 페이지로 되돌아감
  useEffect(() => {
    const preventBack = () => {
      // 현재 페이지의 상태를 새로 push
      // history.pushState -> 브라우저히스토리 조작 ->현재 페이지의 상태를 히스토리에 새로 추가함으로써 뒤로갈수 없게만듬
      window.history.pushState(null, '', window.location.href)
      alert('이전페이지로 돌아갈 수 없습니다. 메인페이지로 이동합니다.')
      navigate('/', { replace: true })
    }
    window.history.pushState(null, '', window.location.href)
    // popstate: 뒤로가려는 시도를 잡아 alert를 띄움
    // preventBack: 뒤로가는 동작 방해(history를 바꿔서 방해)
    window.addEventListener('popstate', preventBack)

    return () => {
      window.removeEventListener('popstate', preventBack)
    }
  }, [navigate])

  useEffect(() => {
    tossPaymentMutation.mutate()
    bookSuccessMutation.mutate()
  }, [])

  return (
    <ContainerLayout>
      <ChargeContainer>
        {tossPaymentMutation.isError && (
          <ErrorMsg>
            <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
            <span>{tossPaymentMutation.error.message}</span>
            <MainBtn $size='large' onClick={() => navigate('/')}>
              메인으로 돌아가기
            </MainBtn>
          </ErrorMsg>
        )}
        {tossPaymentMutation.isPending && <SvgSpinner />}
        {tossPaymentMutation.isSuccess && (
          <>
            <ChargeHeader>
              <LineMdConfirmCircleFilled width={64} height={64} />
              <p>
                {tossPaymentMutation.data?.data.amount.toLocaleString() + '원'}
                <br />
                결제가 완료되었습니다.
              </p>
            </ChargeHeader>
            <ChargeContentsBox>
              <MovieInfoCard2
                $posterImage={tossPaymentMutation.data?.data.poster_url}
                $age={tossPaymentMutation.data?.data.age_rating}
                $title={tossPaymentMutation.data?.data.title}
                $bookingDate={tossPaymentMutation.data?.data.booking_date}
                $screeningDate={tossPaymentMutation.data?.data.screening_date}
                $duration={tossPaymentMutation.data?.data.duration}
                $adultCount={tossPaymentMutation.data?.data.adult_count}
                $youthCount={tossPaymentMutation.data?.data.child_count}
                $location={tossPaymentMutation.data?.data.spot}
                $orderId={tossPaymentMutation.data?.data.orderId}
                $screenId={tossPaymentMutation.data?.data.screen_number}
                $cinema={tossPaymentMutation.data?.data.cinema_name}
                $seats={tossPaymentMutation.data?.data.seats}
              />
            </ChargeContentsBox>
            <ChargeBtnBox>
              {/* navigate - replace : true -> 페이지로 이동 후 뒤로가기 안됨 */}
              <BasicBtn $size='large' onClick={() => navigate('/mypage', { replace: true })}>
                예약내역확인
              </BasicBtn>
              <MainBtn $size='large' onClick={() => navigate('/')}>
                메인으로가기
              </MainBtn>
            </ChargeBtnBox>
          </>
        )}
      </ChargeContainer>
    </ContainerLayout>
  )
}

export default TossSuccess
