import { SelectTitleStyle } from '../SelectBody.style'

interface ISelectTitleProps {
  title?: string
}

const SelectTitle = ({ title = '타이틀' }: ISelectTitleProps) => {
  return <SelectTitleStyle>{title}</SelectTitleStyle>
}

export default SelectTitle
