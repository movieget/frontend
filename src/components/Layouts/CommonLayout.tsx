import styled from 'styled-components'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface CommonLayoutProps {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default CommonLayout

const Main = styled.main`
  width: 100%;
  /* height: 100%; */
  min-height: calc(100% - 30rem);
  height: auto;
  margin-top: 74px;
`
