import { useNavigate } from 'react-router-dom'
import { LineMdAlertLoop } from '../../../assets/svg/LineMdAlertLoop'
import { SvgSpinner } from '../../../components/Loading/SvgSpinner'
import { commonColors } from '../../../styles/theme'
import { ErrorMsg } from '../../KakaoCallback/KakaoCallback.styled'
import S from '../style'
import { MainBtn } from '../../../components/Button/style'
import { useMutation } from '@tanstack/react-query'
import { auth } from '../../../apis/instances'
import { useEffect } from 'react'

interface IPaymentUIProps {
  amount: number
  requestPayment: () => void
  point: number
  setPoint: (num: number) => void
  data: any
  isLoading: boolean
  isError: boolean
  error: any
  bookId: number
  userId: string | undefined
}

const postUsePoint = async (
  userId: string | undefined,
  bookId: number,
  totalPoint: string | null,
) => {
  try {
    const res = await auth.post(
      '/books/points/use',
      {
        user_id: userId,
        book_id: bookId,
        total_point: totalPoint,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return res.data
  } catch (err) {
    throw err
  }
}

const PaymentUI = ({
  amount,
  requestPayment,
  point,
  setPoint,
  isLoading,
  isError,
  error,
  data,
  bookId,
  userId,
}: IPaymentUIProps) => {
  const maxPoint = data?.available_points
  const navigate = useNavigate()

  useEffect(() => {
    setPoint(0) // 컴포넌트가 처음 렌더링될 때 point를 0으로 초기화
  }, [setPoint])

  const mutatePoint = useMutation({
    mutationKey: ['usePoint'],
    mutationFn: () => {
      return postUsePoint(userId, bookId, point.toString())
    },
  })

  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPoint = e.target.value ? Number(e.target.value) : 0

    if (isNaN(newPoint)) return

    const maxAllowedPoint = Math.min(maxPoint, amount) // amount와 maxPoint 중 작은 값으로 설정

    if (newPoint < 0) newPoint = 0
    else if (newPoint > maxAllowedPoint) newPoint = maxAllowedPoint

    setPoint(newPoint)
  }

  const handlePayment = () => {
    mutatePoint.mutate()
    requestPayment()
  }

  if (isLoading) return <SvgSpinner />

  if (isError) {
    return (
      <ErrorMsg>
        <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
        <span>{error.message}</span>
        <MainBtn $size='large' onClick={() => navigate('/')}>
          메인으로 돌아가기
        </MainBtn>
      </ErrorMsg>
    )
  }

  return (
    <S.PayCard>
      <h2>결제 정보</h2>
      <S.PayInfoWrapper>
        <span>결제 금액:</span>
        <span>{amount} 원</span>
      </S.PayInfoWrapper>

      <S.PayInfoWrapper>
        <span>사용 가능한 포인트: </span>
        <span>{maxPoint} P</span>
      </S.PayInfoWrapper>

      <S.PayInputWrapper>
        <span>사용할 포인트</span>
        <input
          type='text'
          onChange={handlePointChange}
          value={point}
          min='0'
          max={Math.min(maxPoint, amount)} // 최대값을 amount와 maxPoint 중 작은 값으로 설정
        />
      </S.PayInputWrapper>
      <S.PayAmountWrapper>
        <span>최종 결제 금액:</span>
        <span>{amount - point} 원</span>
      </S.PayAmountWrapper>

      <S.PayButton className='button' onClick={handlePayment}>
        <img src='../../../public/img/Toss_Symbol_Secondary_White.png' alt='토스로고' />
        <span>{`토스 간편결제`}</span>
      </S.PayButton>
    </S.PayCard>
  )
}

export default PaymentUI
