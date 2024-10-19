import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import prettier from 'prettier/standalone'
import parserTypeScript from 'prettier/parser-typescript'

// Define styles using styled-components
const CodeContainer = styled.pre`
  background-color: #2d2d2d;
  padding: 1.6rem;
  border-radius: 8px;
  color: #f8f8f2;
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1.4rem;
  position: relative;
`

const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

// TypeScript interface for component props
interface FormattedCodeBlockProps {
  code: string
}

// Main component
const FormattedCodeBlock: React.FC<FormattedCodeBlockProps> = ({ code }) => {
  const [formattedCode, setFormattedCode] = useState<string>(code)

  useEffect(() => {
    const formatCode = async () => {
      try {
        const formatted = await prettier.format(code, {
          parser: 'typescript',
          plugins: [parserTypeScript],
          semi: true,
          singleQuote: true,
        })
        setFormattedCode(formatted)
      } catch (error) {
        console.error('Error formatting code:', error)
        setFormattedCode(code) // Fallback to unformatted code
      }
    }

    formatCode()
  }, [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedCode)
      alert('코드가 복사되었습니다!')
    } catch (err) {
      console.error('Failed to copy:', err)
      alert('복사 실패!')
    }
  }

  return (
    <CodeContainer>
      <CopyButton onClick={handleCopy}>복사</CopyButton>
      <code>{formattedCode}</code>
    </CodeContainer>
  )
}

export default FormattedCodeBlock
