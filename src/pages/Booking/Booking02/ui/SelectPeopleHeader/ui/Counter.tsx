import styled from 'styled-components'
import CounterBtn from './CounterBtn'

interface ICounterProps {
  age?: '성인' | '청소년'
}

const Counter = ({ age }: ICounterProps) => {
  return (
    <Container>
      <CounterTitle>{age}</CounterTitle>
      <Wrapper>
        <CounterBtn ico='minus' />
        <p>0</p>
        <CounterBtn ico='plus' />
      </Wrapper>
    </Container>
  )
}

export default Counter

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

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
