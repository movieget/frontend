import BS1 from '../../../Booking01.styled'
import { WeuiArrowOutlined } from '../../../../../../assets/svg/WeuiArrowOutlined'
import { IArrowButtonProps } from '../../../Booking01.types'

const PrevButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <BS1.PrevBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </BS1.PrevBtn>
  )
}

export default PrevButton
