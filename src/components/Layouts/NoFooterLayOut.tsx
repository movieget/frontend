import styled from 'styled-components'
import Header from '../Header/Header'

interface NoFooterLayoutProps {
  children: React.ReactNode
}

const NoFooterLayout = ({ children }: NoFooterLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default NoFooterLayout

const Main = styled.main`
  width: 100%;
  min-height: calc(100% - 30rem);
  height: auto;
  margin-top: 74px;
`
