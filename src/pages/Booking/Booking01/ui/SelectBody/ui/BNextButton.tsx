import { MainBtn } from '../../../../../../components/Button/style'
import { NextBtnWrapper } from '../SelectBody.style'

interface IBNextButtonProps {
  handler?: React.MouseEventHandler<HTMLButtonElement>
}

const BNextButton = ({ handler }: IBNextButtonProps) => {
  return (
    <NextBtnWrapper>
      <MainBtn $size='large' onClick={handler}>
        다음
      </MainBtn>
    </NextBtnWrapper>
  )
}

export default BNextButton
