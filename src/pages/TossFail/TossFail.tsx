import { useNavigate } from 'react-router-dom'
import { LineMdAlertLoop } from '../../../public/svg/LineMdAlertLoop'
import { MainBtn } from '../../components/Button/style'
import { ErrorMsg } from '../KakaoCallback/KakaoCallback.styled'
import { commonColors } from '../../styles/theme'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import { ChargeContainer } from '../TossSuccess/style'

const TossFail = () => {
  const navigate = useNavigate()
  return (
    <ContainerLayout>
      <ChargeContainer>
        <ErrorMsg>
          <LineMdAlertLoop color={commonColors.warning} width={120} height={120} />
          <span>결제에 실패했습니다.</span>
          <MainBtn $size='large' onClick={() => navigate('/')}>
            메인으로 돌아가기
          </MainBtn>
        </ErrorMsg>
      </ChargeContainer>
    </ContainerLayout>
  )
}

export default TossFail
