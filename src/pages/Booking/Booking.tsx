import styled from 'styled-components'
import DateHeader from './ui/DateHeader/DateHeader'

const Booking = () => {
  return (
    <Container>
      <DateHeader />
    </Container>
  )
}

export default Booking

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 8rem;
`
