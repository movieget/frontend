import BS1 from '../../../Booking01.styled'
import { WeuiArrowOutlined } from '../../../../../../../public/svg/WeuiArrowOutlined'
import { IArrowButtonProps } from '../../../Booking01.types'

const NextButton = ({ onClick }: IArrowButtonProps) => {
  return (
    <BS1.CustomBtn onClick={onClick}>
      <WeuiArrowOutlined />
    </BS1.CustomBtn>
  )
}

export default NextButton
