import styled from 'styled-components'

interface ISeatWrapperProps {
  children: React.ReactNode
}

const SeatWrapper = ({ children }: ISeatWrapperProps) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default SeatWrapper

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  padding: 4rem;
  margin-bottom: 6rem;
`
