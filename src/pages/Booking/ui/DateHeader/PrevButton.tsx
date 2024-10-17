import { WeuiArrowOutlined } from '../../../../assets/svg/WeuiArrowOutlined'
import { PrevBtn } from './dateHeader.style'
import { IHanlderProps } from './dateHeader.type'

const PrevButton = ({ handler }: IHanlderProps) => {
  return (
    <PrevBtn onClick={handler}>
      <WeuiArrowOutlined />
    </PrevBtn>
  )
}

export default PrevButton
