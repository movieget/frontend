import BS2 from '../../../Booking02.styled'

interface ISeatWrapperProps {
  children: React.ReactNode
}

const SeatWrapper = ({ children }: ISeatWrapperProps) => {
  return <BS2.SeatWrapper>{children}</BS2.SeatWrapper>
}

export default SeatWrapper
