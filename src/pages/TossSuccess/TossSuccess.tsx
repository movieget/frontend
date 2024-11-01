import { useNavigate, useSearchParams } from 'react-router-dom'
import { BasicBtn, MainBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { ChargeBtnBox, ChargeContainer, ChargeContentsBox, ChargeHeader } from './style'
import { useEffect } from 'react'
import MovieInfoCard from '../../components/MovieInfoCard/MovieInfoCard'
import { client } from '../../apis/instances'
import { useMutation } from '@tanstack/react-query'
import { SvgSpinner } from '../../components/Loading/SvgSpinner'
import { ErrorMsg } from '../KakaoCallback/KakaoCallback.styled'
import { LineMdAlertLoop } from '../../assets/svg/LineMdAlertLoop'
import { commonColors } from '../../styles/theme'
import MovieInfoCard2 from '../../components/MovieInfoCard/MovieInfoCard2'
import { LineMdConfirmCircleFilled } from '../../assets/svg/LineMdConfirmCircleFilled'

const TossSuccess = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries([...searchParams])
  const orderParam = searchParams.get('orderId')
  const paymentKeyParam = searchParams.get('paymentKey')
  const amountParam = searchParams.get('amount')

  console.log(params.start_time)

  const tossPaymentMutation = useMutation({
    mutationFn: async () => {
      const res = await client.post(
        '/payment/confirm',
        {
          book_id: params.book_id,
          poster: params.poster,
          age: params.age,
          duration: Number(params.duration),
          title: params.title,
          date: params.date.substring(0, 10),
          start_time: params.start_time,
          location: params.location,
          cinema: params.cinema,
          screen_id: params.screen_id,
          screening_date: params.screening_date,
          adult_count: params.adult_count,
          child_count: params.child_count,
          paymentKey: paymentKeyParam,
          orderId: orderParam,
          amount: Number(amountParam),
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
                {tossPaymentMutation.data?.data.amount + '원'}
                <br />
                결제가 완료되었습니다.
              </p>
            </ChargeHeader>
            <ChargeContentsBox>
              <MovieInfoCard2
                $posterImage={tossPaymentMutation.data?.data.poster}
                $age={tossPaymentMutation.data?.data.age}
                $title={tossPaymentMutation.data?.data.title}
                $bookingDate={tossPaymentMutation.data?.data.date}
                $screeningDate={tossPaymentMutation.data?.data.screening_date}
                $duration={tossPaymentMutation.data?.data.duration}
                $adultCount={tossPaymentMutation.data?.data.adult_count}
                $youthCount={tossPaymentMutation.data?.data.child_count}
                $location={tossPaymentMutation.data?.data.location}
                $orderId={tossPaymentMutation.data?.data.orderId}
                $paymentKey={tossPaymentMutation.data?.data.paymentKey}
                $screenId={tossPaymentMutation.data?.data.screen_id}
                $cinema={tossPaymentMutation.data?.data.cinema}
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
