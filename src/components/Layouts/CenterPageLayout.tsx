import styled from 'styled-components'

interface ICenterPageLayoutProps {
  children: React.ReactNode
}

const CenterPageLayout = ({ children }: ICenterPageLayoutProps) => {
  return <Container>{children}</Container>
}

export default CenterPageLayout

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 1280px;
  padding: 0 4rem;
  margin: 0 auto;
`
