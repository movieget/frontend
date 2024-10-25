import { WeuiArrowOutlined } from '../../../../../../assets/svg/WeuiArrowOutlined'
import { NextBtn } from '../SelectDateCarousel.styled'
import { IArrowButtonProps } from '../SelectDateCarousel.types'

const NextButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <NextBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </NextBtn>
  )
}

export default NextButton
