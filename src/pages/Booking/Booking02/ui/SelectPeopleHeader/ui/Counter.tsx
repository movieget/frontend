import styled from 'styled-components'
import CounterBtn from './CounterBtn'

const Counter = () => {
  return (
    <>
      <CounterTitle>성인</CounterTitle>
      <Wrapper>
        <CounterBtn ico='minus' />
        <p>0</p>
        <CounterBtn ico='plus' />
      </Wrapper>
    </>
  )
}

export default Counter

const Wrapper = styled.div`
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
