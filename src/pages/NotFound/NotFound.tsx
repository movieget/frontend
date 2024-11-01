import { useNavigate } from 'react-router-dom'
import { MainBtn } from '../../components/Button/style'
import ContainerLayout from '../../components/Layouts/ContainerLayout'
import styled from 'styled-components'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <ContainerLayout>
      <NotFoundWrapper>
        {/* 애니메이션 svg 라이센스 관련 */}
        <a href='https://storyset.com/online'> </a>
        <img src='../../../public/img/404NotFound.svg' width={'50%'} height={'50%'} />
      </NotFoundWrapper>
      <TextWrapper>
        <span>존재하지 않는 페이지에요!</span>
        <MainBtn $size='large' onClick={() => navigate('/')}>
          메인으로 돌아가기
        </MainBtn>
      </TextWrapper>
    </ContainerLayout>
  )
}

export default NotFound

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 350%);

  span {
    font-size: 4rem;
  }
`
