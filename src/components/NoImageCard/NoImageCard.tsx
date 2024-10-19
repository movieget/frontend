import styled from 'styled-components'
import { LineMdEmojiNeutral } from './LineMdEmojiNeutral'

const NoImageCard = () => {
  return (
    <CardStyle>
      <LineMdEmojiNeutral />
      <CardDesc>이미지가 없음</CardDesc>
    </CardStyle>
  )
}

export default NoImageCard

interface INoImageCardProps {
  $width?: string
}

const CardStyle = styled.div<INoImageCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: ${({ $width }) => $width || '14rem'};
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.colors.bg_box};
  border-radius: 0.4rem;
`
const CardDesc = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`
