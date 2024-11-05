import styled from 'styled-components'
import { BtnBox } from '../../style'
import { BasicBtn, MainBtn } from '../../../../components/Button/style'

const Withdrawal = () => {
  return (
    <WithdrawalBox>
      <WithdrawaQuestion>정말 탈퇴 하시겠어요?</WithdrawaQuestion>
      <BtnBox>
        <BasicBtn $size='large'>네</BasicBtn>
        <MainBtn $size='large'>아니오</MainBtn>
      </BtnBox>
    </WithdrawalBox>
  )
}

export default Withdrawal

const WithdrawalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  min-height: 58rem;
  padding: 2.4rem 4rem;
  font-weight: 800;
  background-color: #1b1b1b;
  border: 1px solid #474747;
`
const WithdrawaQuestion = styled.p`
  font-size: 4.8rem;
`
