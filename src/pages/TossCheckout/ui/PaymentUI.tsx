import S from '../style'

interface IPaymentUIProps {
  amount: number
  requestPayment: () => void
  point: number
  setPoint: (num: number) => void
  maxPoint: number // 추가된 prop
}

const PaymentUI = ({ amount, requestPayment, point, setPoint, maxPoint }: IPaymentUIProps) => {
  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPoint = e.target.value ? Number(e.target.value) : 0

    // 숫자 외의 값이 입력되지 않도록 강제
    if (isNaN(newPoint)) return

    // 포인트 값이 음수이거나 최대 포인트를 넘지 않도록 제한
    if (newPoint < 0) newPoint = 0
    else if (newPoint > maxPoint) newPoint = maxPoint

    setPoint(newPoint)
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
        <span>{maxPoint} P</span> {/* 최대 사용 가능 포인트 표시 */}
      </S.PayInfoWrapper>

      <S.PayInputWrapper>
        <span>사용할 포인트</span>
        <input type='text' onChange={handlePointChange} value={point} min='0' max={maxPoint} />
      </S.PayInputWrapper>
      <S.PayAmountWrapper>
        <span>최종 결제 금액:</span>
        <span>{amount - point} 원</span>
      </S.PayAmountWrapper>

      <S.PayButton className='button' onClick={() => requestPayment()}>
        <img src='../../../public/img/Toss_Symbol_Secondary_White.png' alt='토스로고' />
        <span>{`토스 간편결제`}</span>
      </S.PayButton>
    </S.PayCard>
  )
}

export default PaymentUI
