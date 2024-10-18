import { WeuiArrowOutlined } from '../../../assets/svg/WeuiArrowOutlined'
import { PrevBtn } from './ui.style'
import { IArrowButtonProps } from './ui.type'

const PrevButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <PrevBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </PrevBtn>
  )
}

export default PrevButton
