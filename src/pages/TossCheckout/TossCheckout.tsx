import { useEffect, useState } from 'react'
import { loadTossPayments } from '@tosspayments/tosspayments-sdk'
import { useLocation } from 'react-router-dom'
import { TOSS_API_KEY } from '../../utils/constants'
import { customAlphabet } from 'nanoid'
import S from './style'
import { useBookingStore } from '../../stores/store'

const nanoid = customAlphabet('0123456789ABCDEF', 8)
const customerKey = nanoid()
const orderId = nanoid()

const TossCheckout = () => {
  const lc = useLocation()
  const bookData = useBookingStore((state) => state.initialBookingState)
  const adultCount = useBookingStore((state) => state.initialCountState.adult_count)
  const childCount = useBookingStore((state) => state.initialCountState.child_count)
  const { currency, amount } = lc.state
  const [payment, setPayment] = useState(null)

  console.log('성인 카운트 데이터: ', adultCount)
  console.log('아동 카운트 데이터: ', childCount)

  const {
    book_id,
    poster,
    age,
    duration,
    date,
    start_time,
    title,
    location,
    cinema,
    screen_id,
    screening_date,
    adult_count,
    child_count,
  } = {
    book_id: bookData.bookId,
    poster: bookData.poster,
    age: bookData.age,
    duration: bookData.duration,
    title: bookData.title,
    date: bookData.date.substring(0, 10),
    start_time: bookData.startTime,
    location: bookData.location,
    cinema: bookData.cinema,
    screen_id: bookData.screenId,
    screening_date: bookData.screeningDate,
    adult_count: adultCount,
    child_count: childCount,
  }

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
      successUrl: `${window.location.origin}/toss/success?book_id=${encodeURIComponent(book_id)}&poster=${encodeURIComponent(poster)}&age=${encodeURIComponent(age)}&duration=${encodeURIComponent(duration)}&date=${encodeURIComponent(date)}&start_time=${encodeURIComponent(start_time)}&title=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}&cinema=${encodeURIComponent(cinema)}&screen_id=${encodeURIComponent(screen_id)}&screening_date=${encodeURIComponent(screening_date)}&adult_count=${encodeURIComponent(adult_count)}&child_count=${encodeURIComponent(child_count)}`,
      // 결제 요청이 성공하면 리다이렉트되는 URL
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
