import styled from 'styled-components'

//style.ts
export const StyleLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54.8rem;
  height: 70rem;
  gap: 3rem;
  border: 1px solid #474747;
  border-radius: 0.8rem;
  background-color: #181818;
`
export const StyleLoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  height: 20rem;
`
export const StyleLoginTextWrapper = styled.div`
  height: 24rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;

  h1 {
    margin-bottom: 3rem;
    font-size: 4.8rem;
    font-weight: 700;
  }
  p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.34;
  }
`
