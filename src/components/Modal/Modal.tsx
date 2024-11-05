import styled from 'styled-components'
import { BasicBtn, MainBtn } from '../Button/style'

interface ModalProps {
  title?: string
  content?: React.ReactNode
  onClose?: () => void
  onBtnClick?: () => void
  btnText?: string
}

const Modal = ({ title, content, onClose, onBtnClick, btnText }: ModalProps) => {
  return (
    <>
      <ModalContainer>
        <BlackBg onClick={onClose} />
        <ModalWrapper>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{content}</ModalContent>
          <ModalFooter>
            <BasicBtn $size='large' onClick={onClose}>
              닫기
            </BasicBtn>
            <MainBtn $size='large' onClick={onBtnClick}>
              {btnText}
            </MainBtn>
          </ModalFooter>
        </ModalWrapper>
      </ModalContainer>
    </>
  )
}

export default Modal

const ModalContainer = styled.div``
const BlackBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 10;
`
const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 51.2rem;
  padding: 0 2.4rem;
  background-color: #1b1b1b;
  border: 1px solid #474747;
  border-radius: 0.8rem;
  z-index: 11;
`
const ModalTitle = styled.h2`
  display: flex;
  align-items: center;
  height: 6.8rem;
  font-size: 2.4rem;
  font-weight: 700;
  border-bottom: 1px solid #494949;
`
const ModalContent = styled.div`
  max-height: 50rem;
  padding: 2.4rem 0;
  border-bottom: 1px solid #494949;
  overflow: auto;
`
const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 8rem;
`
