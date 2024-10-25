import backDropImg from '../../../../../assets/img/darkknight.webp'
import ResultInfo from './ui/ResultInfo'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import { useNavigate } from 'react-router-dom'
import { IResultAsideProps } from '../../Booking02.types'
import BS2 from '../Booking02.styled'

const dummyData = {
  reservation: {
    date: '2024-10-13',
    time: '17:50',
    seats: ['E01', 'E02', 'E03', 'E04'],
    location: '메가박스 울산 성남 지점',
    theater: 'C관 1',
    customer: {
      adult: 3,
      teenager: 3,
    },
  },
  movie: {
    title: '다크 나이트',
    age: 18 as const,
    backdrop: backDropImg,
  },
}

const ResultAside = ({ totalPrice, count, seatId, totalSeat }: IResultAsideProps) => {
  const navigate = useNavigate()

  // 선택한 좌석의 갯수가 0보다 크거나
  // 선택한 좌석의 갯수와 선택할 수 있는 좌석의 최대갯수가 일치할때.
  const isAllSeatSelected = seatId.length > 0 && seatId.length === totalSeat

  return (
    <BS2.AsideWrapper>
      <BS2.BackDropLayer>
        <ResultInfo dummyData={dummyData} count={count} seatId={seatId} />
        <BS2.AsideBtnWrapper>
          <BasicBtn $size='medium' onClick={() => navigate(-1)}>
            이전
          </BasicBtn>
          <MainBtn $size='medium' disabled={!isAllSeatSelected} onClick={() => navigate('/charge')}>
            {`${totalPrice}원 결제하기`}
          </MainBtn>
        </BS2.AsideBtnWrapper>
      </BS2.BackDropLayer>
      <img src={dummyData.movie.backdrop} alt='' />
    </BS2.AsideWrapper>
  )
}

export default ResultAside
