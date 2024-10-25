import { WeuiArrowOutlined } from '../../../../../../assets/svg/WeuiArrowOutlined'
import { IArrowButtonProps } from '../../../Booking01.types'
import BS1 from '../../../Booking01.styled'

const ArrowButton = ({ onClick, type }: IArrowButtonProps) => {
  const btnType = type ? 'next' : 'prev'
  return (
    <>
      {btnType ? (
        <BS1.CustomBtn onClick={onClick}>
          <WeuiArrowOutlined />
        </BS1.CustomBtn>
      ) : (
        <BS1.PrevBtn onClick={onClick}>
          <WeuiArrowOutlined />
        </BS1.PrevBtn>
      )}
    </>
  )
}

export default ArrowButton
