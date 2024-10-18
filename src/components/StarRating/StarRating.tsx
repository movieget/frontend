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
  // value가 있으면 그 값을 사용하고, 아니면 기존 rating 사용
  // rating의 최소값은 1
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

// 스타일드 컴포넌트
const RatingBox = styled.div`
  display: flex;
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
  cursor: pointer;
`
