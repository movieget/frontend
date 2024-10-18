import styled from 'styled-components'
import Header from '../Header/Header'

interface CommonLayoutProps {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default CommonLayout

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
