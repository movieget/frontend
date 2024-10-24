import { useNavigate } from 'react-router-dom'
import { MainBtn } from '../../../../../../components/Button/style'
import { NextBtnWrapper } from '../SelectBody.style'

interface IBNextButtonProps {
  isTimeSelected: boolean
  isValid: boolean
}

const BNextButton = ({ isTimeSelected, isValid }: IBNextButtonProps) => {
  const navigate = useNavigate()
  const validate = isValid && isTimeSelected
  const handleClick = () => {
    if (validate) {
      navigate('?page=booking02')
    } else {
      alert('시간을 선택해주세요!')
    }
  }
  return (
    <NextBtnWrapper>
      <MainBtn $size='large' onClick={handleClick} $disabled={!validate}>
        다음
      </MainBtn>
    </NextBtnWrapper>
  )
}

export default BNextButton
