import ResultInfo from './ui/ResultInfo'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import { useNavigate } from 'react-router-dom'
import { IResultAsideProps } from '../../Booking02.types'
import BS2 from '../../Booking02.styled'
import { useBookingStore } from '../../../../../stores/store'
import NoImageCard from '../../../../../components/NoImageCard/NoImageCard'
import { useState } from 'react'
import { SvgSpinner } from '../../../../../components/Loading/SvgSpinner'

const ResultAside = ({ totalPrice, count, seatId, totalSeat }: IResultAsideProps) => {
  const navigate = useNavigate()
  const { bookId, poster, title } = useBookingStore((state) => state.initialBookingState)
  const [isLoading, setIsLoading] = useState(true) // 이미지 로딩 상태

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
            {`${totalPrice.toLocaleString()}원 결제하기`} {/* 3자리마다 쉼표 표시 */}
          </MainBtn>
        </BS2.AsideBtnWrapper>
      </BS2.BackDropLayer>
      {poster !== '' ? (
        <>
          {isLoading && <SvgSpinner />}
          <img
            src={poster}
            alt={title}
            onLoad={() => setIsLoading(false)} // 이미지 로딩 완료 시 로딩 상태 업데이트
            style={{ display: isLoading ? 'none' : 'block' }} // 로딩 중일 때 이미지 숨기기
          />
        </>
      ) : (
        <NoImageCard $width='100%' />
      )}
    </BS2.AsideWrapper>
  )
}

export default ResultAside
