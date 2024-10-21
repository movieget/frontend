import styled from 'styled-components'

export const RatingBox = styled.div`
  display: flex;
  gap: 2px;
`
export const RatingItem = styled.div`
  display: flex;
  align-items: center;
`
export const RatingInput = styled.input`
  display: none;
`
export const RatingLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')};
`
