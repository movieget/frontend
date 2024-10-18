import styled from 'styled-components'

export const CustomArrow = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextBtn = styled(CustomArrow)``

export const PrevBtn = styled(CustomArrow)`
  transform: rotate(-180deg);
`

export const DateButton = styled(CustomArrow)<{ $week: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  padding: 1rem 0;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fonts.weight.thin};
  color: ${({ $week, theme }) =>
    $week === '일' ? theme.colors.error : $week === '토' ? '#007BFF' : theme.colors.text};
  border-radius: 4px;

  span {
    position: absolute;
    top: -1rem;
    font-family: inherit;
    white-space: nowrap;
  }

  p {
    font-family: inherit;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg_btn_normal};
  }
`
