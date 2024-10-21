import React from 'react'
import styled from 'styled-components'
import { IconoirStar } from '../../assets/svg/IconoirStar'

const StarRating: React.FC<{
  rating?: number // rating은 선택적 prop으로 수정
  onRatingChange: (newRating: number) => void
  userId: string // userId prop 추가
  disabled?: boolean // disabled prop 추가
  value?: number // value prop 추가
}> = ({ rating = 1, onRatingChange, userId, disabled = false, value }) => {
  const initialRating = value !== undefined ? Math.max(value, 1) : Math.max(rating, 1)

  return (
    <RatingBox>
      {[1, 2, 3, 4, 5].map((value) => (
        <RatingItem key={value}>
          <RatingInput
            type='radio'
            id={`rate-${userId}-${value}`}
            name={userId}
            value={value}
            checked={initialRating === value}
            onChange={() => onRatingChange(value)}
            disabled={disabled}
          />
          <RatingLabel htmlFor={`rate-${userId}-${value}`} disabled={disabled}>
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
