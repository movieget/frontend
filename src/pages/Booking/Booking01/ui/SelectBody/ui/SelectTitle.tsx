import BS1 from '../../../Booking01.styled'
import { ISelectTitleProps } from '../../../Booking01.types'

const SelectTitle = ({ title = '타이틀' }: ISelectTitleProps) => {
  return <BS1.SelectTitleStyle>{title}</BS1.SelectTitleStyle>
}

export default SelectTitle
