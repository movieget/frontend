import ResultInfo from './ui/ResultInfo'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import { useNavigate } from 'react-router-dom'
import { IResultAsideProps } from '../../Booking02.types'
import BS2 from '../../Booking02.styled'
import { useBookingStore } from '../../../../../stores/store'
import NoImageCard from '../../../../../components/NoImageCard/NoImageCard'

const ResultAside = ({ totalPrice, count, seatId, totalSeat }: IResultAsideProps) => {
  const navigate = useNavigate()
  const { bookId, poster, title } = useBookingStore((state) => state.initialBookingState)
  // const postBookingData = useMutation({
  //   mutationFn: () =>

  // })
  const handleTossPay = () => {
    navigate('/toss/checkout', {
      state: {
        currency: 'KRW',
        amount: totalPrice,
        title: title,
        id: bookId,
      },
    })
  }

  // 선택한 좌석의 갯수가 0보다 크거나
  // 선택한 좌석의 갯수와 선택할 수 있는 좌석의 최대갯수가 일치할때.
  const isAllSeatSelected = seatId.length > 0 && seatId.length === totalSeat

  return (
    <BS2.AsideWrapper>
      <BS2.BackDropLayer>
        <ResultInfo count={count} seatId={seatId} />
        <BS2.AsideBtnWrapper>
          <BasicBtn $size='medium' onClick={() => navigate(-1)}>
            이전
          </BasicBtn>
          <MainBtn $size='medium' disabled={!isAllSeatSelected} onClick={handleTossPay}>
            {`${totalPrice}원 결제하기`}
          </MainBtn>
        </BS2.AsideBtnWrapper>
      </BS2.BackDropLayer>
      {poster !== '' ? <img src={poster} alt={title} /> : <NoImageCard $width='100%' />}
    </BS2.AsideWrapper>
  )
}

export default ResultAside
