import styled from 'styled-components'

// input
export const InputBox = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  width: ${(props) => props.width || 'auto'};
`
export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 4rem;
  padding: 0 1.2rem;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 0.4rem;

  &:focus {
    outline: 1px solid;
    outline-color: #6321f2;
    outline-offset: -1px;
  }
`

// textarea
export const TextareaBox = styled.span`
  display: flex;
  gap: 0.8rem;
  width: ${(props) => props.width || '100%'};
`
export const Textarea = styled.textarea`
  width: ${(props) => props.width || '100%'};
  height: 12.4rem;
  padding: 1.2rem;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: 0.4rem;
  resize: none;

  &:focus {
    outline: 1px solid;
    outline-color: #6321f2;
    outline-offset: -1px;
  }
`
