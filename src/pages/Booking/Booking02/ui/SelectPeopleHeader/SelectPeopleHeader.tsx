import styled from 'styled-components'
import { StyledWrapper } from '../../../Booking01/ui/SelectDateCarousel/SelectDateCarousel.style'
import Counter from './ui/Counter'

const SelectPeopleHeader = () => {
  return (
    <HeaderWrapper>
      <CounterWrapper>
        <Counter age='성인' />
        <Counter age='청소년' />
      </CounterWrapper>
    </HeaderWrapper>
  )
}

export default SelectPeopleHeader

const HeaderWrapper = styled(StyledWrapper)`
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`
