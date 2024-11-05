import styled from 'styled-components'

interface IContainerLayoutProps {
  children: React.ReactNode
}

const ContainerLayout = ({ children }: IContainerLayoutProps) => {
  return <Container>{children}</Container>
}

export default ContainerLayout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  padding: 0 4rem;
  margin: 0 auto;
`
