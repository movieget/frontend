import { WeuiArrowOutlined } from '../../../../assets/svg/WeuiArrowOutlined.tsx'
import { NextBtn } from './dateHeader.style.ts'
import { IHanlderProps } from './dateHeader.type.ts'

const NextButton = ({ handler }: IHanlderProps) => {
  return (
    <NextBtn onClick={handler}>
      <WeuiArrowOutlined />
    </NextBtn>
  )
}

export default NextButton
