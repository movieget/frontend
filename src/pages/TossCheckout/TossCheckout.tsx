import { useEffect, useState } from 'react'
import { loadTossPayments } from '@tosspayments/tosspayments-sdk'
import { useLocation } from 'react-router-dom'
import { TOSS_API_KEY } from '../../utils/constants'
import { customAlphabet } from 'nanoid'
import S from './style'

const customerKey = '12930u0sda9jf0asoidj'

const TossCheckout = () => {
  const location = useLocation()
  const nanoid = customAlphabet('0123456789ABCDEF', 8)
  const orderId = nanoid()
  const { amount, title, id, currency } = location.state
  const [payment, setPayment] = useState(null)
  console.log(location.state)

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(TOSS_API_KEY)
        const payment = tossPayments.payment({
          customerKey,
        })
        setPayment(payment)
      } catch (error) {
        console.error('Error fetching payment:', error)
      }
    }

    fetchPayment()
  }, [TOSS_API_KEY, customerKey])

  // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
  // @docs https://docs.tosspayments.com/sdk/v2/js#paymentrequestpayment
  async function requestPayment() {
    // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.

    await payment.requestPayment({
      method: 'CARD', // 카드 및 간편결제
      amount: {
        value: amount,
        currency: currency,
      },
      orderId: orderId, // 고유 주문번호
      orderName: title,
      successUrl: window.location.origin + '/toss/success', // 결제 요청이 성공하면 리다이렉트되는 URL
      failUrl: window.location.origin + '/toss/fail', // 결제 요청이 실패하면 리다이렉트되는 URL
      // customerEmail: 'customer123@gmail.com',
      // customerName: '김토스',
      // customerMobilePhone: '01012341234',
      // 카드 결제에 필요한 정보
      card: {
        useEscrow: false,
        flowMode: 'DEFAULT', // 통합결제창 여는 옵션
        useCardPoint: false,
        useAppCardOnly: false,
      },
    })
  }

  return (
    // 결제하기 버튼
    <S.Container>
      <img src='../../../public/img/Toss_Symbol_Primary.png' alt='토스로고' />
      <S.PayButton className='button' onClick={() => requestPayment()}>
        {`${amount}원 결제하기`}
      </S.PayButton>
    </S.Container>
  )
}

export default TossCheckout
