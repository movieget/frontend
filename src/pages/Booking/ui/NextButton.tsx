import { WeuiArrowOutlined } from '../../../assets/svg/WeuiArrowOutlined'
import { NextBtn } from './ui.style'
import { IArrowButtonProps } from './ui.type'

const NextButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <NextBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </NextBtn>
  )
}

export default NextButton
