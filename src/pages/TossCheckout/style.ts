import styled from 'styled-components'

//style.ts
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202632;

  img {
    width: 12rem;
  }
`
const PayButton = styled.button`
  width: 24rem;
  height: 6rem;
  font-size: 2rem;
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #0064ff;
`
const S = {
  Container,
  PayButton,
}

export default S
