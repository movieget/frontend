import BS1 from '../../../Booking01.styled'
import { IErrorMessageProps } from '../../../Booking01.types'

const ErrorMessage = ({ errorMsg }: IErrorMessageProps) => {
  return <BS1.MsgBoxStyle>{errorMsg}</BS1.MsgBoxStyle>
}

export default ErrorMessage
