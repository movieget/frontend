import styled from 'styled-components'

interface IPageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return <Container>{children}</Container>
}

export default PageLayout

const Container = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 0 4rem;
  margin: 0 auto;
`
