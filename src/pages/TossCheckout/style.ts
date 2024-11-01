import styled, { keyframes } from 'styled-components'

const displayPaymentUI = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

//style.ts
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 12rem;
  }
`

const PayCard = styled.div`
  width: 100%;
  max-width: 42rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border_normal};
  background-color: ${({ theme }) => theme.colors.bg_wrapper};
  border-radius: 4px;
  box-shadow: 0 0 5px 0 rgba(0 0 0 0.2);
  gap: 2rem;
  animation: ${displayPaymentUI} 1s ease-in-out;

  h2 {
    width: 100%;
    display: flex;
    justify-content: start;
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border_normal};
    padding-bottom: 2rem;
    margin-bottom: 4rem;
  }

  p {
    width: 100%;
    display: flex;
    justify-content: start;
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_thin};
  }
`
const PayButton = styled.button`
  width: 100%;
  height: 6rem;
  font-size: 2rem;
  border: none;
  border-radius: 6px;
  position: relative;
  background-color: #0064ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  img {
    position: absolute;
    width: 24px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  span {
    color: #fefefe;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
    text-align: center;
    margin-left: 24px;
  }
`

const PayInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3rem;

  span {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    margin-bottom: 1.4rem;
  }

  input {
    width: 100%;
    padding: 1.6rem 1.2rem;
    border: 1px solid #cecece;
    border-radius: 4px;
  }
`

const PayAmountWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  span {
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fonts.weight.light_bold};
  }
`

const PayInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  span {
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }
`
const S = {
  Container,
  PayButton,
  PayCard,
  PayInfoWrapper,
  PayInputWrapper,
  PayAmountWrapper,
}

export default S
