import styled from 'styled-components'

export const ErrorMsg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 4rem;
  }
`
