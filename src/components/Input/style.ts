import styled from 'styled-components'

interface InputBoxProps {
  $width?: string
  $radius?: string
}

// input
export const InputBox = styled.span<InputBoxProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  width: ${({ $width }) => $width || 'auto'};
  radius: ${({ $radius }) => $radius || '0.4rem'};
`
export const Input = styled.input<InputBoxProps>`
  width: ${(props) => props.width || '100%'};
  height: 4rem;
  padding: 0 1.2rem;
  border: 1px solid;
  border-color: #3f3f3f;
  border-radius: ${({ $radius }) => $radius || '0.4rem'};

  &:focus {
    outline: 1px solid;
    outline-color: #6321f2;
    outline-offset: -1px;
  }
`

// textarea
interface TextareaProps {
  $width?: string
}

export const TextareaBox = styled.span<TextareaProps>`
  display: flex;
  gap: 0.8rem;
  width: ${({ $width }) => $width || '100%'};
`
export const Textarea = styled.textarea<TextareaProps>`
  width: ${({ $width }) => $width || '100%'};
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
