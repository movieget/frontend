import styled from 'styled-components'

const BoxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex: 1;
  gap: 2rem;
`

const BoxCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 2;
`

/* ----------- Select People Header Styles -----------*/
const HeaderWrapper = styled.div`
  width: 100%;
  height: 62px;
  padding: 0 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  position: relative;
`

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

const CounterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
  }
`

const CounterTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
`

/* ------------------------------------------------------ */

/* --------------- Result Aside Styles -------------------*/

const AsideWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 300px;
  height: auto;
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

const AsideBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const AsideInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
    gap: 1rem;
  }
`
/* ------------------------------------------------------ */

/* ----------------- SeatStatus Styles -------------------*/

const SeatStatusContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`

const SeatStatusWrapper = styled(SeatStatusContainer)`
  height: 1.8rem;
  font-size: 1.8rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  img {
    height: 1.8rem;
  }

  h2 {
    text-align: center;
    word-break: keep-all;
  }
`

/* ------------------------------------------------------ */

/* --------------- Select Seat Body Styles ---------------*/

const SelectSeatBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border: 1px solid ${({ theme }) => theme.colors.border_wrapper};
  border-radius: 4px;
  padding: 0 1.8rem;
  position: relative;
  padding: 40px 0;

  svg {
    width: 100%;
    object-fit: cover;
  }
`

const ColWrapper = styled.div`
  display: flex;
  gap: 1.4rem;
`

const EmptySeat = styled.span`
  display: inline-block;
  width: 2rem;
  height: 1.8rem;
`

const SeatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  padding: 4rem;
  margin-bottom: 6rem;
`

/* ------------------------------------------------------ */

// 스타일 컴포넌트를 객체로 묶어서 export default
const BS2 = {
  HeaderWrapper,
  CounterContainer,
  CounterWrapper,
  CounterBox,
  CounterTitle,
  AsideWrapper,
  BackDropLayer,
  AsideBtnWrapper,
  AsideInfoWrapper,
  SeatStatusContainer,
  SeatStatusWrapper,
  SelectSeatBodyWrapper,
  ColWrapper,
  EmptySeat,
  SeatWrapper,
  BoxCol,
  BoxRow,
}

export default BS2
