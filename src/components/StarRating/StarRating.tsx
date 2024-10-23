import React from 'react'
import styled from 'styled-components'
import { IconoirStar } from '../../assets/svg/IconoirStar'

interface StarRatingProps {
  rating?: number
  onRatingChange?: (newRating: number) => void
  userId?: string
  disabled?: boolean
  value?: number
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 1,
  onRatingChange,
  userId,
  disabled = false,
  value,
}) => {
  const initialRating = value !== undefined ? Math.max(value, 1) : Math.max(rating, 1)

  return (
    <RatingBox>
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingItem key={value}>
          <RatingInput
            type='radio'
            id={`rate-${userId || 'default'}-${value}`} // userId가 없을 경우 'default' 사용
            name={userId || 'default'} // userId가 없을 경우 'default' 사용
            value={value}
            checked={initialRating === value}
            onChange={() => onRatingChange && onRatingChange(value)} // onRatingChange가 정의된 경우에만 호출
            disabled={disabled}
          />
          <RatingLabel htmlFor={`rate-${userId || 'default'}-${value}`} disabled={disabled}>
            <IconoirStar fill={initialRating >= value ? '#E08403' : 'transparent'} />
          </RatingLabel>
        </RatingItem>
      ))}
    </RatingBox>
  )
}

export default StarRating

const RatingBox = styled.div`
  display: inline-flex;
  gap: 2px;
`
const RatingItem = styled.div`
  display: flex;
  align-items: center;
`
const RatingInput = styled.input`
  display: none;
`
const RatingLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'pointer')}; // disabled일 때 커서 스타일 변경
`
