import styled from 'styled-components'

export const ErrorMsg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  span {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 4rem;
  }
`
