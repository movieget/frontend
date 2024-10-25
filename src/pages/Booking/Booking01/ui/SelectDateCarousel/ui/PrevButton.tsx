import { WeuiArrowOutlined } from '../../../../../../assets/svg/WeuiArrowOutlined'
import { PrevBtn } from '../SelectDateCarousel.styled'
import { IArrowButtonProps } from '../SelectDateCarousel.types'

const PrevButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <PrevBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </PrevBtn>
  )
}

export default PrevButton
