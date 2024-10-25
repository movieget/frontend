import styled from 'styled-components'
import { LineMdEmojiNeutral } from './LineMdEmojiNeutral'

const NoImageCard = ({ $width, $height, $marginTop }: INoImageCardProps) => {
  return (
    <CardStyle $width={$width} $height={$height} $marginTop={$marginTop}>
      <LineMdEmojiNeutral />
      <CardDesc>이미지가 없음</CardDesc>
    </CardStyle>
  )
}

export default NoImageCard

interface INoImageCardProps {
  $width?: string
  $height?: string
  $marginTop?: string
}

const CardStyle = styled.div<INoImageCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: ${({ $width }) => $width || '14rem'};
  height: ${({ $height }) => $height || 'auto'};
  margin-top: ${({ $marginTop }) => $marginTop || '0'};
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.colors.bg_box};
  border: 1px solid #3f3f3f;
  border-radius: 0.4rem;
`
const CardDesc = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`
