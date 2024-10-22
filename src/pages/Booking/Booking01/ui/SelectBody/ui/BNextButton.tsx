import { useNavigate } from 'react-router-dom'
import { MainBtn } from '../../../../../../components/Button/style'
import { NextBtnWrapper } from '../SelectBody.style'

const BNextButton = () => {
  const navigate = useNavigate()
  return (
    <NextBtnWrapper>
      <MainBtn $size='large' onClick={() => navigate('?page=booking02')}>
        다음
      </MainBtn>
    </NextBtnWrapper>
  )
}

export default BNextButton
