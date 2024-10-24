import React from 'react'
import { MsgBoxStyle } from '../SelectBody.style'

interface IErrorMessageProps {
  errorMsg: React.ReactNode
}

const ErrorMessage = ({ errorMsg }: IErrorMessageProps) => {
  return <MsgBoxStyle>{errorMsg}</MsgBoxStyle>
}

export default ErrorMessage
