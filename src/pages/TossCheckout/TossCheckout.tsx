import { useEffect, useState } from 'react'
import { TossPaymentsPayment, loadTossPayments } from '@tosspayments/tosspayments-sdk'
import { useLocation } from 'react-router-dom'
import { TOSS_API_KEY } from '../../utils/constants'
import { customAlphabet } from 'nanoid'
import S from './style'
import { useBookingStore } from '../../stores/store'
import PaymentUI from './ui/PaymentUI'
import { useUserStore } from '../../stores/userStore'
import { getUserPoint } from '../../apis/bookingApi'
import { useQuery } from '@tanstack/react-query'

const nanoid = customAlphabet('0123456789ABCDEF', 8)
const customerKey = nanoid()
const orderId = nanoid()

const TossCheckout = () => {
  const lc = useLocation()
  const bookData = useBookingStore((state) => state.initialBookingState)
  const adultCount = useBookingStore((state) => state.initialCountState.adult_count)
  const childCount = useBookingStore((state) => state.initialCountState.child_count)
  const { currency, amount } = lc.state
  const [payment, setPayment] = useState<TossPaymentsPayment | null>(null)
  const [point, setPoint] = useState(0)
  const [price, setPrice] = useState(amount)
  const userId = useUserStore((state) => state.userData?.id)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userPoint', userId],
    queryFn: () => getUserPoint(userId),
  })

  useEffect(() => {
    if (data) {
      setPoint(Number(data.available_points))
    }
  }, [data])

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
    seats,
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
    seats: bookData.seats,
    screen_id: bookData.screenId,
    screening_date: bookData.screeningDate,
    adult_count: adultCount,
    child_count: childCount,
    seats: bookData.seats,
  }

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(TOSS_API_KEY)
        const payment = tossPayments.payment({
          customerKey,
        })
        if (payment) {
          setPayment(payment)
        }
      } catch (error) {
        console.error('Error fetching payment:', error)
      }
    }

    fetchPayment()
  }, [TOSS_API_KEY, customerKey])

  useEffect(() => {
    setPrice(amount - point >= 0 ? amount - point : 0)
  }, [point, amount])

  async function requestPayment() {
    await payment?.requestPayment({
      method: 'CARD',
      amount: {
        value: price,
        currency: currency,
      },
      orderId: orderId,
      orderName: title,
      successUrl: `${window.location.origin}/toss/success?book_id=${encodeURIComponent(book_id)}&poster=${encodeURIComponent(poster)}&age=${encodeURIComponent(age)}&duration=${encodeURIComponent(duration)}&date=${encodeURIComponent(date)}&start_time=${encodeURIComponent(start_time)}&title=${encodeURIComponent(title)}&location=${encodeURIComponent(location)}&cinema=${encodeURIComponent(cinema)}&screen_id=${encodeURIComponent(screen_id)}&screening_date=${encodeURIComponent(screening_date)}&adult_count=${encodeURIComponent(adult_count)}&child_count=${encodeURIComponent(child_count)}&seats=${encodeURIComponent(seats.join(','))}`,
      failUrl: window.location.origin + '/toss/fail',
      card: {
        useEscrow: false,
        flowMode: 'DEFAULT',
        useCardPoint: false,
        useAppCardOnly: false,
      },
    })
  }

  return (
    <S.Container>
      <PaymentUI
        isLoading={isLoading}
        isError={isError}
        error={error}
        amount={amount}
        requestPayment={requestPayment}
        point={point}
        setPoint={setPoint}
        data={data}
        bookId={book_id}
        userId={userId}
      />
    </S.Container>
  )
}

export default TossCheckout
