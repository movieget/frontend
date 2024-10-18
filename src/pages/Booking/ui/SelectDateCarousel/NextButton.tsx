import { WeuiArrowOutlined } from '../../../../assets/svg/WeuiArrowOutlined'
import { NextBtn } from './SelectDateCarousel.style'
import { IArrowButtonProps } from './SelectDateCarousel.type'

const NextButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <NextBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </NextBtn>
  )
}

export default NextButton
