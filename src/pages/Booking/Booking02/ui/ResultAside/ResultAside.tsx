import styled from 'styled-components'

import backDropImg from '../../../../../assets/img/darkknight.webp'
import ResultInfo from './ui/ResultInfo'
import { BasicBtn, MainBtn } from '../../../../../components/Button/style'
import { useNavigate } from 'react-router-dom'

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
    age: 18,
    backdrop: backDropImg,
  },
}

const ResultAside = () => {
  const navigate = useNavigate()
  return (
    <AsideWrapper>
      <BackDropLayer>
        <ResultInfo dummyData={dummyData} />
        <ButtonWrapper>
          <BasicBtn $size='medium' onClick={() => navigate(-1)}>
            이전
          </BasicBtn>
          <MainBtn $size='medium' onClick={() => navigate('/charge')}>
            150,000원 결제하기
          </MainBtn>
        </ButtonWrapper>
      </BackDropLayer>
      <img src={dummyData.movie.backdrop} alt='' />
    </AsideWrapper>
  )
}

export default ResultAside

const AsideWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  padding: 0 1.8rem;
  position: relative;
  flex: 1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: contain;
    z-index: 1;
  }
`

const BackDropLayer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 6rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: ${({ theme }) => theme.colors.bg_backdrop};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`
